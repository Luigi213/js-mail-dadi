let button = document.querySelector("#btn");
button.addEventListener('click', function(){
    // 1-  Genera un numero radom da 1 a 6
    // 1.1 per il giocatore e il computer
    let player_1 = Math.floor(Math.random() * 6 + 1);
    let player_2 = Math.floor(Math.random() * 6 + 1);
    document.getElementById("num").value = player_1;
    document.getElementById("num_1").value = player_2;
    // 2- Stabilisco il vincitore in base al punteggio più alto
    let result;
    if(player_1 > player_2){
        result ='Ha vinto player_1'
    }
    else if(player_1 == player_2){
        result ='Avete pareggiato'
    }
    else{
        result ='Ha vinto player_2'
    }
    document.getElementById("result").innerHTML = result;
})