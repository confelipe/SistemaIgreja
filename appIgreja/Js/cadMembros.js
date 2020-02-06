let nome ;
let sobreNome ;
let dataNasc;
let celular ;
let endereco;
let numCasa 
let compleme;
let bairro ;
let cidade;
let estado;
let pais ;
let  cep ;
let email;
let batizado;



function salvarDados(){
    
     nome      =    document.getElementById("nome");
     sobreNome = document.getElementById("sobreNome");
     dataNasc  = document.getElementById("dataNasc");
     celular   = document.getElementById("celular");
     endereco  = document.getElementById("end");
     numCasa   = document.getElementById("numCasa");
   complemento = document.getElementById("complemento");
     bairro    = document.getElementById("bairro");
     cidade    = document.getElementById("cidade");
     estado    = document.getElementById("estado");
     pais      = document.getElementById("pais");
     cep       = document.getElementById("cep");
     email     = document.getElementById("email");
     batizado  = document.getElementById("batizado");

    let dados = JSON.parse(localStorage.getItem("dadosMembro"));

    if(dados ==null){
        localStorage.setItem("dadosMembro","[]");
        dados = [];
    }

    let registros = {
        nome :nome.value,
        sobreNome: sobreNome.value,
        dataNasc: dataNasc.value,
        celular: celular.value,
        endereco: endereco.value,
        numCasa: numCasa.value,
        complemento: complemento.value,
        bairro: bairro.value,
        cidade: cidade.value,
        estado: estado.value,
        pais : pais.value,
        cep : cep.value,
        email: email.value,
        batizado: batizado.value
    }
    dados.push(registros);
    
    
    localStorage.setItem("dadosMembro",JSON.stringify(dados));
    
    limparDadosDoFormulario();

}
function limparDadosDoFormulario(){
     document.getElementById("nome").value="";
     document.getElementById("sobreNome").value="";
     document.getElementById("dataNasc").value="";
     document.getElementById("celular").value="";
     document.getElementById("end").value="";
     document.getElementById("numCasa").value="";
     document.getElementById("complemento").value="";
     document.getElementById("bairro").value="";
     document.getElementById("cidade").value="";
     document.getElementById("estado").value="";
     document.getElementById("pais").value="";
     document.getElementById("cep").value="";
     document.getElementById("email").value="";
     document.getElementById("batizado").value="";
}