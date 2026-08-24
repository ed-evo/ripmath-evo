Devo calcolare il valore del determinante:

$$
\begin{vmatrix} 
\textcolor{red}{1} & \textcolor{red}{1} & \textcolor{red}{0} & \textcolor{red}{0} & \textcolor{red}{0} \\ 
\textcolor{red}{0} & \textcolor{red}{1} & \textcolor{red}{1} & \textcolor{red}{0} & \textcolor{red}{0} \\ 
\textcolor{red}{0} & \textcolor{red}{0} & \textcolor{red}{1} & \textcolor{red}{1} & \textcolor{red}{0} \\ 
\textcolor{red}{0} & \textcolor{red}{0} & \textcolor{red}{0} & \textcolor{red}{1} & \textcolor{red}{1} \\ 
\textcolor{red}{-1} & \textcolor{red}{0} & \textcolor{red}{0} & \textcolor{red}{0} & \textcolor{red}{1} 
\end{vmatrix}
$$

Sviluppo secondo la prima riga:
il primo termine della riga ha posto $$a_{1,1}$$, cioè prima riga e prima colonna quindi è di posto pari ($$1+1=2$$) e quindi mantiene il segno;
il secondo termine della prima riga ha posto $$a_{1,2}$$, cioè prima riga e seconda colonna quindi è di posto dispari ($$1+2=3$$) e quindi va cambiato di segno.
Dove c'è zero non devo sviluppare perché zero per numero uguale zero.

$$
\begin{vmatrix} 
\textcolor{blue}{1} & \textcolor{red}{1} & \textcolor{red}{0} & \textcolor{red}{0} & \textcolor{red}{0} \\ 
\textcolor{red}{0} & \textcolor{red}{1} & \textcolor{red}{1} & \textcolor{red}{0} & \textcolor{red}{0} \\ 
\textcolor{red}{0} & \textcolor{red}{0} & \textcolor{red}{1} & \textcolor{red}{1} & \textcolor{red}{0} \\ 
\textcolor{red}{0} & \textcolor{red}{0} & \textcolor{red}{0} & \textcolor{red}{1} & \textcolor{red}{1} \\ 
\textcolor{red}{-1} & \textcolor{red}{0} & \textcolor{red}{0} & \textcolor{red}{0} & \textcolor{red}{1} 
\end{vmatrix} = \textcolor{blue}{1} \cdot 
\begin{vmatrix} 
\textcolor{red}{1} & \textcolor{red}{1} & \textcolor{red}{0} & \textcolor{red}{0} \\ 
\textcolor{red}{0} & \textcolor{red}{1} & \textcolor{red}{1} & \textcolor{red}{0} \\ 
\textcolor{red}{0} & \textcolor{red}{0} & \textcolor{red}{1} & \textcolor{red}{1} \\ 
\textcolor{red}{0} & \textcolor{red}{0} & \textcolor{red}{0} & \textcolor{red}{1} 
\end{vmatrix} - (\textcolor{blue}{1}) \cdot 
\begin{vmatrix} 
\textcolor{red}{0} & \textcolor{red}{1} & \textcolor{red}{0} & \textcolor{red}{0} \\ 
\textcolor{red}{0} & \textcolor{red}{1} & \textcolor{red}{1} & \textcolor{red}{0} \\ 
\textcolor{red}{0} & \textcolor{red}{0} & \textcolor{red}{1} & \textcolor{red}{1} \\ 
\textcolor{red}{-1} & \textcolor{red}{0} & \textcolor{red}{0} & \textcolor{red}{1} 
\end{vmatrix} =
$$

Devo calcolare i due determinanti dopo l'uguale:

Calcolo il primo:

$$
\begin{vmatrix} 
\textcolor{red}{1} & \textcolor{red}{1} & \textcolor{red}{0} & \textcolor{red}{0} \\ 
\textcolor{red}{0} & \textcolor{red}{1} & \textcolor{red}{1} & \textcolor{red}{0} \\ 
\textcolor{red}{0} & \textcolor{red}{0} & \textcolor{red}{1} & \textcolor{red}{1} \\ 
\textcolor{red}{0} & \textcolor{red}{0} & \textcolor{red}{0} & \textcolor{red}{1} 
\end{vmatrix} =
$$

