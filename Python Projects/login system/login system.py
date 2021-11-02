import getpass_ak
print("This is login system developed in python by Syed Muhammad Hussain")
print("Create your account by entering following data")
username=input("Please enter your username\n")
email=input("Please enter your e-mail address\n")
if "@" in email and email.endswith(".com"):
    password=getpass_ak.getpass("Please Enter password ")
    repassword=getpass_ak.getpass("Please re-enter password ")
    if password==repassword:
        f=open("logindatabase.txt","a")
        a=f.write(f"Username:{username}\ne-mail:{email}\npassword:{password}\n")
        f.close()
        print("You have successfully signup in your account")
    else:
        print("Your password is not confirmed")
else:
        print("Enter valid email")
