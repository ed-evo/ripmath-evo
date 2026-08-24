# esercizio

Individuare la struttura di spazio vettoriale sull'insieme $$P(x)$$ dei polinomi in $$x$$ a coefficienti reali con le normali operazioni di addizione ($$ + $$) e moltiplicazione ($$ \cdot $$) fra polinomi sul corpo $$\mathbb{R}$$ e con la normale moltiplicazione $$ \cdot $$ come prodotto scalare.

***

Per insieme dei polinomi $$P(x)$$ si intende l'insieme dei polinomi della forma

$$
a_n x^n + a_{n-1} x^{n-1} + \dots + a_2 x^2 + a_1 x + a_0
$$

con $$n = 0, 1, 2, \dots, n, n+1, \dots$$ [non ho capito](hceaca.html)

L'operazione di addizione significa l'addizione fra polinomi per cui sommiamo algebricamente i coefficienti dei termini con $$x$$ allo stesso grado: cioè, se $$n$$ è maggiore di $$m$$ avremo

$$
(a_n x^n + a_{n-1} x^{n-1} + \dots + a_2 x^2 + a_1 x + a_0) + (b_m x^m + b_{m-1} x^{m-1} + \dots + b_2 x^2 + b_1 x + b_0) = a_n x^n + a_{n-1} x^{n-1} + \dots + (a_m + b_m) x^m + (a_{m-1} + b_{m-1}) x^{m-1} + \dots + (a_2 + b_2) x^2 + (a_1 + b_1) x + (a_0 + b_0)
$$

Il prodotto fra polinomi è il normale [prodotto fra polinomi già visto](../../a/ad/ad4b.html).

***

> **Dimostrazione:**
>
> Dovremo mostrare che abbiamo:
> - la presenza di un gruppo commutativo su $$P(x)$$ con l'operazione somma;
> - la commutatività del prodotto scalare (che coincide col prodotto ordinario su ogni termine);
> - la proprietà distributiva della moltiplicazione scalare rispetto all'addizione vettoriale;
> - la proprietà distributiva della moltiplicazione scalare rispetto all'addizione di scalari;
> - la proprietà associativa fra gli scalari.
>
> Cominciamo dal primo punto: ti ripeto la dimostrazione già fatta nell'esercizio sugli anelli.
>
> - Mostriamo che $$(P(x), +)$$ è un gruppo commutativo; devono valere le proprietà:
>   - $$ + $$ è interna, infatti avremo sempre che la somma di due polinomi in $$x$$ è sempre ancora un polinomio in $$x$$: facciamo un esempio pratico:
>
>     $$
>     (2x^3 + 5x^2 - 4x + 3) + (3x^2 + 4) = 2x^3 + 8x^2 - 4x + 7
>     $$
>
>     > **Nota:** In pratica la somma nei polinomi si riduce alla somma dei coefficienti numerici di stesso grado e quindi le proprietà della somma sono le stesse che hanno i numeri reali.
>
>   - $$ + $$ è associativa, infatti chiamati $$A(x)$$, $$B(x)$$ e $$C(x)$$ tre elementi di $$P(x)$$ abbiamo:
>
>     $$
>     [A(x) + B(x)] + C(x) = A(x) + [B(x) + C(x)]
>     $$
>
>     Facciamo anche qui un esempio pratico:
>
>     $$
>     [(2x^3 + 5x^2 - 4x + 3) + (3x^2 + 4)] + (2x^2 + 3x - 4) = (2x^3 + 5x^2 - 4x + 3) + [(3x^2 + 4) + (2x^2 + 3x - 4)]
>     $$
>
>     Per mostrarlo basta che fai i calcoli prima e dopo l'uguale e mostri che i risultati sono uguali: lo sono perché la somma fra i coefficienti (essendo numeri reali) gode della proprietà associativa.
>
>   - $$ + $$ possiede l'elemento neutro: infatti esiste l'elemento $$P(0)$$, intendendo $$P(0)$$ come il polinomio
>
>     $$
>     0x^n + \dots + 0x^2 + 0x + 0
>     $$
>
>     tale che per ogni elemento $$A(x)$$ di $$P(x)$$ abbiamo:
>
>     $$
>     A(x) + P(0) = A(x)
>     $$
>     $$
>     P(0) + A(x) = A(x)
>     $$
>
>     cioè sommando $$P(0)$$ a qualunque elemento l'altro elemento non cambia.
>
>   - Ogni elemento $$A(x)$$ di $$P(x)$$ possiede in $$ + $$ l'elemento simmetrico: infatti preso
>
>     $$
>     A(x) = a_n x^n + a_{n-1} x^{n-1} + \dots + a_2 x^2 + a_1 x + a_0
>     $$
>
>     il simmetrico è:
>
>     $$
>     A'(x) = -a_n x^n - a_{n-1} x^{n-1} - \dots - a_2 x^2 - a_1 x - a_0
>     $$
>
>     infatti $$A(x) + A'(x) = 0$$.
>
> Quindi $$(P(x), +)$$ è un gruppo; inoltre il gruppo è commutativo perché commutativa è la somma fra i coefficienti numerici.
> Cioè, presi comunque due elementi $$P_1(x)$$ e $$P_2(x)$$ di $$P(x)$$ vale sempre:
>
> $$
> P_1(x) + P_2(x) = P_2(x) + P_1(x)
> $$

