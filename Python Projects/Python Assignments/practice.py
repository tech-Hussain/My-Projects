# x=[1,2,3,4,"ko",45]
# print(x[-1:0:-2])
# y=int(-2.33)
# print((y))
# x = ["wasim", "lubaid", "shahroz", "usman", "faisal", "farhan"]
# print("faisal" in x)

# def fact(num):
#     factAns=1
#     if num ==1 or num == 0:
#         return 1
#     else:
#         return num*fact(num-1)
#
# i=0
# while i<=10:
#     print("Factorial of",i,"is",fact(i))
#     i+=1
#
# x=[2,3,64,2,"j"]
# print(x.extend([58]))
# print(x)
# l=[1,2,69,87,45,69,3]
# l1=l.copy()
# if len(l)%2==0:
#     indexMid=(len(l))/2
#     print("Index of middle element is",int(indexMid))
#     print("Middle element is",l[int(indexMid)])
# else:
#     indexMid=(len(l)-1)/2
#     print("Index of middle element is",int(indexMid))
#     print("Middle element is",l[int(indexMid)])
# l.sort(reverse=True)
# x=l1.pop(0)
# l1.insert(len(l1),x)
# print(l)
# print(l1)

# first='John'
# middle='Fitzgerald'
# last='Kennedy'
# fullname=first+" "+middle+" "+last
# print(fullname)
# x=int(input("Enter no:"))
# y=int(input("Enter no:"))
# print(x)
# print(y)
# temp=x
# x=y
# y=temp
# print(x)
# print(y)
# x=int(input("Enter no of data calls:"))
# bill=0
# if (x<=100):
#     bill=2000
# elif x<=150:
#     bill=2000+(0.60*(x-100))
# elif x<=200:
#     bill=2000+(0.60*(150-100)+(0.50*(x-150)))
# elif x>200:
#     bill=2000+(0.60*(150-100)+(0.50*(200-150))+(0.40*(x-200)))
# print(bill)

import math
import os

# radius=5
# angvel=((5000)/60)*2*math.pi
# print(angvel)
# print((radius)/100*angvel)
#
# datalist = [300, 12.65, 5+6j, True, 'Faisal', (5, -7), [8, 52],{"color":'blue', "color":'red'}]
# for item in datalist:
#     print ("Type of ",item, " is ", type(item))

# for i in range(9,0,-1):
#     for j in range(i):
#         print("*",end="")
#     print()

# for i in range(3):
#     for j in range(3):
#         if i==1 and j==1:
#             print(" ",end="  ")
#         else:
#             print("*",end="  ")
#     print()

# def sum(n):
#     if n==1:
#         return 1
#     return n+sum(n-1)

# print(sum(11))

# def priority(x):
#     return x['priority']
# def schedule_surgeries(procedures):
#     # Sort procedures based on priority
#     procedures.sort(key=priority, reverse=True)
#
#     # Initialize schedule and available operating rooms
#     schedule = []
#     operating_rooms=[]
#     for i in range(1, 6):
#         operating_rooms .append({'id': i, 'available_time': 0})
#     # Schedule surgeries
#     for procedure in procedures:
#         best_room = find_best_room(procedure, operating_rooms)
#         if best_room:
#             schedule.append({'procedure': procedure, 'room': best_room['id'], 'start_time': best_room['available_time']})
#             best_room['available_time'] += procedure['duration']
#
#     return schedule
#
# def find_best_room(procedure, operating_rooms):
#     # Find the first available room with enough time for the procedure
#     for room in operating_rooms:
#         if room['available_time'] <= procedure['start_time']:
#             return room
#     return None
#
# # Example data
# procedures = [
#     {'name': 'Appendectomy', 'priority': 3, 'duration': 2, 'start_time': 0},
#     {'name': 'Cataract Surgery', 'priority': 2, 'duration': 3, 'start_time': 1},
#     {'name': 'Hip Replacement', 'priority': 1, 'duration': 4, 'start_time': 2},
#     # Add more procedures as needed
# ]
#
# # Run the scheduling algorithm
# schedule = schedule_surgeries(procedures)
# print(schedule)
# # Print the schedule
# for entry in schedule:
#     print(f"Procedure: {entry['procedure']['name']}, Room: {entry['room']}, Start Time: {entry['start_time']}")
#
# import tkinter as tk
#
# root = tk.Tk()
# container = tk.Frame(root)
# canvas = tk.Canvas(container)
# scrollbar = tk.Scrollbar(container, orient="vertical", command=canvas.yview)
# frame = tk.Frame(canvas,width=100)
#
# frame.bind("<Configure>",lambda e: canvas.configure(scrollregion=canvas.bbox("all"),width=e.width))
#
# canvas.create_window((0, 0), window=frame, anchor="nw")
#
# canvas.configure(yscrollcommand=scrollbar.set)
# container.pack()
# canvas.pack(side="left", fill="both", expand=True)
# scrollbar.pack(side="right", fill="y")
#
# for i in range(50):
#     tk.Label(frame, text=f"{i}:     example1_example2_example3_example4_example5_example6_example7_example8_example9_example10_example11_example12_example13_example14_example15_example16_").pack()
# root.update()
# x=root.winfo_width()
# print(x)
#
# root.mainloop()


