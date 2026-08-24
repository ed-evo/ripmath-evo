# [$\cos(\alpha - \beta)$]{.text-red}

Consideriamo un cerchio trigonometrico. Consideriamo l'angolo $\alpha$ nel terzo quadrante e l'angolo $\beta$ nel secondo quadrante tali che la loro differenza, ($\alpha - \beta$), sia un angolo del primo quadrante.

Il punto $P$ sia il punto sulla circonferenza che corrisponde ad $\alpha$, $Q$ il punto che corrisponde a $\beta$ e $S$ il punto che corrisponde ad ($\alpha - \beta$); inoltre sia $A$ l'origine degli archi; le coordinate cartesiane di tali punti saranno:

[$P = (\cos \alpha, \operatorname{sen} \alpha)$]{.text-blue}
[$Q = (\cos \beta, \operatorname{sen} \beta)$]{.text-blue}
[$S = (\cos(\alpha - \beta), \operatorname{sen}(\alpha - \beta))$]{.text-blue}
[$A = (1, 0)$]{.text-blue}

L'arco $\operatorname{PQ}$ sarà uguale all'arco $\operatorname{AS}$ perché gli angoli al centro sono entrambi uguali ad ($\alpha - \beta$), quindi avremo che anche per le corde:

[$\operatorname{PQ} = \operatorname{AS}$]{.text-blue}

Applicando la formula per la distanza fra due punti nel piano per calcolare sia $\operatorname{PQ}$ che $\operatorname{AS}$ avremo:

[$$
\operatorname{PQ} = \sqrt{(\cos \alpha - \cos \beta)^2 + (\operatorname{sen} \alpha - \operatorname{sen} \beta)^2}
$$]{.text-blue}

[$$
\operatorname{AS} = \sqrt{(\cos(\alpha - \beta) - 1)^2 + (\operatorname{sen}(\alpha - \beta) - 0)^2}
$$]{.text-blue}

> **Nota:** Il $-0$ potevo tralasciarlo.

Uguaglio le due espressioni:

[$$
\sqrt{(\cos \alpha - \cos \beta)^2 + (\operatorname{sen} \alpha - \operatorname{sen} \beta)^2} = \sqrt{(\cos(\alpha - \beta) - 1)^2 + \operatorname{sen}^2(\alpha - \beta)}
$$]{.text-blue}

Eseguiamo i calcoli: io faccio tutti i passaggi, tu puoi abbreviare. Tolgo le radici prima e dopo l'uguale:

[$$
(\cos \alpha - \cos \beta)^2 + (\operatorname{sen} \alpha - \operatorname{sen} \beta)^2 = (\cos(\alpha - \beta) - 1)^2 + \operatorname{sen}^2(\alpha - \beta)
$$]{.text-blue}

Eseguo i quadrati:

[$$
\cos^2 \alpha + \cos^2 \beta - 2 \cos \alpha \cos \beta + \operatorname{sen}^2 \alpha + \operatorname{sen}^2 \beta - 2 \operatorname{sen} \alpha \operatorname{sen} \beta = \cos^2(\alpha - \beta) + 1 - 2 \cos(\alpha - \beta) + \operatorname{sen}^2(\alpha - \beta)
$$]{.text-blue}

Per la prima relazione fondamentale so che $\cos^2(\text{angolo}) + \operatorname{sen}^2(\text{angolo}) = 1$, quindi:

[$$
1 + 1 - 2 \cos \alpha \cos \beta - 2 \operatorname{sen} \alpha \operatorname{sen} \beta = 1 + 1 - 2 \cos(\alpha - \beta)
$$]{.text-blue}

Gli $1$ si eliminano essendo di segno uguale da parti opposte dell'uguale:

[$$
-2 \cos \alpha \cos \beta - 2 \operatorname{sen} \alpha \operatorname{sen} \beta = -2 \cos(\alpha - \beta)
$$]{.text-blue}

Sposto i termini dalla parte dell'uguale dove sono positivi:

[$$
2 \cos(\alpha - \beta) = 2 \cos \alpha \cos \beta + 2 \operatorname{sen} \alpha \operatorname{sen} \beta
$$]{.text-blue}

Divido tutto per $2$ ed ottengo la prima formula:

[$$
\cos(\alpha - \beta) = \cos \alpha \cos \beta + \operatorname{sen} \alpha \operatorname{sen} \beta
$$]{.text-red}

> **Osservazione:** La dimostrazione è piuttosto pesante, però è l'unica forma che si basa su una dimostrazione geometrica: le altre dimostrazioni saranno tutte algebriche e molto più semplici.