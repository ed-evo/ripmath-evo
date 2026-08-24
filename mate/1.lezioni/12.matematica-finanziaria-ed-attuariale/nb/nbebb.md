# Ricerca dell'importo ad epoche diverse

Vediamo anche qui come fare con un esercizio

Ho un debito di $$4000\text{ €}$$ da pagare fra $$3$$ anni ed un altro di $$6000\text{ €}$$ da pagare fra $$8$$ anni: mi accordo con il creditore per anticipare ora $$2000\text{ €}$$ e poi eseguire $$3$$ pagamenti uguali ($$3$$ rate) fra $$2$$, $$4$$ e $$6$$ anni al tasso dell' $$1,5\%$$. Quanto dovrò pagare per ogni versamento?

**Dati:**
- debito1 = $$4000\text{ €}$$  $$3$$ anni
- debito2 = $$6000\text{ €}$$  $$8$$ anni
- anticipo $$2000\text{ €}$$  $$0$$ anni
- rata 1: $$2$$ anni
- rata 2: $$4$$ anni
- rata 3: $$6$$ anni
- importo rata = $$x$$
- tasso $$i = 1,5\% = 0,015$$

Troviamo l'importo $$x$$ di una delle $$3$$ rate

Riporto tutti i dati alla data odierna
Traccio la retta dei tempi

Imposto l'equazione:

$$
2000 + x \cdot v^{-2} + x \cdot v^{-4} + x \cdot v^{-6} = 4000 \cdot v^{-3} + 6000 \cdot v^{-8}
$$

$$
2000 + x \cdot 1,015^{-2} + x \cdot 1,015^{-4} + x \cdot 1,015^{-6} = 4000 \cdot 1,015^{-3} + 8000 \cdot 1,015^{-8}
$$

$$
x \cdot 1,015^{-2} + x \cdot 1,015^{-4} + x \cdot 1,015^{-6} = 4000 \cdot 1,015^{-3} + 8000 \cdot 1,015^{-8} - 2000
$$

$$
x \cdot (1,015^{-2} + 1,015^{-4} + 1,015^{-6}) = 4000 \cdot 1,015^{-3} + 8000 \cdot 1,015^{-8} - 2000
$$

$$
x = \frac{4000 \cdot 1,015^{-3} + 8000 \cdot 1,015^{-8} - 2000}{1,015^{-2} + 1,015^{-4} + 1,015^{-6}}
$$

Leggo sulle tavole e sostituisco:

$$
x = \frac{4000 \cdot 1,04567838 + 8000 \cdot 1,12649259 - 2000}{1,03022500 + 1,06136355 + 1,09344326}
$$

$$
= \frac{11194,65424}{3,18503181} = 3514,769995343
$$

Approssimo a $$3514,77\text{ €}$$

Quindi fra $$2$$, $$4$$ e $$6$$ anni dovrò versare la somma di $$3514,77\text{ €}$$.