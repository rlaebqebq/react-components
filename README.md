# 원티드 프리온보딩 코스 [![Netlify Status](https://api.netlify.com/api/v1/badges/54edafd8-b580-4e5a-b8d2-fea6f8aaaaa2/deploy-status)](https://app.netlify.com/sites/rlaebqebq-wanted-pre-onboarding/deploys)

'원티드 프리온보딩 코스' 선발과제   

## Toggle.js
<img src="https://user-images.githubusercontent.com/50236673/164514914-d73feba8-ff90-4b70-8186-48bae248b17e.gif" width="50%" height="50%">   

- [x] 핵심 요소 : 버튼을 누를 때마다 선택된 항목이 변한다.
- [x] 부가 요소 : 슬라이드 애니메이션
 
### 구현방법
**기능**
- 버튼은 토글 방식으로 작동됨.
- 버튼을 누를 때마다 버튼의 디자인이 변함.
- 버튼을 누르면 선택된 버튼의 글자색은 #606060, 배경색은 #fff 되어야 하고, 선택되지 못한 버튼의 글자색은 #9e9e9e, 배경색은 #cecece 되어야 함.   

**구현과정_1**
1. `배경`, `글자`, `흰색 레이어` 순으로 레이어를 쌓아 구현.
2. 버튼을 선택하면 선택한 버튼 `글자` 위로 선택된 영역을 나타낼 `흰색 레이어`를 이동시킴.
3. 구현하고자 했던 선택된 버튼의 글자색 #606060보다 더 밝은 색으로 구현돼서 실패함.

**구현과정_2**
1. 가상 요소 :before, :after를 버튼에 추가함.
2. 버튼이 unchecked일 경우(기본)   
  2.1 :before은 content `기본`로 변경. 왼쪽으로 이동시킴. 배경색은 #fff으로 변경.  
  2.2 :after은 content `상세`로 변경. 왼쪽으로 이동시킴. 글자색을 #9e9e9e로 변경. 배경색은 #cecece으로 변경.
3. 버튼이 checked일 경우(상세)   
  3.1 :before은 content `상세`로 변경. 오른쪽으로 이동시킴. 배경색은 #cecece으로 변경.   
  3.2 :after은 content `기본`로 변경. 왼쪽으로 이동시킴. 글자색을 #9e9e9e로 변경. 배경색은 #fff으로 변경.

## Tab.js
<img src="https://user-images.githubusercontent.com/50236673/164514912-34169e84-847e-4821-a642-d88c6bd88e13.gif" width="50%" height="50%"> 

- [x] 핵심 요소 : 버튼을 누를 때마다 선택된 탭이 변한다.
- [x] 부가 요소 : 슬라이드 애니메이션

### 구현방법
**기능**
- 탭을 선택하면 탭 하단 내용 교체를 위해 선택한 탭의 번호와 이름을 저장함.
- 탭을 선택하면 선택한 탭 글자색은 #303030으로 변경하고, 하단 장식 요소를 선택한 탭 밑으로 옮김.
- 과제로 주어진 탭은 3개이지만 만약 탭이 4개, 5개로 늘어난다면 가정하고 구현함.

**구현과정**
1. 탭의 내용을 담고 있는 `arr`와 `map`을 사용해 생성함.
2. 탭은 input type='radio'와 label을 사용해 구현함.
3. 탭을 선택하면 선택한 탭 번호를 바탕으로 선택한 탭의 글자색을 변경하고 하단 장식요소를 옮김.

## slider.js
<img src="https://user-images.githubusercontent.com/50236673/164514903-861e1986-a000-49fe-87c1-e1102fab47c8.gif" width="50%" height="50%"> 

- [x] 핵심 요소 : 슬라이더를 움직이면 상단의 값이 자동으로 변한다.
- [x] 부가 요소 : 하단 버튼과 미려한 픽셀 매칭

### 구현방법
**기능**
- input은 type='range'로 받고, `volume`을 1~100 범위의 자연수로 출력함.
- 슬라이더를 움직인 거리를 `volume`에 반영함.
- 하단 버튼을 누르면 해당 버튼에 적힌 숫자를 `volume`에 반영한다.
- 슬라이더가 25% 지점을 지날때 마다 슬라이더 눈금 불이 켜지고 꺼짐.   

**구현과정**
1. 슬라이더 눈금은 ul, `li(눈금)`를 사용해 구현
2. useState()를 사용해 `setVolume`을 통해 `volume` 관리.
3. button은 `arr`와 `map`을 사용해 생성함.
3. button에 onClick 이벤트가 발생하면 `setVolume`을 통해 `volume` 값 변경.
4. 눈금은 항상 불이 켜져 있는 1% 지점을 제외하면 4개이므로 현재 `volume` 값을 가져와 계산.
5. 반복문을 통해 `li(눈금)`에 active 클래스명을 붙였다 뗌.

