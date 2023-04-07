let getTodos= (callback)=>{
    
    const request= new XMLHttpRequest();
    
    request.addEventListener("readystatechange",()=>{
        if (request.readyState === 4 && request.status===200) {
            let data =  JSON.parse(request.responseText);
            callback(undefined,data)
        }else if (request.readyState === 4) {
            callback("Could nor fetch data",undefined)
        }
    })
     request.open("GET","https://jsonplaceholder.typicode.com/todos/");
     request.send();
}    

getTodos((err, data)=>{
 console.log('CallBack Fired');
 if (err) {
    console.log(err);
}else{
    //  console.log(data);
    let result = data.filter((user)=> user.userId == 1);
     console.log(result);
 }
});