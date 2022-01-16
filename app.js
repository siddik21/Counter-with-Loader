const start = document.getElementById('start');
const stop = document.getElementById('stop');
const output = document.getElementById('output');
const count = document.getElementById('count');
const loader = document.querySelector('.loader');

let counter_value;
let counter;

loader.style.width ='100%' ;

start.addEventListener('click', function(){
    counter_value = count.value; 

    counter = setInterval(() => {
    output.innerHTML = counter_value;
    let width = laoder(count.value, counter_value);

    loader.style.width =`${width}%`;

    if(width > 50 && width<=100){
        loader.style.backgroundColor = 'green';
    }
    else if(width > 30 && width<=50){
        loader.style.backgroundColor = 'orange';
    }
    else if(width <= 30){
        loader.style.backgroundColor = 'red';

    }

    if(counter_value == 0){
        clearInterval(counter);
    }
    
    counter_value--;
    
    }, 1000);
    
});

stop.addEventListener('click', function(){
    clearInterval(counter)
});