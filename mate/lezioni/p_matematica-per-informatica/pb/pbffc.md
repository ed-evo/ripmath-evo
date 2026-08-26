# Differenza fra numeri binari

Per eseguire le operazioni di differenza seguiremo queste regole:

$$
0 - 0 = 0
$$
$$
1 - 0 = 1
$$
$$
1 - 1 = 0
$$

Nel sistema binario, quando eseguo la differenza $10 - 1$, per eseguire $0 - 1$ devo andare "in prestito" dalla cifra precedente e quindi, valendo l'$1$ della seconda cifra $2 = 1 + 1$, devo fare $(1 + 1) - 1 = 1$; di conseguenza, al posto dell'$1$ della seconda cifra avrò $0$.
A fianco la differenza per il sistema binario $10 - 1 = 01$ con il "prestito" indicato in verde.

$$
\begin{array}{r}
\textcolor{green}{1 \rightarrow 1+1} \\
\textcolor{red}{1 \ 0} \\
- \textcolor{red}{1} \\
\hline
\textcolor{red}{0 \ 1}
\end{array}
$$

---

Vediamo su un esempio come si esegue una differenza fra numeri binari.
Sottrarre: $100010111$ da $1100110101$. Prima li metto in colonna (si parte sempre da destra):

$$
\begin{array}{r}
1100110101 \\
- \quad 100010111 \\
\hline
\end{array}
$$

Adesso sottraggo partendo da destra: sopra, in verde e con carattere più piccolo, ti scrivo i "prestiti".

$$
\begin{array}{r}
\textcolor{green}{\phantom{00000} \rightarrow 1+1 \ \rightarrow 1 \ \rightarrow 1+1 \ \rightarrow 1+1 \ \phantom{0}} \\
1100110101 \\
- \quad 100010111 \\
\hline
1000011110
\end{array}
$$

> **Nota sui calcoli:**
> - $1$ meno niente: scrivo $1$
> - $1 - 1$: scrivo $0$
> - $0 + 0 = 0$: scrivo $0$
> - $0 + 0 = 0$: scrivo $0$
> - Avendo prestato l'$1$, è rimasto $0$, quindi $0 - 0 = 0$: scrivo $0$
> - Sopra è rimasto $0$: vado a prestito e quindi $(1 + 1) - 1 = 1$: scrivo $1$
> - Questo va a prestito a sinistra e gli resta $1$ perché un $1$ l'ha prestato a destra, quindi $1 - 0 = 1$
> - Sopra è rimasto $0$: vado a prestito e quindi $(1 + 1) - 1 = 1$: scrivo $1$
> - $0 - 1$ vado a prestito: quindi $(1 + 1) - 1 = 1$
> - $1 - 1$: scrivo $0$

Se vuoi seguire i calcoli, ferma il mouse sulla cifra che ti interessa del risultato.

---

## Esercizi
Esegui le seguenti differenze fra numeri binari:

- $10100100101 - 1101001010 =$ [Svolgimento](pbffca.html)
- $10000000000 - 1011111111 =$ [Svolgimento](pbffcb.html)