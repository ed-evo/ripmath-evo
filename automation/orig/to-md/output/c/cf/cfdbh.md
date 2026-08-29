$$
\textcolor{red}{y = \cot g x \to y' = \frac{-1}{\sin^2 x}}
$$

[dimostrazione]{.text-red}

Devo trovare la derivata di $y = \cot g x$.

Trasformo la cotangente nella forma:

$$
\cot g x = \frac{\cos x}{\sin x}
$$

Faccio il limite del rapporto incrementale:

$$
\lim_{h \to 0} \frac{\frac{\cos(x + h)}{\sin(x + h)} - \frac{\cos x}{\sin x}}{h}
$$

Anche qui utilizzeremo il primo limite notevole; intanto facciamo il minimo comune multiplo:

$$
= \lim_{h \to 0} \frac{\frac{\cos(x + h)\sin x - \sin(x + h)\cos x}{\sin(x + h)\sin x}}{h}
$$

Cambio di segno (e di ordine) al numeratore in alto estraendo un segno meno:

$$
= \lim_{h \to 0} \frac{\frac{-[\sin(x + h)\cos x - \cos(x + h)\sin x]}{\sin(x + h)\sin x}}{h}
$$

Al numeratore ho la formula finale del seno della differenza fra due angoli $(x + h)$ e $x$:

$$
\sin[(x + h) - x] = \sin(x + h)\cos x - \cos(x + h)\sin x
$$

Applico la forma in senso inverso ed ottengo:

$$
= \lim_{h \to 0} \frac{\frac{-\sin[(x + h) - x]}{\sin(x + h)\sin x}}{h}
$$

Calcolo entro la quadra e moltiplico la frazione sopra per l'inversa di quella sotto:

$$
= \lim_{h \to 0} \frac{-\sin h}{\sin(x + h)\sin x} \cdot \frac{1}{h}
$$

Separo i limiti:

$$
= \lim_{h \to 0} \frac{-1}{\sin(x + h)\sin x} \cdot \frac{\sin h}{h}
$$

Per il limite fondamentale so che:

$$
\lim_{h \to 0} \frac{\sin h}{h} = 1
$$

Quindi mi resta da fare:

$$
= \lim_{h \to 0} \frac{-1}{\sin(x + h)\sin x}
$$

Passando al limite per $h \to 0$ ottengo:

$$
= \frac{-1}{\sin x \sin x} = \frac{-1}{\sin^2 x}
$$