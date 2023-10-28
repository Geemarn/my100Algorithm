function runningSum2 (arr) {
    for(let i=1;  i < arr.length; i++) {
        arr[i] += arr[i - 1]
    }
    return arr
}

console.log(runningSum2([1,2,3,4,6,10]))

//
// function richestCustomer (arr) {
//     let max = -Infinity;
//     for(let customer=0;  customer < arr.length; customer++) {
//         let customerAmt = 0;
//         for(let bank=0;  bank < arr[customer].length; bank++) {
//             customerAmt += arr[customer][bank];
//             max = Math.max(max, customerAmt)
//         }
//     }
//     return max
// }

function richestCustomer (arr) {
    let max = -Infinity;
    for(let val of arr ) {
        let value = 0;
        for(let val2 of val) {
            value += val2
        }
        max = Math.max(max,value)
    }
    return max
}

console.log(richestCustomer([[10, 12, 13],[7,1,3],[2,8,7],[1,9,5], [10, 12, 1]]))

function removeDuplicate (str) {
    let frequency = {};
    let newStr = '';
    for (let val of str) {
        if (!frequency[val]) {
            frequency[val] = 1
        } else if(frequency[val] === 1) {
            ++frequency[val]
        }
    }
    Object.keys(frequency).forEach(key => newStr += key.repeat(frequency[key]))
    return newStr
}

console.log(removeDuplicate('tuuuuurrrrrriiingggg'))

function removeDuplicates (str) {
    return Array.from(new Set(str)).join('')
}
console.log(removeDuplicates('ttuuuurrrrrrrinnnnnnngsssssss'))


function digitalRoot(n) {
    let str = n.toString();
    let sum = 0;

    if(str.length === 1) return n;

    for (let i = 0; i < str.length; i++) {
        sum += parseInt(str[i])
    }

    return digitalRoot(sum)
}
console.log(digitalRoot(165))


function showArgs(...n) {
    console.log(Array.from(arguments, x=>x**2), n)
    console.log(n)
}

showArgs(2, 3)

function sum(...n) {
    if(n.length === 2) return n[0] + n[1]
    return (m) => n[0] + m
}

console.log(sum(2, 10))
console.log(sum(2)(10))
//
// function memorize() {
//     let cached = {};
//     return function(n) {
//         if(n in cached) return cached[n]
//         else {
//             console.log('this is long::::')
//             cached[n] = n + 80;
//             return cached[n]
//         }
//     }
// }

const memorize = () => {
    const cache = {};

    return (n) => {
        if(n in cache) return cache[n];
        console.log('this is long::::')
        return cache[n] = n + 80
    }
};

const memo = memorize()
console.log(memo(10))
console.log(memo(20))

let a = 2
const test = {
    a: 'a',
    c: 'c',
    b:  function () {
        console.log(this.c)
        return  () => {
            console.log(this.a)
        }
    }
}

test.b()()

class Elf {
    static b = 'hi';
     static e = 'how far';
    constructor(c, d) {
        this.a = 'hello';
        this.c = c;
        this.d = d
    }
    //private
    #sum(){
        return this.c + ' ' + this.d + ' test'
    }
}
class BlackElf extends Elf {
    constructor(c, d, e) {
        super(c, d);
        this.e = e
    }
    divide() {
        return this.c + this
    }
}

const elf = new Elf('hiiii', 'you');
const blackElf = new BlackElf('hii', 'me', 'queue::::');
console.log(blackElf)

console.log(elf.a)
console.log(Elf.b)
console.log(Elf.e)

const multiply = (a,b,c) => {
    return a * b * c
};

const partialMultiply = multiply.bind(null, 2);

console.log(partialMultiply(2, 4))

const compose = (fn, gn) => data => fn(gn(data));
const pipe = (fn, gn) => data => gn(fn(data));

const composer = compose(x => x**2, x => x + 2);
const piper = pipe(x => x**2, x => x + 2);

console.log(composer(10))
console.log(piper(10))

const ade= {
    a: 2,
    hi: function () {
        console.log(this)
        return  function () {
            console.log(this)
        }
    }
}
ade.hi()()

const wizard = {
    name: "Merlin",
    health: 100,
    heal(num1, num2) {
        return (this.health += num1 + num2);
    }
};

const archer = {
    name: "Robin Hood",
    health: 30,
    sleep(num){
        return this.health -= num || 10
    }
}
console.log(archer.sleep.call(wizard, 20))

