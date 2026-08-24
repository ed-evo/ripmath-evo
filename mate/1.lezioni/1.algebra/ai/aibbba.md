# Matrici del sistema

Il concetto di matrice è prezioso, perché ci permette di trattare "oggetti matematici" le cui componenti non siano tra loro sommabili come ad esempio:
- Le coordinate di un punto nello spazio ad $n$ dimensioni
- Le componenti di un vettore
- I termini di un polinomio ordinato

Esse nascono con i sistemi ma diventano presto uno dei punti di forza della matematica, ne riparleremo in seguito.

Consideriamo il sistema generico di tre equazioni nelle tre incognite $\textcolor{red}{x}$, $\textcolor{red}{y}$ e $\textcolor{red}{z}$:

$$
\begin{cases}
\textcolor{red}{a_{1,1} x + a_{1,2} y + a_{1,3} z = b_1} \\
\textcolor{red}{a_{2,1} x + a_{2,2} y + a_{2,3} z = b_2} \\
\textcolor{red}{a_{3,1} x + a_{3,2} y + a_{3,3} z = b_3}
\end{cases}
$$

Chiameremo [**matrice incompleta**]{.text-red} (o matrice dei coefficienti) la matrice $3 \times 3$ (tre righe e tre colonne) i cui termini sono i coefficienti delle incognite:

$$
\begin{pmatrix}
\textcolor{red}{a_{1,1}} & \textcolor{red}{a_{1,2}} & \textcolor{red}{a_{1,3}} \\
\textcolor{red}{a_{2,1}} & \textcolor{red}{a_{2,2}} & \textcolor{red}{a_{2,3}} \\
\textcolor{red}{a_{3,1}} & \textcolor{red}{a_{3,2}} & \textcolor{red}{a_{3,3}}
\end{pmatrix}
$$

Chiameremo invece [**matrice completa**]{.text-red} la matrice $3 \times 4$ (tre righe quattro colonne) ottenuta dalla matrice precedente aggiungendovi la colonna dei termini noti:

> **Nota:** Da notare che tale matrice rappresenta completamente il sistema

$$
\begin{pmatrix}
\textcolor{red}{a_{1,1}} & \textcolor{red}{a_{1,2}} & \textcolor{red}{a_{1,3}} & \textcolor{red}{b_1} \\
\textcolor{red}{a_{2,1}} & \textcolor{red}{a_{2,2}} & \textcolor{red}{a_{2,3}} & \textcolor{red}{b_2} \\
\textcolor{red}{a_{3,1}} & \textcolor{red}{a_{3,2}} & \textcolor{red}{a_{3,3}} & \textcolor{red}{b_3}
\end{pmatrix}
$$

La matrice è solamente una tabella: per eseguire i calcoli dovremo considerare il determinante associato alla matrice e questo sarà possibile solamente per le matrici quadrate (tante righe quante colonne).