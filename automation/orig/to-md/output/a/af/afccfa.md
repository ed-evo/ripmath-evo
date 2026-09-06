# <span class="text-red-600">Dimostrazione della formula per la decomposizione del trinomio</span>

> devo dimostrare che vale
> $$
> ax^2 + bx + c = a ( x - x_1)(x - x_2)
> $$
> cioè che partendo da
> $$
> ax^2 + bx + c
> $$
> riesco ad arrivare a
> $$
> a ( x - x_1)(x - x_2)
> $$
>
> ---
>
> $$
> ax^2 + bx + c =
> $$
> Per trasformarlo devo mettere in evidenza la $a$; ma se $a$ non c'è in tutti i termini come si fa a metterla in evidenza? Per metterla in evidenza basta prima farla comparire moltiplicando i termini senza $a$ per $a/a$ (è come moltiplicarli per 1)
> $$
> = ax^2 + \frac{abx}{a} + \frac{ac}{a} =
> $$
> ora posso mettere in evidenza la $a$ raccogliendo quella al numeratore
> $$
> = a(x^2 + \frac{bx}{a} + \frac{c}{a}) =
> $$
> ora so che
> $$
> -b/a = x_1 + x_2
> $$
> e quindi
> $$
> b/a = - (x_1 + x_2)
> $$
> inoltre vale
> $$
> c/a = x_1 \cdot x_2
> $$
> Sostituisco:
> $$
> = a[x^2 - (x_1 + x_2)x + x_1 \cdot x_2] =
> $$
> Eseguo la moltiplicazione
> $$
> = a(x^2 - x_1 x - x_2 x + x_1 \cdot x_2) =
> $$
> Scompongo dentro parentesi (raccoglimento parziale, tra i primi due raccolgo $x$ e tra il terzo e il quarto raccolgo $-x_2$)
> $$
> = a[x(x - x_1) - x_2(x - x_1)] =
> $$
> ora raccolgo $(x - x_1)$
> $$
> = a[(x - x_1) \cdot (x - x_2)] =
> $$
> tolgo le parentesi quadre
> $$
> = a(x - x_1) \cdot (x - x_2)
> $$
> come volevamo

[Pagina iniziale](../../../index.html) | [Indice di algebra](../../a.html) | [Pagina successiva](afccg.html) | [Pagina precedente](afccf.html)