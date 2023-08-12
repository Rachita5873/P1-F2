let arr = [
  { id: 1, name: 'john', age: 18, profession: 'developer' },
  { id: 2, name: 'jack', age: 20, profession: 'developer' },
  { id: 3, name: 'karen', age: 19, profession: 'admin' },
];

// Don't worry about consoling these functions, they are already being called on the button clicks.
// Please don't change anything in the index.html file.

function PrintDeveloper() {
  //Write your code here , just console.log
  let fil = arr.filter((val)=>{
    return val.profession == 'developer'
  })

  console.log(fil)
  
}

let arr1 = {id:4,name:"susan",age:"20",profession:"intern"}



function addData() {
  //Write your code here, just console.log
  arr.push(arr1)
  console.log(arr)
}

let arr3 = [
  { id: 5, name: 'Rachi', age: 30, profession: 'developer' },
  { id: 6, name: 'Swati', age: 31, profession: 'admin' },
  { id: 7, name: 'Shweta', age: 32, profession: 'admin' },
];




function concatenateArray() {
  //Write your code here, just console.log
for(let i=0; i<arr3.length; i++){
  arr.push(arr3[i])
}
console.log(arr)
}

function removeAdmin() {
  //Write your code here, just console.log
  let fin = arr.filter((val) => {
    return val.profession != 'admin'
  })
  console.log(fin)
}

// Here is an example of how functions work,
// basically a function is a block of code which can directly access your 'arr' variable since arr is global.
// If I have a function called consoleArr(), that can directly access arr like this to console it.

function consoleArr() {
  console.log('Consoling Array Variable', arr);
  // Over here I can directly access the variable.
}
