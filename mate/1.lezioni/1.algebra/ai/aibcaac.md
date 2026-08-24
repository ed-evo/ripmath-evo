Quello al denominatore l'ho già calcolato e vale $-3$
Devo calcolare il valore del determinante al numeratore:

$$
\begin{vmatrix} 
0 & \textcolor{blue}{1} & \textcolor{blue}{1} & \textcolor{blue}{-1} \\ 
1 & 1 & 0 & 1 \\ 
3 & 0 & -1 & -1 \\ 
1 & -2 & -1 & 0 
\end{vmatrix}
$$

Qui sviluppiamo secondo la prima riga; l'evidenzio in blu.
Il primo termine è nullo.
Il secondo termine della riga ha posto $a_{1,2}$, cioè prima riga e seconda colonna, quindi è di posto dispari e quindi va cambiato di segno.
Il terzo termine della riga ha posto $a_{1,3}$, cioè prima riga e terza colonna, quindi è di posto pari e quindi mantiene il suo segno.
Il quarto termine della riga ha posto $a_{1,4}$, cioè prima riga e quarta colonna, quindi è di posto dispari e quindi va cambiato di segno.

Dove c'è zero non devo sviluppare perché zero per numero uguale zero.

$$
\begin{vmatrix} 
0 & \textcolor{blue}{1} & \textcolor{blue}{1} & \textcolor{blue}{-1} \\ 
1 & 1 & 0 & 1 \\ 
3 & 0 & -1 & -1 \\ 
1 & -2 & -1 & 0 
\end{vmatrix} = -\textcolor{blue}{1} \cdot \begin{vmatrix} 1 & 0 & 1 \\ 3 & -1 & -1 \\ 1 & -1 & 0 \end{vmatrix} + \textcolor{blue}{1} \cdot \begin{vmatrix} 1 & 1 & 1 \\ 3 & 0 & -1 \\ 1 & -2 & 0 \end{vmatrix} - \textcolor{blue}{(-1)} \cdot \begin{vmatrix} 1 & 1 & 0 \\ 3 & 0 & -1 \\ 1 & -2 & -1 \end{vmatrix} = 
$$

Devo calcolare i tre determinanti dopo l'uguale:

***

Calcolo il primo:

$$
\begin{vmatrix} 
1 & 0 & 1 \\ 
3 & -1 & -1 \\ 
1 & -1 & 0 
\end{vmatrix}
$$

Applichiamo la regola di Sarrus riportando la prima e la seconda colonna:

$$
\begin{vmatrix} 1 & 0 & 1 \\ 3 & -1 & -1 \\ 1 & -1 & 0 \end{vmatrix} \begin{matrix} 1 & 0 \\ 3 & -1 \\ 1 & -1 \end{matrix}
$$

Moltiplico prima gli elementi della diagonale principale e delle due diagonali parallele:

$$
\begin{vmatrix} \textcolor{magenta}{1} & \textcolor{red}{0} & \textcolor{blue}{1} \\ 3 & \textcolor{magenta}{-1} & \textcolor{red}{-1} \\ 1 & -1 & \textcolor{magenta}{0} \end{vmatrix} \begin{matrix} 1 & 0 \\ \textcolor{blue}{3} & -1 \\ \textcolor{red}{1} & \textcolor{blue}{-1} \end{matrix} = \textcolor{magenta}{1 \cdot (-1) \cdot 0} + \textcolor{red}{0 \cdot (-1) \cdot 1} + \textcolor{blue}{1 \cdot 3 \cdot (-1)} = -3
$$

Moltiplico poi gli elementi della diagonale secondaria e delle due diagonali parallele:

$$
\begin{vmatrix} 1 & 0 & \textcolor{orange}{1} \\ 3 & \textcolor{orange}{-1} & \textcolor{green}{-1} \\ \textcolor{orange}{1} & \textcolor{green}{-1} & \textcolor{purple}{0} \end{vmatrix} \begin{matrix} \textcolor{green}{1} & \textcolor{purple}{0} \\ \textcolor{purple}{3} & -1 \\ 1 & -1 \end{matrix} = \textcolor{orange}{1 \cdot (-1) \cdot 1} + \textcolor{green}{1 \cdot (-1) \cdot (-1)} + \textcolor{purple}{0 \cdot 3 \cdot 0} = -1 + 1 = 0
$$

Adesso faccio la differenza fra i due valori trovati ed ottengo il valore del primo determinante:

$$
\begin{vmatrix} 
1 & 0 & 1 \\ 
3 & -1 & -1 \\ 
1 & -1 & 0 
\end{vmatrix} = -3 - 0 = -3
$$

***

Calcolo il secondo determinante:

$$
\begin{vmatrix} 
1 & 1 & 1 \\ 
3 & 0 & -1 \\ 
1 & -2 & 0 
\end{vmatrix}
$$

Applichiamo la regola di Sarrus riportando la prima e la seconda colonna:

