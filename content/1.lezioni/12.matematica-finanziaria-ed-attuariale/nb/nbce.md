# Sconto razionale

Lo sconto si dice razionale quando è calcolato ad interesse semplice, cioè quando per ottenere il valore nominale si applica l'interesse semplice alla somma scontata.

Quindi chiamando $$V$$ la somma scontata ed $$S$$ lo sconto avremo:
$$S = Vit$$

In questa formula però non conosciamo due termini, e precisamente $$S$$ e $$V$$, quindi dovremo ricavare uno dei due termini per sostituirlo nella formula. Sappiamo che il valore nominale $$C$$ sarà il montante del valore attuale $$V$$ in un regime ad interesse semplice, quindi avremo:
$$C = V(1 + it)$$

Ora da questa formula ricaviamo $$V$$ e poi sostituiamolo nella formula iniziale:

$$
V = \frac{C}{1 + it}
$$

***

> **Nota:** Questa formula è molto importante: essa ti mostra che per portare indietro nel tempo il capitale $$C$$ e farlo diventare il valore attuale $$V$$, nel regime ad interesse semplice, basta dividerlo per il fattore $$(1 + it)$$ oppure moltiplicarlo per $$1 / (1 + it) = (1 + it)^{-1}$$.
>
> $$(1 + it)^{-1}$$ si chiama **fattore di sconto razionale**.

***

E quindi sostituendo a $$V$$ trovo la formula per lo sconto razionale:

$$
S = \frac{C it}{1 + it}
$$

***

**Esempio:** Calcolare lo sconto razionale per un valore nominale di $$20000 \text{ €}$$ pagati $$2$$ anni prima della scadenza al tasso del $$5\%$$

- $$C = 20000 \text{ €}$$
- $$i = 0,05$$
- $$t = 2$$

Applico la formula per trovare lo sconto:

$$
S = \frac{C it}{1 + it} = \frac{20000 \cdot 0,05 \cdot 2}{1 + 0,05 \cdot 2} = 1818,181818182
$$

Approssimando al centesimo lo sconto è $$1818,18 \text{ €}$$, quindi calcolo la somma scontata:

$$
V = C - S = 20000 \text{ €} - 1818,18 \text{ €} = 18181,82 \text{ €}
$$

La somma scontata (o valore attuale) è $$18181,82 \text{ €}$$.