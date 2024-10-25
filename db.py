import sqlite3


class Database:
    def __init__(self, db_name):
        self.conn = sqlite3.connect(db_name)
        self.cursor = self.conn.cursor()
        self.create_table()

    def create_table(self):
        self.cursor.execute(
            """
            CREATE TABLE IF NOT EXISTS items (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                description TEXT
            )
        """
        )
        self.conn.commit()

    def create(self, name, description):
        self.cursor.execute(
            """
            INSERT INTO items (name, description) VALUES (?, ?)
        """,
            (name, description),
        )
        self.conn.commit()
        return self.cursor.lastrowid

    def read(self, item_id=None):
        if item_id:
            self.cursor.execute(
                """
                SELECT * FROM items WHERE id = ?
            """,
                (item_id,),
            )
            return self.cursor.fetchone()
        else:
            self.cursor.execute(
                """
                SELECT * FROM items
            """
            )
            return self.cursor.fetchall()

    def update(self, item_id, name=None, description=None):
        if name and description:
            self.cursor.execute(
                """
                UPDATE items SET name = ?, description = ? WHERE id = ?
            """,
                (name, description, item_id),
            )
        elif name:
            self.cursor.execute(
                """
                UPDATE items SET name = ? WHERE id = ?
            """,
                (name, item_id),
            )
        elif description:
            self.cursor.execute(
                """
                UPDATE items SET description = ? WHERE id = ?
            """,
                (description, item_id),
            )
        self.conn.commit()

    def delete(self, item_id):
        self.cursor.execute(
            """
            DELETE FROM items WHERE id = ?
        """,
            (item_id,),
        )
        self.conn.commit()


# Приклад використання
if __name__ == "__main__":
    db = Database("example.db")

    # Створення запису
    item_id = db.create("Item 1", "Description 1")
    print(f"Created item with ID: {item_id}")

    # Читання всіх записів
    items = db.read()
    print("All items:", items)

    # Читання конкретного запису
    item = db.read(item_id)
    print(f"Item with ID {item_id}:", item)

    # Оновлення запису
    db.update(item_id, name="Updated Item 1", description="Updated Description 1")
    updated_item = db.read(item_id)
    print("Updated item:", updated_item)

    # Видалення запису
    db.delete(item_id)
    deleted_item = db.read(item_id)
    print("Deleted item:", deleted_item)
