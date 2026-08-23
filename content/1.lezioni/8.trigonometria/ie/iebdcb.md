# [La base della torre è più alta del piano dell'osservatore]{.text-red}

> Veramente io non ho mai visto costruire una torre per metterla in una depressione, ma consideriamo solo come un esempio di tipo matematico

Conosciamo:
- La distanza $$AB$$
- L'angolo $$\alpha_1$$ (angolo di visuale)
- L'angolo $$\alpha_2$$ (angolo di elevazione)

[Possiamo misurare $$AB$$ con un decametro a nastro e gli angoli mediante il teodolite]{.text-grey}

L'angolo $$\text{CAD}$$ vale $$\alpha_1 - \alpha_2$$

Essendo il triangolo $$\text{ACD}$$ rettangolo avremo che l'angolo:
$$
\text{ACD} = 90^\circ - (\alpha_1 - \alpha_2) = \text{ACB}
$$

Se ora considero il triangolo $$\text{ABC}$$ conosco:
- la distanza $$AB$$
- l'angolo $$\text{BAC} = \alpha_1$$
- l'angolo $$\text{ACD} = 90^\circ - (\alpha_1 - \alpha_2)$$

Quindi conoscendo due angoli ed un lato posso risolvere il triangolo: applico il [teorema dei seni](../id/idd.html) per trovare la misura di $$BC$$

$$
\textcolor{red}{\frac{BC}{\sin \alpha_1} = \frac{AB}{\sin [90^\circ - (\alpha_1 - \alpha_2)]}}
$$

E, per la [relazione tra gli archi associati](../ib/ibda.html):

$$
\textcolor{red}{\frac{BC}{\sin \alpha_1} = \frac{AB}{\cos (\alpha_1 - \alpha_2)}}
$$

E quindi avremo:

$$
\textcolor{red}{BC = \frac{AB \sin \alpha_1}{\cos (\alpha_1 - \alpha_2)}}
$$

> **Esercizio:**
> Supponiamo di spostarci dal punto $$B$$ di $$30\text{ m}$$
> $$AB = 30\text{ m}$$
> e che l'angolo di visuale $$\alpha_1$$ misuri $$60^\circ$$
> e l'angolo di elevazione $$\alpha_2$$ misuri $$20^\circ$$
>
> E quindi ho:

$$
\textcolor{red}{BC = \frac{AB \sin 60^\circ}{\cos(60^\circ - 20^\circ)} = \frac{30\text{m} \sin 60^\circ}{\cos 40^\circ} = 33.915476 \approx 33,9\text{ m}}}
$$