// вывести текст
function delem(txthtml) {
  const $elem = document.createElement('div')
  $elem.innerHTML = txthtml
  return document.getElementById('jsoutput').appendChild($elem).firstChild
}
// вывести текст
function dlog(txt) {
  const $elem = document.createElement('div')
  $elem.innerHTML = txt
  document.getElementById('jsoutput').appendChild($elem)
}

// посчитать выражение
function dlogexp(exp) {
  const evlexp = eval(exp)
  dlog(
    '<span style="font-family:verdana">' +
      '<span style="font-weight:0; color:blue">' +
      exp +
      '</span>' +
      ' = ' +
      evlexp +
      '</span>' +
      '<span style="color:red">{' +
      typeof evlexp +
      '}</span>'
  )
}
////////////////////////////////////
dlog('/////////////////')
dlog('DOM')
const body = document.body
body.append('<div>append</div>\n','<button>ok<button>')
const div = document.createElement('div')
div.innerText = '<strong>Hello</strong> World'
div.textContent = 'Hello World the same' // invis text not included
body.append(div)

dlog('/////////////////')
dlog('async!!!!!!!!')

const delay = (ms)=>{
  return new Promise(r => setTimeout(() => r(), ms))
}
const url = 'https://jsonplaceholder.typicode.com/todos/1'
function fetchToDos() {
  return delay(2000)
    .then(()=>{
      return fetch(url)
      })
    .then(responce => responce.json())
}

fetch(url)
      .then(response => response.json())
      .then(json => console.log(json))


// const getData = ()=> new Promise((resolve)=>resolve[1,2,3]))

// function asyncExmpl(){
//   try {
//     const data = await getData()
//     dlog(data)
//   } catch(err) {
//     dlog(err)
//   }
//   finally {dlog('finally')}

// }



// const delay = ()=>{
//   const prom = new Promise((resolve,reject)=>{
//    setTimeout(() => {
//      resolve()
//    }, 1000);
//   })
//   return prom
// }

// delay(2500).then(()=>{console.log('timeout')})


dlog('/////////////////')
dlog('objects')
const person = {
  name: 'Peter',
  age: 49,
  isProgrammer: true,
  adress: { city: 'Abakan', street: 'Repin' },
  'pass word': '321321',
  [new Date().getTime().toString]: 'computed value',
  greet() {
    console.log('Greet from ' + this.name)
  },
  arrow: () => {
    console.log('Greet from ' + this.name)
  }, // неправильно, this не работает при вызове
}
dlogexp('this===window')
delete person.age // удалили свойство!
//деструктуризация
const { name: firstName = 'default', adress } = person
dlogexp('firstName')

//for(let key in person) { dlogexp('person.'+key)} - не работает???

// const logger = {
//   name:'QQQQq'
//   show(){dlogexpr(this.name)} 
// }
// const bounded = logger.show.bind(person)
// bounded()
// logger.show.call(person,false)
// logger.show.bind(person,[false])

dlog('/////////////////')
dlog('timer')
$outp = delem('<div id="output">----</div>')
$setf = delem('<button data-type="full">full</button>')
$setd = delem('<button data-type="date">date</button>')
$sett = delem('<button data-type="time">time</button>')
let fmode = 'full'
function formatter(fmode) {
  const now = new Date()
  switch (fmode) {
    case 'full':
      return now.toLocaleDateString()
    case 'time':
      return now.toLocaleTimeString()
    case 'date':
      return now.toLocaleDateString()
  }
}
function update() {
  $outp.innerHTML = fmode + ' ' + formatter(fmode)
}
fclick = (event) => {
  fmode = event.target.dataset.type
  update()
  dlogexp('fmode')
}
$setf.onclick = fclick
$setd.onclick = fclick
$sett.onclick = fclick
update()
timerin = setInterval(update, 1000)

////////////////////////////////////
dlog('/////////////////')
dlog('functions')
// function declaration - можно вызывать до объявления
function greet(name) {
  console.log('Helo - ' + name)
}
// function expression
const greet2 = function (name) {
  console.log('Helo - ' + name)
}
// short expr
const greet3 = (name) => console.log('Helo - ' + name)
// params
function sumAll(...vals) {
  return vals.reduce((acc, n) => (acc += n))
}
// closures
function crePers(name) {
  return (lastname) => console.log(lastname + ' ' + name)
}

