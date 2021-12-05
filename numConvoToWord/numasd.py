import re

string = ' 5456123 '
pattern = '[0-9](?=([0-9]{3})+\D)'
replace = ','
result = re.sub(pattern, replace, string)

# string = '5,456,123'
# pattern = ',+'
# result = re.split(pattern, string)

print(result)
############################################
# string = 'abc 12\
# de 23 \n f45 6'

# # matches all whitespace characters
# pattern = '\s+'

# # empty string
# replace = ','

# new_string = re.sub(pattern, replace, string) 
# print(new_string)