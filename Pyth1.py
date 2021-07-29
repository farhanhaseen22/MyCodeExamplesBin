import os

a=1
b=1

def func1(n):
    # print(f"Number: {n}")
    return f"Number: {n+1}"

uin = input("Write here: ")
uin = int(uin)

val = func1(uin)
print(val)
