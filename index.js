class Pessoa{
  constructor(nome, data_nascimento, altura, ano_nascimento){
    
  
 this.nome = nome;
    this.data_nascimento = data_nascimento;
        this.ano_nascimento = ano_nascimento;
    this.altura = altura;
  }
  mostrarNome(){
 console.log(this.nome)
  }
mostarAtributos(){
  console.log(this.data_nascimento)
  console.log(this.altura)
  console.log(this.ano_nascimento)
  
}

}

class calcularIdade{
  constructor(ano_nascimento, ano_atual){

  this.ano_nascimento = ano_nascimento;
  this.ano_atual = ano_atual;
    
  }
    calcularIdade(){
    return this.ano_atual - this.ano_nascimento 
  }
  idade(){
    return this.calcularIdade()
  }
}

let calcularIdade_1 = new calcularIdade(2005, 2022);
console.log (calcularIdade_1.calcularIdade())

let pessoa = new Pessoa("Filipe", "24/05", "184cm", "2005");




pessoa.mostrarNome()

pessoa.mostarAtributos()
