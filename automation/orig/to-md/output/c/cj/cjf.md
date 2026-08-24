## [Formula di Maclaurin]{.text-red}

La formula di Maclaurin è la formula di Taylor quando prendo come valore $a$ lo zero, cioè è lo sviluppo di Taylor applicato all'origine.

Prendo la formula di Taylor:

$$
\textcolor{red}{f(x) = f(a) + \frac{f'(a)}{1!}(x-a) + \frac{f''(a)}{2!}(x-a)^2 + \frac{f'''(a)}{3!}(x-a)^3 + \dots + \frac{f^{(n)}(a)}{n!}(x-a)^n + \frac{f^{(n+1)}(c)}{(n+1)!}(x-a)^{n+1}}
$$

Sostituisco zero al posto di $a$:

$$
\textcolor{red}{f(x) = f(0) + \frac{f'(0)}{1!}(x-0) + \frac{f''(0)}{2!}(x-0)^2 + \frac{f'''(0)}{3!}(x-0)^3 + \dots + \frac{f^{(n)}(0)}{n!}(x-0)^n + \frac{f^{(n+1)}(c)}{(n+1)!}(x-0)^{n+1}}
$$

ed ottengo la formula di Maclaurin:

$$
\textcolor{red}{f(x) = f(0) + \frac{f'(0)}{1!}x + \frac{f''(0)}{2!}x^2 + \frac{f'''(0)}{3!}x^3 + \dots + \frac{f^{(n)}(0)}{n!}x^n + \frac{f^{(n+1)}(c)}{(n+1)!}x^{n+1}}
$$