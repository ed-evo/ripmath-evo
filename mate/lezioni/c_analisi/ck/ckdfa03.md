Calcolare il valore dell'integrale

$$
\textcolor{blue}{\int x^2 \sin x^3 dx} =
$$

siccome $\textcolor{blue}{x^2}$, a parte le costanti, è la derivata di $\textcolor{blue}{x^3}$ pongo

$$
\textcolor{blue}{x^3} = \textcolor{red}{t}
$$

faccio il differenziale da una parte e dall'altra dell'uguale

$$
\textcolor{blue}{3x^2 dx} = \textcolor{red}{dt}
$$

ricavo $dx$

$$
\textcolor{blue}{dx} = \frac{\textcolor{red}{dt}}{\textcolor{blue}{3x^2}}
$$

Sostituisco quello che posso nell'integrale di partenza

$$
\int \textcolor{blue}{x^2} \textcolor{red}{\sin t \frac{dt}{3\textcolor{blue}{x^2}}} =
$$

Semplifico $\textcolor{blue}{x^2}$ ed ottengo

$$
\int \textcolor{red}{\sin t \frac{dt}{3}} =
$$

Posso estrarre $\frac{1}{3}$ dall'integrale ed ottengo un integrale immediato

$$
= \textcolor{red}{\frac{1}{3} \int \sin t \, dt = \frac{1}{3}(-\cos t) + c}
$$

Ora sostituisco a $\textcolor{red}{t}$ il suo valore ed ottengo il risultato finale

$$
= \textcolor{blue}{-\frac{1}{3} \cos x^3 + c}
$$