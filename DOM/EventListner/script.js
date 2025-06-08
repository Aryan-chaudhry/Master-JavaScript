let g = document.getElementById('g');
let y = document.getElementById('y');
let r = document.getElementById('r');
let bl = document.getElementById('bl');
let blue = document.getElementById('blue');

let body = document.querySelector('body');
let orgColor = body.style.background;



g.addEventListener('click', function(){
    body.style.background = 'lightgreen';
});

g.addEventListener('dblclick', function(){
    body.style.background = orgColor;
})

y.addEventListener('click', function(){
    body.style.background = 'yellow';
});

y.addEventListener('dblclick', function(){
    body.style.background = orgColor;
})

r.addEventListener('click', function(){
    body.style.background = 'red';
});

r.addEventListener('dblclick', function(){
    body.style.background = orgColor;
})

bl.addEventListener('click', function(){
    body.style.background = 'black';
});

bl.addEventListener('dblclick', function(){
    body.style.background = orgColor;
})

blue.addEventListener('click', function(){
    body.style.background = 'blue';
});

blue.addEventListener('dblclick', function(){
    body.style.background = orgColor;
})