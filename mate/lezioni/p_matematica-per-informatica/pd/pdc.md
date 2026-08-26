# Somma logica

| $+$ | $0$ | $1$ |
| :---: | :---: | :---: |
| $0$ | $0$ | $1$ |
| $1$ | $1$ | $1$ |

La somma in un'algebra di Boole può essere pensata come una coppia di interruttori in parallelo, cioè tali che la corrente possa percorrere il primo ed il secondo cammino prima di ricongiungersi.

Infatti indicando con $1$ il passaggio di corrente e con $0$ il non passaggio avremo:

$$
0 + 0 = 0
$$

$$
0 + 1 = 1
$$

$$
1 + 0 = 1
$$

$$
1 + 1 = 1
$$

Questo, sostituendo $0$ con **FALSO** e $1$ con **VERO** corrisponde alla tavola di verità per la disgiunzione inclusiva.

> **Nota:** Ti ricordo che, nell'algebra di Boole, posso chiamare gli elementi indifferentemente $0$ e $1$ oppure **F** e **V** e questo ci permetterà di usare il computer oltre che per fare calcoli numerici anche per fare calcoli logici, con tutte le possibilità che ciò offre.

| $a$ | $b$ | $a + b$ |
| :---: | :---: | :---: |
| $p$ | $q$ | $p \lor q$ |
| $[\textcolor{red}{f}]{.text-red}$ | $[\textcolor{red}{f}]{.text-red}$ | $[\textcolor{red}{f}]{.text-red}$ |
| $[\textcolor{red}{f}]{.text-red}$ | $[\textcolor{red}{v}]{.text-red}$ | $[\textcolor{red}{v}]{.text-red}$ |
| $[\textcolor{red}{v}]{.text-red}$ | $[\textcolor{red}{f}]{.text-red}$ | $[\textcolor{red}{v}]{.text-red}$ |
| $[\textcolor{red}{v}]{.text-red}$ | $[\textcolor{red}{v}]{.text-red}$ | $[\textcolor{red}{v}]{.text-red}$ |

Tale circuito in informatica viene detto **porta logica or** o semplicemente **or** ed è tale che il valore in uscita è $0$ solamente se entrambi gli ingressi sono $0$, cioè per avere l'uscita $1$ deve essere $1$ o il primo ingresso o il secondo oppure tutti e due.