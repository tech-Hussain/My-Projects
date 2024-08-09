# nums=[3,2,4]
# target = 6
# def solution(nums,target):
#     i = 0
#     for k in range(len(nums) - 1):
#         for j in range(i + 1, len(nums)):
#             print(nums[i] + nums[j])
#             if (nums[i] + nums[j]) == target:
#                 print("success")
#                 return [i, j]
#         i = i + 1
# solution(nums,target)

# l1 = [9,9,9,9,9,9,9]
# l2 = [9,9,9,9]
# def addTwoNumbers( l1, l2):
    # l1str=""
    # l2str=""
    # finallist=[]
    # l1reverse=reversed(l1)
    # l2reverse=reversed(l2)
    # for x in l1reverse:
    #     l1str+=str(x)
    # for x in l2reverse:
    #     l2str+=str(x)
    # l3int=str(int(l1str)+int(l2str))
    # for x in range(len(l3int)-1 , -1,-1):
    #     finallist.append(int(l3int[x]))
    # return finallist
# print(addTwoNumbers(l1, l2))

# def ispalindrome(x):
#     if str(x)==str(x)[::-1]:
#         return True
#     else:
#         return False
#
# print(ispalindrome(-121))

# def romantoint(str):
#     romanvar={
#         'I':1,
#         'V':5,
#         'X':10,
#         'L':50,
#         'C':100,
#         'D':500,
#         'M':1000
#     }
#     exceptionvar={
#         'IV':4,
#         'IX':9,
#         'XL':40,
#         'XC':90,
#         'CD':400,
#         'CM':900
#     }
#     splitVar=[]
#     while(1):
#         x=0
#         for i in exceptionvar.keys():
#             if i in str:
#                 splitVar.append(i)
#                 str=str.replace(i,"")
#                 x=x+1
#         if x==0:break
#     while (1):
#         x = 0
#         for i in romanvar.keys():
#             if i in str:
#                 splitVar.append(i)
#                 str = str.replace(i, "",1)
#                 x = x + 1
#         if x == 0: break
#     sum=0
#     for i in splitVar:
#         if romanvar.get(i):
#             sum=sum+romanvar.get(i)
#         else:
#             sum=sum+exceptionvar.get(i)
#     return sum
#
# print(romantoint("III"))

# def longcommonprefix(strs):
#     status=0
#     limit=0
#     index=0
#     element=0
#     if len(strs)>1:
#         while(element<len(strs)-1):
#             if strs[element][index]==strs[element+1][index]:
#                 status=1
#             else:status=0
#             if (element==len(strs)-2) and (status==1) :
#                 element=0
#                 index=index+1
#                 limit+=1
#             else:element+=1
#             if status==0:
#                 break
#     else:limit=len(strs[0])
#     return strs[0][0:limit]
# print(longcommonprefix(["",""]))

# def removeduplicates(nums):
    # k=0
    # uniqueElementsList=[]
    # for i in range(0,len(nums)):
    #     if nums[i] not in uniqueElementsList:
    #         uniqueElementsList.append(nums[i])
    #         k=k+1
    # for i in range(0,len(uniqueElementsList)):
    #     nums[i]=uniqueElementsList[i]
    # return k
# print(removeduplicates([0,0,1,1,1,2,2,3,3,4]))

# def removeelement(nums,val):
#     occurences=nums.count(val)
#     k=len(nums)-occurences
#     for i in range(occurences):
#         nums.remove(val)
#     return k
# print(removeelement([0,1,2,2,3,0,4,2],2))

# def strStr(haystack, needle):
#     if needle in haystack:
#         return haystack.find(needle)
#     else:
#         return -1
# print(strStr("leetcode","leeto"))

# def lengthOfLastWord(s):
#     return len(s.split()[-1])
# print(lengthOfLastWord("   fly me   to   the moon  "))

