# esercizio

$$
\int \frac{x^5 - 2x^4 - 3x^3 + 2x^2 - 4x + 3}{x^3 - 2x^2 - x + 2} \, dx
$$

Eseguiamo la divisione fra polinomi:

$$
\begin{array}{r|l}
x^5 - 2x^4 - 3x^3 + 2x^2 - 4x + 3 & x^3 - 2x^2 - x + 2 \\
\cline{2-2}
-x^5 + 2x^4 + x^3 - 2x^2 & x^2 - 2 \\
\cline{1-1}
= -2x^3 - 4x + 3 & \\
+2x^3 - 4x^2 - 2x + 4 & \\
\cline{1-1}
= -4x^2 - 6x + 7 &
\end{array}
$$

Il quoziente vale $x^2 - 2$
il resto vale $-4x^2 - 6x + 7$
quindi, invece dell'integrale iniziale, posso calcolare gli integrali:

$$
= \int (x^2 - 2) \, dx + \int \frac{-4x^2 - 6x + 7}{x^3 - 2x^2 - x + 2} \, dx
$$

Il primo so calcolarlo, per il secondo devo applicare il metodo della scomposizione in frazioni di tipo elementare: considero il denominatore del secondo integrale

$$
x^3 - 2x^2 - x + 2 =
$$

Scompongo:
$$
= (x - 1)(x + 1)(x - 2)
$$

Le tre radici (reali e distinte) del denominatore sono $1$, $-1$, $2$.
Posso scrivere la frazione come somma delle tre frazioni:

$$
\frac{-4x^2 - 6x + 7}{x^3 - 2x^2 - x + 2} = \frac{A}{x - 1} + \frac{B}{x + 1} + \frac{C}{x - 2}
$$

Devo trovare $A$, $B$ e $C$.
A destra faccio il minimo comune multiplo:

$$
\frac{-4x^2 - 6x + 7}{x^3 - 2x^2 - x + 2} = \frac{A(x + 1)(x - 2) + B(x - 1)(x - 2) + C(x - 1)(x + 1)}{(x - 1)(x + 1)(x - 2)}
$$

Dopo un po' di calcoli ottengo:

$$
\frac{-4x^2 - 6x + 7}{x^3 - 2x^2 - x + 2} = \frac{x^2(A + B + C) + x(-A - 3B) - 2A + 2B - C}{(x - 1)(x + 1)(x - 2)}
$$

> **[Principio di identità dei polinomi:]{.text-purple}**
> Due polinomi sono uguali se e solo se sono uguali tutti i termini dello stesso grado.

Quindi, essendo uguali i denominatori, perché anche i numeratori siano uguali deve essere:

$$
A + B + C = -4
$$
$$
-A - 3B = -6
$$
$$
-2A + 2B - C = 7
$$

Pongo a sistema le tre equazioni per calcolare $A$, $B$ e $C$:

$$
\begin{cases}
A + B + C = -4 \\
-A - 3B = -6 \\
-2A + 2B - C = 7
\end{cases}
$$

Ed ottengo:

$$
\begin{cases}
A = 3/2 \\
B = 3/2 \\
C = -7
\end{cases}
$$

Quindi posso scrivere:

$$
\frac{-4x^2 - 6x + 7}{x^3 - 2x^2 - x + 2} = \frac{3/2}{x - 1} + \frac{3/2}{x + 1} + \frac{-7}{x - 2}
$$

o meglio:

$$
\frac{-4x^2 - 6x + 7}{x^3 - 2x^2 - x + 2} = \frac{3}{2(x - 1)} + \frac{3}{2(x + 1)} - \frac{7}{x - 2}
$$

Quindi ottengo:

$$
= \int (x^2 - 2) \, dx + \int \frac{-4x^2 - 6x + 7}{x^3 - 2x^2 - x + 2} \, dx
$$

$$
= \int x^2 \, dx - \int 2 \, dx + \int \frac{3}{2(x - 1)} \, dx + \int \frac{3}{2(x + 1)} \, dx - \int \frac{7}{x - 2} \, dx
$$

$$
= \frac{x^3}{3} - 2x + \frac{3}{2} \log|x - 1| + \frac{3}{2} \log|x + 1| - 7 \log|x - 2| + c
$$