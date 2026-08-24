# Insieme dei resti modulo 2 (o relazione di congruenza modulo 2)

Questa è importantissima: è alla base del sistema di numerazione a base $2$, cioè del sistema di numerazione su cui si basa l'Informatica.
Inoltre puoi trovarne strutture isomorfe in varie discipline (mettere vari link).

> **Nota:** Per vedere i calcoli ferma il mouse sul numero della tabella che ti interessa.

Vediamo prima il gruppo additivo $(r_2, \oplus)$

| $\oplus$ | $0$ | $1$ |
| :---: | :---: | :---: |
| $0$ | $\textcolor{red}{0}$ | $\textcolor{red}{1}$ |
| $1$ | $\textcolor{red}{1}$ | $\textcolor{red}{0}$ |

Dalla tabella puoi vedere che:
- $0$ è l'elemento neutro (sommandolo per gli altri non li cambia).
- Per trovare l'inverso basta che guardi quando i risultati sono $0$: gli $0$ sono all'incrocio di elementi inversi, quindi:
    - $0$ è l'inverso di se stesso.
    - $1$ è l'inverso di se stesso.

---

Vediamo quindi la tabella di Cayley per $(r_2, \otimes)$

| $\otimes$ | $0$ | $1$ |
| :---: | :---: | :---: |
| $0$ | $\textcolor{red}{0}$ | $\textcolor{red}{0}$ |
| $1$ | $\textcolor{red}{0}$ | $\textcolor{red}{1}$ |

Dalla tabella puoi vedere che:
- $0$ è l'elemento assorbente: moltiplicandolo per gli altri li fa diventare $0$ (li assorbe).
- Per poter avere la struttura di gruppo dovresti togliere lo zero, $(r_2 \setminus \{0\}, \otimes)$, perché lo zero non ha elemento inverso, ma ottieni il gruppo banale (vedi il $4^\circ$ esempio e l'esercizio della pagina).
- $1$ è l'elemento neutro (moltiplicandolo per gli altri non li cambia).
- Per trovare l'inverso basta che guardi quando i risultati sono $1$: gli $1$ sono all'incrocio di elementi inversi, quindi:
    - $0$ non ha inverso.
    - $1$ è l'inverso di se stesso.