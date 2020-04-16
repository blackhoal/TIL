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
# 72. 최대값, 최소값 출력(max, min)
~~~python
listdata = [9.96, 1.27, 5.07, 6.45, 8.38, 9.29, 4.93, 7.73, 3.71, 0.93]
maxval = max(listdata)
minval = min(listdata)
print(maxval)     # 9.96이 출력됨
print(minval)     # 0.93이 출력됨

txt = 'Alotofthingsoccureachday'
maxval = max(txt)
minval = min(txt)
print(maxval);     # 'y'가 출력됨
print(minval)      # 'A'가 출력됨

maxval = max(2+3, 2*3, 2**3, 3**2)
minval = min('abz', 'a12')
print(maxval)    # '9'가 출력됨
print(minval)    # 'a12'가 출력됨
~~~
> - 문자열에서 코드값이 가장 큰 문자가 출력  

# 73. 1바이트에서 하위 4비트 추출
~~~python
a = 107           # 16진수로 0x6b
b = a & 0x0f      
print(b)          # 11(b)이 출력
~~~
> - 1byte = 8bit  
> - 1byte는 일반적으로 컴퓨터가 처리하는 데이터의 최소 단위  
> - 하위 4비트를 추출하려면 0x0f와 AND 연산 수행  

# 74. 1바이트에서 상위 4비트 추출
~~~python
a = 107           # 16진수로 0x6b
b = (a>>4) & 0x0f      
print(b)          # 6이 출력
~~~
> - 0x6b >> 4의 값에서 하위 4비트를 추출하면 0x6b의 상위 4비트 값만 추출하는 것과 동일  
# 75. 문자열에서 특정 위치의 문자 출력
~~~python
txt1 = 'A tale that was not right'
txt2 = '이 또한 지나가리라.'
print(txt1[5])      # 앞에서 6번째 문자 'e'가 출력
print(txt2[-2])     # 끝에서 2번째 문자 '라'가 출력
~~~
# 76. 문자열에서 지정한 구간의 문자열 출력
~~~python
txt1 = 'A tale that was not right'
txt2 = '이 또한 지나가리라.'
print(txt1[3:7])      # 3~6번째 문자 'ale '이 출력
print(txt1[:6])       # 처음~5번째 문자 'A tal'이 출력
print(txt2[-4:])      # 끝에서 4번째부터 마지막 문자 '가리라.'가 출력
~~~
# 77. 문자열에서 홀수 번째 문자만 출력
~~~python
txt = 'aAbBcCdDeEfFgGhHiIjJkK'
ret = txt[::2]   # 처음부터 끝까지 스텝 2로 슬라이싱
print(ret)       # 'abcdefghijk'가 출력
~~~
> - 슬라이싱의 스텝 이용  
> - 짝수의 경우 txt[1::2]로 수정하여 출력  
# 78. 문자열을 거꾸로 생성
~~~python
txt = 'abcdefghijk'
ret = txt[::-1]
print(ret)       # 'kjihgfedcba'가 출력
~~~
> - 역순 및 홀수로 추출 : txt[::-2]  
> - 역순 및 짝수로 추출 : txt[-2::-2]  
# 79. 두 개의 문자열 합치기
~~~python
filename = input('저장할 파일 이름을 입력하세요: ')
filename = filename + '.jpg'
display_msg = '당신이 저장한 파일은 [' + filename + '] 입니다.'
print(display_msg)
~~~
# 80. 문자열을 반복해서 새로운 문자열로 생성(*)
~~~python
msg1 = '여러분'
msg2 = '파이팅!'
display_msg = msg1 + ', ' + msg2*3 + '~!'
print(display_msg)
~~~
