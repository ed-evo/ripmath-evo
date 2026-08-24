# Disgiunzione inclusiva

Anche la disgiunzione inclusiva (**o, od anche**) è un'operazione **binaria** perché si applica su due proposizioni ed è definita come l'operazione che applicata a $p$ e $q$ restituisce i seguenti valori di verità. È utilizzato, oltre al termine **vel**, il simbolo $\vee$ (vel).

| $p$ | $q$ | $p \vee q$ |
| :---: | :---: | :---: |
| $\textcolor{red}{v}$ | $\textcolor{red}{v}$ | $\textcolor{red}{v}$ |
| $\textcolor{red}{v}$ | $\textcolor{red}{f}$ | $\textcolor{red}{v}$ |
| $\textcolor{red}{f}$ | $\textcolor{red}{v}$ | $\textcolor{red}{v}$ |
| $\textcolor{red}{f}$ | $\textcolor{red}{f}$ | $\textcolor{red}{f}$ |

> **Cioè:** la proposizione composta è vera se almeno una delle proposizioni componenti è vera. 
> Cioè per la verità della proposizione composta può essere vera la prima **o** può essere vera la seconda **o** possono essere vere entrambe.

***

In italiano è un po' difficile fare un esempio perché la "o" ha significato doppio: significa
- o l'uno o l'altro od entrambe
- o l'uno o l'altro ma non entrambe

Vediamo comunque un esempio:
"Quando vado al cinema compro Pop corn ed anche noccioline e **[mangio noccioline o popcorn]{.text-red}**"
In questo caso la frase considerata in rosso è da intendere:
mangio noccioline o mangio pop corn o mangio tutti e due.

- Se mangi noccioline ed anche mangi pop corn
  $v \vee v = v$
- Se mangi noccioline e non mangi pop corn
  $v \vee f = v$
- Se non mangi noccioline ma mangi pop corn
  $f \vee v = v$
- Se non mangi noccioline e non mangi pop corn
  $f \vee f = f$

***

Mentre in italiano la **o** si può interpretare in modo diverso, nella lingua latina vengono usate due congiunzioni diverse per indicare:
- o l'uno o l'altro o tutte e due (o inclusivo) **vel**
- o l'uno o l'altro e non tutte e due (o esclusivo) **aut**

Quindi in logica vengono usate preferibilmente i simboli in latino piuttosto che in italiano:
- $e \rightarrow et$
- $\text{o inclusivo} \rightarrow \text{vel}$
- $\text{o esclusivo} \rightarrow \text{aut}$

***

Anche qui, vista l'importanza del concetto, abbiamo l'equivalenza, all'interno delle proprie teorie, dei simboli:

- [$\textcolor{red}{;}$ (punto e virgola)]{.text-red} nel discorso
- [$\textcolor{red}{\cup}$ (unione)]{.text-red} in teoria degli insiemi
- [$\textcolor{red}{\vee}$ (vel)]{.text-red} in logica
- [$\textcolor{red}{\text{OR}}$ (or)]{.text-red} in informatica

***

Per finire mostriamo che vale la proprietà distributiva della congiunzione logica rispetto alla disgiunzione inclusiva:

$(p \text{ vel } q) \text{ and } r \equiv (p \text{ and } r) \text{ vel } (q \text{ and } r)$

O meglio in formule:

$$
(p \vee q) \wedge r \equiv (p \wedge r) \vee (q \wedge r)
$$

Per dimostrarlo basta calcolare le tavole di verità per l'espressione prima dell'uguale e per l'espressione dopo l'uguale: se le due tavole sono uguali allora le espressioni sono equivalenti.
Prova a farlo per esercizio poi controlla la soluzione.

> Il simbolo $\equiv$ significa "equiveridiche" cioè con gli stessi valori di verità.