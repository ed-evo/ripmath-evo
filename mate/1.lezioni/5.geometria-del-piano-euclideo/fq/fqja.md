Consideriamo un triangolo qualunque: esso avrà comunque due angoli acuti: chiamiamoli $$B$$ e $$C$$ e consideriamo la figura:

> **Nota:** se metto al posto di $$B$$ oppure $$C$$ un angolo ottuso invece delle somme nella dimostrazione dovrò fare le differenze

Abbiamo come misure note:
[$$AB = c$$]{.text-red}
[$$BC = a$$]{.text-red}
[$$CA = b$$]{.text-red}
[$$Perimetro = 2p$$]{.text-red}
[$$p = \text{semiperimetro}$$]{.text-red}

Considero la perpendicolare $$AH$$ a $$BC$$ e pongo $$AH = h$$ e $$HC = d$$; quindi $$BH = a - d$$

> Per trovare l'area devo trovare il valore dell'altezza mediante i dati noti $$a$$, $$b$$ e $$c$$: prima calcolo le due parti $$BH$$ ed $$HC$$ della base, poi, tramite questi, calcolo il valore dell'altezza $$h$$.

1. Calcolo il valore di $$HC = d$$
   Il triangolo $$ABH$$ è rettangolo per costruzione, quindi posso applicare il teorema di Pitagora
   [$$c^2 = (a-d)^2 + h^2 = a^2 - 2ad + d^2 + h^2$$]{.text-red}
   ma siccome anche il triangolo $$AHC$$ è rettangolo so che vale
   $$d^2 + h^2 = b^2$$ ed ottengo
   [$$c^2 = a^2 - 2ad + b^2$$]{.text-red}
   Ricavo $$d$$
   [$$2ad = a^2 + b^2 - c^2$$]{.text-red}
   [$$d = \frac{a^2 + b^2 - c^2}{2a}$$]{.text-red}

2. Questo valore trovato mi dà anche il valore di $$BH$$ infatti
   [$$BH = a - d = a - \frac{a^2 + b^2 - c^2}{2a} = \frac{2a^2 - a^2 - b^2 + c^2}{2a} = \frac{a^2 + c^2 - b^2}{2a}$$]{.text-red}

3. Calcolo ora il valore di $$h$$
   Il triangolo $$ACH$$ è rettangolo per costruzione, quindi posso applicare il teorema di Pitagora
   [$$h^2 = b^2 - d^2$$]{.text-red}
   sostituisco a $$d$$ il valore trovato prima
   [$$h^2 = b^2 - \left[ \frac{a^2 + b^2 - c^2}{2a} \right]^2$$]{.text-red}

   Eseguo il quadrato al denominatore e faccio il minimo comune multiplo
   [$$= \frac{4a^2b^2 - (a^2 + b^2 - c^2)^2}{4a^2}$$]{.text-red}

   Sopra posso scomporre come differenza di due quadrati
   [$$= \frac{[2ab + (a^2 + b^2 - c^2)] \cdot [2ab - (a^2 + b^2 - c^2)]}{4a^2}$$]{.text-red}

   Tolgo le parentesi interne
   [$$= \frac{[2ab + a^2 + b^2 - c^2][2ab - a^2 - b^2 + c^2]}{4a^2}$$]{.text-red}

   Posso raccogliere dentro parentesi i termini che sono quadrati di un binomio
   [$$= \frac{[(a^2 + 2ab + b^2) - c^2][-(a^2 - 2ab + b^2) + c^2]}{4a^2}$$]{.text-red}
   [$$= \frac{[(a+b)^2 - c^2][c^2 - (a-b)^2]}{4a^2}$$]{.text-red}

   Scompongo ancora come differenza di quadrati entro le parentesi quadre ed ottengo
   [$$h^2 = \frac{(a+b+c) \cdot (a+b-c) \cdot (c+a-b) \cdot (c-a+b)}{4a^2}$$]{.text-red}

   Ora abbiamo che, per ogni fattore trovato vale
   [$$a+b+c = 2p$$]{.text-red}
   [$$a+b-c = a+b+c - 2c = 2p - 2c$$]{.text-red}
   [$$c+a-b = a+c-b = a+b+c - 2b = 2p - 2b$$]{.text-red}
   [$$c-a+b = c+b-a = a+b+c - 2a = 2p - 2a$$]{.text-red}

   Quindi, sostituendo ottengo
   [$$h^2 = \frac{2p \cdot (2p-2c) \cdot (2p-2b) \cdot (2p-2a)}{4a^2}$$]{.text-red}

   Raccolgo i $$2$$ dentro parentesi, li porto fuori e li moltiplico
   [$$h^2 = \frac{16p \cdot (p-c) \cdot (p-b) \cdot (p-a)}{4a^2}$$]{.text-red}

   semplifico per $$4$$
   [$$= \frac{4p \cdot (p-c) \cdot (p-b) \cdot (p-a)}{a^2}$$]{.text-red}

   Estraendo la radice ottengo il valore di $$h$$
   [$$h = 2 \sqrt{\frac{p(p-a)(p-b)(p-c)}{a}}$]{.text-red}

Ora possiamo trovare il valore dell'area
[$$A_s = \frac{a \cdot h}{2}$$]{.text-red}

[$$= \frac{a \cdot 2 \sqrt{\frac{p(p-a)(p-b)(p-c)}{a}}}{2}$$]{.text-red}

E quindi, semplificando
[$$A_s = \sqrt{p(p-a)(p-b)(p-c)}$]{.text-red}

> Come vedi, se la formula non viene dimostrata c'è la buona ragione che la dimostrazione è troppo complicata: è per questo che io chiamo la formula "famigerata" perché si sa che esiste sin dalla scuola media, però non si dimostra mai