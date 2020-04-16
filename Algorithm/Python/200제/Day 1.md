# 60. 사용자 입력받기
~~~python
k = input('<값>을 입력:')
print('입력값은 <' + k + '>입니다.')
~~~
# 61. 자료형 확인
~~~python
numdata = 57 # int
strdata = '파이썬' # str
listdata = [1,2,3] # list
dictdata = {'a':1, 'b':2} # dict

def func(): # function 
    print('하이')

print(type(numdata))
print(type(strdata))
print(type(listdata))
print(type(dictdata))
print(type(func))
~~~
# 62. 나눗셈의 나머지값 출력
~~~python
a = 11113
b = 23
ret = a % b
print('[%d]을 [%d]로 나누면 [%d]가 남는다.'%(a,b,ret))
~~~
# 63. 몫과 나머지값 출력(divmod)
~~~python
a = 11113
b = 23
ret1, ret2 = divmod(a,b)
print('[%d]을 [%d]로 나누면 몫이 [%d], 나머지 [%d]'%(a,b,ret1, ret2))
~~~
# 64. 10진수를 16진수로 변환(hex)
~~~python
h1 = hex(97) # 0x61
h2 = hex(98) # 0x62
ret1 = h1 + h2
print(ret1)
print(type(ret1))

a = int(h1, 16)
b = int(h2, 16)
ret2 = a + b
print(hex(ret2))

# 문자열 포맷팅으로 16진수 표현

n = 11
print('%X' %n) # 대문자 표현
print('%x' %n) # 소문자 표현

n = 11
print('%02X' %n) # 한 자리수 16진수인 경우 앞에 0을 붙여 표현
print('%02x' %n)
~~~
# 65. 10진수를 2진수로 변환(bin)
~~~python
b1 = bin(97) # 0b1100001
b2 = bin(98) # 0b1100010
ret1 = b1 + b2
print(ret1)
print(type(ret1))

a = int(b1, 2)
b = int(b2, 2)
ret2 = a + b
print(bin(ret2))
~~~
# 66. 2진수, 8진수, 16진수를 10진수로 변환
~~~python
bnum = 0b11110000; bstr = '0b11110000'
onum = 0o360; ostr = '0o360'
hnum = 0xf0; hstr = '0xf0'
b1 = int(bnum); b2 = int(bstr,2)    # b2 = int(bstr, 0)로도 가능
o1 = int(onum); o2 = int(ostr, 8)   # o2 = int(ostr, 0)로도 가능
h1 = int(hnum); h2 = int(hstr, 16)  # h2 = int(hstr, 0)로도 가능
print(b1); print(b2)
print(o1); print(o2)
print(h1); print(h2)
~~~
# 67. 절대값 구하기(abs)
~~~python
abs1 = abs(-3)    # 정수
abs2 = abs(-5.72) # 실수
abs3 = abs(3+4j)  # 복소수 -> 루트 a^2 + b^2

print(abs1)
print(abs2)
print(abs3)
~~~
# 68. 반올림수 구하기(round)
~~~python
ret1 = round(1118)      # 소수점 첫째자리에서 반올림
ret2 = round(16.554)    # 소수점 첫째자리에서 반올림
ret3 = round(1118, -1)  # 1의 자리에서 반올림
ret4 = round(16.554, 2) # 소수점 셋째자리에서 반올림
print(ret1)
print(ret2)
print(ret3)
print(ret4)
~~~
# 69. 실수형 자료를 정수형 자료로 변환(int)
~~~python
idata1 = int(-5.4)
idata2 = int(1.78e1)
idata3 = int(171.56)
print(idata1)
print(idata2)
print(idata3)
~~~
# 70. 정수형 자료를 실수형 자료로 변환(float)
~~~python
fdata = float(10)
print(fdata)
~~~
# 71. 정수 리스트에서 소수만 필터링(filter)
~~~python
def getPrime(x):
    if x%2 == 0:
        return
    
    for i in range(3, int(x/2), 2):
        if x%i == 0:
            break
    else: 
        return x

listdata = [117, 119, 1113, 11113, 11119]
ret = filter(getPrime, listdata)
print(list(ret))            # [11113, 11119] 가 출력됨
~~~
# 72.
~~~python

~~~
# 73.
~~~python

~~~
# 74.
~~~python

~~~
# 75.
~~~python

~~~
# 76.
~~~python

~~~
# 77.
~~~python

~~~
# 78.
~~~python

~~~
# 79.
~~~python

~~~
# 80.
~~~python

~~~
