// Função para aplicar máscara de CPF XXX.XXX.XXX-XX
function formatarCPF(valor) {
   return valor.replace(/\D/g, '') // Remove qualquer coisa que não seja número
               .replace(/(\d{3})(\d)/, '$1.$2') // Adiciona ponto após o terceiro dígito
               .replace(/(\d{3})(\d)/, '$1.$2') // Adiciona ponto após o sexto dígito
               .replace(/(\d{3})(\d)/, '$1-$2') // Adiciona traço após o nono dígito
               .replace(/(-\d{2})\d+?$/, '$1'); // Impede entrada de mais de 11 dígitos
}

// Função para aplicar máscara de telefone (XX)XXXXX-XXXX
function formatarTelefone(valor) {
   return valor.replace(/\D/g, '') // Remove qualquer coisa que não seja número
               .replace(/(\d{0})(\d)/, '$1($2') // Adiciona parentese antes do primeiro dígito
               .replace(/(\d{2})(\d)/, '$1)$2') // Adiciona parentese após o segundo dígito
               .replace(/(\d{5})(\d)/, '$1-$2') // Adiciona traço após o sétimo dígito
               .replace(/(-\d{4})\d+?$/, '$1'); // Impede entrada de mais de 11 dígitos
}

// Função para aplicar máscara de CEP XXXXX-XXX
function formatarCEP(valor) {
   return valor.replace(/\D/g, '') // Remove qualquer coisa que não seja número
               .replace(/(\d{5})(\d)/, '$1-$2') // Adiciona traço após o quinto dígito
               .replace(/(-\d{3})\d+?$/, '$1'); // Impede entrada de mais de 8 dígitos
}

// Adiciona os gatilhos para aplicar as máscaras
document.getElementById('cpf').addEventListener('input', function(event) {
   event.target.value = formatarCPF(event.target.value);
});

document.getElementById('telefone').addEventListener('input', function(event) {
   event.target.value = formatarTelefone(event.target.value);
});

document.getElementById('cep').addEventListener('input', function(event) {
   event.target.value = formatarCEP(event.target.value);
});


// Função para verificar se as senhas são iguais
function verificarSenhas() {
   var senha = document.getElementById('senha').value;
   var confirmarSenha = document.getElementById('confirmarSenha').value;
   
   if (senha !== confirmarSenha) {
       document.getElementById('mensagemSenha').innerText = 'As senhas não coincidem!';
       document.getElementById('alertaSenha').style.display = 'block';
      
   } else {
       document.getElementById('mensagemSenha').innerText = '';
       document.getElementById('alertaSenha').style.display = 'none';
      
   }
}

// Adiciona um gatilho para verificar as senhas quando houver uma mudança nos campos de senha ou de confirmação de senha
document.getElementById('senha').addEventListener('input', verificarSenhas);
document.getElementById('confirmarSenha').addEventListener('input', verificarSenhas);


// Função para alternar a visibilidade da senha
function alternarVisibilidadeSenha(inputSenha) {
   var tipoAtual = inputSenha.getAttribute('type');
   var novoTipo = (tipoAtual === 'password') ? 'text' : 'password';
   inputSenha.setAttribute('type', novoTipo);
}

// Adiciona gatilhos aos icones para alternar a visibilidade das senhas
document.getElementById('iconeSenha').addEventListener('click', function() {
   var inputSenha = document.getElementById('senha');
   alternarVisibilidadeSenha(inputSenha);
});

document.getElementById('iconeConfirmaSenha').addEventListener('click', function() {
   var inputConfirmarSenha = document.getElementById('confirmarSenha');
   alternarVisibilidadeSenha(inputConfirmarSenha);
});

