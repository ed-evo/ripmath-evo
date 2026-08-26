# [.text-red]esercizio

risolvere la seguente equazione:

$$
\textcolor{blue}{\frac{5}{2x - 2} + \frac{1}{2x - 3} = \frac{1}{2x + 2}}
$$

scomponiamo i denominatori

$$
\textcolor{blue}{\frac{5}{2(x - 1)} + \frac{1}{2x - 3} = \frac{1}{2(x + 1)}}
$$

È un'equazione fratta quindi prima di risolverla dobbiamo porre le condizioni di realtà: ogni termine al denominatore, che contenga la $x$, va posto diverso da zero; le costanti moltiplicate (il $2$) puoi saltarle perché sono certamente diverse da zero.

[.text-red]**C.R.**
$$
\textcolor{red}{x - 1 \neq 0 \implies x \neq 1}
$$
$$
\textcolor{red}{2x - 3 \neq 0 \implies x \neq 3/2}
$$
$$
\textcolor{red}{x + 1 \neq 0 \implies x \neq -1}
$$

Cioè se troveremo come soluzione $x = -1$, $x = 1$ o $x = 3/2$ diremo che l'equazione è impossibile.

Ora possiamo fare il minimo comune multiplo e poi semplificarlo:

$$
\textcolor{blue}{\text{m.c.m.} = 2(x-1)(x+1)(2x-3)}
$$

$$
\textcolor{blue}{\frac{5(x+1)(2x-3) + 2(x-1)(x+1)}{2(x-1)(x+1)(2x-3)} = \frac{(x-1)(2x-3)}{2(x-1)(x+1)(2x-3)}}
$$

Elimino i denominatori

> Devo moltiplicare da entrambe le parti per $2(x-1)(x+1)(2x-3)$; posso farlo perché so che ogni termine è diverso da zero.

$$
\textcolor{blue}{5(x+1)(2x-3) + 2(x-1)(x+1) = (x-1)(2x-3)}
$$

eseguo i calcoli, prima i prodotti fra parentesi

$$
\textcolor{blue}{5(2x^2 - 3x + 2x - 3) + 2(x^2 - 1) = 2x^2 - 3x - 2x + 3}
$$

poi le moltiplicazioni

> Veramente sarebbe più "matematico" sommare prima i termini simili entro parentesi, però così facendo devo fare un passaggio in più, perché dopo aver moltiplicato dovrò ancora sommare i termini simili, quindi...

$$
\textcolor{blue}{10x^2 - 15x + 10x - 15 + 2x^2 - 2 = 2x^2 - 3x - 2x + 3}
$$

conviene portare tutto prima dell'uguale

$$
\textcolor{blue}{10x^2 - 15x + 10x - 15 + 2x^2 - 2 - 2x^2 + 3x + 2x - 3 = 0}
$$

sommo i termini simili

$$
\textcolor{blue}{10x^2 - 20 = 0}
$$

divido entrambi i membri per il coefficiente di $x^2$

$$
\textcolor{blue}{\frac{10x^2}{10} = \frac{20}{10}}
$$

semplifico ed ottengo

$$
\textcolor{blue}{x^2 = 2}
$$

Applico la radice da entrambe le parti dell'uguale (il più o meno lo mettiamo sempre solo davanti al secondo termine)

$$
\textcolor{blue}{\sqrt{x^2} = \pm\sqrt{2}}
$$

Ho quindi le due soluzioni

$$
\textcolor{red}{x_1 = -\sqrt{2}} \quad \textcolor{red}{x_2 = +\sqrt{2}}
$$

e rispettano le condizioni di realtà.

> Non ti devi meravigliare se il risultato viene un numero con la radice: se consideri i numeri naturali $1, 2, 3$, i numeri con alcuni termini dopo la virgola (detti razionali perché esprimibili mediante frazioni) sono infiniti rispetto ai numeri naturali, cioè per ogni numero naturale ci sono infiniti numeri razionali; si può dimostrare che per ogni numero razionale esistono infiniti numeri esprimibili con la radice (reali); se hai un problema reale di solito ottieni un numero con la radice: è raro ottenere come soluzione un numero razionale e i numeri interi li ottieni solo in problemi preparati apposta.