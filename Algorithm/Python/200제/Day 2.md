# 81. 문자열 내에 특정 문자의 유무 확인(in)
~~~python
msg = input('임의의 문장을 입력하세요: ')
if 'a' in msg:
   print('당신이 입력한 문장에는 a가 있습니다.')
else:
   print('당신이 입력한 문장에는 a가 없습니다.')
~~~

# 82. 문자열 내에 특정 문자열의 유무 확인(in)
~~~python
msg = input('임의의 문장을 입력하세요: ')
if 'is' in msg:
   print('당신이 입력한 문장에는 is가 있습니다.')
else:
   print('당신이 입력한 문장에는 is가 없습니다.')
~~~

# 83. 문자열 길이 구하기(len)
~~~python
msg = input('임의의 문장을 입력하세요: ')
msglen = len(msg)
print('당신이 입력한 문장의 길이는 <%d> 입니다.' %msglen)
~~~

# 84. 문자열이 알파벳인지 검사(isalpha)
~~~python
txt1 = 'A'
txt2 = '안녕'
txt3 = 'Warcraft Three'
txt4 = '3PO'
ret1 = txt1.isalpha()
ret2 = txt2.isalpha()
ret3 = txt3.isalpha()
ret4 = txt4.isalpha()
print(ret1)        # True가 출력됨
print(ret2)        # True가 출력됨
print(ret3)        # False가 출력됨
print(ret4)        # False가 출력됨
~~~

# 85. 문자열이 숫자인지 검사(isdigit)
~~~python
txt1 = '010-1234-5678'
txt2 = 'R2D2'
txt3 = '1212'
ret1 = txt1.isdigit()
ret2 = txt2.isdigit()
ret3 = txt3.isdigit()
print(ret1)      # False가 출력됨
print(ret2)      # False가 출력됨
print(ret3)      # True가 출력됨
~~~

# 86. 문자열이 알파벳 또는 숫자인지 검사(isalnum)
~~~python
txt1 = '안녕하세요?'
txt2 = '1. Title-제목을 넣으세요'
txt3 = '3피오R2D2'
ret1 = txt1.isalnum()
ret2 = txt2.isalnum ()
ret3 = txt3.isalnum ()
print(ret1)      # False가 출력됨
print(ret2)      # False가 출력됨
print(ret3)      # True가 출력됨
~~~

# 87. 문자열에서 대소문자 변환(upper, lower)
~~~python
txt = 'A lot of Things occur each day.'
ret1 = txt.upper()
ret2 = txt.lower()
print(ret1)       # ‘A LOT OF THINGS OCCUR EACH DAY.’가 출력됨
print(ret2)       # ‘a lot of things occur each day.’가 출력됨
~~~

# 88. 문자열의 좌우 공백 제거
~~~python
txt = '   양쪽에 공백이 있는 문자열입니다.   '
ret1 = txt.lstrip()
ret2 = txt.rstrip()
ret3 = txt.strip()
print('<'+txt+'>')
print('<'+ret1+'>')
print('<'+ret2+'>')
print('<'+ret3+'>')
~~~

# 89. 문자열을 수치형 자료로 변환(int, float)
~~~python
numstr = input('숫자를 입력하세요: ')
try:
   num = int(numstr)
   print('당신이 입력한 숫자는 정수 <%d>입니다.' %num)
except:
   try:
      num = float(numstr)
      print('당신이 입력한 숫자는 실수 <%f>입니다.' %num) 
   except:
      print('+++ 숫자를 입력하세요~ +++')
~~~

# 90. 수치형 자료를 문자열로 변환(str)
~~~python
num1 = 1234
num2 = 3.14

numstr1 = str(num1)
numstr2 = str(num2)
print('num1을 문자열로 변환한 값은 “%s” 입니다.' %numstr1)
print('num2를 문자열로 변환한 값은 “%s” 입니다.' %numstr2)
~~~

# 91. 문자열에서 특정 문자의 갯수 구하기(count)
~~~python
txt = 'A lot of things occur each day, every day.'
word_count1 = txt.count('o')
word_count2 = txt.count('day')
word_count3 = txt.count(' ')
print(word_count1)  # 3이 출력됨
print(word_count2)  # 2가 출력됨
print(word_count3)  # 8이 출력됨
~~~

# 92. 문자열에서 특정 문자의 위치 구하기(find)
~~~python
txt = 'A lot of things occur each day, every day.'
offset1 = txt.find('e')
offset2 = txt.find('day')
offset3 = txt.find('day', 30) # 인덱스 30부터 검색
print(offset1)   # 22가 출력됨
print(offset2)   # 27이 출력됨
print(offset3)   # 38이 출력됨
~~~

# 93. 
~~~python

~~~

# 94. 
~~~python

~~~

# 95. 
~~~python

~~~

# 96. 
~~~python

~~~

# 97. 
~~~python

~~~

# 98. 
~~~python

~~~

# 99. 
~~~python

~~~

# 100. 
~~~python

~~~
