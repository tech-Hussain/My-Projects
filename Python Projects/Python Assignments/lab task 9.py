# Q1
# studentSet=set()
# for i in range(5):
#     studentSet.add(input("Enter Student name:"))
# print(studentSet)

# Q2
# friendSet={'minhal', 'naveed', 'hussain', 'huzaifa', 'ali'}
# # minhal and huzaifa leave the NED
# friendSet.remove("minhal")
# friendSet.remove("huzaifa")
# print(friendSet)

# Q3
# dishSet=set()
# print("Enter your any 5 favourite dishes")
# for i in range(5):
#     dishSet.add(input("Enter dish name:"))
# print(dishSet)
# for i in range(5):
#     dishSet.pop()
# print(dishSet)

# # Q4
# def shopping():
#     items_set = {"tshirt", "jeans", "dress pant", "jacket", "sweater"}
#     item_prices = {"tshirt": 10, "jeans": 20, "dress pant": 15, "jacket": 25, "sweater": 30}
#     items_sold = []
#     while items_set:
#         print("Available items:", items_set)
#         item_to_purchase = input("Enter the Item name to purchase (q to exit): ")
#
#         if item_to_purchase == "q" or item_to_purchase=="Q":
#             break
#
#         if item_to_purchase.casefold() in items_set:
#             items_set.remove(item_to_purchase.casefold())
#             items_sold.append(item_prices[item_to_purchase.casefold()])
#             print(f"Item {item_to_purchase} purchased successfully!")
#         else:
#             print("Invalid item number. Please try again.")
#     if items_sold:
#         total_amount = sum(items_sold)
#         max_amount = max(items_sold)
#         min_amount = min(items_sold)
#
#         print("\nTransaction Summary:")
#         print(f"Total amount of items sold: ${total_amount}")
#         print(f"Maximum amount of an item sold: ${max_amount}")
#         print(f"Minimum amount of an item sold: ${min_amount}")
#     else:
#         print("No items were sold.")
# shopping()

# Q5
# univerSet=set()
# for i in range(1,41):
#     univerSet.add(f"S{i}")
# setHockey=set()
# for i in range(1,22):
#     setHockey.add(f"S{i}")
# setCricket=set()
# for i in range(12,41):
#     setCricket.add(f"S{i}")
# cricketOnlySet=len(setCricket.difference(setHockey))
# print(f"Players who love only cricket are {cricketOnlySet}")

# # Q6
# dog = set(range(1,39))|set(range(39,70))|set(range(70,78))|set(range(78,84))
# cat = set(range(84,138))|set(range(39,70))|set(range(78,84))|set(range(138,148))
# fish = set(range(70,78))|set(range(78,84))|set(range(138,148))|set(range(148,154))
# others = set(range(154,188))
# only_dogs = dog - (cat|fish)
# print("people who purchased dog products only",len(only_dogs))
# only_cats = cat - (fish|dog)
# print("peopte who purchased cat products only",len(only_cats))
# only_fish = fish - (cat|dog)
# print("peopte who purchased fish products only",len(only_fish))
# dog_or_fish = set(only_fish|only_dogs)
# print("people who purchased dog or fish products only",len(dog_or_fish))
#
# total_purchase = dog|cat|fish|others
# print("total purchases",len(total_purchase))

# Q7
students=set(range(1,111))
eng=set(range(1,76))
span=set(range(1,14))|set(range(56,95))
fren=set(range(86,106))|set(range(1,14))|set(range(14,31))
onlyengnspan=(eng&span)-fren
onlyengnfren=(eng&fren)-span
onlyfrennspan=(fren&span)-eng
neither=students-(eng|span|fren)
allthree=eng&fren&span
onlyfren=fren-(eng|span)
onlyspan=span-(eng|fren)
onlyeng=eng-(span|fren)

print("Total Students =",len(students))
print("Students who speak English and Spanish but not French:",len(onlyengnspan))
print("Students who speak neither English, Spanish nor French:",len(neither))
print("Students who speak French, but neither English nor Spanish:",len(onlyfren))
print("Students who speak only one of the three languages:",len(onlyfren|onlyeng|onlyspan))
print("Students who speak exactly two of the three languages:",len((onlyengnfren|onlyfrennspan|onlyengnspan)-allthree))
