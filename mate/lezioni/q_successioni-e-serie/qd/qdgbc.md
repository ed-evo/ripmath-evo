# Un esempio

Come conseguenza abbiamo che la serie armonica a segni alterni è convergente

$$
s = +1 - \frac{1}{2} + \frac{1}{3} - \frac{1}{4} + \frac{1}{5} - \frac{1}{6} + \frac{1}{7} - \dots
$$

È convergente per il teorema di Leibniz: infatti la successione dei suoi termini (senza tener conto dei segni) è

$$
s = 1, \frac{1}{2}, \frac{1}{3}, \frac{1}{4}, \frac{1}{5}, \frac{1}{6}, \frac{1}{7}, \dots
$$

e questa è una successione monotona (decrescente) ed a termini tendenti a zero.

***

> Come esercizio maggioriamo e minoriamo la serie con una ridotta che la approssimi con precisione superiore ad almeno $1/1000$.
>
> Consideriamo la successione delle ridotte dispari
>
> $s_1, s_3, s_5, s_7, \dots$
>
> con
>
> $$
> s_1 = 1 + \frac{1}{3} + \frac{1}{5} + \frac{1}{7} + \dots
> $$
>
> $$
> s_3 = \frac{1}{3} + \frac{1}{5} + \frac{1}{7} + \frac{1}{9} + \dots
> $$
>
> $$
> s_5 = \frac{1}{5} + \frac{1}{7} + \frac{1}{9} + \frac{1}{11} + \dots
> $$
>
> ...
>
> $$
> s_{2k+1} = \frac{1}{2k+1} + \frac{1}{2k+3} + \frac{1}{2k+5} + \frac{1}{2k+7} + \dots
> $$
>
> ...
>
> Consideriamo anche la successione delle ridotte pari
>
> $s_2, s_4, s_6, s_8, \dots$
>
> con
>
> $$
> s_2 = -\frac{1}{2} - \frac{1}{4} - \frac{1}{6} - \frac{1}{8} - \dots
> $$
>
> $$
> s_4 = -\frac{1}{4} - \frac{1}{6} - \frac{1}{8} - \frac{1}{10} - \dots
> $$
>
> $$
> s_6 = -\frac{1}{6} - \frac{1}{8} - \frac{1}{10} - \frac{1}{12} - \dots
> $$
>
> ...
>
> $$
> s_{2k} = -\frac{1}{2k} - \frac{1}{2k+2} - \frac{1}{2k+4} - \frac{1}{2k+6} - \dots
> $$
>
> ...
>
> Per essere sicuri di avere un'approssimazione superiore ad $1/1000$ scegliamo $k = 1000$, così $2k$ sarà $2000$ e $2k+1$ sarà $2001$.
> Abbiamo:
>
> $$
> s_{2000} = -\frac{1}{2000} - \frac{1}{2002} - \frac{1}{2004} - \frac{1}{2006} - \dots
> $$
>
> $$
> s_{2001} = \frac{1}{2001} + \frac{1}{2003} + \frac{1}{2005} + \frac{1}{2007} + \dots
> $$
>
> - Approssimiamo per eccesso: vale la formula
>   $s - s_{2k} \le a_{2k+1}$
>   cioè
>   $$
>   s - s_{2000} \le \frac{1}{2001}
>   $$
>   cioè
>   $$
>   s \le s_{2000} + \frac{1}{2001}
>   $$
>   quindi la somma della ridotta $s_{2000}$ (che è negativa) approssima la somma della serie per meno di $1/2001 \le 1/1000$.
>
> - Approssimiamo per difetto: vale la formula
>   $s_{2k-1} - s \le a_{2k}$
>   o meglio, adattandola ai resti che abbiamo preso
>   $s_{2k+1} - s \le a_{2k+2}$
>   cioè
>   $$
>   s_{2001} - s \le \frac{1}{2002}
>   $$
>   cioè
>   $$
>   s \ge s_{2001} - \frac{1}{2002}
>   $$
>   quindi la somma della ridotta $s_{2001}$ (che è positiva) approssima la somma della serie per più di $-1/2001 \ge -1/1000$.

***

Per finire vediamo un modo di approssimare la somma della serie.
Consideriamo il primo termine e la successione e la somma del primo termine e delle ridotte parziali:

$$
a_1, a_1 + r_{1,1}, a_1 + r_{1,2}, a_1 + r_{1,3}, a_1 + r_{1,4}, \dots
$$

cioè il primo termine, la somma del primo e del secondo termine, la somma dei primi $3$ termini, la somma dei primi $4$ termini...

Approssimo alla terza cifra decimale:

$a_1 = 1,00$
$a_1 + r_{1,1} = 1 - 1/2 = 1/2 = 0,500$
$a_1 + r_{1,2} = 1 - 1/2 + 1/3 = 5/6 = 0,833$
$a_1 + r_{1,3} = 1 - 1/2 + 1/3 - 1/4 = 7/12 = 0,583$
$a_1 + r_{1,4} = 1 - 1/2 + 1/3 - 1/4 + 1/5 = 47/60 = 0,783$
$a_1 + r_{1,5} = 1 - 1/2 + 1/3 - 1/4 + 1/5 - 1/6 = 37/60 = 0,617$
$a_1 + r_{1,6} = 1 - 1/2 + 1/3 - 1/4 + 1/5 - 1/6 - 1/7 = 319/420 = 0,760$
$a_1 + r_{1,7} = 1 - 1/2 + 1/3 - 1/4 + 1/5 - 1/6 + 1/7 - 1/8 = 533/840 = 0,635$

...

Posso suddividere in due successioni, una crescente:

$$
0,500, 0,583, 0,617, 0,635, 0,646, 0,653, 0,659, 0,663, \dots
$$

ed una decrescente:

$$
1,00, 0,833, 0,783, 0,760, 0,746, 0,737, 0,730, 0,725, \dots
$$

(Calcoli fatti con la calcolatrice).
È logico che, reiterando il procedimento, possiamo avvicinarci quanto vogliamo al valore della somma che, visti i dati trovati, si trova fra $0,663$ e $0,725$.