# [esercizio]{.text-red}

Mostrare la presenza della struttura ad anello per l'insieme $$P(x)$$ dei polinomi in $$x$$ a coefficienti reali con le normali operazioni di addizione ($$+$$) e moltiplicazione ($\$\cdot\$$) fra polinomi.

***

Per insieme dei polinomi in $$x$$ si intende l'insieme dei polinomi della forma
$$
a_n x^n + a_{n-1} x^{n-1} + \dots + a_2 x^2 + a_1 x + a_0
$$
con $$n = 0, 1, 2, \dots, n, n+1, \dots$$

L'operazione di addizione significa l'addizione fra polinomi per cui sommiamo algebricamente i coefficienti dei termini con $$x$$ allo stesso grado: cioè, se $$n$$ è maggiore di $$m$$ avremo
$$
(a_n x^n + a_{n-1} x^{n-1} + \dots + a_2 x^2 + a_1 x + a_0) + (b_m x^m + b_{m-1} x^{m-1} + \dots + b_2 x^2 + b_1 x + b_0) = a_n x^n + a_{n-1} x^{n-1} + \dots + (a_m + b_m) x^m + (a_{m-1} + b_{m-1}) x^{m-1} + \dots + (a_2 + b_2) x^2 + (a_1 + b_1) x + (a_0 + b_0)
$$

Il prodotto fra polinomi è il normale prodotto fra polinomi già visto.

***

> **Dimostrazione:**
>
> Dovremo mostrare:
> - la presenza di un gruppo commutativo con la prima operazione
> - la presenza di un semigruppo con la seconda operazione
> - il fatto che la seconda operazione è distributiva rispetto alla prima

- Mostriamo che $$(P, +)$$ è un gruppo; devono valere le proprietà:
    - $$+$$ è interna infatti avremo sempre che la somma di due polinomi in $$x$$ è sempre ancora un polinomio in $$x$$: facciamo un esempio pratico:
      $$
      (2x^3 + 5x^2 - 4x + 3) + (3x^2 + 4) = 2x^3 + 8x^2 - 4x + 7
      $$
      > In pratica la somma nei polinomi si riduce alla somma dei coefficienti numerici di stesso grado e quindi le proprietà della somma sono le stesse che hanno i numeri reali.

    - $$+$$ è associativa, infatti chiamati $$A(x)$$, $$B(x)$$ e $$C(x)$$ tre elementi di $$P(x)$$ abbiamo:
      $$
      [A(x) + B(x)] + C(x) = A(x) + [B(x) + C(x)]
      $$
      Facciamo anche qui un esempio pratico:
      $$
      [(2x^3 + 5x^2 - 4x + 3) + (3x^2 + 4)] + (2x^2 + 3x - 4) = (2x^3 + 5x^2 - 4x + 3) + [(3x^2 + 4) + (2x^2 + 3x - 4)]
      $$
      Per mostrarlo basta che fai i calcoli prima e dopo l'uguale e mostri che i risultati sono uguali: lo sono perché la somma fra i coefficienti (essendo numeri reali) gode della proprietà associativa.

    - $$+$$ possiede l'elemento neutro: infatti esiste l'elemento $$P(0)$$, intendendo $$P(0)$$ come il polinomio
      $$
      0x^n + \dots + 0x^2 + 0x + 0
      $$
      tale che per ogni elemento $$A(x)$$ di $$P(x)$$ abbiamo:
      $$
      A(x) + P(0) = A(x)
      $$
      $$
      P(0) + A(x) = A(x)
      $$
      cioè sommando $$P(0)$$ a qualunque elemento l'altro elemento non cambia.

    - Ogni elemento $$A(x)$$ di $$P(x)$$ possiede in $$+$$ l'elemento simmetrico: infatti preso
      $$
      A(x) = a_n x^n + a_{n-1} x^{n-1} + \dots + a_2 x^2 + a_1 x + a_0
      $$
      il simmetrico è:
      $$
      A'(x) = -a_n x^n - a_{n-1} x^{n-1} - \dots - a_2 x^2 - a_1 x - a_0
      $$
      infatti $$A(x) + A'(x) = 0$$.

Quindi $$(P, +)$$ è un gruppo; inoltre il gruppo è commutativo perché commutativa è la somma fra i coefficienti numerici (numeri reali).

Mostriamo che $$(P(x), \cdot)$$ è un semigruppo:
- Basta mostrare che $$\cdot$$ è associativa, cioè chiamati $$A(x)$$, $$B(x)$$ e $$C(x)$$ tre elementi di $$P(x)$$ abbiamo sempre:
  $$
  [A(x) \cdot B(x)] \cdot C(x) = A(x) \cdot [B(x) \cdot C(x)]
  $$
  cioè dati tre polinomi qualunque se moltiplichi il primo per il secondo e poi quello che viene per il terzo ottieni lo stesso risultato che moltiplicando prima il secondo col terzo e poi quello che viene per il primo. Se vuoi puoi costruirti un esempio da solo.

Mostriamo infine che la seconda operazione è distributiva rispetto alla prima, cioè dati $$A(x)$$, $$B(x)$$ e $$C(x)$$ appartenenti a $$P(x)$$ avremo sempre:
$$
A(x) \cdot [B(x) + C(x)] = A(x) \cdot B(x) + A(x) \cdot C(x)
$$
$$
[B(x) + C(x)] \cdot A(x) = B(x) \cdot A(x) + C(x) \cdot A(x)
$$

Anche qui deriva dal fatto che per i coefficienti numerici, che sono numeri reali, vale la proprietà distributiva della somma rispetto alla moltiplicazione.

Quindi la struttura $$(P(x), +, \cdot)$$ è un anello.

Siccome la moltiplicazione in $$P(x)$$ è commutativa avremo che l'anello è commutativo.

Poiché la moltiplicazione in $$A$$ deve avere come elemento neutro l'elemento
$$
\dots 1x^n + 1x^{n-1} + \dots + 1x^2 + 1x + 1
$$
ma tale elemento non può essere definito in modo univoco perché dovrebbe avere esattamente lo stesso numero di termini (e dello stesso grado) del polinomio con cui si moltiplica, allora non posso parlare di un elemento neutro e l'anello non è unitario.