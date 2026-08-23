# [Valore medio]{.text-red}

Passiamo ora a definire per la variabile aleatoria continua il concetto di valore medio.

> **Ricordo:** che il valore medio per la variabile discreta è uguale alla somma dei prodotti dei valori della variabile per la rispettiva probabilità, e quindi, passando al caso continuo, la somma di tali prodotti deve diventare l'integrale; infatti l'integrale è il limite delle somme dei rettangolini facendone diventare infinitesime le basi $$dx$$ ed il simbolo di integrale è la s medioevale che indica la somma.

Consideriamo la variabile casuale continua $$X$$ che assuma tutti i valori nell'intervallo $$[a;b]$$ e sia $$f(x)$$ la sua funzione densità e $$F(x)$$ la sua funzione di ripartizione.

La variabile casuale $$X$$ assume (a meno di infinitesimi) il valore $$x$$ nell'intervallo $$[a;b]$$ con probabilità $$dF(x) = f(x)dx$$.

Allora il valore medio $$M(X)$$ sarà dato dall'integrale sull'intervallo $$[a;b]$$ del prodotto dei valori $$x$$ della variabile aleatoria per la rispettiva probabilità $$dF(x) = f(x)dx$$.

$$
M(X) = \int_{a}^{b} x \, dF(x) = \int_{a}^{b} x f(x) \, dx
$$

> **Esempio:** calcoliamo il valore medio per la funzione densità trovata nell'esercizio della pagina precedente.
> Abbiamo la funzione densità nell'intervallo $$[0;4]$$:
> $$
> y = \frac{x}{8}
> $$
> Calcoliamo il valore medio $$m = M(X)$$ della variabile aleatoria:
> $$
> M(X) = \int_{a}^{b} x f(x) \, dx = \int_{0}^{4} \frac{1}{8} x^2 \, dx = \left[ \frac{1}{24} x^3 \right]_{0}^{4} = \frac{64}{24} - 0 = \frac{8}{3}
> $$