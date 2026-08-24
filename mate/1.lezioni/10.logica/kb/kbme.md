# Sillogismo disgiuntivo

Esempi di sillogismo disgiuntivo:

1) **O sono sveglio oppure dormo; Non dormo**, quindi **sono sveglio**

2) **O sono al lavoro oppure sono in vacanza; Non sono in vacanza**, allora **sono al lavoro**

Il "**sillogismo disgiuntivo**" si può rappresentare nel seguente modo:

[se $$P \lor Q$$ è vera,
e se anche $$\neg Q$$ è vera,
allora ne segue che $$P$$ è vera]{.text-red}

In simboli: $$[(P \lor Q) \land \neg Q] \to P$$

Possiamo dimostrarla mostrando che la funzione proposizionale che equivale ad essa è sempre vera.
Dobbiamo mostrare che

$$
\textcolor{red}{[(P \lor Q) \land \neg Q] \to P}
$$

è sempre vera.

| $$P$$ | $$Q$$ | $$P \lor Q$$ | $$\neg Q$$ | $$(P \lor Q) \land \neg Q$$ | $$[(P \lor Q) \land \neg Q] \to P$$ |
| :---: | :---: | :---: | :---: | :---: | :---: |
| v | v | v | f | f | v |
| v | f | v | v | v | v |
| f | v | v | f | f | v |
| f | f | f | v | f | v |

> **Nota:** Per eseguire la tabella segui le tabelle delle operazioni elementari già fatte:
> - La terza colonna è la [disgiunzione inclusiva](kbc.html) tra $$P$$ e $$Q$$, che è falsa solo se $$P$$ e $$Q$$ sono entrambe false.
> - La quarta colonna è la [negazione](kba.html) di $$Q$$.
> - La quinta colonna è la [congiunzione logica](kbb.html) tra $$P \lor Q$$ e **non** $$Q$$, che è vera solo se entrambe sono vere.
> - La sesta colonna è l'[implicazione materiale](kbf.html) tra $$[P \lor Q] \land \neg Q$$ e $$P$$, che è falsa solo se la prima è vera e la seconda è falsa.