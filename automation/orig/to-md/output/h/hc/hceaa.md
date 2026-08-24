# [esercizio]{.text-red}

Mostrare la presenza della struttura ad anello per l'insieme $\mathbb{Z}$ dei numeri interi con le operazioni di addizione ($+$) e moltiplicazione ($\cdot$)

> È l'esempio più semplice perché è quello da cui abbiamo ricavato la struttura di anello, ma questo esempio ci servirà soprattutto per mostrare come bisogna procedere per mostrare la struttura ad anello su un qualunque altro insieme

Dimostrazione:
dovremo mostrare:
- la presenza di un gruppo commutativo con la prima operazione
- la presenza di un semigruppo con la seconda operazione
- il fatto che la seconda operazione è distributiva rispetto alla prima

Cominciamo dal primo punto

- Mostriamo che $(\mathbb{Z}, +)$ è un gruppo; devono valere le proprietà:
    - $+$ è interna: infatti chiamati $a$ e $b$ due elementi di $\mathbb{Z}$, allora anche $c = a + b$ appartiene a $\mathbb{Z}$.
    - $+$ è associativa: infatti chiamati $a$, $b$ e $c$ tre elementi di $\mathbb{Z}$, abbiamo:
    $$
    (a + b) + c = a + (b + c)
    $$
    infatti presi 3 numeri abbiamo sempre:
    $$
    2 + (3 + 4) = (2 + 3) + 4
    $$
    $$
    2 + 7 = 5 + 4
    $$
    $$
    9 = 9
    $$
    cioè il primo membro è uguale al secondo.
    - $+$ possiede l'elemento neutro: infatti esiste l'elemento $0$ tale che per ogni elemento $a$ di $\mathbb{Z}$ abbiamo:
    $$
    a + 0 = 0 + a = a
    $$
    cioè per qualunque numero, ad esempio $3$, vale sempre:
    $$
    3 + 0 = 0 + 3 = 3
    $$
    - ogni elemento $a$ di $\mathbb{Z}$ possiede in $+$ l'elemento simmetrico $a'$ tale che:
    $$
    a + a' = a' + a = 0
    $$
    Infatti dato un numero basta considerare lo stesso numero con segno contrario; es:
    $$
    3 + (-3) = (-3) + 3 = 0
    $$

Quindi $(\mathbb{Z}, +)$ è un gruppo; inoltre il gruppo è commutativo perché per ogni elemento $a$ e $b$ appartenenti a $\mathbb{Z}$ avremo che vale:
$$
a + b = b + a
$$

- Mostriamo che $(\mathbb{Z}, \cdot)$ è un semigruppo
    - Basta mostrare che $\cdot$ è associativa, cioè chiamati $a$, $b$ e $c$ tre elementi di $\mathbb{Z}$ abbiamo:
    $$
    (a \cdot b) \cdot c = a \cdot (b \cdot c)
    $$
    infatti presi 3 numeri abbiamo sempre:
    $$
    2 \cdot (3 \cdot 4) = (2 \cdot 3) \cdot 4
    $$
    $$
    2 \cdot 12 = 6 \cdot 4
    $$
    $$
    24 = 24
    $$

Quindi $(\mathbb{Z}, \cdot)$ è un semigruppo.

- Mostriamo infine che la seconda operazione è distributiva rispetto alla prima, cioè dati $a$, $b$ e $c$ appartenenti a $\mathbb{Z}$ avremo sempre:
$$
a \cdot (b + c) = a \cdot b + a \cdot c
$$
$$
(b + c) \cdot a = b \cdot a + c \cdot a
$$

infatti prendendo 3 numeri qualunque avremo:
$$
2 \cdot (3 + 4) = 2 \cdot 3 + 2 \cdot 4
$$
$$
2 \cdot 7 = 6 + 8
$$
$$
14 = 14
$$

$$
(3 + 4) \cdot 2 = 3 \cdot 2 + 4 \cdot 2
$$
$$
7 \cdot 2 = 6 + 8
$$
$$
14 = 14
$$

Quindi la struttura $(\mathbb{Z}, +, \cdot)$ è un anello.

Siccome la moltiplicazione in $\mathbb{Z}$ è commutativa avremo che l'anello è commutativo.

Poiché la moltiplicazione in $\mathbb{Z}$ ha come elemento neutro l'elemento $1$, l'anello è unitario.