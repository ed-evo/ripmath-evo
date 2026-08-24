# [Passaggio dal tasso frazionato al tasso annuo effettivo]{.text-red}

Sorge quindi il problema di passare dal tasso annuo effettivo al tasso frazionato e, viceversa, dal tasso frazionato al tasso annuo effettivo:

Per il passaggio basterà impostare che capitalizzando un euro con il tasso annuo effettivo si dovrà ottenere lo stesso risultato che applicando ad un euro il tasso frazionato per un anno.

Supponendo di dividere l'anno in $k$ periodi, chiamando $i$ il tasso annuo effettivo ed $i_k$ il tasso frazionato per la $k$-esima parte dell'anno avremo:

$$
(1+i) = (1+i_k)^k
$$

Ora passare dal tasso annuo nominale al tasso frazionato è facile da fare perché basta ricavare $i$ spostando $1$ dall'altra parte dell'uguale:

$$
i = (1+i_k)^k - 1
$$

> **Esempio:** calcolare il tasso annuo effettivo equivalente ad un tasso trimestrale del $2\%$
> abbiamo i dati
> $i = 0,02 \quad k = 4$
> applico la formula
> $i = (1+i_k)^k - 1 = (1+0,02)^4 - 1 =$
> leggo sulle tavole finanziarie per $(1+i)^n$ il valore
> $(1+0,02)^4 = 1,08243216$, quindi
> $= 1,08243216 - 1 = 0,08243216$
> quindi il tasso annuo effettivo corrispondente ad un tasso frazionato del $2\%$ quadrimestrale è di
> $i_k = 0,08243216$