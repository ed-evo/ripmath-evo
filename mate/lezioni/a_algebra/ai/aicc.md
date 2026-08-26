# Sistemi di secondo grado a più incognite

Per risolverli devi sostituire le incognite una alla volta sino ad avere un'equazione in una sola incognita e quindi risolvere l'equazione.
Vediamo un esercizio con $3$ incognite.

$$
\begin{cases}
\textcolor{red}{x^2 + y^2 - z^2 = 6} \\
\textcolor{red}{x - 2y - z = -1} \\
\textcolor{red}{x + y + z = 6}
\end{cases}
$$

Ricavo la $z$ dall'ultima equazione e la sostituisco nelle altre due:

$$
\begin{cases}
\textcolor{red}{x^2 + y^2 - (6 - x - y)^2 = 6} \\
\textcolor{red}{x - 2y - (6 - x - y) = -1} \\
\textcolor{red}{z = 6 - x - y}
\end{cases}
$$

Eseguo i calcoli; al posto della terza equazione (ormai usata) metto una linea:

$$
\begin{cases}
\textcolor{red}{x^2 + y^2 - (36 + x^2 + y^2 - 12x - 12y + 2xy) = 6} \\
\textcolor{red}{x - 2y - 6 + x + y = -1} \\
\textcolor{red}{\text{-------------------}}
\end{cases}
$$

$$
\begin{cases}
\textcolor{red}{x^2 + y^2 - 36 - x^2 - y^2 + 12x + 12y - 2xy = 6} \\
\textcolor{red}{2x - y = 5} \\
\textcolor{red}{\text{-------------------}}
\end{cases}
$$

$$
\begin{cases}
\textcolor{red}{- 2xy + 12x + 12y = 42} \\
\textcolor{red}{2x - y = 5} \\
\textcolor{red}{\text{-------------------}}
\end{cases}
$$

Nella prima equazione divido tutto per $-2$:

$$
\begin{cases}
\textcolor{red}{xy - 6x - 6y = -21} \\
\textcolor{red}{2x - y = 5} \\
\textcolor{red}{\text{-------------------}}
\end{cases}
$$

> Da notare che d'ora in avanti è come risolvere un sistema di secondo grado in due incognite.

Ora ricavo $y$ dalla seconda equazione e la sostituisco nella prima:

$$
\begin{cases}
\textcolor{red}{xy - 6x - 6y = -21} \\
\textcolor{red}{- y = - 2x + 5} \\
\textcolor{red}{\text{-------------------}}
\end{cases}
$$

$$
\begin{cases}
\textcolor{red}{xy - 6x - 6y = -21} \\
\textcolor{red}{y = 2x - 5} \\
\textcolor{red}{\text{-------------------}}
\end{cases}
$$

Anche al posto della seconda equazione metto una linea:

$$
\begin{cases}
\textcolor{red}{x(2x - 5) - 6x - 6(2x - 5) = -21} \\
\textcolor{red}{\text{-------------------}} \\
\textcolor{red}{\text{-------------------}}
\end{cases}
$$

Eseguo i calcoli:

$$
\begin{cases}
\textcolor{red}{2x^2 - 5x - 6x - 12x + 30 = -21} \\
\textcolor{red}{\text{-------------------}} \\
\textcolor{red}{\text{-------------------}}
\end{cases}
$$

$$
\begin{cases}
\textcolor{red}{2x^2 - 23x + 51 = 0} \\
\textcolor{red}{\text{-------------------}} \\
\textcolor{red}{\text{-------------------}}
\end{cases}
$$

Risolvo l'equazione ed ottengo:

$$
\textcolor{red}{x_1 = 3} \quad \textcolor{red}{x_2 = 17/2}
$$

Ora devo sostituire i valori trovati **uno alla volta** nelle equazioni mancanti e calcolare le incognite corrispondenti.

- Primo valore $x = 3$
$$
\begin{cases}
\textcolor{red}{x = 3} \\
\textcolor{red}{y = 2x - 5} \\
\textcolor{red}{z = 6 - x - y}
\end{cases}
$$
$$
\begin{cases}
\textcolor{red}{x = 3} \\
\textcolor{red}{y = 2(3) - 5 = 6 - 5 = 1} \\
\textcolor{red}{z = 6 - x - y}
\end{cases}
$$
$$
\begin{cases}
\textcolor{red}{x = 3} \\
\textcolor{red}{y = 1} \\
\textcolor{red}{z = 6 - 3 - 1 = 2}
\end{cases}
$$
$$
\begin{cases}
\textcolor{red}{x = 3} \\
\textcolor{red}{y = 1} \\
\textcolor{red}{z = 2}
\end{cases}
$$

- Secondo valore $x = 17/2$
$$
\begin{cases}
\textcolor{red}{x = 17/2} \\
\textcolor{red}{y = 2x - 5} \\
\textcolor{red}{z = 6 - x - y}
\end{cases}
$$
$$
\begin{cases}
\textcolor{red}{x = 17/2} \\
\textcolor{red}{y = 2(17/2) - 5 = 17 - 5 = 12} \\
\textcolor{red}{z = 6 - x - y}
\end{cases}
$$
$$
\begin{cases}
\textcolor{red}{x = 17/2} \\
\textcolor{red}{y = 12} \\
\textcolor{red}{z = 6 - 17/2 - 12 = - 29/2}
\end{cases}
$$
$$
\begin{cases}
\textcolor{red}{x = 17/2} \\
\textcolor{red}{y = 12} \\
\textcolor{red}{z = -29/2}
\end{cases}
$$

Ottengo quindi le soluzioni:

Prima soluzione:
$$
\begin{cases}
\textcolor{blue}{x = 3} \\
\textcolor{blue}{y = 1} \\
\textcolor{blue}{z = 2}
\end{cases}
$$

Seconda soluzione:
$$
\begin{cases}
\textcolor{blue}{x = 17/2} \\
\textcolor{blue}{y = 12} \\
\textcolor{blue}{z = -29/2}
\end{cases}
$$