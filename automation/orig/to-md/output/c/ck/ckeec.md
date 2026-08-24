# [Volume della sfera]{.text-red}

Vediamo come trovare il volume della sfera:

Consideriamo la circonferenza di centro l'origine e raggio $r$ $\textcolor{red}{x^2 + y^2 = r^2}$ e consideriamo sull'asse $x$ l'intervallo da $-r$ a $r$; troveremo il volume della sfera di raggio $r$.

Esplicitiamo la $y$:
$$
\textcolor{red}{y^2 = r^2 - x^2}
$$

$$
\textcolor{red}{y = \pm \sqrt{r^2 - x^2}}
$$

Il più e meno significa che sono considerate sia la semicirconferenza sopra l'asse $x$ che quella sotto l'asse $x$: a noi ne basta una; consideriamo la semicirconferenza sopra l'asse delle $x$:

$$
\textcolor{red}{y = \sqrt{r^2 - x^2}}
$$

Applico la formula ricordando che il quadrato e la radice si annullano reciprocamente:

$$
\textcolor{blue}{V = \pi \int_{a}^{b} [f(x)]^2 dx = \pi \int_{-r}^{r} (r^2 - x^2) dx = \pi \left[ r^2 x - \frac{x^3}{3} \right]_{-r}^{r}}
$$

$$
\textcolor{blue}{= \pi \left( r^3 - \frac{r^3}{3} + r^3 - \frac{r^3}{3} \right) = \textcolor{red}{\frac{4}{3} \pi r^3}}
$$