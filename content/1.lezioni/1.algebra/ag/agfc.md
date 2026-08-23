# [Esercizio]{.text-red}

Risolviamo la disequazione:

$$
\textcolor{red}{\frac{x^4 + x^3 - 3x^2 - 4x - 4}{x^3 + 3x^2 + x + 3} < 0}
$$

Scomponiamo in fattori sia il numeratore che il denominatore.

## Scomposizione del numeratore

Considero il polinomio associato:

$$
\textcolor{blue}{x^4 + x^3 - 3x^2 - 4x - 4 = 0}
$$

Devo scomporlo in fattori; sono 5 termini, non riesco a fare dei raggruppamenti, quindi applico la scomposizione di Ruffini. Provo a scomporre per:

$$
\textcolor{blue}{(x-1), \quad P(1) = 1^4 + 1^3 - 3 \cdot 1^2 - 4 \cdot 1 - 4 = 1 + 1 - 3 - 4 - 4 \neq 0}
$$
$$
\textcolor{blue}{(x+1), \quad P(-1) = (-1)^4 + (-1)^3 - 3 \cdot (-1)^2 - 4 \cdot (-1) - 4 = 1 - 1 - 3 + 4 - 4 \neq 0}
$$
$$
\textcolor{blue}{(x-2), \quad P(2) = 2^4 + 2^3 - 3 \cdot 2^2 - 4 \cdot 2 - 4 = 16 + 8 - 12 - 8 - 4 = 0}
$$

Quindi $$(x-2)$$ è un fattore: divido per $$(x-2)$$ effettuando la divisione di Ruffini:

$$
\begin{array}{c|rrrrr}
& 1 & 1 & -3 & -4 & -4 \\
2 & & 2 & 6 & 6 & 4 \\
\hline
& 1 & 3 & 3 & 2 & 0
\end{array}
$$

Ottengo quindi:

$$
\textcolor{blue}{x^4 + x^3 - 3x^2 - 4x - 4 = (x-2)(x^3 + 3x^2 + 3x + 2)}
$$

Continuo la scomposizione del secondo fattore (composto da 4 termini):

> - Non è il cubo di un binomio
> - Non è un raccoglimento parziale
> - Non sembra un raggruppamento
> - Quindi applico la scomposizione di Ruffini

Provo a scomporre per l'ultimo fattore che era valido:

$$
\textcolor{blue}{(x-2), \quad P(2) = 2^3 + 3 \cdot 2^2 + 3 \cdot 2 + 2 = 8 + 12 + 6 + 2 \neq 0}
$$
$$
\textcolor{blue}{(x+2), \quad P(-2) = (-2)^3 + 3 \cdot (-2)^2 + 3 \cdot (-2) + 2 = -8 + 12 - 6 + 2 = 0}
$$

Quindi $$(x+2)$$ è un fattore; divido per $$(x+2)$$:

$$
\begin{array}{c|rrrr}
& 1 & 3 & 3 & 2 \\
-2 & & -2 & -2 & -2 \\
\hline
& 1 & 1 & 1 & 0
\end{array}
$$

Quindi ottengo:

$$
\textcolor{blue}{x^4 + x^3 - 3x^2 - 4x - 4 = (x-2)(x^3 + 3x^2 + 3x + 2) = (x-2)(x+2)(x^2 + x + 1)}
$$

Ora provo a scomporre l'ultimo fattore:

> - Non è il quadrato di un binomio
> - Non è un trinomio notevole
> - Non si può scomporre con Ruffini (i fattori possibili sono $$+1$$ e $$-1$$, che abbiamo già provato)

L'ultimo fattore non è scomponibile.

## Scomposizione del denominatore

Considero il polinomio associato:

$$
\textcolor{blue}{x^3 + 3x^2 + x + 3 = 0}
$$

Sono 4 termini:

> - Non è il cubo di un binomio
> - Può essere un raccoglimento parziale

Provo a scomporre come raccoglimento parziale:

$$
\textcolor{blue}{x^3 + 3x^2 + x + 3 = x^2(x+3) + 1(x+3) = (x+3)(x^2 + 1)}
$$

L'ultimo fattore (2 termini) come somma di quadrati non è scomponibile.

Quindi ottengo la disequazione:

$$
\textcolor{blue}{\frac{(x-2)(x+2)(x^2 + x + 1)}{(x+3)(x^2 + 1)} < 0}
$$

Poniamo ogni fattore maggiore di zero:

- $$\textcolor{blue}{x - 2 > 0 \implies x > 2}$$
- $$\textcolor{blue}{x + 2 > 0 \implies x > -2}$$
- $$\textcolor{blue}{x^2 + x + 1 > 0 \quad \text{(sempre verificato, } \Delta < 0)}$$
- $$\textcolor{blue}{x + 3 > 0 \implies x > -3}$$
- $$\textcolor{blue}{x^2 + 1 > 0 \quad \text{(sempre verificato, } \Delta < 0)}$$

Riporto i risultati su un grafico indicando con un $$+$$ dove ogni disequazione è verificata e con un $$-$$ dove non è verificata, e calcolo i segni. Devo prendere gli intervalli dove il prodotto e il quoziente dei segni dei fattori (cioè il segno dell'espressione) risulta negativo.

Ottengo come risultato:

$$
\textcolor{red}{x < -3 \quad \cup \quad -2 < x < 2}
$$

> **Nota:** avrei potuto tralasciare i due fattori con delta minore di zero perché, essendo positivi, non influiscono sul segno del risultato.