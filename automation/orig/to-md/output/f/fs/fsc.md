# [Soluzione algebrica]{.text-red}

È possibile risolvere il problema della sezione aurea in modo algebrico: lo faremo in questa pagina:

Chiamiamo $$a$$ la lunghezza del segmento e chiamiamo $$x$$ la misura della sezione aurea del segmento: avremo

[$$\overline{AB} = a$${.text-blue}]
[$$\overline{AC} = x$${.text-blue}]
[$$\overline{BC} = a - x$${.text-blue}]

quindi la proporzione

[$$AB : AC = AC : CB$${.text-red}]

diventa

[$$a : x = x : (a - x)$${.text-red}]

sviluppo la proporzione con la [proprietà fondamentale](../fo/foca.html)

[$$x^2 = a \cdot (a - x)$${.text-red}]

[$$x^2 = a^2 - ax$${.text-red}]

[$$x^2 + ax - a^2 = 0$${.text-red}]

È un'equazione di secondo grado: la risolvo ed ottengo ([Calcoli](fsca.html)):

$$
\textcolor{red}{x_1 = \frac{a(+\sqrt{5} - 1)}{2}}
$$

$$
\textcolor{red}{x_2 = \frac{a(-\sqrt{5} - 1)}{2}}
$$

Trattandosi di un problema geometrico la soluzione $$x_2$$ è da scartare perché non abbiamo segmenti negativi (nella geometria euclidea), quindi:

$$
\textcolor{blue}{\overline{AC} = x = \frac{a(\sqrt{5} - 1)}{2}}
$$

> **Nota:** la radice di $$5$$ è un numero decimale illimitato non periodico (reale non razionale)