Determinare i punti di massimo, minimo e flesso orizzontale per la seguente funzione in tutto l'intervallo di definizione:

$$
\textcolor{red}{y = x - \sqrt{2-x}}
$$

L'intervallo di definizione è tutto $$\mathbb{R}$$ eccetto dove il termine sotto radice è minore di zero, cioè devo considerare accettabili i valori per cui:

$$
\textcolor{red}{2 - x \geq 0}
$$

risolvendo:

$$
\textcolor{red}{-x \geq -2}
$$
$$
\textcolor{red}{x \leq 2}
$$

quindi:

$$
\textcolor{red}{\text{C.E.} = (-\infty, 2]}
$$

Trovo la derivata prima e la pongo uguale a zero:

$$
\textcolor{red}{y' = 1 - \frac{1}{2\sqrt{2-x}}(-1)}
$$

> **Nota:** il $$-1$$ deriva dal fatto che si deve fare la derivata di una funzione composta e la derivata di $$-x$$ è $$-1$$.

$$
\textcolor{red}{y' = 1 + \frac{1}{2\sqrt{2-x}}}
$$

[razionalizzo](../../a/ak/akfaa.html)

$$
\textcolor{red}{y' = 1 + \frac{\sqrt{2-x}}{2(2-x)}}
$$

Eseguo il m.c.m. al secondo termine:

$$
\textcolor{red}{y' = \frac{4 - 2x + \sqrt{2-x}}{2(2-x)}}
$$

$$
\textcolor{red}{\frac{4 - 2x + \sqrt{2-x}}{2(2-x)} = 0}
$$

Una frazione è zero quando è zero il numeratore (però il denominatore deve essere diverso da zero, quindi dovrà essere $$x \neq 2$$):

$$
\textcolor{red}{4 - 2x + \sqrt{2-x} = 0}
$$

È un'equazione irrazionale che, [risolta](cgha05a.html), ha come soluzione accettabile:

$$
\textcolor{red}{x_2 = 2}
$$

> **Attenzione:** quando capita una soluzione che annulla numeratore e denominatore della derivata è un buon indizio per pensare che ci sia una cuspide, quindi se il valore è contornato dal campo di esistenza conviene farne il limite della derivata a destra e a sinistra. Nel nostro caso si tratta di un valore all'estremo del campo ma appartenente al campo, quindi ci limiteremo a calcolare il valore della funzione nel punto $$2$$.

Calcoliamo il valore della funzione nel punto $$2$$:

$$
\textcolor{red}{f(2) = 2 + \sqrt{2-2} = 2}
$$

La funzione è tutta a sinistra del punto $$(2, 2)$$.