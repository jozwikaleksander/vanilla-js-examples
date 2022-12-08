const codeExamples = document.querySelectorAll('.code-example');

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

    const codeBtns = codeExample.querySelectorAll('.code-btn');

    codeBtns.forEach((codeBtn, i) => {
        codeBtn.addEventListener('click', (e) => {
            changeVisibility(code, parseInt(e.target.value));
        });
    });
});