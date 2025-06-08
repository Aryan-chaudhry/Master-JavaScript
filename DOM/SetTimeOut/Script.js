let amt = document.getElementById('amt');
let btn = document.querySelector('button');
let msg = document.querySelector('.msg');

function sendMessage(){
    let amount = amt.value; 
    if(amount === ""){
        alert('Please enter Money');
    }
    else{
        msg.style.background = "blue";
        let p = document.createElement('p');
        p.textContent = `Dear user your Account has been credit by $ ${amount}`;
        msg.appendChild(p);
    }
}

btn.addEventListener('click', ()=>{
    
    setTimeout(sendMessage, 1000);
});
