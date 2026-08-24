# Criterio del confronto

Consideriamo la serie

$$a_1 + a_2 + a_3 + a_4 + \dots$$

essa converge assolutamente se vale

$$
\lim_{k \to \infty} \frac{|a_{k+1}|}{|a_k|} = \alpha < 1
$$

Cioè se faccio il limite del rapporto di due termini consecutivi al tendere degli indici all'infinito e trovo che esso è un numero positivo inferiore ad $$1$$, allora la serie converge assolutamente, cioè converge la serie dei suoi moduli

$$|a_1| + |a_2| + |a_3| + |a_4| + \dots$$

---

**Esempio:** prendiamo la serie geometrica di ragione $$\frac{1}{2}$$

$$1 + \frac{1}{2} + \frac{1}{4} + \frac{1}{8} + \frac{1}{16} + \dots + \frac{1}{2^k} + \frac{1}{2^{k+1}} + \dots$$

mostriamo che obbedisce al criterio, cioè mostriamo che vale meno di $$1$$ il limite

$$
\lim_{k \to \infty} \frac{\frac{1}{2^{k+1}}}{\frac{1}{2^k}} = \lim_{k \to \infty} \frac{1}{2^{k+1}} \cdot \frac{2^k}{1} = \frac{2^k}{2^{k+1}} = \frac{2^k}{2 \cdot 2^k} = \frac{1}{2} < 1
$$

essendo i termini positivi ho tralasciato i moduli; essendo il limite minore di $$1$$ la serie geometrica converge assolutamente.

mostriamo che, invece, la serie armonica non obbedisce al criterio

$$1 + \frac{1}{2} + \frac{1}{3} + \frac{1}{4} + \frac{1}{5} + \dots + \frac{1}{k} + \frac{1}{k+1} + \dots$$

essendo tutti i termini della serie positivi tralascio i moduli. Applicando il criterio ho:

$$
\lim_{k \to \infty} \frac{\frac{1}{k+1}}{\frac{1}{k}} = \lim_{k \to \infty} \frac{1}{k+1} \cdot \frac{k}{1} = \lim_{k \to \infty} \frac{k}{k+1} = 1
$$

intuitivamente, se $$k$$ tende ad $$\infty$$ allora $$k$$ e $$k+1$$ diventano indistinguibili perché $$1$$ è trascurabile e quindi sono semplificabili e il loro rapporto vale $$1$$.
Essendo il limite del rapporto uguale ad $$1$$ la serie armonica non converge assolutamente.

---

> **Dimostrazione del criterio**
>
> Data la serie
>
> $$a_1 + a_2 + a_3 + a_4 + \dots$$
>
> devo dimostrare che se vale
>
> $$
> \lim_{k \to \infty} \frac{|a_{k+1}|}{|a_k|} = \alpha < 1
> $$
>
> allora converge la serie
>
> $$|a_1| + |a_2| + |a_3| + |a_4| + \dots$$
>
> supponiamo che valga il criterio allora posso trovare un numero $$\beta$$ positivo tale che sia compreso fra $$\alpha$$ e $$1$$
>
> $$\alpha < \beta < 1$$
>
> e quindi, per un valore $$k$$ abbastanza grande avremo
>
> $$
> \frac{|a_{k+1}|}{|a_k|} < \beta
> $$
>
> otteniamo
>
> $$|a_{k+1}| < |a_k| \cdot \beta$$
>
> se ora lo facciamo per $$k+2$$ otteniamo
>
> $$|a_{k+2}| < |a_{k+1}| \cdot \beta < |a_k| \cdot \beta^2$$
>
> se lo facciamo per $$k+3$$ otteniamo
>
> $$|a_{k+3}| < |a_{k+2}| \cdot \beta < |a_{k+1}| \cdot \beta^2 < |a_k| \cdot \beta^3$$
>
> se lo facciamo per $$k+4$$ otteniamo
>
> $$|a_{k+4}| < |a_{k+3}| \cdot \beta < |a_{k+2}| \cdot \beta^2 < |a_{k+1}| \cdot \beta^3 < |a_k| \cdot \beta^4$$
>
> $$\dots$$
>
> quindi la serie
>
> $$|a_{k+1}| + |a_{k+2}| + |a_{k+3}| + |a_{k+4}| + \dots$$
>
> ha come maggiorante la serie
>
> $$|a_k| \cdot \beta + |a_k| \cdot \beta^2 + |a_k| \cdot \beta^3 + |a_k| \cdot \beta^4 + \dots$$
>
> cioè
>
> $$|a_k| \cdot (\beta + \beta^2 + \beta^3 + \beta^4 + \dots)$$
>
> che è prodotto fra un termine finito positivo ed una serie geometrica di ragione $$\beta$$ con $$\beta$$ positivo e minore di $$1$$ e quindi è convergente;
>
> ne segue che anche la minorante
>
> $$|a_{k+1}| + |a_{k+2}| + |a_{k+3}| + |a_{k+4}| + \dots$$
>
> è convergente, ma essa è una ridotta della serie
>
> $$|a_1| + |a_2| + |a_3| + |a_4| + \dots$$
>
> che quindi è convergente, come volevamo.