# def plusone(digits):
#     carry=0
#     status=0
#     newlist=[]
#     if digits[-1]!=9:
#         digits[-1]+=1
#         return digits
#     else:
#         for i in range(len(digits)-1,-1,-1):
#             if digits[i]==9:
#                 status+=1
#             else:break
#         if status==len(digits):
#             for i in range(0,len(digits)+1):
#                 if i==0:
#                     newlist.append(1)
#                 else:
#                     newlist.append(0)
#             print("1st")
#             return newlist
#         else:
#             for i in range(-1,-status-2,-1):
#                 if i==-status-1:
#                     print(digits[i])
#                     digits[i]+=1
#                 else:
#                     digits[i]=0
#
#             print("2nd")
#             print(status)
#             return digits
# print(plusone([8,9,9,9]))


# def longestcommonprefix(strs):
    # minlength=len(strs[0])
    # limit=0
    # status=1
    # for i in strs:
    #     if len(i)<minlength:
    #         minlength=len(i)
    # for j in range(0,minlength):
    #     for i in range(0,len(strs)-1):
    #         if strs[i][j]!=strs[i+1][j]:
    #             status=0
    #             break
    #     if status==0:break
    #     limit+=1
    #
    #
    # return strs[0][0:limit]
# print(longestcommonprefix(["dog","racecar","car"]))

# def validparathensis(s):
    # status=0
    # validbrackets=["()","{}","[]"]
    # if len(s)%2==0:
    #     pair=int(len(s)/2)
    #     for i in validbrackets:
    #         count=s.count(i)
    #         status+=count
    #
    #     if status==pair:return True
    #     else:return False
    #
    # else:return False

# print(validparathensis("(]"))


# def reversePrefix( word, ch):
#     temp=word.split(ch,1)
#     if len(temp)>1:
#         return ch+temp[0][::-1]+temp[1]
#     else:return word
#
# print(reversePrefix('abcd','z'))

# def findmaxk(nums):
#     positiveint=list(filter(lambda x: x>0,nums))
#     negativeint=list(filter(lambda x: x<0,nums))
#     sameint=list(filter((lambda x: -x in negativeint),positiveint))
#     if len(sameint)==0:return -1
#     else:return max(sameint)

# print(findmaxk([-1,10,6,7,-7,1]))

# def compareVersion(version1, version2):
#     l1=version1.split(".")
#     l1= list(map(lambda x:int(x),l1))
#     l2=version2.split(".")
#     l2= list(map(lambda x:int(x),l2))
#     maxlen=max(len(l1),len(l2))
#     if len(l1)>len(l2):
#         for i in range(maxlen-len(l2)):
#             l2.append(0)
#     else:
#         for i in range(maxlen-len(l1)):
#             l1.append(0)
#     for i in range(maxlen):
#         if l1[i]>l2[i]:
#             return 1
#         elif l1[i]<l2[i]:
#             return -1
#         else:
#             continue
#     else:
#         return 0
# print(compareVersion('0.1','1.1'))
# import time
# start_time = time.time()
#
#
# def numRescueBoats( people, limit):
#     length=0
#     # megaList=[]
#     people.sort(reverse=True)
#     while len(people)>0:
#         megaList=[people[0]]
#         # megaList.append([people[0]])
#         length+=1
#         people.pop(0)
#         for j in range(len(people)):
#             if megaList[0]+people[j]<=limit:
#                 megaList.append(people[j])
#                 people.pop(j)
#                 break
#     return length

# def convert( s, numRows):
#         i=0
#         sindex=0
#         string=""
#         wholelist=[]
#         goD=True
#         goU=False
#         for j in range(numRows):
#             wholelist.append([])
#         if numRows==1:
#             return s
#         else:
#             while True:
#                 if i==0:
#                     goD=True
#                     goU=False
#                 elif i==numRows-1:
#                     goU=True
#                     goD=False
#                 if sindex==len(s):break
#                 wholelist[i].append(s[sindex])
#                 sindex+=1
#                 if goD:i+=1
#                 elif goU:i-=1
#             for k in range(numRows):
#                 string+="".join(wholelist[k])
#             return string
# print(convert("AB",1))

