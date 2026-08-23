# Asintoto obliquo

Si ha un asintoto obliquo quando la funzione, andando verso infinito, si avvicina ad una retta obliqua.

> C'è da dire subito che l'asintoto obliquo non esiste sempre perché una funzione andando all'infinito potrebbe avvicinarsi all'orizzontale oppure crescere avvicinandosi ad una parabola o ad una cubica... Questo però esula da questo corso.

Vediamo quali sono le condizioni perché una funzione ammetta asintoto obliquo della forma
$$\textcolor{red}{y = mx + q}$$

Prima di tutto bisogna dire che la funzione deve tendere all'infinito:
$$
\textcolor{red}{\lim_{x \to \infty} f(x) = \infty}
$$

Poi devono esistere $$\textcolor{red}{m}$$ e $$\textcolor{red}{q}$$, cioè devono esistere finiti i due limiti:

- $$\textcolor{red}{\lim_{x \to \infty} \frac{f(x)}{x} = m}$$
- $$\textcolor{red}{\lim_{x \to \infty} (f(x) - mx) = q}$$

***

Ti consiglio di dare un'occhiata alla [dimostrazione](chda.html).

***

Facciamo anche qui un semplice esercizio: trovare l'asintoto obliquo per la funzione
$$
\textcolor{red}{y = \frac{3x^2 - 1}{x}}
$$

Si ha subito:
$$
\textcolor{red}{\lim_{x \to \infty} \frac{3x^2 - 1}{x} = \infty}
$$

> Infatti il numeratore ha grado superiore al denominatore. Se non hai capito bene come ho fatto ridai un'occhiata alle [forme indeterminate](../cd/cdgb.html) oppure puoi calcolare la derivata sopra e sotto e rifare il limite come abbiamo visto [nelle applicazioni sulle derivate](../cf/cfdg.html).

Ora vado a calcolare (se esistono) $$\textcolor{red}{m}$$ e $$\textcolor{red}{q}$$.
Dividere una funzione per $$x$$ vuol dire moltiplicarne il denominatore per $$x$$, quindi:

$$
\textcolor{red}{m = \lim_{x \to \infty} \frac{3x^2 - 1}{x^2} = 3}
$$

quindi $$\textcolor{red}{m = 3}$$.

Calcolo $$\textcolor{red}{q}$$:

$$
\textcolor{red}{q = \lim_{x \to \infty} \frac{3x^2 - 1}{x} - 3x =}
$$

$$
\textcolor{red}{\lim_{x \to \infty} \frac{3x^2 - 1 - 3x^2}{x} =}
$$

$$
\textcolor{red}{\lim_{x \to \infty} \frac{-1}{x} = 0}
$$

quindi $$\textcolor{red}{q = 0}$$.
L'asintoto è la retta
$$\textcolor{red}{y = 3x}$$