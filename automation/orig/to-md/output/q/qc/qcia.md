# [Somma di limiti di successioni convergenti]{.text-red}

Se le successioni
$a_1, a_2, a_3, a_4, \dots, a_n, \dots$
e
$b_1, b_2, b_3, b_4, \dots, b_n, \dots$
sono convergenti allora anche la loro somma converge e il limite della loro somma è uguale alla somma dei limiti

$$
\lim_{n \to \infty} (a_n + b_n) = \lim_{n \to \infty} a_n + \lim_{n \to \infty} b_n
$$

> Per esercizio proviamo a dimostrarlo.
> Supponiamo di avere
> $\lim_{n \to \infty} a_n = a$ e $\lim_{n \to \infty} b_n = b$
> allora le successioni
> $a_1 - a, a_2 - a, a_3 - a, \dots, a_n - a, \dots$ e $b_1 - b, b_2 - b, b_3 - b, \dots, b_n - b, \dots$
> sono infinitesime per la proprietà già vista.
> Ma abbiamo anche visto che la somma di due successioni infinitesime è infinitesima, quindi è infinitesima la successione
> $a_1 - a + b_1 - b, a_2 - a + b_2 - b, a_3 - a + b_3 - b, \dots, a_n - a + b_n - b, \dots$
> per la proprietà associativa posso scrivere
> $(a_1 + b_1) - (a + b), (a_2 + b_2) - (a + b), (a_3 + b_3) - (a + b), \dots, (a_n + b_n) - (a + b), \dots$
> essendo questa infinitesima ne deriva che la successione
> $(a_1 + b_1), (a_2 + b_2), (a_3 + b_3), \dots, (a_n + b_n), \dots$
> tende a $a + b$, quindi
> $$
> \lim_{n \to \infty} (a_n + b_n) = a + b = \lim_{n \to \infty} a_n + \lim_{n \to \infty} b_n
> $$
> come volevamo.

> **Nota:** per essere proprio precisi dovremmo lavorare con i moduli per non aver problemi con i segni, ma, almeno per ora, accontentiamoci...