Sviluppo secondo l'ultima riga perché ho solo un termine diverso da zero; il termine ha posto $$4,4$$, cioè quarta riga e quarta colonna ($$4+4=8$$) posto pari.

$$
\begin{vmatrix} 
\textcolor{red}{1} & \textcolor{red}{1} & \textcolor{red}{0} & \textcolor{red}{0} \\ 
\textcolor{red}{0} & \textcolor{red}{1} & \textcolor{red}{1} & \textcolor{red}{0} \\ 
\textcolor{red}{0} & \textcolor{red}{0} & \textcolor{red}{1} & \textcolor{red}{1} \\ 
\textcolor{blue}{0} & \textcolor{blue}{0} & \textcolor{blue}{0} & \textcolor{blue}{1} 
\end{vmatrix} = \textcolor{blue}{1} \cdot 
\begin{vmatrix} 
\textcolor{red}{1} & \textcolor{red}{1} & \textcolor{red}{0} \\ 
\textcolor{red}{0} & \textcolor{red}{1} & \textcolor{red}{1} \\ 
\textcolor{red}{0} & \textcolor{red}{0} & \textcolor{red}{1} 
\end{vmatrix}
$$

Sviluppo secondo la prima colonna (in un determinante posso sviluppare indifferentemente per righe o per colonne) perché c'è un solo elemento diverso da zero di posto pari (elemento $$1,1$$ ed $$1+1=2$$).

$$
\begin{vmatrix} 
\textcolor{red}{1} & \textcolor{red}{1} & \textcolor{red}{0} & \textcolor{red}{0} \\ 
\textcolor{red}{0} & \textcolor{red}{1} & \textcolor{red}{1} & \textcolor{red}{0} \\ 
\textcolor{red}{0} & \textcolor{red}{0} & \textcolor{red}{1} & \textcolor{red}{1} \\ 
\textcolor{blue}{0} & \textcolor{blue}{0} & \textcolor{blue}{0} & \textcolor{blue}{1} 
\end{vmatrix} = \textcolor{blue}{1} \cdot 
\begin{vmatrix} 
\textcolor{green}{1} & \textcolor{red}{1} & \textcolor{red}{0} \\ 
\textcolor{green}{0} & \textcolor{red}{1} & \textcolor{red}{1} \\ 
\textcolor{green}{0} & \textcolor{red}{0} & \textcolor{red}{1} 
\end{vmatrix} = \textcolor{blue}{1} \cdot \textcolor{green}{1} \cdot 
\begin{vmatrix} 
\textcolor{red}{1} & \textcolor{red}{1} \\ 
\textcolor{red}{0} & \textcolor{red}{1} 
\end{vmatrix} = 1 \cdot 1 \cdot (1 - 0) = 1
$$

Calcolo il secondo:

$$
\begin{vmatrix} 
\textcolor{red}{0} & \textcolor{red}{1} & \textcolor{red}{0} & \textcolor{red}{0} \\ 
\textcolor{red}{0} & \textcolor{red}{1} & \textcolor{red}{1} & \textcolor{red}{0} \\ 
\textcolor{red}{0} & \textcolor{red}{0} & \textcolor{red}{1} & \textcolor{red}{1} \\ 
\textcolor{red}{-1} & \textcolor{red}{0} & \textcolor{red}{0} & \textcolor{red}{1} 
\end{vmatrix} =
$$

Sviluppo secondo la prima colonna, siccome c'è un solo termine diverso da zero (quarta riga e prima colonna $$4+1=5$$ posto dispari).

$$
\begin{vmatrix} 
\textcolor{blue}{0} & \textcolor{red}{1} & \textcolor{red}{0} & \textcolor{red}{0} \\ 
\textcolor{blue}{0} & \textcolor{red}{1} & \textcolor{red}{1} & \textcolor{red}{0} \\ 
\textcolor{blue}{0} & \textcolor{red}{0} & \textcolor{red}{1} & \textcolor{red}{1} \\ 
\textcolor{blue}{-1} & \textcolor{red}{0} & \textcolor{red}{0} & \textcolor{red}{1} 
\end{vmatrix} = -\textcolor{blue}{(-1)} \cdot 
\begin{vmatrix} 
\textcolor{red}{1} & \textcolor{red}{0} & \textcolor{red}{0} \\ 
\textcolor{red}{1} & \textcolor{red}{1} & \textcolor{red}{0} \\ 
\textcolor{red}{0} & \textcolor{red}{1} & \textcolor{red}{1} 
\end{vmatrix}
$$

