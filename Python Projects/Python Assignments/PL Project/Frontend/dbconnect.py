import pyodbc
db_path = r'../Backend/Hospital Database.accdb'
conn_str = r'DRIVER={Microsoft Access Driver (*.mdb, *.accdb)};DBQ=' + db_path
from printpdf import generate_receipt
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

def updatePatientData(id,Name,Age,Gender,DocId):
    import datetime
    import os
    x = datetime.datetime.now()
    conn = pyodbc.connect(conn_str)
    cursor = conn.cursor()
    patient_query = "INSERT INTO Patients (PatientID,PatientName,Age,AppointTime,AppointDate,Gender,docId) VALUES (?, ?, ? ,?,?,?,?);"
    appointment_query = "UPDATE [Doctors List] SET Appointments = ? WHERE [Doctor ID] = ?"
    if id ==0:
        cursor.execute("SELECT Patients.PatientID FROM Patients;")
        rows = cursor.fetchall()
        newRow=[]
        if len(rows)==0:
            id=1
        else:
            for row in rows:
                newRow.append(row[0])
            newRow.sort()
            id=newRow[-1]+1
    cursor.execute(f"SELECT  Appointments FROM [Doctors List] WHERE [Doctors List].[Doctor ID]={DocId}")
    rows = cursor.fetchall()
    prevAppointments=rows[0][0]
    cursor.execute(patient_query, (id,Name,Age,x.strftime("%X"),x.strftime("%x"),Gender,DocId))

    cursor.execute(appointment_query, (prevAppointments+1,DocId))

    cursor.commit()
    cursor.execute(f"SELECT Patients.*, [Doctors List].[Doctor Name] FROM [Doctors List] INNER JOIN Patients ON [Doctors List].[Doctor ID] = Patients.docId WHERE (((Patients.PatientID)={id}));")
    resultRow=cursor.fetchall()
    lastRow=resultRow[-1]
    cursor.execute(f"SELECT [Doctors List].Appointments FROM [Doctors List] WHERE [Doctors List].[Doctor ID]={lastRow[-2]}")
    noofAppoint=cursor.fetchall()
    generate_receipt("Receipt.pdf",lastRow[1],lastRow[2],lastRow[3],lastRow[-3],lastRow[5].strftime("%x"),lastRow[4].strftime("%I:%M:%S %p"),lastRow[-1],noofAppoint[0][0])
    os.system("Receipt.pdf")
    cursor.close()
    conn.close()

def reset_appointments():
    conn = pyodbc.connect(conn_str)
    cursor = conn.cursor()
    appointment_reset_query = "UPDATE [Doctors List] SET Appointments = ? "
    cursor.execute(appointment_reset_query, (0))
    cursor.commit()
    cursor.close()
    conn.close()

def getPatientData(id):
    conn = pyodbc.connect(conn_str)
    cursor = conn.cursor()
    cursor.execute(f"SELECT Patients.*, [Doctors List].[Doctor Name] FROM [Doctors List] INNER JOIN Patients ON [Doctors List].[Doctor ID] = Patients.docId WHERE (((Patients.PatientID)={id}));")
    rows = cursor.fetchall()
    cursor.close()
    conn.close()
    return rows

# reset_appointments()
# updatePatientData(0,"h",12,"male",12)