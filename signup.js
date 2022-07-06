function onChange(){
    const password=document.querySelector('input[name=pass-1]');
    const confirm=document.querySelector('input[name=pass-2]');

    if(confirm.value===password.value){
        confirm.setCustomValidity('');
    }
    else{
        confirm.setCustomValidity("girdiğiniz şifreyle uyuşmamaktadır");
    }
}