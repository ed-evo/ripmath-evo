Calcolare il valore dell'integrale

$$
\int (\sin 3x + 5 \cos 4x) \, dx =
$$

trasformiamo in una somma di integrali ed estraiamo le costanti

$$
\int \sin 3x \, dx + 5 \int \cos 4x \, dx =
$$

ora essendo la derivata di $$3x$$ uguale a $$3$$ e la derivata di $$4x$$ uguale a $$4$$ per trasformare gli integrali basterà moltiplicare il primo per $$3$$ ed il secondo per $$4$$ e, per pareggiare, dovrò moltiplicare il primo per $$1/3$$ ed il secondo per $$1/4$$

$$
\frac{1}{3} \int 3 \sin 3x \, dx + 5 \left(\frac{1}{4}\right) \int 4 \cos 4x \, dx =
$$

ora sono integrali del tipo

$$
\textcolor{blue}{\int \sin[f(x)] \cdot f'(x) \, dx = -\cos[f(x)] + c}
$$

$$
\textcolor{blue}{\int \cos[f(x)] \cdot f'(x) \, dx = \sin[f(x)] + c}
$$

quindi ottengo

$$
\frac{1}{3} (-\cos 3x) + \frac{5}{4} \sin 4x = \frac{-\cos 3x}{3} + \frac{5 \sin 4x}{4} + c
$$