# Determinanti 3x3 estraibili dalla matrice completa

Tolgo la riga in blu 

> Faccio scorrere la riga che tolgo dall'ultima colonna alla prima

$$
\begin{pmatrix}
a_{1,1} & a_{1,2} & a_{1,3} & \textcolor{blue}{b_1} \\
a_{2,1} & a_{2,2} & a_{2,3} & \textcolor{blue}{b_2} \\
a_{3,1} & a_{3,2} & a_{3,3} & \textcolor{blue}{b_3}
\end{pmatrix}
\implies
\begin{vmatrix}
a_{1,1} & a_{1,2} & a_{1,3} \\
a_{2,1} & a_{2,2} & a_{2,3} \\
a_{3,1} & a_{3,2} & a_{3,3}
\end{vmatrix}
$$

$$
\begin{pmatrix}
a_{1,1} & a_{1,2} & \textcolor{blue}{a_{1,3}} & b_1 \\
a_{2,1} & a_{2,2} & \textcolor{blue}{a_{2,3}} & b_2 \\
a_{3,1} & a_{3,2} & \textcolor{blue}{a_{3,3}} & b_3
\end{pmatrix}
\implies
\begin{vmatrix}
a_{1,1} & a_{1,2} & b_1 \\
a_{2,1} & a_{2,2} & b_2 \\
a_{3,1} & a_{3,2} & b_3
\end{vmatrix}
$$

$$
\begin{pmatrix}
a_{1,1} & \textcolor{blue}{a_{1,2}} & a_{1,3} & b_1 \\
a_{2,1} & \textcolor{blue}{a_{2,2}} & a_{2,3} & b_2 \\
a_{3,1} & \textcolor{blue}{a_{3,2}} & a_{3,3} & b_3
\end{pmatrix}
\implies
\begin{vmatrix}
a_{1,1} & a_{1,3} & b_1 \\
a_{2,1} & a_{2,3} & b_2 \\
a_{3,1} & a_{3,3} & b_3
\end{vmatrix}
$$

$$
\begin{pmatrix}
\textcolor{blue}{a_{1,1}} & a_{1,2} & a_{1,3} & b_1 \\
\textcolor{blue}{a_{2,1}} & a_{2,2} & a_{2,3} & b_2 \\
\textcolor{blue}{a_{3,1}} & a_{3,2} & a_{3,3} & b_3
\end{pmatrix}
\implies
\begin{vmatrix}
a_{1,2} & a_{1,3} & b_1 \\
a_{2,2} & a_{2,3} & b_2 \\
a_{3,2} & a_{3,3} & b_3
\end{vmatrix}
$$