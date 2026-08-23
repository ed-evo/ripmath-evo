# [Area della superficie del tronco di cono]{.text-red}

Per calcolare la superficie del tronco di cono prolunghiamone la superficie fino a ricostruire il cono $$VAA'$$ e poi calcoliamone la superficie laterale come differenza fra le superfici laterali dei coni $$VAA'$$ e $$VDD'$$:

$$
A_{sl}(DAA'D') = A_{sl}(VAA') - A_{sl}(VDD')
$$

Essendo dati $$a$$: apotema del tronco di cono, $$R$$: raggio della circonferenza di base maggiore ed $$r$$: raggio della circonferenza di base minore, chiamiamo $$k$$ l'apotema del cono piccolo, quindi $$a+k$$ è l'apotema del cono $$VAA'$$:

$$
A_{sl}(VAA') = \pi R (a+k)
$$

$$
A_{sl}(VDD') = \pi r k
$$

quindi:

$$
A_{sl}(DAA'D') = \pi R (a+k) - \pi r k = \pi Ra + \pi Rk - \pi rk = \pi Ra + \pi k(R - r)
$$

Ora, per trovare la formula, dovremo esprimere $$k$$ con i dati che abbiamo, cioè mediante $$R$$, $$r$$ ed $$a$$; per fare questo consideriamo i triangoli simili $$VAB$$ e $$VDC$$, essi hanno:

$$\hat{AVB} = \hat{DVC}$$ perché in comune

$$\hat{ABV} = \hat{DCV}$$ perché retti

Quindi, avendo due angoli congruenti, per il primo criterio di similitudine i due triangoli sono simili e posso scrivere:

$$
AV : DV = AB : DC
$$

$$
(a+k) : k = R : r
$$

applico la proprietà dello scomporre per poter avere una sola $$k$$ nell'espressione:

$$
(a+k-k) : k = (R-r) : r
$$

$$
a : k = (R-r) : r
$$

ricavo $$k$$: essendo $$k$$ un medio devo fare il prodotto degli estremi fratto l'altro medio:

$$
k = \frac{a r}{R-r}
$$

sostituisco questo valore nella formula della superficie laterale ed ottengo:

$$
A_{sl}(DAA'D') = \pi Ra + \pi(R - r) \cdot \frac{a r}{R-r} = \pi Ra + \pi ar = \pi a(R + r)
$$

> **Tronco di cono**
>
> Area della superficie laterale = $$\pi a(R + r)$$

***

> **Nota:** Da notare che, se sostituiamo le circonferenze con i perimetri abbiamo che la formula è la stessa che valeva per il tronco di piramide: infatti alla stessa formula potevamo arrivare considerando un tronco di piramide regolare ed aumentandone il numero dei lati: man mano che i lati aumentano la misura del perimetro di base si avvicina alla misura della lunghezza della circonferenza.

***

Per avere la superficie totale basterà aggiungere le due aree di base:

> **Tronco di cono**
>
> Area della superficie totale = $$\pi a(R + r) + \pi R^2 + \pi r^2 = \pi [R^2 + a(R + r) + r^2]$$