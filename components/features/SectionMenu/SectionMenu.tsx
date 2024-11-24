import './SectionMenu.css';
import FilterForm from '../FilterForm/FilterForm';
import React, {Dispatch, FC, FormEvent, useCallback, useEffect, useState} from 'react';
import {defaultDoctor, IDoctor} from "../../../intefaces/doctorInterfaces";
import PopUpDoctorForm from "../../entities/PopUpDoctorForm/PopUpDoctorForm";
import DoctorServices from "../../../services/DoctorServices";
import {ISearchOptions} from "../../../intefaces/commonInterfaces";
import SelectFilter from "../../common/SelectFilter/SelectFilter";

const priceOptions = [
    { value: 50, label: '< 50' },
    { value: 100, label: '< 100' },
    { value: 200, label: '< 200' },
    { value: 400, label: '< 400' }
];

const ratingOptions = [
    { value: 1, label: '1+' },
    { value: 2, label: '2+' },
    { value: 3, label: '3+' },
    { value: 4, label: '4+' }
];


interface SectionMenuProps {
    searchOptions: ISearchOptions;
    setSearchOptions: React.Dispatch<React.SetStateAction<ISearchOptions>>;
    doctors: IDoctor[];
    setDoctors: Dispatch<React.SetStateAction<IDoctor[]>>;
}

const SectionMenu: FC<SectionMenuProps> = ({searchOptions, setSearchOptions, doctors, setDoctors }) => {
    const [active, setActive] = useState<boolean>(false);
    const [newDoctor, setNewDoctor] = useState<IDoctor>(defaultDoctor);
    const [error, setError] = useState<string>('')
    const [countries, setCountries] = useState<string[]>([])

    const fetchDoctors = useCallback(async () => {
        const { data } = await DoctorServices.getDoctors(searchOptions);
        setDoctors(data as IDoctor[]);
    }, [setDoctors, searchOptions])

    const fetchCountries = async () => {
        const { data } = await DoctorServices.getCountries();
        setCountries(data as string[]);
    }

    useEffect(() => {
        fetchCountries().then();
    }, [doctors, searchOptions]);

    const handleNewDoctor = async (e: FormEvent) => {
        e.preventDefault();
        if (!newDoctor.name || !newDoctor.description || !newDoctor.price || !newDoctor.picture) {
            setError('All fields are required');
            return;
        }

        const isNameUnique = !doctors.some(doctor => doctor.name === newDoctor.name);
        if (!isNameUnique) {
            setError('Doctor name must be unique');
            return;
        }

        const currentDate = new Date();
        const isoDate = currentDate.toISOString();
        const doctorToAdd = {
            ...newDoctor,
            rate: Math.round((Math.random() * (5 - 0.5) + 0.5) * 10) / 10,
            updated_at: isoDate,
        };

        await DoctorServices.createDoctor(doctorToAdd);
        fetchDoctors().then();

        setActive(false);
        setError('');
        setNewDoctor(defaultDoctor);
    }
    console.log(doctors)
    return (
        <section className="section-menu">
            <div className="create">
                <button className="create-button" onClick={() => setActive(true)}>Create a doctor</button>
            </div>
            <div className="search-menu" id="search-menu">
                <form className='filter-form'>
                    <SelectFilter
                        label="Price"
                        options={priceOptions}
                        onChange={(e) => setSearchOptions(prev => ({...prev, price_le: Number(e.target.value)}))}
                    />
                    <SelectFilter
                        label="Rating"
                        options={ratingOptions}
                        onChange={(e) => setSearchOptions(prev => ({...prev, rate_ge: Number(e.target.value)}))}
                    />
                    <SelectFilter
                        label="Country"
                        options={countries.map(country => ({value: country, label: country}))}
                        onChange={(e) => setSearchOptions(prev => ({...prev, country: e.target.value}))}
                    />
                    <label className="input-buttons-menu">
                        Search:
                        <input
                            placeholder="Type something..."
                            onChange={(e) => setSearchOptions(prev => ({...prev, search: e.target.value}))}
                        />
                    </label>
                </form>
            </div>

            <PopUpDoctorForm
                doctor={newDoctor}
                setDoctor={setNewDoctor}
                handleSubmit={handleNewDoctor}
                error={error}
                headText="Add new doctor"
                active={active}
                setActive={setActive}
            />
        </section>
    );
};

export default SectionMenu;