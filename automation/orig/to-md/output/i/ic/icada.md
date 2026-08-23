# [Formula parametrica per il seno]{.text-red}

> L'interessante di queste formule è il tipo di ragionamento che sta alla base del procedimento: trasformare l'espressione in una frazione e quindi dividere numeratore e denominatore per lo stesso termine (di solito quello in basso a sinistra); sarà un procedimento che useremo altre volte.

Partiamo dalla formula di duplicazione per il seno

$$
\textcolor{red-darken-1}{\text{sen } 2x = 2 \text{ sen } x \cos x}
$$

poniamo $$\textcolor{red-darken-1}{2x = \alpha}$$ e quindi $$\textcolor{red-darken-1}{x = \alpha/2}$$

Otteniamo

$$
\textcolor{red-darken-1}{\text{sen } \alpha = 2 \text{ sen }(\alpha/2) \cos (\alpha/2)}
$$

Voglio trasformare il termine dopo l'uguale in una frazione quindi lo divido per $$1$$ cioè per $$\cos^2(\alpha/2) + \text{sen}^2(\alpha/2)$$

$$
\textcolor{red-darken-1}{\text{sen } \alpha = \frac{2 \text{ sen }(\alpha/2) \cos (\alpha/2)}{\cos^2(\alpha/2) + \text{sen}^2(\alpha/2)}}
$$

Divido sia al numeratore che al denominatore per $$\cos^2(\alpha/2)$$

$$
\textcolor{red-darken-1}{\text{sen } \alpha = \frac{\frac{2 \text{ sen }(\alpha/2) \cos (\alpha/2)}{\cos^2(\alpha/2)}}{\frac{\cos^2(\alpha/2)}{\cos^2(\alpha/2)} + \frac{\text{sen}^2(\alpha/2)}{\cos^2(\alpha/2)}}}
$$

Ricordando che

$$
\frac{\text{sen } x}{\cos x} = \text{tang } x
$$

otteniamo

$$
\textcolor{red-darken-1}{\text{sen } \alpha = \frac{2 \text{ tang }(\alpha/2)}{1 + \text{tang}^2(\alpha/2)}}
$$

Poniamo $$\text{tang}(\alpha/2) = t$$ ed otteniamo la prima formula parametrica

> $$
> \textcolor{blue}{\text{sen } \alpha = \frac{2t}{1 + t^2}}
> $$