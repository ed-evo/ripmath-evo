# [Limite infinito di una successione]{.text-red}

Diremo che una successione
$a_1, a_2, a_3, \dots, a_k, \dots$
tende al limite infinito $\infty$ se preso un intorno di $\infty$ da un certo termine $a_k$ in poi tutti i termini della successione cadono dentro tale intorno.

Anche qui è possibile dare una definizione di limite più "algebrica" che può essere meglio utilizzata negli esercizi.

> **Definizione**
>
> Diremo che la successione
> $a_1, a_2, \dots, a_n, \dots$
> tende al **limite infinito $\infty$** se considerato un numero $M$ positivo grande a piacere, esiste in sua corrispondenza un numero $k_M \in \mathbb{N}$ tale che quando $|a_n| > M$ abbiamo $n > k_M$.
>
> In simboli:
>
> $$
> \lim_{n \to \infty} a_n = \infty \iff |a_n| > M \implies n > k_M
> $$

Esempio: considero la successione

$\frac{1}{4}, \frac{1}{2}, 1, 2, 4, 8, 16, 32, 64, \dots, 2^{n-3}, \dots$

[Se vuoi vedere perché il termine generico è $2^{n-3}$](qccba.html)

Se guardi la figura vedi che già prendendo come valore dell'intervallo sulle ordinate $y > 7$ già il termine $8$ della successione cade dentro la striscia colorata come tutti i termini successivi, che si avvicineranno sempre più a $+\infty$.

La successione tende a $+\infty$ perché se considero un numero grande, tipo $1000$, esiste un termine della successione oltre il quale tutti i termini cadono oltre la striscia $y > 1000$.

Tale termine sarà $512$; il termine successivo $1024$ è oltre $1000$ come tutti i termini seguenti.

Ti scrivo i primi 15 termini della successione, così puoi verificare da solo:

$\frac{1}{4}, \frac{1}{2}, 1, 2, 4, 8, 16, 32, 64, 128, 256, 1024, 2048, 4096, 8192, \dots$

In tal caso diremo che la nostra successione ha limite infinito e scriviamo

$$
\lim_{k \to \infty} a_k = \infty
$$

Nel nostro caso la successione considerata converge al valore $+\infty$. Poiché possiamo indicarla come $2^{k-3}$ potremo scrivere

$$
\lim_{k \to \infty} 2^{k-3} = +\infty
$$