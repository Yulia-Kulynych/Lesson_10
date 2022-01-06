 
/*1
let User = {};

function isEmpty(obj){
    for (let key in obj){
        return false;
    }
    return true;
}
console.log (isEmpty(User));
//User[name]="Jim";
//console.log (isEmpty(User));
*/

/*2
let User = {
    name: "Jim",
    age: 30,
}

function multiplyNumeric(obj){
    for (let key in obj){
        if (typeof(obj[key])=='number'){
        obj[key]*=2;
        }
        else {
            obj[key]=obj[key];
        }
    }
}

multiplyNumeric(User)
console.log (User)
*/
/*3
function readNumber(){
    let num;
    do {
        num=prompt("Input number");
        console.log(num)
    }
    while (!isFinite(num) & num!==null & num!=='' ) //|| num!==null || num!==''
    return num;
}
readNumber()
*/
/*4

function random(min, max){
    alert(Math.random()*(max));
    
}
random(1,3)
*/
/*5
function randomInteger(min, max){
    alert(Math.trunc(min+Math.random()*(max-min+1)));
    
}
randomInteger(1,5)
*/
/*6
function ucFirst(str){
    let a = str[0].toUpperCase()
    alert (a+str.slice(1))
    
}
ucFirst('today')
*/
/*7
function checkSpam(str){
    str=str.toLowerCase();
    if (str.includes("xxx")||str.includes("viagra")){
        alert(true)
    }
    else{
        alert(false)
    }
}
checkSpam('XxxxViagra')
*/
/*8
function truncate(str, maxlength){

    if (str.length>maxlength){
    str=str.slice(0, (maxlength-3))
    alert(str+("..."))
    }
    else {
        alert(str)
    }
}

truncate("Hjs", 10)
*/
/*9
function  extractCurrencyValue(str){
    return (str.slice(1))
}
alert (extractCurrencyValue("$120"))
*/
/*10
function sumInput(){
    let arr = [];
    while (true){
    let value = prompt ("Input number");

    if (value=="" || value ==null || !isFinite(value)) break
    arr.push(+value);
    }
    //alert (arr)
    
    let sum=0;
    for (let elem=0; elem<arr.length; elem++){
        
        sum+=arr[elem]
    }
    alert ("the sum of elements is " + sum)
     
}

sumInput()
*/

/*12
function checkAge(age) {
    if (age > 18) {
    return true;
    } 
    else {
    // ...
    return confirm('Родители разрешили?');
    }
   }

   alert(checkAge(20) )
   */

   /*function checkAge(age) {
    if (age > 18) {
    return true;
    }
    // ...
    return confirm('Родители разрешили?');
   }
   alert(checkAge(17) )
   // функции выполняются одинаково
   */ 

    /*13
    function checkAge(age){
    if (age > 18) {
        return true;
    } 
    else {
        return confirm('Родители разрешили?');
    }
   }*/

   /*function checkAge(age){
   return ((age > 18) ? true : confirm('Родители разрешили?'));
   }
   alert (checkAge(17));
    */

   /*function checkAge(age){
    return ((age > 18) || confirm('Родители разрешили?'));
    }
    alert (checkAge(17));
    */

    /*14
    function  min(a,b){
        let min=Math.min(a,b);
        return min
    }
    alert (min(2,-10))
    */

    /*15
    function   pow(x,n){
        x=+prompt('Введите число x');
        n=+prompt('Введите степень (натуральное число) n');
        
        let powof
        if (Number.isInteger(n) && n>0){
            powof=Math.pow(x,n);
        }
        else {
            alert('Введите степень (натуральное число) n')
        }
        return powof;
   }
    alert (pow())
    */
   /*16
    function ask(question, yes, no) {
        if (confirm(question)) yes()
        else no();
       }
       ask(
        "Вы согласны?",
        () => alert("Вы согласились."),
        () => alert("Вы отменили выполнение.")
       );
     */

      
    /*17
    let income = 3333;
    let outcome = 1750;
    let cost = 8000;
    let month = Math.ceil(8000/(3333-1750));
    alert (month)   //6 month
    */
    /*
    function howMany(income, outcome, cost){
        income=+prompt ('income');
        outcome=+prompt ('outcome');
        cost=+prompt ('cost');
        let month = Math.ceil(cost/(income-outcome));
        return month;
    }
    alert ("you need " + howMany () +" month")
    */
/*18
function sumInput(){
    let arr = [];
    let i=0;

    while  (i<10){
    let value = +prompt ("Input number");
    if (value < 0){
        arr.push(value);
        }
    
    i++;
    }

    let sum=0;
    for (let elem=0; elem<arr.length; elem++){
        
        sum+=arr[elem]
        }
    alert ("the sum of negative elements is " + sum)
     
}
sumInput()
*/
/*19
let fruits = ["Яблоки", "Груша", "Апельсин"];
// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");
// что в fruits?
alert( fruits.length );//4 - что fruits, что shoppingCart - это ссылки на обьект, на один и тот же обьект (массив)
alert( fruits );
*/

/*20
let style=["Джаз", "Блюз"]
style.push("Рок-н-ролл");
alert (style);
style[Math.floor(style.length-1)/2]="Классика";
alert (style);
alert(style.shift());
alert (style);
style.unshift("Рэп", "Регги" );
alert (style);
*/
/*21
let arr = ["a", "b"];
arr.push(function() {
 alert( this );
})
arr[2]();//3 элемента - a, b и функция
*/
