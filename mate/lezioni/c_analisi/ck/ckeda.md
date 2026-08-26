# esercizio

Calcolare l'area della regione di piano compresa fra la curva $y = \frac{1}{x}$ e l'asse delle $x$ tra gli estremi $0$ e $1$.

Facciamo la rappresentazione grafica dell'area cercata ricordando che la funzione $y = \frac{1}{x}$ è l'iperbole equilatera riferita ai propri assi.

L'area cercata è quella evidenziata;
Faremo:

$$
\textcolor{blue}{\int_{0}^{1} \frac{1}{x} \, dx =}
$$

Sorge un problema: per $x = 0$ la funzione $y = \frac{1}{x}$ non è definita e quindi dovremo fare

$$
\textcolor{blue}{\lim_{a \to 0} \int_{a}^{1} \frac{1}{x} \, dx =}
$$

siccome l'integrale di $\frac{1}{x}$ vale $\log x$ (logaritmo naturale di $x$) avremo:

$$
\textcolor{blue}{\lim_{a \to 0} \left[ \log x \right]_{a}^{1} = \log 1 - \lim_{a \to 0} \log a =}
$$

$$
\textcolor{blue}{= 0 - (-\infty) = 0 + \infty = +\infty}
$$

L'area compresa nella regione in questo caso è infinita.