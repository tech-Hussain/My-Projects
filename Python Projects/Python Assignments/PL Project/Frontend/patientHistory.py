from customtkinter import *
import dbconnect


def openPatientHistory(mainapp):
    app=CTkToplevel(mainapp)
    mainapp.iconify()
    set_appearance_mode("Dark")
    set_default_color_theme("dark-blue")
    app.title("CareYour Centre")
    app.geometry("1100x700")

    def getSearch():
        import datetime
        id=idData.get()
        if id=="":
            id=0
        data=dbconnect.getPatientData(id)
        newData=[]
        if len(data)==0:
            for x in recordFrame.winfo_children():
                if isinstance(x, CTkLabel):
                    x.destroy()
            Nodata.configure(text="No Records Found")
        else:
            Nodata.configure(text="")
            for x in recordFrame.winfo_children():
                if isinstance(x, CTkLabel):
                    x.destroy()
            for row in data:
                newDatarow=[]
                for x in range(len((row))):
                    if x in (2,3,6,8):
                        newDatarow.append(row[x])
                    elif x ==4:
                        newDatarow.append(row[x].strftime("%I:%M:%S %p"))
                    elif x ==5:
                        newDatarow.append(row[x].strftime("%x"))
                newData.append(newDatarow)

            display_records(newData)


    entryFrame=CTkFrame(app,fg_color="transparent")
    entryFrame.pack(pady=80,anchor="center")
    idData=StringVar()
    idLabel=CTkLabel(entryFrame,text="Enter Id:",font=("Helvetica",20,"bold"),text_color="White")
    idLabel.grid(row=0,column=0)
    idEntry=CTkEntry(entryFrame,textvariable=idData,font=("Helvetica",17,"bold"),text_color="White")
    idEntry.grid(row=0,column=1,padx=10)
    searchBtn=CTkButton(entryFrame,text="Search", corner_radius=5, font=("Helvetica", 16),
                              hover=True, hover_color="#243959", width=115, height=30,command=getSearch)
    searchBtn.grid(row=1,column=0,columnspan=2,pady=30,)

    recordFrame=CTkFrame(app,fg_color="transparent")
    recordFrame.pack(anchor="center")
    Nodata=CTkLabel(app,text="" ,font=("Helvetica",25,"bold"),text_color="White")
    Nodata.pack()
    def display_records(records):
        row_index = 1  # Start from row 1 to leave row 0 for headers
        for record in records:
            # Display record ID
            record_id_label = CTkLabel(recordFrame, text=str(row_index)+")", width=10,font=("Helvetica", 16,"bold"),)
            record_id_label.grid(row=row_index, column=0, padx=10, pady=5)

            # Display other fields (adjust the number of columns accordingly)
            col_index = 1
            for field in record:
                field_label = CTkLabel(recordFrame, text=str(field),  width=25,font=("Helvetica", 16,))
                field_label.grid(row=row_index, column=col_index, padx=10, pady=5)
                col_index += 1

            row_index += 1
        header_labels = ["S.No", "Patient Name", "Age", "Appointment Time", "Appointment Date","Gender","Doctor Name"]
        for j in range(len(header_labels)):
            header_label = CTkLabel(recordFrame, text=header_labels[j], font=("Helvetica", 16,"bold"),  width=55)
            header_label.grid(row=0, column=j, padx=5, pady=5)
    app.mainloop()
# openPatientHistory()