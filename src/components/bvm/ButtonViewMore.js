import React from 'react';
import './ButtonViewMore.css'

function ButtonViewMore({ onClick }) {
    return (
        <button onClick={onClick} className="view-more-btn">
            View more
        </button>
    );
}

export default ButtonViewMore;
