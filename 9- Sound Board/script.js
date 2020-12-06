const  sounds = ["flag", "keys", "alarm"];

sounds.forEach((sound) => {
    const btn = document.createElement('button');

    btn.classList.add('btn');

    btn.innerText = sound;

    btn.addEventListener('click', () => {
        stopAudio();
        document.getElementById(sound).play();
        
    });

    document.body.appendChild(btn);
});


function stopAudio() {
    sounds.forEach((sound) => {
        const song = document.getElementById(sound);
        song.pause();
        song.currentTime = 0;
    });
}