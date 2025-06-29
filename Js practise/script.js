// // // Promise code  
// function asynchFunc1()
// // // {
// // //     return new Promise((resolve,reject) =>{
// // //         setTimeout (() =>
// // //         {
// // //             console.log("Data1");
// // //             resolve("succes");
// // //         },3000);
// // //     });
// // // }
// // // function asynchFunc2()
// // // {
// // //     return new Promise((resolve,reject) =>{
// // //         setTimeout (() =>
// // //         {
// // //             console.log("Data2");
// // //                         resolve("succes");
// // //         },3000);
// // //     });
// // // }

// // // function asynchFunc3()
// // // {
// // //     return new Promise((resolve,reject) =>{
// // //         setTimeout (() =>
// // //         {
// // //             console.log("Data3");
// // //             resolve("succes");
// // //         },3000);
// // //     });
// // // }

// // // console.log("Fetching Data1");
// // // let p1 = asynchFunc1();
// // // p1.then( (res) =>{
// // // console.log("Fetching Data2");
// // // let p2 = asynchFunc2();
// // // p2.then ((res) =>{
// // // console.log("Fetching Data3");
// // // let p3 = asynchFunc3();
// // // p3.then ((res) =>{});
// // // });
// // // });

// // function getData(dataId)
// // {
// //     return new Promise (( resolve,reject ) =>{
// //         setTimeout( () =>{
// //             console.log("Data",dataId);
// //             resolve("Succes");
// //         },4000)
 
// //     });
// // }
 
// // console.log("Fetching Data1");
// // getData(1).then((res) =>{
// //     console.log("Fetching Data2");
// //     return getData(2).then((res) =>{
// //         console.log("Fetching Data3");
// //         return getData(3).then((res) =>{
// //             console.log("Fetching Data4");
// //             return getData(4);
// //         })
// //     })
// // })



// function api()
// {
//     return new Promise ((resolve,reject ) =>{
//         setTimeout(() =>{
//             console.log("Weather Data");
//             resolve(2000);
//         },2000)
//     });
// }

// async function getWeatherData() {
//     await api();
//     await api();
//     await api();
//     await api();
    
// }

// function getData(dataId)
// {
//     return new Promise (( resolve, reject) =>{
//         setTimeout(() =>{
//             console.log("Data" , dataId);
//             resolve("Succes");
//         },2000);
//     });
// }

// async function getDataId(dataId) {
//     await getData(1);
//     await getData(2);
//     await getData(3);
//     await getData(4);
//     await getData(5);
//     await getData(6);
//     await getData(7);
    
    
    
// }


function task(message ,delay)
{
    return new Promise ((resolve,reject) =>{
        setTimeout(() =>{
            console.log(message);
            resolve();
        },delay);
    } );
}
task('Task 1 completed',2000)
.then(() => task('Task 2 completed',2000))
.then (() => task('Task 3 completed',2000))
.then (() => task('Task 4 completed',2000))
.then( () => task('hi' ,1000));