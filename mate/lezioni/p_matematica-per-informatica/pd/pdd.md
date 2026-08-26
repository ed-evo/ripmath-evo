# Prodotto logico

Il prodotto in un'algebra di Boole può essere pensato come una coppia di interruttori in serie, cioè tali che la corrente percorrerà il primo e, successivamente il secondo cammino prima di proseguire nel circuito.

| $\cdot$ | $0$ | $1$ |
| :---: | :---: | :---: |
| $0$ | $0$ | $0$ |
| $1$ | $0$ | $1$ |

Infatti indicando con $1$ il passaggio di corrente e con $0$ il non passaggio avremo:

$$
0 \cdot 0 = 0
$$

$$
0 \cdot 1 = 0
$$

$$
1 \cdot 0 = 0
$$

$$
1 \cdot 1 = 1
$$

Questo, sostituendo $0$ con **FALSO** e $1$ con **VERO** corrisponde alla tavola di verità per la congiunzione logica.

> ti ricordo ancora una volta che, nell'algebra di Boole, posso chiamare gli elementi indifferentemente $0$ e $1$ oppure $F$ e $V$ e questo ci permetterà di usare il computer oltre che per fare calcoli numerici anche per fare calcoli logici, con tutte le possibilità che ciò offre

| $a$ | $b$ | $a \cdot b$ |
| :---: | :---: | :---: |
| $p$ | $q$ | $p \land q$ |
| [f]{.text-red} | [f]{.text-red} | [f]{.text-red} |
| [f]{.text-red} | [v]{.text-red} | [f]{.text-red} |
| [v]{.text-red} | [f]{.text-red} | [f]{.text-red} |
| [v]{.text-red} | [v]{.text-red} | [v]{.text-red} |

Tale circuito in informatica viene detto **porta logica and** o semplicemente **and** ed è tale che il valore in uscita è $1$ solamente se entrambi gli ingressi sono $1$. Per indicarla si usa il simbolo dell'operatore AND.