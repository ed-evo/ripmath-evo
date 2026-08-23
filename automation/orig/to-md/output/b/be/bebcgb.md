# [Radici n-esime dell'unità mediante la formula (in gradi)]{.text-red}

$$x^6 = 1$$

Devo trasformare $$1$$ nella sua forma trigonometrica.

$$
1 = \cos 0^\circ + i \sin 0^\circ
$$

Essendo in campo complesso indico la variabile con $$w$$. Devo risolvere l'equazione:

$$
w^6 = \cos 0^\circ + i \sin 0^\circ
$$

applico la formula:

$$
(\sqrt[6]{w^6})_{k+1} = \sqrt[6]{\rho} \left( \cos \frac{\theta + k360^\circ}{6} + i \sin \frac{\theta + k360^\circ}{6} \right)
$$

Con $$k = 0, 1, 2, 3, 4, 5$$, $$\theta = 0^\circ$$ e $$\rho = 1$$, ed ottengo:

- [per $$k = 0$$]{.text-red}
$$
\textcolor{red}{(\sqrt[6]{w^6})_{0+1} = \sqrt[6]{1} \left( \cos \frac{0^\circ + 0 \cdot 360^\circ}{6} + i \sin \frac{0^\circ + 0 \cdot 360^\circ}{6} \right)}
$$
$$
w_1 = \cos \frac{0^\circ}{6} + i \sin \frac{0^\circ}{6} = \cos 0^\circ + i \sin 0^\circ = 1 + i0 = 1
$$

- [per $$k = 1$$]{.text-red}
$$
\textcolor{red}{(\sqrt[6]{w^6})_{1+1} = \sqrt[6]{1} \left( \cos \frac{0^\circ + 1 \cdot 360^\circ}{6} + i \sin \frac{0^\circ + 1 \cdot 360^\circ}{6} \right)}
$$
$$
w_2 = \cos \frac{360^\circ}{6} + i \sin \frac{360^\circ}{6} = \cos 60^\circ + i \sin 60^\circ = \frac{1}{2} + i\frac{\sqrt{3}}{2} = \frac{1 + i\sqrt{3}}{2}
$$

- [per $$k = 2$$]{.text-red}
$$
\textcolor{red}{(\sqrt[6]{w^6})_{2+1} = \sqrt[6]{1} \left( \cos \frac{0^\circ + 2 \cdot 360^\circ}{6} + i \sin \frac{0^\circ + 2 \cdot 360^\circ}{6} \right)}
$$
$$
w_3 = \cos \frac{720^\circ}{6} + i \sin \frac{720^\circ}{6} = \cos 120^\circ + i \sin 120^\circ = -\frac{1}{2} + i\frac{\sqrt{3}}{2} = \frac{-1 + i\sqrt{3}}{2}
$$

- [per $$k = 3$$]{.text-red}
$$
\textcolor{red}{(\sqrt[6]{w^6})_{3+1} = \sqrt[6]{1} \left( \cos \frac{0^\circ + 3 \cdot 360^\circ}{6} + i \sin \frac{0^\circ + 3 \cdot 360^\circ}{6} \right)}
$$
$$
w_4 = \cos \frac{1080^\circ}{6} + i \sin \frac{1080^\circ}{6} = \cos 180^\circ + i \sin 180^\circ = -1 + i \cdot 0 = -1
$$

- [per $$k = 4$$]{.text-red}
$$
\textcolor{red}{(\sqrt[6]{w^6})_{4+1} = \sqrt[6]{1} \left( \cos \frac{0^\circ + 4 \cdot 360^\circ}{6} + i \sin \frac{0^\circ + 4 \cdot 360^\circ}{6} \right)}
$$
$$
w_5 = \cos \frac{1440^\circ}{6} + i \sin \frac{1440^\circ}{6} = \cos 240^\circ + i \sin 240^\circ = -\frac{1}{2} - i\frac{\sqrt{3}}{2} = \frac{-1 - i\sqrt{3}}{2}
$$

- [per $$k = 5$$]{.text-red}
$$
\textcolor{red}{(\sqrt[6]{w^6})_{5+1} = \sqrt[6]{1} \left( \cos \frac{0^\circ + 5 \cdot 360^\circ}{6} + i \sin \frac{0^\circ + 5 \cdot 360^\circ}{6} \right)}
$$
$$
w_6 = \cos \frac{1800^\circ}{6} + i \sin \frac{1800^\circ}{6} = \cos 300^\circ + i \sin 300^\circ = \frac{1}{2} - i\frac{\sqrt{3}}{2} = \frac{1 - i\sqrt{3}}{2}
$$

Quindi, raccogliendo abbiamo:

> **Nota:** L'ordine è diverso da quello delle soluzioni trovate con il metodo algebrico: nota che il metodo della formula ti dà le soluzioni ordinate in senso antiorario sulla circonferenza.

$$
w_1 = 1
$$

$$
w_2 = \frac{1 + i\sqrt{3}}{2}
$$

$$
w_3 = \frac{-1 + i\sqrt{3}}{2}
$$

$$
w_4 = -1
$$

$$
w_5 = \frac{-1 - i\sqrt{3}}{2}
$$

$$
w_6 = \frac{1 - i\sqrt{3}}{2}
$$