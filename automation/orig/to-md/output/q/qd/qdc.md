# [Serie geometrica]{.text-red}

Come esempio particolarmente importante di serie consideriamo la **serie geometrica**

$$
1 + a + a^2 + a^3 + a^4 + \dots
$$

se $$a = 1$$ allora la serie diventa

$$
1 + 1 + 1 + 1 + 1 + \dots
$$

e quindi diverge

se $$a \pm 1$$ allora la ridotta di ordine $$k$$ è

$$
1 + a + a^2 + a^3 + a^4 + \dots + a^{k-1}
$$

e, vista la formula per la [somma dei primi $$k$$ termini di una progressione geometrica](../qb/qbbe.html) abbiamo

$$
1 + a + a^2 + a^3 + a^4 + \dots + a^{k-1} = \frac{1 - a^k}{1 - a}
$$

i termini sono $$k$$ perché partiamo da zero: infatti la ridotta, scritta come somma di potenze è

$$
a^0 + a^1 + a^2 + a^3 + a^4 + \dots + a^{k-1}
$$

Quindi, visto quanto abbiamo detto sulla [successione geometrica](../qc/qcm.html)

se $$a > 1$$ la serie diverge

se $$0 > a > 1$$ la serie converge

se $$a = -1$$ la serie è indeterminata e si può indicare come

$$
1 - 1 + 1 - 1 + 1 - 1 + 1 - \dots
$$

> **Nota:** Particolarmente interessante, come serie indeterminata, è la serie geometrica di ragione $$i$$ con $$i$$ unità complessa $$i = \sqrt{-1}$$
>
> $$
> i^0 + i^1 + i^2 + i^3 + i^4 + i^5 + i^6 + i^7 + i^8 + \dots
> $$
>
> ricordando che il prodotto delle $$i$$ è ciclico, cioè si ripete ogni $$4$$ fattori
>
> $$i^1 = i$$
> $$i^2 = \sqrt{-1} \cdot \sqrt{-1} = -1$$
> $$i^3 = i^2 \cdot i = -1 \cdot i = -i$$
> $$i^4 = i^3 \cdot i = -\sqrt{-1} \cdot \sqrt{-1} = -(-1) = 1$$
> $$i^5 = i^4 \cdot i = 1 \cdot i = i$$
> $$\dots$$
>
> quindi potremo scrivere la serie come
>
> $$
> 1 + i - 1 - i + 1 + i - 1 - i + 1 + i - 1 - i + \dots
> $$