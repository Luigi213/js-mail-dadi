let button = document.querySelector("#btn");
button.addEventListener('click', function(){
    // 1- Inserire email
    // 1.1 uso prompt per chiedere email
    let email = document.getElementById("mail").value;
    // 2- Creo lista di chi può entrare
    let array_list = ["Alessandro@gmail.com", "Marco@gmail.com", "Alessio@gmail.com"];
    // 2.1 controllo nella lista se la email inserita può essere accettata
    let accepted = false
    for(let i=0; i<array_list.length; i++){
        if(array_list[i] == email){
           accepted = true 
        }
    }
    // 3- stampo l'esito;
    if(accepted){
        result = 'Email confermata'
    }
    else{
        result = 'Email errata'
    }
    document.getElementById("result").innerHTML = result
})
