# [Nor]{.text-red}

Consideriamo la composizione di una porta OR con una porta NOT; la sua uscita è il contrario della porta OR, cioè indicando con $1$ il passaggio di corrente e con $0$ il non passaggio avremo:

| $a$ | $b$ | $a + b$ | $(a + b)'$ |
| :---: | :---: | :---: | :---: |
| $\textcolor{red}{0}$ | $\textcolor{red}{0}$ | $\textcolor{red}{0}$ | $\textcolor{red}{1}$ |
| $\textcolor{red}{0}$ | $\textcolor{red}{1}$ | $\textcolor{red}{1}$ | $\textcolor{red}{0}$ |
| $\textcolor{red}{1}$ | $\textcolor{red}{0}$ | $\textcolor{red}{1}$ | $\textcolor{red}{0}$ |
| $\textcolor{red}{1}$ | $\textcolor{red}{1}$ | $\textcolor{red}{1}$ | $\textcolor{red}{0}$ |

> **Nota:** ricordo ancora che la somma (il prodotto indicato nella pagina precedente) non ha nulla a che fare con le normali operazioni di somma (di prodotto) ma è solo un'operazione definita nell'algebra binaria di Boole che indichiamo con $+$ ($\cdot$) solo per comodità.

Questo, sostituendo $0$ con **FALSO** e $1$ con **VERO**, corrisponde alla tavola di verità di negazione della [disgiunzione inclusiva](../../k/kb/kbc.html).

| $a$ | $b$ | $a + b$ | $(a + b)'$ |
| :---: | :---: | :---: | :---: |
| $p$ | $q$ | $p \lor q$ | $\overline{p \lor q}$ |
| $\textcolor{red}{f}$ | $\textcolor{red}{f}$ | $\textcolor{red}{f}$ | $\textcolor{red}{v}$ |
| $\textcolor{red}{f}$ | $\textcolor{red}{v}$ | $\textcolor{red}{v}$ | $\textcolor{red}{f}$ |
| $\textcolor{red}{v}$ | $\textcolor{red}{f}$ | $\textcolor{red}{v}$ | $\textcolor{red}{f}$ |
| $\textcolor{red}{v}$ | $\textcolor{red}{v}$ | $\textcolor{red}{v}$ | $\textcolor{red}{f}$ |

Tale circuito in informatica viene detto **porta logica NOR** o semplicemente **NOR** ed è tale che il valore in uscita è $1$ solamente se entrambi gli ingressi sono $0$. Per indicarla si usa il simbolo (notare il tondino all'uscita che significa la negazione).