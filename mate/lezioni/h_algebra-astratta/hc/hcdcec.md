# Insieme dei resti modulo 3 (o relazione di congruenza modulo 3)

> Per vedere i calcoli ferma il mouse sul numero della tabella che ti interessa

Vediamo prima il gruppo additivo $(r_3, \oplus)$

| $\oplus$ | $0$ | $1$ | $2$ |
| :---: | :---: | :---: | :---: |
| $0$ | $\textcolor{red}{0}$ | $\textcolor{red}{1}$ | $\textcolor{red}{2}$ |
| $1$ | $\textcolor{red}{1}$ | $\textcolor{red}{2}$ | $\textcolor{red}{0}$ |
| $2$ | $\textcolor{red}{2}$ | $\textcolor{red}{0}$ | $\textcolor{red}{1}$ |

Dalla tabella puoi vedere che:
- $0$ è l'elemento neutro (sommandolo per gli altri non li cambia).
- Per trovare l'inverso basta che guardi quando i risultati sono $0$: gli $0$ sono all'incrocio di elementi inversi, quindi:
    - $0$ è l'opposto di sé stesso.
    - $1$ è l'opposto di $2$ e viceversa.

***

Vediamo quindi la tabella di Cayley per $(r_3, \otimes)$

| $\otimes$ | $0$ | $1$ | $2$ |
| :---: | :---: | :---: | :---: |
| $0$ | $\textcolor{red}{0}$ | $\textcolor{red}{0}$ | $\textcolor{red}{0}$ |
| $1$ | $\textcolor{red}{0}$ | $\textcolor{red}{1}$ | $\textcolor{red}{2}$ |
| $2$ | $\textcolor{red}{0}$ | $\textcolor{red}{2}$ | $\textcolor{red}{1}$ |

Dalla tabella puoi vedere che:
- $0$ è l'elemento assorbente: moltiplicandolo per gli altri li fa diventare $0$ (li assorbe).
- Per poter avere la struttura di gruppo dovresti togliere lo zero, $(r_3 - \{0\}, \otimes)$, perché lo zero non ha elemento inverso.
- $1$ è l'elemento neutro (moltiplicandolo per gli altri non li cambia).
- Per trovare l'inverso basta che guardi quando i risultati sono $1$: gli $1$ sono all'incrocio di elementi inversi, quindi:
    - $0$ non ha inverso.
    - $1$ è l'inverso di sé stesso.
    - $2$ è l'inverso di sé stesso.