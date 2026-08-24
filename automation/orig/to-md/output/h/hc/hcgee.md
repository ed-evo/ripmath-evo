# [esercizio]{.text-red}

Individuare la struttura di spazio vettoriale sullo spazio funzionale $F(x)$ i cui elementi sono funzioni $y=f(x)$ (definite su tutto $\mathbb{R}$), in cui è definita la somma vettoriale come la nuova funzione $y = f(x)+g(x)$ ed il prodotto scalare come $a \cdot f(x)$ con $a$ appartenente a $\mathbb{R}$.

Dimostrazione:
dovremo mostrare che abbiamo:

- la presenza di un gruppo commutativo su $F(x)$ con l'operazione somma
- la commutatività del prodotto scalare (che coincide col prodotto ordinario)
- la proprietà distributiva della moltiplicazione scalare rispetto all'addizione vettoriale
- la proprietà distributiva della moltiplicazione scalare rispetto all'addizione di scalari
- la proprietà associativa fra gli scalari

Cominciamo dal primo punto:

- Mostriamo che $(F(x), +)$ è un gruppo commutativo; devono valere le proprietà:
    - $+$ è interna: infatti chiamati $y=f_1(x)$ e $y = f_2(x)$ due elementi di $F(x)$, allora anche
      $$
      f_3(x) = f_1(x)+f_2(x)
      $$
      appartiene a $F(x)$. Infatti una somma di funzioni è ancora una funzione.
    - $+$ è associativa: infatti chiamati $f_1(x)$, $f_2(x)$ e $f_3(x)$ tre elementi di $F(x)$, abbiamo:
      $$
      [f_1(x) + f_2(x)] + f_3(x) = f_1(x) + [f_2(x) + f_3(x)]
      $$
      > **Esempio:** Al solito le proprietà della somma in $\mathbb{R}$ si applicano anche alla somma dei termini delle funzioni. Consideriamo le funzioni:
      > $$
      > y_1 = x^2 + \log x
      > $$
      > $$
      > y_2 = x^2 + 3x + 4
      > $$
      > $$
      > y_3 = e^x + x
      > $$
      > Devo mostrare che vale:
      > $$
      > [x^2 + \log x + x^2 + 3x + 4] + e^x + x = x^2 + \log x + [x^2 + 3x + 4 + e^x + x]
      > $$
      > Basta applicare la proprietà associativa e dissociativa della somma:
      > $$
      > [x^2 + \log x + x^2 + 3x + 4] + e^x + x = x^2 + \log x + x^2 + 3x + 4 + e^x + x = x^2 + \log x + [x^2 + 3x + 4 + e^x + x]
      > $$
    - $+$ possiede l'elemento neutro: infatti esiste la funzione $y = 0$ tale che per ogni elemento:
      $$
      f_1(x) + 0 = 0 + f_1(x) = f_1(x)
      $$
    - ogni elemento $f_1(x)$ di $F(x)$ possiede in $+$ l'elemento simmetrico $-f_1(x)$ tale che:
      $$
      f_1(x) - f_1(x) = 0
      $$
      Infatti basterà considerare la funzione i cui termini hanno segno opposto.
      > **Esempio:** se
      > $$
      > f_1(x) = x^2 + \log x
      > $$
      > considero come simmetrica
      > $$
      > -f_1(x) = -x^2 - \log x
      > $$

Quindi $(F(x), +)$ è un gruppo; inoltre tale gruppo è commutativo perché presi comunque due elementi $f_1(x)$ e $f_2(x)$ di $F(x)$ vale sempre:
$$
f_1(x) + f_2(x) = f_2(x) + f_1(x)
$$
infatti la somma dei termini di una funzione è commutativa.

- Mostriamo, su un esempio, la commutatività del prodotto scalare (che coincide col prodotto ordinario):
  $$
  x \cdot f_1(x) = f_1(x) \cdot x
  $$
  > **Esempio:**
  > $$
  > 3 \cdot (x^2 + \log x) = 3 \cdot x^2 + 3 \cdot \log x = x^2 \cdot 3 + \log x \cdot 3 = (x^2 + \log x) \cdot 3
  > $$

- Proprietà distributiva della moltiplicazione scalare rispetto all'addizione vettoriale:
  $$
  x \cdot [f_1(x) + f_2(x)] = x \cdot f_1(x) + x \cdot f_2(x)
  $$
  > **Esempio:**
  > $$
  > f_1(x) = e^x + x
  > $$
  > $$
  > f_2(x) = x^2 + x + 3
  > $$
  > $$
  > 4 \cdot [(e^x + x) + (x^2 + x + 3)] = 4 \cdot [e^x + x + x^2 + x + 3]
  > $$
  > $$
  > = 4 \cdot e^x + 4 \cdot x + 4 \cdot x^2 + 4 \cdot x + 4 \cdot 3 = (4 \cdot e^x + 4 \cdot x) + (4 \cdot x^2 + 4 \cdot x + 4 \cdot 3)
  > $$
  > $$
  > = 4 \cdot (e^x + x) + 4 \cdot (x^2 + x + 3)
  > $$

- Mostriamo la proprietà distributiva della moltiplicazione scalare rispetto all'addizione di scalari:
  $$
  x \cdot (y + z) = x \cdot y + x \cdot z
  $$
  Siamo in $\mathbb{R}$ e quindi la proprietà è valida.

- Mostriamo la proprietà associativa fra gli scalari:
  $$
  x \cdot (y \cdot z) = (x \cdot y) \cdot z
  $$
  Siamo sempre in $\mathbb{R}$ e quindi la proprietà è valida.

Quindi $F(x)$ è uno spazio vettoriale sul corpo $\mathbb{R}$.