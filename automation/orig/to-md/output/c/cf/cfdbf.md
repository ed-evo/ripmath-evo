# [$\textcolor{red}{y = \cos x \to y' = -\sin x}$]{.text-red}
## [$\textcolor{red}{\text{dimostrazione}}$]{.text-red}

Devo trovare la derivata di $y = \cos x$.

Faccio il limite del rapporto incrementale:

$$
\lim_{h \to 0} \frac{\cos(x + h) - \cos x}{h} =
$$

Ci rifacciamo al primo limite notevole; per questo utilizziamo la quarta formula di prostaferesi (quella della differenza dei coseni):

$$
= \lim_{h \to 0} \frac{-2 \sin\left(\frac{x + h + x}{2}\right) \sin\left(\frac{x + h - x}{2}\right)}{h} =
$$

Sposto il $2$ iniziale al denominatore e calcolo entro parentesi:

$$
= \lim_{h \to 0} \frac{-\sin\left(\frac{2x + h}{2}\right) \sin\left(\frac{h}{2}\right)}{\frac{h}{2}} =
$$

$$
= \lim_{h \to 0} \frac{-\sin\left(x + \frac{h}{2}\right) \sin\left(\frac{h}{2}\right)}{\frac{h}{2}} =
$$

Per il limite fondamentale so che:

$$
\lim_{h \to 0} \frac{\sin\left(\frac{h}{2}\right)}{\frac{h}{2}} = 1
$$

Quindi mi resta da fare:

$$
= \lim_{h \to 0} -\sin\left(x + \frac{h}{2}\right) =
$$

Passando al limite per $h \to 0$ anche $h/2 \to 0$, quindi ottengo:

$$
= -\sin x
$$