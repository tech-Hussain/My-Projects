import pyodbc
db_path = r'../Backend/Hospital Database.accdb'
conn_str = r'DRIVER={Microsoft Access Driver (*.mdb, *.accdb)};DBQ=' + db_path

def getDoctorData():
    conn = pyodbc.connect(conn_str)
    cursor = conn.cursor()
    cursor.execute("SELECT [Doctors List].* FROM [Doctors List];")
    rows = cursor.fetchall()
    specializtion={
        1:"General Physician",2:"Child Specialist",3:"Cardiologists",4:"Dermatologists",5:"Gastroenterologists",6:"Neurologists"
    }
    
    for row in rows:
        row=list(row)


    cursor.close()
    conn.close()
    return rows
getDoctorData()