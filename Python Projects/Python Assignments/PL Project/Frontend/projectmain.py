from customtkinter import *
from PIL import Image
from appointment import openAppointment
set_appearance_mode("Dark")
set_default_color_theme("dark-blue")
app= CTk()
app.geometry("1000x800")
app.title("CareYour Centre")



topbar=CTkLabel(master=app,height=10, fg_color="white",text="")
topbar.pack(fill=X,side=TOP)
btmbar=CTkLabel(master=app,height=10, fg_color="white",text="")
btmbar.pack(fill=X,side=BOTTOM)
header=CTkLabel(master=app,text="CareYour Centre", text_color="white", font=("Aptos",70,"bold"))
header.place(relx=0.5,rely=0.2,anchor=CENTER )

interFrame=CTkFrame(master=app,fg_color="transparent",)
interFrame.place(relx = 0.5, rely = 0.5, anchor = CENTER)

confirmicon=Image.open("../Img/icons/confirm.png")
historyicon=Image.open("../Img/icons/history.png")

btn2=CTkButton(master=interFrame,text="Book Appointment",corner_radius=15, font=("Helvetica",20),hover=True ,hover_color="#243959",image=CTkImage(confirmicon),command=openAppointment)
btn2.pack(side=LEFT,ipadx=20,ipady=15,padx=10)
btn3=CTkButton(master=interFrame,text="Patient History", corner_radius=15,font=("Helvetica",20),hover=True ,hover_color="#243959",image=CTkImage(historyicon))
btn3.pack(side=LEFT,ipadx=20,ipady=15,padx=10)
app.mainloop()