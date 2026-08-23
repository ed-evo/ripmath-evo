# Calcoli

Calcoliamo il valore del determinante al numeratore (io faccio tutti i passaggi, tu puoi abbreviare)

$$
\begin{vmatrix}
6 & 1 & 1 \\
1 & 1 & -1 \\
-1 & -3 & 1
\end{vmatrix}
$$

Applichiamo la regola di Sarrus riportando la prima e la seconda colonna

$$
\begin{vmatrix}
6 & 1 & 1 \\
1 & 1 & -1 \\
-1 & -3 & 1
\end{vmatrix}
\begin{matrix}
6 & 1 \\
1 & 1 \\
-1 & -3
\end{matrix}
$$

Moltiplico prima gli elementi della diagonale principale e delle due diagonali parallele

$$
\begin{vmatrix}
\textcolor{fuchsia}{6} & \textcolor{red}{1} & \textcolor{blue}{1} \\
1 & \textcolor{fuchsia}{1} & \textcolor{red}{-1} \\
-1 & -3 & \textcolor{fuchsia}{1}
\end{vmatrix}
\begin{matrix}
6 & 1 \\
\textcolor{blue}{1} & 1 \\
\textcolor{red}{-1} & \textcolor{blue}{-3}
\end{matrix}
= \textcolor{fuchsia}{6 \cdot 1 \cdot 1} + \textcolor{red}{1 \cdot (-1) \cdot (-1)} + \textcolor{blue}{1 \cdot 1 \cdot (-3)} = 6 + 1 - 3 = 4
$$

Moltiplico poi gli elementi della diagonale secondaria e delle due diagonali parallele

$$
\begin{vmatrix}
6 & 1 & \textcolor{orange}{1} \\
1 & \textcolor{orange}{1} & \textcolor{green}{-1} \\
\textcolor{orange}{-1} & \textcolor{green}{-3} & \textcolor{purple}{1}
\end{vmatrix}
\begin{matrix}
\textcolor{green}{6} & \textcolor{purple}{1} \\
\textcolor{purple}{1} & 1 \\
-1 & -3
\end{matrix}
= \textcolor{orange}{1 \cdot 1 \cdot (-1)} + \textcolor{green}{6 \cdot (-1) \cdot (-3)} + \textcolor{purple}{1 \cdot 1 \cdot 1} = -1 + 18 + 1 = 18
$$

Adesso faccio la differenza fra i due valori trovati ed ottengo il valore del determinante

$$
\begin{vmatrix}
6 & 1 & 1 \\
1 & 1 & -1 \\
-1 & -3 & 1
\end{vmatrix} = 4 - 18 = -14
$$

Calcoliamo ora il valore del secondo determinante (determinante dei coefficienti)

$$
\begin{vmatrix}
1 & 1 & 1 \\
2 & 1 & -1 \\
2 & -3 & 1
\end{vmatrix}
$$

Applichiamo la regola di Sarrus riportando la prima e la seconda colonna

$$
\begin{vmatrix}
1 & 1 & 1 \\
2 & 1 & -1 \\
2 & -3 & 1
\end{vmatrix}
\begin{matrix}
1 & 1 \\
2 & 1 \\
2 & -3
\end{matrix}
$$

Moltiplico prima gli elementi della diagonale principale e delle due diagonali parallele

$$
\begin{vmatrix}
\textcolor{fuchsia}{1} & \textcolor{red}{1} & \textcolor{blue}{1} \\
2 & \textcolor{fuchsia}{1} & \textcolor{red}{-1} \\
2 & -3 & \textcolor{fuchsia}{1}
\end{vmatrix}
\begin{matrix}
1 & 1 \\
\textcolor{blue}{2} & 1 \\
\textcolor{red}{2} & \textcolor{blue}{-3}
\end{matrix}
= \textcolor{fuchsia}{1 \cdot 1 \cdot 1} + \textcolor{red}{1 \cdot (-1) \cdot 2} + \textcolor{blue}{1 \cdot 2 \cdot (-3)} = 1 - 2 - 6 = -7
$$

Moltiplico poi gli elementi della diagonale secondaria e delle due diagonali parallele

$$
\begin{vmatrix}
1 & 1 & \textcolor{orange}{1} \\
2 & \textcolor{orange}{1} & \textcolor{green}{-1} \\
\textcolor{orange}{2} & \textcolor{green}{-3} & \textcolor{purple}{1}
\end{vmatrix}
\begin{matrix}
\textcolor{green}{1} & \textcolor{purple}{1} \\
\textcolor{purple}{2} & 1 \\
2 & -3
\end{matrix}
= \textcolor{orange}{1 \cdot 1 \cdot 2} + \textcolor{green}{1 \cdot (-1) \cdot (-3)} + \textcolor{purple}{1 \cdot 2 \cdot 1} = 2 + 3 + 2 = 7
$$

Adesso faccio la differenza fra i due valori trovati ed ottengo il valore del determinante

$$
\begin{vmatrix}
1 & 1 & 1 \\
2 & 1 & -1 \\
2 & -3 & 1
\end{vmatrix} = -7 - 7 = -14
$$