**어려웠던 지점_구현과정 5**
* 1% 지점까지 반복문에 포함시켜 눈금에 불을 켜고 끄려 하니까 75% 지점 불을 끌 때 오류가 남.
* 1% 지점은 언제나 불이 켜져있기 때문에 반복문에서 제외시키고 항상 불이 켜져있도록 코드 변경해 작성함.

## input.js
<img src="https://user-images.githubusercontent.com/50236673/164514889-5ee69745-9c09-483b-904e-1b0d8f33885b.gif" width="50%" height="50%"> 

- [x] 핵심 요소 : 인풋창에 이메일과 비밀번호 입력이 가능하다
- [x] 부가 요소 : 이메일 형식에 맞을 경우 자동으로 체크 표시
- [x] 부가 요소 : 비밀번호 입력란 우측 눈 표시를 누르면 비밀번호가 노출된다

### 구현방법
**기능**
- input으로 이메일과 비밀번호 입력받음.
- 입력받은 이메일을 `checkEmail` 함수로 이메일 유효성 검사를 한다. 
- 이메일 유효성 검사는 키 입력이 있을 때마다 한다. 
- 이메일 유효성 검사 후 checkEmailState 값 참/거짓 값으로 변경. 변경된 checkEmailState 값을 바탕으로 ‘확인’ 이미지를 회색/민트색으로 변경한다.
- ‘눈’ 이미지를 클릭하면 이미지 색상 회색/민트색으로 변경하고 현재 입력된 비밀번호를 숨기거나 노출한다.

**구현과정**
1. input id='email'에 onKeyUp 이벤트가 발생하면 `checkEmail`함수 실행.
2. `checkEmail` : email 유효성 검사 후, `checkEmailState` 의 `state`, `visible` 값을 변경.   
  2.1 state가 false면 `checkfalse` 클래스명을 붙여 이미지 #cecece 색상으로 변경. true면 `checktrue` 클래스명을 붙여 이미지 #66c4cd 색상으로 변경.   
  2.2 visible이 false면 오류 문구 'Invalid e-mail address' 하단에 추가 출력.
3. input id='password'에 onClick 이벤트가 발생하면 `checkPassword`함수 실행.
4. `checkPassword` : `checkPasswordState` 의 `state`, `visible` 값을 변경.   
  4.1 onClick 이벤트가 발생할 때마다 input type='password', type='text'로 번갈아가며 변경.   
  4.2 input type='password'일 경우, visible은 false.   
  4.3 input type='text'일 경우, visible은 true.   
  4.4 visible 값에 따라 `checktrue`, `checkfalse` 클래스명을 붙여 이미지 색상 변경.
  
 **어려웠던 지점_구현과정 2** 
* input id='email'에 유사한 이벤트 2개를 넣어야 했던 점. (키보드 입력이 있을 때마다 유효성 검사, 입력창에 문구가 있는 상태에서 이메일 입력창을 벗어난다면 오류 문구를 하단에 출력)
* checkEmailState를 객체로 변경 후, visible 추가해 해결함.

## Dropdown.js
<img src="https://user-images.githubusercontent.com/50236673/164514876-a185bf32-62d6-4ac9-9047-37b0ca817833.gif" width="50%" height="50%"> 

- [x] 핵심 요소 : 드롭다운을 누르면 선택 창이 펼쳐지고, 아무거나 골라 클릭하면 선택된 항목으로 변경됨
- [x] 부가 요소 : 키워드 필터 기능 구현

### 구현방법
**기능**
- 드롭다운을 누르면 선택 창이 펼쳐짐.
- 펼쳐진 선택 창 상단에는 검색창이 있고, 하단에는 검색어를 바탕으로 필터 된 목록이 출력됨.
- 펼쳐진 선택 창에서 항목을 선택하면 드롭다운 내용이 선택한 항목으로 변경되고 선택 창 닫힘.

**구현과정**
1. `dropButton`에 onClick 이벤트가 발생하면 `toggle` 함수 실행하여 `dropContent`에 open 클래스명을 토글 방식으로 추가/삭제
2. 상단 검색창에 onChange 이벤트가 발생한다면 `setQuery`, `handleChange` 함수 실행.
3. `setQuery` : 검색창에 입력받은 쿼리 값을 `getDisplayValue` 함수를 통해 `dropButton`에 출력
4. `handleChange` : 항목이 변경된다면 그 값을 현재 선택된 항목으로 변경.
5. 하단 목록에 onClick 이벤트가 발생한다면 `selectOption` 함수 실행.
6. 하단 목록은 `map`을 사용해 생성함.
7. `selectOption` : 현재 쿼리 값을 없애고, 선택된 항목을 현재 선택된 항목으로 변경. 완료하면 펼쳐진 선택 창 닫음.
8. `filter` : 선택된 항목 중 쿼리가 포함된 항목을 리턴한다. 이때 모든 문자는 소문자로 변경함.

 **어려웠던 지점** 
* `DropdownSearch`안에서 많은 변수와 함수가 서로 연결되있다보니 순서와 관계를 정리하는데 시간이 오래걸림. `filter`를 넣어야할 지점, 계속 변화되는 값을 관리하는 게 특히 어려웠음.
