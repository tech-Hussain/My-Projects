# Q1
# familyTree={
#     "father":"S.M.Arif",
#     "mother":"Erum Zubi",
#     "Sibling":"S.M.Taimoor"
# }
# print(familyTree)
# maternalFamilyTree={
#     "GrandFather":"Khursheed Khan",
#     "GrandMother":"Aisha",
#     "Uncles":None,
#     "Aunts":None
# }
# paternalFamilyTree={
#     "GrandFather":"S.Fayyaz",
#     "GrandMother":"Qamarunnisa",
#     "Uncles":["Aqeel","Khalid","Tariq"],
#     "Aunts":["Humaira","Azra","Asma"]
# }
# familyTree.update({
#     "paternalFamily":paternalFamilyTree,
#     "maternalFamily":maternalFamilyTree
#                    })
# print(familyTree)

# Q2
# def phoneDirectory(names,phone_no):
#     directory={}
#     for i in range(len(names)):
#         directory.update({names[i]:phone_no[i]})
#     return directory
# def deletePHoneNo(phonedict,name):
#     phonedict.pop(name)
# names=["Ahmed","Minhal","Naveed","Hamza","Ali","Assam","Rafay","Danish","wahaj","Zain","Hassan","Raza"]
# phoneNo=["03232366589","03232366579","03232366584","03232366889","03232366581","03232376589","03332366589","03232361589","03232366586","03232366569","03222366589","03152366589"]
# phoneNoList=phoneDirectory(names,phoneNo)
# deletePHoneNo(phoneNoList,"Minhal")
# print("No of Entries in your phone Directory are",len(phoneNoList))

# Q3
# def hexASCII():
#     lowerCaseAscii={}
#     alphabets="abcdefghijklmnopqrstuvwxyz"
#     x=97
#     for i in alphabets:
#         lowerCaseAscii.update({i:str(x)})
#         x+=1
#     for i,j in lowerCaseAscii.items():
#         hexNum="{0:X}"
#         j=hexNum.format(int(j))
#         lowerCaseAscii.update({i:j})
#     print(lowerCaseAscii)
#
# hexASCII()

# # Q4
# def compareDishes(myDish,weekDish):
#     myDish=set(myDish.values())
#     weekDish=set(weekDish.values())
#     for i in myDish:
#         myDish.discard(i)
#         myDish.add(i.casefold())
#     for i in weekDish:
#         weekDish.discard(i)
#         weekDish.add(i.casefold())
#     sameDishes=myDish.intersection(weekDish)
#     if sameDishes:
#         print(f"Your these {len(sameDishes)} favourite dishes cooked in this week:")
#         for i in sameDishes:
#             print(i.capitalize())
#     else:
#         print("Sorry your no favourite dish cooked in this week")
# favDish={
#     "Vegetables":"Ladyfinger",
#     "Beef Item":"Beef Biryani",
#     "Chicken Item":"Chiken curry",
#     "Fish":"Palla",
#     "Fast Food":"Chicken Burger"
# }
# weekDish={
#     "Vegetables":"Brinjal",
#     "Beef Item":"Beef Nihari",
#     "Chicken Item":"Chiken curry",
#     "Fish":"Paplet",
#     "Fast Food":"Chicken burger"
# }
#
# compareDishes(favDish,weekDish)

# Q5
# def compareGuests(guestl1,guestl2):
#     familyLists=list(set(guestl1.keys()).union(set(guestl2.keys())))
#     finalFamilyList=[]
#     totalGuest=0
#     sameGuest=0
#     for i in familyLists:
#         if guestl1.get(i)==None:
#             members=list(guestl2.get(i))
#         elif guestl2.get(i)==None:
#             members=list(guestl1.get(i))
#         else:
#             members=list(set(guestl1.get(i)).union(set(guestl2.get(i))))
#             sameGuest=sameGuest+len(list(set(guestl1.get(i)).intersection(set(guestl2.get(i)))))
#         finalFamilyList.append(members)
#     for i in finalFamilyList:
#         totalGuest=totalGuest+len(i)
#     print(f"You have invited {len(familyLists)} families and total {totalGuest} guests (in which {sameGuest} guests are same in both lists) in your Sister's wedding")
#     for i in range(len(familyLists)):
#         print(f"{familyLists[i]}: {', '.join(finalFamilyList[i])}")
# myList={
#     "Azhar Uncle Family":["Azhar","Samina","Ali"],
#     "Danish Uncle Family":["Danish","Alina","Faiz"],
#     "Tabish Uncle Family":["Tabish","Nimra","Adnan"],
#     "Khalid Uncle Family":["Khalid","Sadaf","Aisha","Haider"],
#     "Faiza Aunt Family":["Faiza","Mehmood","Rashida","Salman"],
#     "Amreen Aunt Family":["Amreen","Aqeel","Bilal","Umer"]
# }
# parentsList={
#     "Azhar Uncle Family":["Azhar","Samina","Ali","Usman"],
#     "Danish Uncle Family":["Danish","Alina"],
#     "Khalid Uncle Family":["Khalid","Sadaf","Aisha","Maryam","Haider"],
#     "Faiza Aunt Family":["Faiza","Mehmood","Rashida","Laiba","Lubna","Salman"],
#     "Tariq Uncle Family":["Huzaifa","Ali","Saba","Samreen"],
#     "Amreen Aunt Family":["Amreen","Aqeel","Bilal","Umer","Imran"]
# }
#
# compareGuests(myList,parentsList)
