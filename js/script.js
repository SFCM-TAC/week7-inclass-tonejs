var player = new Tone.Player("sounds/A.mp3", function() {
  document.addEventListener('keydown', playFile);
});
player.toMaster();

var player2 = new Tone.Player("sounds/B.mp3", function() {
  document.addEventListener('keydown', playFile);
});
player2.toMaster();

function playFile(event) {
  player.start();
  player2.start();
}

function playSound(event) {
  console.log(event);

  //create a synth and connect it to the master output (your speakers)
  var synth = new Tone.Synth(
    {
      envelope: {
        attack  : 0.0004 ,
        decay  : 0.1 ,
        sustain  : 0.25 ,
        release  : 1
      }
  }).toMaster()

  switch (event.key) {
    case "a":
        synth.triggerAttackRelease('C3', '1n');
        break;
    case "s":
        synth.triggerAttackRelease('D3', '1n');
        break;
    case "d":
        synth.triggerAttackRelease('Eb3', '1n');
        break;
    case "f":
        synth.triggerAttackRelease('F#3', '1n');
        break;
  }
}
document.addEventListener('keydown', playSound);
