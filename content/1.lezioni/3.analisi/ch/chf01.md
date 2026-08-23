Trovare l'equazione degli asintoti per la funzione

$$
\textcolor{red}{y = \frac{x^4 - 1}{x}}
$$

il campo di esistenza è per tutti i valori eccetto $$x = 0$$ per cui si annulla il denominatore
calcolo:

$$
\textcolor{red}{\lim_{x \to 0} \frac{x^4 - 1}{x} = \frac{-1}{0} = \infty}
$$

quindi la retta

$$
\textcolor{red}{x = 0}
$$

è un asintoto verticale (sarebbe poi l'asse delle $$y$$)
Per tracciare al meglio l'andamento della funzione vicino all'asintoto calcoliamo i limiti destro e sinistro della funzione nel punto $$0$$

- limite sinistro:
$$
\textcolor{red}{\lim_{x \to 0^-} \frac{x^4 - 1}{x}}
$$
per calcolare un limite di questo genere basta sostituire alla $$x$$ un valore un pochino più piccolo di $$0$$ (ad esempio $$-0,1$$) e fare il conto dei segni

$$
\textcolor{red}{\frac{(-0,1)^4 - 1}{-0,1}}
$$

il numeratore è negativo come il denominatore quindi l'espressione è positiva cioè

$$
\textcolor{red}{\lim_{x \to 0^-} \frac{x^4 - 1}{x} = +\infty}
$$

- limite destro:
$$
\textcolor{red}{\lim_{x \to 0^+} \frac{x^4 - 1}{x}}
$$
per calcolare un limite di questo genere basta sostituire alla $$x$$ un valore un pochino più grande di $$0$$ (ad esempio $$0,1$$) e fare il conto dei segni

$$
\textcolor{red}{\frac{(+0,1)^4 - 1}{+0,1}}
$$

il numeratore è negativo mentre il denominatore è positivo quindi l'espressione è negativa cioè

$$
\textcolor{red}{\lim_{x \to 0^+} \frac{x^4 - 1}{x} = -\infty}
$$

quindi il risultato è quello della figura qui sotto

$$\textcolor{red}{\lim_{x \to 0^-} f(x) = +\infty}$$ $$\textcolor{red}{\lim_{x \to 0^+} f(x) = -\infty}$$

Per quanto riguarda l'asintoto orizzontale od obliquo possiamo dire che:

$$
\textcolor{red}{\lim_{x \to \infty} \frac{x^4 - 1}{x} = \infty}
$$

Potrebbe esistere l'asintoto obliquo della forma $$y = mx + q$$ ma

$$
\textcolor{red}{\lim_{x \to \infty} \frac{f(x)}{x} = \infty}
$$

infatti:

$$
\textcolor{red}{\lim_{x \to \infty} \frac{x^4 - 1}{x^2} = \infty = m}
$$

quindi $$m$$ non è definita e non esiste l'asintoto obliquo.

> **Nota:** È più semplice dire che non può esistere l'asintoto obliquo perché il numeratore supera di più di un grado il denominatore.