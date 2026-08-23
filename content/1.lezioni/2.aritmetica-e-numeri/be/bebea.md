# [Funzione esponenziale con esponente immaginario]{.text-red}

Partiamo dallo [sviluppo in serie della funzione esponenziale](../../c/cj/cjga.html):

$$
\textcolor{blue}{e^x = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \frac{x^4}{4!} + \frac{x^5}{5!} + \dots}
$$

Sostituiamo ad $$x$$ il numero immaginario $$iy$$ ed otteniamo

$$
\textcolor{blue}{e^{iy} = 1 + iy + \frac{i^2y^2}{2!} + \frac{i^3y^3}{3!} + \frac{i^4y^4}{4!} + \frac{i^5y^5}{5!} + \dots}
$$

e, sostituendo alle potenze di $$i$$ i [relativi valori](beaa.html), abbiamo

$$
\textcolor{blue}{e^{iy} = 1 + iy - \frac{y^2}{2!} - \frac{iy^3}{3!} + \frac{y^4}{4!} + \frac{iy^5}{5!} + \dots}
$$

Ora separiamo i termini con la $$i$$ dai termini senza la $$i$$

$$
\textcolor{blue}{e^{iy} = 1 - \frac{y^2}{2!} + \frac{y^4}{4!} + \dots + iy - \frac{iy^3}{3!} + \frac{iy^5}{5!} + \dots}
$$

Raccolgo la $$i$$ ed ottengo

$$
\textcolor{blue}{e^{iy} = 1 - \frac{y^2}{2!} + \frac{y^4}{4!} + \dots + i \left( y - \frac{y^3}{3!} + \frac{y^5}{5!} + \dots \right)}
$$

Ora i termini prima delle parentesi sono lo [sviluppo della funzione $$z = \cos y$$](../../c/cj/cjgc.html) ed i termini dentro parentesi sono lo [sviluppo della funzione $$z = \sin y$$](../../c/cj/cjgb.html), quindi vale:

$$
\textcolor{red}{e^{iy} = \cos y + i \sin y}
$$

Questa è la formula che stavamo cercando.