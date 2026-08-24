## [Relazione d'ordine stretto]{.text-red}

Diciamo che la relazione $R$ su $A \times A$ è **d'ordine stretto** se si ha:

$$
\textcolor{red}{a R b \iff a \neq b}
$$

> Non ti spaventare, vuol dire che nella relazione, invece che minore o uguale, devi solo considerare il minore; di conseguenza la relazione d'ordine stretto non sarà riflessiva (nessuno è minore di se stesso).

Ad ogni relazione d'ordine è possibile associare una relazione d'ordine stretto: basterà trasformare il "maggiore o uguale" semplicemente in "maggiore" (o il "minore o uguale" in "minore").

### Esempi

Considero l'insieme
$\textcolor{red}{A = \{ 1, 2, 4, 8, 16, 20 \}}$
con la relazione: [«è multiplo di»]{.text-red}

La relazione è:
- antisimmetrica: se $A$ è multiplo di $B$ e $B$ è multiplo di $A$ segue che $A = B$
- transitiva: se $20$ è multiplo di $4$ e $4$ è multiplo di $2$ allora $20$ è multiplo di $2$

Inoltre, se $A$ è diverso da $B$, allora $A$ multiplo di $B$ esclude $B$ multiplo di $A$.
Di conseguenza la relazione è di ordine stretto.

> **Nota:** però ci sono alcuni elementi non confrontabili: ad esempio $20$ non è multiplo di $16$.

Considero i numeri naturali e considero la relazione [«è maggiore di»]{.text-red}.
La relazione è d'ordine stretto; infatti, presi due numeri diversi, o il primo è maggiore del secondo oppure il secondo è maggiore del primo:
$\textcolor{red}{1, 2, 3, 4, 5, 6, \dots}$

Considero tutti gli esseri umani viventi e trapassati e considero la relazione [«è antenato di»]{.text-red}.
La relazione è d'ordine stretto: infatti è transitiva e, se $A$ e $B$ appartengono alla relazione, si ha che $A$ è antenato di $B$ oppure $B$ è antenato di $A$.
L'ordine che tale relazione dà è l'albero genealogico.
Anche qui ci sono elementi non confrontabili: ad esempio due fratelli non appartengono alla relazione.

Per contrapposizione, una relazione d'ordine che non sia d'ordine stretto si dice di ordine largo.