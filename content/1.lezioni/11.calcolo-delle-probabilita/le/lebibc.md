# [calcoli]{.text-red}

Risolvere l'integrale

$$
M(X) = \int_{0}^{+\infty} x\alpha e^{-\alpha x} dx =
$$

Risolviamolo intanto come integrale indefinito, poi, sul risultato faremo le differenze da $$+\infty$$ a $$0$$.

È un integrale da risolvere per parti considerando $$x$$ come il termine di cui conosciamo la derivata ed $$\alpha e^{-\alpha x}$$ come il termine di cui conosciamo l'integrale: la formula mnemonica è:

$$
\int f g = f \int g - \int [f' \int g]
$$

Abbiamo:

$$f = x$$
$$g = \alpha e^{-\alpha x}$$
$$f' = 1$$
$$\int g = \int \alpha e^{-\alpha x} = - e^{-\alpha x}$$

> **Nota:** vedi lo sviluppo nella nota precedente

Applico la formula:

$$
\int x\alpha e^{-\alpha x} dx = x \int \alpha e^{-\alpha x} dx - \left[ \int 1 \int \alpha e^{-\alpha x} dx \right] dx =
$$

$$
= x(- e^{-\alpha x}) - \int 1 (-e^{-\alpha x}) dx =
$$

Eseguo i calcoli:

$$
= -x e^{-\alpha x} + \int e^{-\alpha x} dx =
$$

> **Nota:** anche questo ultimo integrale lo abbiamo già sviluppato

$$
= -x e^{-\alpha x} - \frac{e^{-\alpha x}}{\alpha}
$$

Ora torniamo all'integrale definito:

$$
\int_{0}^{+\infty} x\alpha e^{-\alpha x} dx = \left[ -x e^{-\alpha x} - \frac{e^{-\alpha x}}{\alpha} \right]_{0}^{+\infty} =
$$

Sostituendo $$+\infty$$ al primo termine $$-x \cdot e^{-\alpha x}$$ ottengo la forma indeterminata $$0 \cdot \infty$$ che posso risolvere applicando la regola di De l'Hôpital. Basta fare le derivate dei fattori e sostituire ad $$x$$ $$+\infty$$:

$$
-1 \cdot (-\alpha e^{-\alpha x}) = \alpha e^{-\alpha x} = \alpha e^{-\alpha(+\infty)} = \alpha e^{-\infty} = 0
$$

Sostituendo ad $$x$$ il simbolo $$+\infty$$ ottengo $$0$$, quindi ho:

$$
= 0 + 0 e^0 - \frac{e^{-\infty}}{\alpha} + \frac{e^0}{\alpha} = 0 + 0 - 0 + \frac{1}{\alpha}
$$

Quindi:

$$
M(X) = \frac{1}{\alpha}
$$