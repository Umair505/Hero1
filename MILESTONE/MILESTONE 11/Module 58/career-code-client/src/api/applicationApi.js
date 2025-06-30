export const myApplicationsPromise = email =>{
    return fetch(`http://localhost:3000/applications?email=${email}`,{
        credentials:'include', // Include cookies in the request
        
    })
        .then(res => res.json())
}