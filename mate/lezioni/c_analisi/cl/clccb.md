# Equazioni differenziali del primo ordine lineari non omogenee

> Come prima stesura mi limito a fornire la formula risolutiva ed un esempio di soluzione

La nostra equazione è:

$$
\textcolor{red}{y' + p(x) y = q(x)}
$$

Con $p(x)$ e $q(x)$ espressioni in $x$.

Utilizzeremo la formula risolutiva:

$$
\textcolor{red}{y = e^{-\int p(x) dx} \left[ \int q(x) \cdot e^{\int p(x) dx} dx + k \right]}
$$

con $k$ costante.

***

Risolviamo l'equazione:

$$
\textcolor{red}{y' + y \tan x = \sin x}
$$

Nel nostro caso abbiamo:

$$
\textcolor{blue}{p(x) = \tan x \quad q(x) = \sin x}
$$

Applichiamo la formula risolutiva:

$$
\textcolor{blue}{y = e^{-\int \tan x dx} \left[ \int \sin x \cdot e^{\int \tan x dx} dx + k \right]}
$$

L'integrale di $\tan x$ è $-\log(\cos x)$. Sostituiamo:

$$
\textcolor{blue}{= e^{-[-\log(\cos x)]} \left[ \int \sin x \cdot e^{\log(\cos x)} dx + k \right]}
$$

$$
\textcolor{blue}{= e^{\log(\cos x)} \left[ \int \sin x \cdot e^{-\log(\cos x)} dx + k \right]}
$$

Per la proprietà del logaritmo di una potenza:

$$
\textcolor{blue}{= e^{\log(\cos x)} \left[ \int \sin x \cdot e^{\log(\cos^{-1} x)} dx + k \right]}
$$

Ricordando che l'esponenziale è l'inverso del logaritmo naturale e che $\cos^{-1} x = 1/\cos x$:

$$
\textcolor{blue}{= \cos x \left[ \int \frac{\sin x}{\cos x} dx + k \right]}
$$

Ed otteniamo:

$$
\textcolor{red}{= \cos x (-\log \cos x + k)}
$$