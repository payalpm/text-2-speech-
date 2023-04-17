/*const synth = window.speechSynthesis;
const textInput = document.querySelector('#text');
const langSelect = document.querySelector('#lang');
const speakButton = document.querySelector('#speak');
const downloadButton = document.querySelector('#download');
const downloadLink = document.querySelector('#downloadLink');

function speak() {
    if (synth.speaking) {
        console.error('SpeechSynthesis.speaking');
        return;
    }
    const utterance = new SpeechSynthesisUtterance(textInput.value);
    utterance.lang = langSelect.value;
    synth.speak(utterance);
    utterance.onend = function() {
        downloadButton.disabled = false;
        downloadLink.href = URL.createObjectURL(blob);
    };
    const blob = new Blob([new Uint8Array(utterance)]);
}

speakButton.addEventListener('click', speak);

downloadButton.addEventListener('click', () => {
    downloadButton.disabled = true;
    synth.cancel();
    speak();
});*/
const synth = window.speechSynthesis;
const textInput = document.querySelector('#text');
const langSelect = document.querySelector('#lang');
const speakButton = document.querySelector('#speak');
const downloadButton = document.querySelector('#download');
const downloadLink = document.querySelector('#downloadLink');

function speak() {
    if (synth.speaking) {
        console.error('SpeechSynthesis.speaking');
        return;
    }
    const utterance = new SpeechSynthesisUtterance(textInput.value);
    utterance.lang = langSelect.value;
    synth.speak(utterance);
    utterance.onend = function() {
        downloadButton.disabled = false;
        downloadLink.href = URL.createObjectURL(blob);
    };
    const blob = new Blob([new Uint8Array(utterance)]);
}

speakButton.addEventListener('click', speak);

downloadButton.addEventListener('click', () => {
    downloadButton.disabled = true;
    synth.cancel();
    speak();
});

