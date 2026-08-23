# calcoli

Risolvere l'integrale

$$
F(x) = \int_{0}^{x} \alpha e^{-\alpha t} dt =
$$

È un integrale del tipo $$\int e^{f(t)}f'(t)dt$$ con $$f(t) = -\alpha t$$.

Siccome $$f'(t) = -\alpha$$ allora scriviamo $$-(-\alpha)$$ in modo da non variare il valore ma avere la derivata della funzione al numeratore.

$$
= \int_{0}^{x} -(-\alpha) e^{-\alpha t} dt =
$$

Ora posso estrarre il segno $$-$$ dal segno di integrale in modo da avere al numeratore esattamente la derivata dell'esponente.

$$
= -\int_{0}^{x} -\alpha e^{-\alpha t} dt =
$$

Adesso, essendo $$-\alpha$$ la derivata dell'esponente $$-\alpha t$$, abbiamo un integrale immediato che trovi nella tabella degli integrali di funzione di funzione e, come integrale indefinito vale $$e^{-\alpha x}$$, quindi ottengo:

$$
= -\left[ e^{-\alpha t} \right]_{0}^{x} =
$$

Adesso devo sostituire dentro il simbolo differenza prima alla $$t$$ il valore $$x$$, poi devo sostituire $$0$$ e sottrarlo.

$$
= -(e^{-\alpha x} - e^{-\alpha \cdot 0}) =
$$

$$-\alpha$$ per $$0$$ vale zero; ho $$e^{0} = 1$$.

$$
= -(e^{-\alpha x} - 1) =
$$

Moltiplico per il segno meno (faccio cadere la parentesi).

$$
= -e^{-\alpha x} + 1 =
$$

Scrivo prima il termine positivo.

$$
= 1 - e^{-\alpha x}
$$