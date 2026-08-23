# [Volume del tronco di piramide]{.text-red}

Consideriamo il tronco di piramide di base maggiore $$B$$, di base minore $$b$$ e di altezza $$h$$.

> **Nota:** Per semplicità chiamiamo $$B$$ sia la base maggiore che la misura dell'area della base stessa, lo stesso vale per $$b$$. Come dati ho le misure delle aree di base e quella dell'altezza $$h$$, quindi devo trovare la formula finale solamente con questi dati.

Prolungo il tronco di piramide fino ad ottenere il vertice $$V$$ e considero le due piramidi di vertice $$V$$: la prima di base $$B$$ ed altezza $$h+k$$, la seconda (quella sopra) di base $$b$$ ed altezza $$k$$.

Per calcolare il volume del tronco di piramide farò la differenza fra il volume della piramide maggiore e quello della piramide minore. Per semplicità chiamo $$VM$$ il volume della piramide maggiore e $$Vm$$ il volume della piramide minore e $$q$$ l'altezza della piramide maggiore ($$q = h + k$$).

Ho:

$$
VM = \frac{B \cdot q}{3} \quad \text{e} \quad Vm = \frac{b \cdot k}{3}
$$

$$
V_{tronco} = \frac{B \cdot q}{3} - \frac{b \cdot k}{3}
$$

$$
V_{tronco} = \frac{Bq - bk}{3}
$$

Ora, in questa formula, dobbiamo sostituire i termini non noti con un'espressione data dai miei termini noti ($$B$$, $$b$$ ed $$h$$).

Applichiamo la proporzione indicata nella pagina precedente fra le aree e le altezze: posso scrivere

$$
B : b = q^2 : k^2
$$

Per la proprietà del permutare scrivo

$$
B : q^2 = b : k^2 = d
$$

Ho chiamato $$d$$ il valore del rapporto di proporzionalità. Quindi posso ricavare $$B$$ e $$b$$:

$$
B = d q^2 \quad \text{e} \quad b = d k^2
$$

Sostituendo nella formula del volume ottengo

$$
V_{tronco} = \frac{dq^2 \cdot q - dk^2 \cdot k}{3}
$$

$$
V_{tronco} = \frac{dq^3 - dk^3}{3}
$$

Evidenzio $$\frac{d}{3}$$:

$$
V_{tronco} = \frac{d}{3}(q^3 - k^3)
$$

Scompongo (differenza di cubi):

$$
V_{tronco} = \frac{d}{3}(q - k)(q^2 + qk + k^2)
$$

Ed essendo $$q - k = h$$:

$$
V_{tronco} = \frac{dh}{3}(q^2 + qk + k^2)
$$

Riporto $$d$$ dentro parentesi:

$$
V_{tronco} = \frac{h}{3}(dq^2 + dqk + dk^2)
$$

Ma dal calcolo $$B = d q^2$$ e $$b = d k^2$$ fatto sopra so che vale:

$$
dq^2 = B \quad \text{e} \quad dk^2 = b
$$

Inoltre, moltiplicando $$B \cdot b$$ ottengo $$B \cdot b = d^2 q^2 k^2$$ ed, estraendo la radice e leggendo alla rovescia:

$$
dqk = \sqrt{Bb}
$$

Quindi, sostituendo arriviamo alla formula finale:

$$
V_{tronco} = \frac{h}{3}(B + \sqrt{Bb} + b)
$$

> **Nota:** Stavolta leggere la formula non è molto semplice: comunque, se a qualcuno interessa occorre fare riferimento alla proporzione continua (quella che ha i termini medi identici $$B : x = x : b$$) in modo che ricavando $$x$$ (termine medio proporzionale) ottengo $$\sqrt{Bb}$$.

> **Definizione:** Il volume di un tronco di piramide di altezza data è uguale al volume di 3 piramidi aventi la stessa altezza, la prima avente come base la base maggiore del cono, la seconda avente come base l'area di un poligono medio proporzionale fra le due basi e la terza avente come base la base minore del tronco dato.

Facciamo un semplice esercizio:

**Calcolare il volume di un tronco di piramide avente base maggiore di area $$12\text{m}^2$$, base minore di $$3\text{m}^2$$, alto $$2\text{ metri}$$**

Applichiamo la formula:

$$
V_{tronco} = \frac{2\text{ m}}{3}(12\text{m}^2 + \sqrt{12\text{m}^2 \cdot 3\text{m}^2} + 3\text{m}^2)
$$

$$
V_{tronco} = \frac{2\text{ m}}{3}(12\text{m}^2 + \sqrt{36\text{m}^4} + 3\text{m}^2)
$$

$$
V_{tronco} = \frac{2\text{ m}}{3}(12\text{m}^2 + 6\text{m}^2 + 3\text{m}^2) = \frac{2\text{ m}}{3} 36\text{m}^2 = 24\text{m}^3
$$

Quindi il nostro tronco di piramide ha un volume di $$24\text{ metri cubi}$$.