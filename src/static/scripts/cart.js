let cart_data = JSON.parse(localStorage.getItem('cart_section'));
console.log("In the cart page", cart_data);
let tp = 0;
showProd(cart_data);
showOrder(cart_data);
function showProd(data, index) {
    data.map(({ img, price, Rating, name, MRP }) => {
        let main_div = document.createElement('div');
        main_div.id = "vai_maindiv";
        let prod_img = document.createElement('img');
        prod_img.src = img;
        prod_img.id = "prod_id";
        let info_div = document.createElement('div');//This is for the display information
        info_div.id = "vai_infodiv";
        let info_div1 = document.createElement('div');//This is for del button and name of the product
        info_div1.id = "vai_infodiv1";
        let info_div2 = document.createElement('div');
        info_div2.id = "vai_infodiv2";//This is for rating and the price of the product
        let price1 = document.createElement('p');
        price1.textContent = price;
        let rating = document.createElement('h4');
        rating.textContent = Rating;
        let rate_img = document.createElement('img');
        rate_img.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNC4zMTYiIGhlaWdodD0iMjMuMTI2IiB2aWV3Qm94PSIwIDAgMjQuMzE2IDIzLjEyNiI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6I2ZkYjY1ZDt9PC9zdHlsZT48L2RlZnM+PHBhdGggY2xhc3M9ImEiIGQ9Ik0xMi4xNTgsMS4zMThsMy43NTcsNy42MTMsOC40LDEuMjIxLTYuMDc5LDUuOTI1LDEuNDM1LDguMzY3LTcuNTE0LTMuOTUtNy41MTQsMy45NSwxLjQzNS04LjM2N0wwLDEwLjE1Miw4LjQsOC45MzFaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC0xLjMxOCkiLz48L3N2Zz4=";
        info_div2.append(price, rating, rate_img);
        let info = document.createElement('h3');
        info.textContent = name;
        let del = document.createElement('button');
        del.id = "vai_delbtn";
        del.onclick = () => {
            cart_data.splice(index, 1);
            localStorage.setItem('cart_section', JSON.stringify(cart_data));
            location.reload();
        }
        del.textContent = "Delete";
        info_div1.append(info, del);
        info_div.append(info_div1, info_div2);
        main_div.append(prod_img, info_div);
        document.querySelector('#vai_prod').append(main_div);

    })

}
function showOrder(data) {
    console.log("In the show order data", data);
    data.map(({ img, price, Rating, Name, MRP }) => {
        price = price.split("");
        price.splice(0, 2);
        price = price.join("")
        price = Number(price);
        tp = tp + price;
    })
    if (tp != 0) {

        let main_div = document.createElement('div');//This is main div of the order
        let order_text = document.createElement('h3');//This is for the show the text 
        order_text.textContent = "Order Summary";
        let price_div = document.createElement('div');//This div is for the total price showing
        price_div.id = "vai_totprice";
        let price_text = document.createElement('p');
        price_text.textContent = "Total Product (Inc GST)";
        let total_price = document.createElement('p');
        // tp = tp + price;
        total_price.textContent = `₹${tp}`;
        price_div.append(price_text, total_price);
        //This div is for the delivery charges
        let del_chargediv = document.createElement('div');
        del_chargediv.id = "vai_delChargediv";
        let del_text = document.createElement('p');
        del_text.textContent = "Estimate delivery fee";
        let del_charge = document.createElement('p');
        del_charge.textContent = '₹129'
        del_chargediv.append(del_text, del_charge);
        let line = document.createElement('hr');
        //This is for the last total price
        let last_tpicediv = document.createElement('div');
        last_tpicediv.id = "vai_lastTotdiv";
        let total = document.createElement('h3');
        total.textContent = "Total";
        let last_total = document.createElement('h3');
        last_total.textContent = `${tp + 129}`;
        last_tpicediv.append(total, last_total);
        let PSum= tp+129
        localStorage.setItem("Tsum",JSON.stringify(PSum))
        console.log(PSum)
        //proceed to checkout button
        let proc_btn = document.createElement('button');
        proc_btn.onclick = () => {
            window.location.href = "delivery.html";
        }
        proc_btn.id = "vai_procbtn";
        proc_btn.textContent = "PROCEED TO CHECKOUT";
        main_div.append(order_text, price_div, del_chargediv, line, last_tpicediv, proc_btn);
        document.querySelector('#vai_payment').append(main_div);
        console.log(tp, "Total price is");
    }
}
