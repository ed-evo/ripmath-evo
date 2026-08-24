Calcolare il valore dell'integrale

$$
\int (\sqrt[5]{x^4} + 5x\sqrt[4]{x^3} - x^2\sqrt[3]{x^2}) \, dx
$$

Trasformiamo in una somma di integrali ed estraiamo la costante $$5$$:

$$
\int \sqrt[5]{x^4} \, dx + 5 \int x\sqrt[4]{x^3} \, dx - \int x^2\sqrt[3]{x^2} \, dx
$$

Ora, per trasformarli in integrali del tipo:

[$$
\int x^n \, dx = \frac{x^{n+1}}{n+1} + c
$$]{.text-blue}

devo mettere i radicali in [forma esponenziale](../../a/ak/akg.html) [calcoli](ckde02a.html):

$$
\int x^{4/5} \, dx + 5 \int x^{7/4} \, dx - \int x^{8/3} \, dx
$$

Quindi, applicando la regola di integrazione, ottengo:

$$
\frac{x^{4/5 + 1}}{4/5 + 1} + 5\frac{x^{7/4 + 1}}{7/4 + 1} - \frac{x^{8/3 + 1}}{8/3 + 1}
$$

$$
\frac{x^{9/5}}{9/5} + 5\frac{x^{11/4}}{11/4} - \frac{x^{11/3}}{11/3}
$$

Riporto in forma di radice e ribalto il denominatore (moltiplico per l'inverso del denominatore):

$$
\frac{5\sqrt[5]{x^9}}{9} + 5\frac{4\sqrt[4]{x^{11}}}{11} - \frac{3\sqrt[3]{x^{11}}}{11}
$$

[Estraiamo dalla radice](../../a/ak/akdf.html) quello che possiamo ed otteniamo il risultato finale:

$$
\frac{5x\sqrt[5]{x^4}}{9} + \frac{20x^2\sqrt[4]{x^3}}{11} - \frac{3x^3\sqrt[3]{x^2}}{11} + c
$$