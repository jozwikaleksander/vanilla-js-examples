const name = document.querySelector('#name');
const surname = document.querySelector('#surname');
const job = document.querySelector('#job');
const form = document.querySelector('form');

const checkForm = () => {
    if (name.value.length < 3) {
        alert('Pole Imię musi mieć przynajmniej 3 znaki');
        name.focus();
        return false;
    }
    if (surname.value.length < 3) {
        alert('Pole Nazwisko musi mieć przynajmniej 3 znaki');
        surname.focus();
        return false;
    }
    if (job.value.length == "") {
        alert('Pole Zawód musi być wypełnione');
        job.focus();
        return false;
    }
    alert('Formularz wypełniony poprawnie!');
    return true;
}

form.addEventListener('submit', function (event) {
    event.preventDefault();
    checkForm();
});