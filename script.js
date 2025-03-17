let passwordInpunt= document.getElementById('password');
let emailInput = document.getElementById('email');

// criar um paragrafo para exibir a mensagem

let message = document.createElement ('p');
message.style.color = 'red';
passwordInpunt.parentNode.insertBefore(message, passwordInpunt.nextSibling);

passwordInpunt.addEventListener('input', function(){
    let senha= passwordInpunt.value;//pegando a senha digitada
    
    if(senha.length <8){
        message.textContent = 'Sua senha precisa ter pelo menos 8 caracteres';
        message.style.color = 'red';

    } else{
        message. textContent= 'Senha Válida';
        message.style.color = 'green';
    }
})


// criar um parágrafo para validação para e-mail

let emailMessage = document.createElement('p');
emailMessage.style.color = 'red';
emailInput.parentNode.insertBefore(emailMessage, emailInput.nextSibling);

emailInput.addEventListener('input',function(){
    let email = emailInput.value;

    if(!email.includes('@')){
        emailMessage.textContent = 'Endereço de e-mail incorreto';
    } else{
        emailMessage.textContent = ''; //remove a mensagem se o e-mail for válido
    }

})


