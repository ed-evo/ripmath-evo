## [Approfondimento]{.text-red}

Mostriamo prima che tutti i trapezi laterali del tronco di piramide derivante da una piramide retta hanno la stessa altezza (d'ora in avanti quando parleremo di tronco di piramide, se non espressamente indicato, intenderemo un tronco derivante da una piramide **retta**).

Consideriamo la piramide completa $VABC$: allora, essendo retta, essa avrà tutte le misure delle altezze delle facce laterali (apoteme delle facce triangolari) uguali.

> In figura ho segnato solamente l'altezza $VK$ della faccia $VAB$, ma le tre altezze delle facce laterali sono congruenti.

Però saranno uguali anche le misure delle altezze delle facce laterali della piramide $VDEF$ che ha come base la base minore del tronco di piramide.

> In figura ho segnato solamente l'altezza $VK'$ della faccia $VDE$, ma le tre altezze delle facce laterali sono congruenti.

Avremo che vale:

$$
DH = K'K = VK - VK'
$$

e quindi, per differenza, potremo dire che le facce laterali (trapezi) del tronco di piramide hanno altezze congruenti.

***

Troviamo la formula per calcolare la superficie laterale di un tronco di piramide retto qualunque.

Sappiamo che l'area di un trapezio è data dalla semisomma delle basi moltiplicata per l'altezza.

Chiamo i lati del perimetro della base maggiore $l_1$, $l_2$, $l_3$, ...
Chiamo i lati del perimetro della base minore $m_1$, $m_2$, $m_3$, ...
Chiamo l'altezza comune $a$.

Ho quindi:

$$
Asl = \frac{l_1 + m_1}{2} \cdot a + \frac{l_2 + m_2}{2} \cdot a + \frac{l_3 + m_3}{2} \cdot a + \dots
$$

Metto in evidenza $\frac{a}{2}$:

$$
Asl = \frac{a}{2} \cdot [(l_1 + m_1) + (l_2 + m_2) + (l_3 + m_3) + \dots]
$$

Faccio cadere le parentesi tonde:

$$
Asl = \frac{a}{2} \cdot [l_1 + m_1 + l_2 + m_2 + l_3 + m_3 + \dots]
$$

Adesso raccolgo fra loro i lati della base maggiore ed i lati della base minore:

$$
Asl = \frac{a}{2} \cdot [(l_1 + l_2 + l_3 + \dots) + (m_1 + m_2 + m_3 + \dots)]
$$

Quindi dentro le parentesi tonde ho i perimetri $2pB$ e $2pb$ delle basi maggiore e minore:

$$
Asl = \frac{a}{2} \cdot (2pB + 2pb)
$$

Raccolgo il $2$ dentro parentesi e poi lo semplifico con il $2$ al denominatore:

$$
Asl = \frac{a}{2} \cdot 2(pB + pb) = a \cdot (pB + pb)
$$