# import customtkinter
#
#
#
# root = customtkinter.CTk()
# root.title("Main Window")
# def combobox_callback(choice):
#     print("combobox dropdown clicked:", choice)
#
# combobox_var = customtkinter.StringVar()
# combobox = customtkinter.CTkComboBox(root, values=["option 1", "option 2"],
#                                      command=combobox_callback, variable=combobox_var)
# combobox.pack()
# button = customtkinter.CTkButton(root, text="Open New Window", )
# button.pack()


# def optionmenu_callback(choice):
#     print("optionmenu dropdown clicked:", choice)
#
# optionmenu_var = customtkinter.StringVar(value="option 2")
# optionmenu = customtkinter.CTkOptionMenu(root,values=["option 1", "option 2"],
#                                          command=optionmenu_callback,
#                                          variable=optionmenu_var)
# optionmenu.pack()
# root.mainloop()


# import tkinter as tk
#
# def clear_selected_widgets():
#     # Iterate through the widgets in the frame
#     for widget in frame.winfo_children():
#         # Check if the widget is selected (you can use a specific condition)
#         if isinstance(widget, tk.Entry):
#             # Destroy the selected widget
#             widget.destroy()
#
# def some_condition(widget):
#     # Add your condition to determine if the widget should be cleared
#     # For example, you might want to clear Entry widgets or Labels based on a condition
#     return isinstance(widget, tk.Entry)
#
# # Create the main Tkinter window
# root = tk.Tk()
#
# root.title("Clear Widgets Example")
# frame = tk.Frame(root)
# frame.pack(padx=10, pady=10)
#
# # Example widgets in the frame
# label = tk.Label(frame, text="Label")
# label.pack()
#
# entry = tk.Entry(frame)
# entry.pack()
#
# button = tk.Button(frame, text="Clear Selected Widgets", command=clear_selected_widgets)
# button.pack()
#
# print(frame.winfo_children())# Create a frame to hold widgets
# # Run the Tkinter event loop
# root.mainloop()

# import tkinter as tk
#
# def button_callback(button_number):
#     print(f"Button {button_number} clicked!")
#
# root = tk.Tk()
# root.title("Button Example")
#
# # Number of buttons you want to create
# num_buttons = 5
#
# # List to store the buttons
# buttons = []
#
# # Create buttons using a for loop
# for i in range(num_buttons):
#     button = tk.Button(root, text=f"Button {i+1}", command=lambda num=i: button_callback(num))
#     button.pack()
#
# root.mainloop()
#
# import tkinter as tk
#
# def display_records(records):
#     row_index = 1  # Start from row 1 to leave row 0 for headers
#     for record in records:
#         # Display record ID
#         record_id_label = tk.Label(root, text=str(row_index), borderwidth=1, relief="solid", width=5)
#         record_id_label.grid(row=row_index, column=0, padx=5, pady=5)
#
#         # Display other fields (adjust the number of columns accordingly)
#         col_index = 1
#         for field in record:
#             field_label = tk.Label(root, text=str(field), borderwidth=1, relief="solid", width=15)
#             field_label.grid(row=row_index, column=col_index, padx=5, pady=5)
#             col_index += 1
#
#         row_index += 1
#
# # Sample records (replace this with your actual data)
# sample_records = [
#     ["Name1", "Age1", "City1"],
#     ["Name2", "Age2", "City2"],
#     ["Name3", "Age3", "City3"],
# ]
#
# # Create the main window
# root = tk.Tk()
# root.title("Table Display Without Treeview")
#
# # Display the header labels
# header_labels = ["ID", "Field1", "Field2", "Field3"]
# for j in range(len(header_labels)):
#     header_label = tk.Label(root, text=header_labels[j], font=("bold", 10), borderwidth=1, relief="solid", width=15)
#     header_label.grid(row=0, column=j, padx=5, pady=5)
#
# # Display the records
# display_records(sample_records)
#
# # Run the Tkinter event loop
# root.mainloop()
#
# from reportlab.pdfgen import canvas
# from reportlab.lib.pagesizes import letter
# from reportlab.lib import colors
#
# def generate_receipt(file_path, hospital_name, patient_id, patient_name, age, gender, appointment_date, appointment_time, doctor_name, doctor_timings, total_amount):
#     pdf = canvas.Canvas(file_path, pagesize=letter)
#
#     # Set font and font size
#     pdf.setFont("Helvetica-Bold", 16)  # Making the hospital name bold
#     pdf.drawCentredString(300, 770, hospital_name)
#
#     pdf.setFont("Helvetica", 12)
#
#     # Add receipt header
#     pdf.line(50, 755, 550, 755)
#
#     # Add patient information
#     pdf.drawString(50, 735, f"Patient ID: {patient_id}")
#     pdf.drawString(50, 720, f"Patient: {patient_name}")
#     pdf.drawString(50, 705, f"Age: {age}")
#     pdf.drawString(50, 690, f"Gender: {gender}")
#
#     # Add second column for appointment date and time
#     pdf.drawString(300, 735, f"Appointment Date: {appointment_date}")
#     pdf.drawString(300, 720, f"Appointment Time: {appointment_time}")
#
#     # Add doctor information
#     pdf.drawString(50, 670, f"Doctor: {doctor_name}")
#     pdf.drawString(50, 650, f"Doctor Timings: {doctor_timings}")
#
#     # Add total amount
#     pdf.drawString(50, 630, f"Total Amount: ${total_amount}")
#
#     # Draw a line before the footer
#     pdf.line(50, 60, 550, 60)
#
#     # Add receipt footer
#     pdf.drawString(50, 40, "Thank you for choosing our hospital!")
#
#     # Save the PDF document
#     pdf.save()
#
# if __name__ == "__main__":
#     receipt_info = {
#         'hospital_name': 'Your Hospital Name',
#         'patient_id': '123456',
#         'patient_name': 'John Doe',
#         'age': 30,
#         'gender': 'Male',
#         'appointment_date': '2024-01-13',
#         'appointment_time': '10:00 AM',
#         'doctor_name': 'Dr. Smith',
#         'doctor_timings': '9:00 AM - 5:00 PM',
#         'total_amount': 150
#     }
#
#     output_file = "hospital_receipt_with_id.pdf"
#     generate_receipt(output_file, **receipt_info)
#     print(f"Receipt generated successfully: {output_file}")


