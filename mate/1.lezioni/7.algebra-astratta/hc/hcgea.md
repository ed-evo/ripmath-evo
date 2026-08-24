# esercizio

Individuare la struttura di spazio vettoriale per l'insieme $\mathbb{C}$ dei numeri complessi sul corpo $\mathbb{R}$ con le normali operazioni di addizione e moltiplicazione in $\mathbb{C}$ e con la moltiplicazione scalare $\mathbb{R} \cdot \mathbb{C}$ (numero reale per numero complesso).

> È l'esempio più semplice perché è quello da cui abbiamo ricavato la struttura di spazio: questo esempio ci servirà soprattutto per mostrare come bisogna procedere per mostrare la struttura di spazio vettoriale su un qualunque altro insieme.

Dimostrazione:
dovremo mostrare che abbiamo:

- la presenza di un gruppo commutativo su $\mathbb{C}$ con la somma fra complessi
- la commutatività del prodotto scalare (che coincide col prodotto ordinario in $\mathbb{R}$) $\mathbb{R} \cdot \mathbb{C}$
- la proprietà distributiva della moltiplicazione scalare rispetto all'addizione vettoriale
- la proprietà distributiva della moltiplicazione scalare rispetto all'addizione di scalari
- la proprietà associativa fra gli scalari

Cominciamo dal primo punto:

- Mostriamo che $(\mathbb{C}, +)$ è un gruppo commutativo; devono valere le proprietà:
    - $+$ è interna: infatti chiamati $a+ib$ e $c+id$ due elementi di $\mathbb{C}$, allora anche 
      $$
      e+if = (a+ib) + (c+id)
      $$ 
      appartiene a $\mathbb{C}$.
      Infatti:
      $$
      (a+ib) + (c+id) = a+ib + c+id = (a+c) + i(b+d) = e + if
      $$
      essendo $e = a+c$ ed $f = b+d$.
    - $+$ è associativa: infatti chiamati $a+ib$, $c+id$ e $e+if$ tre elementi di $\mathbb{C}$ abbiamo:
      $$
      (a+ib + c+id) + e+if = a+ib + (c+id + e+if)
      $$
      siccome dobbiamo sommare le parti reali con le parti reali e, per le parti immaginarie, dobbiamo mettere in evidenza la $i$ per poi sommare i numeri reali entro parentesi, allora l'associatività deriva dal fatto che la somma in $\mathbb{R}$ è associativa.
    - $+$ possiede l'elemento neutro: infatti esiste l'elemento $0+i0$ tale che per ogni elemento $a+ib$ di $\mathbb{C}$ abbiamo:
      $$
      a+ib + 0+i0 = 0+i0 + a+ib = a+ib
      $$
    - ogni elemento $a+ib$ di $\mathbb{C}$ possiede in $+$ l'elemento simmetrico $-a-ib$ tale che:
      $$
      a+ib + (-a-ib) = (-a-ib) + a+ib = 0+i0
      $$
      Infatti dato un numero complesso basta considerare lo stesso numero con segni opposti.

Quindi $(\mathbb{C}, +)$ è un gruppo; inoltre tale gruppo è commutativo perché presi comunque due elementi $a+ib$ e $c+id$ di $\mathbb{C}$ vale sempre:
$$
a+ib + c+id = (a+c)+i(b+d) = (c+a)+i(d+b) = c+id + a+ib
$$
siccome dobbiamo sommare le parti reali con le parti reali e, per le parti immaginarie, dobbiamo mettere in evidenza la $i$ per poi sommare i numeri reali entro parentesi, allora la commutatività deriva dalla commutatività della somma fra numeri reali.

- Mostriamo la commutatività del prodotto scalare (che coincide col prodotto ordinario in $\mathbb{R}$):
  $$
  x \cdot (a+ib) = x \cdot a + x \cdot ib = ax + i bx = (a + ib) \cdot x
  $$
  Il prodotto ordinario in $\mathbb{R}$ è commutativo, quindi...

- Mostriamo la proprietà distributiva della moltiplicazione scalare rispetto all'addizione vettoriale:
  $$
  x \cdot [(a+ib)+(c+id)] = x \cdot (a+ib+c+id) = x \cdot a + x \cdot ib + x \cdot c + x \cdot id = ax + ibx + cx + idx = x \cdot (a+ib) + x \cdot (c+id)
  $$

- Mostriamo la proprietà distributiva della moltiplicazione scalare rispetto all'addizione di scalari:
  $$
  x \cdot (y+z) = x \cdot y + x \cdot z
  $$
  siamo in $\mathbb{R}$ e quindi la proprietà è valida.

- Mostriamo la proprietà associativa fra gli scalari:
  $$
  x \cdot (y \cdot z) = (x \cdot y) \cdot z
  $$
  siamo sempre in $\mathbb{R}$ e quindi la proprietà è valida.

Quindi $\mathbb{C}$ è uno spazio vettoriale sul campo $\mathbb{R}$.