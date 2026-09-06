# Problema

<span class="text-blue-600">In un numero di tre cifre la cifra delle unità è uguale a quella delle centinaia; scambiando tra loro la cifra delle unità e quella delle decine si ottiene un numero che supera di $27$ quello di partenza. Trovare il numero sapendo che la somma delle sue cifre è $12$</span>

Chiamo la cifra delle unità (e quindi anche quella delle centinaia) $x$ e quella delle decine $y$;

<span class="text-blue-600">Cifra unità = $x$</span>
<span class="text-blue-600">Cifra decine = $y$</span>

allora il mio numero sarà

$$
100x + 10y + x
$$

Scambiando la cifra delle unità con quella delle decine ottengo invece il numero

$$
100x + 10x + y
$$

e questo numero supera di $27$ quello di partenza cioè

$$
100x + 10x + y = 27 + 100x + 10y + x
$$

e questa è la prima relazione.

La seconda relazione mi dice che la somma delle cifre del numero è $12$ cioè

$$
x + x + y = 12
$$

Metto a sistema

$$
\begin{cases}
100x + 10x + y = 27 + 100x + 10y + x \\
x + x + y = 12
\end{cases}
$$

sommo

$$
\begin{cases}
9x - 9y = 27 \\
2x + y = 12
\end{cases}
$$

Posso rendere la prima equazione del sistema più semplice dividendo tutti i termini per $9$

$$
\begin{cases}
x - y = 3 \\
2x + y = 12
\end{cases}
$$

Risolvo per [addizione](../ai/aibaab.html): sommo in verticale per ricavare la $y$

[Se preferisci risolverlo per sostituzione](ahcba03a.html)

$$
\begin{aligned}
x - y &= 3 \\
2x + y &= 12 \\
\hline
3x &= 15
\end{aligned}
$$

$$
x = 15/3 = 5
$$

Moltiplico per $-2$ la prima e sommo in verticale per ricavare la $y$

$$
\begin{aligned}
-2x + 2y &= -6 \\
2x + y &= 12 \\
\hline
3y &= 6
\end{aligned}
$$

$$
y = 6/3 = 2
$$

$$
\begin{cases}
x = 5 \\
y = 2
\end{cases}
$$

<span class="text-blue-600">**Risposta:** il numero cercato è $525$</span>

$$
5 \cdot 100 + 2 \cdot 10 + 5 = 525
$$