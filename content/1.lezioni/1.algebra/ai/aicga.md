# Sostituire un valore od un gruppo di valori con variabili ausiliarie

> Devi controllare se un termine o un gruppo di termini compare più volte e sostituirlo con altre variabili in modo da rendere il sistema più semplice.

***

Esempio 1; risolvere il sistema:

$$
\begin{cases}
\textcolor{red}{\sqrt{x+1}} + \textcolor{red}{\sqrt{y-1}} = 5 \\
\textcolor{red}{x+y = 13}
\end{cases}
$$

Osserviamo la seconda equazione:
$$\textcolor{red}{x + y = 13}$$
per avere gli stessi gruppi di variabili presenti nell'equazione sopra basta aggiungere e togliere $$1$$ (cosa che non cambia di valore l'espressione)
$$\textcolor{red}{x + 1 + y - 1 = 13}$$
ora pongo

$$
\textcolor{blue}{\sqrt{x+1}} = t \quad \textcolor{blue}{\sqrt{y-1}} = u
$$

quindi il sistema diventa

$$
\begin{cases}
\textcolor{blue}{t + u = 5} \\
\textcolor{blue}{t^2 + u^2 = 13}
\end{cases}
$$

Che è un normalissimo sistema simmetrico; applico la prima formula di Waring alla seconda equazione

$$
\begin{cases}
\textcolor{blue}{t + u = 5} \\
\textcolor{blue}{(t+u)^2 - 2tu = 13}
\end{cases}
$$

Sostituisco $$5$$ al posto di $$(t+u)$$

$$
\begin{cases}
\textcolor{blue}{t + u = 5} \\
\textcolor{blue}{25 - 2tu = 13}
\end{cases}
$$

eseguo i calcoli ed ottengo

$$
\begin{cases}
\textcolor{blue}{t + u = 5} \\
\textcolor{blue}{tu = 6}
\end{cases}
$$

considero l'equazione associata

$$\textcolor{blue}{z^2 - 5z + 6 = 0}$$

risolvo ed ottengo:

$$\textcolor{blue}{z_1 = 2}$$
$$\textcolor{blue}{z_2 = 3}$$

$$
\begin{cases}
\textcolor{blue}{t_1 = 2} \\
\textcolor{blue}{u_1 = 3}
\end{cases}
\quad
\begin{cases}
\textcolor{blue}{t_2 = 3} \\
\textcolor{blue}{u_2 = 2}
\end{cases}
$$

devo quindi risolvere i due sistemi

$$
\begin{cases}
\textcolor{red}{\sqrt{x+1}} = 2 \\
\textcolor{red}{\sqrt{y-1}} = 3
\end{cases}
\quad
\begin{cases}
\textcolor{red}{\sqrt{x+1}} = 3 \\
\textcolor{red}{\sqrt{y-1}} = 2
\end{cases}
$$

Ed ottengo come risultato

$$
\begin{cases}
\textcolor{blue}{x_1 = 3} \\
\textcolor{blue}{y_1 = 10}
\end{cases}
\quad
\begin{cases}
\textcolor{blue}{x_2 = 8} \\
\textcolor{blue}{y_2 = 5}
\end{cases}
$$

***

Particolarmente importante è il caso che si presenta nei problemi con l'ellisse e l'iperbole.