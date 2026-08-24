## Soluzione del problema

Siccome parlare di aree negative è in matematica [quasi una bestemmia](ckebca.html) dovremo vedere come rendere sempre positivi i valori delle aree:

> Dovremo considerare con segno positivo gli integrali calcolati su aree sopra l'asse $x$ e considerare invece con segno cambiato (negativo) gli integrali calcolati su aree sotto l'asse delle $x$

Quindi considerando che da $0$ a $\pi$ siamo sopra l'asse $x$ e che da $\pi$ a $2\pi$ siamo sotto, per calcolare l'area cercata dovremo scrivere:

$$
\textcolor{blue}{\int_{0}^{\pi} \sin x \, dx - \int_{\pi}^{2\pi} \sin x \, dx =}
$$

$$
\textcolor{blue}{= [-\cos x]_{0}^{\pi} - [-\cos x]_{\pi}^{2\pi} =}
$$

$$
\textcolor{blue}{= -\cos \pi + \cos 0 - (-\cos 2\pi + \cos \pi) =}
$$

$$
\textcolor{blue}{= -\cos \pi + \cos 0 + \cos 2\pi - \cos \pi =}
$$

$$
\textcolor{blue}{= -(-1) + 1 + 1 - (-1) =}
$$

$$
\textcolor{blue}{= 1 + 1 + 1 + 1 = 4}
$$

L'area cercata è di $4$ unità quadrate del piano

> La figura ha unità diverse in orizzontale e verticale perché $\pi$ vale $3,14$ e il seno in altezza varia da $1$ a $-1$, quindi i quadratini unitari sarebbero dei rettangolini