# Due equazioni equivalenti

Prima facciamo un semplice esempio e poi raccogliamo i risultati.

Risolvere il sistema:
$$
\begin{cases}
x + y + z = 6 \\
x + y + z = 6 \\
x + y - z = 0
\end{cases}
$$

## Metodo di sostituzione

In questo caso ho che la prima e la seconda equazione sono equivalenti (anzi sono addirittura uguali), e se andassi a sostituire normalmente otterrei alla fine $0 = 0$; quindi, per poter risolvere devo eliminare una delle due equazioni equivalenti ed il mio sistema si riduce a:

$$
\begin{cases}
x + y + z = 6 \\
x + y - z = 0
\end{cases}
$$

Risolvo con il metodo di sostituzione: ricavo la $y$ dall'ultima equazione e vado a sostituire nella prima:

$$
\begin{cases}
x + (z - x) + z = 6 \\
y = z - x
\end{cases}
$$

sommo:
$$
\begin{cases}
2z = 6 \\
y = z - x
\end{cases}
$$

divido per $2$:
$$
\begin{cases}
z = 3 \\
y = z - x
\end{cases}
$$

sostituisco a $z$ il valore $3$ ed ottengo il risultato:
$$
\begin{cases}
z = 3 \\
y = 3 - x
\end{cases}
$$

Ottengo quindi $\infty$ soluzioni perché per ogni valore che posso dare ad $x$ ($1, 2, 3, \dots, 1/2, 1/3, \dots$) ottengo un valore per $y$, e quindi il mio sistema ammette infinite soluzioni che posso anche indicare come:

$$
\begin{cases}
x = k \\
y = 3 - k \\
z = 3
\end{cases}
$$
[con $k$ numero reale]{.text-blue}

## Metodo di Cramer

Considero le matrici incompleta e completa:

[Matrice incompleta]{.text-blue}
$$
\begin{pmatrix}
1 & 1 & 1 \\
1 & 1 & 1 \\
1 & 1 & -1
\end{pmatrix}
$$

[Matrice completa]{.text-blue}
$$
\begin{pmatrix}
1 & 1 & 1 & 6 \\
1 & 1 & 1 & 6 \\
1 & 1 & -1 & 0
\end{pmatrix}
$$

Vediamo che ci sono due righe uguali: se procedessi normalmente otterrei che i determinanti $3 \times 3$ sarebbero tutti nulli (due righe uguali) ed otterrei come soluzioni $\frac{0}{0}$ (valore indeterminato); quindi per procedere a trovare le soluzioni devo eliminare una equazione delle due uguali ed il mio sistema diventa:

$$
\begin{cases}
x + y + z = 6 \\
x + y - z = 0
\end{cases}
$$

Devo spostare dopo l'uguale una incognita, trattandola come un numero dato, per avere tante incognite quante equazioni. Sposto dopo l'uguale la $x$ per ottenere gli stessi risultati trovati sopra: ottengo il sistema:

$$
\begin{cases}
y + z = 6 - x \\
y - z = -x
\end{cases}
$$

con matrice incompleta e completa:

[Matrice incompleta]{.text-blue}
$$
\begin{pmatrix}
1 & 1 \\
1 & -1
\end{pmatrix}
$$

[Matrice completa]{.text-blue}
$$
\begin{pmatrix}
1 & 1 & 6-x \\
1 & -1 & -x
\end{pmatrix}
$$

Trovo $y$ con la regola di Cramer:

$$
y = \frac{\begin{vmatrix} 6-x & 1 \\ -x & -1 \end{vmatrix}}{\begin{vmatrix} 1 & 1 \\ 1 & -1 \end{vmatrix}} = \frac{(6-x) \cdot (-1) - 1 \cdot (-x)}{1 \cdot (-1) - 1 \cdot 1} = \frac{-6 + x + x}{-1 - 1} = \frac{-6 + 2x}{-2} = 3 - x
$$

Trovo $z$ con la regola di Cramer:

$$
z = \frac{\begin{vmatrix} 1 & 6-x \\ 1 & -x \end{vmatrix}}{\begin{vmatrix} 1 & 1 \\ 1 & -1 \end{vmatrix}} = \frac{1 \cdot (-x) - (6-x) \cdot 1}{1 \cdot (-1) - 1 \cdot 1} = \frac{-x - 6 + x}{-1 - 1} = \frac{-6}{-2} = 3
$$

e quindi, siccome posso dare ad $x$ un valore qualunque:

$$
\begin{cases}
x = k \\
y = 3 - k \\
z = 3
\end{cases}
$$
[con $k$ numero reale]{.text-blue}

**Se due equazioni sono equivalenti allora il sistema ammette $\infty$ soluzioni**

> per poter elaborare una teoria unitaria avremo bisogno di nuovi concetti quali:
> dipendenza ed indipendenza lineare
> matrici, determinanti e rango di una matrice
> Lo vedremo nelle prossime pagine