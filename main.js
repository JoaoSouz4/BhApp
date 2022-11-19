
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
    const nomeformatado = nome.replace(/\s/g, '');
    const tipo = inputTipo.value;
    const qtd = Number(inputQtd.value);
    const marca = inputMarca.value;
    const precoCusto = Number(inputPrecoCusto.value);
    const precoVenda = Number(inputPrecoVenda.value);

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

    const objeto = new Mercadoria(nomeformatado.toUpperCase(), tipo,marca.toUpperCase(), precoCusto, precoVenda, qtd);
    
    objeto.isDisponivel();
    
    arrayProductRegister.push(objeto);

    const arrayMercadoriaJSON = converterParaJSON(arrayProductRegister);
    salvaLocalStore(arrayMercadoriaJSON);

    console.log(arrayProductRegister);

});

function converterParaJSON(array){

    const objetosJson = JSON.stringify(array);
     return objetosJson;
}

function salvaLocalStore(json){
    localStorage.setItem('mercadorias', json);
}



