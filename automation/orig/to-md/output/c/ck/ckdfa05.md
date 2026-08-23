Calcolare il valore dell'integrale

$$
\textcolor{blue}{\int \frac{1}{a^2 + x^2} \, dx}
$$

Sotto posso raccogliere $$\textcolor{blue}{a^2}$$

$$
\textcolor{blue}{a^2 \left[ 1 + \left( \frac{x^2}{a^2} \right) \right]}
$$

cioè

$$
\textcolor{blue}{\frac{1}{a^2} \int \frac{1}{1 + \left( \frac{x^2}{a^2} \right)} \, dx}
$$

pongo

$$
\textcolor{blue}{\frac{x}{a}} = \textcolor{red}{t}
$$

faccio il [differenziale](../cf/cfh.html) da una parte e dall'altra dell'uguale

$$
\textcolor{blue}{\frac{dx}{a}} = \textcolor{red}{dt}
$$

ricavo $$dx$$

$$
\textcolor{blue}{dx} = \textcolor{red}{a \, dt}
$$

Sostituisco quello che posso nell'integrale di partenza

$$
\textcolor{red}{\frac{1}{a^2} \int \frac{1}{1 + t^2} \, a \, dt}
$$

Estraggo la costante $$\textcolor{red}{a}$$

$$
= \textcolor{red}{\frac{a}{a^2} \int \frac{1}{1 + t^2} \, dt}
$$

Integro

$$
= \textcolor{red}{\frac{1}{a} \arctan(t)}
$$

Ora sostituisco a $$\textcolor{red}{t}$$ il suo valore ed ottengo il risultato finale

$$
= \textcolor{blue}{\frac{1}{a} \arctan\left( \frac{x}{a} \right) + c}
$$

> **Nota:** Questo integrale sarebbe da aggiungere agli integrali immediati.