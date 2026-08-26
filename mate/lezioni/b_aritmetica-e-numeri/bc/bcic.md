# Applicazione alla somma fra numeri razionali (m.c.m.)

Per poter fare la somma fra numeri razionali, se le frazioni hanno denominatori complicati, devo prima scomporre i denominatori in fattori primi per potere poi calcolare il minimo comun denominatore per le frazioni equivalenti;
Vediamo qui direttamente un esempio su come procedere:

***

Esempio $1$

$$
\frac{13}{72} + \frac{7}{180} - \frac{1}{144} =
$$

scompongo $72$: [scomposizione](#) $\text{ } 72 = 2^3 \cdot 3^2$
scompongo $180$: [scomposizione](#) $\text{ } 180 = 2^2 \cdot 3^2 \cdot 5$
scompongo $144$: [scomposizione](#) $\text{ } 144 = 2^4 \cdot 3^2$

**Regola: il minimo comune multiplo fra più numeri (nel nostro caso minimo comun denominatore) è dato dal prodotto dei fattori primi comuni e non comuni presi una sola volta con l'esponente più alto**

Considero i fattori:
il $2$ è comune a tutti e tre i numeri e il suo esponente più alto è $4$, quindi prendo $2^4$
il $3$ è comune a tutti e tre i numeri e il suo esponente è sempre $2$, quindi prendo $3^2$
il $5$ non è comune a tutti e tre i numeri ma lo prendo lo stesso $5$

$\text{m.c.m.} = 2^4 \cdot 3^2 \cdot 5 = 720$

cioè $720$ è il numero più piccolo che messo al denominatore al posto dei tre numeri mi dà $3$ frazioni equivalenti

$$
\frac{13}{72} + \frac{7}{180} - \frac{1}{144} = \frac{13 \cdot 10}{72 \cdot 10} + \frac{7 \cdot 4}{180 \cdot 4} - \frac{1 \cdot 5}{144 \cdot 5} = \frac{130}{720} + \frac{28}{720} - \frac{5}{720} = \frac{153}{720}
$$

***

Questi calcoli, naturalmente, sono per la teoria; in pratica ci si comporta diversamente. Sviluppiamolo in pratica:

$$
\frac{13}{72} + \frac{7}{180} - \frac{1}{144} =
$$

$\text{m.c.m.} = 720$, quindi devo trasformare le mie frazioni in frazioni con $720$ al denominatore.
Scrivo $720$ al denominatore poi:

divido $720$ per il primo denominatore siccome $720 : 72 = 10$ per avere la frazione equivalente moltiplico per $10$ il numeratore della prima frazione;
divido $720$ per il secondo denominatore siccome $720 : 180 = 4$ per avere la frazione equivalente moltiplico per $4$ il numeratore della seconda frazione;
divido $720$ per il terzo denominatore siccome $720 : 144 = 5$ per avere la frazione equivalente moltiplico per $5$ il numeratore della terza frazione.

$$
= \frac{13 \cdot 10 + 7 \cdot 4 - 1 \cdot 5}{720} = \frac{130 + 28 - 5}{720} = \frac{153}{720}
$$

***

> **Nota:** La divisione fra il minimo comune multiplo ed ogni denominatore può sembrare difficile, ma c'è un trucco! Basta considerarli scomposti in fattori:
>
> per fare ad esempio $720 : 180$ hai:
> $$
> 2^4 \cdot 3^2 \cdot 5 : 2^2 \cdot 3^2 \cdot 5
> $$
> basta eliminare gli stessi termini prima e dopo il diviso e prendere quello che resta, in questo caso resta $2^2$.
>
> se fai $720 : 144$ hai:
> $$
> 2^4 \cdot 3^2 \cdot 5 : 2^4 \cdot 3^2
> $$
> elimino gli stessi termini da prima e dopo il diviso e, in questo caso, resta $5$.