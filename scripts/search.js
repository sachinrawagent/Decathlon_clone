console.log("In the search.js file");
let val=JSON.parse(localStorage.getItem('search'));
val=val.toLowerCase();
getData(val);
async function getData(val){
    console.log(val);
    try{
        let res=await fetch(`http://127.0.0.1:4000/api/${val}`);
        let data=await res.json();
        showData(data);
    }catch(e){
        console.log(e);
    }
}
function showData(data){
    console.log("In the show data",data);
}

