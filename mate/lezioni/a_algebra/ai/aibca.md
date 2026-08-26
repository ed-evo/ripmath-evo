# Sistema lineare non omogeneo

Per risolvere un sistema lineare non omogeneo di $n$ equazioni di primo grado in $n$ incognite dobbiamo:

1. Controllare la matrice completa ed incompleta e vedere se il loro rango vale $\textcolor{red}{n}$: se vale $\textcolor{red}{n}$ allora posso usare Cramer per trovare la soluzione.
2. Se i ranghi sono diversi il sistema non ammette soluzioni.
3. Se i ranghi sono uguali ad un numero $\textcolor{red}{s}$ inferiore a $\textcolor{red}{n}$ allora devo scegliere le equazioni corrispondenti al determinante il cui valore sia diverso da zero e considerare solo un numero di incognite uguale al numero di equazioni considerate spostando le altre incognite dopo l'uguale trattandole come fossero parametri e risolvere il sistema che ottengo con il metodo di Cramer (o di sostituzione). Otterrò un numero $\textcolor{red}{\infty^{n-s}}$ di soluzioni.

> **Nota:** fino a 4 incognite useremo le lettere $\textcolor{red}{x}$, $\textcolor{red}{y}$, $\textcolor{red}{z}$, $\textcolor{red}{t}$ mentre invece da 5 incognite in avanti useremo $\textcolor{red}{x_1}$, $\textcolor{red}{x_2}$, $\textcolor{red}{x_3}$, $\textcolor{red}{x_4}$, $\textcolor{red}{x_5}$, $\textcolor{red}{x_6}$, $\textcolor{red}{x_7}$,...

Vediamo un paio di esercizi:

risolvere il sistema:

$$
\begin{cases}
\textcolor{red}{y + z - t = 1} \\
\textcolor{red}{x - 2y + t = 1} \\
\textcolor{red}{3x + 2y - z - t = 0} \\
\textcolor{red}{x - z = -2}
\end{cases}
$$

[Soluzione](aibcaa.html)

***

risolvere il sistema:

$$
\begin{cases}
\textcolor{red}{x_1 + x_2 = 2} \\
\textcolor{red}{x_2 + x_3 = 3} \\
\textcolor{red}{x_3 + x_4 = 0} \\
\textcolor{red}{x_4 + x_5 = 3} \\
\textcolor{red}{-x_1 + x_5 = 2}
\end{cases}
$$

[Soluzione](aibcab.html)

***

risolvere il sistema:

$$
\begin{cases}
\textcolor{red}{x + y = 2} \\
\textcolor{red}{y + z = 3} \\
\textcolor{red}{x - z = -1} \\
\textcolor{red}{y + t = 2}
\end{cases}
$$

[Soluzione](aibcac.html)