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
// let myInput =document.getElementById("input_id")
// let arrayNames = [];
// function getNamesOfStudentsAndSortThem() {
//  if(arrayNames.length < 10){
//    arrayNames.push(myInput.value);
//    myInput.value =""
//   }

// console.log(arrayNames.join("-"));
// }

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

// 7
function printCompanysArray() {
  let companysArray = [
    "dell",
    "asus",
    "meta",
    "apple",
    "android",
    "nasa",
    "wix",
    "Intel",
    "Elbit Systems",
    "IAI",
  ];
  for (let i = 0; i < companysArray.length; i++) {
    my_p.innerHTML += companysArray[i] + " ";
  }
}
printCompanysArray();

function printArrayPhotos() {
  let photosArray = [
    "https://dlcdnwebimgs.asus.com/gain/f7f93bac-7991-4703-bbfa-6daebf038f90/",
    "https://dlcdnwebimgs.asus.com/gain/f7f93bac-7991-4703-bbfa-6daebf038f90/",
    "https://dlcdnwebimgs.asus.com/gain/f7f93bac-7991-4703-bbfa-6daebf038f90/",
    "https://www.topmarket.co.il/images/feature_variant/3/Dell_Logo.png",
    "https://yt3.ggpht.com/AAnXC4o1n8BKDsO5l6Uc71rf7WOJjm2-aUHzkvyp9vGYB5F4UtXWTecVzvPOBCFK0bNYsZlD7Hk=s900-c-k-c0x00ffffff-no-rj",
    "https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?202203280513",
    "https://elbitsystems.com/media/LOGO-TN.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Android_robot.svg/1745px-Android_robot.svg.png",
    "https://s3-symbol-logo.tradingview.com/intel--600.png",
    "https://mma.prnewswire.com/media/1430955/Cognyte_Logo.jpg?p=twitter",
    "http://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4OAgf?ver=6a31",
    "https://d1myhw8pp24x4f.cloudfront.net/software_logo/1568784088_logo_mid.png",
  ];
  for (let i = 0; i < photosArray.length; i++) {
    div_id.innerHTML +=
      "<div><img style=' hegiht:50px; width:50px' src=" +
      photosArray[i] +
      ">" +
      "</div>";
  }
}
printArrayPhotos();

function printObjects() {
  var arrayObjects = [];
  let user = {
    name: "eldad" ,
    lastName: "brhano",
    age: "23",
    city: "afula"
  };
  for (let i = 0; i < 10; i++) {
    arrayObjects.push(user);
    div_objects.innerHTML +=
      user.name + " " + user.lastName + " " + user.age + " " + user.city + " " ;
  }
}
printObjects();
