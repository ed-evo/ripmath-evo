# [esercizio]{.text-red}

> Questo veramente più che di massimo e di minimo sarebbe un problema di flesso ma penso che in mezzo agli altri stia bene anche lui

Determinare il valore del parametro $$a$$ perché la funzione
$$y = a \sin x + \cos^2 x$$
abbia un flesso nel punto di ascissa $$x = \frac{7}{6}\pi$$

Per risolvere questo problema basta trovare la derivata seconda, sostituire alla $$x$$ il valore $$\frac{7}{6}\pi$$ e porla uguale a zero, otterrò un'equazione in $$a$$ e risolvendola troverò il valore di $$a$$.

Trovo le derivate prima e seconda:

$$
\textcolor{red}{y' = a \cos x + 2 \cos x (-\sin x)}
$$
$$
\textcolor{red}{y' = a \cos x - 2 \sin x \cos x}
$$
$$
\textcolor{red}{y'' = -a \sin x - 2[\cos x \cos x + \sin x (-\sin x)]}
$$
$$
\textcolor{red}{y'' = -a \sin x + 2 \sin^2 x - 2 \cos^2 x}
$$

Calcolo la derivata seconda per $$x = \frac{7}{6}\pi$$:

$$
\textcolor{red}{y''(\frac{7}{6}\pi) = -a \sin \frac{7}{6}\pi + 2 \sin^2 \frac{7}{6}\pi - 2 \cos^2 \frac{7}{6}\pi}
$$

So che:

$$
\textcolor{red}{\sin \frac{7}{6}\pi = -\frac{1}{2}}
$$
$$
\textcolor{red}{\cos \frac{7}{6}\pi = -\frac{\sqrt{3}}{2}}
$$

$$
\textcolor{red}{y''(\frac{7}{6}\pi) = -a \cdot (-\frac{1}{2}) + 2 (-\frac{1}{2})^2 - 2(-\frac{\sqrt{3}}{2})^2}
$$
$$
\textcolor{red}{y''(\frac{7}{6}\pi) = \frac{a}{2} + 2(+\frac{1}{4}) - 2(+\frac{3}{4})}
$$
$$
\textcolor{red}{y''(\frac{7}{6}\pi) = \frac{a}{2} + \frac{1}{2} - \frac{3}{2}}
$$
$$
\textcolor{red}{y''(\frac{7}{6}\pi) = \frac{a}{2} - 1}
$$

Pongo la derivata seconda uguale a zero perché così nel punto di ascissa $$\frac{7}{6}\pi$$ c'è un punto di flesso:

$$
\textcolor{red}{\frac{a}{2} - 1 = 0}
$$
$$
\textcolor{red}{a = 2}
$$

Quindi per $$a = 2$$ la funzione diventa $$y = 2 \sin x + \cos^2 x$$ e dovrebbe avere un punto di flesso per $$x = \frac{7}{6}\pi$$.
Per vedere però se effettivamente è un punto di flesso dobbiamo trovare la derivata terza e vedere se il suo valore per $$\frac{7}{6}\pi$$ è diverso da zero:

$$
\textcolor{red}{y''' = -2 \sin x + 4 \sin x \cos x + 4 \cos x \sin x}
$$
$$
\textcolor{red}{y''' = -2 \sin x + 8 \sin x \cos x}
$$
$$
\textcolor{red}{y'''(\frac{7}{6}\pi) = -2(-\frac{1}{2}) + 8(-\frac{1}{2})(-\frac{\sqrt{3}}{2})}
$$

Senza nemmeno fare i calcoli vedo dai segni che viene un valore positivo, quindi siamo di fronte effettivamente ad un flesso come volevamo.