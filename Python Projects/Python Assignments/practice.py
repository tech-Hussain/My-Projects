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


