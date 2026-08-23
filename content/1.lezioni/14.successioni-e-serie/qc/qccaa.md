# Come dal termine generico ricavo i termini della successione e viceversa

Abbiamo considerato la successione

$$-8, +4, -2, +1, -\frac{1}{2}, +\frac{1}{4}, \dots, \left(-\frac{1}{2}\right)^{n-4}, \dots$$

Considero il termine generico

$$
a_n = \left(-\frac{1}{2}\right)^{n-4}
$$

Mostriamo prima che sostituendo ad $$n$$ i valori naturali nel termine generico possiamo ottenere i vari termini della successione.

> **Nota:** Ti ricordo che per elevare una frazione a potenza negativa si può elevare l'inverso della frazione a potenza positiva e l'inverso di $$\frac{1}{2}$$ è $$\frac{2}{1}$$, cioè $$2$$.

Poi facciamo il contrario, vediamo come dai primi termini possiamo costruire il termine generico.

- **Dal termine generico alla successione**
  Abbiamo il termine generico $$a_n = \left(-\frac{1}{2}\right)^{n-4}$$
  Sostituiamo ad $$n$$ i valori $$1, 2, 3, 4, \dots$$
  - Sostituisco $$1$$: $$a_1 = \left(-\frac{1}{2}\right)^{1-4} = \left(-\frac{1}{2}\right)^{-3} = (-2)^3 = -8$$
  - Sostituisco $$2$$: $$a_2 = \left(-\frac{1}{2}\right)^{2-4} = \left(-\frac{1}{2}\right)^{-2} = 2^2 = +4$$
  - Sostituisco $$3$$: $$a_3 = \left(-\frac{1}{2}\right)^{3-4} = \left(-\frac{1}{2}\right)^{-1} = (-2)^1 = -2$$
  - Sostituisco $$4$$: $$a_4 = \left(-\frac{1}{2}\right)^{4-4} = \left(-\frac{1}{2}\right)^0 = +1$$
  $$\dots$$

- **Dalla successione al termine generico**
  Ho la successione

  $$-8, +4, -2, +1, -\frac{1}{2}, +\frac{1}{4}, \dots$$

  Noto che ogni termine si ottiene dividendo il precedente per $$2$$, quindi dovrò moltiplicare per $$\left(\frac{1}{2}\right)^k$$; inoltre i segni sono alternati, quindi ad ogni termine dovrò associare $$(-1)^k$$ in modo che se $$k$$ è positivo il segno diventi positivo, mentre se $$k$$ è negativo ottengo il segno meno. Per semplicità metto assieme $$\left(\frac{1}{2}\right)^k$$ e $$(-1)^k$$ scrivendo $$\left(-\frac{1}{2}\right)^k$$.

  Siccome il primo termine deve risultare $$-8$$, per partire dal valore $$k=1$$ metto come esponente $$k-4$$ in modo che, quando $$k=1$$ elevo la base $$\left(-\frac{1}{2}\right)$$ a $$-3$$ ed ottengo

  $$
  \left(-\frac{1}{2}\right)^{1-4} = \left(-\frac{1}{2}\right)^{-3} = (-2)^3 = -8
  $$

  Quindi il termine generico sarà

  $$
  a_k = \left(-\frac{1}{2}\right)^{k-4}
  $$

> Naturalmente è possibile trovare il termine generico in forme diverse, ma equivalenti: ad esempio, potevo considerare come termine generico
>
> $$
> a_k = 8 \cdot \left(-\frac{1}{2}\right)^k
> $$
>
> oppure, se per i valori di $$k$$ considero $$k=0, 1, 2, \dots$$ allora il mio termine generico può diventare
>
> $$
> a_k = -8 \cdot \left(-\frac{1}{2}\right)^k
> $$
>
> Io preferisco le forme semplici, in cui, per $$k=1$$ si evidenzi bene il primo termine, nel nostro caso $$-8$$. Comunque l'importante è ottenere sempre gli stessi termini.