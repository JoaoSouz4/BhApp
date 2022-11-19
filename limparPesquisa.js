const limpar = document.querySelector('.limparResultado');

limpar.addEventListener('click', ()=>{
    divBoxes.innerHTML = '';
    barraPesquisa.value = '';
});