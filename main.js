import "./style.css";
import VoiceRSS from "./voicerss-tts.min";

const jokeUrl =
  "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";

// DOM
const button = document.getElementById("button");
const jokeContainer = document.getElementById("joke");

/**
 *
 * @returns {String}
 */
async function getAJoke() {
  try {
    const response = await fetch(jokeUrl);
    const data = await response.json();
    const joke = data.joke ?? data.setup + data.delivery;
    jokeContainer.hidden = false;
    jokeContainer.textContent = joke;
    return joke;
  } catch (error) {
    return "Sorry ~ Something went wrong!";
  }
}

/**
 *
 * @param {String} src 转语音文本
 */
function textToSpeech(src) {
  VoiceRSS.speech({
    key: "35e26687b6fb441e9eca2e60e8e395d7",
    src: src,
    hl: "en-us",
    v: "Linda",
    r: 0,
    c: "mp3",
    f: "44khz_16bit_stereo",
    ssml: false,
  });
}

button.addEventListener("click", async () => {
  jokeContainer.hidden = true;
  const joke = await getAJoke();
  console.log(joke);
  textToSpeech(joke);
});
