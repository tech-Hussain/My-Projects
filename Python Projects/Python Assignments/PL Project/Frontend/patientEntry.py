from customtkinter import *
from dbconnect import updatePatientData
from dbconnect import getPatientData

def openPatientsForm(docId,func,mainapp):

    def genderValue(value):
        gender_var.set(value)
    def submit_form():
        patient_id = 0
        patient_name = name_entry.get()
        patient_age = age_entry.get()
        patient_gender = gender_var.get()
        if patient_name=="":
            status_label.configure(text="Invalid Input")
        elif not(patient_age.isnumeric()):
            status_label.configure(text="Invalid Input")
        elif patient_gender == "Select":
            status_label.configure(text="Invalid Input")
        else:
            app.attributes('-topmost', 0)
            updatePatientData(patient_id,patient_name,patient_age,patient_gender,docId)
            app.destroy()
            func("All")
    def submit_form2():
        id=id_entry.get()
        if id=="":
            id=0
        data = getPatientData(id)
        if len(data)==0:
            status_label.configure(text="Invalid Input")
        else:
            app.attributes('-topmost', 0)
            updatePatientData(id, data[0][2], data[0][3], data[0][-3], docId)
            app.destroy()
            func("All")
    app = CTkToplevel(mainapp)
    mainapp.attributes('-topmost', 0)
    app.attributes('-topmost', 1)
    app.title("Patient Entry Form")

    app.geometry("440x320")
    set_appearance_mode("dark")
    app.maxsize(440,320)
    app.minsize(440,320)
    tabview = CTkTabview(master=app,width=400)
    tabview.pack(padx=20, pady=20)
    tabview.add("Already a User")
    tabview.add("New User")
    tabview.set("New User")
    frame = CTkFrame(tabview.tab("New User"),width=200 )
    frame.pack()



    name_label = CTkLabel(frame, text="Patient Name:",)
    name_label.grid(row=1, column=0, padx=5, pady=5)

    name_entry = CTkEntry(frame,width=200)
    name_entry.grid(row=1, column=1, padx=5, pady=5)


    age_label = CTkLabel(frame, text="Patient Age:")
    age_label.grid(row=2, column=0, padx=5, pady=5)

    age_entry = CTkEntry(frame,width=200)
    age_entry.grid(row=2, column=1, padx=5, pady=5)


    gender_label = CTkLabel(frame, text="Patient Gender:")
    gender_label.grid(row=3, column=0, padx=5, pady=5)

    gender_var = StringVar(value="Select")
    gender_combobox = CTkComboBox(frame, variable=gender_var, values=["Male", "Female",],width=200,command=genderValue)
    gender_combobox.grid(row=3, column=1, padx=5, pady=5)


    submit_button = CTkButton(frame, text="Submit", command=submit_form)
    submit_button.grid(row=4, column=0, columnspan=2, pady=10)
    frame2 = CTkFrame(tabview.tab("Already a User"), width=200)
    frame2.pack()
    id_label = CTkLabel(frame2, text="Enter Patient Id:", )
    id_label.grid(row=0, column=0, padx=5, pady=5, )

    id_entry = CTkEntry(frame2, width=200)
    id_entry.grid(row=0, column=1, padx=5, pady=5)
    submit_button2 = CTkButton(frame2, text="Submit", command=submit_form2)
    submit_button2.grid(row=4, column=0, columnspan=2, pady=10)
    status_label = CTkLabel(app, text="", font=("Arial",16,"bold"),text_color="red")
    status_label.pack()
    app.mainloop()