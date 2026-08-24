# [Area di un quadrilatero qualunque]{.text-red}

Chiamiamo $O$ l'intersezione delle due diagonali e poniamo:
$\overline{AC} = d_1 \quad \overline{BD} = d_2$

Poniamo inoltre:
$\overline{AO} = p \quad \overline{OC} = q \quad \overline{BO} = m \quad \overline{OD} = n$
$\widehat{BOA} = \widehat{COD} = \Theta$
$\widehat{AOD} = \widehat{BOC} = 180^\circ - \Theta$

Per trovare l'area totale facciamo la somma delle aree dei vari triangoli componenti il quadrilatero:
$A_s(ABCD) = A_s(AOB) + A_s(BOC) + A_s(COD) + A_s(DOA)$

Utilizziamo per trovare l'area dei triangoli la formula trovata all'inizio del capitolo:

$$
A_s(ABCD) = \frac{1}{2}pm \sin \Theta + \frac{1}{2}mq \sin (180^\circ - \Theta) + \frac{1}{2}qn \sin \Theta + \frac{1}{2}np \sin (180^\circ - \Theta)
$$

Ricordando che $\sin(180^\circ - \Theta) = \sin \Theta$ avremo:

$$
A_s(ABCD) = \frac{1}{2}pm \sin \Theta + \frac{1}{2}mq \sin \Theta + \frac{1}{2}qn \sin \Theta + \frac{1}{2}np \sin \Theta
$$

Prima metto in evidenza i fattori comuni:

$$
A_s(ABCD) = \frac{1}{2} \sin \Theta (pm + mq + qn + np)
$$

Dentro parentesi posso raccogliere a fattor comune parziale:

$$
= \frac{1}{2} \sin \Theta [m(p + q) + n(p + q)]
$$

$$
= \frac{1}{2} \sin \Theta (p + q)(m + n)
$$

Essendo $p + q = d_1$ e $m + n = d_2$ otteniamo la formula finale:

$$
\textcolor{red}{A_s(ABCD) = \frac{1}{2} d_1 d_2 \sin \Theta}
$$

Cioè:

> [**L'area di un quadrilatero è data dal semiprodotto delle diagonali per il seno dell'angolo compreso fra le diagonali stesse**]{.text-blue}