$$
\begin{vmatrix} 1 & 1 & 1 \\ 3 & 0 & -1 \\ 1 & -2 & 0 \end{vmatrix} \begin{matrix} 1 & 1 \\ 3 & 0 \\ 1 & -2 \end{matrix}
$$

Moltiplico prima gli elementi della diagonale principale e delle due diagonali parallele:

$$
\begin{vmatrix} \textcolor{magenta}{1} & \textcolor{red}{1} & \textcolor{blue}{1} \\ 3 & \textcolor{magenta}{0} & \textcolor{red}{-1} \\ 1 & -2 & \textcolor{magenta}{0} \end{vmatrix} \begin{matrix} 1 & 1 \\ \textcolor{blue}{3} & 0 \\ \textcolor{red}{1} & \textcolor{blue}{-2} \end{matrix} = \textcolor{magenta}{1 \cdot 0 \cdot 0} + \textcolor{red}{1 \cdot (-1) \cdot 1} + \textcolor{blue}{1 \cdot 3 \cdot (-2)} = -1 - 6 = -7
$$

Moltiplico poi gli elementi della diagonale secondaria e delle due diagonali parallele:

$$
\begin{vmatrix} 1 & 1 & \textcolor{orange}{1} \\ 3 & \textcolor{orange}{0} & \textcolor{green}{-1} \\ \textcolor{orange}{1} & \textcolor{green}{-2} & \textcolor{purple}{0} \end{vmatrix} \begin{matrix} \textcolor{green}{1} & \textcolor{purple}{1} \\ \textcolor{purple}{3} & 0 \\ 1 & -2 \end{matrix} = \textcolor{orange}{1 \cdot 0 \cdot 1} + \textcolor{green}{1 \cdot (-1) \cdot (-2)} + \textcolor{purple}{1 \cdot 3 \cdot 0} = 2
$$

Adesso faccio la differenza fra i due valori trovati ed ottengo il valore del secondo determinante:

$$
\begin{vmatrix} 
1 & 1 & 1 \\ 
3 & 0 & -1 \\ 
1 & -2 & 0 
\end{vmatrix} = -7 - 2 = -9
$$

***

Calcolo il terzo determinante:

$$
\begin{vmatrix} 
1 & 1 & 0 \\ 
3 & 0 & -1 \\ 
1 & -2 & -1 
\end{vmatrix}
$$

Applichiamo la regola di Sarrus riportando la prima e la seconda colonna:

$$
\begin{vmatrix} 1 & 1 & 0 \\ 3 & 0 & -1 \\ 1 & -2 & -1 \end{vmatrix} \begin{matrix} 1 & 1 \\ 3 & 0 \\ 1 & -2 \end{matrix}
$$

Moltiplico prima gli elementi della diagonale principale e delle due diagonali parallele:

$$
\begin{vmatrix} \textcolor{magenta}{1} & \textcolor{red}{1} & \textcolor{blue}{0} \\ 3 & \textcolor{magenta}{0} & \textcolor{red}{-1} \\ 1 & -2 & \textcolor{magenta}{-1} \end{vmatrix} \begin{matrix} 1 & 1 \\ \textcolor{blue}{3} & 0 \\ \textcolor{red}{1} & \textcolor{blue}{-2} \end{matrix} = \textcolor{magenta}{1 \cdot 0 \cdot (-1)} + \textcolor{red}{1 \cdot (-1) \cdot 1} + \textcolor{blue}{0 \cdot 3 \cdot (-2)} = -1
$$

Moltiplico poi gli elementi della diagonale secondaria e delle due diagonali parallele:

$$
\begin{vmatrix} 1 & 1 & \textcolor{orange}{0} \\ 3 & \textcolor{orange}{0} & \textcolor{green}{-1} \\ \textcolor{orange}{1} & \textcolor{green}{-2} & \textcolor{purple}{-1} \end{vmatrix} \begin{matrix} \textcolor{green}{1} & \textcolor{purple}{1} \\ \textcolor{purple}{3} & 0 \\ 1 & -2 \end{matrix} = \textcolor{orange}{0 \cdot 0 \cdot 1} + \textcolor{green}{1 \cdot (-1) \cdot (-2)} + \textcolor{purple}{1 \cdot 3 \cdot (-1)} = 2 - 3 = -1
$$

Adesso faccio la differenza fra i due valori trovati ed ottengo il valore del terzo determinante:

$$
\begin{vmatrix} 
1 & 1 & 0 \\ 
3 & 0 & -1 \\ 
1 & -2 & -1 
\end{vmatrix} = -1 - (-1) = 0
$$

***

Ed ottengo quindi:

$$
\begin{vmatrix} 
0 & \textcolor{blue}{1} & \textcolor{blue}{1} & \textcolor{blue}{-1} \\ 
1 & 1 & 0 & 1 \\ 
3 & 0 & -1 & -1 \\ 
1 & -2 & -1 & 0 
\end{vmatrix} = -\textcolor{blue}{1} \cdot (-3) + \textcolor{blue}{1} \cdot (-9) - \textcolor{blue}{(-1)} \cdot 0 = 3 - 9 = -6
$$