import sqlite3
import html


database_filename = "cards.db"
players_table = "players"


conn = sqlite3.connect("cards.db")
cur = conn.cursor()
cur.execute("CREATE TABLE IF NOT EXISTS 'players' ('username', 'face', 'suit', 'cardflow')")
cur2 = conn.cursor()


def players():
    return cur.execute("SELECT * FROM players")

def insert(card, user):
    id = user['username_id']
    f = card["face"]
    s = card["suit"]
    user = html.escape()
    cur.execute('INSERT INTO cards VALUES (?,?,?,?)', (id, f, s, user))

def get_player():
    playerDict = {}
    for row in cur2:
        id = row[0]
        f = row[1]
        s = row[2]
        c = row[3]
        playerDict = {"id": id, 'face': f, 'suit': s, "cardflow": c}
    return playerDict


conn.commit()



