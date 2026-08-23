# [Calcoli]{.text-red}

Calcoliamo il valore del determinante

$$
\begin{vmatrix}
\textcolor{red}{1} & \textcolor{red}{1} & \textcolor{red}{6} \\
\textcolor{red}{1} & \textcolor{red}{1} & \textcolor{red}{5} \\
\textcolor{red}{1} & \textcolor{red}{-1} & \textcolor{red}{2}
\end{vmatrix}
$$

Applichiamo la regola di Sarrus riportando la prima e la seconda colonna

$$
\begin{vmatrix}
1 & 1 & 6 \\
1 & 1 & 5 \\
1 & -1 & 2
\end{vmatrix}
\begin{matrix}
1 & 1 \\
1 & 1 \\
1 & -1
\end{matrix}
$$

Moltiplico prima gli elementi della diagonale principale e delle due diagonali parallele

$$
\begin{vmatrix}
\textcolor{magenta}{1} & \textcolor{red}{1} & \textcolor{blue}{6} \\
1 & \textcolor{magenta}{1} & \textcolor{red}{5} \\
1 & -1 & \textcolor{magenta}{2}
\end{vmatrix}
\begin{matrix}
1 & 1 \\
\textcolor{blue}{1} & 1 \\
\textcolor{red}{1} & \textcolor{blue}{-1}
\end{matrix}
$$

$$
= \textcolor{magenta}{1 \cdot 1 \cdot 2} + \textcolor{red}{1 \cdot 5 \cdot 1} + \textcolor{blue}{6 \cdot 1 \cdot (-1)} = 2 + 5 - 6 = 1
$$

Moltiplico poi gli elementi della diagonale secondaria e delle due diagonali parallele

$$
\begin{vmatrix}
1 & 1 & \textcolor{orange}{6} \\
1 & \textcolor{orange}{1} & \textcolor{green}{5} \\
\textcolor{orange}{1} & \textcolor{green}{-1} & \textcolor{purple}{2}
\end{vmatrix}
\begin{matrix}
\textcolor{green}{1} & \textcolor{purple}{1} \\
\textcolor{purple}{1} & 1 \\
1 & -1
\end{matrix}
$$

$$
= \textcolor{orange}{6 \cdot 1 \cdot 1} + \textcolor{green}{1 \cdot 5 \cdot (-1)} + \textcolor{purple}{1 \cdot 1 \cdot 2} = 6 - 5 + 2 = 3
$$

Adesso faccio la differenza fra i due valori trovati ed ottengo il valore del determinante

$$
\begin{vmatrix}
\textcolor{red}{1} & \textcolor{red}{1} & \textcolor{red}{6} \\
\textcolor{red}{1} & \textcolor{red}{1} & \textcolor{red}{5} \\
\textcolor{red}{1} & \textcolor{red}{-1} & \textcolor{red}{2}
\end{vmatrix} = \textcolor{red}{1 - 3 = -2}
$$