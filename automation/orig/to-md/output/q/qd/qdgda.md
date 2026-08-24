# [Criterio della radice]{.text-red}

Consideriamo la serie

$$
a_1 + a_2 + a_3 + a_4 + \dots
$$

essa converge assolutamente se vale

$$
\lim_{k \to \infty} \sqrt[k]{|a_k|} = \alpha < 1
$$

essendo $\alpha$ un numero reale positivo e la determinazione della radice quella positiva.

Ad esempio, nella serie armonica

$$
1 + \frac{1}{2} + \frac{1}{3} + \frac{1}{4} + \dots + \frac{1}{n} + \dots
$$

se faccio

$\lim_{k \to \infty} \sqrt[k]{|1/k|} = 1$

ottengo $1$ e quindi la serie armonica non converge assolutamente (come abbiamo già visto).

***

Intuitivamente, se faccio radici sempre più grandi e trovo che i valori di tali radici "sono abbastanza lontani" da $1$, allora la serie converge assolutamente, cioè converge la serie dei suoi moduli

$$
|a_1| + |a_2| + |a_3| + |a_4| + \dots
$$

cioè se, ad esempio, considerata la serie armonica

$$
1 + \frac{1}{2} + \frac{1}{3} + \frac{1}{4} + \dots
$$

faccio

$$
\sqrt[100]{|1/100|} = 0,954992586
$$

$$
\sqrt[1000]{|1/1000|} = 0,993116048
$$

$$
\sqrt[10000]{|1/10000|} = 0,999309463
$$

ottengo valori sempre più vicini ad $1$ e che non "sono abbastanza lontani" da $1$.

Per calcolarli ho impostato sulla calcolatrice del computer $1/n^{(1/n)}$ e con $n = 100.000$ già la calcolatrice si rifiuta di calcolare il risultato.

***

> **Dimostrazione:** Essendo la dimostrazione abbastanza semplice, questa la dimostriamo.
>
> Devo dimostrare che se vale
>
> $$
> \lim_{k \to \infty} \sqrt[k]{|a_k|} = \alpha < 1
> $$
>
> allora converge la serie
>
> $$
> |a_1| + |a_2| + |a_3| + |a_4| + \dots
> $$
>
> Se l'ipotesi è vera, allora posso trovare un numero $\beta$ positivo tale che sia compreso fra $\alpha$ ed $1$
>
> $$
> \alpha < \beta < 1
> $$
>
> e quindi
>
> $$
> \sqrt[k]{|a_k|} < \beta
> $$
>
> elevando a $k$ entrambi i membri, se $k$ è abbastanza grande avremo
>
> $$
> |a_k| \le \beta^k
> $$
>
> Se $\beta$ è positivo e minore di $1$, allora la serie geometrica
>
> $$
> \beta^k + \beta^{k+1} + \beta^{k+2} + \dots
> $$
>
> è convergente. Ma tale serie è una maggiorante della serie
>
> $$
> |a_{k+1}| + |a_{k+2}| + |a_{k+3}| + \dots
> $$
>
> che quindi converge, come volevamo.