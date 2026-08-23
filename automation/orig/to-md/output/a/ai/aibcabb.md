Devo calcolare il valore del determinante:

$$
\begin{vmatrix}
1 & 1 & 0 & 0 & 2 \\
0 & 1 & 1 & 0 & 3 \\
0 & 0 & 1 & 1 & 0 \\
0 & 0 & 0 & 1 & 3 \\
-1 & 0 & 0 & 0 & 2
\end{vmatrix}
$$

[Sviluppo secondo la prima colonna]{.text-red}
Il primo termine della colonna ha posto $$a_{1,1}$$, cioè prima riga e prima colonna, quindi è di posto pari ($$1+1=2$$) e quindi mantiene il segno.
Il quinto termine della prima colonna ha posto $$a_{5,1}$$, cioè quinta riga e prima colonna, quindi è di posto pari ($$5+1=6$$) e quindi mantiene il segno.
Dove c'è zero non devo sviluppare perché zero per numero uguale zero.

$$
\begin{vmatrix}
\textcolor{blue}{1} & 1 & 0 & 0 & 2 \\
\textcolor{blue}{0} & 1 & 1 & 0 & 3 \\
\textcolor{blue}{0} & 0 & 1 & 1 & 0 \\
\textcolor{blue}{0} & 0 & 0 & 1 & 3 \\
\textcolor{blue}{-1} & 0 & 0 & 0 & 2
\end{vmatrix} = \textcolor{blue}{1} \cdot \begin{vmatrix}
1 & 1 & 0 & 3 \\
0 & 1 & 1 & 0 \\
0 & 0 & 1 & 3 \\
0 & 0 & 0 & 2
\end{vmatrix} + (\textcolor{blue}{-1}) \cdot \begin{vmatrix}
1 & 0 & 0 & 2 \\
1 & 1 & 0 & 3 \\
0 & 1 & 1 & 0 \\
0 & 0 & 1 & 3
\end{vmatrix} =
$$

Devo calcolare i due determinanti dopo l'uguale:

**Calcolo il primo:**

$$
\begin{vmatrix}
1 & 1 & 0 & 3 \\
0 & 1 & 1 & 0 \\
0 & 0 & 1 & 3 \\
0 & 0 & 0 & 2
\end{vmatrix} =
$$

Sviluppo secondo la prima colonna perché ho solo un termine diverso da zero; il termine ha posto $$1,1$$, cioè prima riga e prima colonna ($$1+1=2$$), posto pari.

$$
\begin{vmatrix}
\textcolor{blue}{1} & 1 & 0 & 3 \\
\textcolor{blue}{0} & 1 & 1 & 0 \\
\textcolor{blue}{0} & 0 & 1 & 3 \\
\textcolor{blue}{0} & 0 & 0 & 2
\end{vmatrix} = \textcolor{blue}{1} \cdot \begin{vmatrix}
\textcolor{green}{1} & 1 & 0 \\
\textcolor{green}{0} & 1 & 3 \\
\textcolor{green}{0} & 0 & 2
\end{vmatrix}
$$

Senza applicare Sarrus sviluppo secondo la prima colonna:

$$
= \textcolor{blue}{1} \cdot \textcolor{green}{1} \cdot \begin{vmatrix}
1 & 3 \\
0 & 2
\end{vmatrix} = \textcolor{blue}{1} \cdot \textcolor{green}{1} \cdot 2 = 2
$$

***

**Calcolo il secondo:**

$$
\begin{vmatrix}
1 & 0 & 0 & 2 \\
1 & 1 & 0 & 3 \\
0 & 1 & 1 & 0 \\
0 & 0 & 1 & 3
\end{vmatrix} =
$$

Sviluppo secondo la prima colonna. Il primo termine (prima riga prima colonna) ha posto $$1+1=2$$ pari, il secondo termine (seconda riga prima colonna) ha posto $$2+1=3$$ dispari.

$$
\begin{vmatrix}
\textcolor{blue}{1} & 0 & 0 & 2 \\
\textcolor{blue}{1} & 1 & 0 & 3 \\
\textcolor{blue}{0} & 1 & 1 & 0 \\
\textcolor{blue}{0} & 0 & 1 & 3
\end{vmatrix} = \textcolor{blue}{1} \cdot \begin{vmatrix}
\textcolor{green}{1} & 0 & 3 \\
1 & 1 & 0 \\
0 & 1 & 3
\end{vmatrix} + \textcolor{blue}{(-1)} \cdot \begin{vmatrix}
\textcolor{green}{0} & 0 & 2 \\
1 & 1 & 0 \\
0 & 1 & 3
\end{vmatrix} =
$$

Senza usare la regola di Sarrus nel primo determinante sviluppo secondo la prima riga ed anche nel secondo:

$$
= \textcolor{blue}{1} \cdot \left[ \textcolor{green}{1} \cdot \begin{vmatrix}
1 & 0 \\
1 & 3
\end{vmatrix} + \textcolor{green}{3} \cdot \begin{vmatrix}
1 & 1 \\
0 & 1
\end{vmatrix} \right] + \textcolor{blue}{(-1)} \cdot \textcolor{green}{2} \begin{vmatrix}
1 & 1 \\
0 & 1
\end{vmatrix} =
$$

$$
= 1 \cdot [1 \cdot 3 + 3 \cdot 1] - 2 \cdot 1 = 6 - 2 = 4
$$

Quindi il mio determinante vale:

$$
\begin{vmatrix}
\textcolor{blue}{1} & 1 & 0 & 0 & 2 \\
\textcolor{blue}{0} & 1 & 1 & 0 & 3 \\
\textcolor{blue}{0} & 0 & 1 & 1 & 0 \\
\textcolor{blue}{0} & 0 & 0 & 1 & 3 \\
\textcolor{blue}{-1} & 0 & 0 & 0 & 2
\end{vmatrix} = \textcolor{blue}{1} \cdot \begin{vmatrix}
1 & 1 & 0 & 3 \\
0 & 1 & 1 & 0 \\
0 & 0 & 1 & 3 \\
0 & 0 & 0 & 2
\end{vmatrix} + (\textcolor{blue}{-1}) \cdot \begin{vmatrix}
1 & 0 & 0 & 2 \\
1 & 1 & 0 & 3 \\
0 & 1 & 1 & 0 \\
0 & 0 & 1 & 3
\end{vmatrix} = 1 \cdot 2 - 1 \cdot 4 = -2
$$