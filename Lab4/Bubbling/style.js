function Outside()
{
    const color1 = document.querySelector('.outside-box');
    color1.classList.toggle('outside-box-new');
    color1.removeEventListener('click', Outside);
}
function Inside()
{
    const color2 = document.querySelector('.inside-box');
    color2.classList.toggle('inside-box-new');
    color2.removeEventListener('click', Inside);
}
function reset()
{
    const color1 = document.querySelector('.outside-box-new');
    color1.classList.remove('outside-box-new');
    color1.classList.add('outside-box');
    color1.addEventListener('click', Outside);

    const color2 = document.querySelector('.inside-box-new');
    color2.classList.remove('inside-box-new');
    color2.classList.add('inside-box');
    color2.addEventListener('click', Inside);
}
const button = document.querySelector('button');
button.addEventListener('click', reset);

const Out = document.querySelector('.outside-box');
Out.addEventListener('click', Outside);

const In = document.querySelector('.inside-box');
In.addEventListener('click', Inside); 