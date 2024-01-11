from customtkinter import *
from PIL import Image
import dbconnect
def openAppointment():
    def on_frame_configure(event):
        canvas.configure(scrollregion=canvas.bbox("all"))
        canvas.itemconfigure(1,width=(app.winfo_width())-20)
    Doctordata=dbconnect.getDoctorData()
    print(Doctordata)
    set_appearance_mode("Dark")
    set_default_color_theme("dark-blue")
    app= CTkToplevel()
    app.geometry("1000x800")
    app.minsize(1300,1000)
    app.title("CareYour Centre")
    header=CTkLabel(master=app,text="Appointment Dashboard",font=("Helvetica",55),text_color="White")
    header.pack(side=TOP,fill=X,pady=40)
    separator=CTkLabel(master=app,text="",fg_color="Dark Blue",height=10)
    separator.pack(fill=X)
    canvas = CTkCanvas(master=app)
    canvas.pack( fill=BOTH, expand=True)

    scrollbar = CTkScrollbar(master=canvas, command=canvas.yview)
    scrollbar.pack(side=RIGHT, fill=Y)

    DoctorMainFrame=CTkFrame(master=canvas,fg_color="transparent",)
    DoctorMainFrame.bind("<Configure>", on_frame_configure)
    app.update()
    app.bind("<Configure>", on_frame_configure)

    canvas.create_window((0,0), window=DoctorMainFrame, anchor="nw")
    canvas.configure(yscrollcommand=scrollbar.set)
    for i in range(20):
        childDoctorFrame=CTkFrame(master=DoctorMainFrame,fg_color="#d6d6d6")
        childDoctorFrame.pack(fill=X,side=TOP,pady=15,)
        DocName=CTkLabel(master=childDoctorFrame,text="Dr. Muhammad Sheraz", font=("Helvetica",45,"bold"),text_color="#404247")
        DocName.place(relx=0.02,rely=0.15,)
        DocField = CTkLabel(master=childDoctorFrame, text="General Surgeon", font=("Helvetica", 25 ,"bold"),
                            text_color="#5a5c63")
        DocField.place(relx=0.02, rely=0.45)
        DocDuration = CTkLabel(master=childDoctorFrame, text="Mon-Wed-Fri", font=("Helvetica", 15, "bold"),
                               text_color="#646870")
        DocDuration.place(relx=0.02, rely=0.65)
        DocTime = CTkLabel(master=childDoctorFrame, text="4:30-6:00", font=("Helvetica", 15, "bold"),
                           text_color="#646870")
        DocTime.place(relx=0.02, rely=0.79)

        profilePic=Image.open("../Img/Docpics/img.jpg")
        DocPic = CTkLabel(master=childDoctorFrame, text="",height=220,width=250,image=CTkImage(profilePic,size=(200,200)))
        DocPic.place(relx=0.99, rely=0.5,anchor="e")

        Docappoint = CTkButton(master=childDoctorFrame,text="Book ",corner_radius=10, font=("Helvetica",18),hover=True ,hover_color="#243959",width=75,height=40)
        Docappoint.place(relx=0.3, rely=0.7,)
        app.update()
        app.lift()
    app.mainloop()
openAppointment()





