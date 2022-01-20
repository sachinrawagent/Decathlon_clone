let val = JSON.parse(localStorage.getItem('product'));
console.log(val);

val.map((ele) => {
    console.log(ele);
    let img = document.createElement('img');
    img.src = ele.img;
    img.id = "vai_prod_img"
    document.querySelector('#vai_prod_img').append(img);
    let info_div = document.createElement('div');
    let info = document.createElement('h3');
    info.textContent = ele.Name;
    let price_div = document.createElement('div');
    price_div.style.display = "flex";
    let p1 = document.createElement('p');
    p1.textContent =ele.price;
    p1.id = "vai_price";
    let p2 = document.createElement('p');
    p2.textContent = `MRP:${ele.MRP}`;
    price_div.append(p1,p2);
    document.querySelector('#vai_prod_info').append(price_div);
})


