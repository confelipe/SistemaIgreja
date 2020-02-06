function logar(){
    
    let email = document.getElementById("email");
    let senha = document.getElementById("senha");

    if(email.value =="dinho@gmail.com" && senha.value ==123){
        localStorage.setItem("acesso",true);
        alert('Usuário autenticado!')
        window.location.href = "main.html";
    }else{
        alert('Usuário ou senha inválidos!');
        window.location.href="formlogin.html"
       
    }

    
}
