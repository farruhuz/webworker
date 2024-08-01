self.onmessage = (e) => {
  if (e.data === 'start') {
    let sum = 0;
    for (let i = 1; i < 5000000000; i++) {
      sum += i;
    }
    self.postMessage(true, 'but we do not recommend it');
  }
};