console.log(wizard.heal(10, 20))
console.log(wizard.heal.call(archer, 10, 20))
console.log(archer.sleep())
console.log(archer.sleep.call(wizard, 20))
console.log(wizard.health)

const archerHeal = archer.sleep.bind(wizard);
const wizardHeal = wizard.heal.bind(archer, 10);
console.log(archerHeal())
console.log(wizardHeal(20))

function me(a,b) {
    console.log('testing')
    return () => a * b
}

const me2 = me.bind(this,2)

console.log(me2(3))
console.log(me2(10))

function maxNum (arr) {
    return Math.max.apply(null, arr)
}

console.log(maxNum([2, 3, 4,10, 1, -10, 12]))

const character = {
    name: "Simon",
    getCharacter() {
        return this.name;
    }
};
const giveMeTheCharacterNOW = character.getCharacter.bind(character)

console.log(giveMeTheCharacterNOW());

const inefficient  = (idx) => {
    const bigArr = new Array(1000).fill('hello')
    return bigArr[idx]
}

const efficient  = () => {
    const bigArr = new Array(1000).fill('hello')
    console.log('this is coding!!!!!')
    return (idx) => bigArr[idx]
}


console.log(inefficient(4))
const eff = efficient();
console.log(eff(4))

class Elfs {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    sum() {
        return this.a + this.b
    }
    static mul(a,b) {
        return a * b
    }
}

const elfs = new Elfs(2, 3)

console.log(elfs.sum())
// console.log(elfs.mul())
console.log(Elfs.mul(4,5))

class Ogre extends Elfs {
    constructor(a, b, c) {
        super(a, b);
        this.c = c;
    }
    sub() {
        return this.a + this.b - this.c
    }
}
const ogre = new Ogre(2,6,4)

console.log(ogre.sum())
console.log(ogre.sub())

const promisify = (item, delay) => {
    return new Promise(resolve => setTimeout(() => resolve(item), delay))
}

const ap = () => promisify("a", 100);
const bp = () => promisify("b", 500);
const cp = () => promisify("c", 300);

async function parallel () {
    const [data1, data2, data3] = await Promise.all([ap(), bp(), cp()])
    return `parallel is done: ${data1} ${data2} ${data3}`;
}

async function race () {
    const result = await Promise.race([ap(), bp(), cp()])
    return `parallel is done: ${result}`;
}

async function sequence () {
    const data1 = await ap()
    const data2 = await bp()
    const data3 = await cp()
    return `sequence is done: ${data1} ${data2} ${data3}`;
}


parallel().then(data => console.log(data))
race().then(data => console.log(data))
sequence().then(data => console.log(data))



function createCheckDigit(membershipId) {
    let sum = membershipId.split('').reduce((x, y) => +x + +y, 0);
    while(sum.toString().length > 1){
        return createCheckDigit(sum.toString())
    }
    return sum;
}

console.log(createCheckDigit("55555"));

function setUp(input=['cat', 'car', 'bar']) {
    return new Set(input)
}

function isInDict(str) {
    if(str.endsWith('at')) return true;
    if(str.startsWith('cr')) return false
    return setUp().has(str)
}

console.log(isInDict('crab'))
console.log(isInDict('*at'))
console.log(isInDict('car'))


//generator
function* generatorFunc() {
    let a = +3.000004.toFixed(2);
    let b = 4
    console.log(a + b)
    yield a + b;
    console.log('next')
    yield a + b + 1
    console.log('next')
    yield a + b + 2
}

const generator = generatorFunc()

console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())

function debounce(func, time) {
    let timer;
    return function () {
        const args = arguments;
        if(time) {
            clearTimeout(timer)
        }
        timer = setTimeout(func.apply(this, args), time || 1000)
    }
}

function throttle(func,  delay) {
    let wait = false;
        return function () {
            if(!wait) {
                func.call();
                wait = true;
                setTimeout(() => {
                    wait = false
                }, delay)
            }
        }
}

//weak map takes only object and functions as keys
//does not have size, and can not be iterable
//hold reference to the key and goes away if the key does not exist
const map  = new WeakMap()
let wh = {a: 'hello'}
map.set(wh, 'hello there')
console.log(map)
console.log(map.get(wh))

//map takes any value
const map2  = new Map([[{default: 1}, 'this is default']])

let wh2 = {a: 'hello2'}
map2.set(wh2, 'hello2 there')
wh2 = undefined
console.log(map2)
console.log(map2.get(wh2))

