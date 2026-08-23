# [Forme indeterminate del tipo $$\infty/\infty$$ metodo del confronto fra infiniti]{.text-red}

Posso rendere molto più semplice il calcolo della pagina precedente con il seguente ragionamento: se un numero tende all'infinito, tenderà all'infinito prima $$x^2$$ rispetto ad $$x$$ (prova a mettere al posto di $$x$$ un numero grande, il suo quadrato sarà ancora più grande) cioè intuitivamente quando $$x^2$$ è già infinito ancora $$x$$ è un valore inferiore quindi trascurabile, quindi in questi limiti basta considerare solo la $$x$$ a potenza più grande, allora

$$
\lim_{x \to \infty} \frac{3x^2+4x-4}{5x^2+6x-3}
$$

sarà uguale al limite

$$
\lim_{x \to \infty} \frac{3x^2}{5x^2}
$$

semplifico

$$
\lim_{x \to \infty} \frac{3}{5} = \frac{3}{5}
$$

***

Da notare che posso fare una "graduatoria" di infiniti rispetto all'infinito "campione"

$$
\lim_{x \to \infty} x
$$

Quelli con potenza della $$x$$ superiore ad $$1$$ andranno all'infinito più rapidamente mentre quelli con potenza di $$x$$ inferiore ad $$1$$ andranno ad infinito più lentamente, ad esempio per $$x$$ tendente ad $$\infty$$ $$x^3$$ arriverà all'infinito più rapidamente di $$x^{1/2} = \sqrt{x}$$.

Inoltre posso dire che in assoluto la funzione che andrà all' $$\infty$$ più rapidamente di tutte le altre sarà

$$
y = e^x
$$

mentre la più lenta ad andare all'infinito sarà

$$
y = \log x
$$

ove con $$\log x$$ si intende il logaritmo naturale (quello in base $$e$$ per intenderci).

***

Quanto detto mi permette di classificare i limiti del tipo $$\infty/\infty$$ in tre grandi gruppi:

> [Definiamo ordine di infinito di un'espressione come quello del suo termine di grado più alto]{.text-purple}
>
> **Esempio:** l'ordine di infinito di:
> $$
> 7x^4-5x^3+2x+4\log x
> $$
> vale a $$4$$ perché $$4$$ è l'ordine di infinito più alto fra i suoi termini.

- Se il numeratore ha lo stesso ordine di infinito del denominatore allora il limite è uguale al rapporto fra i due termini di grado più alto. Nel seguente esempio l'ordine di infinito del numeratore e del denominatore sono entrambi uguali ad $$1$$
$$
\lim_{x \to \infty} \frac{3x-2\log x}{4x} = \frac{3}{4}
$$

- Se il numeratore ha ordine di infinito superiore al denominatore allora il limite vale $$\infty$$, esempio:
$$
\lim_{x \to \infty} \frac{e^x}{x^3} = \infty
$$

- Se il numeratore ha ordine di infinito inferiore al denominatore allora il limite vale $$0$$, esempio:
$$
\lim_{x \to \infty} \frac{x^3+\log x}{e^x} = 0
$$

***

Come abbiamo fatto una classifica degli infiniti possiamo fare la stessa classifica per gli infinitesimi rispetto all'infinitesimo campione

$$
\lim_{x \to 0} \frac{1}{x}
$$

Quelli con potenza della frazione superiore: $$\frac{1}{x^2}$$, $$\frac{1}{x^3}$$, $$\frac{1}{x^4}$$... andranno a zero più velocemente; d'altra parte basta ricordare che $$\frac{1}{0} = \infty$$ e che $$\frac{1}{\infty} = 0$$.