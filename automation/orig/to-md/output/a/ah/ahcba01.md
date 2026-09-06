# Problema

In questo come negli altri problemi io farò tutti i passaggi, tu, naturalmente, puoi abbreviare

***

<span class="text-blue-500">Determinare due numeri sapendo che il minore supera di 6 la metà del maggiore e che la somma dei $2/5$ del maggiore e di $1/4$ del minore è $12$</span>

La prima frase mi dice che devo determinare due numeri quindi uno lo chiamo $x$ e l'altro $y$

<span class="text-blue-500">1° Numero = $x$ (maggiore)</span>
<span class="text-blue-500">2° Numero = $y$ (minore)</span>

e dopo il "sapendo che" c'è la prima relazione da scrivere:

il minore $\rightarrow$ $y$
supera di 6 $\rightarrow$ $= 6 +$
la metà del maggiore $\rightarrow$ $\frac{1}{2}x$

e dopo "e che" c'è la seconda relazione da scrivere:

la somma dei $2/5$ del maggiore e $\rightarrow$ $\frac{2}{5}x +$
di $1/4$ del minore $\rightarrow$ $\frac{1}{4}y$
è $12$ $\rightarrow$ $= 12$

Raccogliendo le due relazioni ottengo il sistema:

$$
\begin{cases}
y = 6 + \frac{1}{2}x \\
\frac{2}{5}x + \frac{1}{4}y = 12
\end{cases}
$$

Lo riduco a [forma normale](ahcba01a.html): faccio il minimo comune multiplo

$$
\begin{cases}
\frac{2y}{2} = \frac{12 + x}{2} \\
\frac{8x + 5y}{20} = \frac{240}{20}
\end{cases}
$$

Elimino i denominatori

$$
\begin{cases}
2y = 12 + x \\
8x + 5y = 240
\end{cases}
$$

porto le $x$ e le $y$ prima dell'uguale ed i numeri dopo l'uguale

$$
\begin{cases}
-x + 2y = 12 \\
8x + 5y = 240
\end{cases}
$$

cambio di segno la prima equazione (di solito si vuole la $x$ positiva)

$$
\begin{cases}
x - 2y = -12 \\
8x + 5y = 240
\end{cases}
$$

Risolvo per sostituzione: ricavo $x$ dalla prima equazione e sostituisco il valore nella seconda

$$
\begin{cases}
x = 2y - 12 \\
8(2y - 12) + 5y = 240
\end{cases}
$$

eseguo i calcoli (al posto della prima equazione metto una linea)

$$
\begin{cases}
\text{-------------------} \\
16y - 96 + 5y = 240
\end{cases}
$$

separo le $y$ ed i numeri

$$
\begin{cases}
\text{-------------------} \\
16y + 5y = 240 + 96
\end{cases}
$$

sommo

$$
\begin{cases}
\text{-------------------} \\
21y = 336
\end{cases}
$$

$$
\begin{cases}
x = 2y - 12 \\
y = \frac{336}{21} = 16
\end{cases}
$$

sostituisco $16$ al posto di $y$ nella prima equazione

$$
\begin{cases}
x = 2(16) - 12 \\
y = 16
\end{cases}
$$

$$
\begin{cases}
x = 32 - 12 = 20 \\
y = 16
\end{cases}
$$

$$
\begin{cases}
x = 20 \\
y = 16
\end{cases}
$$

<span class="text-blue-500">Risposta: i due numeri cercati sono $x=20$ ed $y=16$</span>