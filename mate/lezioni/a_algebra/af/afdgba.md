# Equazioni reciproche di quarto grado
## di prima specie

È del tipo:

$$
\textcolor{blue}{ax^4 + bx^3 + cx^2 + bx + a = 0}
$$

Per risolvere un'equazione di questo genere prima dividiamo tutti i termini dell'equazione per $x^2$

$$
\textcolor{blue}{ax^2 + bx + c + \frac{b}{x} + \frac{a}{x^2} = 0}
$$

Raccolgo poi i coefficienti uguali $\textcolor{blue}{a}$ e $\textcolor{blue}{b}$

$$
\textcolor{blue}{a(x^2 + \frac{1}{x^2}) + b(x + \frac{1}{x}) + c = 0}
$$

e poi operiamo la sostituzione

$$
\textcolor{red}{x + \frac{1}{x} = y} \quad \text{e quindi} \quad \textcolor{red}{x^2 + \frac{1}{x^2} = y^2 - 2}
$$

otterremo quindi un'equazione di secondo grado in $y$ che risolveremo normalmente ottenendo per $y$ due valori $y_1$ e $y_2$. Successivamente risolveremo le due equazioni (di secondo grado)

$$
\textcolor{blue}{x + \frac{1}{x} = y_1} \qquad \textcolor{blue}{x + \frac{1}{x} = y_2}
$$

ottenendo per la $x$ i quattro valori delle soluzioni.

È più facile risolverle praticamente che in teoria: vediamo un esempio:

Risolvere l'equazione

$$
\textcolor{red}{6x^4 - 5x^3 - 38x^2 - 5x + 6 = 0}
$$

divido tutti i termini per $\textcolor{blue}{x^2}$

$$
\textcolor{blue}{6x^2 - 5x - 38 - \frac{5}{x} + \frac{6}{x^2} = 0}
$$

Raccolgo poi i coefficienti uguali $\textcolor{blue}{6}$ e $\textcolor{blue}{-5}$

$$
\textcolor{blue}{6(x^2 + \frac{1}{x^2}) - 5(x + \frac{1}{x}) - 38 = 0}
$$

e poi operiamo la sostituzione

$$
\textcolor{blue}{x + \frac{1}{x} = y} \quad \text{e} \quad \textcolor{blue}{x^2 + \frac{1}{x^2} = y^2 - 2}
$$

otteniamo

$$
\begin{aligned}
\textcolor{blue}{6(y^2 - 2) - 5y - 38} &= \textcolor{blue}{0} \\
\textcolor{blue}{6y^2 - 12 - 5y - 38} &= \textcolor{blue}{0} \\
\textcolor{blue}{6y^2 - 5y - 50} &= \textcolor{blue}{0}
\end{aligned}
$$

che ha soluzioni (calcoli)

> **Nota:** questi risultati non devono essere reciproci tra loro.

$$
\textcolor{blue}{y_1 = -\frac{5}{2}} \qquad \textcolor{blue}{y_2 = \frac{10}{3}}
$$

ho quindi le due equazioni

$$
\textcolor{blue}{x + \frac{1}{x} = -\frac{5}{2}} \qquad \textcolor{blue}{x + \frac{1}{x} = \frac{10}{3}}
$$

- Risolvo la prima: il minimo comune multiplo è $2x$ che è certamente diverso da zero

$$
\textcolor{blue}{\frac{2x^2 + 2}{2x} = \frac{-5x}{2x}}
$$

elimino i denominatori

$$
\begin{aligned}
\textcolor{blue}{2x^2 + 2} &= \textcolor{blue}{-5x} \\
\textcolor{blue}{2x^2 + 5x + 2} &= \textcolor{blue}{0}
\end{aligned}
$$

> **Nota:** è un'equazione reciproca: il primo e l'ultimo termine hanno lo stesso coefficiente $2$.

che ha come soluzioni (calcoli)

> **Nota:** le soluzioni sono reciproche.

$$
\textcolor{blue}{x_1 = -2} \qquad \textcolor{blue}{x_2 = -\frac{1}{2}}
$$

- Risolvo la seconda: il minimo comune multiplo è $3x$ che è certamente diverso da zero

$$
\textcolor{blue}{\frac{3x^2 + 3}{3x} = \frac{10x}{3x}}
$$

elimino i denominatori

$$
\begin{aligned}
\textcolor{blue}{3x^2 + 3} &= \textcolor{blue}{10x} \\
\textcolor{blue}{3x^2 - 10x + 3} &= \textcolor{blue}{0}
\end{aligned}
$$

> **Nota:** è un'equazione reciproca: il primo e l'ultimo termine hanno lo stesso coefficiente $3$.

che ha come soluzioni (calcoli)

> **Nota:** Anche queste sono reciproche.

$$
\textcolor{blue}{x_1 = \frac{1}{3}} \qquad \textcolor{blue}{x_2 = 3}
$$

ottenendo per la $x$ i quattro valori delle soluzioni

$$
\textcolor{red}{x_1 = -2} \qquad \textcolor{red}{x_2 = -\frac{1}{2}} \qquad \textcolor{red}{x_3 = \frac{1}{3}} \qquad \textcolor{red}{x_4 = 3}
$$