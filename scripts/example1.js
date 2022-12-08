const title = document.querySelector('.title');

window.setInterval(() => {
    if(parseInt(title.style.left) < 10){
        title.style.left = '250px';
    }
    else{
        title.style.left = (parseInt(title.style.left) - 3) + 'px';
    }
}, 100);