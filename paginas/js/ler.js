const urlParams =  new URLSearchParams(window.location.search)

console.log(window.location);

const nomeParam = urlParams.get("nome");
console.log(nomeParam);

const emailParam = urlParams.get("email");
console.log(emailParam);

const senhaParam = urlParams.get("senha");
console.log(senhaParam);

const idadeParam = urlParams.get("idade");
console.log(idadeParam);

const generoParam = urlParams.get("genero");
console.log(generoParam);

const hobbiesParam = urlParams.get("hobbies");
console.log(hobbiesParam);

const tipoParam = urlParams.get("tipo");
console.log(tipoParam);

const mensagemParam = urlParams.get("mensagem");
console.log(mensagemParam);

if(nomeParam == urlParams.get("nome")){
    document.getElementById('nome').innerHTML='Nome: Dado não Encontrado';
 
}
 
else if(emailParam == urlParams.get("email")){
         document.getElementById('email').innerHTML='Email: Dado não Encontrado';
 
}

  else if(senhaParam == urlParams.get("senha")){
    document.getElementById('senha').innerHTML='Senha: Dado não Encontrado'; 
 
 
}
 
 else if(idadeParam == urlParams.get("idade")){
     document.getElementById('idade').innerHTML='Idade: Dado não Encontrado';
 
}
 
 else if(generoParam == urlParams.get("genero")){
     document.getElementById('masculino').innerHTML='Gênero: Dado não Encontrado';
 
}
 
 else if(generoParam == urlParams.get("genero")){
     document.getElementById('feminino').innerHTML='Gênero: Dado não Encontrado';
 
}
 
 else if(generoParam == urlParams.get("genero")){
     document.getElementById('outro').innerHTML='Gênero: Dado não Encontrado';
 
}
 
 else if(hobbiesParam == urlParams.get("hobbies")){
     document.getElementById('futebol').innerHTML='Hobbies: Dado não Encontrado';
 
}

else if(hobbiesParam == urlParams.get("hobbies")){
    document.getElementById('pipa').innerHTML='Hobbies: Dado não Encontrado';

}
 
 else if(hobbiesParam == urlParams.get("hobbies")){
     document.getElementById('videogame').innerHTML='Hobbies: Dado não Encontrado';
 
}
 
 else if(mensagemParam == urlParams.get("mensagem")){
     document.getElementById('mensagem').innerHTML='Mensagem: Dado não Encontrado';
 
}
 




   


