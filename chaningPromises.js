let getTodos= (resource)=>{
    return new Promise((resolve, reject)=>{  
       const request= new XMLHttpRequest();
       
       request.addEventListener("readystatechange",()=>{
           if (request.readyState === 4 && request.status===200) {
               let data =  JSON.parse(request.responseText);
               resolve(data);
           }else if (request.readyState === 4) {
               reject("Could nor fetch data");
           }
       })
        request.open("GET",resource);
        request.send();
    });
   
   }    
   
   getTodos("../todos/mario.json")
   .then((data)=>{
    console.log("promise resolved" ,data);
    return getTodos("../todos/luigi.json");
    })
    .then(data=>{
    console.log("promise 2 Resolved" ,data);
    return getTodos("../todos/shaun.json");
    })
   .then(data=>{
    console.log("Pomise 3 Resolved" ,data);
    })
   .catch((err)=>{
       console.log( "Promise Rejected", err);
    });
   
   
   
   
   
   
   
   
   // Example APi
   // https://jsonplaceholder.typicode.com/todos/