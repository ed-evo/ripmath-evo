# [Modus tollens]{.text-red}

Premetto due esempi di modus tollens:

1) **Se è primavera allora i ciliegi fioriscono;**
se ho che: **i ciliegi non fioriscono**
allora **non è primavera**

2) **Se piove allora apro l'ombrello**
se ho che: **non apro l'ombrello**
allora **non piove**

Il "**modus tollens**" si può rappresentare nel seguente modo:

[se $P \to Q$ è vera e $Q$ è falsa allora ne segue $P$ è falsa]{.text-red}

In simboli: $[ (P \to Q) \land \neg Q ] \to \neg P$

Possiamo dimostrarla mostrando che la funzione proposizionale che equivale ad essa è sempre vera.

Dobbiamo mostrare che
$$
[ (P \to Q) \land \neg Q ] \to \neg P
$$
è sempre vera.

| $P$ | $Q$ | $P \to Q$ | $\neg Q$ | $(P \to Q) \land \neg Q$ | $\neg P$ | $[(P \to Q) \land \neg Q] \to \neg P$ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| v | v | v | f | f | f | v |
| v | f | f | v | f | f | v |
| f | v | v | f | f | v | v |
| f | f | v | v | v | v | v |

> **Nota:** Per eseguire la tabella segui le tabelle delle operazioni elementari già fatte:
> - la terza colonna è l'implicazione materiale tra $P$ e $Q$, che è falsa solo se la prima è vera e la seconda è falsa
> - la quarta colonna è la negazione di $Q$
> - la quinta colonna è la congiunzione logica tra $P \to Q$ e non $Q$ che è vera solo se entrambe sono vere
> - la sesta colonna è la negazione di $P$
> - la settima colonna è l'implicazione materiale tra $(P \to Q) \land \neg Q$ e non $P$, che è falsa solo se la prima è vera e la seconda è falsa