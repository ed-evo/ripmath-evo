## Forme indeterminate del tipo $$\infty / \infty$$ metodo polinomiale

Proviamo subito su un esempio:

$$
\textcolor{red}{\lim_{x \to \infty} \frac{3x^2+4x-4}{5x^2+6x-3}}
$$

Metto in evidenza $$\textcolor{red}{x^2}$$ al numeratore ed al denominatore.

Al numeratore ottengo:

$$
\textcolor{red}{x^2(3 + \frac{4}{x} - \frac{4}{x^2})}
$$

Al denominatore ottengo:

$$
\textcolor{red}{x^2(5 + \frac{6}{x} - \frac{3}{x^2})}
$$

Quindi se ora faccio:

$$
\textcolor{red}{\lim_{x \to \infty} \frac{x^2(3 + \frac{4}{x} - \frac{4}{x^2})}{x^2(5 + \frac{6}{x} - \frac{3}{x^2})}}
$$

posso semplificare sopra e sotto $$\textcolor{red}{x^2}$$ ed ottengo:

$$
\textcolor{red}{\lim_{x \to \infty} \frac{3 + \frac{4}{x} - \frac{4}{x^2}}{5 + \frac{6}{x} - \frac{3}{x^2}}}
$$

e sapendo che il limite di un numero fratto $$x$$ per $$x$$ tendente all'infinito vale zero (anche quello di un numero fratto $$x^2$$, $$x^3$$, $$x^4...$$) ottengo:

$$
\textcolor{red}{\lim_{x \to \infty} \frac{3 + \frac{4}{x} - \frac{4}{x^2}}{5 + \frac{6}{x} - \frac{3}{x^2}} = \frac{3+0-0}{5+0-0} = \frac{3}{5}}
$$