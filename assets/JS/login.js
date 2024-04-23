// Função para aplicar máscara de CPF XXX.XXX.XXX-XX
function formatarCPF(valor) {
   return valor.replace(/\D/g, '') // Remove qualquer coisa que não seja número
               .replace(/(\d{3})(\d)/, '$1.$2') // Adiciona ponto após o terceiro dígito
               .replace(/(\d{3})(\d)/, '$1.$2') // Adiciona ponto após o sexto dígito
               .replace(/(\d{3})(\d)/, '$1-$2') // Adiciona traço após o nono dígito
               .replace(/(-\d{2})\d+?$/, '$1'); // Impede entrada de mais de 11 dígitos
}



// Adiciona os gatilhos para aplicar a máscara de cpf
document.getElementById('cpf').addEventListener('input', function(event) {
   event.target.value = formatarCPF(event.target.value);
});




// Função para alternar a visibilidade da senha
function alternarVisibilidadeSenha(inputSenha) {
   var tipoAtual = inputSenha.getAttribute('type');
   var novoTipo = (tipoAtual === 'password') ? 'text' : 'password';
   inputSenha.setAttribute('type', novoTipo);
}

// Adiciona gatilhos aos icones para alternar a visibilidade das senhas
document.getElementById('iconeSenhaLogin').addEventListener('click', function() {
   var inputSenha = document.getElementById('senhaLogin');
   alternarVisibilidadeSenha(inputSenha);
});

