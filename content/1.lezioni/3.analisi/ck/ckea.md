# Calcolare l'integrale definito

Per calcolare l'integrale definito useremo questa semplice regola:

$$
\textcolor{blue}{\int_a^b f(x) \, dx = [F(x)]_a^b = F(b) - F(a)}
$$

Cioè prima calcoliamo l'integrale indefinito $$F(x)$$ poi sostituiamo alla $$x$$ il valore superiore dell'integrale, mettiamo il segno meno e sostituiamo alla $$x$$ il valore inferiore dell'integrale.

---

> **Esempio:**
> 
> [Calcolare l'area della regione di piano limitata dalla curva $$y = -x^2 + 4$$, e dai semiassi positivi delle $$x$$ e delle $$y$$.]{.text-blue}
> 
> La prima cosa da fare è costruire la rappresentazione grafica per capire bene come fare; l'area da trovare è quella evidenziata.
> 
> Siccome l'area sull'asse delle $$x$$ va da $$0$$ a $$2$$ dovremo calcolare l'integrale:
> 
> $$
> \textcolor{blue}{\int_0^2 (-x^2 + 4) \, dx}
> $$
> 
> L'integrale è immediato e vale $$-x^3/3 + 4x$$.
> 
> Per indicare che devo fare le differenze uso la notazione:
> 
> $$
> \textcolor{blue}{\int_0^2 (-x^2 + 4) \, dx = \left[ \frac{-x^3}{3} + 4x \right]_0^2}
> $$
> 
> Ora sostituiamo prima $$2$$ e poi $$0$$:
> 
> $$
> \textcolor{blue}{= \frac{-2^3}{3} + 4 \cdot 2 - \left( \frac{0^3}{3} - 4 \cdot 0 \right) = \frac{-8}{3} + 8 = \frac{16}{3}}
> $$
> 
> Quindi l'area vale $$16/3$$ di unità quadrate del piano, cioè $$5$$ quadratini di lato $$1$$ più un terzo di quadratino.