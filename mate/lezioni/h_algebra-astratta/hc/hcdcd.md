# Rappresentazione di un gruppo finito mediante la tabella di Cayley

È possibile rappresentare i gruppi finiti (gruppi con un numero finito di elementi) mediante dei particolari diagrammi chiamati diagrammi di Cayley; vediamoli su un paio di gruppi.

***

Considero l'insieme $A$ che ha come elementi:
Primo elemento = insieme dei numeri pari = $p$
Secondo elemento = insieme di numeri dispari = $d$
$\textcolor{red}{A = \{ p, d \}}$

Considero l'operazione di addizione $\oplus$.
Allora $\textcolor{red}{\{ A, \oplus \}}$ è un gruppo.

Posso rappresentarlo come:

| $\oplus$ | $p$ | $d$ |
| :---: | :---: | :---: |
| $p$ | $\textcolor{red}{p}$ | $\textcolor{red}{d}$ |
| $d$ | $\textcolor{red}{d}$ | $\textcolor{red}{p}$ |

È come una tavola pitagorica: i dati sono quelli neri; quelli rossi li trovo come incrocio, ad esempio:
- $\textcolor{red}{p \oplus p = p}$ : pari più pari uguale pari
- $\textcolor{red}{p \oplus d = d}$ : pari più dispari uguale dispari
- $\textcolor{red}{d \oplus p = d}$ : dispari più pari uguale dispari
- $\textcolor{red}{d \oplus d = p}$ : dispari più dispari uguale pari

Se non hai capito bene ferma il mouse sulla casella che ti interessa.

> Osservando la tabella di Cayley vedi la struttura di gruppo: nel nostro caso $p$ è l'elemento neutro. L'elemento inverso lo trovi guardando le caselle che hanno come risultato l'elemento neutro: nel nostro caso l'inverso di $d$ è $d$.

***

Altro esempio: (devi saper usare i numeri immaginari)
Considero l'insieme $\textcolor{red}{A = \{ i, -1, -i, 1 \}}$ (sono le potenze di $i$) con l'operazione di moltiplicazione $\otimes$.
La struttura $\textcolor{red}{\{ A, \otimes \}}$ è un gruppo.

Posso rappresentarlo come:

| $\otimes$ | $1$ | $i$ | $-1$ | $-i$ |
| :---: | :---: | :---: | :---: | :---: |
| $1$ | $\textcolor{red}{1}$ | $\textcolor{red}{i}$ | $\textcolor{red}{-1}$ | $\textcolor{red}{-i}$ |
| $i$ | $\textcolor{red}{i}$ | $\textcolor{red}{-1}$ | $\textcolor{red}{-i}$ | $\textcolor{red}{1}$ |
| $-1$ | $\textcolor{red}{-1}$ | $\textcolor{red}{-i}$ | $\textcolor{red}{1}$ | $\textcolor{red}{i}$ |
| $-i$ | $\textcolor{red}{-i}$ | $\textcolor{red}{1}$ | $\textcolor{red}{i}$ | $\textcolor{red}{-1}$ |

Per i calcoli ferma il mouse sulla casella con il risultato (in rosso) che ti interessa.

Dalla tabella puoi vedere che $1$ è l'elemento neutro (moltiplicandolo per gli altri non li cambia).
Per trovare l'inverso basta che guardi quando i risultati sono $1$: gli $1$ sono all'incrocio di elementi inversi, quindi:
- $1$ è l'opposto di se stesso
- $-1$ è l'opposto di se stesso
- $i$ è l'opposto di $-i$

***

> Se il gruppo è commutativo allora la tabella di Cayley è simmetrica rispetto alla diagonale principale (questo aiuta molto nel costruirla).

***

Vediamone un altro:
Consideriamo tutte le possibili rotazioni attorno al punto di incontro delle diagonali da far eseguire ad un quadrato in modo che i vertici siano sempre coincidenti.
L'operazione di rotazione $\circledast$ avrà solamente 4 valori (essendo ciclica per $360^\circ$, cioè dopo $360^\circ$ si ripete):

$$
a_1 = 0^\circ, \quad a_2 = 90^\circ, \quad a_3 = 180^\circ, \quad a_4 = 270^\circ
$$

La tabella di Cayley sarà quindi:

| $\circledast$ | $a_1$ | $a_2$ | $a_3$ | $a_4$ |
| :---: | :---: | :---: | :---: | :---: |
| $a_1$ | $\textcolor{red}{a_1}$ | $\textcolor{red}{a_2}$ | $\textcolor{red}{a_3}$ | $\textcolor{red}{a_4}$ |
| $a_2$ | $\textcolor{red}{a_2}$ | $\textcolor{red}{a_3}$ | $\textcolor{red}{a_4}$ | $\textcolor{red}{a_1}$ |
| $a_3$ | $\textcolor{red}{a_3}$ | $\textcolor{red}{a_4}$ | $\textcolor{red}{a_1}$ | $\textcolor{red}{a_2}$ |
| $a_4$ | $\textcolor{red}{a_4}$ | $\textcolor{red}{a_1}$ | $\textcolor{red}{a_2}$ | $\textcolor{red}{a_3}$ |

Da notare che ponendo:

$$
a_1 = 1, \quad a_2 = i, \quad a_3 = -1, \quad a_4 = -i
$$

i due gruppi precedenti coincidono: infatti i numeri complessi e le rotazioni nel piano sono diversi aspetti della stessa realtà.