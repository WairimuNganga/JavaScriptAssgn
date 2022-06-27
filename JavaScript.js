function multiples(){
    for(var i=1;i<=100;i++){
        if(i%3==0 && i%5==0){
            console.log("Fizzbuzz");
    }
        else if(i%3 == 0){
            console.log("Fizz");
    }
        else if(i%5 == 0){
             console.log("Buzz");
    }
        else{
             console.log(i);
    }
  }
}
multiples()
 
function summation(){
    var total = 0;
    for(var i=1;i<=1000;i++){
        if(i%3==0 && i%5==0){
        total+=i;
        }
    }
    console.log(total);
}
summation()

function oddOrEven(n){
    if(n%2 == 0){
        console.log(n,"is even");
    }
    else if(n%2 != 0){
        console.log(n,"is odd");
    }
}
oddOrEven(2)

function largestNum(){
    let num = [-2, 4,-5, 6,0];
    var largest = 0;
    for(var i=0;i<=num.length;i++){
        if(num[i]>largest){
            largest=num[i]
        }
     }
     console.log(largest)

}
largestNum()

function findLargest(){
    let x = 10;
    let y = 40;
    if(x>y){
        console.log(x,"is greater than",y)
    }
    else{
        console.log(y,"is geater than",x)
    }
}
findLargest()

function leapYears(){
    for(var i=2000;i<=2022;i++){
        if( i%4 == 0 && i%100 ==0 || i%400 == 0){
            console.log(i,"is a leap year")
        }
        else{
            console.log(i,"is not a leap year")
        }
    }
}
leapYears()
