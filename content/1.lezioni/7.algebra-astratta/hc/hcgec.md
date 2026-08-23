[.text-red] # Esercizio

Individuare la struttura di spazio vettoriale sullo spazio ordinario $$\mathbb{R}^3$$ con le normali operazioni di addizione e moltiplicazione e con moltiplicazione scalare la normale moltiplicazione $$\mathbb{R} \cdot \mathbb{R}^3$$.

Dimostrazione:
dovremo mostrare che abbiamo:

- la presenza di un gruppo commutativo su $$\mathbb{R}^3$$ con l'operazione somma (nelle componenti si riduce a somma fra elementi di $$\mathbb{R}$$);
- la commutatività del prodotto scalare (che coincide col prodotto ordinario in $$\mathbb{R}$$);
- la proprietà distributiva della moltiplicazione scalare rispetto all'addizione vettoriale;
- la proprietà distributiva della moltiplicazione scalare rispetto all'addizione di scalari;
- la proprietà associativa fra gli scalari.

Cominciamo dal primo punto:

- Mostriamo che $$(\mathbb{R}^3, +)$$ è un gruppo commutativo; devono valere le proprietà:
    - $$+$$ è interna: infatti chiamati $$(a, b, c)$$ e $$(d, e, f)$$ due elementi di $$\mathbb{R}^3$$, allora anche $$(a+d, b+e, c+f)$$ appartiene a $$\mathbb{R}^3$$. Infatti abbiamo che sulle varie componenti vale l'addizione in $$\mathbb{R}$$.
    - $$+$$ è associativa: infatti chiamati $$(a, b, c)$$, $$(d, e, f)$$ e $$(g, h, i)$$ tre elementi di $$\mathbb{R}^3$$ abbiamo:
      $$
      [(a, b, c) + (d, e, f)] + (g, h, i) = (a+d, b+e, c+f) + (g, h, i) = (a+d+g, b+e+h, c+f+i) = (a, b, c) + (d+g, e+h, f+i) = (a, b, c) + [(d, e, f) + (g, h, i)]
      $$
      Infatti proiettandoci sulle varie componenti l'addizione in $$\mathbb{R}$$ è associativa.
    - $$+$$ possiede l'elemento neutro: infatti esiste l'elemento $$(0, 0, 0)$$ tale che per ogni elemento $$(a, b, c)$$ di $$\mathbb{R}^3$$ abbiamo:
      $$
      (0, 0, 0) + (a, b, c) = (0+a, 0+b, 0+c) = (a+0, b+0, c+0) = (a, b, c) + (0, 0, 0)
      $$
      sulle componenti l'addizione è commutativa.
    - ogni elemento $$(a, b, c)$$ di $$\mathbb{R}^3$$ possiede in $$+$$ l'elemento simmetrico $$(-a, -b, -c)$$ tale che:
      $$
      (a, b, c) + (-a, -b, -c) = (a-a, b-b, c-c) = (0, 0, 0)
      $$
      Infatti dato su una componente un numero reale basta considerare lo stesso numero con segno opposto.

Quindi $$(\mathbb{R}^3, +)$$ è un gruppo; inoltre tale gruppo è commutativo perché presi comunque due elementi $$(a, b, c)$$ e $$(d, e, f)$$ di $$\mathbb{R}^3$$ vale sempre:
$$
(a, b, c) + (d, e, f) = (a+d, b+e, c+f) = (d+a, e+b, f+c) = (d, e, f) + (a, b, c)
$$
infatti su una componente posso applicare la legge commutativa valida in $$\mathbb{R}$$.

- Mostriamo la commutatività del prodotto scalare (che coincide col prodotto ordinario in $$\mathbb{R}$$):
  $$
  x \cdot (a, b, c) = (x \cdot a, x \cdot b, x \cdot c) = (a \cdot x, b \cdot x, c \cdot x) = (a, b, c) \cdot x
  $$
  Il prodotto ordinario in $$\mathbb{R}$$ è commutativo, quindi...

- Mostriamo la proprietà distributiva della moltiplicazione scalare rispetto all'addizione vettoriale:
  $$
  x \cdot [(a, b, c) + (d, e, f)] = x \cdot (a+d, b+e, c+f) = [x \cdot (a+d), x \cdot (b+e), x \cdot (c+f)] = (xa+xd, xb+xe, xc+xf) = (ax+dx, bx+ex, cx+fx) = (dx+ax, ex+bx, fx+cx) = (dx, ex, fx) + (ax, bx, cx) = (xd, xe, xf) + (xa, xb, xc) = x(d, e, f) + x(a, b, c)
  $$
  > **Nota:** Se fermi il mouse sui termini ti illustro i passaggi.

- Mostriamo la proprietà distributiva della moltiplicazione scalare rispetto all'addizione di scalari:
  $$
  x \cdot (y+z) = x \cdot y + x \cdot z
  $$
  siamo in $$\mathbb{R}$$ e quindi la proprietà è valida.

- Mostriamo la proprietà associativa fra gli scalari:
  $$
  x \cdot (y \cdot z) = (x \cdot y) \cdot z
  $$
  siamo sempre in $$\mathbb{R}$$ e quindi la proprietà è valida.

Quindi $$\mathbb{R}^3$$ è uno spazio vettoriale sul corpo $$\mathbb{R}$$.