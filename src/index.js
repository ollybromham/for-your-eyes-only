import { ethers } from "ethers";

const tomb = document.querySelector('.tomb')
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

const newWallet = async () => {
    // let password = prompt("Password");
    let password = "everydayweburntotheground"

    if (password) {
      var randomSeed = ethers.Wallet.createRandom();

      console.log(randomSeed)

      const d = new Date()
      const day = d.getDate()
      const month = d.getMonth()
      const year = d.getFullYear()

      tomb.innerHTML += `<div>${randomSeed.address}</div>`
      tomb.innerHTML += `<div>${randomSeed.mnemonic.phrase}</div>`
      tomb.innerHTML += `<div>${day} ${months[month]} ${year}</div>`

      // const birth = new Date().getTime()
      //
      // function callback(progress) {
      //   console.log("Encrypting: " + parseInt(progress * 100) + "% complete");
      // }
      //
      // let encryptPromise = randomSeed.encrypt(password, callback);
      //
      // encryptPromise.then(function (json) {
      //   // console.log(json);
      //   tomb.innerHTML += `<div>${randomSeed.address}</div>`
      //   tomb.innerHTML += `<div>${randomSeed.mnemonic.phrase}</div>`
      //   tomb.innerHTML += `<div>${birth}–${new Date().getTime()}</div>`
      //   tomb.classList.add('ready')
      // });
    }
  };

newWallet()
