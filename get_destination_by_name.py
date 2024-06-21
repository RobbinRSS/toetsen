import sqlite3

def get_destination(destination_name):

    conn = sqlite3.connect('travel_db.db') # verkeerde connect
    cursor = conn.cursor()

    cursor.execute('SELECT * FROM destinations WHERE name = ?', (destination_name,))
    destination = cursor.fetchone()

    conn.close()

    return destination


