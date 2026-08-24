## [esercizio]{.text-red}

Mostrare la presenza della struttura ad anello per l'insieme $P(A)$, insieme potenza dell'insieme $A$, con le operazioni di differenza simmetrica $\Delta$ ed intersezione $\cap$.

---

Per ripassare: [l'insieme P(A)](../../j/jb/jbe.html), [la differenza simmetrica](../../j/jb/jbfg.html), [l'intersezione](../../j/jb/jbfb.html).

---

> **Dimostrazione:**
>
> Dovremo mostrare:
> - la presenza di un gruppo commutativo con la prima operazione;
> - la presenza di un semigruppo con la seconda operazione;
> - il fatto che la seconda operazione è distributiva rispetto alla prima.

Cominciamo dal primo punto:

- Mostriamo che $(P(A), \Delta)$ è un gruppo; devono valere le proprietà:
    - $\Delta$ è interna: avremo sempre che la differenza simmetrica di due elementi di $P(A)$ è sempre ancora un elemento di $P(A)$.
      > Infatti $P(A)$ è costituito da tutti i sottoinsiemi di $A$, cioè gli insiemi che posso costruire con gli elementi di $A$, insieme vuoto compreso, quindi se da due sottoinsiemi tolgo alcuni elementi dell'insieme $A$ avremo ancora un sottoinsieme di $A$.

    - $\Delta$ è associativa, infatti chiamati $A_1$, $A_2$ e $A_3$ tre elementi di $P(A)$ abbiamo:
      $$
      (A_1 \Delta A_2) \Delta A_3 = A_1 \Delta (A_2 \Delta A_3)
      $$
      Infatti siccome la differenza simmetrica toglie elementi da entrambi gli insiemi che coinvolge, sia che li tolga prima o dopo, quando coinvolge gli stessi insiemi dà sempre lo stesso risultato.
      > Mostriamolo anche su un esempio pratico:
      >
      > Considero l'insieme $A = \{\emptyset, 1, 2, 3, 4\}$.
      > Allora l'insieme potenza è l'insieme composto dagli elementi:
      > $\{\emptyset\}, \{1\}, \{2\}, \{3\}, \{4\}, \{1, 2\}, \{1, 3\}, \{1, 4\}, \{2, 3\}, \{2, 4\}, \{3, 4\}, \{1, 2, 3\}, \{1, 2, 4\}, \{1, 3, 4\}, \{2, 3, 4\}, \{1, 2, 3, 4\}$.
      >
      > Consideriamo:
      > $A_1 = \{1, 2, 4\}, A_2 = \{1, 3, 4\}, A_3 = \{1, 4\}$
      > $(A_1 \Delta A_2) \Delta A_3 = A_1 \Delta (A_2 \Delta A_3)$
      >
      > Per mostrarlo facciamo i calcoli prima e dopo l'uguale e mostriamo che i risultati sono uguali:
      > $(\{1, 2, 4\} \Delta \{1, 3, 4\}) \Delta \{1, 4\} = \{3\} \Delta \{1, 4\} = \{1, 3, 4\}$
      > $\{1, 2, 4\} \Delta (\{1, 3, 4\} \Delta \{1, 4\}) = \{1, 2, 4\} \Delta \{3\} = \{1, 3, 4\}$

    - Possiede l'elemento neutro: infatti esiste l'elemento $\emptyset$, cioè il sottoinsieme vuoto, e la differenza simmetrica fra l'insieme vuoto e qualsiasi sottoinsieme è sempre lo stesso sottoinsieme.
      > $$
      > A_n \Delta \emptyset = \emptyset \Delta A_n = A_n
      > $$

    - Ogni elemento $A_n$ di $P(A)$ possiede in $\Delta$ l'elemento simmetrico: basta considerare l'insieme complementare di $A_n$ rispetto ad $A$ perché la differenza simmetrica dia come risultato l'insieme vuoto.
      > Se ad esempio considero l'insieme $\{1, 2\}$, il suo complementare rispetto ad $A$ sarà $\{3, 4\}$ e facendo la differenza complementare avremo che spariscono tutti gli elementi e resta il vuoto:
      > $$
      > \{1, 2\} \Delta \{3, 4\} = \{3, 4\} \Delta \{1, 2\} = \emptyset
      > $$

Quindi $(P(A), \Delta)$ è un gruppo; la commutatività deriva dal fatto che l'operazione restituisce gli elementi non comuni fra due insiemi, quindi è indifferente l'ordine in cui li considero.

Mostriamo che $(P(A), \cap)$ è un semigruppo:

- Basta mostrare che $\cap$ è associativa, cioè chiamati $A_1$, $A_2$ e $A_3$ tre elementi di $P(A)$ abbiamo sempre:
  $$
  (A_1 \cap A_2) \cap A_3 = A_1 \cap (A_2 \cap A_3)
  $$
  Infatti, poiché l'operazione intersezione fra insiemi restituisce gli elementi che gli insiemi hanno in comune, in qualunque ordine considereremo i 3 insiemi avremo sempre lo stesso risultato (cioè gli elementi comuni ai 3 insiemi).

Mostriamo infine che la seconda operazione è distributiva rispetto alla prima, cioè dati $A_1$, $A_2$ e $A_3$ appartenenti a $P(A)$ avremo sempre:
$$
A_1 \cap (A_2 \Delta A_3) = (A_1 \cap A_2) \Delta (A_1 \cap A_3)
$$
$$
(A_2 \Delta A_3) \cap A_1 = (A_2 \cap A_1) \Delta (A_3 \cap A_1)
$$

> Questo è un po' difficile da dimostrare: limitiamoci a mostrare che è vero su un esempio.
>
> Consideriamo i tre insiemi:
> $A_1 = \{1, 2, 4\}, A_2 = \{1, 3, 4\}, A_3 = \{2, 4\}$
>
> Mostriamo che, nella prima uguaglianza, sono uguali i risultati sviluppando prima dell'uguale e dopo l'uguale.
>
> Prima dell'uguale:
> $\{1, 2, 4\} \cap (\{1, 3, 4\} \Delta \{2, 4\}) = \{1, 2, 4\} \cap \{1, 2, 3\} = \{1, 2\}$
>
> Dopo l'uguale:
> $\{1, 2, 4\} \cap \{1, 3, 4\} \Delta \{1, 2, 4\} \cap \{2, 4\} = \{1, 4\} \Delta \{2, 4\} = \{1, 2\}$

Quindi la struttura $(P(A), \Delta, \cap)$ è un anello.

Siccome l'operazione $\cap$ in $P(A)$ è commutativa avremo che l'anello è commutativo.

Poiché l'intersezione in $A$ ha come elemento neutro l'insieme $A$ stesso e tale elemento è definito in modo univoco, allora posso parlare di un solo elemento neutro e l'anello è unitario.