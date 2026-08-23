# [Calcolare un'espressione parzialmente]{.text-red}

A volte conviene calcolare il valore di tutto un gruppo per poter risolvere.
Vediamone un esempio.

## Esempio 1: risolvere il sistema

$$
\begin{cases} 
\textcolor{red}{\sqrt{\frac{x+y}{xy}} + \sqrt{\frac{xy}{x+y}} - 2 = 0} \\ 
\textcolor{red}{x - y = 0} 
\end{cases}
$$

Intanto avremo subito le condizioni di realtà (considerando i denominatori diversi da zero):
$$\textcolor{blue}{x \neq 0}; \textcolor{blue}{y \neq 0}; \textcolor{blue}{x \neq -y}$$

Osserviamo poi che le radici sono l'una inversa dell'altra, quindi poniamo:

$$
\textcolor{red}{\sqrt{\frac{x+y}{xy}} = t}
$$

Allora la prima equazione del sistema sarà:

$$
\textcolor{blue}{t + \frac{1}{t} - 2 = 0}
$$

Cioè, facendo il minimo comune multiplo e supponendo $$\textcolor{blue}{t \neq 0}$$:

$$
\textcolor{blue}{t^2 + 1 - 2t = 0}
$$

$$
\textcolor{blue}{t^2 - 2t + 1 = 0}
$$

$$
\textcolor{blue}{(t - 1)^2 = 0}
$$

Ed ottengo la soluzione (doppia: due soluzioni coincidenti):

$$
\textcolor{blue}{t = 1}
$$

Quindi posso scrivere:

$$
\textcolor{red}{\sqrt{\frac{x+y}{xy}} = 1}
$$

Che equivale, elevando al quadrato entrambi i membri:

$$
\textcolor{red}{\frac{x+y}{xy} = 1}
$$

Cioè:

$$
\textcolor{red}{x + y = xy}
$$

Devo quindi risolvere il sistema:

$$
\begin{cases} 
\textcolor{red}{x + y = xy} \\ 
\textcolor{red}{x - y = 0} 
\end{cases}
$$

Possiamo farlo per sostituzione; ricavo $$x$$ dalla seconda equazione e sostituisco nella prima:

$$
\begin{cases} 
\textcolor{red}{x + y = xy} \\ 
\textcolor{red}{x = y} 
\end{cases}
$$

$$
\begin{cases} 
\textcolor{red}{y + y = y^2} \\ 
\textcolor{red}{x = y} 
\end{cases}
$$

$$
\begin{cases} 
\textcolor{red}{y^2 - 2y = 0} \\ 
\textcolor{red}{x = y} 
\end{cases}
$$

Ottengo dalla prima equazione i due valori:

$$\textcolor{red}{y = 0}$$ che non è accettabile per le condizioni di realtà iniziali.
$$\textcolor{red}{y = 2}$$

Ottengo quindi la soluzione:

$$
\begin{cases} 
\textcolor{red}{y = 2} \\ 
\textcolor{red}{x = 2} 
\end{cases}
$$

O meglio:

$$
\begin{cases} 
\textcolor{blue}{x = 2} \\ 
\textcolor{blue}{y = 2} 
\end{cases}
$$