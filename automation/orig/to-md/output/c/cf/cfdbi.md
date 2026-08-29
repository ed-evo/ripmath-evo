[$\textcolor{red}{y = e^x \to y' = e^x}$]{.text-red}
#### dimostrazione

La dimostrazione si svolge in tre tempi.

Devo trovare la derivata di $e^x$.

Faccio il limite del rapporto incrementale:

$$
\lim_{h \to 0} \frac{e^{x+h} - e^x}{h} =
$$

Posso scrivere per la proprietà delle potenze:

$$
= \lim_{h \to 0} \frac{e^x \cdot e^h - e^x}{h} =
$$

Raccolgo $e^x$:

$$
= \lim_{h \to 0} \frac{e^x(e^h - 1)}{h} =
$$

Essendo il limite per $h$, posso estrarre dal limite $e^x$:

$$
= e^x \lim_{h \to 0} \frac{e^h - 1}{h} =
$$

Calcoliamo il limite:

$$
\lim_{h \to 0} \frac{e^h - 1}{h} =
$$

E mostriamo che vale $1$:
Pongo $e^h - 1 = t$, quindi quando $h \to 0$ anche $t \to 0$.

Ricavo $h$ in funzione di $t$:

$$
e^h = 1 + t \to h = \log(1+t)
$$

Siccome il logaritmo è in base $e$ e $\log(e) = 1$, posso scrivere:

$$
h = \frac{\log(1 + t)}{\log(e)}
$$

Sostituendo nel limite ottengo:

$$
\lim_{h \to 0} \frac{e^h - 1}{h} = \lim_{h \to 0} \frac{t}{\frac{\log(1 + t)}{\log(e)}} =
$$

Numeratore per inverso del denominatore:

$$
= \lim_{h \to 0} \log(e) \frac{t}{\log(1+t)} =
$$

> **Nota:** Essendo $\log(e) = 1$, resta da dimostrare che il limite
> $$
> \lim_{h \to 0} \frac{t}{\log(1+t)}
> $$
> vale $1$.

$$
\lim_{h \to 0} \frac{t}{\log(1+t)} =
$$

Questo si dimostra col limite fondamentale:

$$
\lim_{x \to \infty} (1 + 1/x)^x = e
$$

Infatti (prendo l'inverso del mio limite, tanto l'inverso di $1$ è sempre uguale a $1$):

$$
\lim_{h \to 0} \frac{\log(1 + t)}{t} =
$$

Considero $k = 1/t$ e quindi $t = 1/k$; se $t \to 0$ allora $k \to \infty$. Sostituisco nel mio limite:

$$
\lim_{k \to \infty} \frac{\log(1 + 1/k)}{1/k} = \lim_{k \to \infty} k \log(1 + 1/k) =
$$

Per la proprietà dei logaritmi, il $k$ lo metto come esponente:

$$
= \lim_{k \to \infty} \log(1 + 1/k)^k =
$$

Il limite del logaritmo è uguale al logaritmo del limite:

$$
= \log \lim_{k \to \infty} (1 + 1/k)^k = \log(e) = 1
$$