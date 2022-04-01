function Validar(){
    var nome = document.getElementById('nome');
    var email = document.getElementById('email');
    var senha = document.getElementById('senha');
    var idade = document.getElementById('idade');
    var masculino = document.getElementById('masculino');
    var feminino = document.getElementById('feminino');
    var outro = document.getElementById('outro');
    var futebol = document.getElementById('futebol');
    var pipa = document.getElementById('pipa');
    var videogame = document.getElementById('videogame');
    var tipo = document.getElementById('tipo');
    var mensagem = document.getElementById('mensagem');


    if(nome == ""){
        alert('Preencha o campo Nome');
        nome.focus();
        return false;
    }
    
    else if(email == "" || email.indexOf('@') == -1 ){
        alert('Preencha o campo E-mail');
        email.focus();
        return false;
    }
    
    else if(senha == "" || senha.length <= 7){
        alert('Preencha o campo senha com minimo 8 caracteres');
        senha.focus();
        return false;
    }

    else if(idade == ""){
        alert('Preencha o campo Idade');
        idade.focus();
        return false;
    }

    else if(masculino.checked || feminino.checked || outro.checked){
        alert('Preencha o campo Gênero');
        return false;
    }

    else if(futebol.checked || pipa.checked || videogame.checked){
        alert('Preencha o campo Hobbies');
        return false;
    }

    else if(tipo.selectedIndex ==0){
        alert('Informe o tipo sanguíneo');
        tipo.focus;
        return false;
    }

    else if(mensagem == ""){
        alert('Preencha o campo Fale sobre você');
        mensagem.focus();
        return false;
    }

    else{
        return true;
        
    }


}