function getName(arr) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i]['name']){
            newArr.push(arr[i]['name'])
        }
    }
    return newArr
}

console.log(getName([
    {a: 1},
    {name: 'jane'},
    {},
    {name: 'sophia'},
    {name: 'israel'},
    {b: 2}
]))
function getLargestIndex(arr) {
    let index = 0;
    let max = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
            index = i
        }
    }
    return index
}

console.log(getLargestIndex([1, 7, 12, 3, 40, 7]))

function groupAnagram(arr) {
    const orderedArr = arr.map(arr => arr.split('').sort().join(''));
    const map = {}

    for(let i=0; i < arr.length; i++) {
        if(!map[orderedArr[i]]) {
            map[orderedArr[i]] = [arr[i]]
        } else {
            map[orderedArr[i]].push(arr[i])
        }
    }
    return Object.values(map)
}

console.log(groupAnagram(['abc', 'bca', 'listen', 'cup', 'silent']))

console.log('5' > '4')
console.log('5' > 4)
console.log('hi' > 0) /**converts to NaN which returns false for any value**/
console.log('1' - +'1')
console.log('1' + +'1')

function chuck(arr, n) {
    if (arr.length <= n) return [arr]
    let chuckArr = [];
    let i = 0;

    while(i < arr.length) {
        chuckArr.push(arr.slice(i, i + n))
        i += n
    }

    return chuckArr
}

console.log(chuck(['a', 'b', 'c', 'd', 'e', 'f'], 2))

function urlify(url) {
    return url.trim().replaceAll(/[tul]/g, '%20')
}

console.log(urlify('this is url '))

function coolstring(str) {
    const sub = [];
    let i =0;
    let noOfCoolStr = 0;
    while(i < (str.length - 3)) {
        const chuck = str.slice(i, i+4)
        sub.push(chuck)
        i++
    }
    for(const val of sub) {
        if(val.length === new Set(val).size) {
            ++noOfCoolStr
        }
    }
    return noOfCoolStr
}

console.log(coolstring('abcdcfcefg'))

function missing(arr) {
    let missingNum= '';

    for(let i=0; i < arr.length - 1; i++) {
        if(arr[i + 1] !== arr[i] + 2){
            missingNum += arr[i] + 2 + ' '
        }
    }
    return missingNum
}

console.log(missing([1,5,7,9,11,15,17,21]))

function reverse(str) {
    let strArr = str.split(' ');
    let reverseStr = '';

    for (const val of strArr) {
        const valArr = val.split('').reverse().join('')
        reverseStr += valArr + ' '
    }
    return reverseStr
}

console.log(reverse('this is javascript code'))

function sumother(arr) {
    let sumArr = [];
    let sum = arr.reduce((acc, curr) => acc + curr, 0)

    for (let i=0; i < arr.length; i++) {
        const currSum = sum - arr[i]
        sumArr.push(currSum)
    }
    return sumArr
}

console.log(sumother([2,7,11,4,-2]))


function common(input1, input2) {
    let comm = {}
    for(let key in input2) {
        if(input2[key] === input1[key]) {
            comm[key] = input1[key]
        }
    }
    return comm
}

console.log(common({a:1,b:2,c:3,d:4, e:5, f:3}, {b:2,d:4,e:6, f:3}))


function secondLargest(arr) {
    let sortedArr = arr.sort((a,b) => b-a)
    let largestNum = sortedArr[1]

    for(let i = 0; i < sortedArr.length; i++) {
        if (largestNum > sortedArr[i]) {
            return sortedArr[i]
        }
    }
}

console.log(secondLargest([1,2,4,7,7,4,13,13,11]))

function mostOccured(str) {
    let freq = {}
    let highest = 0
    let char = ''

    for(let val of str) {
        freq[val] = freq[val] + 1 || 1
        if(freq[val] > highest) {
            highest = freq[val]
            char = val
        }
    }
    return char
}

console.log(mostOccured('absabddddadffff'))
const composeFactory = (...fn) => (data) => {
    return fn.reduceRight((acc, curr) => curr(acc), data)
}
const tryCompose = composeFactory((a,b=2) => a+b, (a,b=2) => a*b)

console.log(tryCompose(2))

function flatten (arr) {
   return arr.reduce((acc, curr) => acc.concat(Array.isArray(curr) ? flatten(curr) : curr),[])
}

console.log(flatten([1,2,[3,4, [5, 6, [7]]]]))