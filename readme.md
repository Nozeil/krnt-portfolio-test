## Примечание

- Так как шрифт Poppins не поддерживает кириллицу совместо с ним используется Roboto.
- Решение задачи в файле по пути: app/src/nthFibo.ts и дублируется ниже.

```
const nthFibo = (n: number): number => {
  if (n < 2) {
    return n;
  }

  return nthFibo(n - 1) + nthFibo(n - 2);
};
```

