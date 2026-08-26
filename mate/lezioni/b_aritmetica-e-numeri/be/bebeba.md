Risolviamo il sistema

$$
\textcolor{blue}{\begin{cases} e^{iy} = \cos y + i \sin y \\ e^{-iy} = \cos y - i \sin y \end{cases}}
$$

Conviene utilizzare il [metodo di addizione](../../a/ai/aibaab.html)

Sottraggo in verticale e mi sparisce il termine $\cos y$

$$
\textcolor{red}{\begin{array}{r@{\quad}l}
e^{iy} & = \cos y + i \sin y \\
e^{-iy} & = \cos y - i \sin y \\
\hline
e^{iy} - e^{-iy} & = 2i \sin y
\end{array}}
$$

leggiamo a rovescio

$$
\textcolor{red}{2i \sin y = e^{iy} - e^{-iy}}
$$

e, dividendo per $2i$, otteniamo la prima formula di Eulero

$$
\textcolor{blue}{\sin y = \frac{e^{iy} - e^{-iy}}{2i}}
$$

Sommo in verticale e mi sparisce il termine $i \sin y$

$$
\textcolor{red}{\begin{array}{r@{\quad}l}
e^{iy} & = \cos y + i \sin y \\
e^{-iy} & = \cos y - i \sin y \\
\hline
e^{iy} + e^{-iy} & = 2 \cos y
\end{array}}
$$

leggiamo a rovescio

$$
\textcolor{red}{2 \cos y = e^{iy} + e^{-iy}}
$$

e, dividendo per $2$, otteniamo la seconda formula di Eulero

$$
\textcolor{blue}{\cos y = \frac{e^{iy} + e^{-iy}}{2}}
$$