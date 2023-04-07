let getTodos= ( resource,callback)=>{

    const request= new XMLHttpRequest();
    
    request.addEventListener("readystatechange",()=>{
        if (request.readyState === 4 && request.status===200) {
            let data =  JSON.parse(request.responseText);
            callback(undefined,data)
        }else if (request.readyState === 4) {
            callback("Could nor fetch data",undefined)
        }
    })
     request.open("GET",resource);
     request.send();
}    

getTodos("../todos/luigi.json",(err, data)=>{
 console.log(data); 
 getTodos("../todos/mario.json",(err,data)=>{
    console.log(data); 
    getTodos("../todos/mario.json",(err,data)=>{
       console.log(data); 
   });
 });
});

// Example APi
// https://jsonplaceholder.typicode.com/todos/