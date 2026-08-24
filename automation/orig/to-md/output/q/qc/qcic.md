# [Prodotto di limiti di successioni convergenti]{.text-red}

Se le successioni

$a_1, a_2, a_3, a_4, \dots, a_n, \dots$

e

$b_1, b_2, b_3, b_4, \dots, b_n, \dots$

sono convergenti, allora anche il loro prodotto converge e il limite del loro prodotto è uguale al prodotto dei limiti

$$
\lim_{n \to \infty} (a_n \cdot b_n) = \lim_{n \to \infty} a_n \cdot \lim_{n \to \infty} b_n
$$

***

> Per esercizio proviamo a dimostrarlo, però qui ci vogliono i moduli e precisamente il teorema sui moduli che dice:
> **il modulo di una somma è minore o uguale alla somma dei moduli degli addendi**
> $$
> |x+y| \le |x| + |y|
> $$
>
> Supponiamo di avere
> $\lim_{n \to \infty} a_n = a$ e $\lim_{n \to \infty} b_n = b$
> Devo dimostrare che $ab$ è il limite di $a_n \cdot b_n$, considero
> $|a_n \cdot b_n - ab| =$
> devo mostrare che è infinitesimo; tolgo e aggiungo il termine $ab_n$
> $$
> |a_n \cdot b_n - ab| = |a_n \cdot b_n - ab_n + ab_n - ab|
> $$
> per il teorema sui moduli posso scrivere
> $$
> |a_n \cdot b_n - ab_n + ab_n - ab| \le |a_n \cdot b_n - ab_n| + |ab_n - ab| =
> $$
> posso raccogliere
> $$
> = |b_n \cdot (a_n - a)| + |a \cdot (b_n - b)| =
> $$
> essendo $a$ il limite di $a_n$, allora $|a_n - a|$ è infinitesima ed essendo $|b_n \cdot (a_n - a)|$ prodotto di una successione limitata $(b_n)$ con una successione infinitesima allora è infinitesimo.
> Stesso ragionamento per l'addendo $a \cdot (b_n - b)$:
> essendo $b$ il limite di $b_n$, allora $|b_n - b|$ è infinitesima ed essendo $a$ un limite finito allora il suo prodotto con una successione infinitesima è infinitesimo.
> Quindi il termine $|a_n \cdot b_n - ab|$, essendo minore o uguale di due infinitesimi, è anche lui infinitesimo e ne consegue che $ab$ è il limite di $a_n \cdot b_n$, come volevamo.