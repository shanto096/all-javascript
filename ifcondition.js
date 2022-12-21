
// right number find
let arr =[1,2,3,4,5,6,7,8,9,10]
if(arr[1] == 10){
    console.log("yes right number",arr[1])
}
else if( arr[2] == 10){
    console.log("yes right number",arr[2])
}
else if( arr[3] == 10){
    console.log("yes right number",arr[3])
}
else if( arr[4] == 10){
    console.log("yes right number",arr[4])
}
else if( arr[5] == 10){
    console.log("yes right number",arr[5])
}
else if( arr[6] == 10){
    console.log("yes right number",arr[6])
}
else if( arr[7] == 10){
    console.log("yes right number",arr[7])
}
else if( arr[8] == 10){
    console.log("yes right number",arr[8])
}
else if( arr[9] == 10){
    console.log("yes right number",arr[9])
}
else{
    console.log("not found")
}


let arr2= [10,20,30,40,50];

if(arr[2] == 30){
    console.log("yes1 this is right number",arr.indexOf(arr2[2]))
}
else{
    console.log("no1 this is right number")
}
if(arr[4] == 40){
    console.log("yes2 this is right number",arr.indexOf(arr2[4]))
}
else{
    console.log("no2 this is right number")
}
if(arr[0] == 30){
    console.log("yes3 this is right number",arr.indexOf(arr2[0]))
}
else{
    console.log("no3 this is right number")
}


// gpa genaretor
function gpaGenaretor(gpa) {
      if (gpa >= 80) {
           return ('A+');
           }
      if (gpa >= 70) {
          return('A');
           }
      if (gpa >= 60) {
          return('B');
        }
      if (gpa >= 40) {
          return('C');
        }
        if (gpa >= 33) {
          return('D');
       }
      if (gpa => 30) {
          return('F');
        }
    
  
}
console.log(gpaGenaretor(33));

//find big number operator || ,&&
let num1 =10;
let num2 = 40;
let num3 = 30;
if (num1>num2 && num1>num3) {
     console.log('number-1 boro');
}else if (num2>num1 && num2>num3) {
     console.log('number-2 boro');
}else{
     console.log('number-3 boro');
}

// fiboNacci
 function fiboNacci(num) {
  const fibo = [0, 1];
  if (typeof num !== "number") {
    return "Please give a number";
  } else if (num <= 2) {
    return "Enter number greater than 2";
  }
  for (let i = 2; i <= num; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2]; // fibo[3] = 2 + 1

   
  }
  return fibo;
}
console.log(fiboNacci(3));


// even&odd number
function oddEven(number) {
     if (number%2 === 0) {
          return('even numer ' + number);
     }else{
          return('odd number ' + number);
     }
}
console.log(oddEven(11));
