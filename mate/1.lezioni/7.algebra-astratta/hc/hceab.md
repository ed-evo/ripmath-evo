# esercizio

Mostrare la presenza della struttura ad anello per l'insieme composto da due elementi $$A = \{p, d\}$$ con $$p$$ indicante i numeri pari e $$d$$ indicante i numeri dispari con le operazioni di addizione ($$+$$) e moltiplicazione ($$\cdot$$)

***

> **Nota:** È l'anello più semplice che possiamo pensare: composto da due soli elementi; tale insieme è inoltre isomorfo all'[insieme dei resti modulo 2](../hc/hcdced.html) (basta porre $$p = 0$$ e $$d = 1$$).

***

Dimostrazione:
dovremo mostrare:

- la presenza di un gruppo commutativo con la prima operazione
- la presenza di un semigruppo con la seconda operazione
- il fatto che la seconda operazione è distributiva rispetto alla prima

Cominciamo dal primo punto

- Mostriamo che $$(A, +)$$ è un gruppo; devono valere le proprietà:
    - $$+$$ è interna infatti avremo sempre che:
      $$p + p = p$$
      $$p + d = d$$
      $$d + d = p$$
      e tutti i risultati appartengono ad $$A$$.
      > **Nota:** Se non hai capito ferma il mouse su una delle somme.

    - $$+$$ è associativa, infatti chiamati $$a$$, $$b$$ e $$c$$ tre elementi di $$A$$ abbiamo:
      $$ (a + b) + c = a + (b + c) $$
      Per mostrarlo dovrei considerare le possibilità:

      > **Nota:** Veramente potrei fare ricorso al fatto che la somma e la moltiplicazione hanno qui le stesse proprietà che hanno nell'insieme dei numeri naturali essendo in questo insieme una restrizione di tali operazioni, però come esercizio proviamo a sviluppare tutto il ragionamento.

      $$ (p + p) + p = p + (p + p) $$
      $$ (p + p) + d = p + (p + d) $$
      $$ (p + d) + p = p + (d + p) $$
      $$ (d + p) + p = d + (p + p) $$
      $$ (p + d) + d = p + (d + d) $$
      $$ (d + p) + d = d + (p + d) $$
      $$ (d + d) + p = d + (d + p) $$
      $$ (d + d) + d = d + (d + d) $$

      e in tutte queste espressioni il primo membro è uguale al secondo: mostriamo come esempio la dimostrazione della validità dell'ultima espressione sviluppando il primo membro ed il secondo membro e controllando che il risultato sia identico:
      $$ (d + d) + d = p + d = d $$
      $$ d + (d + d) = d + p = d $$
      ottengo lo stesso risultato.

    - $$+$$ possiede l'elemento neutro: infatti esiste l'elemento $$p$$ tale che per ogni elemento di $$A$$ abbiamo:
      $$ p + p = p $$
      $$ p + q = q $$
      cioè sommando $$p$$ a qualunque elemento l'altro elemento non cambia.

    - ogni elemento di $$A$$ possiede in $$+$$ l'elemento simmetrico: infatti:
      $$ p + p = p $$ e $$p$$ è simmetrico di se stesso
      $$ d + d = p $$ e $$d$$ è simmetrico di se stesso

Quindi $$(A, +)$$ è un gruppo; inoltre il gruppo è commutativo perché per ogni elemento $$p$$ e $$q$$ appartenente a $$A$$ abbiamo che vale:
$$ p + q = q + p $$

- Mostriamo che $$(A, \cdot)$$ è un semigruppo
    - Basta mostrare che $$\cdot$$ è associativa, cioè chiamati $$a$$, $$b$$ e $$c$$ tre elementi di $$A$$ abbiamo:
      $$ (a \cdot b) \cdot c = a \cdot (b \cdot c) $$
      Per mostrarlo dovrei considerare le possibilità:
      $$ (p \cdot p) \cdot p = p \cdot (p \cdot p) $$
      $$ (p \cdot p) \cdot d = p \cdot (p \cdot d) $$
      $$ (p \cdot d) \cdot p = p \cdot (d \cdot p) $$
      $$ (d \cdot p) \cdot p = d \cdot (p \cdot p) $$
      $$ (p \cdot d) \cdot d = p \cdot (d \cdot d) $$
      $$ (d \cdot p) \cdot d = d \cdot (p \cdot d) $$
      $$ (d \cdot d) \cdot p = d \cdot (d \cdot p) $$
      $$ (d \cdot d) \cdot d = d \cdot (d \cdot d) $$

      e in tutte queste espressioni il primo membro è uguale al secondo: mostriamo come esempio la dimostrazione della validità dell'ultima espressione:
      $$ (d \cdot d) \cdot d = d \cdot d = d $$
      $$ d \cdot (d \cdot d) = d \cdot d = d $$

Quindi $$(A, \cdot)$$ è un semigruppo.

- Mostriamo infine che la seconda operazione è distributiva rispetto alla prima, cioè dati $$a$$, $$b$$ e $$c$$ appartenenti a $$A$$ avremo sempre:
  $$ a \cdot (b + c) = a \cdot b + a \cdot c $$
  $$ (b + c) \cdot a = b \cdot a + c \cdot a $$

  Per mostrarlo dovrei considerare le possibilità:
  $$ p \cdot (p + p) = p \cdot p + p \cdot p $$
  $$ p \cdot (p + d) = p \cdot p + p \cdot d $$
  $$ p \cdot (d + p) = p \cdot d + p \cdot p $$
  $$ d \cdot (p + p) = d \cdot p + d \cdot p $$
  $$ p \cdot (d + d) = p \cdot d + p \cdot d $$
  $$ d \cdot (p + d) = d \cdot p + d \cdot d $$
  $$ d \cdot (d + p) = d \cdot d + d \cdot p $$
  $$ d \cdot (d + d) = d \cdot d + d \cdot d $$
  ed anche le commutate rispetto a $$\cdot$$:
  $$ (p + p) \cdot p = p \cdot p + p \cdot p $$
  $$ (p + d) \cdot p = p \cdot p + d \cdot p $$
  $$ (d + p) \cdot p = d \cdot p + p \cdot p $$
  $$ (p + p) \cdot d = p \cdot d + p \cdot d $$
  $$ (d + d) \cdot p = d \cdot p + d \cdot p $$
  $$ (p + d) \cdot d = p \cdot d + d \cdot d $$
  $$ (d + p) \cdot d = d \cdot d + p \cdot d $$
  $$ (d + d) \cdot d = d \cdot d + d \cdot d $$

  e in tutte queste espressioni il primo membro è uguale al secondo: mostriamo come esempio la dimostrazione della validità dell'ultima espressione:
  $$ (d + d) \cdot d = p \cdot d = p $$
  $$ d \cdot (d + d) = d \cdot p = p $$

Quindi la struttura $$(A, +, \cdot)$$ è un anello.

Siccome la moltiplicazione in $$A$$ è commutativa avremo che l'anello è commutativo.

Poiché la moltiplicazione in $$A$$ ha come elemento neutro l'elemento $$d$$, l'anello è unitario: $$d$$ è l'elemento neutro moltiplicativo perché moltiplicando $$d$$ per qualunque altro termine l'altro termine non cambia:
$$ d \cdot d = d $$
$$ d \cdot p = p $$

***