Devo calcolare il valore del determinante:

$$
\begin{vmatrix}
\textcolor{blue}{1} & \textcolor{blue}{1} & \textcolor{blue}{0} & \textcolor{blue}{0} \\
0 & 1 & 1 & 0 \\
1 & 0 & -1 & 0 \\
0 & 1 & 0 & 1
\end{vmatrix}
$$

Mi conviene sviluppare secondo la prima riga perché ho solo due termini diversi da zero.
L'evidenzio in blu.
Il primo termine della riga ha posto $a_{1,1}$, cioè prima riga e prima colonna $1+1=2$, quindi è di posto pari e quindi mantiene il segno.
Il secondo termine della prima riga ha posto $a_{1,2}$, cioè prima riga e seconda colonna $1+2=3$, quindi è di posto dispari e va cambiato di segno.
Dove c'è zero non devo sviluppare perché zero per numero uguale zero.

$$
\begin{vmatrix}
\textcolor{blue}{1} & \textcolor{blue}{1} & \textcolor{blue}{0} & \textcolor{blue}{0} \\
0 & 1 & 1 & 0 \\
1 & 0 & -1 & 0 \\
0 & 1 & 0 & 1
\end{vmatrix} = \textcolor{blue}{1} \cdot \begin{vmatrix}
1 & 1 & \textcolor{green}{0} \\
0 & -1 & \textcolor{green}{0} \\
1 & 0 & \textcolor{green}{1}
\end{vmatrix} - \textcolor{blue}{1} \cdot \begin{vmatrix}
\textcolor{green}{0} & \textcolor{green}{1} & \textcolor{green}{0} \\
1 & -1 & 0 \\
0 & 0 & 1
\end{vmatrix} =
$$

Nel primo determinante dopo l'uguale sviluppo secondo la terza colonna.
Nel secondo determinante sviluppo secondo la prima riga.

$$
= \textcolor{blue}{1} \cdot \textcolor{green}{1} \cdot \begin{vmatrix}
1 & 1 \\
0 & -1
\end{vmatrix} \textcolor{blue}{-1} \cdot \textcolor{green}{(-1)} \cdot \begin{vmatrix}
1 & 0 \\
0 & 1
\end{vmatrix} = 1 \cdot 1 \cdot (-1) - 1 \cdot (-1) \cdot 1 = -1 + 1 = 0
$$