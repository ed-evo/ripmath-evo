# esercizio

Trovare due numeri la cui somma è $10$ tale che la somma dei loro quadrati sia minima

***

La $y$ sarà la somma dei quadrati cioè:

$$
\textcolor{red}{y = (\text{primo numero})^2 + (\text{secondo numero})^2}
$$

chiamo $x$ il primo numero:

$$
\textcolor{red}{\text{primo numero} = x}
$$

Devo esprimere il secondo numero con la $x$: so che

$$
\textcolor{red}{\text{primo numero} + \text{secondo numero} = 10}
$$

$$
\textcolor{red}{\text{secondo numero} = 10 - \text{primo numero}}
$$

$$
\textcolor{red}{\text{secondo numero} = 10 - x}
$$

Scrivo la funzione:

$$
\textcolor{red}{y = x^2 + (10 - x)^2}
$$

$$
\textcolor{red}{y = x^2 + 100 - 20x + x^2}
$$

$$
\textcolor{red}{y = 2x^2 - 20x + 100}
$$

Calcolo la derivata prima e la pongo uguale a zero:

$$
\textcolor{red}{y' = 4x - 20}
$$

$$
\textcolor{red}{4x - 20 = 0}
$$

$$
\textcolor{red}{4x = 20}
$$

$$
\textcolor{red}{x = 5}
$$

Trovo il valore della $y$ in corrispondenza del valore $5$ della $x$:

$$
\textcolor{red}{y(5) = 5^2 + (10 - 5)^2 = 25 + 25 = 50}
$$

$$
\textcolor{red}{P(5, 50)}
$$

Per vedere se si tratta di un massimo o un minimo trovo la derivata seconda e ne calcolo il valore per $x = 5$:

$$
\textcolor{red}{y'' = 4}
$$

$$
\textcolor{red}{y''(5) = 4 > 0}
$$

Si tratta di un minimo come cercavamo.

***

I due numeri cercati sono $5$ e $5$, cioè la somma è minima quando i due numeri sono uguali.