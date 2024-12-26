// // // // // // // Code goes here!
// // // // // // // console.log("abhishek kumar singh ")
// // // // // // // const names:Array<string>=[];
// // // // // // // const names=["Abhishe","kumar","singh"];
// // // // // // // const names:any[]=[]
// // // // // // const names:Array<string>=[];
// // // // // // // names[0].split('');
// // // // // // const promise:Promise<string>=new Promise((resolve,reject)=>{
// // // // // //     setTimeout(() => {
// // // // // //         resolve('This is done')
        
// // // // // //     }, 2000);
// // // // // // })

// // // // // function merge<T,U>(objA:T,objB:U){
// // // // //     return Object.assign(objA , objB)
// // // // // }
// // // // // const mergeObj=merge<{name:string,{age:number}>({name:"Max"},{age:30});
// // // // // // mergeObj.name

// // // // // function merge<T,U>(objA:T,objB:U):T&U{
// // // // //     return Object.assign({},objA,objB);
// // // // // }
// // // // // const mergeObj=merge({name:"abhishek",hobbies:['sports']},{age:30});
// // // // // console.log(mergeObj)
// // // // interface Lengthy{
// // // //     length:number;
// // // // }
// // // // function countAndPrint<T extends Lengthy>(element:T):[T,string]{
// // // //     let descriptionTest='Got no value.';
// // // //     if(element.length===1){
// // // //         descriptionTest='Got1 element';
// // // //     }
// // // //     else if(element.length>1){
// // // //         descriptionTest='Got'+element.length+'elements';
// // // //     }
// // // //     return [element,descriptionTest];
// // // // }
// // // // console.log(countAndPrint(["sports","cooking"
// // // // ]))
// // // function extractAndConver(obj:object,key:string){
// // //     return obj[key];
// // // }
// // // console.log(cons)




// // class DataStorage<T> {
// //     private data: T[] = []; // Explicitly define data as an array of type T

// //     addItem(item: T): void {
// //         this.data.push(item);
// //     }

// //     removeItem(item: T): void {
// //         const index = this.data.indexOf(item);
// //         if (index !== -1) {
// //             this.data.splice(index, 1);
// //         }
// //     }

// //     getItems(): T[] {
// //         return [...this.data]; // Return a copy of the array
// //     }
// // }

// // const textStorage = new DataStorage<string>();
// // textStorage.addItem("Max");
// // textStorage.addItem("Manu");
// // textStorage.removeItem("Max");
// // console.log(textStorage.getItems()); // Output: ["Manu"]

// // const numberStorage=new DataStorage<number>();
// // const objStorage=new DataStorage<object>();
// // objStorage.addItem({name:"Max"});
// // objStorage.addItem({name:"Manu"});
// // objStorage.removeItem({name:"Manu"}); 
// // console.log(objStorage.getItems());

// interface CourseGoal{
//     title:string;
//     description:string;
//     completeUntil:Date;
// }
// function createCourseGoal(
//     title:string,
//     description:string,
//     date:Date
// ):CourseGoal{
//     let courseGoal:Partial<CourseGoal>={};
//     courseGoal.title=title;
//     courseGoal.description=description;
//     courseGoal.completeUntil=date;
//     return courseGoal as CourseGoal;

// }

const names:Readonly<string[]>=['max','anna'];
// names.push('Manu');
// name.pop()
console.log(names)