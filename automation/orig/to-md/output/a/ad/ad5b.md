# [DIVISIONE FRA POLINOMI]{.text-red}
## [METODO DI RUFFINI]{.text-red}

In Matematica occorre sempre cercare di fare prima e meglio, cioè la matematica è la scienza del massimo rendimento con il minimo sforzo.

Ruffini, osservando la divisione fra un polinomio ed un binomio, si accorse che parecchie cose erano superflue, quindi elaborò una divisione più semplice. Purtroppo si può applicare solo quando dividiamo un polinomio per un binomio di primo grado, però vedrai che dovrai usarla moltissimo.

Esempio di divisione tradizionale:

$$
\begin{array}{r|l}
\textcolor{red}{2x^2 + 5x + 6} & \textcolor{red}{x + 2} \\
\cline{2-2}
\textcolor{red}{-2x^2 - 4x\phantom{+6}} & \textcolor{red}{2x + 1} \\
\cline{1-1}
\textcolor{red}{x + 6} & \\
\textcolor{red}{-x - 2} & \\
\cline{1-1}
\textcolor{red}{4} &
\end{array}
$$

Osservando la divisione fra polinomi già vista nella pagina precedente puoi notare che si incolonnano tutti i termini simili (con le stesse lettere alla stessa potenza), quindi non c'è bisogno di scrivere le lettere: basterà scrivere i numeri e le lettere saranno sottintese. Inoltre, poiché divido per un binomio, il risultato avrà un termine in meno del polinomio di partenza, quindi l'ultimo termine del polinomio lo scrivo fuori dalle sbarre.

> **Osservazione:** Consideriamo poi che quello che conta nella divisione è il secondo termine del divisore [(perché il primo rimoltiplicato viene uguale e di segno contrario, quindi va via)]{.text-purple} e siccome quando moltiplico dovrei cambiare di segno, invece di cambiare di segno il risultato cambio lui di segno e lo scrivo a sinistra.

Adesso inizio la divisione:

1. Abbasso il primo termine.
2. Poi lo moltiplico per il numero a sinistra e scrivo il risultato sotto il secondo termine (ma sopra la sbarra orizzontale).
3. Ora faccio la somma algebrica dei termini nella seconda colonna e scrivo il risultato sotto la sbarra.
4. Ora ripeto: moltiplico il divisore per il numero ottenuto e scrivo il risultato nella terza colonna sopra la sbarra.
5. Infine sommo in colonna e la divisione è terminata.

Il termine $4$ fuori dalle sbarre sarà il resto, mentre per ottenere il risultato devo rimettere le lettere ai termini: $1$ sarà il termine noto, mentre a $2$ dovrò mettere $x$. Quindi il risultato è: $2x + 1$ con $\text{resto} = 4$.

> **Nota:** Se osservi le due strutture successive ti puoi rendere conto che la divisione è la stessa fatta prima:

$$
\begin{array}{r|l}
2x^2 + 5x + 6 & x + 2 \\
\cline{2-2}
-2x^2 - 4x\phantom{+6} & 2x + 1 \\
\cline{1-1}
x + 6 & \\
-x - 2 & \\
\cline{1-1}
4 &
\end{array}
\quad \Longleftrightarrow \quad
\begin{array}{c|cc|c}
& 2 & 5 & 6 \\
-2 & & -4 & -2 \\
\hline
& 2 & 1 & 4
\end{array}
$$

[Ho bisogno di altre spiegazioni](esruf/3ga.html)

Ora su questo argomento è bene fare molti esercizi.

---

[Esercizi](../../../cdrom/cd/a0/ab/abd/abdb/abdbc.html)