dlogexp('greet')
dlogexp('greet2')
console.dir(greet)
setTimeout(dlogexp('greet()'), 1000)
var intrvlcnt = 0
const intrvl = setInterval(() => {
  dlogexp(intrvlcnt)
  if (intrvlcnt == 5) {
    clearInterval(intrvl)
  }
  intrvlcnt++
}, 1000)
dlog('/////////////////')
dlog('strings')
// toUpperCase toLowerCase charAt indexOf startsWith endsWith repeat(n) trim padStart

dlog('/////////////////')
dlog('числа')
function getRand(min, max) {
  return min + (max - min) * Math.random()
}
dlogexp('getRand(3,7)')
dlogexp('Math.random()')
dlogexp('Math.trunc(-4.8)')
dlogexp('Math.round(-4.2)')
dlogexp('Math.ceil(-4.2)')
dlogexp('Math.floor(-4.2)')
dlogexp('Math.floor(-4.8)')
dlogexp('Math.max(2,5,999)')
dlogexp('1313213n') // BigInt , работает только с другим BigInt
dlogexp('Number.MAX_SAFE_INTEGER')
dlogexp('Number.MIN_SAFE_INTEGER')
dlogexp('Number.MAX_VALUE')
dlogexp('Number.POSITIVE_INFINITY')
dlogexp('1/0')
dlogexp('Number.isFinite(1/0)')
dlogexp('23/undefined')
dlogexp('Number.NaN == (23/undefined)') // ??
dlogexp('Number.isNaN(23/undefined)')
dlogexp('parseInt(23.33)')
dlogexp('parseFloat(23.33)')
dlogexp('+23.33') // to string
dlogexp('0.1+0.2')
dlogexp('Math.round(0.1+0.2)')
dlogexp('(0.1+0.2).toFixed(10)') // string
dlogexp('parseFloat((0.1+0.2).toFixed(10))') // string

dlog('/////////////////')
dlog('Массивы Minin и строки')
dlogexp(
  '"Hello, how are you".split("").filter((p)=>p!="o").toReversed().join("")'
)

dlog('/////////////////')
dlog('Массивы Minin')
dlogexp('letters = [2,4,7,2,5]')
dlogexp('letters.sort(function (a,b) {return b-a})')
dlogexp('names = [1, "Name", "Caption"]')
dlogexp(
  'names_ = names.map(function (name,index){ return name + (index===0?"!":"l") })'
) // map creates new array
dlogexp('names')
dlogexp(
  'names =[{name:"no",val:222},{name:"n12o",val:22},{name:"got",val:23},]'
)
dlogexp('names.find(function(el){if(el.val===22) return true}).name')
dlogexp('names.find((el)=>{return el.val===22}).name') // short code for function
dlogexp('names.find((el)=> el.val===22).name') // max short code for function
dlogexp('names.findIndex((el)=> el.val===28)')
dlogexp('names.filter((el)=> el.val<28).length') // new array
dlogexp(
  'names.filter((el)=>el.val<28) .map((el)=>el.val) .reduce((acc,el)=>acc+=el)'
)

dlog('/////////////////')
dlog('Список')
const $inp = delem(
  "<input  placeholder='Введите значение элемента' id='inputEl'/>"
)
const $btAdd = delem("<button id='btAdd'>Добавить</button>")
const $list = delem("<list id='list' />")

// при таком объявлении функции можно использовать до объявления!
function liRender(li, index) {
  $list.insertAdjacentHTML(
    'beforeend',
    `
    <li data-index=${index}>${index}
    <span>
      <span data-index=${index}${
      li.compl ? ' style="font-family:verdana;color:red;"' : ''
    }>${li.name}</span>
    </span>
    <span>
      <span data-index=${index} data-type="toggle">[&check;]</span>
      <span data-index=${index} data-type="remove">[&times;]</span>
    </span>
    </li>`
  )
}
function render() {
  $list.innerHTML = preList.length == 0 ? 'No elements....' : ''
  for (let i = 0; i < preList.length; i++) {
    liRender(preList[i], i)
  }
}
//for (el in preList) {liRender(preList[el])}
const preList = [
  { name: 'first', compl: true },
  { name: 'second', compl: true },
  { name: 'third', compl: false },
]
render()

$btAdd.onclick = function () {
  if ($inp.value.length == 0) {
    return
  }
  const newel = { name: $inp.value, compl: false }
  preList.push(newel)
  $inp.value = ''
  render()
}

