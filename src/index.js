import { ethers } from "ethers";

const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop)
})
const app = document.body

const run = async () => {
    if (params.mono) document.documentElement.style.filter = "grayscale(1)"

    let password = "justforme"

    if (password) {
      var randomSeed = ethers.Wallet.createRandom();
      console.log(randomSeed)

      const words = randomSeed.mnemonic.phrase.split(" ")
      let phrase = "";

      for (let i = 0; i < words.length; i++) {
        if ((i+1) % 4 === 0) {
          phrase += `${words[i]}\n`
        } else {
          phrase += `${words[i]} `
        }
      }

      const div = document.createElement('div')
      div.innerText = phrase
      app.appendChild(div)
      app.style.background = col(randomSeed.address)
      app.style.color = col(randomSeed.address)
    }
  };

run()

function algo(str){
  var hash = 5381;
  for (var i = 0; i < str.length; i++) {
    hash = ((hash << 5) + hash) + str.charCodeAt(i);
  }
  return hash;
}

function col(str) {
  var hash = algo(str);
  var r = (hash & 0xFF0000) >> 16;
  var g = (hash & 0x00FF00) >> 8;
  var b = hash & 0x0000FF;

  return `rgb(${r},${g},${b})`
}
