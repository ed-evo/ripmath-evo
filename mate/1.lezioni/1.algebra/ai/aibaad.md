# Metodo di Cramer

Se hai bisogno della [dimostrazione](aibaad1.html) del metodo, altrimenti in questa pagina ti verrà spiegato solo il come fare

***

Dobbiamo risolvere
$$
\begin{cases}
\textcolor{red}{2x + 3y = 12} \\
\textcolor{red}{3x - y = 7}
\end{cases}
$$

Nel metodo di Cramer scrivo i coefficienti del sistema in una tabella (matrice)

$$
\begin{bmatrix}
\textcolor{red}{2} & \textcolor{red}{3} & \textcolor{red}{12} \\
\textcolor{red}{3} & \textcolor{red}{-1} & \textcolor{red}{7}
\end{bmatrix}
$$

La prima colonna contiene i coefficienti della $x$, la seconda i coefficienti della $y$ e la terza i termini noti.

In entrambe le soluzioni considererò al denominatore il seguente numero detto determinante (ho preso le prime due colonne):

$$
\begin{vmatrix}
\textcolor{red}{2} & \textcolor{red}{3} \\
\textcolor{red}{3} & \textcolor{red}{-1}
\end{vmatrix}
$$

È un numero e per [calcolarlo](aibaad0.html) devo fare il prodotto fra il primo e l'ultimo termine meno il prodotto fra il secondo ed il terzo:

$$
\begin{vmatrix}
\textcolor{red}{2} & \textcolor{red}{3} \\
\textcolor{red}{3} & \textcolor{red}{-1}
\end{vmatrix} = \textcolor{red}{2 \cdot (-1) - 3 \cdot 3 = -2 - 9 = -11}
$$

Per trovare la $x$ devo prendere il determinante considerato, cancellare la colonna delle $x$ e al suo posto mettere i termini noti:

$$
\begin{vmatrix}
\textcolor{red}{12} & \textcolor{red}{3} \\
\textcolor{red}{7} & \textcolor{red}{-1}
\end{vmatrix} = \textcolor{red}{12 \cdot (-1) - 3 \cdot 7 = -12 - 21 = -33}
$$

Per calcolare il valore della $x$ devo scrivere al denominatore il determinante ottenuto dalle prime due colonne ed al numeratore cancello la colonna delle $x$ ed al suo posto metto i termini noti:

$$
x = \frac{\begin{vmatrix} \textcolor{red}{12} & \textcolor{red}{3} \\ \textcolor{red}{7} & \textcolor{red}{-1} \end{vmatrix}}{\begin{vmatrix} \textcolor{red}{2} & \textcolor{red}{3} \\ \textcolor{red}{3} & \textcolor{red}{-1} \end{vmatrix}} = \frac{\textcolor{red}{12 \cdot (-1) - 3 \cdot 7}}{\textcolor{red}{2 \cdot (-1) - 3 \cdot 3}} = \frac{\textcolor{red}{-12 - 21}}{\textcolor{red}{-2 - 9}} = \frac{\textcolor{red}{-33}}{\textcolor{red}{-11}} = 3
$$

Per calcolare la $y$ metto al denominatore le prime due colonne mentre al numeratore cancello la colonna delle $y$ e ci metto i termini noti:

$$
\begin{vmatrix}
\textcolor{red}{2} & \textcolor{red}{12} \\
\textcolor{red}{3} & \textcolor{red}{7}
\end{vmatrix} = \textcolor{red}{2 \cdot 7 - 12 \cdot 3 = 14 - 36 = -22}
$$

$$
y = \frac{\begin{vmatrix} \textcolor{red}{2} & \textcolor{red}{12} \\ \textcolor{red}{3} & \textcolor{red}{7} \end{vmatrix}}{\begin{vmatrix} \textcolor{red}{2} & \textcolor{red}{3} \\ \textcolor{red}{3} & \textcolor{red}{-1} \end{vmatrix}} = \frac{\textcolor{red}{2 \cdot 7 - 12 \cdot 3}}{\textcolor{red}{2 \cdot (-1) - 3 \cdot 3}} = \frac{\textcolor{red}{14 - 36}}{\textcolor{red}{-2 - 9}} = \frac{\textcolor{red}{-22}}{\textcolor{red}{-11}} = 2
$$

Quindi ottengo:
$$
\begin{cases}
\textcolor{red}{x = 3} \\
\textcolor{red}{y = 2}
\end{cases}
$$

***

> **Per risolvere un sistema col metodo di Cramer**
> - Scrivo la matrice del sistema
> - Calcolo il determinante delle prime due colonne
> - per la $x$ scrivo al denominatore il determinante trovato ed al numeratore riscrivo il determinante mettendo al posto della colonna delle $x$ i termini noti
> - per la $y$ scrivo al denominatore il determinante trovato ed al numeratore riscrivo il determinante mettendo al posto della colonna delle $y$ i termini noti
> - Scrivo la parentesi graffa con la $x$ al primo posto e la $y$ al secondo posto

***

È uno dei metodi più utilizzati soprattutto per i sistemi letterali