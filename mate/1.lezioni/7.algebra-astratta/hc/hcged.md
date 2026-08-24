# esercizio

Individuare la struttura di spazio vettoriale sullo spazio ordinario $R^n$ con le normali operazioni di addizione e moltiplicazione e con moltiplicazione scalare la normale moltiplicazione $R \cdot R^n$

> È la stessa dimostrazione fatta nella pagina precedente, solamente consideriamo $n$ componenti invece delle tre ordinarie, quindi procede nello stesso modo: se hai fatto quella puoi non fare questa

> **Dimostrazione:**
>
> dovremo mostrare che abbiamo:
> - la presenza di un gruppo commutativo su $R^n$ con l'operazione somma (nelle componenti si riduce a somma fra elementi di $R$)
> - la commutatività del prodotto scalare (che coincide col prodotto ordinario in $R$)
> - la proprietà distributiva della moltiplicazione scalare rispetto all'addizione vettoriale
> - la proprietà distributiva della moltiplicazione scalare rispetto all'addizione di scalari
> - la proprietà associativa fra gli scalari
>
> Cominciamo dal primo punto
>
> - Mostriamo che $(R^3, +)$ è un gruppo commutativo; devono valere le proprietà:
>   - $+$ è interna infatti chiamati $(a_1, a_2, a_3, \dots, a_n)$ e $(b_1, b_2, b_3, \dots, b_n)$ due elementi di $R^n$ allora anche
>     $$
>     (a_1+b_1, a_2+b_2, a_3+b_3, \dots, a_n+b_n)
>     $$
>     appartiene a $R^n$
>     infatti abbiamo che sulle varie componenti vale l'addizione in $R$
>
>   - $+$ è associativa, infatti chiamati $(a_1, a_2, a_3, \dots, a_n)$, $(b_1, b_2, b_3, \dots, b_n)$ e $(c_1, c_2, c_3, \dots, c_n)$ tre elementi di $R^3$ abbiamo:
>     $$
>     [(a_1, a_2, a_3, \dots, a_n) + (b_1, b_2, b_3, \dots, b_n)] + (c_1, c_2, c_3, \dots, c_n) =
>     $$
>     $$
>     = (a_1+b_1, a_2+b_2, a_3+b_3, \dots, a_n+b_n) + (c_1, c_2, c_3, \dots, c_n) =
>     $$
>     $$
>     = (a_1+b_1+c_1, a_2+b_2+c_2, a_3+b_3+c_3, \dots, a_n+b_n+c_n) =
>     $$
>     $$
>     = [a_1+(b_1+c_1), a_2+(b_2+c_2), a_3+(b_3+c_3), \dots, a_n+(b_n+c_n)] =
>     $$
>     $$
>     = (a_1, a_2, a_3, \dots, a_n) + (b_1+c_1, b_2+c_2, b_3+c_3, \dots, b_n+c_n) =
>     $$
>     $$
>     = (a_1, a_2, a_3, \dots, a_n) + [(b_1, b_2, b_3, \dots, b_n) + (c_1, c_2, c_3, \dots, c_n)]
>     $$
>     Infatti sulle varie componenti (in $R$) vale la proprietà associativa dell'addizione
>
>   - $+$ possiede l'elemento neutro: infatti esiste l'elemento $(0, 0, 0, \dots, 0)$ tale che per ogni elemento $(a_1, a_2, a_3, \dots, a_n)$ di $R^3$ abbiamo:
>     $$
>     (0, 0, 0, \dots, 0) + (a_1, a_2, a_3, \dots, a_n) =
>     $$
>     $$
>     = (0+a_1, 0+a_2, 0+a_3, \dots, 0+a_n) =
>     $$
>     $$
>     = (a_1+0, a_2+0, a_3+0, \dots, a_n+0) =
>     $$
>     $$
>     = (a_1, a_2, a_3, \dots, a_n) + (0, 0, 0, \dots, 0)
>     $$
>     Questo perché sulle componenti l'addizione è commutativa
>
>   - ogni elemento $(a_1, a_2, a_3, \dots, a_n)$ di $R^n$ possiede in $+$ l'elemento simmetrico $(-a_1, -a_2, -a_3, \dots, -a_n)$ tale che:
>     $$
>     (a_1, a_2, a_3, \dots, a_n) + (-a_1, -a_2, -a_3, \dots, -a_n) =
>     $$
>     $$
>     = (a_1-a_1, a_2-a_2, a_3-a_3, \dots, a_n-a_n) = (0, 0, 0, \dots, 0)
>     $$
>     Infatti dato su una componente un numero reale basta considerare lo stesso numero con segno opposto
>
> Quindi $(R^n, +)$ è un gruppo; inoltre tale gruppo è commutativo perché presi comunque due elementi $(a_1, a_2, a_3, \dots, a_n)$ e $(b_1, b_2, b_3, \dots, b_n)$ di $R^n$ vale sempre:
> $$
> (a_1, a_2, a_3, \dots, a_n) + (b_1, b_2, b_3, \dots, b_n) =
> $$
> $$
> = (a_1+b_1, a_2+b_2, a_3+b_3, \dots, a_n+b_n) =
> $$
> $$
> = (b_1+a_1, b_2+a_2, b_3+a_3, \dots, b_n+a_n) =
> $$
> $$
> = (b_1, b_2, b_3, \dots, b_n) + (a_1, a_2, a_3, \dots, a_n)
> $$
> infatti su una componente posso applicare la legge commutativa valida in $R$
>
> - Mostriamo la commutatività del prodotto scalare (che coincide col prodotto ordinario in $R$):
>   $$
>   x \cdot (a_1, a_2, a_3, \dots, a_n) = (x \cdot a_1, x \cdot a_2, x \cdot a_3, \dots, x \cdot a_n) =
>   $$
>   $$
>   = (a_1 \cdot x, a_2 \cdot x, a_3 \cdot x, \dots, a_n \cdot x) = (a_1, a_2, a_3, \dots, a_n) \cdot x
>   $$
>   Il prodotto ordinario in $R$ è commutativo, quindi...
>
> - Mostro la proprietà distributiva della moltiplicazione scalare rispetto all'addizione vettoriale:
>   $$
>   x \cdot [(a_1, a_2, a_3, \dots, a_n) + (b_1, b_2, b_3, \dots, b_n)] =
>   $$
>   $$
>   = x \cdot (a_1+b_1, a_2+b_2, a_3+b_3, \dots, a_n+b_n) =
>   $$
>   $$
>   = [x \cdot (a_1+b_1), x \cdot (a_2+b_2), x \cdot (a_3+b_3), \dots, x \cdot (a_n+b_n)] =
>   $$
>   $$
>   = (xa_1+xb_1, xa_2+xb_2, xa_3+xb_3, \dots, xa_n+xb_n) =
>   $$
>   $$
>   = (a_1x+b_1x, a_2x+b_2x, a_3x+b_3x, \dots, a_nx+b_nx) =
>   $$
>   $$
>   = (b_1x+a_1x, b_2x+a_2x, b_3x+a_3x, \dots, b_nx+a_nx) =
>   $$
>   $$
>   = (b_1x, b_2x, b_3x, \dots, b_nx) + (a_1x, a_2x, a_3x, \dots, a_nx) =
>   $$
>   $$
>   = (xb_1, xb_2, xb_3, \dots, xb_n) + (xa_1, xa_2, xa_3, \dots, xa_n) =
>   $$
>   $$
>   = x(b_1, b_2, b_3, \dots, b_n) + x(a_1, a_2, a_3, \dots, a_n)
>   $$
>
> - Mostriamola proprietà distributiva della moltiplicazione scalare rispetto all'addizione di scalari:
>   $$
>   x \cdot (y+z) = x \cdot y + x \cdot z
>   $$
>   siamo in $R$ e quindi la proprietà è valida
>
> - Mostriamo la proprietà associativa fra gli scalari:
>   $$
>   x \cdot (y \cdot z) = (x \cdot y) \cdot z
>   $$
>   siamo sempre in $R$ e quindi la proprietà è valida

Quindi $R^n$ è uno spazio vettoriale sul corpo $R$