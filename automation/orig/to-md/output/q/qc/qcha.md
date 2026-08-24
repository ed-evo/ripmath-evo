# [Somma di successioni]{.text-red}

Siano date la successione $a$
$$
a_1, a_2, a_3, a_4, \dots, a_n, \dots
$$
e la successione $b$
$$
b_1, b_2, b_3, b_4, \dots, b_n, \dots
$$

Chiameremo **successione somma** delle successioni $a$ e $b$ la successione $a+b$ data da
$$
a_1+b_1, a_2+b_2, a_3+b_3, a_4+b_4, \dots, a_n+b_n, \dots
$$

Cioè ogni termine è la somma dei termini di posto corrispondente delle due successioni.

Enunciamo alcune proprietà:

- La somma di due successioni infinitesime è ancora una successione infinitesima.
- La somma di una successione divergente con una successione limitata è una successione divergente.
- Invece la somma di due successioni divergenti può essere una successione convergente, divergente od anche indeterminata.

> **Esempi:** Siccome il fatto non è intuitivo facciamo degli esempi:
>
> 1. Sommando una successione divergente
>    $2, 4, 8, 16, \dots, 2^n, \dots$
>    con una successione divergente (cambio di segno la precedente ed aggiungo $2$):
>    $2-2, 2-4, 2-8, 2-16, \dots, 2-2^n, \dots$
>    la scrivo meglio:
>    $0, -2, -6, -14, \dots, 2-2^n, \dots$
>    ottengo la successione costante:
>    $2, 2, 2, 2, \dots, 2, \dots$
>    che, naturalmente, converge a $2$.
>
> 2. Sommando la successione divergente
>    $2, 4, 8, 16, \dots, 2^n, \dots$
>    con la successione divergente
>    $1, 2, 3, 4, \dots, n, \dots$
>    ottengo la successione divergente:
>    $3, 6, 11, 20, \dots, n+2^n, \dots$
>
> 3. Sommando la successione divergente
>    $2, 4, 8, 16, \dots, 2^n, \dots$
>    con la successione divergente
>    $-1, -2, -3, -4, \dots, 2^n-n, \dots$
>    ottengo la successione indeterminata:
>    $1, 2, 5, 12, \dots, 1, \dots$
>    è indeterminata perché non so dire, per ora, se tende ad infinito o ad un valore finito.