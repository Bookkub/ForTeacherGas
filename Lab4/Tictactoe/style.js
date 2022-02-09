let count_1 = false;
let count_2 = false;
let count_3 = false;
let count_4 = false;
let count_5 = false;
let count_6 = false;
let count_7 = false;
let count_8 = false;
let count_9 = false;
let number = [0,1,2,3,4,5,6,7,8];
let randomnum;
let count=0;
let boardcheck = [[null,null,null],[null,null,null],[null,null,null]];
function callX(event)
{
    if(count_1 === false)
    {
        if(event.currentTarget === click_1)
        {
            click_1.innerHTML = '<div style="text-align:center"><font size="30">X</font></div>';
            count_1 = true;
            let findex = number.indexOf(0);
            number.splice(findex,1);
            boardcheck[0][0] = 1;
            count++;
            checkwin();
            callY(); 
        }
    }
    if(count_2 === false)
    {
        if(event.currentTarget === click_2)
        {   
            click_2.innerHTML = '<div style="text-align:center"><font size="30">X</font></div>';
            count_2 = true;
            let findex = number.indexOf(1);
            number.splice(findex,1);
            boardcheck[0][1] = 1;
            count++;
            checkwin();
            callY(); 
        }
    }
    
    if(count_3 === false)
    {
        if(event.currentTarget === click_3)
        {
            click_3.innerHTML = '<div style="text-align:center"><font size="30">X</font></div>';
            count_3 = true;
            let findex = number.indexOf(2);
            number.splice(findex,1);
            boardcheck[0][2] = 1;
            count++;
            checkwin();
            callY(); 
        }
    }
  
    if(count_4 === false)
    {
        if(event.currentTarget === click_4)
        {
            click_4.innerHTML = '<div style="text-align:center"><font size="30">X</font></div>';
            count_4 = true;
            let findex = number.indexOf(3);
            number.splice(findex,1);
            boardcheck[1][0] = 1;
            count++;
            checkwin();
            callY(); 
        }
    }
    if(count_5 === false)
    {
        if(event.currentTarget === click_5)
        {
            click_5.innerHTML = '<div style="text-align:center"><font size="30">X</font></div>';
            count_5 = true;
            let findex = number.indexOf(4);
            number.splice(findex,1);
            boardcheck[1][1] = 1;
            count++;
            checkwin();
            callY(); 
        }
    }
    if(count_6 === false)
    {
        if(event.currentTarget === click_6)
        {
            click_6.innerHTML = '<div style="text-align:center"><font size="30">X</font></div>';
            count_6 = true;
            let findex = number.indexOf(5);
            number.splice(findex,1);
            boardcheck[1][2] = 1;
            count++;
            checkwin();
            callY(); 
        }
    }
    if(count_7 === false)
    {
        if(event.currentTarget === click_7)
        {
            click_7.innerHTML = '<div style="text-align:center"><font size="30">X</font></div>';
            count_7 = true;
            let findex = number.indexOf(6);
            number.splice(findex,1);
            boardcheck[2][0] = 1;
            count++;
            checkwin();
            callY(); 
        }
    }
    if(count_8 === false)
    {
        if(event.currentTarget === click_8)
        {
            click_8.innerHTML = '<div style="text-align:center"><font size="30">X</font></div>';
            count_8 = true;
            let findex = number.indexOf(7);
            number.splice(findex,1);
            boardcheck[2][1] = 1;
            count++;
            checkwin();
            callY(); 
        }
    }
    if(count_9 === false)
    {
        if(event.currentTarget === click_9)
        {
            click_9.innerHTML = '<div style="text-align:center"><font size="30">X</font></div>';
            count_9 = true;
            let findex = number.indexOf(8);
            number.splice(findex,1);
            boardcheck[2][2] = 1;
            count++;
            checkwin();
            callY(); 
        }
    }
}

