// export default function ToDO({task,isDone}){
//     return(
//         <li>Task :{task}</li>
//     )
// }
export default function ToDo({task,isDone}){
    if(isDone){
        return(
            <li>Done : {task}</li>
        )
    }
    else{
        return(
            <li>DO Now : {task}</li>
        )
    }
}