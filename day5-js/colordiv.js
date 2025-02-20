
// const divele = document.querySelector('div');
document.querySelector('div').addEventListener('click', (e) => {
    // if(e.target.style != 'DIV') return;
    console.log(e);
    if(e.target.style.backgroundColor == 'black' || !e.target.style.backgroundColor) e.target.style.backgroundColor = 'white';
    else e.target.style.backgroundColor = 'black';
});
