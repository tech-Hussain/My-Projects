nums=[3,2,4]
target = 6
def solution(nums,target):
    i = 0
    for k in range(len(nums) - 1):
        for j in range(i + 1, len(nums)):
            print(nums[i] + nums[j])
            if (nums[i] + nums[j]) == target:
                print("success")
                return [i, j]
        i = i + 1
solution(nums,target)
