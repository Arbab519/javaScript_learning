fetch("../todos/mario.json").then(response=>{
    console.log("Resolve");
    return response.json();
}).then(data=>{
    console.log(data);
}).catch(err=>{
    console.log( "Promise Rejected", err);
})
