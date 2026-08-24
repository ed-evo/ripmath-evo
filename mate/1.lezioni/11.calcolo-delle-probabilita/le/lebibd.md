# calcoli

Risolvere l'integrale

$$
M(X^2) = \int_{0}^{+\infty} x^2 \alpha e^{-\alpha x} dx
$$

Risolviamolo intanto come integrale indefinito, poi, sul risultato faremo le differenze da $+\infty$ a $0$.

È un integrale da risolvere per parti considerando $x^2$ come il termine di cui conosciamo la derivata ed $\alpha e^{-\alpha x}$ come il termine di cui conosciamo l'integrale: la formula mnemonica è:

$$
\int f g = f \int g - \int [f' \int g]
$$

abbiamo:
- $f = x^2$
- $g = \alpha e^{-\alpha x}$
- $f' = 2x$
- $\int g = \int \alpha e^{-\alpha x} = -e^{-\alpha x}$ (vedi lo sviluppo in una nota precedente)

applico la formula:

$$
\int x^2 \alpha e^{-\alpha x} dx = x^2 \int \alpha e^{-\alpha x} dx - \int [ \int 2x \int \alpha e^{-\alpha x} dx ] dx
$$

$$
= x^2(-e^{-\alpha x}) - \int 2x(-e^{-\alpha x}) dx
$$

eseguo i calcoli:

$$
= -x^2 e^{-\alpha x} + 2 \int x e^{-\alpha x} dx
$$

ora lo scrivo in modo da avere la derivata dell'esponente dentro il segno di integrale:

$$
= -x^2 e^{-\alpha x} + \frac{2}{\alpha} \int x \alpha e^{-\alpha x} dx
$$

(questo ultimo integrale lo abbiamo già sviluppato per calcolare il valore medio)

$$
= -x^2 e^{-\alpha x} + \frac{2}{\alpha} \left( -x e^{-\alpha x} - \frac{e^{-\alpha x}}{\alpha} \right)
$$

$$
= -x^2 e^{-\alpha x} - \frac{2x e^{-\alpha x}}{\alpha} - \frac{2 e^{-\alpha x}}{\alpha^2}
$$

Ora torniamo all'integrale definito:

$$
\int_{0}^{+\infty} x^2 \alpha e^{-\alpha x} dx = \left[ -x^2 e^{-\alpha x} - \frac{2x e^{-\alpha x}}{\alpha} - \frac{2 e^{-\alpha x}}{\alpha^2} \right]_{0}^{+\infty}
$$

Sostituendo $+\infty$ ai primi due termini $-x^2 \cdot e^{-\alpha x}$ e $-x \cdot e^{-\alpha x}$ ottengo la forma indeterminata $\infty \cdot 0$ che posso risolvere applicando la regola di de l'Hôpital due volte al primo termine ed una volta al secondo.

> **Nota:** Basta fare le derivate dei fattori e sostituire ad $x$ il simbolo $+\infty$.
>
> Primo termine: applico una prima volta la regola $2x \cdot (-\alpha e^{-\alpha x})$ ed ho ancora una forma indeterminata $\infty \cdot 0$.
>
> Applico la regola una seconda volta $2 \cdot (\alpha^2 e^{-\alpha x}) = 2 \cdot [\alpha^2 e^{-\alpha(+\infty)}] = 2 \cdot (\alpha^2 e^{-\infty}) = 2 \cdot 0 = 0$ ed ora il termine vale $0$.
>
> Per il secondo termine basta applicare la regola una volta sola: $-2 \cdot (-\alpha e^{-\alpha x}) = -2\alpha e^{-\alpha x} = -2\alpha e^{-\alpha(+\infty)} = -2\alpha e^{-\infty} = 0$.

Quindi ho, sostituendo ad ogni termine prima $+\infty$ e poi $0$:

$$
= 0 + 0e^0 - \frac{2 \cdot 0}{\alpha} + \frac{2 \cdot 0e^0}{\alpha} - \frac{e^{-\infty}}{\alpha^2} + \frac{2e^0}{\alpha^2} = 0 + 0 - 0 + 0 - 0 + \frac{2}{\alpha^2}
$$

quindi

$$
M(X^2) = \frac{2}{\alpha^2}
$$