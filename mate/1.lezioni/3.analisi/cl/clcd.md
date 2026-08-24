# Equazione di Bernoulli

È un'equazione che si può ridurre a un'equazione lineare.

La nostra equazione è:

$$
\textcolor{red}{y' + p(x) y = q(x) y^n}
$$

Con $p(x)$ e $q(x)$ funzioni continue.

Per risolverla dividiamo tutto per $y^n$:

$$
\textcolor{blue}{\frac{y'}{y^n} + p(x) \frac{y}{y^n} = q(x)}
$$

Semplifico:

$$
\textcolor{blue}{\frac{y'}{y^n} + p(x) \frac{1}{y^{n-1}} = q(x)}
$$

Ora pongo:

$$
\textcolor{blue}{\frac{1}{y^{n-1}} = z}
$$

equivalente a dire:

$$
\textcolor{blue}{z = y^{1-n}}
$$

da cui ottengo, derivando (ricorda che $y$ è una funzione e quindi devi terminare con $y'$):

$$
\textcolor{blue}{z' = (1-n) \frac{y'}{y^n}}
$$

Quindi sostituisco nel primo passaggio dell'equazione:

$$
\textcolor{blue}{\frac{1}{y^{n-1}} = z} \quad \text{ed a} \quad \textcolor{blue}{\frac{y'}{y^n} = \frac{z'}{1-n}}
$$

ed ottengo:

$$
\textcolor{blue}{\frac{z'}{1-n} + z p(x) = q(x)}
$$

o meglio, facendo il minimo comune multiplo:

$$
\textcolor{red}{z' + (1-n) p(x) z = (1-n) q(x)}
$$

che è una funzione lineare non omogenea del primo ordine.

---

## Risolviamo l'equazione

$$
\textcolor{red}{y' + xy = x y^2}
$$

Per risolverla divido tutto per $y^2$:

$$
\textcolor{blue}{\frac{y'}{y^2} + x \frac{y}{y^2} = x}
$$

Semplifico:

$$
\textcolor{blue}{\frac{y'}{y^2} + x \frac{1}{y} = x}
$$

Pongo:

$$
\textcolor{blue}{\frac{1}{y} = z}
$$

da cui:

$$
\textcolor{blue}{z' = -\frac{y'}{y^2}}
$$

e quindi sostituendo:

$$
\textcolor{blue}{-z' + xz = x}
$$

o meglio:

$$
\textcolor{blue}{z' - xz = -x}
$$

Applichiamo la formula risolutiva:

$$
\textcolor{blue}{z = c e^{\int -x dx} \left[ \int x \cdot e^{\int x dx} dx + k \right]}
$$

L'integrale di $x$ è $x^2 / 2$.

$$
\textcolor{blue}{z = c e^{(x^2)/2} \left[ \int x \cdot e^{(x^2)/2} dx + k \right]}
$$

Risolviamo l'integrale per sostituzione ed otteniamo:

$$
\textcolor{blue}{= c e^{(x^2)/2} \left[ e^{(x^2)/2} + k \right]}
$$

Moltiplichiamo:

$$
\textcolor{blue}{= c e^{(x^2)/2 + (x^2)/2} + ck e^{(x^2)/2}}
$$

ed otteniamo l'integrale generale:

$$
\textcolor{red}{= c e^{x^2} + ck e^{(x^2)/2}}
$$

con $c$ e $k$ costanti.