# Caso del polinomio non completo

Succede abbastanza spesso che il polinomio non sia completo, cioè che manchino dei termini.
Ad esempio proviamo a scomporre:

$$
x^3 - 2x + 1
$$

Provo:

$$
(x-1); P(1) = (1)^3 - 2(1) + 1 = 1 - 2 + 1 = 0
$$

Quindi $(x-1)$ è un divisore, però posso fare la divisione di Ruffini solo se ci sono tutti i termini; allora, siccome mi manca $x^2$, al suo posto dovrò mettere uno zero, cioè:

$$
x^3 + 0x^2 - 2x + 1
$$

Ed ora procedo nel solito modo:

Quindi:

$$
x^3 - 2x + 1 = (x-1)(x^2 + x - 1)
$$

Ora si dovrebbe scomporre $x^2 + x - 1$.
Provo:

$$
(x-1); P(1) = (1)^2 + (1) - 1 = 1 + 1 - 1 \neq 0
$$

$$
(x+1); P(-1) = (-1)^2 + (-1) - 1 = 1 - 1 - 1 \neq 0
$$

E poiché i divisori del termine noto sono solamente $+1, -1$, il polinomio non è ulteriormente scomponibile.

Risultato finale:

$$
x^3 - 2x + 1 = (x-1)(x^2 + x - 1)
$$

> **Esercizio:** Prova a scomporre
> $$
> x^5 - 32 =
> $$
> ricordando che per ordinare dovrai scrivere
> $$
> x^5 + 0x^4 + 0x^3 + 0x^2 + 0x - 32 =
> $$

[Pagina iniziale](../../../index.html) | [Indice di algebra](../../a.html) | [Pagina precedente](ad6ba.html) | [Pagina successiva](ad6ba2.html)