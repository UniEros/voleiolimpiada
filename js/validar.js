function validar(){
  var nome=contato.nome.value;
  var email=contato.email.value;
  const validaEmail = (email) => {
    const regex = /^[^\s]+@[^\s]+\.[^\s]+$/;
    return regex.test(email);
  }
  const valido = validaEmail(email);

  if (nome==""){
    alert('Por favor, preencha o campo com seu nome');
    return false;
  }
  else if (email==""){
    alert('Por favor, preencha o campo com seu email');
    return false;
  }
  else if (!valido){
    alert('Por favor, preencha o campo email corretamente');
    return false;
  }
  else {
    alert('Seu comentário foi enviado com sucesso. Obrigado!');
    contato.reset();
    return false;
  }
}