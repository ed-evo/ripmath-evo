# dimostrazione

Voglio dimostrare che per l'asintoto vale

$$
\textcolor{red}{m = \lim_{x \to \infty} \frac{f(x)}{x}}
$$

e

$$
\textcolor{red}{q = \lim_{x \to \infty} (f(x) - mx)}
$$

> **Dimostrazione:**
>
> Iniziamo dal primo limite: poiché si tratta di trovare il coefficiente angolare possiamo prendere una qualunque tra le infinite rette parallele con lo stesso coefficiente angolare e quindi mi pongo nella condizione più favorevole considerando una retta passante per l'origine $y = mx$.
>
> L'asintoto è la retta che avvicina la funzione quindi se prendo sulla verticale la differenza fra la funzione e la retta questa deve diventare sempre più piccola cioè:
>
> $$
> \textcolor{red}{\lim_{x \to \infty} f(x) - mx = 0}
> $$
>
> $$
> \textcolor{red}{\lim_{x \to \infty} f(x) = \lim_{x \to \infty} mx}
> $$
>
> Estraggo la $m$ dal limite (posso farlo perché non dipende da $x$):
>
> $$
> \textcolor{red}{\lim_{x \to \infty} f(x) = m \lim_{x \to \infty} x}
> $$
>
> Ricavo la $m$:
>
> $$
> \textcolor{red}{m = \frac{\lim_{x \to \infty} f(x)}{\lim_{x \to \infty} x}}
> $$
>
> e quindi ottengo:
>
> $$
> \textcolor{red}{m = \lim_{x \to \infty} \frac{f(x)}{x}}
> $$
>
> Per il secondo limite faccio lo stesso ragionamento ma con una retta qualunque:
>
> $$
> \textcolor{red}{y = mx + q}
> $$
>
> L'asintoto è la retta che avvicina la funzione quindi se prendo sulla verticale la differenza fra la funzione e la retta questa deve diventare sempre più piccola cioè:
>
> $$
> \textcolor{red}{\lim_{x \to \infty} [ f(x) - (mx + q) ] = 0}
> $$
>
> $$
> \textcolor{red}{\lim_{x \to \infty} (f(x) - mx - q) = 0}
> $$
>
> Poiché $q$ non dipende da $x$ posso estrarlo dal limite e portarlo al secondo termine:
>
> $$
> \textcolor{red}{\lim_{x \to \infty} (f(x) - mx) - q = 0}
> $$
>
> $$
> \textcolor{red}{\lim_{x \to \infty} (f(x) - mx) = q}
> $$
>
> e leggendo a rovescio:
>
> $$
> \textcolor{red}{q = \lim_{x \to \infty} (f(x) - mx)}
> $$