Calcolare il valore dell'integrale

$$
\int \textcolor{blue}{\frac{1}{4x-3}} \, dx
$$

la derivata di $\textcolor{blue}{4x - 3}$ è $\textcolor{red}{4}$, allora pongo

$$
\textcolor{blue}{4x - 3} = \textcolor{red}{t}
$$

faccio il differenziale da una parte e dall'altra dell'uguale

$$
\textcolor{blue}{4dx} = \textcolor{red}{dt}
$$

ricavo $dx$

$$
\textcolor{blue}{dx} = \textcolor{red}{\frac{dt}{4}}
$$

Sostituisco quello che posso nell'integrale di partenza

$$
\int \textcolor{red}{\frac{1}{t} \frac{dt}{4}}
$$

Posso estrarre $\frac{1}{4}$ dall'integrale ed ottengo un integrale immediato

$$
\textcolor{red}{\frac{1}{4} \int \frac{1}{t} \, dt = \frac{1}{4} \log |t| + c}
$$

Ora sostituisco a $t$ il suo valore ed ottengo il risultato finale

$$
\textcolor{blue}{= \frac{1}{4} \log |4x - 3| + c}
$$