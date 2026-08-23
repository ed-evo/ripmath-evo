Devo calcolare il valore del determinante:

$$
\begin{vmatrix}
0 & 1 & 1 & -1 \\
1 & -2 & 0 & 1 \\
3 & 2 & -1 & -1 \\
\textcolor{blue}{1} & \textcolor{blue}{0} & \textcolor{blue}{-1} & \textcolor{blue}{0}
\end{vmatrix}
$$

Mi conviene sviluppare secondo l'ultima riga perché ho solo due termini diversi da zero. L'evidenzio in blu.

Il primo termine della riga ha posto $$a_{4,1}$$, cioè quarta riga e prima colonna quindi è di posto dispari e quindi va cambiato di segno.

Il terzo termine della riga ha posto $$a_{4,3}$$, cioè quarta riga e terza colonna quindi è di posto dispari e quindi va cambiato di segno.

Dove c'è zero non devo sviluppare perché zero per numero uguale zero.

$$
\begin{vmatrix}
0 & 1 & 1 & -1 \\
1 & -2 & 0 & 1 \\
3 & 2 & -1 & -1 \\
\textcolor{blue}{1} & 0 & \textcolor{blue}{-1} & 0
\end{vmatrix} = \textcolor{red}{- \textcolor{blue}{1}} \cdot 
\begin{vmatrix}
1 & 1 & -1 \\
-2 & 0 & 1 \\
2 & -1 & -1
\end{vmatrix} - (\textcolor{blue}{-1}) \cdot 
\begin{vmatrix}
0 & 1 & -1 \\
1 & -2 & 1 \\
3 & 2 & -1
\end{vmatrix} =
$$

Devo calcolare i due determinanti dopo l'uguale:

***

Calcolo il primo:

$$
\begin{vmatrix}
1 & 1 & -1 \\
-2 & 0 & 1 \\
2 & -1 & -1
\end{vmatrix}
$$

Applichiamo la regola di Sarrus riportando la prima e la seconda colonna:

$$
\begin{vmatrix}
1 & 1 & -1 \\
-2 & 0 & 1 \\
2 & -1 & -1
\end{vmatrix}
\begin{matrix}
1 & 1 \\
-2 & 0 \\
2 & -1
\end{matrix}
$$

Moltiplico prima gli elementi della diagonale principale e delle due diagonali parallele:

$$
\begin{vmatrix}
\textcolor{magenta}{1} & \textcolor{red}{1} & \textcolor{blue}{-1} \\
-2 & \textcolor{magenta}{0} & \textcolor{red}{1} \\
2 & -1 & \textcolor{magenta}{-1}
\end{vmatrix}
\begin{matrix}
1 & 1 \\
\textcolor{blue}{-2} & 0 \\
\textcolor{red}{2} & \textcolor{blue}{-1}
\end{matrix} = \textcolor{magenta}{1 \cdot 0 \cdot (-1)} + \textcolor{red}{1 \cdot 1 \cdot 2} + \textcolor{blue}{(-1) \cdot (-2) \cdot (-1)} = 2 - 2 = 0
$$

Moltiplico poi gli elementi della diagonale secondaria e delle due diagonali parallele:

$$
\begin{vmatrix}
1 & 1 & \textcolor{orange}{-1} \\
-2 & \textcolor{orange}{0} & \textcolor{green}{1} \\
\textcolor{orange}{2} & \textcolor{green}{-1} & \textcolor{purple}{-1}
\end{vmatrix}
\begin{matrix}
\textcolor{green}{1} & \textcolor{purple}{1} \\
\textcolor{purple}{-2} & 0 \\
2 & -1
\end{matrix} = \textcolor{orange}{(-1) \cdot 0 \cdot 2} + \textcolor{green}{1 \cdot 1 \cdot (-1)} + \textcolor{purple}{1 \cdot (-2) \cdot (-1)} = -1 + 2 = 1
$$

Adesso faccio la differenza fra i due valori trovati ed ottengo il valore del primo determinante:

$$
\begin{vmatrix}
1 & 1 & -1 \\
-2 & 0 & 1 \\
2 & -1 & -1
\end{vmatrix} = 0 - 1 = -1
$$

***

Calcolo il secondo determinante:

$$
\begin{vmatrix}
0 & 1 & -1 \\
1 & -2 & 1 \\
3 & 2 & -1
\end{vmatrix}
$$

Applichiamo la regola di Sarrus riportando la prima e la seconda colonna:

$$
\begin{vmatrix}
0 & 1 & -1 \\
1 & -2 & 1 \\
3 & 2 & -1
\end{vmatrix}
\begin{matrix}
0 & 1 \\
1 & -2 \\
3 & 2
\end{matrix}
$$

Moltiplico prima gli elementi della diagonale principale e delle due diagonali parallele:

$$
\begin{vmatrix}
\textcolor{magenta}{0} & \textcolor{red}{1} & \textcolor{blue}{-1} \\
1 & \textcolor{magenta}{-2} & \textcolor{red}{1} \\
3 & 2 & \textcolor{magenta}{-1}
\end{vmatrix}
\begin{matrix}
0 & 1 \\
\textcolor{blue}{1} & -2 \\
\textcolor{red}{3} & \textcolor{blue}{2}
\end{matrix} = \textcolor{magenta}{0 \cdot (-2) \cdot (-1)} + \textcolor{red}{1 \cdot 1 \cdot 3} + \textcolor{blue}{(-1) \cdot 1 \cdot 2} = 3 - 2 = 1
$$

Moltiplico poi gli elementi della diagonale secondaria e delle due diagonali parallele:

$$
\begin{vmatrix}
0 & 1 & \textcolor{orange}{-1} \\
1 & \textcolor{orange}{-2} & \textcolor{green}{1} \\
\textcolor{orange}{3} & \textcolor{green}{2} & \textcolor{purple}{-1}
\end{vmatrix}
\begin{matrix}
\textcolor{green}{0} & \textcolor{purple}{1} \\
\textcolor{purple}{1} & -2 \\
3 & 2
\end{matrix} = \textcolor{orange}{(-1) \cdot (-2) \cdot 3} + \textcolor{green}{0 \cdot 1 \cdot 2} + \textcolor{purple}{1 \cdot 1 \cdot (-1)} = 6 - 1 = 5
$$

Adesso faccio la differenza fra i due valori trovati ed ottengo il valore del secondo determinante:

$$
\begin{vmatrix}
0 & 1 & -1 \\
1 & -2 & 1 \\
3 & 2 & -1
\end{vmatrix} = 1 - 5 = -4
$$

***

Ed ottengo quindi:

$$
\begin{vmatrix}
0 & 1 & 1 & -1 \\
1 & -2 & 0 & 1 \\
3 & 2 & -1 & -1 \\
\textcolor{blue}{1} & 0 & \textcolor{blue}{-1} & 0
\end{vmatrix} = \textcolor{red}{- \textcolor{blue}{1}} \cdot 
\begin{vmatrix}
1 & 1 & -1 \\
-2 & 0 & 1 \\
2 & -1 & -1
\end{vmatrix} - (\textcolor{blue}{-1}) \cdot 
\begin{vmatrix}
0 & 1 & -1 \\
1 & -2 & 1 \\
3 & 2 & -1
\end{vmatrix} =
$$

$$
= -1 \cdot (-1) - (-1) \cdot (-4) = 1 - 4 = -3
$$