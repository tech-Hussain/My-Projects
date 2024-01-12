from customtkinter import *
from tkinter import StringVar
from PIL import Image
import dbconnect
from patientEntry import openPatientsForm

def openAppointment():
    def on_frame_configure(event):
        canvas.configure(scrollregion=canvas.bbox("all"))
        canvas.itemconfigure(1, width=(app.winfo_width()) - 20)
    def patientForm(x):
        print(x)
        openPatientsForm(12)
    set_appearance_mode("Dark")
    set_default_color_theme("dark-blue")
    app = CTkToplevel()
    app.geometry("1000x800")
    app.minsize(1300, 1000)
    def displayRecords(val):
        for x in DoctorMainFrame.winfo_children():
            if isinstance(x, CTkFrame):
                x.destroy()
        docChoice_var.set(val)
        Doctordata = dbconnect.getDoctorData(docChoice_var.get())
        for i in Doctordata:
            childDoctorFrame = CTkFrame(master=DoctorMainFrame, fg_color="#d6d6d6")
            childDoctorFrame.pack(fill=X, side=TOP, pady=15, )
            DocName = CTkLabel(master=childDoctorFrame, text=i[1], font=("Helvetica", 45, "bold"), text_color="#404247")
            DocName.place(relx=0.02, rely=0.15, )
            DocField = CTkLabel(master=childDoctorFrame, text=i[4], font=("Helvetica", 25, "bold"),
                                text_color="#5a5c63")
            DocField.place(relx=0.02, rely=0.45)
            DocDuration = CTkLabel(master=childDoctorFrame, text=i[3], font=("Helvetica", 15, "bold"),
                                   text_color="#646870")
            DocDuration.place(relx=0.02, rely=0.65)
            DocTime = CTkLabel(master=childDoctorFrame, text=i[2], font=("Helvetica", 15, "bold"),
                               text_color="#646870")
            DocTime.place(relx=0.02, rely=0.79)

            profilePic = Image.open(f"../Img/Docpics/{i[5]}")
            DocPic = CTkLabel(master=childDoctorFrame, text="", height=220, width=250,
                              image=CTkImage(profilePic, size=(200, 200)))
            DocPic.place(relx=0.99, rely=0.5, anchor="e")

            Docbtn = CTkButton(master=childDoctorFrame, text="Book ", corner_radius=10, font=("Helvetica", 18),
                                   hover=True, hover_color="#243959", width=75, height=40,command=lambda :patientForm(i))
            Docbtn.place(relx=0.3, rely=0.7, )
            Docappoint = CTkLabel(master=childDoctorFrame, text=f"No of Appointments: {i[6]}", font=("Helvetica", 17,"bold")
                                   , width=75, height=40,text_color="#646870")
            Docappoint.place(relx=0.45, rely=0.7, )
            app.update()
    def selectDocs(choice):
        displayRecords(choice)


    app.title("CareYour Centre")
    header = CTkLabel(master=app, text="Appointment Dashboard", font=("Helvetica", 55), text_color="White")
    header.pack(side=TOP, fill=X, pady=40)
    separator = CTkLabel(master=app, text="", fg_color="Dark Blue", height=10)
    separator.pack(fill=X)
    canvas = CTkCanvas(master=app)

    canvas.pack(fill=BOTH, expand=True,)
    scrollbar = CTkScrollbar(master=canvas, command=canvas.yview)

    scrollbar.pack(side=RIGHT, fill=Y)
    DoctorMainFrame = CTkFrame(master=canvas, fg_color="transparent", )
    DoctorMainFrame.bind("<Configure>", on_frame_configure)
    app.update()

    app.bind("<Configure>", on_frame_configure)
    canvas.create_window((0, 0), window=DoctorMainFrame, anchor="nw")

    canvas.configure(yscrollcommand=scrollbar.set)
    docChoice_var = StringVar(value="All")



    docChoice = CTkComboBox(DoctorMainFrame,
                            values=["All", "General Physician", "Child Specialist", "Cardiologists", "Dermatologists",
                                    "Gastroenterologists", "Neurologists"],
                            command=selectDocs, variable=docChoice_var)
    docChoice.pack(anchor="e")
    displayRecords("All")
    app.lift()
    app.mainloop()


openAppointment()
