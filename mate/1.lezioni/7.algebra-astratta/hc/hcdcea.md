# Insieme dei resti modulo 5 (o relazione di congruenza modulo 5)

Per vedere i calcoli ferma il mouse sul numero della tabella che ti interessa

Vediamo prima il gruppo additivo $(r_5, \oplus)$

| $\oplus$ | $0$ | $1$ | $2$ | $3$ | $4$ |
| :---: | :---: | :---: | :---: | :---: | :---: |
| $0$ | $0$ | $1$ | $2$ | $3$ | $4$ |
| $1$ | $1$ | $2$ | $3$ | $4$ | $0$ |
| $2$ | $2$ | $3$ | $4$ | $0$ | $1$ |
| $3$ | $3$ | $4$ | $0$ | $1$ | $2$ |
| $4$ | $4$ | $0$ | $1$ | $2$ | $3$ |

Dalla tabella puoi vedere che
- $0$ è l'elemento neutro (sommandolo per gli altri non li cambia)
- Per trovare l'inverso basta che guardi quando i risultati sono $0$: gli $0$ sono all'incrocio di elementi inversi, quindi:
  - $2$ è l'opposto di $3$ e viceversa
  - $1$ è l'opposto di $4$ e viceversa
  - $0$ è l'opposto di sé stesso

> **Nota:** quando abbiamo un gruppo additivo l'elemento inverso si chiama anche opposto

***

Vediamo quindi la tabella di Cayley per $(r_5, \otimes)$

| $\otimes$ | $0$ | $1$ | $2$ | $3$ | $4$ |
| :---: | :---: | :---: | :---: | :---: | :---: |
| $0$ | $0$ | $0$ | $0$ | $0$ | $0$ |
| $1$ | $0$ | $1$ | $2$ | $3$ | $4$ |
| $2$ | $0$ | $2$ | $4$ | $1$ | $3$ |
| $3$ | $0$ | $3$ | $1$ | $4$ | $2$ |
| $4$ | $0$ | $4$ | $3$ | $2$ | $1$ |

Dalla tabella puoi vedere che
- $0$ è l'elemento assorbente (moltiplicandolo per gli altri li fa diventare $0$ (li assorbe); per poter avere la struttura di gruppo dovresti togliere lo zero, $(r_5 - \{0\}, \otimes)$, perché lo zero non ha elemento inverso

> **Nota:** Questo ragionamento sarà possibile farlo quando l'ordine del gruppo è un numero primo, invece per basi quali $4, 6, 8, 9, \dots$ vedremo che nella tabella moltiplicativa compariranno dei divisori dello zero, di conseguenza non potremo più parlare di gruppo.

- $1$ è l'elemento neutro (moltiplicandolo per gli altri non li cambia)
- Per trovare l'inverso basta che guardi quando i risultati sono $1$: gli $1$ sono all'incrocio di elementi inversi, quindi:
  - $2$ è l'inverso di $3$ e viceversa
  - $1$ è l'inverso di sé stesso
  - $4$ è l'inverso di sé stesso

> **Nota:** Tabelle di questo tipo ci suggeriscono una nuova struttura: l'anello