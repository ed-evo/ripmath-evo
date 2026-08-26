# Limite destro e limite sinistro

Per capire bene il concetto di limite destro (sinistro) consideriamo cos'è un intervallo per un punto interno: è un intorno e per essere un intorno non è necessario che il punto sia al centro dell'intervallo, anzi il punto può essere spostato anche fino al bordo se l'intervallo è chiuso ed in tal caso avremo un intorno destro o sinistro del punto.

Ora quando considero il limite $\lim_{x \to x_0} f(x) = l$ invece di considerare tutto un intervallo che contenga $x_0$ possiamo considerarne un intorno destro (sinistro) ed in tal caso sull'asse $y$ corrisponderà un intorno destro o sinistro di $l$ ma ciò non cambierà nulla: infatti allo stringersi dell'intervallo sull'asse delle $y$ corrisponderà lo stringersi dell'intorno sull'asse delle $x$. Cioè quando $f(x)$ si avvicina ad $l$, $x$ si avvicina ad $x_0$.

**Definizione matematica:**

[Si dice che la funzione $y = f(x)$ ammette limite finito destro $l$ per $x$ tendente ad $x_0^+$ e si scrive:]{.text-purple}

$$
\lim_{x \to x_0^+} f(x) = l
$$

[se esiste un numero positivo $\epsilon$ (epsilon) piccolo a piacere tale che da]{.text-purple}

$$
|f(x) - l| < \epsilon
$$

[segua]{.text-purple}

$$
x - x_0 < \delta_\epsilon
$$

[($\delta_\epsilon$ cioè $\delta$ dipendente da $\epsilon$)]{.text-purple}

> **Note:** $x$ tendente ad $x_0^+$ significa che mi avvicino ad $x$ da destra, cioè dalla parte dei valori positivi.