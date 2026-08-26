[Se gli elementi di una riga (colonna) sono somma di due addendi allora il determinante è uguale alla somma dei determinanti che hanno nella riga (colonna) come elementi il primo addendo ed il secondo addendo]{.text-red}

sarebbe a dire

$$
\textcolor{blue}{
\begin{vmatrix}
a+b & c+d & e+f \\
g & h & i \\
l & m & n
\end{vmatrix}
=
\begin{vmatrix}
a & c & e \\
g & h & i \\
l & m & n
\end{vmatrix}
+
\begin{vmatrix}
b & d & f \\
g & h & i \\
l & m & n
\end{vmatrix}
}
$$

Per dimostrarlo basta sviluppare il primo (ad esempio secondo la prima riga) e mostrare che otteniamo la somma degli sviluppi del secondo.

> Puoi farlo per esercizio