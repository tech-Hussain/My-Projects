from tkinter import *
from PIL import ImageTk, Image


def retreive(info):
    f = open(info)
    content = f.read()
    f.close()
    return content


newspaper = Tk()
newspaper.state('zoomed')
newspaper.title("E-newspaper developed BY Syed Muhammad Hussain")
titlephoto = PhotoImage(file="t.png")
newspaper.iconphoto(False, titlephoto)
frame1 = Frame(newspaper)
frame1.pack(side=LEFT, anchor="nw")
photo1 = Image.open("1.png")
photo1 = photo1.resize((520, 320), Image.ANTIALIAS)
photo1 = ImageTk.PhotoImage(photo1)
content1 = StringVar()
fhead1 = Label(frame1, text="Openers should not be changed after every one or two series: Misbah ul Haq",
               font="Serif 18 bold underline italic", wraplength=600)
fhead1.pack(anchor="nw", pady="20")
date1 = Label(frame1, text="February 9, 2021", font="Serif 9 underline italic")
date1.pack(anchor="nw")
label2 = Label(frame1, image=photo1, width=440)
label2.pack(anchor="nw", padx="80", pady="10")
label1 = Label(frame1, textvariable=content1, wraplength=600, justify=LEFT, font="Serif 11")
label1.pack(anchor="nw", padx="10")
content1.set(retreive("1.txt"))
frame2 = Frame(newspaper)
frame2.pack(side=RIGHT, anchor="ne")
fhead2 = Label(frame2, text="Eng vs Ind: James Anderson delivers reverse swing masterclass to Indian batsmen",
               font="Serif 18 bold underline italic", wraplength=600)
fhead2.pack(anchor="ne", pady="25")
date2 = Label(frame2, text="February 9, 2021", font="Serif 9 underline italic")
date2.pack(anchor="nw")
photo2 = Image.open("2.png")
photo2 = photo2.resize((520, 320), Image.ANTIALIAS)
photo2 = ImageTk.PhotoImage(photo2)
label3 = Label(frame2, image=photo2, width=440)
label3.pack(anchor="nw", padx="80", pady="10")
content2 = StringVar()
label4 = Label(frame2, textvariable=content1, wraplength=600, justify=LEFT, font="Serif 11")
label4.pack(anchor="nw", padx="10")
content1.set(retreive("2.txt"))
newspaper.mainloop()
