risolvere il sistema:

$$
\begin{cases} 
\textcolor{red}{x + y = 2} \\ 
\textcolor{red}{y + z = 3} \\ 
\textcolor{red}{x - z = -1} \\ 
\textcolor{red}{y + t = 2} 
\end{cases}
$$

Considero le matrici incompleta e completa

$$
\textcolor{red}{\begin{pmatrix} 
1 & 1 & 0 & 0 \\ 
0 & 1 & 1 & 0 \\ 
1 & 0 & -1 & 0 \\ 
0 & 1 & 0 & 1 
\end{pmatrix}}
$$
[Matrice incompleta]{.text-blue}

$$
\textcolor{red}{\begin{pmatrix} 
1 & 1 & 0 & 0 & 2 \\ 
0 & 1 & 1 & 0 & 3 \\ 
1 & 0 & -1 & 0 & -1 \\ 
0 & 1 & 0 & 1 & 2 
\end{pmatrix}}
$$
[Matrice completa]{.text-blue}

Calcolo il determinante della matrice incompleta e vedo che vale:

$$
\textcolor{red}{\begin{vmatrix} 
1 & 1 & 0 & 0 \\ 
0 & 1 & 1 & 0 \\ 
1 & 0 & -1 & 0 \\ 
0 & 1 & 0 & 1 
\end{vmatrix}} = \textcolor{red}{0}
$$

Quindi il rango della matrice incompleta è inferiore a $$4$$.
Calcolo il rango della matrice completa: posso estrarre 4 determinanti di ordine $$4$$ oltre quello calcolato sopra (che coincide col determinante della matrice incompleta) e devo calcolarli finché non ne trovo uno diverso da zero:

> **Nota:** Siccome l'esercizio l'ho fatto io (e per avere la terza equazione ho fatto la differenza fra la prima e la seconda) posso osservare che la terza riga è la differenza fra le prime due e quindi i minori estratti di ordine $$4$$ contenenti la terza riga sono tutti uguali a zero. Però se non faccio queste osservazioni devo passare un pomeriggio a fare conti, allora ti conviene studiare bene le proprietà dei determinanti per vedere queste scorciatoie e fare molti esercizi per acquisire esperienza (qui è fondamentale).

Vado a calcolare se i ranghi della matrice completa ed incompleta valgono $$3$$.
Per vederlo prendo un minore che non contenga la terza riga, ad esempio il minore segnato in blu:

$$
\begin{vmatrix} 
\textcolor{blue}{1} & \textcolor{blue}{1} & \textcolor{blue}{0} & 0 \\ 
\textcolor{blue}{0} & \textcolor{blue}{1} & \textcolor{blue}{1} & 0 \\ 
1 & 0 & -1 & 0 \\ 
\textcolor{blue}{0} & \textcolor{blue}{1} & \textcolor{blue}{0} & 1 
\end{vmatrix}
$$

cioè

$$
\textcolor{blue}{\begin{vmatrix} 
1 & 1 & 0 \\ 
0 & 1 & 1 \\ 
0 & 1 & 0 
\end{vmatrix}} = \textcolor{blue}{-1}
$$

Essendo questo un minore sia della matrice completa che della matrice incompleta avrò che i ranghi valgono $$3$$.
Utilizzo il minore calcolato per evidenziare il nuovo sistema (lascio l'incognita $$t$$ come parametro):

$$
\begin{cases} 
\textcolor{red}{x + y = 2} \\ 
\textcolor{red}{y + z = 3} \\ 
\textcolor{red}{y = 2 - t} 
\end{cases}
$$

converrebbe risolverlo per sostituzione visto che la $$y$$ è già calcolata, ma, per esercizio, continuiamo con i determinanti.
Considero le matrici incompleta e completa:

$$
\textcolor{red}{\begin{pmatrix} 
1 & 1 & 0 \\ 
0 & 1 & 1 \\ 
0 & 1 & 0 
\end{pmatrix}}
$$
[Matrice incompleta]{.text-blue}

$$
\textcolor{red}{\begin{pmatrix} 
1 & 1 & 0 & 2 \\ 
0 & 1 & 1 & 3 \\ 
0 & 1 & 0 & 2-t 
\end{pmatrix}}
$$
[Matrice completa]{.text-blue}

Applico la regola di Cramer.

Calcolo la $$x$$:

$$
x = \frac{\textcolor{red}{\begin{vmatrix} 2 & 1 & 0 \\ 3 & 1 & 1 \\ 2-t & 1 & 0 \end{vmatrix}}}{\textcolor{red}{\begin{vmatrix} 1 & 1 & 0 \\ 0 & 1 & 1 \\ 0 & 1 & 0 \end{vmatrix}}} = \textcolor{red}{t}
$$

Calcolo la $$y$$:

$$
y = \frac{\textcolor{red}{\begin{vmatrix} 1 & 2 & 0 \\ 0 & 3 & 1 \\ 0 & 2-t & 0 \end{vmatrix}}}{\textcolor{red}{\begin{vmatrix} 1 & 1 & 0 \\ 0 & 1 & 1 \\ 0 & 1 & 0 \end{vmatrix}}} = \textcolor{red}{2 - t}
$$

Calcolo la $$z$$:

$$
z = \frac{\textcolor{red}{\begin{vmatrix} 1 & 1 & 2 \\ 0 & 1 & 3 \\ 0 & 1 & 2-t \end{vmatrix}}}{\textcolor{red}{\begin{vmatrix} 1 & 1 & 0 \\ 0 & 1 & 1 \\ 0 & 1 & 0 \end{vmatrix}}} = \textcolor{red}{t+1}
$$

Quindi ho il risultato:

$$
\begin{cases} 
\textcolor{red}{x = t} \\ 
\textcolor{red}{y = 2 - t} \\ 
\textcolor{red}{z = t + 1} 
\end{cases}
$$

Ho quindi infinite $\textcolor{red}{\infty^1}$ soluzioni al variare di $$t$$.