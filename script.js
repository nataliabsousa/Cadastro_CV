const cpf = document.getElementById("cpf");
cpf.addEventListener("keypress", mCPF);

const telefone = document.getElementById("telefone");
telefone.addEventListener("keypress", formatarTelefone);

function enviar() {
  var nome = document.getElementById("nome").value;
  alert(`Obrigado sr(a) ${nome}, seu currículo foi enviado. Boa sorte!`);
}

function limpar() {
  document.getElementById("nome").value = null;
  document.getElementById("cpf").value = null;
  document.getElementById("telefone").value = null;
  document.getElementById("data").value = null;
  document.getElementById("email").value = null;
  document.getElementById("formacao").value = "null";
}

function validarDados() {
  var nome = document.getElementById("nome").value;
  var telefone = document.getElementById("telefone").value;
  var data = document.getElementById("data").value;
  var email = document.getElementById("email").value;
  var formacao = document.getElementById("formacao").value;

  if (
    nome == "" ||
    telefone == "" ||
    data == "" ||
    email == "" ||
    formacao == ""
  ) {
    alert("Preencha os campos obrigatórios.");
  } else {
    enviar(), limpar();
  }
}

function mCPF(e) {
  var v = e.target.value.replace(/\D/g, "");
  v = v.replace(/(\d{3})(\d)/, "$1.$2");
  v = v.replace(/(\d{3})(\d)/, "$1.$2");
  v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  e.target.value = v;
}

function formatarTelefone(e) {
  var v = e.target.value.replace(/\D/g, "");
  v = v.replace(/^(\d\d)(\d)/g, "($1)$2");
  v = v.replace(/(\d{5})(\d)/, "$1-$2");
  e.target.value = v;
}
