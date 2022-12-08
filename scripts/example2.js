const titleFlowing = document.querySelector('.title-flowing'); // element, który ma być przesuwany
const x = 3; // ilość znaków, które mają być przesunięte w lewo

window.setInterval(() => {
    let content = titleFlowing.textContent; // pobieramy zawartość elementu
    titleFlowing.textContent = content.substring(x) + content.substring(0,x); // przesuwamy zawartość o x znaków w lewo
}
, 100);