# # os.system("sample.txt")
# totalStudents=set(range(110))
# totalStudentsSpeak=set(range(105))
# englishSpeakers=set(range(75))
# frenchSpeakers=set(range(50))
# spanishSpeakers=set(range(52))
# # english_french_Speakers=set(range(30))
# english_spanish_Speakers=set(range(33))
# # french_spanish_Speakers=set(range(22))
# # english_french_spanish_Speakers=set(range(13))
#
# englishOnly=
# # frenchOnly=frenchSpeakers-english_french_Speakers-french_spanish_Speakers+english_french_spanish_Speakers
# # spanishOnly=spanishSpeakers-english_spanish_Speakers-french_spanish_Speakers+english_french_spanish_Speakers
#

# english_spanishOnly=totalStudentsSpeak.difference(frenchSpeakers)
# noLang=totalStudents.difference()
# # # anyTwolangSpeakers=english_french_Speakers+english_spanish_Speakers+french_spanish_Speakers-(english_french_spanish_Speakers)*3
# print("The no of students who can speak English and Spanish but not French are:",len(english_spanishOnly))
# print("The students who speak Neither English, Spanish, nor French are:",noLang)
# print("The students who can speak French, but neither English nor Spanish are:",frenchOnly)
# print("The students who can speak Only one of the three languages are:",frenchOnly+spanishOnly+englishOnly)
# print("The students who can speak Exactly two of the three languages are:",anyTwolangSpeakers)


# import tkinter as tk
#
# def open_second_window(update_function):
#     second_window = tk.Toplevel(first_window)
#     second_window.title("Second Window")
#     second_window.geometry("300x300")
#     btn_update_first_window = tk.Button(second_window, text="Update First Window", command=lambda: update_function())
#     btn_update_first_window.pack()
#
# def update_first_window():
#     # Update the first window based on the data received from the second window
#     x=tk.Label(first_window,text="hllo")
#     x.pack()
#
# first_window = tk.Tk()
# update_first_window()
# first_window.title("First Window")
# first_window.geometry("300x300")
# btn_open_second_window = tk.Button(first_window, text="Open Second Window", command=lambda: open_second_window(update_first_window))
# btn_open_second_window.pack()
#
# first_window.mainloop()

# Number of students in the camp
# Number of students in the camp
# Number of students in the camp
# Given data
# Given data

# Given data
# Given data
# Given data
# Given data
# BQNOO:
dog = set(range(1,39))|set(range(39,70))|set(range(70,78))|set(range(78,84))
cat = set(range(84,138))|set(range(39,70))|set(range(78,84))|set(range(138,148))
fish = set(range(70,78))|set(range(78,84))|set(range(138,148))|set(range(148,154))
others = set(range(154,188))
only_dogs = dog - (cat|fish)
print("people who purchased dog products only",len(only_dogs))
only_cats = cat - (fish|dog)
print("peopte who purchased cat products only",len(only_cats))
only_fish = fish - (cat|dog)
print("peopte who purchased fish products only",len(only_fish))
dog_or_fish = set(only_fish|only_dogs)
print("people who purchased dog or fish products only",len(dog_or_fish))

total_purchase = dog|cat|fish|others
print("total purchases",len(total_purchase))









