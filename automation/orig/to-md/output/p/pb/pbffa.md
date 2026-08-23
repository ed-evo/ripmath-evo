# [Somma fra numeri binari]{.text-red}

Ti ripeto che, come abbiamo già detto, la tabella per eseguire le operazioni di somma (come la tavola pitagorica per la somma) è la seguente:

$$
\begin{array}{|c|c|c|}
\hline
+ & 0 & 1 \\
\hline
0 & 0 & 1 \\
\hline
1 & 1 & 10 \\
\hline
\end{array}
$$

Cioè:

$$
0 + 0 = 0
$$
$$
0 + 1 = 1
$$
$$
1 + 0 = 1
$$
$$
1 + 1 = 10
$$

Nel sistema binario, quando eseguo la somma $$1+1$$ scrivo $$0$$ e riporto $$1$$ nella colonna delle coppie $$1+1=10$$: cioè per le operazioni, la coppia corrisponde alla decina nel sistema decimale. 

A fianco la somma $$1+1=10$$ col riporto in verde per il sistema binario:

$$
\begin{array}{r}
\textcolor{green}{1 \leftarrow} \\
1 \\
+ \phantom{0} 1 \\
\hline
10
\end{array}
$$

---

Vediamo su un esempio come si esegue una somma fra numeri binari. Sommare: $$1100010101$$ e $$100010111$$. Prima li metto in colonna (si parte sempre da destra):

$$
\begin{array}{r}
1100010101 \\
+ \phantom{0}100010111 \\
\hline
\end{array}
$$

Adesso sommo partendo da destra: sopra, in verde e con carattere più piccolo, ti scrivo i riporti:

$$
\begin{array}{r}
\textcolor{green}{1 \leftarrow 1 \leftarrow \phantom{0} \phantom{0} \phantom{0} 1 \leftarrow \phantom{0} 1 \leftarrow 1 \leftarrow 1 \leftarrow} \\
1100010101 \\
+ \phantom{0}100010111 \\
\hline
10000101100
\end{array}
$$

> **Nota sui calcoli:**
> - Ultima cifra: $$1+1$$, scrivo $$0$$ e riporto $$1$$.
> - Penultima cifra: $$0+1 + 1$$ (riporto), scrivo $$0$$ e riporto $$1$$.
> - Terza cifra: $$1+1 + 1$$ (riporto), scrivo $$1$$ e riporto $$1$$.
> - Quarta cifra: $$0+0 + 1$$ (riporto), scrivo $$1$$.
> - Quinta cifra: $$1+1$$, scrivo $$0$$ e riporto $$1$$.
> - Sesta cifra: $$0+0 + 1$$ (riporto), scrivo $$1$$.
> - Settima cifra: $$1+0$$, scrivo $$0$$ e riporto $$1$$ (come indicato nell'esempio).
> - Ottava cifra: $$0+0 + 1$$ (riporto), scrivo $$1$$.
> - Nona cifra: $$0+0 + 1$$ (riporto), scrivo $$1$$ e riporto $$1$$.
> - Decima cifra: $$1+1 + 1$$ (riporto), scrivo $$0$$ e riporto $$1$$.
> - Undicesima cifra: scrivo il riporto $$1$$.

Se vuoi seguire i calcoli, puoi analizzare ogni singola cifra del risultato.

---

### Esercizi

Esegui le seguenti somme fra numeri binari:

- $$10010101101 + 1110000 =$$ [Svolgimento](pbffaa.html)
- $$1111111111 + 100000001 =$$ [Svolgimento](pbffab.html)

Trasforma i seguenti numeri in binari, esegui le operazioni e poi riporta il risultato in forma decimale:

- $$67_{10} + 35_{10} =$$ [Svolgimento](pbffac.html)
- $$680_{10} + 378_{10} =$$ [Svolgimento](pbffad.html)

---