# [Calcoli]{.text-red}

Basta calcolare il determinante sopra perché quello al denominatore l'abbiamo già calcolato e vale $-14$.

Calcoliamo il valore del determinante

$$
\textcolor{red}{\begin{vmatrix} 1 & 1 & 6 \\ 2 & 1 & 1 \\ 2 & -3 & -1 \end{vmatrix}}
$$

Applichiamo la regola di Sarrus riportando la prima e la seconda colonna

$$
\begin{vmatrix} 1 & 1 & 6 \\ 2 & 1 & 1 \\ 2 & -3 & -1 \end{vmatrix} \begin{matrix} 1 & 1 \\ 2 & 1 \\ 2 & -3 \end{matrix}
$$

Moltiplico prima gli elementi della diagonale principale e delle due diagonali parallele

$$
\begin{vmatrix} \textcolor{fuchsia}{1} & \textcolor{red}{1} & \textcolor{blue}{6} \\ 2 & \textcolor{fuchsia}{1} & \textcolor{red}{1} \\ 2 & -3 & \textcolor{fuchsia}{-1} \end{vmatrix} \begin{matrix} 1 & 1 \\ \textcolor{blue}{2} & 1 \\ \textcolor{red}{2} & \textcolor{blue}{-3} \end{matrix}
$$

$$
= \textcolor{fuchsia}{1 \cdot 1 \cdot (-1)} + \textcolor{red}{1 \cdot 1 \cdot 2} + \textcolor{blue}{6 \cdot 2 \cdot (-3)} = -1 + 2 - 36 = -35
$$

Moltiplico poi gli elementi della diagonale secondaria e delle due diagonali parallele

$$
\begin{vmatrix} 1 & 1 & \textcolor{orange}{6} \\ 2 & \textcolor{orange}{1} & \textcolor{green}{1} \\ \textcolor{orange}{2} & \textcolor{green}{-3} & \textcolor{purple}{-1} \end{vmatrix} \begin{matrix} \textcolor{green}{1} & \textcolor{purple}{1} \\ \textcolor{purple}{2} & 1 \\ 2 & -3 \end{matrix}
$$

$$
= \textcolor{orange}{6 \cdot 1 \cdot 2} + \textcolor{green}{1 \cdot 1 \cdot (-3)} + \textcolor{purple}{1 \cdot 2 \cdot (-1)} = 12 - 3 - 2 = 7
$$

Adesso faccio la differenza fra i due valori trovati ed ottengo il valore del determinante

$$
\textcolor{red}{\begin{vmatrix} 1 & 1 & 6 \\ 2 & 1 & 1 \\ 2 & -3 & -1 \end{vmatrix} = -35 - 7 = -42}
$$