# esercizio

Verificare la presenza delle strutture di corpo e di campo sull'insieme $\mathbf{r_2}$ dei resti modulo 2 con le operazioni di addizione e moltiplicazione.

> Sarà il campo più semplice che possiamo pensare: composto da due soli elementi.

**Dimostrazione:**
dovremo mostrare per il corpo:

- la presenza di un gruppo commutativo con la somma
- la presenza di un gruppo con il prodotto escludendo l'elemento neutro per l'addizione (lo zero)
- il fatto che la seconda operazione è distributiva rispetto alla prima
- per il campo aggiungeremo la dimostrazione della commutatività della seconda operazione

Cominciamo dal primo punto

- Mostriamo che $(\mathbf{r_2}, +)$ è un gruppo; devono valere le proprietà:
    - $+$ è interna infatti avremo sempre che
      $$
      0 + 0 = 0
      $$
      $$
      0 + 1 = 1 + 0 = 1
      $$
      $$
      1 + 1 = (2)_2 = 0
      $$
      tutti i risultati appartengono ad $\mathbf{A}$ inoltre l'operazione è commutativa perché scambiando l'ordine dei fattori il risultato è lo stesso
      > **Nota:** Se non hai capito ferma il mouse sulla terza somma

    - $+$ è associativa, infatti chiamati $a$, $b$ e $c$ tre elementi di $\mathbf{A}$ abbiamo:
      $$
      (a + b) + c = a + (b + c)
      $$
      Per mostrarlo posso considerare le 8 possibilità:
      $$
      (0 + 0) + 0 = 0 + (0 + 0) = 0
      $$
      $$
      (0 + 0) + 1 = 0 + (0 + 1) = 1
      $$
      $$
      (0 + 1) + 0 = 0 + (1 + 0) = 1
      $$
      $$
      (1 + 0) + 0 = 1 + (0 + 0) = 1
      $$
      $$
      (0 + 1) + 1 = 0 + (1 + 1) = (2)_2 = 0
      $$
      $$
      (1 + 0) + 1 = 1 + (0 + 1) = (2)_2 = 0
      $$
      $$
      (1 + 1) + 0 = 1 + (1 + 0) = (2)_2 = 0
      $$
      $$
      (1 + 1) + 1 = 1 + (1 + 1) = (3)_2 = 1
      $$

    - $+$ possiede l'elemento neutro: infatti esiste l'elemento $0$ tale che per ogni elemento di $\mathbf{r_2}$ abbiamo
      $$
      0 + 0 = 0
      $$
      $$
      0 + 1 = 1 + 0 = 1
      $$
      cioè sommando $0$ a qualunque elemento l'altro elemento non cambia

    - ogni elemento di $\mathbf{r_2}$ possiede in $+$ l'elemento simmetrico: infatti
      $$
      0 + 0 = 0
      $$
      e $0$ è simmetrico di se stesso
      $$
      1 + 1 = 0
      $$
      e $1$ è simmetrico di se stesso

Quindi $(\mathbf{r_2}, +)$ è un gruppo commutativo;

- Mostriamo che $(\mathbf{r_2}, \cdot)$ è un gruppo; devono valere le proprietà:
    - $\cdot$ è interna infatti avremo sempre che
      $$
      0 \cdot 0 = 0
      $$
      $$
      0 \cdot 1 = 1 \cdot 0 = 0
      $$
      $$
      1 \cdot 1 = 1
      $$
      tutti i risultati appartengono ad $\mathbf{r_2}$ inoltre l'operazione è commutativa (scambiando i posti il risultato del prodotto è lo stesso)

    - $\cdot$ è associativa, infatti chiamati $a$, $b$ e $c$ tre elementi di $\mathbf{A}$ abbiamo:
      $$
      (a \cdot b) \cdot c = a \cdot (b \cdot c)
      $$
      Per mostrarlo posso considerare le 8 possibilità:
      $$
      (0 \cdot 0) \cdot 0 = 0 \cdot (0 \cdot 0) = 0
      $$
      $$
      (0 \cdot 0) \cdot 1 = 0 \cdot (0 \cdot 1) = 0
      $$
      $$
      (0 \cdot 1) \cdot 0 = 0 \cdot (1 \cdot 0) = 0
      $$
      $$
      (1 \cdot 0) \cdot 0 = 1 \cdot (0 \cdot 0) = 0
      $$
      $$
      (0 \cdot 1) \cdot 1 = 0 \cdot (1 \cdot 1) = 0
      $$
      $$
      (1 \cdot 0) \cdot 1 = 1 \cdot (0 \cdot 1) = 0
      $$
      $$
      (1 \cdot 1) \cdot 0 = 1 \cdot (1 \cdot 0) = 0
      $$
      $$
      (1 \cdot 1) \cdot 1 = 1 \cdot (1 \cdot 1) = 1
      $$

    - $\cdot$ possiede l'elemento neutro: infatti esiste l'elemento $1$ tale che per ogni elemento di $\mathbf{r_2}$ abbiamo
      $$
      1 \cdot 1 = 1
      $$
      $$
      0 \cdot 1 = 1 \cdot 0 = 0
      $$
      cioè moltiplicando $1$ a qualunque elemento l'altro elemento non cambia

    - ogni elemento di $\mathbf{r_2}$ ad eccezione di $0$ possiede in $\cdot$ l'elemento simmetrico: infatti, togliendo $0$ ci resta solo $1$ e poiché
      $$
      1 \cdot 1 = 1
      $$
      allora $1$ è elemento simmetrico di se stesso rispetto alla moltiplicazione

- Mostriamo infine che la seconda operazione è distributiva rispetto alla prima, cioè dati $a$, $b$ e $c$ appartenenti a $\mathbf{r_2}$ avremo sempre
  $$
  a \cdot (b + c) = a \cdot b + a \cdot c
  $$
  $$
  (b + c) \cdot a = b \cdot a + c \cdot a
  $$
  > **Nota:** Per mostrarlo dovrei considerare le 16 possibilità, ma preferisco dire che deriva dalla distributività del prodotto rispetto alla somma che vale nell'insieme dei numeri naturali

Quindi la struttura $(\mathbf{r_2}, +, \cdot)$ è un campo.

Infatti abbiamo visto che la moltiplicazione in $\mathbf{r_2}$ è commutativa.