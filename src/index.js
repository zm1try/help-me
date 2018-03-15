module.exports = function count(s, pairs) {

  let N = 1, total = 0;
  
  if (pairs.length > 7) {
    return;
  }

  for (let i = 0; i < pairs.length; i++) {
    if (pairs[i][1] > 10) {
      return;
    }
    N *= pairs[i][0] ** pairs[i][1];
  }

  function grComDiv(a, b) {
    if (b === 0) {
      return a;
    }
    return grComDiv(b, a%b);
  }
    
  for (let k = 0; k < N; k++) {
    for (let j = 0; j < s.length; j++) {
      if (s[j] === '1') {
        if (grComDiv(k + j, N) !== 1 ) break;
        else
          if (j === (s.length - 1) && grComDiv(k + j, N) === 1) total++;
      }
      else 
        if (grComDiv(k + j, N) === 1 ) break;
        else
          if (j === (s.length - 1) && grComDiv(k + j, N) !== 1) total++;
      }
    }
  
  return total%1000000007;
}