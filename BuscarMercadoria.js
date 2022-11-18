const botaoPesquisar = document.querySelector('.bP');
const divResultado = document.querySelector('.resultado-container');
const divBoxes = document.querySelector('.boxes');


botaoPesquisar.addEventListener('click', ()=>{

    let barraPesquisa = document.querySelector('.barra-pesquisa');
    let pesquisaSolicitada = barraPesquisa.value;
    pesquisa(pesquisaSolicitada);


});

function pesquisa(pesquisa){


    if(pesquisa == ''){
        alert('Preencha o campo abaixo para poder fazer a pesquisa');
        return
    } 

    let array = localStorage.getItem('mercadorias');
    let arrayLocalStore = JSON.parse(array);

    console.log('ITERACAO');
    console.log(arrayLocalStore)

    for( let i in arrayLocalStore){
        if(pesquisa == arrayLocalStore[i].nome){
            
            console.log(`${arrayLocalStore[i].nome} está em estoque!`);
            renderizarInformacoes(arrayLocalStore[i]);
            return;
        } else{
            emFalta(pesquisa);
            console.log(array[i].nome+' Não está em estoque :(');
            return;
        }
    }
}

function renderizarInformacoes(array){

    const box = criaElemento("div");
    box.setAttribute("class", "box")
    divBoxes.appendChild(box);

    const subBox = criaElemento("div");
    subBox.setAttribute("class", "sub-box");


    const nome = criaElemento("h3");
    nome.setAttribute("class", "nome");
    nome.innerHTML = "NOME: "+array.nome;
    subBox.appendChild(nome);

    const marca = criaElemento('p');
    marca.setAttribute("class", "marca");
    marca.innerHTML = "MARCA "+array.marca;
    subBox.appendChild(marca);

    box.appendChild(subBox);

    //------------------------------------//

    const subBoxQTD = criaElemento("div");
    subBoxQTD.setAttribute("class", "sub-box");

    const qtd = criaElemento("h3");
    qtd.setAttribute("class", "nome");
    qtd.innerHTML = "QTD: "+array.qtd;
    subBoxQTD.appendChild(qtd);

    box.appendChild(subBoxQTD);

    //--------------------------------//

    const subBoxPc = criaElemento("div");
    subBoxPc.setAttribute("class", "sub-box");

    const pc = criaElemento("h3");
    pc.setAttribute("class", "nome");
    pc.innerHTML = "PC: R$"+array.precoCusto;
    subBoxPc.appendChild(pc);

    const pv = criaElemento("h3");
    pv.setAttribute("class", "nome");
    pv.innerHTML = "PV: R$"+array.precoVenda;
    subBoxPc.appendChild(pv);

    box.appendChild(subBoxPc);

    //-------------------------------//

    const subBoxStatus = criaElemento("div");
    subBoxPc.setAttribute("class", "sub-box");


    const labelStatus = criaElemento('h3');
    labelStatus.innerHTML = "Status"
    subBoxStatus.appendChild(labelStatus);

    const status = criaElemento("p");
    status.setAttribute("class", "nome");

    if(array.status != true){
        status.innerHTML = "Indisponível"; 
        status.style.color = "red";
    } 
    if(array.status == true){
        status.innerHTML = "Em estoque";
        status.style.color = "green";
    } 

    subBoxStatus.appendChild(status);
    box.appendChild(subBoxStatus);


}

function emFalta(pesquisa){
    divResultado.innerHTML = `${pesquisa} não está cadastrado`
}

function criaElemento(el){
    const elemento = document.createElement(el)
    return elemento;
}




