let val = JSON.parse(localStorage.getItem('product'));
console.log("In the product page",val);
let cart_data=JSON.parse(localStorage.getItem('cart_data')) ||[];
console.log(cart_data,"In the product page")

val.map((ele) => {
    console.log(ele);
    let img = document.createElement('img');
    img.src = ele.img;
    img.id = "vai_prod_img"
    document.querySelector('#vai_prod_img').append(img);
    let info_div = document.createElement('div');
    let info = document.createElement('h3');
    info.id="info";
    info.textContent = ele.Name;
    info_div.append(info);
    let price_div = document.createElement('div');
    price_div.id="vai_pricediv";
    let p1 = document.createElement('p');
    p1.textContent =ele.price;
    p1.id = "vai_price";
    let p2 = document.createElement('p');
    p2.textContent = `MRP:${ele.MRP}`;
    let rating=document.createElement('p');
    rating.textContent=ele.Rating;
    let rate_img=document.createElement('img');
    rate_img.src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNC4zMTYiIGhlaWdodD0iMjMuMTI2IiB2aWV3Qm94PSIwIDAgMjQuMzE2IDIzLjEyNiI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6I2ZkYjY1ZDt9PC9zdHlsZT48L2RlZnM+PHBhdGggY2xhc3M9ImEiIGQ9Ik0xMi4xNTgsMS4zMThsMy43NTcsNy42MTMsOC40LDEuMjIxLTYuMDc5LDUuOTI1LDEuNDM1LDguMzY3LTcuNTE0LTMuOTUtNy41MTQsMy45NSwxLjQzNS04LjM2N0wwLDEwLjE1Miw4LjQsOC45MzFaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC0xLjMxOCkiLz48L3N2Zz4=";
    price_div.append(p1,p2,rating,rate_img);
    let addC_btn=document.createElement('button');
    addC_btn.textContent="ADD TO CART";
    addC_btn.id="cart_btn";
    addC_btn.onclick=()=>{
      cart_data.push(ele);
      console.log(cart_data);
      localStorage.setItem('cart_data',JSON.stringify(cart_data));
      alert("Added Item In Cart Succesfully");
      // window.location.href="cart.html";
    }
    document.querySelector('#vai_prod_info').append(info_div,price_div,addC_btn);
})


