# Dimostrazione della formula per la decomposizione del trinomio

devo dimostrare che vale

$$
\textcolor{red}{ax^2 + bx + c = a(x - x_1)(x - x_2)}
$$

cioè che partendo da

$$
\textcolor{red}{ax^2 + bx + c}
$$

riesco ad arrivare a

$$
\textcolor{red}{a(x - x_1)(x - x_2)}
$$

---

$$
\textcolor{red}{ax^2 + bx + c =}
$$

Per trasformarlo devo mettere in evidenza la $$a$$; ma se $$a$$ non c'è in tutti i termini come si fa a metterla in evidenza? Per metterla in evidenza basta prima farla comparire moltiplicando i termini senza $$a$$ per $$\frac{a}{a}$$ (è come moltiplicarli per $$1$$).

$$
\textcolor{red}{ax^2 + \frac{abx}{a} + \frac{ac}{a} =}
$$

ora posso mettere in evidenza la $$a$$ raccogliendo quella al numeratore

$$
\textcolor{red}{a(x^2 + \frac{bx}{a} + \frac{c}{a}) =}
$$

ora so che

$$
\textcolor{red}{-\frac{b}{a} = x_1 + x_2}
$$

e quindi

$$
\textcolor{red}{\frac{b}{a} = -(x_1 + x_2)}
$$

inoltre vale

$$
\textcolor{red}{\frac{c}{a} = x_1 \cdot x_2}
$$

Sostituisco:

$$
\textcolor{red}{= a[x^2 - (x_1 + x_2)x + x_1 \cdot x_2] =}
$$

Eseguo la moltiplicazione

$$
\textcolor{red}{= a(x^2 - x_1x - x_2x + x_1 \cdot x_2) =}
$$

Scompongo dentro parentesi (raccoglimento parziale, tra i primi due raccolgo $$x$$ e tra il terzo e il quarto raccolgo $$-x_2$$)

$$
\textcolor{red}{= a[x(x - x_1) - x_2(x - x_1)] =}
$$

ora raccolgo $$(x - x_1)$$

$$
\textcolor{red}{= a[(x - x_1) \cdot (x - x_2)] =}
$$

tolgo le parentesi quadre

$$
\textcolor{red}{= a(x - x_1) \cdot (x - x_2)}
$$

come volevamo