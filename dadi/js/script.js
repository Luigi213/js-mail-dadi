// 1-  Genera un numero radom da 1 a 6
let num_1 = Math.floor(Math.random() * 6 + 1)
let num_2 = Math.floor(Math.random() * 6 + 1)
// 1.1 per il giocatore e il computer
let player_1 = num_1;
let player_2 = num_2;
console.log(player_1)
console.log(player_2)
// 2- Stabilisco il vincitore in base al punteggio più alto
if(player_1 > player_2){
    console.log('Ha vinto player_1')
}
else{
    console.log('Ha vinto player_2')
}