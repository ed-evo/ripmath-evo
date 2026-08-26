# secondo tipo

Devo risolvere
$$
\textcolor{blue}{\int \frac{A}{(x - x_1)^n} dx =}
$$

Estraggo la costante
$$
\textcolor{blue}{A \int \frac{1}{(x - x_1)^n} dx =}
$$

Per sostituzione pongo
$\textcolor{blue}{(x - x_1) = t}$

Faccio il differenziale da una parte e dall'altra dell'uguale ed ottengo ($x_1$ è una costante)
$\textcolor{blue}{dx = dt}$

Sostituisco nell'integrale di partenza
$$
\textcolor{blue}{A \int \frac{1}{t^n} dt = A \int t^{-n} dt = A \frac{t^{-n+1}}{(1-n)} = \frac{A}{(1-n)t^{n-1}} + c}
$$

> **Nota:** Da notare che $(1-n)$ e $(-n+1)$ sono lo stesso valore ed inoltre, portando la potenza da sopra a sotto, l'esponente della potenza cambia di segno.

Sostituendo a $t$ il suo valore ottengo il risultato finale
$$
\textcolor{blue}{\int \frac{A}{(x - x_1)^n} dx = \frac{A}{(1-n)(x - x_1)^{n-1}} + c}
$$