# def longestPalindrome(s):
#     palArr=[]
#     maxlen=0
#     maxInd=0
#     for i in range(len(s)):
#         for j in range(len(s)-1,i,-1):
#             if s[j]==s[i]:
#                 substr=s[i:j+1]
#                 if substr==substr[::-1]:
#                     palArr.append(substr)
#     print(palArr)
#     if len(palArr)==0:
#         return s[0]
#     for x in range(len(palArr)):
#         if len(palArr[x])>maxlen:
#             maxlen=len(palArr[x])
#             maxInd=x
#     return palArr[maxInd]
#
# print(longestPalindrome("abcba"))


# def replaceWords( dictionary, sentence):
#     orgsentenLIst=sentence.split()
#     copysentlist=orgsentenLIst[::]
#     dictionary.sort(key=lambda x: len(x))
#     for i in range(len(copysentlist)):
#         for j in dictionary:
#             if copysentlist[i][0:len(j)]==j:
#                 orgsentenLIst[i]=j
#                 break
#     return " ".join(orgsentenLIst)
#
# print(replaceWords(["a", "aa", "aaa", "aaaa"], "a aa a aaaa aaa aaa aaa aaaaaa bbb baba ababa"))


# def isNStraightHand(hand, groupSize):
#     grouplist=[]
#     grouptemplist=[]
#     length=int(len(hand)/groupSize)
#     if len(hand)%groupSize==0:
#         for i in range(length):
#             grouptemplist.append(min(hand))
#             hand.remove(min(hand))
#             while len(grouptemplist)<groupSize:
#                 for j in hand:
#                     if (j-grouptemplist[-1])==1:
#                         grouptemplist.append(j)
#                         hand.remove(j)
#             grouplist.append(grouptemplist)
#             grouptemplist=[]
#
#         for i in grouplist:
#             if len(i)!=groupSize:
#                 return False
#         else:
#             return True
#     else:
#         return False
#
# print(isNStraightHand([1,2,3,4,5,6],  2))

# def checkSubarraySum(nums, k):
#     n=2
#     for i in range(len(nums)):
#         for j in range(i+n):
#             if sum(nums[i:j+1])%k==0:
#                 print(sum(nums[i:j+1]))
#                 return True
#         n+=1
#     return False
#

# print(checkSubarraySum( [23,2,4,6,6],7))

# def transformSentence(sentence):
#     newsent=""
#     listsent=sentence.split(" ")
#
#     for i in listsent:
#         for x in range(len(i)):
#             if x==0:
#                 newsent+=i[x]
#             elif i[x-1].casefold()<i[x].casefold():
#                 newsent+=i[x].upper()
#             elif i[x].casefold()<i[x-1].casefold():
#                 newsent+=i[x].lower()
#             else:
#                 newsent+=i[x]
#         newsent+=" "
#     return newsent
# print(transformSentence("UDaxiHhEXDvxrCSnBacgHqTArgwuWRnHOSIZaYzfwnKIegYkdCmDlLTiZBxORdmCRjuTLSGWcBVHyJchDMioulfLLGViWVUCTUFR"))


# def findMedianSortedArrays( nums1, nums2):
#     nums1.extend(nums2)
#     nums1.sort()
#     length=len(nums1)
#     print(7/2)
#     if length%2==0:
#         return (nums1[int(length/2)]+nums1[int(length/2)-1])/2
#     else:
#         return nums1[int((length-1)/2)]
# print(findMedianSortedArrays([1,2],[3,4]))
#
# def reverse(x:int):
#     strnum= str(x)
#     newsrt= 0
#     if strnum[0]=="-":
#         newsrt=int("-"+strnum[:0:-1])
#     else:
#         newsrt=int(strnum[::-1])
#     print(newsrt)
#     if newsrt >= pow(-2,31) and newsrt<=(pow(2,31)-1):
#         return newsrt
#     else:
#         return 0
#
# print(reverse(-123))

# def atoi(s:str):
#     s=s.strip()
#     num=""
#     intnum=0
#     negflag=False
#     for i in range(len(s)):
#         if s[i]=="-" and i==0:
#             negflag=True
#         elif s[i]=="+" and i==0:
#             negflag=False
#         else:
#             if s[i].isnumeric():
#                 num+=s[i]
#             else:break
#
#     if len(num)>0:
#         if negflag:
#             intnum=int("-"+num)
#         else:
#             intnum=int(num)
#     else:
#         intnum=0
#     if intnum<pow(-2,31):
#         intnum=pow(-2,31)
#     elif intnum>(pow(2,31)-1):
#         intnum=(pow(2,31)-1)
#
#     return intnum
#
# print(atoi("+1"))

