[Prodotto fra numeri binari]{.text-red}

La tabella per eseguire le operazioni di prodotto è la seguente:

| $\cdot$ | $0$ | $1$ |
| :---: | :---: | :---: |
| $0$ | $0$ | $0$ |
| $1$ | $0$ | $1$ |

Cioè:

$$
0 \cdot 0 = 0
$$
$$
0 \cdot 1 = 0
$$
$$
1 \cdot 0 = 0
$$
$$
1 \cdot 1 = 1
$$

> **Nota:** Lo $0$ è detto anche "elemento assorbente" perché moltiplicato per qualunque numero lo "assorbe" facendolo diventare uguale a sé stesso: $numero \cdot 0 = 0 \cdot numero = 0$.

***

Vediamo su un semplice esempio come si esegue un prodotto fra numeri binari.

Moltiplicare: $1100101$ e $1001$.
Prima notiamo che se moltiplichiamo il numero sopra per $1$ otteniamo sempre il numero di sopra; quindi basta riportare il numero sopra per ogni cifra $1$ (opportunamente posizionato) e una fila di zeri per ogni cifra $0$.

$$
\begin{array}{r}
1100101 \\
\times 1001 \\
\hline
1100101 \\
0000000 \\
0000000 \\
1100101 \\
\hline
1110001101
\end{array}
$$

O, più semplicemente, saltiamo le file di zeri e consideriamo solamente i termini effettivi, poi sommiamo le due righe:

$$
\begin{array}{r}
1100101 \\
+ 1100101000 \\
\hline
1110001101
\end{array}
$$

***

Nel caso preso in esame abbiamo solo due $1$ per il moltiplicatore ($1001$); se invece gli $1$ sono $3, 4, 5$, è piuttosto difficile eseguire tutta assieme la somma delle righe ottenute, quindi conviene sommare a parte la prima con la seconda, il risultato con la terza, il risultato con la quarta eccetera.

Vediamo un esempio con $3$ unità.

Moltiplicare: $1100111$ e $10110$.

$$
\begin{array}{r}
1100111 \\
\times 10110 \\
\hline
1100111 \\
1100111 \\
\hline
\textcolor{red}{1001101010} \\
1100111 \\
\hline
101101000010
\end{array}
$$

***

**Esercizi**

Esegui i seguenti prodotti fra numeri binari:

- $101001 \cdot 1010 =$ [Svolgimento](pbffda.html)
- $10010 \cdot 1001100 =$ [Svolgimento](pbffdb.html)
- $101010 \cdot 1001100 =$ [Svolgimento](pbffdc.html)
- $1010110 \cdot 1001110 =$ [Svolgimento](pbffdd.html)