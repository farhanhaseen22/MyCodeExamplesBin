from collections import Counter

# Create a list 
z = ['blue', 'red', 'blue', 'yellow', 'blue', 'red'] 
col_count = Counter(z) 
print(col_count) 

col = ['blue','red','yellow','green']

for color in col:
    print (color, col_count[color])


# # c = Counter({'a': 5, 'b': 3, 'c': 6})
# c = Counter({'a': 5,'b': 11,'c': 6,'d': 7,'e': 6})

# # c1 = c['c']

# c1 = c.most_common(3)

# print(c1)