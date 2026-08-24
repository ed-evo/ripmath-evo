# Disgiunzione esclusiva

Anche la disgiunzione esclusiva (**o l'uno, oppure l'altro ma non tutti e due**) è un'operazione **binaria** perché si applica su due proposizioni ed è definita come l'operazione che applicata a $p$ e $q$ restituisce i seguenti valori di verità (si usa il simbolo $aut$):

| $p$ | $q$ | $p \text{ aut } q$ |
| :---: | :---: | :---: |
| $\textcolor{red}{v}$ | $\textcolor{red}{v}$ | $\textcolor{red}{f}$ |
| $\textcolor{red}{v}$ | $\textcolor{red}{f}$ | $\textcolor{red}{v}$ |
| $\textcolor{red}{f}$ | $\textcolor{red}{v}$ | $\textcolor{red}{v}$ |
| $\textcolor{red}{f}$ | $\textcolor{red}{f}$ | $\textcolor{red}{f}$ |

Cioè la proposizione composta è vera solamente se una sola delle proposizioni componenti è vera.
Cioè per la verità della proposizione composta può essere vera la prima **o** può essere vera la seconda ma non possono essere vere entrambe.

> Si chiama disgiunzione **esclusiva** perché **esclude** dal valore di verità il caso in cui entrambe le proposizioni componenti siano vere.

Vediamo un esempio:
"Avendo due ore a disposizione
[**vado al cinema o (oppure) a mangiare una pizza cogli amici**]{.text-red}"
In questo caso la frase considerata in rosso è da intendere: o vado al cinema o vado a mangiare una pizza ma non ho tempo per fare tutte e due le cose, quindi l'una esclude l'altra.

- Se vado al cinema ed anche vado a mangiare la pizza
  $v \text{ aut } v = f$
  La frase non può essere vera non avendo il tempo di fare entrambe le cose.
- Se vado al cinema e non vado a mangiare la pizza
  $v \text{ aut } f = v$
- Se non vado al cinema ma vado a mangiare la pizza
  $f \text{ aut } v = v$
- Se non vado al cinema e non vado a mangiare la pizza
  $f \text{ aut } f = f$

> In informatica, per indicarlo, si usa **eor**.
> In teoria degli insiemi il concetto corrispondente è la differenza simmetrica.

Per finire mostriamo che possiamo ottenere la disgiunzione esclusiva utilizzando gli operatori logici fondamentali:

$p \text{ aut } q \equiv \text{non } [(p \text{ and } q) \text{ vel } ((\text{non } p) \text{ and } (\text{non } q))]$

o meglio in formule:

$$
p \text{ aut } q \equiv \overline{[(p \wedge q) \vee (\bar{p} \wedge \bar{q})]}
$$

Per dimostrarlo basta calcolare le tavole di verità per l'espressione prima dell'uguale e per l'espressione dopo l'uguale: se le due tavole sono uguali allora le espressioni sono equivalenti.
Prova a farlo per esercizio poi controlla la soluzione.