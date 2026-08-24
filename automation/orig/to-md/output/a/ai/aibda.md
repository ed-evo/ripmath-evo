#[Sistema di $k$ equazioni in $n$ incognite]{.text-red}

$$
k > n
$$

Per semplicità facciamo un esempio pratico: supponiamo di avere $8$ equazioni in $5$ incognite

- Se non ho equazioni linearmente dipendenti allora il sistema non ammette soluzioni.
> Ho $8$ equazioni in $5$ incognite quindi $3$ equazioni portano informazioni in contrasto con le altre ed i ranghi delle matrici completa ed incompleta saranno diversi.

- Il sistema non ammette soluzioni nemmeno se ho solamente una o due equazioni linearmente dipendenti da altre perché i ranghi della matrice completa ed incompleta sarebbero diversi.
> Avrei $7$ equazioni indipendenti in $5$ incognite oppure $6$ equazioni indipendenti in $5$ incognite, il che significa che qualche informazione è in contrasto con altre ed anche qui i ranghi della matrice completa ed incompleta sono diversi.

- Se ho tre equazioni linearmente dipendenti da altre il sistema si riduce a $5$ equazioni in $5$ incognite e quindi, se le equazioni sono compatibili, ammette una sola soluzione.
> In questo caso le informazioni portate dalle $5$ equazioni determinano le $5$ incognite e i ranghi delle matrici completa ed incompleta sono uguali a $5$.

- Se le equazioni sono compatibili e quelle linearmente dipendenti sono $4, 5, 6, \dots$ allora il mio sistema avrà $\infty^1, \infty^2, \infty^3, \dots$ soluzioni.
> Come già visto avremo che alcune equazioni daranno le stesse informazioni di altre e quindi alcune incognite vanno portate dopo l'uguale per avere tante equazioni linearmente indipendenti quante sono le incognite. In tal caso i ranghi delle matrici completa ed incompleta saranno uguali a $4, 3, 2, \dots$.

In ogni caso comunque basterà che due equazioni portino informazioni in contrasto fra loro (siano incompatibili) per avere un sistema impossibile.

> **Esempio di equazioni non compatibili**
> $$
> x + y + z + t = 1
> $$
> $$
> x + y + z + t = 2
> $$
> Sono incompatibili perché la somma degli stessi $4$ numeri non può essere contemporaneamente $1$ e $2$.