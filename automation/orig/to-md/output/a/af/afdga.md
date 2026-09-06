# <span class="text-red-600">Equazioni reciproche di terzo grado</span>

$\textcolor{blue}{ax^3 + bx^2 + bx + a = 0}$ prima specie

$\textcolor{blue}{ax^3 + bx^2 - bx - a = 0}$ seconda specie

Come prima cosa è da dire che se l'equazione reciproca è di grado dispari, siccome ogni soluzione deve avere la sua reciproca e, per il [teorema fondamentale dell'algebra](afda.html) le soluzioni sono in numero dispari allora (intuitivamente) tra le soluzioni dovrà sempre esservi $1$ (o $-1$) come numero reciproco di sé stesso.

> in particolare per le equazioni reciproche di prima specie $-1$
> per le equazioni reciproche di seconda specie $+1$

Pertanto potremo sempre usare Ruffini con il divisore:
- $(x+1)$ per le equazioni di prima specie [dimostrazione](afdgac.html)
- $(x-1)$ per le equazioni di seconda specie [dimostrazione](afdgad.html)

Vediamo un esempio per tipo:

## Equazione reciproca di prima specie

$\textcolor{blue}{3x^3 + 13x^2 + 13x + 3 = 0}$

È reciproca di prima specie perché i coefficienti equidistanti dal centro dell'equazione sono uguali e di stesso segno: $3$ con $3$ e $13$ con $13$.

Posso scomporre per $(x+1)$: infatti

$$
\begin{aligned}
P(-1) &= 3(-1)^3 + 13(-1)^2 + 13(-1) + 3 = \\
&= 3(-1) + 13(1) + 13(-1) + 3 = \\
&= -3 + 13 - 13 + 3 = 0
\end{aligned}
$$

Quindi faccio la divisione di Ruffini e ottengo:

$\textcolor{blue}{3x^3 + 13x^2 + 13x + 3 = (x + 1)(3x^2 + 10x + 3)}$

Adesso pongo uguali a zero i fattori ed ottengo:

- primo fattore: $\textcolor{blue}{x + 1 = 0}$ cioè $\textcolor{blue}{x = -1}$
- secondo fattore: $\textcolor{blue}{3x^2 + 10x + 3 = 0}$ che mi dà come soluzioni $\textcolor{blue}{x = -3}$ e $\textcolor{blue}{x = -1/3}$ [calcoli](afdgaa.html)

Ottengo quindi le tre soluzioni (le ordino):

$$
x_1 = -3, \quad x_2 = -1, \quad x_3 = -1/3
$$

## Equazione reciproca di seconda specie

$\textcolor{blue}{2x^3 - 7x^2 + 7x - 2 = 0}$

È reciproca di seconda specie perché i coefficienti equidistanti dal centro dell'equazione sono uguali e di segno contrario: $2$ con $-2$ e $-7$ con $7$.

Posso scomporre per $(x-1)$: infatti

$$
P(1) = 2(1)^3 - 7(1)^2 + 7(1) - 2 = 2 - 7 + 7 - 2 = 0
$$

Quindi faccio la divisione di Ruffini e ottengo:

$\textcolor{blue}{2x^3 - 7x^2 + 7x - 2 = (x - 1)(2x^2 - 5x + 2)}$

Adesso pongo uguali a zero i fattori ed ottengo:

- primo fattore: $\textcolor{blue}{x - 1 = 0}$ cioè $\textcolor{blue}{x = 1}$
- secondo fattore: $\textcolor{blue}{2x^2 - 5x + 2 = 0}$ che mi dà come soluzioni $\textcolor{blue}{x = 2}$ e $\textcolor{blue}{x = 1/2}$ [calcoli](afdgab.html)

Ottengo quindi le tre soluzioni (le ordino):

$$
x_1 = 1/2, \quad x_2 = 1, \quad x_3 = 2
$$