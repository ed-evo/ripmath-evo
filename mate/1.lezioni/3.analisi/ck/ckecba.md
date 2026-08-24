# esercizio

Calcolare l'area della regione di piano compresa fra la parabola $\textcolor{blue}{y = x^2 - 4}$ e la retta $\textcolor{blue}{y = 5}$.

Come prima cosa facciamo la rappresentazione grafica.

L'area che devo trovare è quella indicata con il verde più scuro.

Tale area è in parte sopra ed in parte sotto l'asse delle $x$, quindi studiamole nei particolari:

Per fare l'area sotto l'asse $x$ basterà fare l'integrale della parabola da $-2$ a $2$ e cambiarlo di segno.

Per fare l'area sopra l'asse delle $x$ prima faremo l'integrale da $-3$ a $3$ della retta e poi toglieremo l'area compresa fra la parabola e l'asse $x$ da $-3$ a $-2$ e anche da $2$ a $3$.

Quindi per calcolare l'area devo fare:

$$
\textcolor{blue}{A = -\int_{-2}^{2} (x^2 - 4)dx + \int_{-3}^{3} 5 dx - \int_{-3}^{-2} (x^2 - 4)dx - \int_{2}^{3} (x^2 - 4)dx}
$$

Essendo tutti gli integrali con estremi diversi non posso sommare niente e faccio tutte le integrazioni:

$$
\textcolor{blue}{= -\left[ \frac{x^3}{3} - 4x \right]_{-2}^{2} + [5x]_{-3}^{3} - \left[ \frac{x^3}{3} - 4x \right]_{-3}^{-2} - \left[ \frac{x^3}{3} - 4x \right]_{2}^{3}}
$$

$$
\textcolor{blue}{= -\left[ \frac{8}{3} - 8 + \frac{8}{3} - 8 \right] + [15 + 15] - \left[ -\frac{8}{3} + 8 + 9 - 12 \right] - \left[ 9 - 12 - \frac{8}{3} + 8 \right]}
$$

$$
\textcolor{blue}{= 16 - \frac{16}{3} + 30 + \frac{8}{3} - 5 + \frac{8}{3} - 5 = 36}
$$

Quindi l'area cercata vale $36$ unità quadrate del piano.

> **Nota:** sviluppare bene i calcoli perché è facilissimo sbagliare un segno.