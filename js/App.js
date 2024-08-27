//Assigment Operator
/*let x =10
let y =20
alert(x+y);
//Multiplication Operator
//let a =50;
//let b =20;
console.log(50*20);



   const votingAge =18
   let userAge =90
   console.log(userAge > votingAge ? `you are eligible` : `you are not eligible`);

//let num = 50
//console.log(num % 2 ==0 ? `is an even number` : `is an odd number`);


let num = 0

console.log(
   num > 0 ? 'Positive' : (num < 0 ? 'Neg' : 'Nutral')
 );

 //let a =1000
 //let b =2000
 //let c =3000
 //let d =4000
 // console.log(
 // a > b && a > c ? "A greater" : 
 //   (b > a && b > c ? ("B Greater") : (
 // c > a && c > d ? "C Greater" : "D Greater"
 //   ))
//
 // );
let a =100000
let b =2000
let c =3000
let d =4000

console.log(
    a > b && a > c ? `A greaterden` :
    (b > a && b > c ? (`B greaterden`) :
    (c >a && c > d ? (`C greaterden`): `D gerterden`
      
     ) )
);
*/


//light
let on = document.querySelector(`.on`);
let img =document.querySelector(`img`);
let off = document.querySelector(`.off`)
on.addEventListener(`click`,function(){
   img.src = "https://www.w3schools.com/js/pic_bulbon.gif";
});
off.addEventListener(`click`,function(){
   img.src ="https://www.w3schools.com/js/pic_bulboff.gif";
});
//light end

let inc = document.querySelector(`.inc`);
let input = document.querySelector(`.input`);
let dec = document.querySelector(`.dec`);

inc.addEventListener(`click`, function(){
   
   if(Number(input.value) <4){
      input.value = Number(input.value) + 1;
   }
   else{
      inc.style.cursor = `not-allowed`;
   }
})


dec.addEventListener(`click`, function(){
   if(Number(input.value) <=4){
      if(Number(input.value) ==1){
         dec.style.cursor = `not-allowed`;
      }else{
         let text = Number(input.value);
         input.value = text - 1

      }
   }
})


let colorBg = document.querySelector(`.color`);
let bn = document.querySelector(`.bn`);

bn.addEventListener(`click`, function(){
   let red = Math.floor(Math.random() *255);
   let green = Math.floor(Math.random() *255);
   let blue = Math.floor(Math.random() *255);

   colorBg.style.background = `rgb(${red}, ${green}, ${blue})`;
});






