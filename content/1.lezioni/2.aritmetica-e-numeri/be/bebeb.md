# Formule di Eulero

Abbiamo trovato che vale

$$
\textcolor{blue}{e^{iy} = \cos y + i \sin y}
$$

quindi vale anche, considerando un esponente negativo

$$
\textcolor{blue}{e^{-iy} = \cos y - i \sin y}
$$

> **Nota:** Infatti $$\cos(-a) = \cos a$$ mentre $$\sin(-a) = -\sin a$$

Facendo il sistema fra le due equazioni posso ricavare $$\cos y$$ e $$\sin y$$ in funzione di $$e^{iy}$$ ed $$e^{-iy}$$

$$
\textcolor{blue}{
\begin{cases} 
e^{iy} = \cos y + i \sin y \\ 
e^{-iy} = \cos y - i \sin y 
\end{cases}
}
$$

[Calcoli](bebeba.html)

ed ottengo:

$$
\textcolor{red}{\sin y = \frac{e^{iy} - e^{-iy}}{2i}} \quad \textcolor{red}{\cos y = \frac{e^{iy} + e^{-iy}}{2}}
$$