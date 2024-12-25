// // // // // function add(n1:number,n2:number){
// // // // //     // console.log(typeof number1)
// // // // //     if(typeof n1 !=='number'||typeof n2!=='number')
// // // // //     {
// // // // //         throw new Error('Incorrect input')
// // // // //     }
// // // // //     else {

// // // // //         return n1+n2;
// // // // //     }
// // // // // }
// // // // // const number1='5';
// // // // // const number2=2.8;
// // // // // const result =add(number1,number2)
// // // // // console.log(result)
// // // // function add(n1:number,n2:number,showResult:boolean,phrase:string){
// // // //     if(showResult){
// // // //         // return n1+n2;
// // // //         const sum = n1+n2;
// // // //         console.log(phrase+sum);
// // // //     }
// // // // }

// // // // const number1=10;
// // // // const number2=22.5;
// // // // const printresult=true;
// // // // const phrase='Result is..'
// // // // const result=add(number1,number2,printresult,phrase);
// // // // console.log(result);

// // // const person:{
// // //     name:string;
// // //     age:number;
// // // }={
// // //     name:'abhishek',
// // //     age:30
// // // };
// // // console.log(person.name);
// // const product :{
// //     id:string;
// //     price:number;
// //     tags:string[];
// //     details:{
// //         title:string,
// //         description:string,
// //     }
// // }={
// //     id:'abc1',
// //     price:12.99,
// //     tags:['great-offer','hot-and-renew'],
// //     details:{
// //         title:'Red Carpet',
// //         description:'A great carpet almost brand new !'
// //     }
// // }
// // console.log(product);

// const person={
//     name:'abhishek',
//     age:30,
//     hobbies:['sports','cooking'],
//     role:[2,'author']
// };
// person.role.push('admin');
// person.role[1]=10;
// console.log(person.role);
// // let favoriteActivites:any[];
// // favoriteActivites=['sports',1];
// // console.log(person,favoriteActivites);

function sendAnalytics(data){
    console.log(data);
};
sendAnalytics('this is abhishek')