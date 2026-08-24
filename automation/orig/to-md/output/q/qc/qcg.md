# [Successioni aventi lo stesso carattere]{.text-red}

Data la successione

$a_1, a_2, a_3, \dots, a_n, \dots$

diremo che la successione

$a_{n+1}, a_{n+2}, a_{n+3}, \dots$

è una successione avente lo stesso **carattere** della successione di partenza.

cioè, "togliendo" i primi termini ad una successione ottengo ancora una successione e le due successioni hanno lo stesso **carattere** nel senso che si conserva sia la convergenza ad un valore dato, sia la divergenza.

> (Ammettono lo stesso limite)

---

**Esempio:** consideriamo la successione

$\frac{1}{4}, \frac{1}{2}, 1, 2, 4, 8, 16, 32, \dots, 2^{n-3}, \dots$

la successione

$1, 2, 4, 8, 16, 32, \dots, 2^{n-1}, \dots$

ottenuta dalla precedente eliminando i primi due termini ha lo stesso carattere della precedente, cioè, come la precedente tende a $+\infty$:

$$
\lim_{n \to \infty} 2^{n-3} = +\infty = \lim_{n \to \infty} 2^{n-1}
$$

così anche la successione

$16, 32, 64, \dots, 2^{n+3}, \dots$

ottenuta dalla prima eliminando i primi $6$ termini ha lo stesso carattere della prima:

$$
\lim_{n \to \infty} 2^{n-3} = +\infty = \lim_{n \to \infty} 2^{n+3}
$$