function gerarnumerosjogoblaze() {
   var  anakin =parseInt(document.getElementById('anakin').value);
    var luke = parseInt(document.getElementById('luke').value);

var placarAnakin =0;
var placarLuke =0;
var vitoiasparavencer=5;

numeroAnakin = Math.floor(Math.random() * 10) + 1;
numeroluke = Math.floor(Math.random() * 10) + 1;

 if (numeroAnakin > numeroLuke) {
        placarAnakin++;
        alert(nomeAnakin + " venceu a rodada!");
    } else if (numeroLuke > numeroAnakin) {
        placarLuke++;
        alert(nomeLuke + " venceu a rodada!");
    } else {
        alert("A rodada terminou em empate!");
    }

        if (numeroAnakin > numeroLuke) {
        placarAnakin = placarAnakin + 1;
        alert(nomeAnakin + " venceu a rodada!");
    } else if (numeroLuke > numeroAnakin) {
        placarLuke = placarLuke + 1;
        alert(nomeLuke + " venceu a rodada!");
    } else {
        alert("Empate!");
    }
}


