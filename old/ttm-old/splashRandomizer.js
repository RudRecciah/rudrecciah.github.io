calcsplashtext();
function calcsplashtext() {
    var peo = Math.floor(Math.random() * 9999);
    if(peo == 6135) {
        console.log("This meessage has a 0.0001% chance of existing! Congratulations, your luck is in debt for the rest of your life.")
    }
    var splashText = Math.floor(Math.random() * 15);
    var splashArray = ["Honestly I don't even know what he's doing. - Kan", "Ruining games, one theory at a time.", "neilception", "Colin Cult Approved", "Rosalin bad. Feil good.", "100% Cannonocal", "If Johnny existed, he'd be alive right now.", "Rob is the man behind the slaughter.", "TENTACLES", "Scarlet looks at Quincy in IF's trailer, just remember that.", "Impostor Factory supports sprinting.", "Trials: Neil", "Bird. Pog.", "Join us, Guru.", "The factory needs to start making more impostors, there's only 2 per game.", "What if :eyes: we met :point_right::point_left: on the moon. Haha...Unless?"]
    document.getElementById("motd").innerHTML = splashArray[splashText];
    document.getElementById("motds").innerHTML = splashArray[splashText];
}