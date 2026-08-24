# Sviluppo in serie

Sviluppare in serie di potenze la funzione

[$$
y = e^x
$$]{.text-blue}

Sviluppiamola in un intorno dell'origine (Mac Laurin) secondo la formula

[$$
f(x) = f(0) + \frac{f'(0)}{1!}x + \frac{f''(0)}{2!}x^2 + \frac{f'''(0)}{3!}x^3 + \dots + \frac{f^{(n)}(0)}{n!}x^n + \frac{f^{(n+1)}(c)}{(n+1)!}x^{n+1}
$$]{.text-red}

Cominciamo a calcolare $$f(0)$$ e le derivate $$f'(0)$$, $$f''(0)$$, ...

[$$
f(x) = e^x \implies f(0) = e^0 = 1
$$]{.text-blue}

[$$
f'(x) = (e^x)' = e^x \implies f'(0) = e^0 = 1
$$]{.text-blue}

[$$
f''(x) = (e^x)'' = e^x \implies f''(0) = e^0 = 1
$$]{.text-blue}

[$$
f'''(x) = (e^x)''' = e^x \implies f'''(0) = e^0 = 1
$$]{.text-blue}

[$$
f^{(IV)}(x) = (e^x)^{(IV)} = e^x \implies f^{(IV)}(0) = e^0 = 1
$$]{.text-blue}

[$$
f^{(V)}(x) = (e^x)^{(V)} = e^x \implies f^{(V)}(0) = e^0 = 1
$$]{.text-blue}

Sostituendo lo sviluppo sarà:

[$$
e^x = 1 + \frac{1}{1!}x + \frac{1}{2!}x^2 + \frac{1}{3!}x^3 + \frac{1}{4!}x^4 + \frac{1}{5!}x^5 + \dots
$$]{.text-blue}

Come vedi lo sviluppo si fa senza calcolare il resto. Scriviamolo meglio:

[$$
e^x = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \frac{x^4}{4!} + \frac{x^5}{5!} + \dots
$$]{.text-blue}

***

Ora potremmo usare la serie trovata per calcolare il valore di $$e$$ con la precisione che vogliamo. Sostituendo $$1$$ a $$x$$ in $$e^x$$ avremo:

[$$
e = 1 + 1 + \frac{1}{2} + \frac{1}{6} + \frac{1}{24} + \frac{1}{120} + \dots = 2,71\dots
$$]{.text-blue}