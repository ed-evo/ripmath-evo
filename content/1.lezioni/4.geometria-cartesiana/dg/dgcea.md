# [Costruzione di una famiglia di parabole]{.text-red}

Come abbiamo visto per la retta e la circonferenza anche per le parabole è possibile parlare di fascio, o meglio di **famiglia di parabole**.

Consideriamo due parabole nella forma:

$$
y - a_1x^2 - b_1x - c_1 = 0
$$
$$
y - a_2x^2 - b_2x - c_2 = 0
$$

con $$a_1, a_2, b_1, b_2, c_1, c_2$$ numeri dati.

Allora possiamo costruire un fascio di parabole, introducendo il parametro $$k$$, nel seguente modo:

$$
y - a_1x^2 - b_1x - c_1 + k(y - a_2x^2 - b_2x - c_2) = 0
$$

posso calcolare:

$$
y - a_1x^2 - b_1x - c_1 + ky - ka_2x^2 - kb_2x - kc_2 = 0
$$

$$
y + ky = a_1x^2 + ka_2x^2 + b_1x + kb_2x + c_1 + kc_2
$$

$$
(1+k)y = (a_1 + ka_2)x^2 + (b_1 + kb_2)x + c_1 + kc_2
$$

e (supponendo $$k \neq -1$$) otteniamo la formula finale:

$$
y = \frac{a_1 + ka_2}{1+k}x^2 + \frac{b_1 + kb_2}{1+k}x + \frac{c_1 + kc_2}{1+k}
$$

> **Nota:** Il termine $$1+k$$ al denominatore dell'espressione evidenziata in grigio non si può annullare (quindi deve essere $$k \neq -1$$) perché la divisione per zero non è possibile.

Considereremo questa come l'equazione esplicita di un fascio di parabole di parametro $$k$$ con $$k \neq -1$$ valore per cui il denominatore si annulla; comunque non ti preoccupare se è complicata: di solito l'equazione di un fascio di parabole è molto più semplice: vedi qui sotto.

***

In alcuni testi, più semplicemente, senza esplicitare la $$y$$, viene presa come espressione di una famiglia di parabole la loro combinazione lineare, cioè, date le parabole:

$$
y = a_1x^2 + b_1x + c_1
$$
$$
y = a_2x^2 + b_2x + c_2
$$

la famiglia di parabole generata da esse sarà:

$$
y - a_1x^2 - b_1x + c_1 + k(y - a_2x^2 - b_2x - c_2) = 0 \quad \text{con } k \neq -1
$$

> **Nota:** devi considerare $$k \neq -1$$ perché per $$k = -1$$ sparirebbe la $$y$$.

***

> **Nota:** Non tutte le curve della famiglia sono effettivamente parabole: se per un valore di $$k$$ il termine di secondo grado si annulla allora l'equazione diventa di primo grado e rappresenta una retta che sarà considerata parabola degenere.