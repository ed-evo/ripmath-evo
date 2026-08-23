# Nand

Consideriamo la composizione di una porta and con una porta not, la sua uscita è il contrario della porta and cioè indicando con $$1$$ il passaggio di corrente e con $$0$$ il non passaggio avremo

| $$a$$ | $$b$$ | $$a \cdot b$$ | $$(a \cdot b)'$$ |
| :---: | :---: | :---: | :---: |
| $$\textcolor{red}{0}$$ | $$\textcolor{red}{0}$$ | $$\textcolor{red}{0}$$ | $$\textcolor{red}{1}$$ |
| $$\textcolor{red}{0}$$ | $$\textcolor{red}{1}$$ | $$\textcolor{red}{0}$$ | $$\textcolor{red}{1}$$ |
| $$\textcolor{red}{1}$$ | $$\textcolor{red}{0}$$ | $$\textcolor{red}{0}$$ | $$\textcolor{red}{1}$$ |
| $$\textcolor{red}{1}$$ | $$\textcolor{red}{1}$$ | $$\textcolor{red}{1}$$ | $$\textcolor{red}{0}$$ |

> **Nota:** Ricordo ancora che il prodotto (la somma indicata nella pagina successiva) non ha nulla a che fare con le normali operazioni di prodotto (di somma) ma è solo un'operazione definita nell'algebra binaria di Boole che indichiamo con $$\cdot$$ ($$+$$) solo per comodità.

Questo, sostituendo $$0$$ con **FALSO** ed $$1$$ con **VERO** corrisponde alla tavola di verità di negazione della [congiunzione logica](../../k/kb/kbb.html)

| $$a$$ | $$b$$ | $$a \cdot b$$ | $$(a \cdot b)'$$ |
| :---: | :---: | :---: | :---: |
| $$p$$ | $$q$$ | $$p \land q$$ | $$\overline{p \land q}$$ |
| $$\textcolor{red}{f}$$ | $$\textcolor{red}{f}$$ | $$\textcolor{red}{f}$$ | $$\textcolor{red}{v}$$ |
| $$\textcolor{red}{f}$$ | $$\textcolor{red}{v}$$ | $$\textcolor{red}{f}$$ | $$\textcolor{red}{v}$$ |
| $$\textcolor{red}{v}$$ | $$\textcolor{red}{f}$$ | $$\textcolor{red}{f}$$ | $$\textcolor{red}{v}$$ |
| $$\textcolor{red}{v}$$ | $$\textcolor{red}{v}$$ | $$\textcolor{red}{v}$$ | $$\textcolor{red}{f}$$ |

Tale circuito in informatica viene detto **porta logica nand** o semplicemente **nand** ed è tale che il valore in uscita è $$0$$ solamente se entrambi gli ingressi sono $$1$$. Per indicarla si usa il simbolo (notare il tondino all'uscita che significa la negazione).