# Sviluppo in serie

Sviluppare in serie di potenze la funzione

[$y = \sin x$]{.text-blue}

Sviluppiamola in un intorno dell'origine (Mac Laurin) secondo la formula

$$
\textcolor{red}{f(x) = f(0) + \frac{x}{1!}f'(0) + \frac{x^2}{2!}f''(0) + \frac{x^3}{3!}f'''(0) + \dots + \frac{x^n}{n!}f^{(n)}(0) + \frac{x^{n+1}}{(n+1)!}f^{(n+1)}(c)}
$$

Cominciamo a calcolare $f(0)$ e le derivate $f'(0)$, $f''(0)$, ...

- [$f(x) = \sin x \implies f(0) = \sin 0 = 0$]{.text-blue}
- [$f'(x) = (\sin x)' = \cos x \implies f'(0) = \cos 0 = 1$]{.text-blue}
- [$f''(x) = -\sin x \implies f''(0) = -\sin 0 = 0$]{.text-blue}
- [$f'''(x) = -\cos x \implies f'''(0) = -\cos 0 = -1$]{.text-blue}
- [$f^{(IV)}(x) = \sin x \implies f^{(IV)}(0) = \sin 0 = 0$]{.text-blue}
- [$f^{(V)}(x) = \cos x \implies f^{(V)}(0) = \cos 0 = 1$]{.text-blue}

Sostituendo, lo sviluppo sarà:

$$
\textcolor{blue}{\sin x = 0 + \frac{x}{1!}(1) + \frac{x^2}{2!}(0) + \frac{x^3}{3!}(-1) + \frac{x^4}{4!}(0) + \frac{x^5}{5!}(1) + \dots}
$$

Scriviamolo meglio:

$$
\textcolor{blue}{\sin x = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \frac{x^7}{7!} + \frac{x^9}{9!} - \dots}
$$