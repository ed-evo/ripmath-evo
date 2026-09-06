# Problema

<span class="text-blue-600">In un numero di due cifre la cifra delle decine supera di $2$ il doppio della cifra delle unità. Scambiando le cifre fra loro si ottiene un numero inferiore di $36$ al numero dato. Trovare il numero</span>

Chiamo la cifra delle unità $x$ e quella delle decine $y$;
<span class="text-blue-600">Cifra unità = $x$</span>
<span class="text-blue-600">Cifra decine = $y$</span>
<span class="text-blue-600">quindi il nostro numero è $10y + x$</span>

Scriviamo la prima relazione:

la cifra delle decine $y$
supera di $2 \rightarrow = 2 +$
il doppio della cifra delle unità $2x$

La seconda relazione:

Scambiando le cifre fra di loro si ottiene un numero inferiore di $36 \rightarrow 10x + y + 36$
al numero dato $\rightarrow = 10y + x$

> **Nota:** Se è inferiore di $36$ per ottenere l'uguale dovrò aggiungere $36$.

Metto a sistema:

$$
\begin{cases} y = 2 + 2x \\ 10x + y + 36 = 10y + x \end{cases}
$$

riduco a forma normale:

$$
\begin{cases} 2x - y = -2 \\ 9x - 9y = -36 \end{cases}
$$

Posso rendere la seconda equazione del sistema più semplice dividendo tutti i termini per $9$:

$$
\begin{cases} 2x - y = -2 \\ x - y = -4 \end{cases}
$$

Risolvo per sostituzione: ricavo $x$ dalla seconda equazione e sostituisco il valore nella prima:

$$
\begin{cases} 2(y-4) - y = -2 \\ x = y - 4 \end{cases}
$$

calcolo (al posto della seconda equazione metto una linea):

$$
\begin{cases} 2y - 8 - y = -2 \\ \hline \end{cases}
$$

sommo:

$$
\begin{cases} y = 6 \\ x = y - 4 \end{cases}
$$

sostituisco $6$ al posto di $y$ nella seconda equazione:

$$
\begin{cases} y = 6 \\ x = 6 - 4 = 2 \end{cases}
$$

$$
\begin{cases} x = 2 \\ y = 6 \end{cases}
$$

<span class="text-blue-600">Risposta: il numero cercato è $62$</span>