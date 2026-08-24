# [esercizio]{.text-red}

Individuare la struttura per l'insieme $\mathbb{Q}$ dei numeri razionali con le operazioni di addizione ($+$) e moltiplicazione ($\cdot$)

***

> È l'esempio più semplice perché è quello da cui abbiamo ricavato la struttura di campo, ma questo esempio ci servirà soprattutto per mostrare come bisogna procedere per mostrare la struttura di campo su un qualunque altro insieme.

***

> **Dimostrazione:**
>
> dovremo mostrare per il corpo:
> - la presenza di un gruppo commutativo con la somma
> - la presenza di un gruppo con il prodotto escludendo l'elemento neutro per l'addizione (lo zero)
> - il fatto che la seconda operazione è distributiva rispetto alla prima
> - per il campo aggiungeremo la dimostrazione della commutatività della seconda operazione

Cominciamo dal primo punto

- Mostriamo che $(\mathbb{Q}, +)$ è un gruppo; devono valere le proprietà:
    - $+$ è interna infatti chiamati $a$ e $b$ due elementi di $\mathbb{Q}$ allora anche $c = a+b$ appartiene a $\mathbb{Q}$.
    - $+$ è associativa, infatti chiamati $a$, $b$ e $c$ tre elementi di $\mathbb{Q}$ abbiamo:
      $$
      (a + b) + c = a + (b + c)
      $$
    - $+$ possiede l'elemento neutro: infatti esiste l'elemento $0$ tale che per ogni elemento $a$ di $\mathbb{Q}$ abbiamo:
      $$
      a + 0 = 0 + a = a
      $$
    - ogni elemento $a$ di $\mathbb{Q}$ possiede in $+$ l'elemento simmetrico $-a$ tale che:
      $$
      a + (-a) = (-a) + a = 0
      $$
      Infatti dato un numero basta considerare lo stesso numero con segno contrario.

Quindi $(\mathbb{Q}, +)$ è un gruppo; inoltre tale gruppo è commutativo perché presi comunque due elementi $a$ e $b$ di $\mathbb{Q}$ vale sempre:
$$
a + b = b + a
$$

- Mostriamo che $(\mathbb{Q} \setminus \{0\}, \cdot)$ è un gruppo; devono valere le proprietà:
    - $\cdot$ è interna infatti chiamati $a$ e $b$ due elementi di $\mathbb{Q}$ allora anche il prodotto $c = a \cdot b$ appartiene a $\mathbb{Q}$.
    - $\cdot$ è associativa, infatti chiamati $a$, $b$ e $c$ tre elementi di $\mathbb{Q}$ abbiamo:
      $$
      (a \cdot b) \cdot c = a \cdot (b \cdot c)
      $$
    - $\cdot$ possiede l'elemento neutro: infatti esiste l'elemento $1$ tale che per ogni elemento $a$ di $\mathbb{Q}$ abbiamo:
      $$
      a \cdot 1 = 1 \cdot a = a
      $$
    - ogni elemento $a$ di $\mathbb{Q}$ possiede in $\cdot$ l'elemento simmetrico $1/a$ tale che:
      $$
      a \cdot (1/a) = (1/a) \cdot a = 1
      $$
      Infatti dato un numero basta considerarne l'inverso.

Quindi $(\mathbb{Q}, \cdot)$ è un gruppo.

- La seconda operazione è distributiva rispetto alla prima, cioè dati $a$, $b$ e $c$ appartenenti a $\mathbb{Q}$ avremo sempre:
  $$
  a \cdot (b + c) = a \cdot b + a \cdot c
  $$
  $$
  (b + c) \cdot a = b \cdot a + c \cdot a
  $$

- Mostriamo infine che la seconda operazione è commutativa, infatti dati comunque due elementi $a$ e $b$ appartenenti a $\mathbb{Q}$ avremo sempre:
  $$
  a \cdot b = b \cdot a
  $$

Quindi la struttura $(\mathbb{Q}, +, \cdot)$ è un campo (qualche testo lo chiama anche **dominio d'integrità**).

***