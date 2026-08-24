# Calcoli

Basta calcolare il determinante al numeratore perché quello sotto l'abbiamo già calcolato e vale $$-14$$. Calcoliamo il valore del determinante

$$
\textcolor{red}{\begin{vmatrix} 1 & 6 & 1 \\ 2 & 1 & -1 \\ 2 & -1 & 1 \end{vmatrix}}
$$

Applichiamo la regola di Sarrus riportando la prima e la seconda colonna

$$
\begin{vmatrix} 1 & 6 & 1 \\ 2 & 1 & -1 \\ 2 & -1 & 1 \end{vmatrix} \begin{matrix} 1 & 6 \\ 2 & 1 \\ 2 & -1 \end{matrix}
$$

Moltiplico prima gli elementi della diagonale principale e delle due diagonali parallele

$$
\begin{vmatrix} \textcolor{magenta}{1} & \textcolor{red}{6} & \textcolor{blue}{1} \\ 2 & \textcolor{magenta}{1} & \textcolor{red}{-1} \\ 2 & -1 & \textcolor{magenta}{1} \end{vmatrix} \begin{matrix} 1 & 6 \\ \textcolor{blue}{2} & 1 \\ \textcolor{red}{2} & \textcolor{blue}{-1} \end{matrix} = \textcolor{magenta}{1 \cdot 1 \cdot 1} + \textcolor{red}{6 \cdot (-1) \cdot 2} + \textcolor{blue}{1 \cdot 2 \cdot (-1)} = 1 - 12 - 2 = -13
$$

Moltiplico poi gli elementi della diagonale secondaria e delle due diagonali parallele

$$
\begin{vmatrix} 1 & 6 & \textcolor{orange}{1} \\ 2 & \textcolor{orange}{1} & \textcolor{green}{-1} \\ \textcolor{orange}{2} & \textcolor{green}{-1} & \textcolor{purple}{1} \end{vmatrix} \begin{matrix} \textcolor{green}{1} & \textcolor{purple}{6} \\ \textcolor{purple}{2} & 1 \\ 2 & -1 \end{matrix} = \textcolor{orange}{1 \cdot 1 \cdot 2} + \textcolor{green}{1 \cdot (-1) \cdot (-1)} + \textcolor{purple}{6 \cdot 2 \cdot 1} = 2 + 1 + 12 = 15
$$

Adesso faccio la differenza fra i due valori trovati ed ottengo il valore del determinante

$$
\textcolor{red}{\begin{vmatrix} 1 & 6 & 1 \\ 2 & 1 & -1 \\ 2 & -1 & 1 \end{vmatrix} = -13 - 15 = -28}
$$