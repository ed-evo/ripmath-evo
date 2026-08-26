# Prodotti fondamentali

Consideriamo un insieme di variabili $x$, $y$, $z$, $t$, ....

Chiameremo **espressione booleana** in tali variabili una qualsiasi espressione costruita da tali variabili utilizzando le operazioni di somma, prodotto e passaggio al complementare: esempio
espressione = $x + (y' + x \cdot x' \cdot z)$

Chiameremo **prodotto fondamentale** un termine oppure un prodotto di più termini formato da variabili e/o dai loro complementari ed in cui non compaia più di una volta la stessa variabile.

> **Esempi di prodotti fondamentali:** $x \cdot y$, $x \cdot y' \cdot z'$, $x' \cdot y' \cdot t$
> **Non sono prodotti fondamentali:** $x \cdot x'$, $x \cdot y' \cdot z' \cdot x$, $x' \cdot y' \cdot t \cdot t$

Notiamo che ogni espressione che non sia prodotto fondamentale si può ridurre ad un prodotto fondamentale oppure a $0$.

> **Esempio 1**
> $x \cdot x' = 0$ (seconda legge del complemento)

> **Esempio 2**
> $x \cdot y' \cdot z' \cdot x = y' \cdot x \cdot z' \cdot x$ (seconda legge commutativa)
> $y' \cdot x \cdot z' \cdot x = y' \cdot z' \cdot x \cdot x$ (seconda legge commutativa)
> $y' \cdot z' \cdot x \cdot x = y' \cdot z' \cdot 0$ (seconda legge dei confini)
> $y' \cdot z' \cdot 0 = y' \cdot 0$ (seconda legge dei confini)
> $y' \cdot 0 = 0$ (seconda legge dei confini)

> **Esempio 3**
> $x' \cdot y' \cdot t \cdot t = x' \cdot y' \cdot t$ (idempotenza)

In pratica un prodotto fondamentale sarà il pezzo più piccolo della nostra espressione booleana non riducibile ulteriormente con le regole del prodotto.

***

Molto intuitivamente si può dire che nelle algebre di Boole stiamo costruendo i monomi delle espressioni come nell'algebra elementare.

***

Per semplicità, d'ora in avanti, dove non vi siano dubbi tralasciamo il segno del prodotto cioè invece di scrivere $x \cdot y'$ scriveremo semplicemente $xy'$ sottointendendo il $\cdot$.