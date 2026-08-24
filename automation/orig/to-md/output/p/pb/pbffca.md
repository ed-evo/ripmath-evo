# [esercizio]{.text-red}

Eseguire la seguente differenza fra numeri binari:
$10100100101 - 1101001010 =$

Prima li metto in colonna (si parte sempre da destra):

$$
\begin{array}{r}
10100100101 \\
- 1101001010 \\
\hline
\end{array}
$$

Adesso sottraggo partendo da destra: sopra, in $\textcolor{green}{\text{verde}}$ e carattere più piccolo ti scrivo i prestiti.

$$
\begin{array}{r}
\textcolor{green}{\phantom{00}\rightarrow 1 \quad \rightarrow 1+1 \quad \phantom{0}\rightarrow 1+1 \quad \phantom{00000}\rightarrow 1+1} \\
10100100101 \\
- 1101001010 \\
\hline
101100011
\end{array}
$$

> **Nota:** Se vuoi seguire i calcoli, ecco il dettaglio di ogni operazione:
> - $0$ meno niente: metto una linea.
> - Questo va a prestito a sinistra e gli resta $1$ perché un $1$ l'ha prestato a destra, quindi $1-1=0$: metto una linea.
> - $0-1$ vado a prestito: $(1+1)-1=1$, scrivo $1$.
> - Avendo prestato è rimasto $0$, $0-0=0$, scrivo $0$.
> - $0-1$ vado a prestito: $(1+1)-1=1$, scrivo $1$.
> - $1-0=1$, scrivo $1$.
> - $0-0=0$, scrivo $0$.
> - $1-1=0$, scrivo $0$.
> - Questo è rimasto $0$ perché ha prestato, quindi $0-0=0$, scrivo $0$.
> - $0-1$ vado a prestito: $(1+1)-1=1$, scrivo $1$.
> - $1-0=1$, scrivo $1$.