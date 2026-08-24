Risolvere il sistema:

$$
\begin{cases}
\textcolor{red}{y + z - t = 1} \\
\textcolor{red}{x - 2y + t = 1} \\
\textcolor{red}{3x + 2y - z - t = 0} \\
\textcolor{red}{x - z = -2}
\end{cases}
$$

Considero le matrici incompleta e completa:

$$
\begin{bmatrix}
\textcolor{red}{0} & \textcolor{red}{1} & \textcolor{red}{1} & \textcolor{red}{-1} \\
\textcolor{red}{1} & \textcolor{red}{-2} & \textcolor{red}{0} & \textcolor{red}{1} \\
\textcolor{red}{3} & \textcolor{red}{2} & \textcolor{red}{-1} & \textcolor{red}{-1} \\
\textcolor{red}{1} & \textcolor{red}{0} & \textcolor{red}{-1} & \textcolor{red}{0}
\end{bmatrix}
$$
[**Matrice incompleta**]{.text-blue}

$$
\begin{bmatrix}
\textcolor{red}{0} & \textcolor{red}{1} & \textcolor{red}{1} & \textcolor{red}{-1} & \textcolor{red}{1} \\
\textcolor{red}{1} & \textcolor{red}{-2} & \textcolor{red}{0} & \textcolor{red}{1} & \textcolor{red}{1} \\
\textcolor{red}{3} & \textcolor{red}{2} & \textcolor{red}{-1} & \textcolor{red}{-1} & \textcolor{red}{0} \\
\textcolor{red}{1} & \textcolor{red}{0} & \textcolor{red}{-1} & \textcolor{red}{0} & \textcolor{red}{-2}
\end{bmatrix}
$$
[**Matrice completa**]{.text-blue}

Calcolo il determinante della matrice incompleta e vedo che vale:

$$
\begin{vmatrix}
\textcolor{red}{0} & \textcolor{red}{1} & \textcolor{red}{1} & \textcolor{red}{-1} \\
\textcolor{red}{1} & \textcolor{red}{-2} & \textcolor{red}{0} & \textcolor{red}{1} \\
\textcolor{red}{3} & \textcolor{red}{2} & \textcolor{red}{-1} & \textcolor{red}{-1} \\
\textcolor{red}{1} & \textcolor{red}{0} & \textcolor{red}{-1} & \textcolor{red}{0}
\end{vmatrix} = \textcolor{red}{-3}
$$
[Calcoli](aibcaaa.html)

Essendo questo determinante anche un minore della matrice completa avrò che matrice completa ed incompleta hanno lo stesso rango e quindi il sistema ammette una sola soluzione e posso applicare il metodo di Cramer.

***

Calcolo la $x$:

$$
x = \frac{\begin{vmatrix} \textcolor{red}{1} & \textcolor{red}{1} & \textcolor{red}{1} & \textcolor{red}{-1} \\ \textcolor{red}{1} & \textcolor{red}{-2} & \textcolor{red}{0} & \textcolor{red}{1} \\ \textcolor{red}{0} & \textcolor{red}{2} & \textcolor{red}{-1} & \textcolor{red}{-1} \\ \textcolor{red}{-2} & \textcolor{red}{0} & \textcolor{red}{-1} & \textcolor{red}{0} \end{vmatrix}}{\begin{vmatrix} \textcolor{red}{0} & \textcolor{red}{1} & \textcolor{red}{1} & \textcolor{red}{-1} \\ \textcolor{red}{1} & \textcolor{red}{-2} & \textcolor{red}{0} & \textcolor{red}{1} \\ \textcolor{red}{3} & \textcolor{red}{2} & \textcolor{red}{-1} & \textcolor{red}{-1} \\ \textcolor{red}{1} & \textcolor{red}{0} & \textcolor{red}{-1} & \textcolor{red}{0} \end{vmatrix}} = \frac{\textcolor{red}{-3}}{\textcolor{red}{-3}} = \textcolor{red}{1}
$$
[**Calcoli**](aibcaab.html)

***

Calcolo la $y$:

