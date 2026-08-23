# [esercizio]{.text-red}

Risolvere la seguente equazione:

$$
\textcolor{blue}{\frac{x - a}{x + a} = 3 + \frac{x + a}{a - x}}
$$

Intanto osserviamo l'equazione: abbiamo ai denominatori $$x+a$$ ed $$a-x$$, conviene scrivere $$a+x$$ invece di $$x+a$$ essendo la stessa cosa.

$$
\textcolor{blue}{\frac{x - a}{a + x} = 3 + \frac{x + a}{a - x}}
$$

È un' [equazione fratta]{.text-blue} e, contemporaneamente, un' [equazione letterale]{.text-blue}.
Prima di risolverla dobbiamo porre le condizioni di realtà:

$$
\textcolor{red}{C.R.}
$$

$$
\textcolor{red}{a + x \neq 0 \implies x \neq -a}
$$

$$
\textcolor{red}{a - x \neq 0 \implies x \neq a}
$$

> **Nota:** Cioè se troveremo come soluzione $$x=a$$ o $$x=-a$$ diremo che l'equazione è impossibile.

Ora possiamo fare il minimo comune multiplo e poi semplificarlo:

$$
\textcolor{blue}{\text{m.c.m.} = (a+x)(a-x)}
$$

$$
\textcolor{blue}{\frac{(x-a)(a-x)}{(a+x)(a-x)} = \frac{3(a+x)(a-x) + (x+a)(a+x)}{(a+x)(a-x)}}
$$

O meglio, ricordando che $$(a-x) = -(x-a)$$:

$$
\textcolor{blue}{\frac{-(x-a)^2}{(a+x)(a-x)} = \frac{3(a+x)(a-x) + (x+a)^2}{(a+x)(a-x)}}
$$

Elimino i denominatori.

> Devo moltiplicare da entrambe le parti per $$(a+x)(a-x)$$; posso farlo perché ho posto che sono diversi da zero.

$$
\textcolor{blue}{-(x-a)^2 = 3(a+x)(a-x) + (x+a)^2}
$$

Eseguo i calcoli, prima i prodotti notevoli:

$$
\textcolor{blue}{-(x^2 - 2ax + a^2) = 3(a^2 - x^2) + x^2 + 2ax + a^2}
$$

Poi moltiplico e faccio cadere le parentesi:

$$
\textcolor{blue}{-x^2 + 2ax - a^2 = 3a^2 - 3x^2 + x^2 + 2ax + a^2}
$$

Conviene portare tutto prima dell'uguale:

$$
\textcolor{blue}{-x^2 + 2ax - a^2 - 3a^2 + 3x^2 - x^2 - 2ax - a^2 = 0}
$$

$$
\textcolor{blue}{x^2 - 5a^2 = 0}
$$

Porto il termine noto dopo l'uguale:

$$
\textcolor{blue}{x^2 = 5a^2}
$$

Applico la radice da entrambe le parti dell'uguale (il più o meno lo mettiamo sempre solo davanti al secondo termine):

$$
\textcolor{blue}{\sqrt{x^2} = \pm \sqrt{5a^2}}
$$

Estraggo $$a$$ dalla radice:

$$
\textcolor{blue}{x = \pm a\sqrt{5}}
$$

Ho quindi le due soluzioni:

$$
\textcolor{red}{x_1 = -a\sqrt{5}} \quad \textcolor{red}{x_2 = +a\sqrt{5}}
$$

Per finire, siccome abbiamo delle soluzioni letterali, dobbiamo porre che le soluzioni trovate rispettino le condizioni di realtà: quindi dovrà essere:

$$
\textcolor{red}{-a\sqrt{5} \neq -a \implies a \neq 0}
$$

$$
\textcolor{red}{-a\sqrt{5} \neq a \implies a \neq 0}
$$

$$
\textcolor{red}{a\sqrt{5} \neq -a \implies a \neq 0}
$$

$$
\textcolor{red}{a\sqrt{5} \neq a \implies a \neq 0}
$$

Quindi le soluzioni sono accettabili se $$a$$ è diverso da zero.