let getTodos  = async ()=>{
    const response = await fetch('../todos/mario.json');
    if(response.status!== 200){
        throw new Error('Cannot Fetch data'); 
    }
    const data = await response.json();
    return data;
}  

getTodos()
.then(data=>console.log("resolved", data))
.catch(err=>console.log(err));