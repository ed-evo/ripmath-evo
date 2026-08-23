# [Sillogismo ipotetico]{.text-red}

---

Esempi di sillogismo ipotetico:

1)
**Se è primavera allora i ciliegi fioriscono;**
**se i ciliegi fioriscono allora arrivano le api**
quindi
**Se è primavera allora arrivano le api**

2)
**Se sono promosso all'esame di maturità mi iscrivo all'Università**
**Se mi iscrivo all'Università faccio il corso di Matematica**
allora
**Se sono promosso all'esame di maturità faccio il corso di Matematica**

---

Il "**sillogismo ipotetico**" si può rappresentare nel seguente modo:

[se $$P \to Q$$ è vera]{.text-red}
[e anche $$Q \to R$$ è vera]{.text-red}
allora ne segue
[$$P \to R$$ è vera]{.text-red}

> È una specie di proprietà transitiva

In simboli: 
$$
[(P \to Q) \land (Q \to R)] \to (P \to R)
$$

Possiamo dimostrarla mostrando che la funzione proposizionale che equivale ad essa è sempre vera.

Dobbiamo mostrare che
$$
\textcolor{red}{[(P \to Q) \land (Q \to R)] \to (P \to R)}
$$
è sempre vera.

| $$P$$ | $$Q$$ | $$R$$ | $$P \to Q$$ | $$Q \to R$$ | $$(P \to Q) \land (Q \to R)$$ | $$P \to R$$ | $$[(P \to Q) \land (Q \to R)] \to (P \to R)$$ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| $$\textcolor{red}{v}$$ | $$\textcolor{red}{v}$$ | $$\textcolor{red}{v}$$ | $$\textcolor{red}{v}$$ | $$\textcolor{red}{v}$$ | $$\textcolor{red}{v}$$ | $$\textcolor{red}{v}$$ | $$\textcolor{red}{v}$$ |
| $$\textcolor{red}{v}$$ | $$\textcolor{red}{v}$$ | $$\textcolor{red}{f}$$ | $$\textcolor{red}{v}$$ | $$\textcolor{red}{f}$$ | $$\textcolor{red}{f}$$ | $$\textcolor{red}{f}$$ | $$\textcolor{red}{v}$$ |
| $$\textcolor{red}{v}$$ | $$\textcolor{red}{f}$$ | $$\textcolor{red}{v}$$ | $$\textcolor{red}{f}$$ | $$\textcolor{red}{v}$$ | $$\textcolor{red}{f}$$ | $$\textcolor{red}{v}$$ | $$\textcolor{red}{v}$$ |
| $$\textcolor{red}{v}$$ | $$\textcolor{red}{f}$$ | $$\textcolor{red}{f}$$ | $$\textcolor{red}{f}$$ | $$\textcolor{red}{v}$$ | $$\textcolor{red}{f}$$ | $$\textcolor{red}{f}$$ | $$\textcolor{red}{v}$$ |
| $$\textcolor{red}{f}$$ | $$\textcolor{red}{v}$$ | $$\textcolor{red}{v}$$ | $$\textcolor{red}{v}$$ | $$\textcolor{red}{v}$$ | $$\textcolor{red}{v}$$ | $$\textcolor{red}{v}$$ | $$\textcolor{red}{v}$$ |
| $$\textcolor{red}{f}$$ | $$\textcolor{red}{v}$$ | $$\textcolor{red}{f}$$ | $$\textcolor{red}{v}$$ | $$\textcolor{red}{f}$$ | $$\textcolor{red}{f}$$ | $$\textcolor{red}{v}$$ | $$\textcolor{red}{v}$$ |
| $$\textcolor{red}{f}$$ | $$\textcolor{red}{f}$$ | $$\textcolor{red}{v}$$ | $$\textcolor{red}{v}$$ | $$\textcolor{red}{v}$$ | $$\textcolor{red}{v}$$ | $$\textcolor{red}{v}$$ | $$\textcolor{red}{v}$$ |
| $$\textcolor{red}{f}$$ | $$\textcolor{red}{f}$$ | $$\textcolor{red}{f}$$ | $$\textcolor{red}{v}$$ | $$\textcolor{red}{v}$$ | $$\textcolor{red}{v}$$ | $$\textcolor{red}{v}$$ | $$\textcolor{red}{v}$$ |

---

Per eseguire la tabella segui le tabelle delle operazioni elementari già fatte:

Le prime tre colonne sono i possibili valori di $$P$$, $$Q$$ ed $$R$$, per vedere come scriverli riguarda il secondo esempio sulle funzioni proposizionali.

La quarta colonna è l'implicazione materiale tra $$P$$ e $$Q$$, che è falsa solo se la prima è vera e la seconda è falsa.

La quinta colonna è l'implicazione materiale tra $$Q$$ e $$R$$, che è falsa solo se la prima è vera e la seconda è falsa.

La sesta colonna è la congiunzione logica tra $$P \to Q$$ e $$Q \to R$$ che è vera solo se entrambe sono vere.

La settima colonna è l'implicazione materiale tra $$P$$ e $$R$$, che è falsa solo se la prima è vera e la seconda è falsa.

L'ultima colonna è l'implicazione materiale tra $$[(P \to Q) \land (Q \to R)]$$ e $$(P \to R)$$, che è falsa solo se la prima è vera e la seconda è falsa.

---