$list.onclick = function (event) {
  const currIndex = parseInt(event.target.dataset.index)
  const currType = event.target.dataset.type
  if (currType === 'toggle') {
    preList[currIndex].compl = !preList[currIndex].compl
    render()
  } else if (currType === 'remove') {
    preList.splice(currIndex, 1)
    render()
  }
  $inp.value = preList[currIndex].name
}

dlog('/////////////////')
dlog('Массивы')
dlogexp('[1,2,"hello"]')
dlogexp('[1,2,"hello"].length')
dlogexp('[1,2,"hello"][1]')
var arr1 = []
dlogexp('arr1 = new Array(8)')
dlogexp('arr1 = new Array(2,1,"HelloOOO",6)')
dlogexp('[].concat(99,arr1,98)')
dlogexp('arr1.join()')
dlogexp('arr1.join("*")')
dlogexp('arr1.join("*").split("*")')
dlogexp('arr1.unshift(97)') // at start
dlogexp('arr1.shift()') // at start
dlogexp('arr1.sort()')
dlogexp('arr1.reverse()')
dlogexp('arr1[7]=7') // with for new array
dlogexp('arr1.with(7,8)')
dlogexp('arr1.splice(0,1)') //toSplice for new array
dlogexp('arr1')
dlogexp('arr1.push("aarhhhh!!!")')
dlogexp('arr1.pop()')
dlogexp('Object.keys(arr1)')
dlogexp('Object.values(arr1)')
dlogexp('Object.entries(arr1)')
dlogexp('[1, 2, 3].includes(2)')
dlogexp('[1]==[1]')
dlogexp('[]==0')
dlogexp('0===[]')
const arr2 = [1, 2, 3, 8]
dlogexp('arr2')
var ress = ''
dlogexp('arr2.forEach((el)=>{ress += el})')
dlogexp('for (let el of arr2) {ress += el}')
dlogexp('ress')
var ress = ''
dlogexp('for (let el in arr2) {ress += arr2[el]}') // bad for arrays - slow
dlogexp('ress')

var len = arr2.length
while (len--) {
  // простой пример
}
dlogexp('[0, 1, 2, 3].reduce(function(acc, b) { return acc + b })')
dlogexp('ress')
dlogexp('arr2.indexOf(3)')
dlogexp('arr2.indexOf(33)')
dlogexp('arr2[arr2.length-1]')
dlogexp('arr2.at(-1)') //for negative values of i, it steps back from the end of the array.
dlogexp('arr2[arr2.length]=11')
dlogexp('arr2.push(23)')
dlogexp('delete arr2[0]')
dlogexp('arr2[0]')
dlogexp('arr2')
dlogexp('Array.isArray(arr2)')

dlog('/////////////////')
dlog('Калькулятор')
const $inp1 = delem(
  "<input type='number' placeholder='Введите число' id='input1' value='3'/>"
)
const $inp2 = delem(
  "<input type='number' class='form-control mb-2' placeholder='Введите 2-e число' id='input2' value='5'/>"
)
const $btPlus = delem(
  "<button class='btn btn-success flex-grow-1 mx-2' id='plus'>+</button>"
)
$btPlus.onclick = function () {
  $inpRes.value = 0 + $inp1.value + $inp2.value
}
const $btMinus = delem(
  "<button class='btn btn-success flex-grow-1 mx-2' id='minus'>-</button>"
)
$btMinus.onclick = function () {
  $inpRes.value = $inp1.value - $inp2.value
}
const $inpRes = delem(
  "<input type='number' placeholder='Введите число' id='inputRes'/>"
)

dlog('/////////////////')
dlog('Сервисые функции')
dlog('alert ("text") - диалоговое окно')

dlog('/////////////////')
dlog('Работа с выражениями')
dlog('Запрещенные имена переменных: 42num my-num const')
let _ = 2
let $ = '2'
let vr_b = false
let vr_u = undefined
let vr_emp = ''
let vr_nan = NaN
dlogexp('vr_b || vr_emp')
dlogexp('vr_b + vr_emp')
dlogexp('23 + "2"')
dlogexp('23 - "2"')
dlogexp('23 - "2"')
dlogexp('true & false')
dlogexp('true && false')
dlogexp('true && undefined')
dlogexp('false && undefined')
dlogexp('true && undefined')
dlogexp('null && "11"')
dlogexp('null && "11"')
dlogexp('1 / undefined')
dlogexp('(42 == "42")')
dlogexp(' 42 === "42" ')
