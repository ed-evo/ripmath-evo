Calcolare il valore dell'integrale

$$
\int x \sin x^2 \, dx =
$$

> **Nota:** Noto che la derivata di $x^2$ è $2x$ mentre io ho solamente $x$, allora basterà moltiplicare l'integrale per $2$ e, per pareggiare, dovrò anche moltiplicare per $1/2$.

$$
= \frac{1}{2} \int 2x \sin x^2 \, dx =
$$

Ora è un integrale del tipo

$$
\textcolor{blue}{\int \sin[f(x)] \cdot f'(x) \, dx = -\cos[f(x)] + c}
$$

con $f(x) = x^2$ ed $f'(x) = 2x$ quindi ottengo

$$
\frac{1}{2} (-\cos x^2) = \frac{-\cos x^2}{2} + c
$$