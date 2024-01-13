from tkinter import *

root=Tk()
root.geometry("1005x800")
root.title("Scientific Calculator ")
root.configure(background="#202f41")
icon=PhotoImage(file="icon.png")
root.iconphoto(False,icon)
# Functions
def inputFunc(event):
    import math
    global labelStr
    global ansState
    text=event.widget.cget("text")
    try:
        if labelStr.get()=="Invalid Expression":
            labelStr.set("0")
        else:
            if text=="=":
                updatedVal=(labelStr.get()).replace("x","*")
                updatedVal=updatedVal.replace("^","**")
                labelStr.set(round((eval(updatedVal)),2))
                ansState=1
            elif text == "√":
                updatedVal = (labelStr.get()).replace("x", "*")
                updatedVal = updatedVal.replace("^", "**")
                labelStr.set(str(round((math.sqrt(int(eval(updatedVal)))), 2)))
                ansState = 1
            elif text == "sin" or text == "cos" or text == "tan":
                updatedVal = (labelStr.get()).replace("x", "*")
                updatedVal = updatedVal.replace("^", "**")
                if text == "sin":
                    labelStr.set(str(round((math.sin(int(eval(updatedVal)))), 2)))
                elif text == "cos":
                    labelStr.set(str(round((math.cos(int(eval(updatedVal)))), 2)))
                elif text == "tan":
                    labelStr.set(str(round((math.tan(int(eval(updatedVal)))), 2)))
                ansState = 1
            elif text=="CE":
                labelStr.set("0")
                ansState=0
            elif text=="DEL":
                ansState=0
                if len(labelStr.get())==1:
                    labelStr.set("0")
                else:
                    labelStr.set(labelStr.get()[0:-1])
            else:
                if text in "+-/x":
                    ansState=0
                if labelStr.get()=="0" or ansState==1:
                    labelStr.set(text)
                    ansState=0
                else:
                    if len(labelStr.get())<26:
                        if text == "x\u00b2":
                            text=text.replace("x\u00b2","^")
                        labelStr.set(labelStr.get()+text)
                        ansState=0
                    else:
                        labelStr.set(labelStr.get())
                        ansState=0
    except Exception as e:
        labelStr.set("Invalid Expression")

    panel.update()
# variables
labelStr=StringVar()
labelStr.set("0")
ansState=0
# GUI Design
mainBody=Frame(root,background="#1f747a",padx=10,pady=10)
mainBody.pack(side="top", padx=20,pady=80)
panel=Label(mainBody,width=25,height=1,textvariable=labelStr,fg="Black", font="STIX 15", bg="White",anchor="w",padx=6,pady=8)
panel.grid(row=1,column=1,columnspan=4,padx=10,pady=8)
ButtonsList=[["CE","DEL","x\u00b2","/"],["7","8","9","x"],["4","5","6","-"],["1","2","3","="],["0","√","+"],['sin','cos',"tan"]]
r,c=2,1
for i in ButtonsList:
    c=1
    for j in i:
         if j=="=":
             button = Button(mainBody, width=4, height=9, bg="White", text=j, fg="Black", font="STIX 15")
             button.grid(row=r, column=c, padx=11, pady=15,rowspan=3)
             button.bind("<Button-1>", inputFunc)
         else:
             button = Button(mainBody, width=4, height=1, bg="White", text=j, fg="Black", font="STIX 15",pady=6)
             button.grid(row=r, column=c, padx=11, pady=15)
             button.bind("<Button-1>", inputFunc)
         c+=1
    r+=1
root.mainloop()