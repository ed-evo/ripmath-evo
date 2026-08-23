# Integrazione per parti

La formula per l'integrazione per parti deriva dalla formula per la [derivata di un prodotto](../cf/cfddb.html):
([Dimostrazione](ckdgd.html))

La maggior difficoltà è data dal fatto che è possibile presentare la formula in [modi diversi](ckdgb.html). Io preferisco questa formula che mi sembra la più semplice:

$$
\textcolor{red}{\int f(x) \cdot g(x) \, dx = f(x) \cdot \int g(x) \, dx - \int \left( f'(x) \cdot \int g(x) \, dx \right) dx}
$$

o, in modo abbreviato:

$$
\textcolor{red}{\int f \cdot g = f \cdot \int g - \int (f' \cdot \int g)}
$$

Intuitivamente, dovendo fare l'integrale del prodotto di due funzioni, di una devi saperne fare l'integrale e dell'altra la derivata.

***

> Molto spesso di una funzione conosci sia l'integrale che la derivata, in questo caso devi scegliere in modo che il risultato sia un integrale più semplice di quello di partenza: ad esempio se considero $$x^3$$ da derivare ottengo $$3x^2$$ cioè un grado più basso, mentre se la considero da integrare ottengo $$x^4/4$$ cioè un grado più alto; di solito devo cercare di trovare dei gradi più bassi: l'esempio qui sotto fa eccezione.

***

Esempio: calcolare 

$$
\textcolor{red}{\int x \log x \, dx}
$$

Si tratta di un prodotto di funzioni: della funzione logaritmo conosco bene la derivata ($$\frac{1}{x}$$), della funzione $$x$$ conosco bene l'integrale. Quindi pongo:

$$
\textcolor{red}{f(x) = \log x}
$$
$$
\textcolor{red}{g(x) = x}
$$

Applicando la formula:

$$
\textcolor{red}{\int x \log x \, dx = \log x \int x \, dx - \int \left( \frac{1}{x} \int x \, dx \right) dx =}
$$

ricordando che l'integrale di $$x$$ è $$x^2/2$$ avrò:

$$
\textcolor{red}{\frac{x^2}{2} \log x - \int \frac{1}{x} \cdot \frac{x^2}{2} \, dx =}
$$

Semplifico ed estraggo $$1/2$$ dall'integrale:

$$
\textcolor{red}{\frac{x^2}{2} \log x - \frac{1}{2} \int x \, dx =}
$$

e risolvendo l'integrale:

$$
\textcolor{red}{\frac{x^2}{2} \log x - \frac{1}{2} \cdot \frac{x^2}{2} = \frac{x^2}{2} \log x - \frac{x^2}{4} + c}
$$

Per presentare la soluzione in modo più elegante raccogliamo $$x^2/2$$:

$$
\textcolor{red}{\frac{x^2}{2} \left( \log x - \frac{1}{2} \right) + c}
$$

***

Ricapitolando:
- Devo avere il prodotto di due funzioni
- Devo decidere quale funzione derivare e quale integrare
- Applico la formula ed eseguo i calcoli

***

Vediamo ora alcuni [esercizi](ckdgc.html) per meglio fissare il concetto.

***

Un sottocaso abbastanza interessante dell'integrazione per parti è la cosiddetta [integrazione per ricorrenza](ckdga.html).