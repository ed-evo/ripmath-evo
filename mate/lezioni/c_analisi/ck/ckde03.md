Calcolare il valore dell'integrale

$$
\int \left( \frac{x}{\sqrt[5]{x^4}} + \frac{1}{x^2 \sqrt[3]{x^2}} \right) dx =
$$

trasformiamo in una somma di integrali

$$
= \int \frac{x}{\sqrt[5]{x^4}} dx + \int \frac{1}{x^2 \sqrt[3]{x^2}} dx =
$$

ora per trasformarli in integrali del tipo

$$
\textcolor{blue}{\int x^n dx = \frac{x^{n+1}}{n+1} + c}
$$

devo mettere i radicali in [forma esponenziale](../../a/ak/akg.html) [calcoli](ckde03a.html)

$$
= \int x^{1/5} dx + \int x^{-8/3} dx =
$$

Quindi, applicando la regola di integrazione, ottengo

$$
= \frac{x^{1/5 + 1}}{1/5 + 1} + \frac{x^{-8/3 + 1}}{-8/3 + 1} =
$$

$$
= \frac{x^{6/5}}{6/5} + \frac{x^{-5/3}}{-5/3} =
$$

riporto in forma di radice e ribalto il denominatore (moltiplico per l'inverso del denominatore)

$$
= \frac{5\sqrt[5]{x^6}}{6} - \frac{3}{5\sqrt[3]{x^5}} =
$$

[Estraggo di radice](../../a/ak/akdf.html) ed ottengo il risultato finale

$$
= \frac{5x\sqrt[5]{x}}{6} - \frac{3}{5x\sqrt[3]{x^2}} + c
$$