# Passaggio dal sistema binario al sistema decimale

Per passare dal sistema binario al sistema decimale utilizzeremo la forma polinomiale dei numeri binari: cioè ogni numero binario può essere pensato in forma decimale come un polinomio a base $2$, cioè ad esempio:

$$
10011_{2} = [1 \cdot 2^{4} + 0 \cdot 2^{3} + 0 \cdot 2^{2} + 1 \cdot 2^{1} + 1 \cdot 2^{0}]_{10} = [16+2+1]_{10} = 19_{10}
$$

cioè la cifra binaria ($0$ o $1$) va moltiplicata per la potenza del due corrispondente al posto che tale cifra occupa nel numero binario stesso.

| Cifra binaria | ... | undicesima | decima | nona | ottava | settima | sesta | quinta | quarta | terza | seconda | prima |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Potenza del $2$ | ... | $2^{10}$ | $2^{9}$ | $2^{8}$ | $2^{7}$ | $2^{6}$ | $2^{5}$ | $2^{4}$ | $2^{3}$ | $2^{2}$ | $2^{1}$ | $2^{0}$ |
| Valore potenza | ... | $1024$ | $512$ | $256$ | $128$ | $64$ | $32$ | $16$ | $8$ | $4$ | $2$ | $1$ |

> **Nota:** Notare che l'esponente del $2$ è sempre inferiore di $1$ rispetto al posto della cifra perché si parte da zero: cifra ottava potenza $7$, cifra sesta potenza $5$, ...

Ad esempio, se hai il numero $10011011$ composto di $8$ cifre, mettilo mentalmente in tabella ed avrai:

| Cifra binaria | ... | undicesima | decima | nona | ottava | settima | sesta | quinta | quarta | terza | seconda | prima |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Potenza del $2$ | ... | $2^{10}$ | $2^{9}$ | $2^{8}$ | $2^{7}$ | $2^{6}$ | $2^{5}$ | $2^{4}$ | $2^{3}$ | $2^{2}$ | $2^{1}$ | $2^{0}$ |
| Valore potenza | ... | $1024$ | $512$ | $256$ | $128$ | $64$ | $32$ | $16$ | $8$ | $4$ | $2$ | $1$ |
| Numero dato | ... | | | | $1$ | $0$ | $0$ | $1$ | $1$ | $0$ | $1$ | $1$ |

Adesso somma i numeri corrispondenti alle cifre sopra gli $1$:

$$
128+16+8+2+1 = 155
$$

cioè:

$$
10011011_{2} = 155_{10}
$$

Comunque, di solito, negli esercizi, senza passare per la forma polinomiale, è preferibile ricordare la successione:

$1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, \dots$

delle potenze del $2$: per ricordartela osserva che ogni numero è doppio del precedente. Essendo il numero binario composto di $1$ e di $0$ basta associare ad ogni numero $1$ il valore del posto che occupa: faccio un esempio.

Trasformare il numero binario $110011101_{2}$ in numero decimale.
Scrivo, sopra ogni numero $1$ il valore corrispondente, naturalmente cominciando dall'$1$ più a destra e procedendo verso sinistra:

| $256$ | $128$ | | | $16$ | $8$ | $4$ | | $1$ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| $1$ | $1$ | $0$ | $0$ | $1$ | $1$ | $1$ | $0$ | $1$ |

Scrivo $1$ sopra il primo $1$ a destra, poi sopra lo $0$ dovrei scrivere $2$, ma essendo $0$ lo salto, poi scrivo $4$ sopra l'$1$ al terzo posto, $8$ sopra l'uno al quarto posto e $16$ sopra l'$1$ al quinto posto, al sesto posto dovrei scrivere $32$ ma siccome c'è lo zero lo salto e così anche al settimo posto dovrei scrivere $64$ ma non lo scrivo perché c'è lo zero, scrivo invece $128$ sopra l'$1$ all'ottavo posto e $256$ sopra l'$1$ al nono posto.

Quindi:

$$
110011101_{2} = 256 + 128 + 16 + 8 + 4+ 1 = 413_{10}
$$

***

Per esercizio trasforma in decimali i seguenti numeri binari:

- $111001_{2} =$ [Svolgimento](pbfea.html)
- $1010101010_{2} =$ [Svolgimento](pbfeb.html)
- $11111111_{2} =$ [Svolgimento](pbfec.html)

