
# def cutTheSticks(arr):
#     printables = []
#     while len(arr)>0:
#         printables.append(len(arr))
#         minNum = min(arr)
#         arr = [i-minNum for i in arr if i!=minNum]
#     return printables


# arr = [5,4,4,2,2,8]
# n=6
# # str1 = "Begins: "
# str1 = sorted(arr)[0]
# # for i in sorted(arr)[:-1]:
# #     str1=str1+','+str(i)

# print(str1)


#### Circular Array-Rotation ####
n=3
# a = [1,2,3,4,5]
a = [1,2,3]
k=2
q=3
queries = [0,2]

final=[]
k = k%n
# for i in range(q):
for i in queries:
    m = i
    final.append(a[m-k])
print(final)


# for i in range(k):
#     b=[]
#     c=a.pop()
#     b.append(c)
#     b.extend(a)
#     a.clear()
#     a.extend(b)

# final=[]
# for i in range(len(queries)):
#     final.append(b[queries[i]])
# print(final)
