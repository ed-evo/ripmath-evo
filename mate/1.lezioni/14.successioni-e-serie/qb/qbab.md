# Ricerca di un termine qualunque della progressione aritmetica

Siccome la differenza fra ogni termine e l'antecedente resta costante, conoscendo il primo termine e la ragione possiamo trovare un termine qualunque della progressione.

Infatti, ad esempio, data la progressione di primo termine $$3$$ e ragione $$5$$ abbiamo:

- primo termine $$3$$
- secondo termine $$3 + 5 = 8 = 3 + 5 \cdot 1$$
- terzo termine $$8 + 5 = 13 = 3 + 5 \cdot 2$$
- quarto termine $$13 + 5 = 18 = 3 + 5 \cdot 3$$
- quinto termine $$18 + 5 = 23 = 3 + 5 \cdot 4$$
- sesto termine $$23 + 5 = 28 = 3 + 5 \cdot 5$$

Quindi, se voglio il centesimo termine, basterà fare:

centesimo termine $$3 + 5 \cdot (100 - 1) = 3 + 5 \cdot 99 = 498$$

Quindi la formula per trovare il termine $$k$$-esimo di una progressione aritmetica, dato il primo termine $$a_1$$ e di ragione $$d$$ sarà:

$$
\textcolor{red}{a_k = a_1 + d \cdot (k - 1)}
$$

> **Esempio:** Dato il primo termine $$-2$$ e ragione $$\frac{1}{2}$$, trovare il quarantesimo termine.
>
> $$
> a_{40} = a_1 + \frac{1}{2} \cdot (40 - 1) = -2 + \frac{1}{2} \cdot 39 = \frac{-4 + 39}{2} = \frac{35}{2}
> $$
>
> Quindi:
>
> $$
> a_{40} = \frac{35}{2}
> $$