***

Qui di seguito metto una tabella con corrispondenti i primi $20$ numeri binari ed i numeri decimali, potrebbe esserti utile:

| Binario | Binario in forma polinomiale | Decimale |
| :--- | :--- | :--- |
| $0$ | $0 \cdot 2^{0} = 0 \cdot 1 = 0$ | $0$ |
| $1$ | $1 \cdot 2^{0} = 1 \cdot 1 = 1$ | $1$ |
| $10$ | $1 \cdot 2^{1} + 0 \cdot 2^{0} = 2+0 = 2$ | $2$ |
| $11$ | $1 \cdot 2^{1} + 1 \cdot 2^{0} = 2+1 = 3$ | $3$ |
| $100$ | $1 \cdot 2^{2} + 0 \cdot 2^{1} + 0 \cdot 2^{0} = 4+0+0 = 4$ | $4$ |
| $101$ | $1 \cdot 2^{2} + 0 \cdot 2^{1} + 1 \cdot 2^{0} = 4+0+1 = 5$ | $5$ |
| $110$ | $1 \cdot 2^{2} + 1 \cdot 2^{1} + 0 \cdot 2^{0} = 4+2+0 = 6$ | $6$ |
| $111$ | $1 \cdot 2^{2} + 1 \cdot 2^{1} + 1 \cdot 2^{0} = 4+2+1 = 7$ | $7$ |
| $1000$ | $1 \cdot 2^{3} + 0 \cdot 2^{2} + 0 \cdot 2^{1} + 0 \cdot 2^{0} = 8+0+0+0 = 8$ | $8$ |
| $1001$ | $1 \cdot 2^{3} + 0 \cdot 2^{2} + 0 \cdot 2^{1} + 1 \cdot 2^{0} = 8+0+0+1 = 9$ | $9$ |
| $1010$ | $1 \cdot 2^{3} + 0 \cdot 2^{2} + 1 \cdot 2^{1} + 0 \cdot 2^{0} = 8+0+2+0 = 10$ | $10$ |
| $1011$ | $1 \cdot 2^{3} + 0 \cdot 2^{2} + 1 \cdot 2^{1} + 1 \cdot 2^{0} = 8+0+1+1 = 11$ | $11$ |
| $1100$ | $1 \cdot 2^{3} + 1 \cdot 2^{2} + 0 \cdot 2^{1} + 0 \cdot 2^{0} = 8+4+0+0 = 12$ | $12$ |
| $1101$ | $1 \cdot 2^{3} + 1 \cdot 2^{2} + 0 \cdot 2^{1} + 1 \cdot 2^{0} = 8+4+0+1 = 13$ | $13$ |
| $1110$ | $1 \cdot 2^{3} + 1 \cdot 2^{2} + 1 \cdot 2^{1} + 0 \cdot 2^{0} = 8+4+2+0 = 14$ | $14$ |
| $1111$ | $1 \cdot 2^{3} + 1 \cdot 2^{2} + 1 \cdot 2^{1} + 1 \cdot 2^{0} = 8+4+2+1 = 15$ | $15$ |
| $10000$ | $1 \cdot 2^{4} + 0 \cdot 2^{3} + 0 \cdot 2^{2} + 0 \cdot 2^{1} + 0 \cdot 2^{0} = 16+0+0+0+0 = 16$ | $16$ |
| $10001$ | $1 \cdot 2^{4} + 0 \cdot 2^{3} + 0 \cdot 2^{2} + 0 \cdot 2^{1} + 1 \cdot 2^{0} = 16+0+0+0+1 = 17$ | $17$ |
| $10010$ | $1 \cdot 2^{4} + 0 \cdot 2^{3} + 0 \cdot 2^{2} + 1 \cdot 2^{1} + 0 \cdot 2^{0} = 16+0+0+2+0 = 18$ | $18$ |
| $10011$ | $1 \cdot 2^{4} + 0 \cdot 2^{3} + 0 \cdot 2^{2} + 1 \cdot 2^{1} + 1 \cdot 2^{0} = 16+0+0+2+1 = 19$ | $19$ |
| $10100$ | $1 \cdot 2^{4} + 0 \cdot 2^{3} + 1 \cdot 2^{2} + 0 \cdot 2^{1} + 0 \cdot 2^{0} = 16+0+4+0+0 = 20$ | $20$ |