# Modus ponens

Premetto due esempi di modus ponens:

1)
**Se è primavera allora i ciliegi fioriscono;**
ho che: **è primavera**
quindi **i ciliegi fioriscono**

2)
**Se piove allora apro l'ombrello**
ho che: **piove**
quindi **apro l'ombrello**

Il "**modus ponens**" si può rappresentare nel seguente modo:

[**se $$P \to Q$$ è vera**
**ed anche**
**$$P$$ è vera**
**allora ne segue**
**$$Q$$ è vera**]{.text-red}

In simboli: **$$[(P \to Q) \land P] \to Q$$**

> Di questa regola ne parla il filosofo Crisippo già nel terzo secolo avanti Cristo

Possiamo dimostrarla mostrando che la funzione proposizionale che equivale ad essa è sempre vera.
Dobbiamo mostrare che

[$$
[(P \to Q) \land P] \to Q
$$]{.text-red}

è sempre vera.

| $$P$$ | $$Q$$ | $$P \to Q$$ | $$(P \to Q) \land P$$ | $$[(P \to Q) \land P] \to Q$$ |
| :---: | :---: | :---: | :---: | :---: |
| $$v$$ | $$v$$ | $$v$$ | $$v$$ | $$v$$ |
| $$v$$ | $$f$$ | $$f$$ | $$f$$ | $$v$$ |
| $$f$$ | $$v$$ | $$v$$ | $$f$$ | $$v$$ |
| $$f$$ | $$f$$ | $$v$$ | $$f$$ | $$v$$ |

> **Nota:** Per eseguire la tabella segui le tabelle delle operazioni elementari già fatte:
>
> La terza colonna è l'implicazione materiale tra $$P$$ e $$Q$$, che è falsa solo se la prima è vera e la seconda è falsa.
>
> La quarta colonna è la congiunzione logica tra $$P \to Q$$ e $$P$$ che è vera solo se entrambe sono vere.
>
> La quinta colonna è l'implicazione materiale tra $$(P \to Q) \land P$$ e $$Q$$, che è falsa solo se la prima è vera e la seconda è falsa.