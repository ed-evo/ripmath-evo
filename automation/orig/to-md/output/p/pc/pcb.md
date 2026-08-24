# [Cos'è una struttura algebrica]{.text-red}

Vedi anche i concetti espressi in [algebra astratta](../../h/hc/hcb.html)

Vediamo prima, con qualche esempio, di chiarire il concetto di struttura algebrica:

Primo esempio: considero due insiemi: l'insieme dei numeri pari e l'insieme dei numeri dispari.

Se applico l'operazione di somma normale fra numeri naturali avrò:
- $pari + pari = pari$
- $pari + dispari = dispari$
- $dispari + pari = dispari$
- $dispari + dispari = pari$

Se applico la normale operazione di prodotto fra numeri naturali avrò:
- $pari \times pari = pari$
- $pari \times dispari = pari$
- $dispari \times pari = pari$
- $dispari \times dispari = dispari$

Secondo esempio: considero l'insieme dei resti [modulo 2](../../h/hc/hcdced.html) (relazione di congruenza modulo 2).

Se applico l'operazione di somma avrò:
- $0 \oplus 0 = 0$
- $0 \oplus 1 = 1$
- $1 \oplus 0 = 1$
- $1 \oplus 1 = 0$

Se applico l'operazione di prodotto avrò:
- $0 \otimes 0 = 0$
- $0 \otimes 1 = 0$
- $1 \otimes 0 = 0$
- $1 \otimes 1 = 1$

Mi sembra chiaro che esiste qualcosa che lega gli esempi considerati: i due esempi hanno "strutture" simili, cioè le operazioni si comportano in modo similare anche se gli oggetti su cui operano sono diversi: vediamo altri due esempi.

Esempio 3
Considero i numeri positivi e negativi, con l'operazione di prodotto: avrò:
- $positivo \otimes positivo = positivo$
- $positivo \otimes negativo = negativo$
- $negativo \otimes positivo = negativo$
- $negativo \otimes negativo = positivo$

Esempio 4
Suddividiamo gli esseri umani in amici e nemici. Considero l'operazione "del":
- l'amico dell'amico è un amico
- l'amico del nemico è un nemico
- il nemico dell'amico è un nemico
- il nemico del nemico è un amico

Anche qui qualcosa lega gli esempi considerati, inoltre il nostro concetto di "operazione" (chiamiamola legge di composizione interna) si è fatto più ampio.

Si definisce **struttura algebrica** un insieme non vuoto $A$ su cui siano definite una o più leggi di composizione interna.

> **Cioè:** struttura algebrica = insieme con operazione ($i$), poi il tipo di struttura dipenderà dalle proprietà delle operazioni.

Indicheremo una struttura algebrica nei seguenti modi:

$$
\textcolor{red}{(A ; \oplus, \otimes)}
$$
Struttura con due leggi di composizione

$$
\textcolor{red}{(A ; \ast)}
$$
Struttura con una legge di composizione

Concludendo: considerando un insieme di enti è importante vedere quali operazioni sono possibili e le varie proprietà che hanno queste operazioni in tali insiemi: in tal modo potremo individuare delle strutture che ci permetteranno di classificare gli insiemi a seconda delle proprietà comuni che hanno.

Nelle prossime pagine, dopo un breve approfondimento sulle operazioni, vedremo una struttura con un insieme composto dai soli elementi $0$ ed $1$ (algebra binaria di Boole).