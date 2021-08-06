from math import sqrt
a=25
b=64
numOfSquares = 0
x = int(sqrt(a))
while(x*x < a):
    x+=1
while(x*x <= b):
    numOfSquares+=1
    x+=1

print(numOfSquares)


# from math import sqrt

# a=24
# b=49
# numOfSquares = 0
# x = int(sqrt(a))

# while(x*x >= a & x*x <= b):
#     numOfSquares+=1
#     x+=1

# print(numOfSquares)
# print(x)


# def squares(a, b):
#     c = int(sqrt(b))-int(sqrt(a))
#     return c+1 if int(sqrt(a))**2==a else c

# for _ in range(int(input())):
#     a,b = map(int,input().split())
#     print(squares(a, b))