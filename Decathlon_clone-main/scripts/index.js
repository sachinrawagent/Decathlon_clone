console.log("This is the index.js is called");
let arr = ["Sports", 'men', 'women', 'kids'];
let img = document.createElement('img');
img.src = "https://cdncontent.decathlon.in/_next/static/images/logo-93d12d8cff484ab736d2a39f15bf66d8.svg";
img.id = "dec_logo";
img.onclick = () => {
    window.location.href = "index.html";
}
document.querySelector('#vai_logo').append(img);
document.getElementById('vai_sports').addEventListener('click', () => {
    setTimeout(() => {
        console.log('click on sports')
        let show = document.getElementById('vai_cat_click'), div = document.createElement('div');
        show.style.display = 'inline-block';
        show.style.position = "fixed";
        div.id = 'show_sport';
        arr.map((ele, index) => {
            let h3 = document.createElement('p');
            h3.textContent = ele;
            h3.onclick = () => {
                localStorage.setItem('search', JSON.stringify(ele));
                console.log('click on', index);
                window.location.href = "search.html";
            }
            div.append(h3);
            show.append(div);

        })
    }, 1000);
})

//This is for the image icon click
let img_ic = document.createElement('img');
img_ic.src = "https://img.icons8.com/material-outlined/24/000000/search--v1.png";
img_ic.id = "vai_icon";
document.querySelector('#vai2_search').append(img_ic);
img_ic.onclick = () => {
    let val = document.getElementById('vai_srchitem').value;
    val = val.trim();
    console.log(val, val.length);
    if (val.length == 0) {
        alert("Please enter some category");
        location.reload();
    } else {
        localStorage.setItem('search', JSON.stringify(val));
        console.log(val);
        window.location.href = "search.html";

    }
}
