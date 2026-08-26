[la base della torre è più alta del piano dell'osservatore]{.text-red}

Conosciamo
La distanza $AB$
L'angolo $\alpha_1$ (angolo di visuale)
L'angolo $\alpha_2$ (angolo di elevazione)

> possiamo misurare $AB$ con un decametro a nastro e gli angoli mediante il teodolite

Essendo il triangolo $ACD$ rettangolo avremo che l'angolo
$$
\textcolor{red}{ACD = 90^\circ - (\alpha_1 + \alpha_2) = ACB}
$$

Se ora considero il triangolo $ABC$ conosco:
la distanza $AB$
l'angolo $BAC = \alpha_1$
l'angolo $ACB = 90^\circ - (\alpha_1 + \alpha_2)$

Quindi conoscendo due angoli ed un lato posso risolvere il triangolo: applico il teorema dei seni per trovare la misura di $BC$

$$
\textcolor{red}{\frac{BC}{\sin \alpha_1} = \frac{AB}{\sin [90^\circ - (\alpha_1 + \alpha_2)]}}
$$

e, per la relazione tra gli archi associati:

$$
\textcolor{red}{\frac{BC}{\sin \alpha_1} = \frac{AB}{\cos(\alpha_1 + \alpha_2)}}
$$

e quindi avremo:

$$
\textcolor{red}{BC = \frac{AB \sin \alpha_1}{\cos(\alpha_1 + \alpha_2)}}
$$

> **Esercizio:**
> supponiamo di spostarci dal punto $B$ di $30$ metri
> $AB = 40 \text{ m}$
> e che l'angolo di visuale $\alpha_1$ misuri $30^\circ$
> e l'angolo di elevazione $\alpha_2$ misuri $18^\circ$
>
> e quindi ho
> $$
> \textcolor{red}{BC = \frac{AB \sin 30^\circ}{\cos(30^\circ + 18^\circ)} = \frac{40\text{m} \sin 30^\circ}{\cos 48^\circ} = 29.88953 \approx 29,9 \text{ m}}}
> $$