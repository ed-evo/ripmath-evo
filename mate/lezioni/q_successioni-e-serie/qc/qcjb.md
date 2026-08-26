# Teorema della permanenza del segno del limite di una successione

Vale il teorema:

> **Se una successione numerica reale converge ad un numero positivo, allora da un certo termine $a_k$ in poi tutti i termini della successione sono positivi**

Logicamente vale anche:

> **Se una successione numerica reale converge ad un numero negativo, allora da un certo termine $a_k$ in poi tutti i termini della successione sono negativi**

***

> **Dimostrazione:**
> 
> Come esercizio dimostriamo il primo.
> 
> Supponiamo che la successione 
> $a_1, a_2, a_3, \dots, a_n, \dots$
> converga ad $a > 0$, cioè:
> 
> $$
> \lim_{x \to \infty} a_n = a \text{ con } a > 0
> $$
> 
> Allora, essendo $a$ positivo, esiste, sulla retta reale, un intorno di $a$ in cui tutti i punti hanno valore positivo.
> 
> Data la definizione di limite:
> 
> $$
> \lim_{x \to \infty} a_n = a \iff |a_n - a| < \epsilon \implies n > k_\epsilon
> $$
> 
> Considerando come $\epsilon$ la distanza da $a$ ad uno di tali punti avremo che $a_n$ cade in tale intorno e quindi $a_n$ è positivo come tutti i suoi termini successivi.
> 
> Come volevamo.