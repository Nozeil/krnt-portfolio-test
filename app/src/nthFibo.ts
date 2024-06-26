const nthFibo = (n: number): number => {
  if (n < 2) {
    return n;
  }

  return nthFibo(n - 1) + nthFibo(n - 2);
};
