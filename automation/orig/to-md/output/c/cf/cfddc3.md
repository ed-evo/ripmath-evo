# [Dimostrazione per la derivata del quoziente di due funzioni]{.text-red}

Utilizziamo la proprietà che un quoziente è l'operazione inversa del prodotto.

Rappresentiamo il nostro quoziente di funzioni mediante $Y$:

$$
Y = \frac{f(x)}{g(x)}
$$

Vogliamo trovare $Y'$. Riscriviamo tutto in forma di prodotto supponendo $g(x) \neq 0$:

$$
g(x) \cdot Y = f(x)
$$

E applichiamo la formula della derivata di un prodotto:

$$
g'(x) \cdot Y + g(x) \cdot Y' = f'(x)
$$

A questo punto ricaviamo $Y'$ come fosse una comune equazione di primo grado:

$$
g(x) \cdot Y' = f'(x) - g'(x) \cdot Y
$$

$$
Y' = \frac{f'(x) - g'(x) \cdot Y}{g(x)}
$$

Sostituiamo a $Y$ il suo valore originale, ossia $Y = \frac{f(x)}{g(x)}$:

$$
Y' = \frac{f'(x) - g'(x) \frac{f(x)}{g(x)}}{g(x)}
$$

Facciamo il m.c.m. al numeratore:

$$
Y' = \frac{\frac{f'(x)g(x) - f(x)g'(x)}{g(x)}}{g(x)}
$$

Ora moltiplico il numeratore per l'inverso del denominatore, cioè $\frac{1}{g(x)}$, ed otteniamo la formula finale:

$$
Y' = \frac{f'(x)g(x) - f(x)g'(x)}{g^2(x)}
$$