- La commutatività del prodotto scalare deriva dalla commutatività del prodotto ordinario fra numeri reali, dovendo moltiplicare il numero dato per ogni coefficiente numerico:

  $$
  h \cdot (a_n x^n + a_{n-1} x^{n-1} + \dots + a_2 x^2 + a_1 x + a_0) = ha_n x^n + ha_{n-1} x^{n-1} + \dots + ha_2 x^2 + ha_1 x + ha_0 = a_n h x^n + a_{n-1} h x^{n-1} + \dots + a_2 h x^2 + a_1 h x + a_0 h = (a_n x^n + a_{n-1} x^{n-1} + \dots + a_2 x^2 + a_1 x + a_0) \cdot h
  $$

  > **Nota:** se fermi il mouse sui passaggi leggi la spiegazione.

- Proprietà distributiva della moltiplicazione scalare rispetto all'addizione vettoriale:

  $$
  h \cdot [P_1(x) + P_2(x)] = h \cdot P_1(x) + h \cdot P_2(x)
  $$

  Dimostriamolo: supponiamo $$m > n$$.
  Supponiamo sia $$P_1(x)$$ un generico polinomio di grado $$n$$ e $$P_2(x)$$ un polinomio generico di grado $$m$$ ed inoltre supponiamo $$m > n$$.

  $$
  h \cdot [(a_n x^n + a_{n-1} x^{n-1} + \dots + a_2 x^2 + a_1 x + a_0) + (b_m x^m + b_{m-1} x^{m-1} + \dots + b_n x^n + b_{n-1} x^{n-1} + \dots + b_2 x^2 + b_1 x + b_0)] =
  $$

  $$
  = h \cdot (a_n x^n + a_{n-1} x^{n-1} + \dots + a_2 x^2 + a_1 x + a_0 + b_m x^m + b_{m-1} x^{m-1} + \dots + b_n x^n + b_{n-1} x^{n-1} + \dots + b_2 x^2 + b_1 x + b_0) =
  $$

  $$
  = ha_n x^n + ha_{n-1} x^{n-1} + \dots + ha_2 x^2 + ha_1 x + ha_0 + hb_m x^m + hb_{m-1} x^{m-1} + \dots + hb_n x^n + hb_{n-1} x^{n-1} + \dots + hb_2 x^2 + hb_1 x + hb_0 =
  $$

  $$
  = (ha_n x^n + ha_{n-1} x^{n-1} + \dots + ha_2 x^2 + ha_1 x + ha_0) + (hb_m x^m + hb_{m-1} x^{m-1} + \dots + hb_n x^n + hb_{n-1} x^{n-1} + \dots + hb_2 x^2 + hb_1 x + hb_0) =
  $$

  $$
  = h \cdot (a_n x^n + a_{n-1} x^{n-1} + \dots + a_2 x^2 + a_1 x + a_0) + h \cdot (b_m x^m + b_{m-1} x^{m-1} + \dots + b_n x^n + b_{n-1} x^{n-1} + \dots + b_2 x^2 + b_1 x + b_0)
  $$

  > **Nota:** se fermi il mouse sui termini ti illustro i passaggi.

- Mostriamo la proprietà distributiva della moltiplicazione scalare rispetto all'addizione di scalari:

  $$
  h \cdot (p + q) = h \cdot p + h \cdot q
  $$

  Siamo in $$\mathbb{R}$$ e quindi la proprietà è valida.

- Mostriamo la proprietà associativa fra gli scalari:

  $$
  h \cdot (p \cdot q) = (h \cdot p) \cdot q
  $$

  Siamo sempre in $$\mathbb{R}$$ e quindi la proprietà è valida.

***

Quindi $$F(x)$$ è uno spazio vettoriale sul corpo $$\mathbb{R}$$.