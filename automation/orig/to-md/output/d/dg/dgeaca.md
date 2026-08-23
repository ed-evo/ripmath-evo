# [esercizio]{.text-red}

Data la parabola $$y = x^2 - kx + 1$$, determinare il valore di $$k$$ affinché essa sia tangente alla retta $$y = 2x$$.

---

Soluzione:

Faccio il sistema fra la retta e l'equazione della parabola:

$$
\begin{cases}
y = 2x \\
y = x^2 - kx + 1
\end{cases}
$$

Sostituisco il valore della $$y$$ dalla prima equazione nella seconda ed ottengo:

$$
\begin{cases}
y = 2x \\
2x = x^2 - kx + 1
\end{cases}
$$

$$
x^2 - kx - 2x + 1 = 0
$$

Posso quindi considerare l'equazione risolvente:

$$
x^2 - (k+2)x + 1 = 0
$$

Per avere la tangenza retta-parabola devo porre il delta dell'equazione uguale a zero:

$$
\Delta = b^2 - 4ac = 0
$$

Ho:
$$a = 1$$, $$b = -(k+2)$$, $$c = 1$$

$$
\Delta = b^2 - 4ac = [-(k+2)]^2 - 4(1)(1) = 0
$$

> **Nota:** Il quadrato è sempre positivo, quindi il meno davanti alla tonda diventa più.

$$
k^2 + 4k + 4 - 4 = 0
$$

Metto in ordine:

$$
k^2 + 4k = 0
$$

È un'equazione spuria:

$$
k(k+4) = 0
$$

> **Nota:** Un prodotto è zero se uno dei fattori è zero, quindi avremo $$k = 0$$ oppure $$(k+4) = 0$$.

Ed abbiamo i due risultati:

$$k_1 = 0$$, $$k_2 = -4$$

Abbiamo quindi due parabole possibili tangenti alla retta data:

$$y = x^2 - (0)x + 1 \implies [y = x^2 + 1]{.text-blue}$$
$$y = x^2 - (-4)x + 1 \implies [y = x^2 + 4x + 1]{.text-green-darken-1}$$

---

A destra il grafico relativo: le due parabole sono una in blu e l'altra in verde scuro, mentre la retta [$$y = 2x$$]{.text-red} è in rosso.