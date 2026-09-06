# TEOREMA DEL RESTO DI RUFFINI

Quando è possibile eseguire la divisione con il metodo di Ruffini è anche possibile riuscire a trovare il resto senza fare la divisione. Vediamo prima perché si può fare così poi, come conseguenza, vedremo il come.

Consideriamo ad esempio il numero $25$, esso diviso per $6$ dà per quoziente $4$ e resto $1$. Come scriverlo?

$$
25 = 6 \times 4 + 1
$$

Cioè il numero è uguale al divisore per il quoziente più il resto. Essendo i polinomi un ampliamento dei numeri anche per essi potrò scrivere:

$$
\text{DIVIDENDO} = \text{DIVISORE} \times \text{QUOZIENTE} + \text{RESTO}
$$

Allora poniamo:
- $\text{POLINOMIO} = P(x)$
- $\text{DIVISORE (di Ruffini)} = (x-a)$
- $\text{QUOZIENTE} = Q(x)$
- $\text{RESTO} = R$

Avremo

$$
P(x) = (x-a) \cdot Q(x) + R
$$

Ora il nostro problema è trovare il resto cioè lasciare la $R$ da sola dopo l'uguale e questo si può fare se si elimina il termine $(x-a) \cdot Q(x)$.

Per eliminare questo termine basta mettere al posto di $x$ il valore $a$, così $(a-a)$ vale zero e $Q(x) \cdot (a-a) = Q(x) \cdot (0) = 0$.

Quindi resta:

$$
P(a) = (a-a) \cdot Q(a) + R
$$

cioè

$$
P(a) = R
$$

> **Regola:** <span class="text-fuchsia-500">per ottenere il resto basta sostituire nel polinomio al posto della lettera il termine noto del divisore cambiato di segno</span>

Ad esempio calcoliamo il resto di una divisione fatta nelle pagine precedenti:
$(2x^2+5x+6):(x+2)$

Basterà sostituire $-2$ al posto della $x$ nel polinomio $2x^2+5x+6$:

$$
2 \cdot (-2)^2 + 5 \cdot (-2) + 6 = 8 - 10 + 6 = 4
$$

Quindi $R=4$ è il valore del resto.

[Pagina iniziale](../../../index.html) | [Indice di algebra](../../a.html) | [Pagina successiva](ad6.html) | [Pagina precedente](ad5b.html)