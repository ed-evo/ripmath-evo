# [Sviluppo in serie]{.text-red}

Sviluppare in serie di potenze la funzione

[$$y = \cos x$$]{.text-blue}

Sviluppiamola in un intorno dell'origine (Mac Laurin) secondo la formula:

$$
\textcolor{red}{f(x) = f(0) + \frac{f'(0)}{1!}x + \frac{f''(0)}{2!}x^2 + \frac{f'''(0)}{3!}x^3 + \dots + \frac{f^{(n)}(0)}{n!}x^n + \frac{f^{(n+1)}(c)}{(n+1)!}x^{n+1}}
$$

Cominciamo a calcolare $$f(0)$$ e le derivate $$f'(0), f''(0), \dots$$

[$$f(x) = \cos x \implies f(0) = \cos 0 = 1$$]{.text-blue}
[$$f'(x) = (\cos x)' = -\sin x \implies f'(0) = -\sin 0 = 0$$]{.text-blue}
[$$f''(x) = -\cos x \implies f''(0) = -\cos 0 = -1$$]{.text-blue}
[$$f'''(x) = \sin x \implies f'''(0) = \sin 0 = 0$$]{.text-blue}
[$$f^{IV}(x) = \cos x \implies f^{IV}(0) = \cos 0 = 1$$]{.text-blue}
[$$f^{V}(x) = -\sin x \implies f^{V}(0) = -\sin 0 = 0$$]{.text-blue}
[$$\dots \implies \dots$$]{.text-blue}

Sostituendo lo sviluppo sarà:

$$
\textcolor{blue}{\cos x = 1 + \frac{0}{1!}x + \frac{-1}{2!}x^2 + \frac{0}{3!}x^3 + \frac{1}{4!}x^4 + \frac{0}{5!}x^5 + \dots}
$$

Scriviamolo meglio:

$$
\textcolor{blue}{\cos x = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \frac{x^6}{6!} + \frac{x^8}{8!} - \dots}
$$