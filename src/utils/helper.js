 function getRandomAlphabet() {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let randomIndex = Math.floor(Math.random() * 26);
    let randomAlphabet = alphabet[randomIndex];
    return randomAlphabet;
  }

  export {
    getRandomAlphabet
  }