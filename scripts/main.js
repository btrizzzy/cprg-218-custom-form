const btnAlert = document.getElementById('btn-alrt')

btnAlert.onclick = () => {
    var elementals = document.getElementById("elementals").value;
    var quality = document.getElementById("quality").value;
    var cheese = document.getElementById("cheese").value;
    var seasoning = document.getElementById("seasoning").value;
    var transport = document.getElementById("transport").value;
    alert("Imagine this. You have been newly appointed as the head of the " + elementals + " tribe. Your assigned sidekick hates your guts and despises that you value " + quality + " because they think it's stupid. "
    + "The only food they eat here is " + cheese + " and " + seasoning + ". Then it stinks ALL the time. You can only whip around to do your missions is by " + transport + " and it only breaks down when you use it. Doesn't this just sound jolly?");
}
