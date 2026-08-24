# [Spazio vettoriale]{.text-red}

Ora possiamo finalmente evidenziare una struttura, lo **spazio vettoriale** che è quella suggerita dai numeri complessi $C$ e quindi completare, per ora, le strutture basate sui numeri.
Tale struttura (**spazio**) sarà detta **vettoriale** perché ogni elemento di essa potrà essere posto in corrispondenza con un determinato vettore.

---

## Consideriamo un insieme di enti $V$ ed un corpo commutativo $K$

Indicheremo con $x$, $y$, $t$, ... gli elementi di $V$ (vettori)
e con $a$, $b$, $c$, ... gli elementi di $K$ (scalari)

Indichiamo sugli elementi di $V$ l'operazione di addizione vettoriale con il simbolo $+$.
Indichiamo sugli elementi di $K$ le operazioni di addizione e moltiplicazione con i simboli $\oplus$ e $\otimes$.
L'operazione $\otimes$ opera oltre che in $K$ anche come moltiplicazione (scalare) fra gli elementi di $K$ e $V$.

---

Diremo che $V$ è uno **spazio vettoriale** sul campo $K$ se abbiamo:

- L'insieme $(V, +)$ è un gruppo commutativo.

- La moltiplicazione scalare $K \otimes V$ ha come codominio una porzione di $V$.

- La moltiplicazione scalare è commutativa:
  $a \otimes x = x \otimes a$ per ogni elemento di $V$ e $K$.

- Vale la proprietà distributiva della moltiplicazione scalare rispetto all'addizione vettoriale:
  $a \otimes (x + y) = a \otimes x + a \otimes y$

- Vale la proprietà distributiva della moltiplicazione scalare rispetto all'addizione di scalari:
  $(a \oplus b) \otimes x = a \otimes x + b \otimes x$
  > **Nota:** Dopo l'uguale devo usare il simbolo $+$ perché $a \otimes x$ e $b \otimes x$ sono vettori e quindi devo sommare due vettori.

- Vale la proprietà associativa fra gli scalari:
  $a \otimes (b \otimes x) = (a \otimes b) \otimes x$

- Inoltre se $1$ è l'elemento neutro moltiplicativo di $K$ allora vale:
  $1 \otimes x = x$

---

Lo spazio vettoriale è una di quelle strutture che meglio si presterà a studiare vari enti matematici, dai polinomi, alle matrici, agli spazi ad $n$ dimensioni fino alle applicazioni lineari, quindi andrebbe sviluppata nei particolari (dimensione, sottospazi, basi, somma di spazi vettoriali, ....)
lasciando, per ora, lo sviluppo di questi argomenti a studi universitari, vediamo nella prossima pagina alcuni semplici esempi di spazi vettoriali.