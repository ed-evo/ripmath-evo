# [Esempi di strutture di gruppo]{.text-red}

1) Consideriamo l'insieme $\mathbb{Z}$ dei numeri interi con l'operazione di addizione: allora la struttura $(\mathbb{Z}; +)$ è una struttura di gruppo; infatti:

- La somma in $\mathbb{Z}$ è un'operazione interna: il risultato della somma appartiene sempre a $\mathbb{Z}$
- La somma in $\mathbb{Z}$ è associativa, infatti presi comunque tre numeri interi $a$, $b$ e $c$, vale sempre la proprietà:
  $$
  \textcolor{red}{(a + b) + c = a + (b + c)}
  $$
- Lo zero $0$ è l'elemento neutro per la somma in $\mathbb{Z}$, infatti preso comunque un numero intero $a$ vale sempre la proprietà:
  $$
  \textcolor{red}{a + 0 = 0 + a = a}
  $$
- L'elemento simmetrico rispetto alla somma in $\mathbb{Z}$ è l'elemento che ha il segno cambiato (opposto), infatti preso comunque un numero intero $a$ vale sempre la proprietà:
  $$
  \textcolor{red}{a + (-a) = (-a) + a = 0}
  $$

***

2) Consideriamo l'insieme $\mathbb{Q}$ dei numeri razionali con l'operazione di moltiplicazione $\cdot$: allora la struttura $(\mathbb{Q}; \cdot)$ non è una struttura di gruppo, infatti:
Sono verificate la prima e la seconda proprietà ma esiste un elemento, lo zero $0$, che non possiede l'elemento inverso e quindi non è verificata la terza proprietà dei gruppi.

> Mentre per mostrare che una proprietà è vera devi dimostrarla per tutti gli elementi su cui agisce, per dimostrare che una proprietà è falsa è sufficiente far vedere che esiste un elemento per cui tale proprietà non è valida.

***

3) Consideriamo invece l'insieme $\mathbb{Q} - \{0\}$ dei numeri razionali senza lo zero con l'operazione di moltiplicazione: allora la struttura $(\mathbb{Q} - \{0\}; \cdot)$ è una struttura di gruppo; infatti:

- Il prodotto in $\mathbb{Q} - \{0\}$ è un'operazione interna: il risultato del prodotto fra due numeri in $\mathbb{Q} - \{0\}$ appartiene sempre a $\mathbb{Q} - \{0\}$
- Il prodotto in $\mathbb{Q} - \{0\}$ è associativo, infatti presi comunque tre numeri razionali $a$, $b$ e $c$, vale sempre la proprietà:
  $$
  \textcolor{red}{(a \cdot b) \cdot c = a \cdot (b \cdot c)}
  $$
- L'uno $1$ è l'elemento neutro per il prodotto in $\mathbb{Q} - \{0\}$, infatti preso comunque un numero razionale $a$ vale sempre la proprietà:
  $$
  \textcolor{red}{a \cdot 1 = 1 \cdot a = a}
  $$
- L'elemento simmetrico rispetto al prodotto in $\mathbb{Q} - \{0\}$ è l'elemento del tipo $1/a$ (inverso), infatti preso comunque un numero razionale $a$ vale sempre la proprietà:
  $$
  \textcolor{red}{a \cdot \frac{1}{a} = \frac{1}{a} \cdot a = 1}
  $$
  e, non essendoci lo zero, ogni elemento ha un suo inverso.

***

4) Vediamo un gruppo parecchio "strano"
Prendiamo l'insieme composto dal solo numero uno $\{1\}$ con l'operazione di moltiplicazione $\cdot$
$(\{1\}, \cdot)$ è un gruppo, infatti:

- L'operazione di prodotto è interna: il risultato è sempre $1$
- Il prodotto in $\{1\}$ è associativo, infatti:
  $$
  \textcolor{red}{(1 \cdot 1) \cdot 1 = 1 \cdot (1 \cdot 1)}
  $$
- L'uno $1$ è l'elemento neutro per il prodotto in $\{1\}$, infatti:
  $$
  \textcolor{red}{1 \cdot 1 = 1 \cdot 1 = 1}
  $$
- L'elemento simmetrico rispetto al prodotto in $\{1\}$ è lo stesso $1$, infatti:
  $$
  \textcolor{red}{1 \cdot 1 = 1 \cdot 1 = 1}
  $$
  essendo l'$1$ finale l'elemento neutro.

***

### Esercizio
Prova a dimostrare che l'insieme composto dal solo numero zero $\{0\}$ con l'operazione di addizione $+$
$(\{0\}, +)$ è un gruppo.
Questo ed il gruppo precedente vengono anche chiamati **gruppo banale**.