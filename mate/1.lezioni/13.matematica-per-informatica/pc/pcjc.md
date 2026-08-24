# Forma normale disgiuntiva

---

Se nella pagina precedente abbiamo costruito i monomi, qui possiamo dire molto intuitivamente che proviamo a costruire i polinomi; intendiamoci: saranno molto diversi dai polinomi che conosciamo dall'algebra elementare.

---

Per semplicità, d'ora in avanti, dove non vi siano dubbi, tralasciamo il segno del prodotto, cioè invece di scrivere $x \cdot y'$ scriveremo semplicemente $xy'$ sottointendendo il $\cdot$.

Consideriamo un'espressione composta dalla somma di uno o più prodotti fondamentali, tali che nessuno di essi sia contenuto in un altro: chiameremo tale espressione **forma normale disgiuntiva** o anche **forma di somma-prodotti**.

Esempi di espressione in forma normale disgiuntiva:
- Espressione = $xy'z$
- Espressione = $x'y + xyz'$
- Espressione = $xy'z + x'y + xyz'$

Vediamo anche un esempio di espressione non in forma normale disgiuntiva:
Espressione = $xy'z + x'y + xy'$
qui l'ultimo termine $xy'$ è contenuto nel primo $xy'z$.

Però se faccio:
$$
xy'z + x'y + xy' = xy'z + xy' + x'y
$$ (legge commutativa)
$$
xy'z + xy' + x'y = (xy'z + xy') + x'y
$$ (legge associativa)
$$
(xy'z + xy') + x'y = (xy' \cdot (1+z)) + x'y
$$ (legge distributiva)
$$
(xy' \cdot (1+z)) + x'y = xy' + x'y
$$ (legge dei confini)

il risultato $xy' + x'y$ è ora in forma normale disgiuntiva.

Cioè possiamo dire:
Un'espressione booleana diversa da $0$ può essere sempre messa in forma normale disgiuntiva.

Per poterlo fare dobbiamo seguire queste regole:

I. Utilizzando le leggi di De Morgan e del doppio complemento possiamo spostare l'operazione di complemento verso l'interno delle parentesi fino ad applicarla alle lettere: allora l'espressione sarà formata solamente da somme e prodotti di termini.
II. Utilizzando la proprietà distributiva del prodotto rispetto alla somma trasformiamo l'espressione in una somma di prodotti: cioè possiamo eseguire le moltiplicazioni come se fossero "polinomi" ottenendo una somma di "monomi": è possibile combinando proprietà associativa e distributiva del prodotto rispetto alla somma.
III. Utilizziamo poi le proprietà opportune (idempotenza, assorbimento, complemento, ...) per trasformare ogni prodotto o in $0$ oppure in un prodotto fondamentale.
IV. Infine utilizzando la legge dei confini trasformiamo l'espressione in forma normale disgiuntiva.

Vediamo un esempio.

---

> **Esercizio:** trasformare in forma normale disgiuntiva l'espressione
> $$
> ((xy')'z)'(x+y')(yz')'
> $$
> Non indico "tutti" i passaggi, tipo la proprietà commutativa ed associativa per ragioni di spazio, spero che sia chiaro lo stesso il procedimento.
>
> $$
> ((xy')'z)'(x+y')(yz')'
> $porto il complementare da fuori a dentro le parentesi più esterne (ti ricordo che$+$diventa$\cdot$$ e viceversa)
> $$
> = ((xy')'' + z')(x+y')(y' + z'')
> $$ applico la legge del doppio complemento
> $$
> = (xy' + z')(x+y')(y'+z)
> $$ applico la proprietà distributiva (moltiplico i primi due)
> $$
> = (xy'x + xy'y' + z'x + z'y')(y'+z)
> $$ leggi dell'idempotenza per il prodotto
> $$
> = (xy' + xy'+ z'x + z'y')(y'+z)
> $$ ancora la legge dell'idempotenza per la somma
> $$
> = (xy'+z'