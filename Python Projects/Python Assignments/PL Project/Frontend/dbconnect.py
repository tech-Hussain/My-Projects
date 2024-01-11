import pyodbc
db_path = r'../Backend/Hospital Database.accdb'
conn_str = r'DRIVER={Microsoft Access Driver (*.mdb, *.accdb)};DBQ=' + db_path

def getDoctorData(data):
    conn = pyodbc.connect(conn_str)
    cursor = conn.cursor()
    choices=["All","General Physician", "Child Specialist","Cardiologists","Dermatologists","Gastroenterologists","Neurologists"]
    data=choices.index(data)
    if data==0:
        cursor.execute("SELECT [Doctors List].* FROM [Doctors List];")
    else:
        cursor.execute(f"SELECT  * FROM [Doctors List] WHERE [Doctors List].[Specialization id]={data}")
    rows = cursor.fetchall()
    specializtion={
        1:"General Physician",2:"Child Specialist",3:"Cardiologists",4:"Dermatologists",5:"Gastroenterologists",6:"Neurologists"
    }
    timespan={
        1:"4:30-6:00",2:"6:00-7:30",3:"7:30-9:00",4:"9:00-10:30"
    }
    days={
        1:"Mon-Wed-Fri",2:"Tue-Thurs-Sat",3:"Sunday"
    }
    updateData=[]
    for row in rows:
        row=list(row)
        row[2]=timespan.get(row[2])
        row[3]=days.get(row[3])
        row[4]=specializtion.get(row[4])
        row=tuple(row)
        updateData.append(row)
    cursor.close()
    conn.close()
    return updateData


# getDoctorData("All")