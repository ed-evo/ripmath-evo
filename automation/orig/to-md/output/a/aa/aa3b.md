# Caso in cui $r$ è minore di $s$

Se devo dividere $2^5 : 2^8$ poiché

$$
2^5 = 2 \times 2 \times 2 \times 2 \times 2
$$

$$
2^8 = 2 \times 2 \times 2 \times 2 \times 2 \times 2 \times 2 \times 2
$$

otterrai

$$
\frac{2^5}{2^8} = \frac{2 \times 2 \times 2 \times 2 \times 2}{2 \times 2 \times 2 \times 2 \times 2 \times 2 \times 2 \times 2}
$$

ricordando che nelle frazioni puoi togliere sopra e sotto gli stessi fattori <span class="text-purple-600">(solo quando il numeratore e il denominatore sono in forma di prodotto)</span> restano solo tre $2$ sotto

$$
= \frac{1}{2 \times 2 \times 2} = \frac{1}{2^3}
$$

cioè restano $3$ termini al denominatore.
ma se ora noi applichiamo la regola otteniamo:

$$
= 2^{5-8} = 2^{-3}
$$

evidentemente due elevato alla meno tre non ha significato perché equivarrebbe a dire che devo moltiplicare la base $2$ per meno $3$ volte per sé stessa; allora diamogli noi un significato ponendola uguale a uno diviso il numero $2$ elevato alla terza:

$$
2^{-3} = \left(\frac{1}{2}\right)^3
$$

se accettiamo questo significato allora la regola è ancora valida.

> <span class="text-blue-600">D'ora in avanti qualunque ente elevato a potenza negativa sarà uguale a uno fratto lo stesso ente elevato a potenza positiva</span>

in generale:

$$
a^{-n} = \frac{1}{a^n}
$$

[Pagina iniziale](../../../index.html) | [Indice di algebra](../../a.html) | [Pagina precedente](aa3.html) | [Pagina successiva](aa3c.html)