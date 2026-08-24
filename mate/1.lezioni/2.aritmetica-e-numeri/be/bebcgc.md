# Radici n-esime dell'unità mediante la formula (in radianti)

Devo trasformare $1$ nella sua forma trigonometrica [trasformazione](bebcgba.html)

$$
1 = \cos 0 + i \sin 0
$$

Essendo in campo complesso indico la variabile con $\text{w}$
Devo risolvere l'equazione

$$
\text{w}^6 = \cos 0^\circ + i \sin 0^\circ
$$

applico la formula

$$
\textcolor{blue}{(\sqrt[n]{\text{w}})_{k+1} = \sqrt[n]{\rho} \left( \cos \frac{\theta + 2k\pi}{n} + i \sin \frac{\theta + 2k\pi}{n} \right)}
$$

[Con $k = 0, 1, 2, \dots, n-1$, $n=6$, $\theta = 0$, $\rho = 1$]{.text-blue}

ed ottengo:

- [per $k = 0$]{.text-red}

$$
\textcolor{red}{(\sqrt[6]{\text{w}^6})_{0+1} = \sqrt[6]{1} \left( \cos \frac{0 + 0 \cdot 2\pi}{6} + i \sin \frac{0 + 0 \cdot 2\pi}{6} \right)}
$$

$$
\text{w}_1 = \cos \frac{0}{6} + i \sin \frac{0}{6}
$$

$$
= \cos 0 + i \sin 0 = 1 + i0 = 1
$$

- [per $k = 1$]{.text-red}

$$
\textcolor{red}{(\sqrt[6]{\text{w}^6})_{1+1} = \sqrt[6]{1} \left( \cos \frac{0 + 1 \cdot 2\pi}{6} + i \sin \frac{0 + 1 \cdot 2\pi}{6} \right)}
$$

$$
\text{w}_2 = \cos \frac{2\pi}{6} + i \sin \frac{2\pi}{6}
$$

$$
= \cos \frac{\pi}{3} + i \sin \frac{\pi}{3} = \frac{1}{2} + i\frac{\sqrt{3}}{2} = \frac{1 + i\sqrt{3}}{2}
$$

- [per $k = 2$]{.text-red}

$$
\textcolor{red}{(\sqrt[6]{\text{w}^6)_{2+1} = \sqrt[6]{1} \left( \cos \frac{0 + 2 \cdot 2\pi}{6} + i \sin \frac{0 + 2 \cdot 2\pi}{6} \right)}
$$

$$
\text{w}_3 = \cos \frac{4\pi}{6} + i \sin \frac{4\pi}{6}
$$

$$
= \cos \frac{2\pi}{3} + i \sin \frac{2\pi}{3} = -\frac{1}{2} + i\frac{\sqrt{3}}{2} = \frac{-1 + i\sqrt{3}}{2}
$$

- [per $k = 3$]{.text-red}

$$
\textcolor{red}{(\sqrt[6]{\text{w}^6)_{3+1} = \sqrt[6]{1} \left( \cos \frac{0 + 3 \cdot 2\pi}{6} + i \sin \frac{0 + 3 \cdot 2\pi}{6} \right)}
$$

$$
\text{w}_4 = \cos \frac{6\pi}{6} + i \sin \frac{6\pi}{6}
$$

$$
= \cos \pi + i \sin \pi = -1 + i \cdot 0 = -1
$$

- [per $k = 4$]{.text-red}

$$
\textcolor{red}{(\sqrt[6]{\text{w}^6)_{4+1} = \sqrt[6]{1} \left( \cos \frac{0 + 4 \cdot 2\pi}{6} + i \sin \frac{0 + 4 \cdot 2\pi}{6} \right)}
$$

$$
\text{w}_5 = \cos \frac{8\pi}{6} + i \sin \frac{8\pi}{6}
$$

$$
= \cos \frac{4\pi}{3} + i \sin \frac{4\pi}{3} = -\frac{1}{2} - i\frac{\sqrt{3}}{2} = \frac{-1 - i\sqrt{3}}{2}
$$

- [per $k = 5$]{.text-red}

$$
\textcolor{red}{(\sqrt[6]{\text{w}^6)_{5+1} = \sqrt[6]{1} \left( \cos \frac{0 + 5 \cdot 2\pi}{6} + i \sin \frac{0 + 5 \cdot 2\pi}{6} \right)}
$$

$$
\text{w}_6 = \cos \frac{10\pi}{6} + i \sin \frac{10\pi}{6}
$$

$$
= \cos \frac{5\pi}{3} + i \sin \frac{5\pi}{3} = \frac{1}{2} - i\frac{\sqrt{3}}{2} = \frac{1 - i\sqrt{3}}{2}
$$

---

quindi, raccogliendo abbiamo

> **Nota:** l'ordine è diverso da quello delle soluzioni trovate con il metodo algebrico: nota che il metodo della formula ti dà le soluzioni ordinate in senso antiorario sulla circonferenza

$$
\text{w}_1 = 1
$$

$$
\text{w}_2 = \frac{1 + i\sqrt{3}}{2}
$$

$$
\text{w}_3 = \frac{-1 + i\sqrt{3}}{2}
$$

$$
\text{w}_4 = -1
$$

$$
\text{w}_5 = \frac{-1 - i\sqrt{3}}{2}
$$

$$
\text{w}_6 = \frac{1 - i\sqrt{3}}{2}
$$