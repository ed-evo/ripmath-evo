Consideriamo determinanti un po' semplificati.
Vogliamo dimostrare che vale l'uguaglianza (scambio tra loro la seconda e la terza riga):

$$
\begin{vmatrix} a & b & c \\ d & e & f \\ g & h & i \end{vmatrix} = - \begin{vmatrix} a & b & c \\ g & h & i \\ d & e & f \end{vmatrix}
$$

Sviluppo il primo secondo la prima riga:

$$
\begin{vmatrix} a & b & c \\ d & e & f \\ g & h & i \end{vmatrix} = a \cdot \begin{vmatrix} e & f \\ h & i \end{vmatrix} - b \cdot \begin{vmatrix} d & f \\ g & i \end{vmatrix} + c \cdot \begin{vmatrix} d & e \\ g & h \end{vmatrix} =
$$

$$
= a \cdot (ei - fh) - b \cdot (di - gf) + c \cdot (dh - eg) =
$$

$$
= \textcolor{red}{aei} \textcolor{blue}{- afh} - bdi \textcolor{green}{+ bgf} \textcolor{orange}{+ cdh} \textcolor{purple}{- ceg}
$$

Sviluppo anche il secondo sempre con la prima riga:

$$
\begin{vmatrix} a & b & c \\ g & h & i \\ d & e & f \end{vmatrix} = a \cdot \begin{vmatrix} h & i \\ e & f \end{vmatrix} - b \cdot \begin{vmatrix} g & i \\ d & f \end{vmatrix} + c \cdot \begin{vmatrix} g & h \\ d & e \end{vmatrix} =
$$

$$
= a \cdot (fh - ei) - b \cdot (gf - di) + c \cdot (eg - dh) =
$$

$$
= \textcolor{blue}{afh} \textcolor{red}{- aei} \textcolor{green}{- bgf} + bdi \textcolor{purple}{+ ceg} \textcolor{orange}{- cdh}
$$

Se controlli, sono gli stessi fattori del primo determinante ma con il segno cambiato.
Come volevamo dimostrare.