# def get_all_substrings(s):
#     substrings = []
#     length = len(s)
#     for i in range(length):
#         for j in range(i + 1, length + 1):
#             substrings.append(s[i:j])
#     return substrings
#
# def lengthOfLongestSubstring(s: str):
#
#     length = len(s)
#     max=0
#     for i in range(length):
#         for j in range(i + 1, length + 1):
#             # substrings.append(s[i:j])
#
#             charstr=""
#             for k in s[i:j]:
#                 if k not in charstr:
#                     charstr+=k
#                 else:
#                     charstr=""
#                     break
#
#             if len(charstr)>max:
#                 max=len(charstr)
#     return max
#
# print(lengthOfLongestSubstring("abcabcbb"))

# def intToRoman(num: int) :
#     # strnum=str(num)
    # length=len(strnum)
    # digitsplit=[]
    # result=""
    # romanvar = {
    #         'I':1,
    #         'V':5,
    #         'X':10,
    #         'L':50,
    #         'C':100,
    #         'D':500,
    #         'M':1000
    #     }
    # exceptionvar={
    #         'IV':4,
    #         'IX':9,
    #         'XL':40,
    #         'XC':90,
    #         'CD':400,
    #         'CM':900
    #     }
    # for i in range(length):
    #     digitsplit.append(int(strnum[i]+"0"*(length-1-i)))
    # for i in digitsplit:
    #     minnum=i
    #     while i!=0:
    #         maxchar=""
    #         for x,y in exceptionvar.items():
    #             if y==i:
    #                 result+=x
    #                 i=0
    #                 break
    #         if i>0:
    #             for x,y in romanvar.items():
    #                 if y<=i:
    #                     if abs(y-i)<=minnum :
    #                         minnum=abs(y-i)
    #                         maxchar=x
    #             result+=maxchar
    #             if i>0 :
    #                 i-=romanvar.get(maxchar)
    # return result

# print(intToRoman(3749))


# def searchInsert( nums:list, target):
#     nums.sort()
#     # if target in nums:
#     #     position=nums.index(target)
#     #     return position
#     # else:
#     if target>max(nums):
#         return len(nums)
#     elif target<min(nums):
#         return 0
#     start,end=0,len(nums)
#     middle=int(len(nums)/2)
#     while target!=nums[middle]:
#         middle=int((start+end)/2)
#         if target>nums[middle]:
#             start=middle
#         else:
#             end=middle
#         print(start,middle,end)
#         if start==middle and end-middle==1:
#              return middle+1
#     return middle
#
#
# print(searchInsert([1,3],2))

# def searchRange(nums: list[int], target: int) :

    # if count>1:
    #     first=middle
    #     nums.pop(first)
    #     start, end = 0, len(nums)
    #     middle=int(len(nums)/2)
    #     while target!=nums[middle]:
    #         middle=int((start+end)/2)
    #         if target>nums[middle]:
    #             start=middle
    #         else:
    #             end=middle
    #     return [first,middle+1]
    # else:
    #     return [middle,middle]
#     if target not in nums:
#         return [-1, -1]
#     count = nums.count(target)
#     start, end = 0, len(nums)
#     middle=int((start+end)/2)
#     while target!=nums[middle]:
#         print(start,middle,end)
#         middle=int((start+end)/2)
#         if target>nums[middle]:
#             start=middle
#         else:
#             end=middle
#
#     if count > 1:
#         while nums[middle]==target:
#             middle-=1
#             if middle<0:break
#         return [middle+1,middle+count]
#     else:
#         return [middle,middle]
#
# print(searchRange([2,2], 2))


def compressStr(digitstr:str):
    count=0
    strans=""
    tempstr=digitstr[0]
    for i in digitstr:
        if i!=tempstr:
            strans+=str(count)+tempstr
            tempstr=i
            count=0
        count+=1
    strans+=str(count)+tempstr

    return strans
print(compressStr("3322251"))