Sviluppo secondo la prima riga perché c'è un solo elemento diverso da zero di posto pari (elemento $$1,1$$ ed $$1+1=2$$).

$$
\begin{vmatrix} 
\textcolor{blue}{0} & \textcolor{red}{1} & \textcolor{red}{0} & \textcolor{red}{0} \\ 
\textcolor{blue}{0} & \textcolor{red}{1} & \textcolor{red}{1} & \textcolor{red}{0} \\ 
\textcolor{blue}{0} & \textcolor{red}{0} & \textcolor{red}{1} & \textcolor{red}{1} \\ 
\textcolor{blue}{-1} & \textcolor{red}{0} & \textcolor{red}{0} & \textcolor{red}{1} 
\end{vmatrix} = -\textcolor{blue}{(-1)} \cdot 
\begin{vmatrix} 
\textcolor{green}{1} & \textcolor{green}{0} & \textcolor{green}{0} \\ 
\textcolor{red}{1} & \textcolor{red}{1} & \textcolor{red}{0} \\ 
\textcolor{red}{0} & \textcolor{red}{1} & \textcolor{red}{1} 
\end{vmatrix} = -\textcolor{blue}{(-1)} \cdot \textcolor{green}{1} \cdot 
\begin{vmatrix} 
\textcolor{red}{1} & \textcolor{red}{0} \\ 
\textcolor{red}{1} & \textcolor{red}{1} 
\end{vmatrix} = 1 \cdot 1 \cdot (1 - 0) = 1
$$

Quindi il mio determinante vale:

$$
\begin{vmatrix} 
\textcolor{blue}{1} & \textcolor{red}{1} & \textcolor{red}{0} & \textcolor{red}{0} & \textcolor{red}{0} \\ 
\textcolor{red}{0} & \textcolor{red}{1} & \textcolor{red}{1} & \textcolor{red}{0} & \textcolor{red}{0} \\ 
\textcolor{red}{0} & \textcolor{red}{0} & \textcolor{red}{1} & \textcolor{red}{1} & \textcolor{red}{0} \\ 
\textcolor{red}{0} & \textcolor{red}{0} & \textcolor{red}{0} & \textcolor{red}{1} & \textcolor{red}{1} \\ 
\textcolor{red}{-1} & \textcolor{red}{0} & \textcolor{red}{0} & \textcolor{red}{0} & \textcolor{red}{1} 
\end{vmatrix} = \textcolor{blue}{1} \cdot 
\begin{vmatrix} 
\textcolor{red}{1} & \textcolor{red}{1} & \textcolor{red}{0} & \textcolor{red}{0} \\ 
\textcolor{red}{0} & \textcolor{red}{1} & \textcolor{red}{1} & \textcolor{red}{0} \\ 
\textcolor{red}{0} & \textcolor{red}{0} & \textcolor{red}{1} & \textcolor{red}{1} \\ 
\textcolor{red}{0} & \textcolor{red}{0} & \textcolor{red}{0} & \textcolor{red}{1} 
\end{vmatrix} - (\textcolor{blue}{1}) \cdot 
\begin{vmatrix} 
\textcolor{red}{0} & \textcolor{red}{1} & \textcolor{red}{0} & \textcolor{red}{0} \\ 
\textcolor{red}{0} & \textcolor{red}{1} & \textcolor{red}{1} & \textcolor{red}{0} \\ 
\textcolor{red}{0} & \textcolor{red}{0} & \textcolor{red}{1} & \textcolor{red}{1} \\ 
\textcolor{red}{-1} & \textcolor{red}{0} & \textcolor{red}{0} & \textcolor{red}{1} 
\end{vmatrix} = 1 - 1 = 0
$$