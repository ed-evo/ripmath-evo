# [Calcoli]{.text-red}

Calcoliamo il valore del determinante

$$
\textcolor{red}{
\begin{vmatrix}
1 & 1 & -1 \\
1 & -2 & 1 \\
5 & -1 & -1
\end{vmatrix}
}
$$

Applichiamo la regola di Sarrus riportando la prima e la seconda colonna

$$
\begin{vmatrix}
1 & 1 & -1 \\
1 & -2 & 1 \\
5 & -1 & -1
\end{vmatrix}
\begin{matrix}
1 & 1 \\
1 & -2 \\
5 & -1
\end{matrix}
$$

Moltiplico prima gli elementi della diagonale principale e delle due diagonali parallele

$$
\begin{vmatrix}
\textcolor{magenta}{1} & 1 & -1 \\
1 & \textcolor{magenta}{-2} & 1 \\
5 & -1 & \textcolor{magenta}{-1}
\end{vmatrix}
\begin{matrix}
1 & 1 \\
\textcolor{blue}{1} & -2 \\
\textcolor{red}{5} & \textcolor{blue}{-1}
\end{matrix}
= \textcolor{magenta}{1 \cdot (-2) \cdot (-1)} + \textcolor{red}{1 \cdot 1 \cdot 5} + \textcolor{blue}{(-1) \cdot 1 \cdot (-1)} = 2 + 5 + 1 = 8
$$

Moltiplico poi gli elementi della diagonale secondaria e delle due diagonali parallele

$$
\begin{vmatrix}
1 & 1 & \textcolor{orange}{-1} \\
1 & \textcolor{orange}{-2} & \textcolor{green}{1} \\
\textcolor{orange}{5} & \textcolor{green}{-1} & \textcolor{magenta}{-1}
\end{vmatrix}
\begin{matrix}
\textcolor{green}{1} & \textcolor{magenta}{1} \\
\textcolor{magenta}{1} & -2 \\
5 & -1
\end{matrix}
= \textcolor{orange}{(-1) \cdot (-2) \cdot 5} + \textcolor{green}{1 \cdot 1 \cdot (-1)} + \textcolor{magenta}{1 \cdot 1 \cdot (-1)} = 10 - 1 - 1 = 8
$$

Adesso faccio la differenza fra i due valori trovati ed ottengo il valore del determinante

$$
\textcolor{red}{
\begin{vmatrix}
1 & 1 & 1 \\
1 & -2 & -1 \\
5 & -1 & -1
\end{vmatrix}
= 8 - 8 = 0
}
$$