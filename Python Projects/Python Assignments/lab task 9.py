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
#
#     item_prices = {"tshirt": 10, "jeans": 20, "dress pant": 15, "jacket": 25, "sweater": 30}
#
#     items_sold = []
#
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
#
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
#
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
# dog_purchases = 83
# cat_purchases = 101
# fish_purchases = 22
# dog_and_cat_purchases = 31
# dog_and_fish_purchases = 8
# cat_and_fish_purchases = 10
# dog_cat_fish_purchases = 6
# other_purchases = 34
#
# dog_only = dog_purchases - dog_and_cat_purchases - dog_and_fish_purchases + dog_cat_fish_purchases
# cat_only = cat_purchases - dog_and_cat_purchases - cat_and_fish_purchases + dog_cat_fish_purchases
# fish_only = fish_purchases - dog_and_fish_purchases - cat_and_fish_purchases + dog_cat_fish_purchases
# total_purchases = dog_only + cat_only + fish_only + dog_and_cat_purchases + dog_and_fish_purchases + cat_and_fish_purchases + other_purchases
#
# print("i.   Purchases for a dog product only:", dog_only)
# print("ii.  Purchases for a cat product only:", cat_only)
# print("iii. Purchases for a dog or a fish product:", dog_only + dog_and_fish_purchases)
# print("iv.  Total purchases:", total_purchases)

# Q7
# totalStudents=110
# englishSpeakers=75
# frenchSpeakers=50
# spanishSpeakers=52
# english_french_Speakers=30
# english_spanish_Speakers=33
# french_spanish_Speakers=22
# english_french_spanish_Speakers=13
#
# englishOnly=englishSpeakers-english_french_Speakers-english_spanish_Speakers+english_french_spanish_Speakers
# frenchOnly=frenchSpeakers-english_french_Speakers-french_spanish_Speakers+english_french_spanish_Speakers
# spanishOnly=spanishSpeakers-english_spanish_Speakers-french_spanish_Speakers+english_french_spanish_Speakers
#
# english_spanishOnly=englishOnly+spanishOnly+english_spanish_Speakers-english_french_spanish_Speakers
# noLang=totalStudents-frenchSpeakers-english_spanishOnly
# anyTwolangSpeakers=english_french_Speakers+english_spanish_Speakers+french_spanish_Speakers-(english_french_spanish_Speakers)*3
# print("The no of students who can speak English and Spanish but not French are:",english_spanishOnly)
# print("The students who speak Neither English, Spanish, nor French are:",noLang)
# print("The students who can speak French, but neither English nor Spanish are:",frenchOnly)
# print("The students who can speak Only one of the three languages are:",frenchOnly+spanishOnly+englishOnly)
# print("The students who can speak Exactly two of the three languages are:",anyTwolangSpeakers)
