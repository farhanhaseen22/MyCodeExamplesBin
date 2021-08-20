import math

# def activityNotifications(n, ex, d):
    
#     a=d
#     i=0
#     notif=0
#     while( a!=n ):
#         newlist=[]
#         for k in range(i,a):
#             newlist.append(ex[k])
        
#         newlist.sort()
#         med=(a-i)//2
#         m=newlist[med]
#         if(ex[a] >= m*2):
#             notif+=1
#         i+=1
#         a+=1
    
#     return notif

# def activityNotifications(n, ex, d):
    
#     # seeable=[]
#     a=d
#     i=0
#     notif=0
#     while( a!=n ):
#         newlist=[]
#         for k in range(i,a):
#             newlist.append(ex[k])
        
#         newlist.sort()
#         print("The newlist: ")
#         print(newlist)
#         med=math.floor((a-i)/2)
#         m=newlist[med]
#         # seeable.append(m)
#         if(ex[a] >= m*2):
#             notif+=1
#         i+=1
#         a+=1
    
#     return notif
#     # return seeable

# if __name__ == '__main__':
#     n = 9

#     d = 5

#     expenditure = [2, 3, 4, 2, 3, 6, 8, 4, 5]

#     result = activityNotifications(n, expenditure, d)

#     print(str(result) + '\n')


# f = [0]*5
# f += [1]*4
# print(f)

f = [0]*15
d=5
e = [2, 3, 4, 2, 3, 6, 8, 4, 5]
for i in e[d:]:
    f[i]+=1
print(f)
