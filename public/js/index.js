window.addEventListener('load',()=>{
    const entrada = document.getElementById('caixa01');
    const btnSub = document.getElementById('sub');

    btnSub.addEventListener('click', ()=>{
        console.log("Você digitou: "+entrada.value);
    });

});