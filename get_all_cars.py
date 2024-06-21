import sqlite3

def get_all_cars():
    conn = sqlite3.connect('travel_db.db')
    cursor = conn.cursor()

    cursor.execute('SELECT * FROM cars')
    cars = cursor.fetchall()

    conn.close()

    return cars



