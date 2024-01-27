import pyodbc
from customtkinter import *
db_path = r'Database3.accdb'
conn_str = r'DRIVER={Microsoft Access Driver (*.mdb, *.accdb)};DBQ=./Database3.accdb;'

connection = pyodbc.connect(conn_str)
cursor = connection.cursor()
deptid=0
# def dept(value):
#     global dept_var,deptid
#     dept={"Software Engineering":1,"CIS Engineering":2,"Mechanical Engineering":3,"Electrical Engineering":4}
#     deptid=dept.get(dept_var.get())
#
# def submit_form():
#     global deptid
#     name = name_entry.get()
#     salary = salary_entry.get()
#     designation = designation_entry.get()
#     cursor.execute("SELECT Tid FROM Teacher;")
#     rows = cursor.fetchall()
#     newRow = []
#     if len(rows) == 0:
#         id = 1
#     else:
#         for row in rows:
#             newRow.append(row[0])
#         newRow.sort()
#         id = newRow[-1] + 1
#     teacher_query = "INSERT INTO Teacher (Tid,tname,designation,salary,deptid) VALUES (?, ?, ? ,?,?);"
#     cursor.execute(teacher_query, (id, name, designation, salary, deptid))
#     cursor.commit()

# def display_records(records):
#     row_index = 1  # Start from row 1 to leave row 0 for headers
#     for record in records:
#         # Display record ID
#         record_id_label = CTkLabel(recordFrame, text=str(row_index) + ")", width=10, font=("Helvetica", 16, "bold"), )
#         record_id_label.grid(row=row_index, column=0, padx=10, pady=5)
#
#         # Display other fields (adjust the number of columns accordingly)
#         col_index = 1
#         for field in record:
#             field_label = CTkLabel(recordFrame, text=str(field), width=25, font=("Helvetica", 16,))
#             field_label.grid(row=row_index, column=col_index, padx=10, pady=5)
#             col_index += 1
#
#         row_index += 1
#     header_labels = ["S.No","DName", "Teacher Name", "Designation", "Salary", "Course Name", "Credit Hours",]
#     for j in range(len(header_labels)):
#         header_label = CTkLabel(recordFrame, text=header_labels[j], font=("Helvetica", 16, "bold"), width=55)
#         header_label.grid(row=0, column=j, padx=5, pady=5)

def delete_data():
       # Connection string for Microsoft Access database

        # Establish a connection to the database
        connection = pyodbc.connect(conn_str)
        cursor = connection.cursor()

        # Get the selected ID from the entry widget
        t_id = entry_id.get()

        # Execute the SQL DELETE statement
        query = f"DELETE FROM Teacher WHERE Tid = {t_id};"
        cursor.execute(query)

        # Commit the changes
        connection.commit()

        # Display a success message
        result_label.configure(text=f"Doctor with ID {t_id} deleted successfully.")


app=CTk()
header_labels =CTkLabel(app,text="University Data",font=("Helvetica", 36, "bold"),pady=35).pack()
recordFrame=CTkFrame(app,fg_color="transparent")
recordFrame.pack(anchor="center")
# cursor.execute("SELECT Dept.dname, Teacher.tname, Teacher.designation, Teacher.salary, Courses.cname, Courses.credithrs FROM (Dept INNER JOIN Teacher ON Dept.deptid = Teacher.deptid) INNER JOIN Courses ON Teacher.Tid = Courses.Tid; ")
# rows=cursor.fetchall()
# display_records(rows)

# name_label = CTkLabel(recordFrame, text="Teacher Name:", )
# name_label.grid(row=1, column=0, padx=5, pady=5)
#
# name_entry = CTkEntry(recordFrame, width=200)
# name_entry.grid(row=1, column=1, padx=5, pady=5)
#
# designation_label = CTkLabel(recordFrame, text="Designation:")
# designation_label.grid(row=2, column=0, padx=5, pady=5)
#
# designation_entry = CTkEntry(recordFrame, width=200)
# designation_entry.grid(row=2, column=1, padx=5, pady=5)
#
# salary_label = CTkLabel(recordFrame, text="Salary:")
# salary_label.grid(row=3, column=0, padx=5, pady=5)
#
# salary_entry = CTkEntry(recordFrame, width=200)
# salary_entry.grid(row=3, column=1, padx=5, pady=5)
#
# dept_label = CTkLabel(recordFrame, text="Departments:")
# dept_label.grid(row=4, column=0, padx=5, pady=5)
#
# dept_var = StringVar(value="Select")
# dept_combobox = CTkComboBox(recordFrame, variable=dept_var, values=["Software Engineering", "CIS Engineering","Mechanical Engineering","Electrical Engineering" ], width=200, command=dept)
# dept_combobox.grid(row=4, column=1, padx=5, pady=5)
#
# submit_button = CTkButton(recordFrame, text="Submit", command=submit_form)
# submit_button.grid(row=5, column=0, columnspan=2, pady=10)

entry_label = CTkLabel(app, text="Enter Teacher ID:")
entry_label.pack(pady=5)

entry_id = CTkEntry(app)
entry_id.pack(pady=5)

# Create a button to delete data
delete_button = CTkButton((app), text="Delete Teacher", command=delete_data)
delete_button.pack(pady=10)

# Create a label to display the result or error message
result_label = CTkLabel((app), text="")
result_label.pack(pady=10)
app.mainloop()