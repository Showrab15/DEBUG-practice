// set localStorage with key and value 
//  localStorage.setItem('key', 'value')
const one = localStorage.setItem('name', 'shakib khan')
const two = localStorage.setItem('age', '40')

// get item from localStorage by key name of setItem
// localStorage.getItem('key')
const three = localStorage.getItem('name')
const four = localStorage.getItem('age')
console.log(three)
console.log(four)

// remove item from localStorage by key name of setItem
//localStorage.removeItem('key')
const five = localStorage.removeItem('name')
const six = localStorage.removeItem('age')

// set an object in localStorage
//localStorage.setItem('key', JSON.stringify(object nme))
const obj ={
    firstName: 'abrham',
    lastName : 'linkon'
}
const objStringify  =JSON.stringify(obj)
const seven = localStorage.setItem('obj', objStringify)

// get an object of localStorage
const eight = JSON.parse(localStorage.getItem('obj'))
console.log(eight)

// clear all the localStorageItem
//  localStorage.clear()