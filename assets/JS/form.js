//Cria a máscara XXX.XXX.XXX-XX para a digitacao do campo CPF

document.getElementById('cpf').addEventListener('input', 
function(subCPF) {
   var valor = subCPF.target.value;
   var padraoCPF = valor.replace(/\D/g, '') // Remove qualquer coisa que não seja número
                   .replace(/(\d{3})(\d)/, '$1.$2') // Adiciona ponto após o terceiro dígito
                   .replace(/(\d{3})(\d)/, '$1.$2') // Adiciona ponto após o sexto dígito
                   .replace(/(\d{3})(\d)/, '$1-$2') // Adiciona traço após o nono dígito
                   .replace(/(-\d{2})\d+?$/, '$1'); // Impede entrada de mais de 11 dígitos
                   subCPF.target.value = padraoCPF;
 }
);

//Cria a máscara (XX)XXXXX-XXXX para a digitacao do campo Telefone

document.getElementById('telefone').addEventListener('input', 
function(subTel) {
   var valor = subTel.target.value;
   var padraoTel = valor.replace(/\D/g, '') // Remove qualquer coisa que não seja número
                   .replace(/(\d{0})(\d)/, '$1($2') // Adiciona parentese antes do primeiro dígito
                   .replace(/(\d{2})(\d)/, '$1)$2') // Adiciona parentese após o segundo dígito
                   .replace(/(\d{5})(\d)/, '$1-$2') // Adiciona traço após o sétimo dígito
                   .replace(/(-\d{4})\d+?$/, '$1'); // Impede entrada de mais de 11 dígitos
                   subTel.target.value = padraoTel;
 }
);

//Cria a máscara XXXXX-XXX para a digitacao do campo CEP

document.getElementById('cepResidencia').addEventListener('input', 
function(subCEP) {
   var valor = subCEP.target.value;
   var padraoCEP = valor.replace(/\D/g, '') // Remove qualquer coisa que não seja número
                   
                   .replace(/(\d{5})(\d)/, '$1-$2') // Adiciona traço após o quinto dígito
                   .replace(/(-\d{3})\d+?$/, '$1'); // Impede entrada de mais de 8 dígitos
                   subCEP.target.value = padraoCEP;
 }
);