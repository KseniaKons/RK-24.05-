let modalButtons = document.querySelector('.js-open-modal'),
overlay = document.querySelector('.overlay-modal'),
closeButtons = document.querySelector('.js-modal-close');
let modalElem = document.querySelector('.modal');
let push = document.querySelector('.push'),
info1 = document.getElementById('info1'),
info2 = document.getElementById('info2'),
body = document.querySelector('body');


modalButtons.addEventListener("click", (event) => {
event.preventDefault(); //предотвращение дефолтных событий браузера
modalElem.classList.add('active'); //активирем окно
overlay.classList.add('active'); //активируем подложку
body.classList.add('active');
});


info1.addEventListener("input", (e) => {

if (info1.validity.typeMismatch) {
    info1.setCustomValidity("Неправельный тип данных!");
    info1.classList.add('active'); //красный фон
}
else {
    info1.setCustomValidity("");
    info1.classList.remove('active');
}

if (info1.validity.valueMissing) {
    info1.setCustomValidity("Заполните пустые поля!");
    info1.classList.add('active');
}
else {
    info1.setCustomValidity("");
    info1.classList.remove('active');
}
});


info2.addEventListener("input", (e) => {

if (info2.validity.typeMismatch) {
    info2.setCustomValidity("Неправельный тип данных!");
    info2.classList.add('active');
}
else {
    info2.setCustomValidity("");
    info2.classList.remove('active');
}

});


push.addEventListener("click", (event) => {
event.preventDefault();
if (document.forms[0].reportValidity()) {

    let get1 = document.forms[0].elements['number'].value;
    let get2 = document.forms[0].elements['type'].value;
    let get3 = document.forms[0].elements['height'].value;
    let get4 = document.forms[0].elements['bool'].value;

    let data = {
        telefon: get1,
        typePlastic: get2,
        height: get3,
        bool: get4
    };

    
    console.table(data);

    modalElem.classList.remove('active');
    overlay.classList.remove('active');
    body.classList.remove('active');


}


});

closeButtons.addEventListener("click", (event) => {
event.preventDefault();
modalElem.classList.remove('active');
overlay.classList.remove('active');
body.classList.remove('active');

});

document.addEventListener("click", (e) => {
if (e.target === overlay) {
    modalElem.classList.remove('active');
    overlay.classList.remove('active');
    body.classList.remove('active');
}

});


