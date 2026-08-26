# Successioni monotone

Premettiamo i concetti:

Una successione è **crescente in senso lato** se abbiamo:
$a_1 \le a_2 \le a_3 \le \dots \le a_n \le \dots$

Similmente, una successione è **decrescente in senso lato** se abbiamo:
$a_1 \ge a_2 \ge a_3 \ge \dots \ge a_n \ge \dots$

Una successione è **crescente in senso stretto** se abbiamo:
$a_1 < a_2 < a_3 < \dots < a_n < \dots$

Similmente, una successione è **decrescente in senso stretto** se abbiamo:
$a_1 > a_2 > a_3 > \dots > a_n > \dots$

Si definisce **monotona crescente** una successione sempre crescente (in senso lato o in senso stretto).
Si definisce **monotona decrescente** una successione sempre decrescente (in senso lato o in senso stretto).

---

Il seguente teorema ha un'importanza fondamentale.

Consideriamo l'insieme dei valori dei termini di una successione:

> **Una successione numerica reale monotona crescente tende verso l'estremo superiore dell'insieme numerico dato dal valore dei suoi termini**
>
> Questo comporta che se la successione è limitata essa converge, se è illimitata essa diverge positivamente.

Naturalmente vale anche:

> **Una successione numerica reale monotona decrescente tende verso l'estremo inferiore dell'insieme numerico dato dal valore dei suoi termini**
>
> Questo comporta che se la successione è limitata essa converge, se è illimitata essa diverge negativamente.

---

> **Esercizio:** Dimostriamo il primo teorema.
>
> Abbiamo la successione monotona crescente:
> $a_1, a_2, a_3, \dots, a_n, \dots$
> e vale:
> $$
> \lim_{n \to \infty} a_n = a
> $$
> Se la successione è limitata ed $a$ è il suo limite, allora dato $\epsilon$ si può trovare un numero naturale $k_\epsilon$ tale che $a_{k_\epsilon} > a - \epsilon$.
> Ma se prendiamo un valore $n > k_\epsilon$ avremo, essendo la successione monotona crescente:
> $$
> a - \epsilon < a_{k_\epsilon} < a_n \le a
> $$
> sarebbe a dire che gli $a_n$ cadono nell'intorno $(a - \epsilon; a]$.
> Diminuendo il valore di $\epsilon$ ci avvicineremo quanto vogliamo all'estremo superiore che quindi coincide con il limite $a$.

---