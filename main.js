
const bottomRegister = document.querySelector('.btn');
const arrayProductRegister = [];

bottomRegister.addEventListener('click', ()=>{
    
    const inputNome = document.querySelector('#nome');
    const inputTipo = document.querySelector('#tipo');
    const inputQtd = document.querySelector('#qtd');
    const inputMarca = document.querySelector('#marca');
    const inputPrecoCusto = document.querySelector('#pc');
    const inputPrecoVenda = document.querySelector('#pv');

    const nome = inputNome.value;
    const tipo = inputTipo.value;
    const qtd = inputQtd.value;
    const marca = inputMarca.value;
    const precoCusto = inputPrecoCusto.value;
    const precoVenda = inputPrecoVenda.value;

    if(nome == ''){
        alert('Informe um nome válido');
        return
    } 

    if(qtd <= 0){
        alert('Não é possivel cadastrar mercadorias sem quantidade');
        return;
    }

    if(precoCusto == '' || precoVenda == ''){
        alert('Informe os dados referente aos preços');
        return
    }

    alert(`${nome} cadastrado com sucesso`)

    const objeto = new Mercadoria(nome, tipo, qtd, marca, precoCusto, precoVenda);
    arrayProductRegister.push(objeto);

    console.log(arrayProductRegister);
});