function callY()
{
    randomnum = number[Math.floor(Math.random()*number.length)];
    if(randomnum === undefined)return;
    let findex = number.indexOf(randomnum);
    number.splice(findex,1);
    if(count_1 === false)
    {
        if(randomnum === 0)
        {
            click_1.innerHTML = '<div style="text-align:center"><font size="30">O</font></div>';
            count_1 = true;
            boardcheck[0][0] = 0;
            count++;
            click();
            checkwin();
        }
    }
    if(count_2 === false)
    {
        if(randomnum === 1)
        {
            click_2.innerHTML = '<div style="text-align:center"><font size="30">O</font></div>';
            count_2 = true;
            boardcheck[0][1] = 0;
            count++;
            click();
            checkwin();
        }
    }
    if(count_3 === false)
    {
        if(randomnum === 2)
        {
            click_3.innerHTML = '<div style="text-align:center"><font size="30">O</font></div>';
            count_3 = true;
            boardcheck[0][2] = 0;
            count++;
            click();
            checkwin();
        }
    }
    if(count_4 === false)
    {
        if(randomnum === 3)
        {
            click_4.innerHTML = '<div style="text-align:center"><font size="30">O</font></div>';
            count_4 = true;
            boardcheck[1][0] = 0;
            count++;
            click();
            checkwin();
        }
    }
    if(count_5 === false)
    {
        if(randomnum === 4)
        {
            click_5.innerHTML = '<div style="text-align:center"><font size="30">O</font></div>';
            count_5 = true;
            boardcheck[1][1] = 0;
            count++;
            click();
            checkwin();
        }
    }
    if(count_6 === false)
    {
        if(randomnum === 5)
        {
            click_6.innerHTML = '<div style="text-align:center"><font size="30">O</font></div>';
            count_6 = true;
            boardcheck[1][2] = 0;
            count++;
            click();
            checkwin();
        }
    }
    if(count_7 === false)
    {
        if(randomnum === 6)
        {
            click_7.innerHTML = '<div style="text-align:center"><font size="30">O</font></div>';
            count_7 = true;
            boardcheck[2][0] = 0;
            count++;
            click();
            checkwin();
        }
    }
    if(count_8 === false)
    {
        if(randomnum === 7)
        {
            click_8.innerHTML = '<div style="text-align:center"><font size="30">O</font></div>';
            count_8 = true;
            boardcheck[2][1] = 0;
            count++;
            click();
            checkwin();
        }
    }
    if(count_9 === false)
    {
        if(randomnum === 8)
        {
            click_9.innerHTML = '<div style="text-align:center"><font size="30">O</font></div>';
            count_9 = true;
            boardcheck[2][2] = 0;
            count++;
            click();
            checkwin();
        }
    }
}
function checkwin()
{
    if(boardcheck[0][0] === 1 &&  boardcheck[0][1] === 1 &&  boardcheck[0][2] === 1)
    {
        Xwin();
        closelis();
    }
    else if(boardcheck[1][0] === 1 &&  boardcheck[1][1] === 1 &&  boardcheck[1][2] === 1)
    {
        Xwin();
        closelis();
    }
    else if(boardcheck[2][0] === 1 &&  boardcheck[2][1] === 1 &&  boardcheck[2][2] === 1)
    {
        Xwin();
        closelis();
    }
    else if(boardcheck[0][0] === 1 &&  boardcheck[1][0] === 1 &&  boardcheck[2][0] === 1)
    {
        Xwin();
        closelis();
    }
    else if(boardcheck[0][1] === 1 &&  boardcheck[1][1] === 1 &&  boardcheck[2][1] === 1)
    {
        Xwin();
        closelis();
    }
    else if(boardcheck[0][2] === 1 &&  boardcheck[1][2] === 1 &&  boardcheck[2][2] === 1)
    {
        Xwin();
        closelis();
    }
    else if(boardcheck[0][0] === 1 &&  boardcheck[1][1] === 1 &&  boardcheck[2][2] === 1)
    {
        Xwin();
        closelis();
    }
    else if(boardcheck[0][2] === 1 &&  boardcheck[1][1] === 1 &&  boardcheck[2][0] === 1)
    {
        Xwin();
        closelis();
    }
    else if(boardcheck[0][0] === 0 &&  boardcheck[0][1] === 0 &&  boardcheck[0][2] === 0)
    {
        Owin();
        closelis();
    }
    else if(boardcheck[1][0] === 0 &&  boardcheck[1][1] === 0 &&  boardcheck[1][2] === 0)
    {
        Owin();
        closelis();
    }
    else if(boardcheck[2][0] === 0 &&  boardcheck[2][1] === 0 &&  boardcheck[2][2] === 0)
    {
        Owin();
        closelis();
    }
    else if(boardcheck[0][0] === 0 &&  boardcheck[1][0] === 0 &&  boardcheck[2][0] === 0)
    {
        Owin();
        closelis();
    }
    else if(boardcheck[0][1] === 0 &&  boardcheck[1][1] === 0 &&  boardcheck[2][1] === 0)
    {
        Owin();
        closelis();
    }
    else if(boardcheck[0][2] === 0 &&  boardcheck[1][2] === 0 &&  boardcheck[2][2] === 0)
    {
        Owin();
        closelis();
    }
    else if(boardcheck[0][0] === 0 &&  boardcheck[1][1] === 0 &&  boardcheck[2][2] === 0)
    {
        Owin();
        closelis();
    }
    else if(boardcheck[0][2] === 0 &&  boardcheck[1][1] === 0 &&  boardcheck[2][0] === 0)
    {
        Owin();
        closelis();
    }
    else if(count == 9)
    {
        Ties();
        closelis();
    }
}
function Xwin()
{
    const showX = document.querySelector('#win');
    showX.classList.remove('hidden');
}
function Owin()
{
    const showY = document.querySelector('#lose');
    showY.classList.remove('hidden');
}
function Ties()
{
    const showY = document.querySelector('#tie');
    showY.classList.remove('hidden');
}
function closelis()
{
    click_1.removeEventListener('click', callX);
    click_2.removeEventListener('click', callX);
    click_3.removeEventListener('click', callX);
    click_4.removeEventListener('click', callX);
    click_5.removeEventListener('click', callX);
    click_6.removeEventListener('click', callX);
    click_7.removeEventListener('click', callX);
    click_8.removeEventListener('click', callX);
    click_9.removeEventListener('click', callX);
}
function click()
{
    click_1.addEventListener('click', callX);
    click_2.addEventListener('click', callX);
    click_3.addEventListener('click', callX);
    click_4.addEventListener('click', callX);
    click_5.addEventListener('click', callX);
    click_6.addEventListener('click', callX);
    click_7.addEventListener('click', callX);
    click_8.addEventListener('click', callX);
    click_9.addEventListener('click', callX);
}
const click_1 = document.querySelector('#line_1');
const click_2 = document.querySelector('#line_2');
const click_3 = document.querySelector('#line_3');
const click_4 = document.querySelector('#line_4');
const click_5 = document.querySelector('#line_5');
const click_6 = document.querySelector('#line_6');
const click_7 = document.querySelector('#line_7');
const click_8 = document.querySelector('#line_8');
const click_9 = document.querySelector('#line_9');
click();

