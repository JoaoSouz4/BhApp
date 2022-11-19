const botaoPesquisar = document.querySelector('.bP');

let barraPesquisa = document.querySelector('.barra-pesquisa');
const divBoxes = document.querySelector('.boxes');


botaoPesquisar.addEventListener('click', ()=>{

    
    let pesquisaSolicitada = barraPesquisa.value;
    let psm = pesquisaSolicitada.toUpperCase();
    let pesquisaFormatada = psm.replace(/\s/g, '');
    console.log(pesquisaFormatada);
    pesquisa(pesquisaFormatada, divBoxes);

});

function pesquisa(pesquisa, box){

    if(pesquisa == ''){
        alert('Preencha o campo abaixo para poder fazer a pesquisa');
        return;
    } 

    let array = localStorage.getItem('mercadorias');
    let arrayLocalStore = JSON.parse(array);
    let result;
    let arrayEncontrado;
    for( let i in arrayLocalStore){
        if(arrayLocalStore[i].nome == pesquisa){

            arrayEncontrado = arrayLocalStore[i];
            renderizarInformacoes(arrayLocalStore[i], box);
            result = true;
            break;
        } else{
            result = false;
        }
    }

    if(result == false) emFalta(pesquisa);

    return arrayEncontrado;
}

function renderizarInformacoes(array, boxC){

    const box = criaElemento("div");
    box.setAttribute("class", "box1")
    boxC.appendChild(box);

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
    alert(`${pesquisa} não está cadastrado`)
}

function criaElemento(el){
    const elemento = document.createElement(el)
    return elemento;
}





