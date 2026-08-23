# Equazione dell'ellisse riferita ai propri assi

Per trovare l'equazione dell'ellisse consideriamone la definizione: prendiamo un punto generico [$$P(x,y)$$]{.text-red} ed imponiamo che la somma delle distanze di [$$P$$]{.text-red} dai due punti fissi [$$F_1(c,0)$$]{.text-red} ed [$$F_2(-c,0)$$]{.text-red} sia uguale a [$$2a$$]{.text-red}

> Chiamiamo le coordinate orizzontali di $$F$$ con $$+c$$ e $$-c$$, questo perché sviluppando l'equazione avremo bisogno di un'altra lettera (che chiameremo $$b$$) e questa comparirà nell'equazione finale; in questo modo nell'equazione finale avremo le prime due lettere dell'alfabeto: $$a, b$$

$$
\textcolor{red}{PF_1 + PF_2 = 2a}
$$

Applico la formula della distanza fra due punti nel piano ed ottengo

$$
\textcolor{red}{\sqrt{(x-c)^2 + y^2} + \sqrt{(x+c)^2 + y^2} = 2a}
$$

È un' equazione irrazionale quindi isolo una radice

> se lasci prima dell'uguale il radicale con il termine $$x+c$$ alla fine non dovrai cambiare di segno, altrimenti dovrai cambiare di segno

$$
\textcolor{red}{\sqrt{(x+c)^2 + y^2} = 2a - \sqrt{(x-c)^2 + y^2}}
$$

elevo al quadrato da entrambe le parti dell'uguale

$$
\textcolor{red}{x^2 + 2cx + c^2 + y^2 = 4a^2 - 4a\sqrt{(x-c)^2 + y^2} + x^2 - 2cx + c^2 + y^2}
$$

Sommo i termini simili e isolo la radice prima dell'uguale

$$
\textcolor{red}{4a\sqrt{(x-c)^2 + y^2} = 4a^2 - 4cx}
$$

Divido tutti i termini per 4

$$
\textcolor{red}{a\sqrt{(x-c)^2 + y^2} = a^2 - cx}
$$

Elevo a quadrato da entrambe le parti

$$
\textcolor{red}{a^2[x^2 - 2cx + c^2 + y^2] = a^4 - 2a^2cx + c^2x^2}
$$

$$
\textcolor{red}{a^2x^2 - 2a^2cx + a^2c^2 + a^2y^2 = a^4 - 2a^2cx + c^2x^2}
$$

Termini con la $$x$$ e la $$y$$ prima dell'uguale, gli altri dopo l'uguale

$$
\textcolor{red}{a^2x^2 - 2a^2cx + a^2y^2 + 2a^2cx - c^2x^2 = a^4 - a^2c^2}
$$

tolgo i due termini uguali e di segno opposto

$$
\textcolor{red}{a^2x^2 + a^2y^2 - c^2x^2 = a^4 - a^2c^2}
$$

metto in evidenza la $$x^2$$ prima dell'uguale ed $$a^2$$ dopo l'uguale

$$
\textcolor{red}{x^2(a^2 - c^2) + a^2y^2 = a^2(a^2 - c^2)}
$$

ora pongo $$a^2 - c^2 = b^2$$

> posso farlo perché $$a > c$$

$$
\textcolor{red}{b^2x^2 + a^2y^2 = a^2b^2}
$$

divido tutti i termini per $$a^2b^2$$

$$
\textcolor{red}{\frac{b^2x^2}{a^2b^2} + \frac{a^2y^2}{a^2b^2} = \frac{a^2b^2}{a^2b^2}}
$$

Semplifico ed ottengo l'equazione canonica dell'ellisse

$$
\textcolor{blue}{\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1}
$$