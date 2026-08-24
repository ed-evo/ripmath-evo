# [Ricerca di un termine qualunque della progressione geometrica]{.text-red}

Siccome il quoziente fra ogni termine e l'antecedente è costante, conoscendo il primo termine e la ragione possiamo trovare un termine qualunque della progressione.

Infatti, ad esempio, data la progressione geometrica di primo termine $3$ e ragione $2$ abbiamo:

- primo termine $3$
- secondo termine $3 \cdot 2 = 6$
- terzo termine $6 \cdot 2 = 3 \cdot 2^2 = 3 \cdot 4 = 12$
- quarto termine $12 \cdot 2 = 3 \cdot 2^3 = 3 \cdot 8 = 24$
- quinto termine $24 \cdot 2 = 3 \cdot 2^4 = 3 \cdot 16 = 48$
- sesto termine $48 \cdot 2 = 3 \cdot 2^5 = 3 \cdot 32 = 96$

Quindi, se voglio l'undicesimo termine basterà fare:
undicesimo termine $3 \cdot 2^{(11-1)} = 3 \cdot 2^{10} = 3 \cdot 1024 = 3072$

Quindi la formula per trovare il termine $k$-esimo di una progressione geometrica, dato il primo termine $a_1$ e di ragione $q$ sarà:

$$
\textcolor{red}{a_k = a_1 \cdot q^{(k-1)}}
$$

> **Esempio:** Dato il primo termine $-2$ e ragione $3$ trovare il decimo termine
>
> $a_{10} = a_1 \cdot 3^{(10-1)} = -2 \cdot 3^9 = -2 \cdot 19683 = -39366$