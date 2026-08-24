# [Funzione densità di probabilità]{.text-red}

Se ora passiamo al limite per $\Delta x \to 0$ avremo la definizione di derivata:

$$
\textcolor{red}{\lim_{\Delta x \to 0} \frac{F(x + \Delta x) - F(x)}{\Delta x} = F'(x) = f(x)}
$$

La funzione $f(x) = F'(x)$ si chiama **densità di probabilità** o semplicemente **funzione di densità**.

Da notare che la funzione di densità $f(x)$ non esprime una probabilità (es. la tangente alla curva in figura può anche avere coefficiente angolare superiore a $1$) però essa serve a calcolare una probabilità: se considero il differenziale di $F(x)$:

$$
dF(x) = F'(x) = f(x)dx
$$

esso coincide con la derivata della funzione a meno di infinitesimi di ordine superiore:

$$
dF(x) = F'(x) + \epsilon x = f(x)dx
$$

e quindi, essendo $f(x)dx$ il prodotto fra la funzione densità ed il differenziale $dx$ allora **$f(x)dx$ è la probabilità che la variabile casuale assuma un valore compreso nell'intervallo infinitesimo $x$ ed $x+dx$** a meno di infinitesimi di ordine superiore a $dx$.

[Cerchiamo di capirci meglio](lebdca.html)