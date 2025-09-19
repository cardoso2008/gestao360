
const telefoneInput = document.getElementById("telefoneDaEmpresa");

telefoneInput.addEventListener("input", function(e) {
  let value = e.target.value.replace(/\D/g, ""); 
  if (value.length > 11) value = value.slice(0, 11); 

  if (value.length <= 10) {
    // Formato fixo: (99) 9999-9999
    value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
  } else {
    // Formato celular: (99) 99999-9999
    value = value.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
  }

  e.target.value = value;
});
//CONTATO
const nomeDaEmpresa = document.getElementById('nomeDaEmpresa')
const mailDaEmpresa = document.getElementById('mailDaEmpresa')
const telefoneDaEmpresa = document.getElementById('telefoneDaEmpresa')
const enderecoDaEmpresa = document.getElementById('enderecoDaEmpresa')
const nomeDoContratante = document.getElementById('nomeDoContratante')
const cargoDoContatante = document.getElementById('cargoDoContatante')
const servico = document.getElementById('servico')
const textArea = document.getElementById('textArea')
const form = document.getElementById("formContato");
document.getElementById("botaoEnviarContato").addEventListener("click", function (event) {
  event.preventDefault(); // impede envio automático do form

  if (
    nomeDaEmpresa.value.trim() === "" ||
    mailDaEmpresa.value.trim() === "" ||
    telefoneDaEmpresa.value.trim() === "" ||
    enderecoDaEmpresa.value.trim() === "" ||
    nomeDoContratante.value.trim() === "" ||
    cargoDoContatante.value.trim() === "" ||
    servico.value.trim() === "" ||
    textArea.value.trim() === ""
  ) {
    Swal.fire({
      title: "Preencha todos os campos",
      text: "",
      icon: "error"
    })
  } else {
    Swal.fire({
      title: "Dados enviados!",
      text: "Aguarde a resposta no email cadastrado.",
      icon: "success"
    }).then(() => {
      form.reset(); 
    });
  }
});

// MÁSCARA CADASTRO
