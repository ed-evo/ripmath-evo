# esercizio

Mostrare la presenza della struttura ad anello per l'insieme $r_5$, insieme dei resti modulo 5 con le relative operazioni di addizione $\oplus$ e moltiplicazione $\otimes$.

[Per ripassare l'insieme $r_5$](hcdcea.html)

> **Dimostrazione:**
> Dovremo mostrare:
> - la presenza di un gruppo commutativo con la prima operazione $\oplus$
> - la presenza di un semigruppo con la seconda operazione $\otimes$
> - il fatto che la seconda operazione è distributiva rispetto alla prima

Cominciamo dal primo punto.
La struttura di gruppo additivo $(r_5, \oplus)$ l'abbiamo già evidenziata in precedenza ma qui la ripetiamo:

| $\oplus$ | $0$ | $1$ | $2$ | $3$ | $4$ |
| :---: | :---: | :---: | :---: | :---: | :---: |
| $0$ | [$0$]{.text-red} | [$1$]{.text-red} | [$2$]{.text-red} | [$3$]{.text-red} | [$4$]{.text-red} |
| $1$ | [$1$]{.text-red} | [$2$]{.text-red} | [$3$]{.text-red} | [$4$]{.text-red} | [$0$]{.text-red} |
| $2$ | [$2$]{.text-red} | [$3$]{.text-red} | [$4$]{.text-red} | [$0$]{.text-red} | [$1$]{.text-red} |
| $3$ | [$3$]{.text-red} | [$4$]{.text-red} | [$0$]{.text-red} | [$1$]{.text-red} | [$2$]{.text-red} |
| $4$ | [$4$]{.text-red} | [$0$]{.text-red} | [$1$]{.text-red} | [$2$]{.text-red} | [$3$]{.text-red} |

- Mostriamo che $(r_5, \oplus)$ è un gruppo; devono valere le proprietà:

    - $\oplus$ è interna: infatti avremo sempre che la somma di due termini qualunque è ancora un termine della tabella.
    > **Esempio:** $4 \oplus 2 = (6)_5 = 1$

    - $\oplus$ è associativa: infatti, chiamati $a_5$, $b_5$ e $c_5$ tre elementi di $r_5$, abbiamo:
    $$
    (a_5 \oplus b_5) \oplus c_5 = a_5 \oplus (b_5 \oplus c_5)
    $$
    > **Esempio pratico:**
    > $(3 \oplus 2) \oplus 4 = (5)_5 \oplus 4 = 0 \oplus 4 = 4$
    > ma vale anche:
    > $3 \oplus (2 \oplus 4) = 3 \oplus (6)_5 = 3 \oplus 1 = 4$

    - $0$ è l'elemento neutro: infatti sommando qualunque elemento con $0$ otteniamo sempre lo stesso elemento:
    $0 \oplus 1 = 1 \oplus 0 = 1$
    $0 \oplus 2 = 2 \oplus 0 = 2$
    $0 \oplus 3 = 3 \oplus 0 = 3$
    $0 \oplus 4 = 4 \oplus 0 = 4$

    - Ogni elemento di $r_5$ possiede in $\oplus$ l'elemento simmetrico: infatti:
    $0 \oplus 0 = 0$
    $1 \oplus 4 = 4 \oplus 1 = (5)_5 = 0$
    $2 \oplus 3 = 3 \oplus 2 = (5)_5 = 0$

Quindi $(r_5, \oplus)$ è un gruppo; la commutatività segue dal fatto che la tabella per l'addizione è simmetrica rispetto alla diagonale principale.

- Mostriamo che $(r_5, \otimes)$ è un semigruppo:

    - Basta mostrare che $\otimes$ è associativa, cioè chiamati $a_5$, $b_5$ e $c_5$ tre elementi di $r_5$, abbiamo sempre:
    $$
    (a_5 \otimes b_5) \otimes c_5 = a_5 \otimes (b_5 \otimes c_5)
    $$
    Questo discende dalla moltiplicazione fra numeri naturali, ma vediamone un esempio pratico:
    > **Esempio:**
    > $(3 \otimes 2) \otimes 4 = (6)_5 \otimes 4 = 1 \otimes 4 = 4$
    > $3 \otimes (2 \otimes 4) = 3 \otimes (8)_5 = 3 \otimes 3 = (9)_5 = 4$

    Per vederlo meglio, ecco la tabella di Cayley per la moltiplicazione:

| $\otimes$ | $0$ | $1$ | $2$ | $3$ | $4$ |
| :---: | :---: | :---: | :---: | :---: | :---: |
| $0$ | [$0$]{.text-red} | [$0$]{.text-red} | [$0$]{.text-red} | [$0$]{.text-red} | [$0$]{.text-red} |
| $1$ | [$0$]{.text-red} | [$1$]{.text-red} | [$2$]{.text-red} | [$3$]{.text-red} | [$4$]{.text-red} |
| $2$ | [$0$]{.text-red} | [$2$]{.text-red} | [$4$]{.text-red} | [$1$]{.text-red} | [$3$]{.text-red} |
| $3$ | [$0$]{.text-red} | [$3$]{.text-red} | [$1$]{.text-red} | [$4$]{.text-red} | [$2$]{.text-red} |
| $4$ | [$0$]{.text-red} | [$4$]{.text-red} | [$3$]{.text-red} | [$2$]{.text-red} | [$1$]{.text-red} |

- Mostriamo infine che la seconda operazione è distributiva rispetto alla prima, cioè dati $a_5$, $b_5$ e $c_5$ appartenenti a $r_5$ avremo sempre:
$$
a_5 \otimes (b_5 \oplus c_5) = a_5 \otimes b_5 \oplus a_5 \otimes c_5
$$
$$
(b_5 \oplus c_5) \otimes a_5 = b_5 \otimes a_5 \oplus c_5 \otimes a_5
$$

> **Esempio:**
> Mostro che se eseguo l'operazione oppure se applico la proprietà distributiva ottengo lo stesso risultato (prova tu a fare un esempio anche sulla seconda per esercizio).
>
> $4 \otimes (1 \oplus 3) =$
> Se eseguo la somma ottengo:
> $4 \otimes (1 \oplus 3) = 4 \otimes 4 = (16)_5 = 1$
> Se prima applico la proprietà distributiva e poi faccio la somma ottengo:
> $4 \otimes (1 \oplus 3) = 4 \otimes 1 \oplus 4 \otimes 3 = 4 \oplus (12)_5 = 4 \oplus 2 = (6)_5 = 1$

Quindi la struttura $(r_5, \oplus, \otimes)$ è un anello.

Inoltre siccome la moltiplicazione in $r_5$ è commutativa avremo che l'anello è **commutativo**.

Poiché $1$ elemento neutro della moltiplicazione in $r_5$ è unico, l'anello è **unitario**.