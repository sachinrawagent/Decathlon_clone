console.log("In the search.js file");
let val = JSON.parse(localStorage.getItem('search'));
val = val.toLowerCase();
document.querySelector('title').innerHTML = `Result for ${val}`;
getData(val);
async function getData(val, page = 1) {

    console.log(val);
    try {
        let res = await fetch(`http://localhost:2400/product/?catogery=${val}&page=${page}`);
        let data = await res.json();
        showData(data);
        localStorage.setItem('vai_searchData', JSON.stringify(data));
    } catch (e) {
        console.log(e);
    }
}
function showData(data) {
    console.log("In the show data", data);
    document.querySelector('#vai_show').innerHTML = "";
    data.map(({ img, price, MRP, Name, Rating }) => {
        let div = document.createElement('div');
        let img1 = document.createElement('img');
        img1.src = img;
        img1.setAttribute('style', 'width:95%; padding:7px;border-radius:18px')
        img1.onclick = () => {
            let arr = [];
            let obj = {
                img: img,
                price: price,
                MRP: MRP,
                Name: Name,
                Rating: Rating
            }
            arr.push(obj);
            console.log(arr);
            localStorage.setItem('product', JSON.stringify(arr));
            window.location.href = "product.html";
        }
        console.log(price, MRP, Name, Rating);
        let price_div = document.createElement('div');
        price_div.id = "price";
        let p1 = document.createElement('p');
        p1.textContent = price;
        p1.id = "vai_price";
        let p2 = document.createElement('p');
        p2.textContent = `MRP:${MRP}`;
        price_div.append(p1, p2);
        let info = document.createElement('p');
        info.textContent = Name;
        info.style.marginLeft = "15px";
        let rate_div = document.createElement('div');
        // rate_div.style.display = "flex";
        let rate = document.createElement('h4');
        rate.textContent = Rating;
        rate.style.marginLeft = "15px";
        let rate_img = document.createElement('img');
        rate_img.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNC4zMTYiIGhlaWdodD0iMjMuMTI2IiB2aWV3Qm94PSIwIDAgMjQuMzE2IDIzLjEyNiI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6I2ZkYjY1ZDt9PC9zdHlsZT48L2RlZnM+PHBhdGggY2xhc3M9ImEiIGQ9Ik0xMi4xNTgsMS4zMThsMy43NTcsNy42MTMsOC40LDEuMjIxLTYuMDc5LDUuOTI1LDEuNDM1LDguMzY3LTcuNTE0LTMuOTUtNy41MTQsMy45NSwxLjQzNS04LjM2N0wwLDEwLjE1Miw4LjQsOC45MzFaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC0xLjMxOCkiLz48L3N2Zz4=";
        rate_img.style.marginLeft = "10px";
        rate_img.style.width = "26%"
        rate_div.setAttribute('style', 'border:1px solid transparent;border-radius:10px;display:flex;width:40%;margin-left:15px;height:10%');
        rate_div.append(rate, rate_img);
        div.append(img1, price_div, info, rate_div);
        document.querySelector('#vai_show').append(div);
    })
}

//In the same code we need to add the pagination that its,
let pag_div = document.createElement('div');
pag_div.id = "pag_div";
for (let i = 0; i < 5; i++) {
    let btn = document.createElement('button');
    btn.id = "vai_btnPag";
    btn.textContent = i + 1;
    pag_div.append(btn);
    btn.onclick = () => {
        getData(val, i + 1);
    }
    document.querySelector('#vai_pagination').append(pag_div);
}


//This is function for the when we click on any filter
async function filter() {
    let val = document.getElementsByClassName('val'); //Get the all class
    let brand, price_val;
    for (let i = 0; i < val.length; i++) {
        if (val[i].checked == true) {
            let check = val[i].value;
            // console.log(check);
            if (check == 'Adidas' || check == 'Nike') {
                brand = check;
            }
            // low_price    high_price
            if (check == 'low_price' || check == 'high_price') {
                price_val = check;
            }
        } else {
            continue;
            console.log("Not true");
        }
    }
    console.log(brand);

    let response = await fetch(`http://localhost:2400/product/filter?Brand=${brand}`);

    let data = await response.json();

    if (price_val == 'low_price') {
        data.sort((a, b) => {
            return a.NewPrice - b.NewPrice;
        })

    }
    if (price_val == 'high_price') {
        data.sort((a, b) => {
            return b.NewPrice - a.NewPrice;
        }) //This is for the high to low price
    }
    console.log(data);
    showData(data);


}

