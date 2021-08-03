# 1. Ternary-Operator
```js
// Bad Code
function getResult(score) {
    let result;
    if(score > 5) {
        result = 'Good';
    } else if (score <= 5) {
        result = 'Bad';
    }
    return result;
}

// Good Code
function getResult(score) {
    return score > 5 ? 'Good' : 'Bad';
}
```

# 2. Nullish Coalescing Operator
```js
// Bad Code
function printMessage(text) {
    let message = text;
    if (text == null || text == undefined){
        message = 'Nothing to Display';
    }
    console.log(message);
}

// Good Code
function printMessage(text) {
    const message = text ?? 'Nothing to Display';
    console.log(message);
}

printMessage('Hello');   // Hello
printMessage(undefined); // Nothing to Display
printMessage(null);      // Nothing to Display

// Default값 설정 - Default Parameter is only for undefined
function printDefaultMsg(text = 'Nothing to Display') {
    console.log(text);
}

printDefaultMsg('Hello');   // Hello
printDefaultMsg(undefined); // Nothing to Display
printDefaultMsg(null);      // null
```
## 2-1. Nullish Coalescing Operator(??) VS Logical OR Operator(||)
```js
// Nullish Coalescing Operator
leftExpr ?? rightExpr

// Logical OR Operator
leftExpr || rightExpr
```
- Nullish Coalescing Operator(??)는 leftExpr이 **null이거나 undefined일 경우**에만 rightExpr 구문이 실행
- Logical OR Operator(||)는 leftExpr이 **falsy일 경우**에만 rightExpr 구문이 실행
    - false / 0 / -0 / undefined / null / NaN / "" '' ``

# 3. Object Destructuring
```js
const person = {
    name : 'Julia',
    age : 20,
    phone : '01011111111',
};

// Bad Code
function displayPerson(person) {
    const name = person.name;
    const age = person.age;
    displayAvatar(name);
    display(name);
    display(name, age);
}

// Good Code
function displayPerson(person) {
    const { name, age } = person;
    displayAvatar(name);
    display(name);
    display(name, age);
}
```

# 4. Spread Syntax
## 4-1. Spread Syntax - Object
```js
const item = { type : 'A', size : 'M'};
const detail = { price : 20, made : 'korea', gender : 'M' };

// Bad Code
item['price'] = detail.price;

const newObject = new Object();
newObjectp['type'] = item.type;
newObjectp['size'] = item.size;
newObjectp['price'] = detail.price;
newObjectp['made'] = detail.made;
newObjectp['gender'] = detail.gender;

const newObject2 = {
    type : item.type, 
    size : item.size,
    price : detail.price,
    made : detail.made,
    gender : detail.gender,
};

// Good Code
const shirt1 = Object.assign(item, detail);

// Better Code
const shirt2 = {...item, ...detail};
const shirt3 = {...item, ...detail, price : 40}; // 원하는 요소를 변경하고 싶을 경우
```
## 4-2. Spread Syntax - Array
```js
let fruits = ['apple', 'banana', 'orange'];

// fruits.push('mellon');
fruits = [...fruits, 'mellon'];

// fruits.unshift('mellon');
fruits = ['mellon', ...fruits];

const fruits2 = ['pear', 'strawberry', 'peach'];
let combined = fruits.concat(fruits2);
combined = [...fruits, 'cherry', ...fruits2];
```

# 5. Optional Chaining
```js
const bob = {
    name : 'Julia',
    age : 20,
};

const anna = {
    name : 'Julia',
    age : 20,
    job : {
        title : 'Software Engineer',
    },
};

// Bad Code
function displayJobTitle(person) {
    if(person.job && person.job.title) {
        console.log(person.job.title);
    }
}

// Good Code 1
function displayJobTitle(person) {
    if(person.job?.title) {
        console.log(person.job.title);
    }
}

// Good Code 2
function displayJobTitle(person) {
    const title = person.job?.title ?? 'No Job Yet';
    console.log(title);
}

```
# 6. Template Literals
```js
const person = {
    name : 'Julia',
    score : 4,
};

// Bad Code
console.log(
    'Hello ' + person.name + ', Your current score is : ' + person.score
);

// Good Code 1
console.log(`Hello ${person.name}, Your current score is : ${person.score}`);

// Good Code 2
const { name, score } = person;
console.log(`Hello ${name}, Your current score is : ${score}`);

// Good Code 3 - fuction을 통한 재사용성 증가
function greetings(person) {
    const { name, score } = person;
    console.log(`Hello ${name}, Your current score is : ${score}`);
}
```
# 7. Loops
```js
const items = [1,2,3,4,5,6];

function getAllEvens(items){
    /* Bad Code
        const result = [];
        for (let i = 0; i < item.length; i++) {
            if(item[i] % 2 == 0) {
                result.push(item[i]);
            }
        }
        return result;
    */

    // Good Code
    return items.filter((num) => num % 2 === 0);
}

function multiplyByfour(items){
    /* Bad Code
        const result = [];
        for (let i = 0; i < item.length; i++) {
            result.push(item[i] * 4);
        }
        return result;
    */

    // Good Code
    return items.map((num) => num * 4);
}

function sumArray(items){
    /* Bad Code
        let sum = 0;
        for (let i = 0; i < item.length; i++) {
            sum += items[i];
        }
        return sum;
    */

    // Good Code
    items.reduce((a,b) => a + b, 0);
}

// Bad Code
const evens = getAllEvens(items);
const multiple = multiplyByfour(evens);
const sum = sumArray(multiple);
console.log(sum);

// Good Code 1
const evens = items.filter((num) => num % 2 === 0);
const multiple = evens.map((num) => num * 4);
const sum = multiple.reduce((a,b) => a + b, 0);

// Good Code 2
const result = items
    .filter((num) => num % 2 === 0)
    .map((num) => num * 4)
    .reduce((a,b) => a + b, 0);
```

# 8. Async - Await
```js
// Promise Async/await
// Bad Code
function displayUser() {
    fetchUser()
        .then((user) => {
            fetchProfile(user)
                .then((profile) => {
                    updateUI(user, profile);
                });
        });
}

// Good Code
async function displayUser() {
    const user = await fetchUser();
    const profile = await fetchProfile(user);
    updateUI(user, profile);
}
```

# 9. 배열의 중복 제거
```js
const array = ['dog', 'cat', 'mouse', 'cat', 'horse', 'dog'];
console.log([...new Set(array)]);
```

# Conference
[Youtube : 드림코딩 by 엘리](https://www.youtube.com/watch?v=BUAhpB3FmS4&t=40s)  
