function fibNaive(n) {
  if (n <= 2) return 1;
  return fibNaive(n - 1) + fibNaive(n - 2);
}

function fib(n, memo = []) {
  if (memo[n]) return memo[n];

  if (n <= 2) return 1;
  const resut = fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = resut;
  return resut;
}
console.log(fibNaive(100));
