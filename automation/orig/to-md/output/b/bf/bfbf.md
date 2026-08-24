# [Aritmetica come esempio di sistema formale]{.text-red}

Costruiamo un sistema formale per l'aritmetica, cioè un sistema di oggetti e assiomi da cui si possa ricavare tutta l'aritmetica: aggiungiamo ai postulati di Peano alcuni assiomi che ci permettano di fare le operazioni.
Chiameremo questa teoria formale **Aritmetica** e per indicarla utilizzeremo il simbolo $A$.

Utilizziamo i simboli del linguaggio dei predicati (ripassa i simboli nella logica), cioè con l'aggiunta dei simboli $1$, $+$ (addizione), $\cdot$ (prodotto), $'$ (successivo).
Vediamo gli assiomi di $A$:

- [**$A_1$**]{.text-red}
  $$
  \forall x \forall y \forall z (x = y) \Rightarrow ((x = z) \Rightarrow (y = z))
  $$
  Cioè se due oggetti (chiamiamoli numeri) sono uguali fra loro ed il primo è uguale ad un terzo allora anche il secondo è uguale al terzo.

- [**$A_2$**]{.text-red}
  $$
  \forall x \forall y (x = y) \Rightarrow (x' = y')
  $$
  Se due numeri sono uguali fra loro allora anche i successivi sono uguali fra loro.

- [**$A_3$**]{.text-red}
  $$
  \forall x \forall y (x' = y') \Rightarrow (x = y)
  $$
  Se due successivi sono uguali fra loro allora anche i numeri sono uguali.

- [**$A_4$**]{.text-red}
  $$
  \forall x \neg (1 = x')
  $$
  $1$ non è il successivo di nessun numero.

- [**$A_5$**]{.text-red}
  $$
  \forall x (x + 1 = x')
  $$
  Il successivo di un numero si ottiene aggiungendo $1$ al numero.

- [**$A_6$**]{.text-red}
  $$
  \forall x \forall y (x + y' = (x + y)')
  $$
  La somma fra un primo numero ed il successivo di un secondo è uguale al successivo della somma fra il primo ed il secondo.

- [**$A_7$**]{.text-red}
  $$
  \forall x (x \cdot 1 = x)
  $$
  Moltiplicando un numero per $1$ otteniamo sempre lo stesso numero ($1$ è l'elemento neutro nella moltiplicazione).

- [**$A_8$**]{.text-red}
  $$
  \forall x \forall y (x \cdot y' = (x \cdot y) + x)
  $$
  Il prodotto fra un numero ed il successivo di un secondo numero è uguale al prodotto fra i due numeri sommato al primo numero.

- [**$A_9$**]{.text-red}
  $$
  \forall A(x) ( A(1) \Rightarrow (\forall x (A(x) \Rightarrow A(x')) \Rightarrow \forall x A(x)) )
  $$
  È il principio di induzione: data la proprietà $A(x)$, se essa è vera per $1$ e se, essendo vera per $x$, è vera anche per il suo successivo allora essa è vera per tutti i numeri.

Considerando i normali assiomi della logica, i postulati esposti sopra e le regole di deduzione possiamo dimostrare tutti i possibili problemi dell'Aritmetica.

> **Nota:** Da notare che utilizzando i numeri di Gödel posso trovare un sottoinsieme di $\mathbb{N}$ che sia isomorfo ad $A$, quindi l'insieme $\mathbb{N}$ contiene tutta l'aritmetica come suo sottoinsieme.