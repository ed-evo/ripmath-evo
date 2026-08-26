Calcolare il valore dell'integrale

$$
\int \frac{\textcolor{blue}{2x}}{\textcolor{blue}{x^4 + 2x^2 + 2}} \textcolor{blue}{dx}
$$

Sotto posso porre
$$
\textcolor{blue}{x^4 + 2x^2 + 2 = x^4 + 2x^2 + 1 + 1 = (x^2 + 1)^2 + 1}
$$
cioè
$$
\int \frac{\textcolor{blue}{2x}}{\textcolor{blue}{(x^2 + 1)^2 + 1}} \textcolor{blue}{dx}
$$

Inoltre osservo che la derivata di $\textcolor{blue}{x^2 + 1}$ è $\textcolor{blue}{2x}$, quindi pongo
$\textcolor{blue}{x^2 + 1} = \textcolor{red}{t}$
faccio il [differenziale](../cf/cfh.html) da una parte e dall'altra dell'uguale
$\textcolor{blue}{2x dx} = \textcolor{red}{dt}$
ricavo $dx$
$$
\textcolor{blue}{dx} = \frac{\textcolor{red}{dt}}{\textcolor{blue}{2x}}
$$
Sostituisco quello che posso nell'integrale di partenza
$$
\int \frac{\textcolor{blue}{2x}}{\textcolor{red}{t^2 + 1}} \frac{\textcolor{red}{dt}}{\textcolor{blue}{2x}}
$$

Semplifico $\textcolor{blue}{2x}$ ed ottengo
$$
\int \frac{\textcolor{red}{dt}}{\textcolor{red}{t^2 + 1}}
$$

e questo è un integrale immediato
$$
= \textcolor{red}{\arctan(t)}
$$
Ora sostituisco a $\textcolor{red}{t}$ il suo valore ed ottengo il risultato finale
$$
= \textcolor{blue}{\arctan(x^2 + 1) + c}
$$