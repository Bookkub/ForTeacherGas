function show()
{

    const hide = document.querySelector('#hide');
    hide.classList.remove('hidden');

    const mes = document.querySelector('#message');
    mes.classList.remove('hidden');

    const show = document.querySelector('#show');
    show.classList.add('hidden');

}

function hide()
{

    const hide = document.querySelector('#show');
    hide.classList.remove('hidden');

    const mes = document.querySelector('#message');
    mes.classList.add('hidden');

    const show = document.querySelector('#hide');
    show.classList.add('hidden');

}
const click_show = document.querySelector('#show');
click_show.addEventListener('click',show);

const click_hide = document.querySelector('#hide');
click_hide.addEventListener('click',hide);