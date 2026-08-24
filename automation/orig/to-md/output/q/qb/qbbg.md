# [Prodotto di n termini di una progressione geometrica]{.text-red}

È possibile calcolare il prodotto di $n$ termini di una progressione geometrica con tutti i termini positivi.

Consideriamo la progressione
$a_1, a_2, a_3, a_4, \dots, a_{n-2}, a_{n-1}, a_n, \dots$

Vediamo come trovare una formula per calcolare, ad esempio, il prodotto dei primi $n$ termini:

$$
P_n = a_1 \cdot a_2 \cdot a_3 \cdot \dots \cdot a_{n-2} \cdot a_{n-1} \cdot a_n
$$

> **Proprietà:** Data una progressione geometrica limitata, il prodotto di due termini equidistanti dagli estremi equivale al prodotto degli estremi.

Vediamolo su un esempio: considero la progressione geometrica limitata a $7$ termini:
$3, 6, 12, 24, 48, 96, 192$

Se io moltiplico gli estremi $3 \cdot 192$ ottengo $576$.
Se prendo $6$ e $96$ (secondo e sesto termine) che sono equidistanti dai due estremi, anche il loro prodotto è $6 \cdot 96 = 576$.

Infatti il secondo termine della progressione si ottiene dal primo moltiplicandolo per la ragione, mentre il penultimo termine si ottiene dall'ultimo dividendolo per la ragione, quindi il risultato è identico.

Quindi, se i termini che considero sono equidistanti dagli estremi, il primo è moltiplicato ed il secondo è diviso per la ragione lo stesso numero di volte; di conseguenza, moltiplicandoli, ottengo sempre un risultato uguale al prodotto degli estremi:

$3 \cdot 192 = 576$
$6 \cdot 96 = 576$
$12 \cdot 48 = 576$
$24 \cdot 24 = 576$
$48 \cdot 12 = 576$
$96 \cdot 6 = 576$
$192 \cdot 3 = 576$

Considero il prodotto dei primi $n$ termini:

$$
P_n = a_1 \cdot a_2 \cdot a_3 \cdot \dots \cdot a_{n-2} \cdot a_{n-1} \cdot a_n
$$

Per la proprietà commutativa del prodotto posso scrivere:

$$
P_n = a_n \cdot a_{n-1} \cdot a_{n-2} \cdot \dots \cdot a_3 \cdot a_2 \cdot a_1
$$

Moltiplichiamo fra loro le due uguaglianze; usando la proprietà associativa posso associare i termini in ordine:

$$
P_n^2 = (a_1 \cdot a_n) \cdot (a_2 \cdot a_{n-1}) \cdot (a_3 \cdot a_{n-2}) \dots (a_{n-2} \cdot a_3) \cdot (a_{n-1} \cdot a_2) \cdot (a_n \cdot a_1)
$$

Per la proprietà vista sopra, ognuno dei prodotti entro parentesi vale $a_1 \cdot a_n$, quindi, essendo $n$ tali prodotti, posso scrivere:

$$
P_n^2 = (a_1 \cdot a_n)^n
$$

E quindi, estraendo la radice quadrata, ottengo il risultato finale:

$$
\textcolor{red}{P_n = \sqrt{(a_1 \cdot a_n)^n}}
$$

> **Esempio:** calcoliamo il prodotto dei $7$ termini della progressione geometrica precedente:
> $3, 6, 12, 24, 48, 96, 192$
>
> $$
> P_7 = \sqrt{576^7} = 4.586.471.424
> $$
> (per fare i calcoli è ottima la calcolatrice del computer)
>
> cioè
> $$
> 3 \cdot 6 \cdot 12 \cdot 24 \cdot 48 \cdot 96 \cdot 192 = 4.586.471.424
> $$