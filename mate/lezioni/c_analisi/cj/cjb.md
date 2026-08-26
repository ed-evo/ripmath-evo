# Sviluppo in serie di alcune funzioni razionali

Le serie di alcune funzioni razionali erano note già prima del calcolo differenziale; le propongo qui perché oltre che ottimo esercizio mentale, forniscono un meccanismo utile per trattare alcune funzioni razionali.

Facciamolo su un esempio: considero la funzione razionale

$$
\textcolor{red}{y = \frac{1}{1 - x}}
$$

Sopra tolgo e aggiungo $x$

$$
\textcolor{red}{y = \frac{1 - x + x}{1 - x}}
$$

Ora spezzo la frazione

$$
\textcolor{red}{y = \frac{1 - x}{1 - x} + \frac{x}{1 - x}}
$$

Semplificando ottengo

$$
\textcolor{red}{y = 1 + \frac{x}{1 - x}}
$$

Ora tolgo e aggiungo $x^2$ al numeratore della frazione

$$
\textcolor{red}{y = 1 + \frac{x - x^2 + x^2}{1 - x}}
$$

Spezzo la frazione

$$
\textcolor{red}{y = 1 + \frac{x - x^2}{1 - x} + \frac{x^2}{1 - x}}
$$

Metto in evidenza la $x$ nella prima frazione

$$
\textcolor{red}{y = 1 + \frac{x(1 - x)}{1 - x} + \frac{x^2}{1 - x}}
$$

Semplifico ed ottengo

$$
\textcolor{red}{y = 1 + x + \frac{x^2}{1 - x}}
$$

Ora posso togliere e aggiungere $x^3$ al numeratore della frazione

$$
\textcolor{red}{y = 1 + x + \frac{x^2 - x^3 + x^3}{1 - x}}
$$

Spezzo la frazione

$$
\textcolor{red}{y = 1 + x + \frac{x^2 - x^3}{1 - x} + \frac{x^3}{1 - x}}
$$

Metto in evidenza $x^2$ nella prima frazione

$$
\textcolor{red}{y = 1 + x + \frac{x^2(1 - x)}{1 - x} + \frac{x^3}{1 - x}}
$$

Semplifico ed ottengo

$$
\textcolor{red}{y = 1 + x + x^2 + \frac{x^3}{1 - x}}
$$

Ora posso togliere e aggiungere $x^4$ al numeratore della frazione...

Posso continuare all'infinito ed otterrò per la mia funzione lo sviluppo

$$
\textcolor{red}{y = \frac{1}{1 - x} = 1 + x + x^2 + x^3 + x^4 + x^5 \dots}
$$

***

> **Esercizio:** Sviluppare in serie
> $$
> \textcolor{red}{y = \frac{1}{1 + x^2}}
> $$
> [soluzione](cjba.html)