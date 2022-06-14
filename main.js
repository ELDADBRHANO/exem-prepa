// 1
// function sortByAToZ(arrayNames) {
// let arraySort = arrayNames.sort();
// console.log(arraySort) 
// }
//  sortByAToZ(["eldad","lior","roei","liron"])

// 2
// function getNumAraayAndSortThem(arrayNum) {
//   let arrayNumber = arrayNum.sort((a,b)=>a-b);
//   console.log(arrayNumber);
// }
// getNumAraayAndSortThem([9,8,7,6,5,4,3,2,1])


// 3
// function sortAraayBigToSmall(arrayNum) {
//   let arrayNumber = arrayNum.sort((a,b)=>b-a);
//   console.log(arrayNumber);
// }
// sortAraayBigToSmall([5,985,21,435,6,7,32,46])

// 4
let myInput =document.getElementById("input_id") 
let arrayNames = [];
function getNamesOfStudentsAndSortThem() {
 if(arrayNames.length < 10){
   arrayNames.push(myInput.value);
   myInput.value =""
  }
console.log(arrayNames.sort()) 
}


// 5
// let arrayAges=[]
// function makeRndArrayNames() {
//   for(let i  = 0 ; i < 10; i++){
//   arrayAges.push(Math.floor(Math.random()*(52-24)+24));
// }
// arrayAges.sort((a,b)=> a-b);
// console.log(arrayAges);
// }
// makeRndArrayNames()

// 6
let some = arrayNames.join("-")
console.log(some);