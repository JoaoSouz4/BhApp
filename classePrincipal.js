class Mercadoria{
    constructor(nome, tipo, marca, precoCusto, precoVenda, qtd){
        this.nome = nome;
        this.tipo = tipo;
        this.marca = marca;
        this.precoCusto = precoCusto;
        this.precoVenda = precoVenda;
        this.qtd = qtd;
        this.status = false;
    }

    isDisponivel = ()=>{
        
        if(this.qtd > 0){
            this.status = true;
        } else{
            this.status = false;
        }
    }
}