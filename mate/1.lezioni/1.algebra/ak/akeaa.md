# Dimostrazione della formula risolutiva per i radicali doppi

### Formula con il più

$$
\sqrt{a + \sqrt{b}} = \sqrt{\frac{a + \sqrt{a^2 - b}}{2}} + \sqrt{\frac{a - \sqrt{a^2 - b}}{2}}
$$

> **Dimostrazione:**
>
> Per la dimostrazione elevo al quadrato il termine prima dell'uguale, elevo al quadrato l'espressione dopo l'uguale e confronto se i risultati sono uguali. Utilizziamo la formula con il più fra le due radici: con il segno meno cambierà semplicemente di segno il doppio prodotto.
>
> - Elevo al quadrato l'espressione prima dell'uguale: il quadrato e la radice si annullano a vicenda:
>   $[\sqrt{a + \sqrt{b}}]^2 = a + \sqrt{b}$
>
> - Elevo al quadrato l'espressione dopo l'uguale: si tratta del quadrato di un binomio:
>
>   $$
>   \left[ \sqrt{\frac{a + \sqrt{a^2 - b}}{2}} + \sqrt{\frac{a - \sqrt{a^2 - b}}{2}} \right]^2 =
>   $$
>
>   $$
>   = \frac{a + \sqrt{a^2 - b}}{2} + \frac{a - \sqrt{a^2 - b}}{2} + 2\sqrt{\frac{a + \sqrt{a^2 - b}}{2}} \cdot \sqrt{\frac{a - \sqrt{a^2 - b}}{2}} =
>   $$
>
>   I primi due radicali hanno lo stesso denominatore ed inoltre sono uguali e di segno contrario, quindi li posso eliminare; inoltre nel doppio prodotto ho un prodotto notevole $(x+y)(x-y) = x^2 - y^2$, quindi:
>
>   $$
>   = \frac{a}{2} + \frac{a}{2} + 2\sqrt{\frac{a^2 - (\sqrt{a^2 - b})^2}{4}} =
>   $$
>
>   $\frac{a}{2} + \frac{a}{2} = a$, inoltre all'interno del radicale la radice sparisce con il quadrato:
>
>   $$
>   = a + 2\sqrt{\frac{a^2 - (a^2 - b)}{4}} =
>   $$
>
>   $$
>   = a + 2\sqrt{\frac{a^2 - a^2 + b}{4}} = a + 2\sqrt{\frac{b}{4}} =
>   $$
>
>   Estraggo il $4$ al denominatore e lo elimino con il $2$ ed ottengo:
>
>   $$
>   = a + \frac{2}{2}\sqrt{b} = a + \sqrt{b}
>   $$
>
> Come volevamo dimostrare.

***

### Formula con il meno

$$
\sqrt{a - \sqrt{b}} = \sqrt{\frac{a + \sqrt{a^2 - b}}{2}} - \sqrt{\frac{a - \sqrt{a^2 - b}}{2}}
$$

> **Dimostrazione:**
>
> Dimostriamo anche la seconda formula: come già detto nella dimostrazione, cambia solamente il segno del doppio prodotto.
>
> - Elevo al quadrato l'espressione prima dell'uguale: il quadrato e la radice si annullano a vicenda:
>   $[\sqrt{a - \sqrt{b}}]^2 = a - \sqrt{b}$
>
> - Elevo al quadrato l'espressione dopo l'uguale: si tratta del quadrato di un binomio:
>
>   $$
>   \left[ \sqrt{\frac{a + \sqrt{a^2 - b}}{2}} - \sqrt{\frac{a - \sqrt{a^2 - b}}{2}} \right]^2 =
>   $$
>
>   $$
>   = \frac{a + \sqrt{a^2 - b}}{2} + \frac{a - \sqrt{a^2 - b}}{2} - 2\sqrt{\frac{a + \sqrt{a^2 - b}}{2}} \cdot \sqrt{\frac{a - \sqrt{a^2 - b}}{2}} =
>   $$
>
>   I primi due radicali hanno lo stesso denominatore ed inoltre sono uguali e di segno contrario, quindi li posso eliminare; inoltre nel doppio prodotto ho un prodotto notevole $(x+y)(x-y) = x^2 - y^2$, quindi:
>
>   $$
>   = \frac{a}{2} + \frac{a}{2} - 2\sqrt{\frac{a^2 - (\sqrt{a^2 - b})^2}{4}} =
>   $$
>
>   $\frac{a}{2} + \frac{a}{2} = a$, inoltre all'interno del radicale la radice sparisce con il quadrato:
>
>   $$
>   = a - 2\sqrt{\frac{a^2 - (a^2 - b)}{4}} =
>   $$
>
>   $$
>   = a - 2\sqrt{\frac{a^2 - a^2 + b}{4}} = a - 2\sqrt{\frac{b}{4}} =
>   $$
>
>   Estraggo il $4$ al denominatore e lo elimino con il $2$ ed ottengo:
>
>   $$
>   = a - \frac{2}{2}\sqrt{b} = a - \sqrt{b}
>   $$
>
> Come volevamo dimostrare.