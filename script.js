var noOfDrum = document.querySelectorAll(".drum").length;

function animation(k) {
    document.querySelector("." + k).classList.add("pressed");
    setTimeout(function () {
        document.querySelector("." + k).classList.remove("pressed");
    }, 100);
}

function musicPlay(kee) {

    animation(kee);
    switch (kee) {
        case "q":
            {
                var audio = new Audio("sounds/beat-box-loop-2-45750.mp3");
                audio.play();

            }
            break;
        case "w":
            {
                var audio = new Audio("sounds/beatbox-100-bpm-heavier-loop-85365.mp3");
                audio.play();

            }
            break;
        case "e":
            {
                var audio = new Audio("sounds/beatbox-130bpm-simple-loop-104317.mp3");
                audio.play();
            }
            break;
        case "r":
            {
                var audio = new Audio("sounds/beatbox-81765.mp3");
                audio.play();
            }
            break;
        case "t":
            {
                var audio = new Audio("sounds/drop-of-water-36948.mp3");
                audio.play();
            }
            break;
        case "y":
            {
                var audio = new Audio("sounds/glitch-loop-108bpm-91062.mp3");
                audio.play();
            }
            break;
        case "u":
            {
                var audio = new Audio("sounds/mouth-plops-6688.mp3");
                audio.play();
            }
            break;
        case "i":
            {
                var audio = new Audio("sounds/punch-140236.mp3");
                audio.play();

            }
            break;
        case "o":
            {
                var audio = new Audio("sounds/rock-your-baby-drumloop-103-bpm-82428.mp3");
                audio.play();

            }
            break;
        case "p":
            {
                var audio = new Audio("sounds/stezzer-102-break-106502.mp3");
                audio.play();
            }
            break;
        case "a":
            {
                var audio = new Audio("sounds/three-two-one-fight-deep-voice-38382.mp3");
                audio.play();
            }
            break;
        case "s":
            {
                var audio = new Audio("sounds/toybeatbreak-91342.mp3");
                audio.play();
            }
            break;
        case "d":
            {
                var audio = new Audio("sounds/beatbox-61387.mp3");
                audio.play();
            }
            break;

        case "f":
            {
                var audio = new Audio("sounds/blaster-2-81267.mp3");
                audio.play();

            }
            break;
        case "g":
            {
                var audio = new Audio("sounds/cinematic-scary-riser-142324.mp3");
                audio.play();

            }
            break;
        case "h":
            {
                var audio = new Audio("sounds/hit-brutal-puncher-cinematic-trailer-sound-effects-124760.mp3");
                audio.play();
            }
            break;
        case "j":
            {
                var audio = new Audio("sounds/hit-low-gravity-absorber-cinematic-trailer-sound-effects-124761.mp3");
                audio.play();
            }
            break;
        case "k":
            {
                var audio = new Audio("sounds/ping-contact-cinematic-trailer-sound-effects-124764.mp3");
                audio.play();
            }
            break;
        case "l":
            {
                var audio = new Audio("sounds/tribe-drum-loop-103173.mp3");
                audio.play();

            }
            break;
        case "z":
            {
                var audio = new Audio("sounds/28122952_human-mouth-beatbox-bass-drum-03_by_smartsoundfx_preview.mp3");
                audio.play();

            }
            break;
        case "x":
            {
                var audio = new Audio("sounds/28123062_human-mouth-beatbox-bass-drum-wobble-01_by_smartsoundfx_preview.mp3");
                audio.play();
            }
            break;
        case "c":
            {
                var audio = new Audio("sounds/28123094_human-mouth-beatbox-effect-suck-in-10_by_smartsoundfx_preview.mp3");
                audio.play();
            }
            break;
        case "v":
            {
                var audio = new Audio("sounds/28123126_human-mouth-beatbox-hihat-03_by_smartsoundfx_preview.mp3");
                audio.play();
            }
            break;
        case "b":
            {
                var audio = new Audio("sounds/28123187_human-mouth-beatbox-snare-01_by_smartsoundfx_preview.mp3");
                audio.play();
            }
            break;
        case "n":
            {
                var audio = new Audio("sounds/28123189_human-mouth-beatbox-snare-04_by_smartsoundfx_preview.mp3");
                audio.play();
            }
            break;
        case "m":
            {
                var audio = new Audio("sounds/28123191_human-mouth-beatbox-snare-02_by_smartsoundfx_preview.mp3");
                audio.play();
            }
            break;
        default:
            break;
    }
}

for (let i = 0; i < noOfDrum; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHtml = this.innerHTML;
        animation(buttonInnerHtml);
        musicPlay(buttonInnerHtml);


    });//anonymous function
}

document.addEventListener("keypress", function (e) {
    // console.log(e.key);
    animation(e.key);
    musicPlay(e.key);
})