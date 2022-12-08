const formEx5 = document.querySelector('#form-example5');

const surnameEx5 = document.querySelector('#surname-ex5');
const emailEx5 = document.querySelector('#email-ex5');

const patterns = {
    'surname-ex5': /^[a-zA-Z]{2,}\s+[a-zA-Z]{2,}$/i,
    'email-ex5': /^[0-9a-zA-Z_.-]+@[0-9a-zA-Z.-]+\.[a-zA-Z]{2,3}$/i,
};

const validate = () => {
    for(let pattern in patterns){
        if(formEx5[pattern]){
            if(!patterns[pattern].test(formEx5[pattern].value)){
                alert(`Pole ${pattern} jest nie poprawne`);
                return false;
            }
        }
    }
    alert('Formularz wypełniony poprawnie!');
    return true;
}

formEx5.addEventListener('submit', function (event) {
    event.preventDefault();
    validate();
});