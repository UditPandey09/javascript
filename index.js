console.log("Visual Studio Code")
const arr=[1,2,3,4,5,6];
//method 1

console.log(arr.length);
console.log(arr[2]);

//method 2
for(let i=0; i< arr.length; i++){
    console.log(arr[i]);
}

//method 3
arr.forEach((element) => {
    console.log(element);
})

//method 4
arr.forEach((element) => {
         console.log(element);
     })


    console.log(arr);

    //to print time
console.log(new Date().getTime());
