[# Altezza di una torre.]{.text-red-darken-1}
[## Piede della torre sul piano dell'osservatore e non accessibile]{.text-red-darken-1}

Supponiamo di non poter raggiungere la torre nel punto $D$ perché c'è un fossato pieno d'acqua.

Allora fisso un punto $B$, punto più vicino alla torre che posso raggiungere e ci spostiamo, allontanandoci dalla torre, fino a un punto $A$.
Calcoliamo la distanza $AB$ e misuriamo gli angoli $BAC$ e $CBD$.

Se l'angolo
$CBD = \beta$
allora l'angolo
$CBA = 180^\circ - \beta$
e possiamo risolvere il triangolo $ABC$.

L'angolo $BCA = 180^\circ - (180^\circ - \beta) - \alpha = 180^\circ - 180^\circ + \beta - \alpha = \beta - \alpha$.

Per il teorema dei seni posso calcolare $BC$:

$$
\frac{BC}{\sin \alpha} = \frac{AB}{\sin(\beta - \alpha)}
$$

e quindi:

$$
BC = \frac{AB \sin \alpha}{\sin(\beta - \alpha)}
$$

Se ora considero il triangolo rettangolo $BCD$, ne conosco l'ipotenusa e un angolo oltre all'angolo retto, quindi posso risolverlo e trovare $CD$.
Per le relazioni sui triangoli rettangoli un cateto è uguale all'ipotenusa per il seno dell'angolo opposto e quindi abbiamo:

$$
CD = CB \sin \beta = \frac{AB \sin \alpha \sin \beta}{\sin(\beta - \alpha)}
$$

> **Esercizio**
>
> Supponiamo di spostarci dal punto $B$ di 30 metri:
> $AB = 30\text{ m}$
> e di avere i valori degli angoli:
> $\alpha = 40^\circ$
> $\beta = 70^\circ$
>
> e quindi ho:
>
> $$
> CD = CB \sin 70^\circ = \frac{AB \sin 40^\circ \sin 70^\circ}{\sin(70^\circ - 40^\circ)} = \frac{AB \sin 40^\circ \sin 70^\circ}{\sin 30^\circ} = \frac{30\text{ m} \cdot 0.642788 \cdot 0.9396926}{0.5}
> $$
>
> $$
> \approx 36.241388\text{ m} \approx 36,2\text{ m}
> $$
>
> È importante fare i calcoli con molti decimali e arrotondare solamente il risultato finale, altrimenti, se arrotondassi all'inizio, l'errore potrebbe compromettere il risultato.