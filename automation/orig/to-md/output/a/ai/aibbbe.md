[# Soluzione del sistema col metodo di Cramer]{.text-red}

Ora possiamo procedere a risolvere il sistema:
Prendiamo lo stesso sistema già risolto con il metodo di sostituzione

$$
\begin{cases}
x + y + z = 6 \\
2x + y - z = 1 \\
2x - 3y + z = -1
\end{cases}
$$

considero la matrice incompleta e completa del sistema

$$
\begin{matrix}
1 & 1 & 1 \\
2 & 1 & -1 \\
2 & -3 & 1
\end{matrix}
\quad
\begin{matrix}
1 & 1 & 1 & 6 \\
2 & 1 & -1 & 1 \\
2 & -3 & 1 & -1
\end{matrix}
$$

[**Matrice incompleta**]{.text-blue} [**Matrice completa**]{.text-blue}

La quarta colonna della matrice completa è la colonna dei termini noti

Applichiamo la stessa regola già applicata per risolvere i [sistemi di due equazioni in due incognite](aibaad.html):

Per calcolare il valore della $x$ devo scrivere al denominatore il determinante ottenuto dalla matrice incompleta ed al numeratore cancello la colonna delle $x$ ed al suo posto metto la colonna dei termini noti

$$
x = \frac{\begin{vmatrix} 6 & 1 & 1 \\ 1 & 1 & -1 \\ -1 & -3 & 1 \end{vmatrix}}{\begin{vmatrix} 1 & 1 & 1 \\ 2 & 1 & -1 \\ 2 & -3 & 1 \end{vmatrix}}
$$

[Calcoliamo](aibbbea.html) i determinanti

$$
x = \frac{-14}{-14} = 1
$$

Per calcolare il valore della $y$ devo scrivere al denominatore il determinante ottenuto dalla matrice incompleta ed al numeratore cancello la colonna delle $y$ ed al suo posto metto la colonna dei termini noti

$$
y = \frac{\begin{vmatrix} 1 & 6 & 1 \\ 2 & 1 & -1 \\ 2 & -1 & 1 \end{vmatrix}}{\begin{vmatrix} 1 & 1 & 1 \\ 2 & 1 & -1 \\ 2 & -3 & 1 \end{vmatrix}}
$$

[Calcoliamo](aibbbeb.html)

$$
y = \frac{-28}{-14} = 2
$$

Per calcolare il valore della $z$ devo scrivere al denominatore il determinante ottenuto dalla matrice incompleta ed al numeratore cancello la colonna delle $z$ ed al suo posto metto la colonna dei termini noti

$$
z = \frac{\begin{vmatrix} 1 & 1 & 6 \\ 2 & 1 & 1 \\ 2 & -3 & -1 \end{vmatrix}}{\begin{vmatrix} 1 & 1 & 1 \\ 2 & 1 & -1 \\ 2 & -3 & 1 \end{vmatrix}}
$$

[Calcoliamo](aibbbec.html)

$$
z = \frac{-42}{-14} = 3
$$

Ottengo quindi come soluzione

$$
\begin{cases}
x = 1 \\
y = 2 \\
z = 3
\end{cases}
$$