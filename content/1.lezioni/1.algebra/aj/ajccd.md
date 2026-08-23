# [Se moltiplico ogni elemento di una riga (colonna) per un numero reale $$C$$ allora il valore del determinante viene moltiplicato per $$C$$]{.text-red}

Ad esempio si ha:

$$
\textcolor{blue}{\begin{vmatrix}
Ca_{1,1} & Ca_{1,2} & Ca_{1,3} \\
a_{2,1} & a_{2,2} & a_{2,3} \\
a_{3,1} & a_{3,2} & a_{3,3}
\end{vmatrix} = C \cdot \begin{vmatrix}
a_{1,1} & a_{1,2} & a_{1,3} \\
a_{2,1} & a_{2,2} & a_{2,3} \\
a_{3,1} & a_{3,2} & a_{3,3}
\end{vmatrix}}
$$

> E posso farlo per qualunque riga o colonna

Infatti sviluppando il primo si ottiene:

$$
\textcolor{blue}{\begin{vmatrix}
Ca_{1,1} & Ca_{1,2} & Ca_{1,3} \\
a_{2,1} & a_{2,2} & a_{2,3} \\
a_{3,1} & a_{3,2} & a_{3,3}
\end{vmatrix} = Ca_{1,1} \cdot \begin{vmatrix}
a_{2,2} & a_{2,3} \\
a_{3,2} & a_{3,3}
\end{vmatrix} - Ca_{1,2} \cdot \begin{vmatrix}
a_{2,1} & a_{2,3} \\
a_{3,1} & a_{3,3}
\end{vmatrix} + Ca_{1,3} \cdot \begin{vmatrix}
a_{2,1} & a_{2,2} \\
a_{3,1} & a_{3,2}
\end{vmatrix} =}
$$

$$
\textcolor{blue}{= Ca_{1,1} \cdot (a_{2,2}a_{3,3} - a_{2,3}a_{3,2}) - Ca_{1,2} \cdot (a_{2,1}a_{3,3} - a_{2,3}a_{3,1}) + Ca_{1,3} \cdot (a_{2,1}a_{3,2} - a_{2,2}a_{3,1}) =}
$$

$$
\textcolor{blue}{= Ca_{1,1} a_{2,2}a_{3,3} - Ca_{1,1}a_{2,3}a_{3,2} - Ca_{1,2}a_{2,1}a_{3,3} + Ca_{1,2}a_{2,3}a_{3,1} + Ca_{1,3}a_{2,1}a_{3,2} - Ca_{1,3}a_{2,2}a_{3,1} =}
$$

e raccogliendo $$C$$

$$
\textcolor{blue}{= C(a_{1,1}a_{2,2}a_{3,3} - a_{1,1}a_{2,3}a_{3,2} - a_{1,2}a_{2,1}a_{3,3} + a_{1,2}a_{2,3}a_{3,1} + a_{1,3}a_{2,1}a_{3,2} - a_{1,3}a_{2,2}a_{3,1}) =}
$$

siccome quello tra parentesi è lo sviluppo del secondo determinante possiamo scrivere

$$
\textcolor{blue}{= C \cdot \begin{vmatrix}
a_{1,1} & a_{1,2} & a_{1,3} \\
a_{2,1} & a_{2,2} & a_{2,3} \\
a_{3,1} & a_{3,2} & a_{3,3}
\end{vmatrix}}
$$

Come volevamo