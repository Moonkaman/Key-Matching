function genQuestions(num, arr) {
  let q = []
  while(q.length < num) {
    const pick = arr[Math.floor(Math.random()*arr.length)];
    if(!q.includes(pick)) {
      q.push(pick);
    }
  }

  return q;
}

export default genQuestions;