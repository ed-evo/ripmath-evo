# Integrazione per serie

È l'ultima spiaggia: se non riesci a integrare in nessuno dei modi precedenti trasforma la funzione in serie di potenze e quindi integra ogni termine.

> **Nota:** Il metodo di solito è usato solamente all'Università, quindi qui ci accontentiamo di questo semplice cenno.

Facciamo un semplice esercizio, giusto per vedere applicare il metodo, su un integrale che già conosciamo.

[$$\int \cos x \, dx =$$]{.text-blue}

sviluppo $$\cos x$$ in [serie di potenze](../cj/cjgc.html)

$$
\textcolor{blue}{\cos x = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \frac{x^6}{6!} + \frac{x^8}{8!} - \dots}
$$

Ora eseguo l'integrale di ogni termine

$$
\textcolor{red}{\int 1 \, dx = x}
$$

$$
\textcolor{red}{\int -\frac{x^2}{2!} \, dx = -\frac{x^3}{3 \cdot 2!} = -\frac{x^3}{3!}}
$$

$$
\textcolor{red}{\int \frac{x^4}{4!} \, dx = \frac{x^5}{5 \cdot 4!} = \frac{x^5}{5!}}
$$

$$
\textcolor{red}{\int -\frac{x^6}{6!} \, dx = -\frac{x^7}{7 \cdot 6!} = -\frac{x^7}{7!}}
$$

$$
\textcolor{red}{\int \frac{x^8}{8!} \, dx = \frac{x^9}{9 \cdot 8!} = \frac{x^9}{9!}}
$$

$$\dots$$

quindi, osservando che i termini che abbiamo ottenuto sono quelli dello sviluppo [in serie di $$\sin x$$](../cj/cjgb.html)

$$
\textcolor{blue}{\int \cos x \, dx = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \frac{x^7}{7!} + \frac{x^9}{9!} - \dots = \sin x}
$$