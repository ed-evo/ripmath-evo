# [Calcolo del determinante $$3 \times 3$$ con la regola di Sarrus]{.text-red}

Quando ci limitiamo a sistemi di $$3$$ equazioni in $$3$$ incognite, e se il determinante non ha elementi nulli, conviene utilizzare la regola di Sarrus per calcolarne il valore; la useremo nella forma più semplice.

Consideriamo un determinante del terzo ordine:

$$
\begin{vmatrix}
\textcolor{red}{a_{1,1}} & \textcolor{red}{a_{1,2}} & \textcolor{red}{a_{1,3}} \\
\textcolor{red}{a_{2,1}} & \textcolor{red}{a_{2,2}} & \textcolor{red}{a_{2,3}} \\
\textcolor{red}{a_{3,1}} & \textcolor{red}{a_{3,2}} & \textcolor{red}{a_{3,3}}
\end{vmatrix}
$$

Riporto accanto al determinante le prime due colonne:

$$
\begin{matrix}
\textcolor{red}{a_{1,1}} & \textcolor{red}{a_{1,2}} & \textcolor{red}{a_{1,3}} & \textcolor{red}{a_{1,1}} & \textcolor{red}{a_{1,2}} \\
\textcolor{red}{a_{2,1}} & \textcolor{red}{a_{2,2}} & \textcolor{red}{a_{2,3}} & \textcolor{red}{a_{2,1}} & \textcolor{red}{a_{2,2}} \\
\textcolor{red}{a_{3,1}} & \textcolor{red}{a_{3,2}} & \textcolor{red}{a_{3,3}} & \textcolor{red}{a_{3,1}} & \textcolor{red}{a_{3,2}}
\end{matrix}
$$

La regola di Sarrus dice che il valore del determinante è dato da:

$$
\textcolor{red}{D = a_{1,1} \cdot a_{2,2} \cdot a_{3,3} + a_{1,2} \cdot a_{2,3} \cdot a_{3,1} + a_{1,3} \cdot a_{2,1} \cdot a_{3,2} - a_{1,3} \cdot a_{2,2} \cdot a_{3,1} - a_{1,1} \cdot a_{2,3} \cdot a_{3,2} - a_{1,2} \cdot a_{2,1} \cdot a_{3,3}}
$$

cioè moltiplico tra loro gli elementi della diagonale principale e tra loro gli elementi delle due diagonali parallele che si sono formate e poi sottraggo il prodotto degli elementi della diagonale secondaria ed anche i prodotti degli elementi per le due diagonali parallele alla secondaria.

Per memorizzarlo meglio si può esprimere graficamente.

> E ti va anche bene! A me, ai tempi in cui studiavo, l'hanno fatta ricordare in modo equivalente così!

È equivalente, ottengo gli stessi valori senza dover riportare le prime due colonne.

***

Vediamo come utilizzarla direttamente da un esempio: riprendiamo il determinante già calcolato col metodo normale:

$$
\begin{vmatrix}
\textcolor{red}{1} & \textcolor{red}{1} & \textcolor{red}{1} \\
\textcolor{red}{2} & \textcolor{red}{-1} & \textcolor{red}{1} \\
\textcolor{red}{1} & \textcolor{red}{1} & \textcolor{red}{2}
\end{vmatrix}
$$

Riporto accanto al determinante le prime due colonne:

$$
\begin{matrix}
\textcolor{red}{1} & \textcolor{red}{1} & \textcolor{red}{1} & \textcolor{red}{1} & \textcolor{red}{1} \\
\textcolor{red}{2} & \textcolor{red}{-1} & \textcolor{red}{1} & \textcolor{red}{2} & \textcolor{red}{-1} \\
\textcolor{red}{1} & \textcolor{red}{1} & \textcolor{red}{2} & \textcolor{red}{1} & \textcolor{red}{1}
\end{matrix}
$$

Ora applico la regola di Sarrus:

$$
\textcolor{red}{= 1 \cdot (-1) \cdot 2 + 1 \cdot 1 \cdot 1 + 1 \cdot 2 \cdot 1 - 1 \cdot (-1) \cdot 1 - 1 \cdot 1 \cdot 1 - 1 \cdot 2 \cdot 2}
$$

$$
\textcolor{red}{-2 + 1 + 2 + 1 - 1 - 4 = -3}
$$