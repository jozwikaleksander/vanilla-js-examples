const codeExamples = document.querySelectorAll('.code-example');
console.log(codeExamples);

const changeVisibility = (code, activeCode) => {
    code.forEach((code,i) => {
        if(i != activeCode){
            code.style.display = 'none';
        }
        else{
            code.style.display = 'block';
            code.style.height = 'auto';
        }
    });
}

codeExamples.forEach((codeExample) => {
    const code = codeExample.querySelectorAll('code');
    changeVisibility(code, 0);

    console.log(code);
    const codeBtns = codeExample.querySelectorAll('.code-btn');

    console.log(codeBtns);
    codeBtns.forEach((codeBtn, i) => {
        codeBtn.addEventListener('click', (e) => {
            console.log(e.target.value);
            changeVisibility(code, parseInt(e.target.value));
        });
    });
});