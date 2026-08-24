# Successione convergente

Diremo che la successione

$$a_1, a_2, a_3, \dots, a_n, \dots$$

è **convergente** se ammette limite finito.

> Le espressioni "successione a limite finito" e "successione convergente" sono equivalenti: ma è più semplice dire "convergente" piuttosto che "tende ad un valore finito", quindi d'ora in avanti useremo tale termine.

cioè se preso un numero $$\epsilon$$ piccolo a piacere, esiste in sua corrispondenza un numero $$k_\epsilon \in \mathbb{N}$$ e dipendente da $$\epsilon$$ tale che quando i termini della successione distano dal limite $$a$$ per meno di $$\epsilon$$ allora ogni $$n$$ è superiore a $$k_\epsilon$$.

In simboli

$$
\lim_{n \to \infty} a_n = a \iff |a_n - a| < \epsilon \implies n > k_\epsilon
$$

> Se una successione non converge allora può divergere.
> Però se non converge e non diverge diremo che la successione è **indeterminata**.

Se la successione

$$a_1, a_2, a_3, \dots, a_n, \dots$$

converge ad $$a$$ allora la successione

$$a_1-a, a_2-a, a_3-a, \dots, a_n-a, \dots$$

è infinitesima.

Vale anche il viceversa: se la successione

$$a_1-a, a_2-a, a_3-a, \dots, a_n-a, \dots$$

è infinitesima allora la successione

$$a_1, a_2, a_3, \dots, a_n, \dots$$

converge ad $$a$$.

> **Esercizio:**
> verifichiamo che la successione
>
> $$2, \frac{3}{2}, \frac{4}{3}, \frac{5}{4}, \dots, \frac{n+1}{n}, \dots$$
>
> converge ad $$1$$.
>
> Utilizzo la definizione di limite: se considero un numero piccolissimo $$\epsilon$$, devo mostrare che esiste un legame fra $$\epsilon$$ e l'indice $$n$$ tale che più diminuisce $$\epsilon$$ più aumenta $$n$$.
>
> Dimostriamo che da un certo momento in poi, se $$n$$ è grande, vale:
>
> $$
> |\frac{n+1}{n} - 1| < \epsilon
> $$
>
> eseguo la somma dentro il modulo: m.c.m. = $$n$$
>
> $$
> |\frac{n+1 - n}{n}| < \epsilon
> $$
>
> $$
> |\frac{1}{n}| < \epsilon
> $$
>
> essendo $$n$$ un numero naturale, considerato all'interno dei numeri reali è certamente positivo e quindi posso togliere il modulo ed ottengo
>
> $$
> \frac{1}{n} < \epsilon
> $$
>
> utilizzo la proprietà: **Se in una disuguaglianza considero gli inversi allora la disuguaglianza cambia di verso**, ed ottengo
>
> $$
> n > \frac{1}{\epsilon}
> $$
>
> questa espressione è equivalente alla prima.
> Essendo $$\epsilon$$ molto piccolo segue che $$1/\epsilon$$ è molto grande ed, essendo $$n > 1/\epsilon$$ più diminuisce $$\epsilon$$ più aumenta il valore di $$n$$.
> come volevamo