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
        localStorage.setItem('vai_searchData',JSON.stringify(data));
    }catch(e){
        console.log(e);
    }
}
function showData(data){
    console.log("In the show data",data);
    data.map(({img,price,MRP,Name,Rating})=>{
        let div=document.createElement('div');
        let img1=document.createElement('img');
        img1.src=img;
        img1.setAttribute('style','width:95%; padding:7px')
        img1.onclick=()=>{
            let arr=[];
            let obj={
                img:img,
                price:price,
                MRP:MRP,
                Name:Name,
                Rating:Rating
            }
            arr.push(obj);
            console.log(arr);
            localStorage.setItem('product',JSON.stringify(arr));
            window.location.href="product.html";
        }
        console.log(price,MRP,Name,Rating);
        let price_div=document.createElement('div');
        price_div.id="price";
        let p1=document.createElement('p');
        p1.textContent=price;
        let p2=document.createElement('p');
        p2.textContent=`MRP:${MRP}`;
        price_div.append(p1,p2);
        div.append(img1,price_div);
        document.querySelector('#vai_show').append(div);

    })
}
//This is function for the when we click on any filter
function click_fil(){
    let val=document.querySelector('.class');
    console.log(val);
}

