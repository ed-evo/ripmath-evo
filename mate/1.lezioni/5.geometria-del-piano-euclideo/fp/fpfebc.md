# Problema

In un trapezio rettangolo congiungere un punto del lato perpendicolare alle basi con gli estremi del lato obliquo in modo che i due triangoli rettangoli che si ottengono siano simili tra loro.

> **Ipotesi:** $ADE$ simile ad $EBC$
>
> **Tesi:** trovare la posizione del punto $E$

Troviamo ad esempio quale deve essere la lunghezza del segmento $AE$ utilizzando i lati del trapezio pensati come noti.

Essendo i triangoli $ADE$ e $EBC$ simili per ipotesi posso scrivere la proporzione:

$$
AD : AE = BC : EB
$$

Per trasportare $AE$ ed $EB$ dalla stessa parte dell'uguale applico la proprietà del permutare: scambiando tra loro i medi la proporzione resta valida:

$$
AD : BC = AE : EB
$$

Adesso applico la proprietà del comporre:

$$
(AD + BC) : AD = (AE + EB) : AE
$$

So che $AE + EB = AB$, quindi:

$$
(AD + BC) : AD = AB : AE
$$

E, ricavando $AE$ dalla proporzione ottengo:

$$
AE = \frac{AB \cdot (AD + BC)}{AD}
$$

Come volevamo.