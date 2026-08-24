# [dimostrazione]{.text-red}

Voglio dimostrare la formula

$$
\textcolor{red}{P(E_2|E_1) = \frac{P(E_1 \cap E_2)}{P(E_1)}}
$$

Abbiamo due eventi $E_1$ ed $E_2$; il primo evento $E_1$ può influire o meno sul secondo evento $E_2$.
Se consideriamo l'universo di probabilità, su $n$ possibilità totali avremo:

Su $E_1$ avremo $a$ casi possibili $P(E_1) = a/n$
su $E_2$ avremo $b$ casi possibili $P(E_2) = b/n$
Nell'intersezione $E_1 \cap E_2$ i casi possibili saranno $c$ $P(E_1 \cap E_2) = c/n$

Nell'insieme dei due eventi avremo $n$ casi possibili.
L'evento $E_2$ potrà avvenire solo se è accaduto l'evento $E_1$, quindi lo spazio di probabilità perché accada il secondo evento diventa limitato.

Di conseguenza la probabilità del secondo evento se è accaduto il primo diventa:

$$
P(E_2|E_1) = \frac{c}{a}
$$

Divido numeratore e denominatore per $n$: il valore della frazione non cambia ed io ottengo la probabilità dell'evento rispetto ad:

$$
P(E_2|E_1) = \frac{c}{a} = \frac{\frac{c}{n}}{\frac{a}{n}}
$$

So che $c/n = P(E_1 \cap E_2)$ e che $a/n = P(E_1)$; sostituisco ed ottengo:

$$
P(E_2|E_1) = \frac{c}{a} = \frac{\frac{c}{n}}{\frac{a}{n}} = \frac{P(E_1 \cap E_2)}{P(E_1)}
$$

Come volevamo dimostrare.

> **Una precisazione:** la prima figura si riferisce a quando ancora gli eventi non sono accaduti, mentre la seconda si riferisce al momento in cui il primo evento si è verificato ma non si è ancora verificato il secondo: nelle probabilità è **fondamentale** tenere sempre ben presente il tempo in cui ci troviamo per non commettere grossolani errori.