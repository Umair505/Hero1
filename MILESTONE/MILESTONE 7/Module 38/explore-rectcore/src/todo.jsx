// export default function ToDO({task,isDone}){
//     return(
//         <li>Task :{task}</li>
//     )
// }
// export default function ToDo({task,isDone}){
//     if(isDone){
//         return(
//             <li>Done : {task}</li>
//         )
//     }
//     else{
//         return(
//             <li>DO Now : {task}</li>
//         )
//     }
// }

// Conditional rendering: 3 ternary
//conditional ? true : false

// export default function ToDo({task,isDone,time = 0}){
//     return isDone?<li>Done : {task} time : {time}</li>:
//     <li>Not Done : {task}</li>

// }
//condional rendering : 4 &&
// export default function ToDo({task,isDone,time = 0}){
//     return isDone && <li>Done : {task} time:{time}</li>

// }
//condional rendering : 5 ||
// export default function ToDo({task,isDone,time = 0}){
//     return isDone || <li>Not Done task : {task} time:{time}</li>

// }

export default function ToDo({task,isDone}){
    let listItem;
    if(isDone){
            listItem = <li>Done : {task}</li>
    }
    else{
       
            listItem = <li>DO Now : {task}</li>
        
    }
    return listItem;
}