from customtkinter import *

def openPatientsForm():

    def submit_form():

        patient_name = name_entry.get()
        patient_age = age_entry.get()
        patient_gender = gender_var.get()
        patient_id = id_entry.get()



    app = CTk()
    app.title("Patient Entry Form")

    app.geometry("308x200")
    app.maxsize(308,200)
    app.minsize(308,200)

    frame = CTkFrame(app,width=200 )
    frame.grid(row=0, column=0,)

    id_label = CTkLabel(frame, text="Patient Id:",)
    id_label.grid(row=0, column=0, padx=5, pady=5,)

    id_entry = CTkEntry(frame,width=200)
    id_entry.grid(row=0, column=1, padx=5, pady=5)

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
    gender_combobox = CTkComboBox(frame, variable=gender_var, values=["Male", "Female",],width=200)
    gender_combobox.grid(row=3, column=1, padx=5, pady=5)


    submit_button = CTkButton(frame, text="Submit", command=submit_form)
    submit_button.grid(row=4, column=0, columnspan=2, pady=10)


    app.focus_force()
    app.lift()
    app.mainloop()
