# Equazione canonica dell'iperbole

> canonica significa regolare

Per trovare l'equazione dell'iperbole consideriamone la definizione: prendiamo un punto generico [$P(x,y)$]{.text-red} ed imponiamo che la differenza delle distanze di [$P$]{.text-red} dai due punti fissi [$F_1(c,0)$]{.text-red} ed [$F_2(-c,0)$]{.text-red} sia uguale a [$2a$$]{.text-red}.

> Chiamiamo le coordinate orizzontali di $F$ con $+c$ e $-c$, questo perché sviluppando l'equazione avremo bisogno di un'altra lettera (che chiameremo $b$) e questa comparirà nell'equazione finale; in questo modo nell'equazione finale avremo le prime due lettere dell'alfabeto: $a, b$.

$$
\textcolor{red}{PF_2 - PF_1 = 2a}
$$

Applico la formula della distanza fra due punti nel piano ed ottengo

$$
\textcolor{red}{\sqrt{(x+c)^2 + y^2} - \sqrt{(x-c)^2 + y^2} = 2a}
$$

È un'equazione irrazionale quindi isolo una radice

$$
\textcolor{red}{\sqrt{(x+c)^2 + y^2} = 2a + \sqrt{(x-c)^2 + y^2}}
$$

Elevo al quadrato da entrambe le parti dell'uguale

$$
\textcolor{red}{x^2 + 2cx + c^2 + y^2 = 4a^2 + 4a\sqrt{(x-c)^2 + y^2} + x^2 - 2cx + c^2 + y^2}
$$

Sommo i termini simili e isolo la radice dopo l'uguale

$$
\textcolor{red}{4cx - 4a^2 = 4a\sqrt{(x-c)^2 + y^2}}
$$

Divido tutti i termini per 4

$$
\textcolor{red}{cx - a^2 = a\sqrt{(x-c)^2 + y^2}}
$$

Elevo a quadrato da entrambe le parti

$$
\textcolor{red}{c^2x^2 - 2a^2cx + a^4 = a^2[x^2 - 2cx + c^2 + y^2]}
$$

$$
\textcolor{red}{c^2x^2 - 2a^2cx + a^4 = a^2x^2 - 2a^2cx + a^2c^2 + a^2y^2}
$$

Termini con la $x$ e la $y$ prima dell'uguale, gli altri dopo l'uguale

$$
\textcolor{red}{c^2x^2 - 2a^2cx - a^2x^2 + 2a^2cx - a^2y^2 = a^2c^2 - a^4}
$$

Tolgo i due termini uguali e di segno opposto

$$
\textcolor{red}{c^2x^2 - a^2x^2 - a^2y^2 = a^2c^2 - a^4}
$$

Metto in evidenza la $x^2$ prima dell'uguale ed $a^2$ dopo l'uguale

$$
\textcolor{red}{x^2(c^2 - a^2) - a^2y^2 = a^2(c^2 - a^2)}
$$

Ora pongo $c^2 - a^2 = b^2$ 

> posso farlo perché $c > a$

$$
\textcolor{red}{b^2x^2 - a^2y^2 = a^2b^2}
$$

Divido tutti i termini per $a^2b^2$

$$
\textcolor{red}{\frac{b^2x^2}{a^2b^2} - \frac{a^2y^2}{a^2b^2} = \frac{a^2b^2}{a^2b^2}}
$$

Semplifico ed ottengo l'equazione canonica dell'iperbole

$$
\textcolor{blue}{\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1}
$$