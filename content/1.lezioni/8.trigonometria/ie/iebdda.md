# [la base della torre è più alta del piano dell'osservatore]{.text-red}

Prima di tutto devo avere la possibilità di calcolare una distanza $$AD$$ che sia allineata con la base della torre.

Conosciamo:
- La distanza $$AD$$
- L'angolo $$\alpha_1$$ (angolo di visuale da A)
- L'angolo $$\delta$$ (angolo di visuale da D)
- L'angolo $$\alpha_2$$ (angolo di elevazione)

Essendo i triangoli $$ABH$$ e $$DBK$$ simili avrò inoltre che:
angolo $$BAH = \text{angolo } BDK = \alpha_2$$

> Al solito possiamo misurare $$AD$$ con un decametro a nastro e gli angoli mediante il teodolite.

Se considero il triangolo $$ACD$$, in esso l'angolo $$BAC$$ è un angolo esterno e quindi uguale alla somma degli angoli interni non adiacenti:
$$
BAC = ADC + ACD
$$
e quindi, ricavando $$ACD$$:
$$
ACD = BAC - ADC = \alpha_1 - \delta
$$
Quindi, se considero il triangolo $$CAD$$, ne conosco due angoli ed un lato e quindi posso risolverlo: possiamo calcolare $$AC$$ con il teorema dei seni:

$$
\textcolor{red}{\frac{AC}{\sin \delta} = \frac{AD}{\sin(\alpha_1 - \delta)}}
$$

Quindi:

$$
\textcolor{red}{AC = \frac{AD \sin \delta}{\sin(\alpha_1 - \delta)}}
$$

Se ora considero il triangolo $$BAH$$, in esso l'angolo $$CBA$$ è esterno e quindi uguale alla somma degli angoli interni non adiacenti, cioè:
$$
CBA = BAH + HAB = 90^\circ + \alpha_2
$$
Se quindi considero il triangolo $$CBA$$, in esso conosco due angoli ed un lato:
- $$CBA = 90^\circ + \alpha_2$$
- $$CAB = \alpha_1$$

$$
AC = \frac{AD \sin \delta}{\sin(\alpha_1 - \delta)}
$$

quindi posso risolverlo (teorema dei seni):

$$
\textcolor{red}{\frac{CB}{\sin \alpha_1} = \frac{AC}{\sin(90^\circ + \alpha_2)}}
$$

Ma per la relazione tra gli archi associati:

$$
\textcolor{red}{\frac{CB}{\sin \alpha_1} = \frac{AC}{\cos \alpha_2}}
$$

Prima ricavo $$CB$$:

$$
\textcolor{red}{CB = \frac{AC \sin \alpha_1}{\cos \alpha_2}}
$$

Poi sostituisco ad $$AC$$ il suo valore e trovo il risultato finale:

$$
\textcolor{blue}{CB = \frac{AD \sin \alpha_1 \sin \delta}{\cos \alpha_2 \sin(\alpha_1 - \delta)}}
$$