$$
y = \frac{\begin{vmatrix} \textcolor{red}{0} & \textcolor{red}{1} & \textcolor{red}{1} & \textcolor{red}{-1} \\ \textcolor{red}{1} & \textcolor{red}{1} & \textcolor{red}{0} & \textcolor{red}{1} \\ \textcolor{red}{3} & \textcolor{red}{0} & \textcolor{red}{-1} & \textcolor{red}{-1} \\ \textcolor{red}{1} & \textcolor{red}{-2} & \textcolor{red}{-1} & \textcolor{red}{0} \end{vmatrix}}{\begin{vmatrix} \textcolor{red}{0} & \textcolor{red}{1} & \textcolor{red}{1} & \textcolor{red}{-1} \\ \textcolor{red}{1} & \textcolor{red}{-2} & \textcolor{red}{0} & \textcolor{red}{1} \\ \textcolor{red}{3} & \textcolor{red}{2} & \textcolor{red}{-1} & \textcolor{red}{-1} \\ \textcolor{red}{1} & \textcolor{red}{0} & \textcolor{red}{-1} & \textcolor{red}{0} \end{vmatrix}} = \frac{\textcolor{red}{-6}}{\textcolor{red}{-3}} = \textcolor{red}{2}
$$
[**Calcoli**](aibcaac.html)

***

Calcolo la $z$:

$$
z = \frac{\begin{vmatrix} \textcolor{red}{0} & \textcolor{red}{1} & \textcolor{red}{1} & \textcolor{red}{-1} \\ \textcolor{red}{1} & \textcolor{red}{-2} & \textcolor{red}{1} & \textcolor{red}{1} \\ \textcolor{red}{3} & \textcolor{red}{2} & \textcolor{red}{0} & \textcolor{red}{-1} \\ \textcolor{red}{1} & \textcolor{red}{0} & \textcolor{red}{-2} & \textcolor{red}{0} \end{vmatrix}}{\begin{vmatrix} \textcolor{red}{0} & \textcolor{red}{1} & \textcolor{red}{1} & \textcolor{red}{-1} \\ \textcolor{red}{1} & \textcolor{red}{-2} & \textcolor{red}{0} & \textcolor{red}{1} \\ \textcolor{red}{3} & \textcolor{red}{2} & \textcolor{red}{-1} & \textcolor{red}{-1} \\ \textcolor{red}{1} & \textcolor{red}{0} & \textcolor{red}{-1} & \textcolor{red}{0} \end{vmatrix}} = \frac{\textcolor{red}{-9}}{\textcolor{red}{-3}} = \textcolor{red}{3}
$$
[**Calcoli**](aibcaad.html)

***

Calcolo la $t$:

$$
t = \frac{\begin{vmatrix} \textcolor{red}{0} & \textcolor{red}{1} & \textcolor{red}{1} & \textcolor{red}{1} \\ \textcolor{red}{1} & \textcolor{red}{-2} & \textcolor{red}{0} & \textcolor{red}{1} \\ \textcolor{red}{3} & \textcolor{red}{2} & \textcolor{red}{-1} & \textcolor{red}{0} \\ \textcolor{red}{1} & \textcolor{red}{0} & \textcolor{red}{-1} & \textcolor{red}{-2} \end{vmatrix}}{\begin{vmatrix} \textcolor{red}{0} & \textcolor{red}{1} & \textcolor{red}{1} & \textcolor{red}{-1} \\ \textcolor{red}{1} & \textcolor{red}{-2} & \textcolor{red}{0} & \textcolor{red}{1} \\ \textcolor{red}{3} & \textcolor{red}{2} & \textcolor{red}{-1} & \textcolor{red}{-1} \\ \textcolor{red}{1} & \textcolor{red}{0} & \textcolor{red}{-1} & \textcolor{red}{0} \end{vmatrix}} = \frac{\textcolor{red}{-12}}{\textcolor{red}{-3}} = \textcolor{red}{4}
$$
[**Calcoli**](aibcaae.html)

Quindi ho le soluzioni:

$$
\begin{cases}
\textcolor{blue}{x = 1} \\
\textcolor{blue}{y = 2} \\
\textcolor{blue}{z = 3} \\
\textcolor{blue}{t = 4}
\end{cases}
$$