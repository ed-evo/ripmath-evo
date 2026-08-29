# Esercizio

$\textcolor{red}{(x^6 - 64) : (x^2 - 4) =}$

Prima di impostare la divisione dobbiamo rendere i polinomi ordinati.  
Possiamo considerarlo come:  
$\textcolor{red}{(x^6 + 0x^5 + 0x^4 + 0x^3 + 0x^2 + 0x - 64) : (x^2 + 0x - 4) =}$

Ora impostiamo la divisione:

$$
\begin{array}{rccccc|l}
\textcolor{red}{x^6} & \textcolor{red}{//} & \textcolor{red}{//} & \textcolor{red}{//} & \textcolor{red}{//} & \textcolor{red}{//} & \textcolor{red}{-64} & \textcolor{red}{x^2} & \textcolor{red}{//} & \textcolor{red}{-4} \\
\hline
&&&&&&&
\end{array}
$$

Essendo il divisore composto da tre spazi consideriamo tre spazi.  
Facciamo il primo termine diviso il primo termine:  
$\textcolor{blue}{x^6 : x^2 = x^4}$  
Scrivo $\textcolor{blue}{x^4}$ al primo posto nel divisore.

$$
\begin{array}{rccccc|l}
\textcolor{red}{x^6} & \textcolor{red}{//} & \textcolor{red}{//} & \textcolor{red}{//} & \textcolor{red}{//} & \textcolor{red}{//} & \textcolor{red}{-64} & \textcolor{red}{x^2} & \textcolor{red}{//} & \textcolor{red}{-4} \\
\hline
&&&&&&& \textcolor{blue}{x^4}
\end{array}
$$

Ora moltiplico $\textcolor{blue}{x^4}$ per il divisore $\textcolor{blue}{x^2 - 4}$ ed ottengo $\textcolor{blue}{x^6 - 4x^4}$.  
Naturalmente devo considerarlo ordinato, cioè:  
$\textcolor{blue}{x^6 + 0x^5 - 4x^4}$  
Ora lo scrivo nelle rispettive colonne cambiandolo di segno:

$$
\begin{array}{rccccc|l}
\textcolor{red}{x^6} & \textcolor{red}{//} & \textcolor{red}{//} & \textcolor{red}{//} & \textcolor{red}{//} & \textcolor{red}{//} & \textcolor{red}{-64} & \textcolor{red}{x^2} & \textcolor{red}{//} & \textcolor{red}{-4} \\
\hline
\textcolor{blue}{-x^6} & \textcolor{blue}{//} & \textcolor{blue}{+4x^4} &&&&& \textcolor{red}{x^4}
\end{array}
$$

Sommo in verticale ed ottengo:

$$
\begin{array}{rccccc|l}
\textcolor{red}{x^6} & \textcolor{red}{//} & \textcolor{red}{//} & \textcolor{red}{//} & \textcolor{red}{//} & \textcolor{red}{//} & \textcolor{red}{-64} & \textcolor{red}{x^2} & \textcolor{red}{//} & \textcolor{red}{-4} \\
\hline
\textcolor{red}{-x^6} & \textcolor{red}{//} & \textcolor{red}{+4x^4} &&&&& \textcolor{red}{x^4} \\
\hline
\textcolor{red}{//} & \textcolor{red}{//} & \textcolor{red}{+4x^4}
\end{array}
$$

Ora abbasso due posti perché devo sempre considerarne tre (tanti quanti sono i posti del divisore):

$$
\begin{array}{rccccc|l}
\textcolor{red}{x^6} & \textcolor{red}{//} & \textcolor{red}{//} & \textcolor{red}{//} & \textcolor{red}{//} & \textcolor{red}{//} & \textcolor{red}{-64} & \textcolor{red}{x^2} & \textcolor{red}{//} & \textcolor{red}{-4} \\
\hline
\textcolor{red}{-x^6} & \textcolor{red}{//} & \textcolor{red}{+4x^4} &&&&& \textcolor{red}{x^4} \\
\hline
\textcolor{red}{//} & \textcolor{red}{//} & \textcolor{red}{+4x^4} & \textcolor{blue}{//} & \textcolor{blue}{//}
\end{array}
$$

Ricomincio da capo: primo termine diviso primo termine  
$\textcolor{blue}{4x^4 : x^2 = +4x^2}$  
Scrivo $\textcolor{blue}{+4x^2}$ al secondo posto del quoziente.

$$
\begin{array}{rccccc|l}
\textcolor{red}{x^6} & \textcolor{red}{//} & \textcolor{red}{//} & \textcolor{red}{//} & \textcolor{red}{//} & \textcolor{red}{//} & \textcolor{red}{-64} & \textcolor{red}{x^2} & \textcolor{red}{//} & \textcolor{red}{-4} \\
\hline
\textcolor{red}{-x^6} & \textcolor{red}{//} & \textcolor{red}{+4x^4} &&&&& \textcolor{red}{x^4} & \textcolor{blue}{+4x^2} \\
\hline
\textcolor{red}{//} & \textcolor{red}{//} & \textcolor{red}{+4x^4} & \textcolor{red}{//} & \textcolor{red}{//}
\end{array}
$$

Ora moltiplico $\textcolor{blue}{+4x^2}$ per il divisore:  
$\textcolor{blue}{+4x^2 \cdot (x^2 - 4) = +4x^4 - 16x^2}$  
Ricordando che è ordinato come $\textcolor{blue}{+4x^4 + 0x^3 - 16x^2}$, lo scrivo nella divisione, naturalmente cambiandolo di segno:

$$
\begin{array}{rccccc|l}
\textcolor{red}{x^6} & \textcolor{red}{//} & \textcolor{red}{//} & \textcolor{red}{//} & \textcolor{red}{//} & \textcolor{red}{//} & \textcolor{red}{-64} & \textcolor{red}{x^2} & \textcolor{red}{//} & \textcolor{red}{-4} \\
\hline
\textcolor{red}{-x^6} & \textcolor{red}{//} & \textcolor{red}{+4x^4} &&&&& \textcolor{red}{x^4} & \textcolor{red}{+4x^2} \\
\hline
\textcolor{red}{//} & \textcolor{red}{//} & \textcolor{red}{+4x^4} & \textcolor{red}{//} & \textcolor{red}{//} \\
&& \textcolor{blue}{-4x^4} & \textcolor{blue}{//} & \textcolor{blue}{+16x^2}
\end{array}
$$

Sommo in verticale ed ottengo:

$$
\begin{array}{rccccc|l}
\textcolor{red}{x^6} & \textcolor{red}{//} & \textcolor{red}{//} & \textcolor{red}{//} & \textcolor{red}{//} & \textcolor{red}{//} & \textcolor{red}{-64} & \textcolor{red}{x^2} & \textcolor{red}{//} & \textcolor{red}{-4} \\
\hline
\textcolor{red}{-x^6} & \textcolor{red}{//} & \textcolor{red}{+4x^4} &&&&& \textcolor{red}{x^4} & \textcolor{red}{+4x^2} \\
\hline
\textcolor{red}{//} & \textcolor{red}{//} & \textcolor{red}{+4x^4} & \textcolor{red}{//} & \textcolor{red}{//} \\
&& \textcolor{red}{-4x^4} & \textcolor{red}{//} & \textcolor{red}{+16x^2} \\
\hline
&& \textcolor{red}{//} & \textcolor{red}{//} & \textcolor{red}{+16x^2}
\end{array}
$$

Abbasso altre due colonne:

$$
\begin{array}{rccccc|l}
\textcolor{red}{x^6} & \textcolor{red}{//} & \textcolor{red}{//} & \textcolor{red}{//} & \textcolor{red}{//} & \textcolor{red}{//} & \textcolor{red}{-64} & \textcolor{red}{x^2} & \textcolor{red}{//} & \textcolor{red}{-4} \\
\hline
\textcolor{red}{-x^6} & \textcolor{red}{//} & \textcolor{red}{+4x^4} &&&&& \textcolor{red}{x^4} & \textcolor{red}{+4x^2} \\
\hline
\textcolor{red}{//} & \textcolor{red}{//} & \textcolor{red}{+4x^4} & \textcolor{red}{//} & \textcolor{red}{//} \\
&& \textcolor{red}{-4x^4} & \textcolor{red}{//} & \textcolor{red}{+16x^2} \\
\hline
&& \textcolor{red}{//} & \textcolor{red}{//} & \textcolor{red}{+16x^2} & \textcolor{blue}{//} & \textcolor{blue}{-64}
\end{array}
$$

Ricomincio da capo: primo termine diviso primo termine  
$\textcolor{blue}{+16x^2 : x^2 = +16}$  
Scrivo $\textcolor{blue}{16}$ di seguito nel quoziente.

$$
\begin{array}{rccccc|l}
\textcolor{red}{x^6} & \textcolor{red}{//} & \textcolor{red}{//} & \textcolor{red}{//} & \textcolor{red}{//} & \textcolor{red}{//} & \textcolor{red}{-64} & \textcolor{red}{x^2} & \textcolor{red}{//} & \textcolor{red}{-4} \\
\hline
\textcolor{red}{-x^6} & \textcolor{red}{//} & \textcolor{red}{+4x^4} &&&&& \textcolor{red}{x^4} & \textcolor{red}{+4x^2} & \textcolor{blue}{+16} \\
\hline
\textcolor{red}{//} & \textcolor{red}{//} & \textcolor{red}{+4x^4} & \textcolor{red}{//} & \textcolor{red}{//} \\
&& \textcolor{red}{-4x^4} & \textcolor{red}{//} & \textcolor{red}{+16x^2} \\
\hline
&& \textcolor{red}{//} & \textcolor{red}{//} & \textcolor{red}{+16x^2} & \textcolor{red}{//} & \textcolor{red}{-64}
\end{array}
$$

Ora moltiplico $\textcolor{blue}{16}$ per il divisore:  
$\textcolor{blue}{16 \cdot (x^2 - 4) = 16x^2 - 64}$  
Ricordando che è ordinato come $\textcolor{blue}{16x^2 + 0x - 64}$, lo scrivo nella divisione, naturally cambiandolo di segno:

$$
\begin{array}{rccccc|l}
\textcolor{red}{x^6} & \textcolor{red}{//} & \textcolor{red}{//} & \textcolor{red}{//} & \textcolor{red}{//} & \textcolor{red}{//} & \textcolor{red}{-64} & \textcolor{red}{x^2} & \textcolor{red}{//} & \textcolor{red}{-4} \\
\hline
\textcolor{red}{-x^6} & \textcolor{red}{//} & \textcolor{red}{+4x^4} &&&&& \textcolor{red}{x^4} & \textcolor{red}{+4x^2} & \textcolor{red}{+16} \\
\hline
\textcolor{red}{//} & \textcolor{red}{//} & \textcolor{red}{+4x^4} & \textcolor{red}{//} & \textcolor{red}{//} \\
&& \textcolor{red}{-4x^4} & \textcolor{red}{//} & \textcolor{red}{+16x^2} \\
\hline
&& \textcolor{red}{//} & \textcolor{red}{//} & \textcolor{red}{+16x^2} & \textcolor{red}{//} & \textcolor{red}{-64} \\
&&&& \textcolor{blue}{-16x^2} & \textcolor{blue}{//} & \textcolor{blue}{+64}
\end{array}
$$

Sommo in verticale ed ottengo:

$$
\begin{array}{rccccc|l}
\textcolor{red}{x^6} & \textcolor{red}{//} & \textcolor{red}{//} & \textcolor{red}{//} & \textcolor{red}{//} & \textcolor{red}{//} & \textcolor{red}{-64} & \textcolor{red}{x^2} & \textcolor{red}{//} & \textcolor{red}{-4} \\
\hline
\textcolor{red}{-x^6} & \textcolor{red}{//} & \textcolor{red}{+4x^4} &&&&& \textcolor{red}{x^4} & \textcolor{red}{+4x^2} & \textcolor{red}{+16} \\
\hline
\textcolor{red}{//} & \textcolor{red}{//} & \textcolor{red}{+4x^4} & \textcolor{red}{//} & \textcolor{red}{//} \\
&& \textcolor{red}{-4x^4} & \textcolor{red}{//} & \textcolor{red}{+16x^2} \\
\hline
&& \textcolor{red}{//} & \textcolor{red}{//} & \textcolor{red}{+16x^2} & \textcolor{red}{//} & \textcolor{red}{-64} \\
&&&& \textcolor{red}{-16x^2} & \textcolor{red}{//} & \textcolor{red}{+64} \\
\hline
&&&& \textcolor{red}{//} & \textcolor{red}{//} & \textcolor{red}{//}
\end{array}
$$