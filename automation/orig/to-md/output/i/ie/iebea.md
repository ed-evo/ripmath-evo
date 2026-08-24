# [base di riferimento orizzontale]{.text-red}

Supponiamo che il segmento $AC$ sia orizzontale: in tal caso il triangolo $ACH$ giace sul piano orizzontale.

Misuriamo:
- La distanza $AC$
- L'angolo $HAC = \alpha_1$
- L'angolo $ACH = \gamma$
- L'angolo $BAH = \alpha_2$ (angolo di elevazione da $A$)

> **Nota:** Posso prima risolvere il triangolo $ACH$ per trovare il valore di $AH$, poi nel triangolo rettangolo $AHB$ conosco, oltre l'angolo retto, un angolo ed un lato, quindi posso risolverlo e trovare $BH$.

Considero il triangolo $ACH$, ne conosco due angoli ed un lato e quindi posso risolverlo:
Angolo $AHC = 180^\circ - (\alpha_1 + \gamma)$

Possiamo calcolare $AH$ con il teorema dei seni:

$$
\textcolor{red}{\frac{AH}{\sin \gamma} = \frac{AC}{\sin [180^\circ - (\alpha_1 + \gamma)]}}
$$

E, per la relazione sugli angoli supplementari:

$$
\textcolor{red}{\frac{AH}{\sin \gamma} = \frac{AC}{\sin (\alpha_1 + \gamma)}}
$$

Quindi otteniamo:

$$
\textcolor{red}{AH = \frac{AC \sin \gamma}{\sin (\alpha_1 + \gamma)}}
$$

Considero poi il triangolo rettangolo $BAH$.
Per le relazioni sui triangoli rettangoli ho:

$$
\textcolor{red}{BH = AH \tan \alpha_2}
$$

e quindi la mia formula diventa:

$$
\textcolor{red}{BH = \frac{AC \sin \gamma \tan \alpha_2}{\sin (\alpha_1 + \gamma)}}
$$