# Esercizio su disequazione di quarto grado

Risolviamo la disequazione:

$$
\textcolor{red}{x^4 - 5x^3 + 5x^2 + 5x - 6 > 0}
$$

Considero il polinomio associato:

$$
\textcolor{blue}{x^4 - 5x^3 + 5x^2 + 5x - 6 = 0}
$$

Devo scomporlo in fattori; sono $5$ termini, non riesco a fare dei raggruppamenti, quindi applico la scomposizione di Ruffini. Provo a scomporre per:

$$
\textcolor{blue}{(x-1), \quad P(1) = 1^4 - 5 \cdot 1^3 + 5 \cdot 1^2 + 5 \cdot 1 - 6 = 1 - 5 + 5 + 5 - 6 = 0}
$$

Quindi $\textcolor{blue}{(x-1)}$ è un fattore: divido per $\textcolor{blue}{(x-1)}$ effettuando la divisione di Ruffini:

$$
\begin{array}{c|rrrrr}
 & 1 & -5 & 5 & 5 & -6 \\
 1 & & 1 & -4 & 1 & 6 \\
 \hline
 & 1 & -4 & 1 & 6 & 0
\end{array}
$$

Ottengo quindi:

$$
\textcolor{blue}{x^4 - 5x^3 + 5x^2 + 5x - 6 = (x-1)(x^3 - 4x^2 + x + 6) =}
$$

Continuo la scomposizione del secondo fattore: sono $4$ termini.

> **Nota:**
> - Non è il cubo di un binomio
> - Non è un raccoglimento parziale
> - Non sembra un raggruppamento
> - Quindi applico la scomposizione di Ruffini

Provo a scomporre per:

$$
\textcolor{blue}{(x-1), \quad P(1) = 1^3 - 4 \cdot 1^2 + 1 + 6 = 1 - 4 + 1 + 6 = 4 \neq 0}
$$

$$
\textcolor{blue}{(x+1), \quad P(-1) = (-1)^3 - 4 \cdot (-1)^2 + (-1) + 6 = -1 - 4 - 1 + 6 = 0}
$$

Quindi $\textcolor{blue}{(x+1)}$ è un fattore; divido per $\textcolor{blue}{(x+1)}$:

$$
\begin{array}{c|rrrr}
 & 1 & -4 & 1 & 6 \\
 -1 & & -1 & 5 & -6 \\
 \hline
 & 1 & -5 & 6 & 0
\end{array}
$$

Quindi ottengo:

$$
\textcolor{blue}{x^4 - 5x^3 + 5x^2 + 5x - 6 = (x-1)(x^3 - 4x^2 + x + 6) = (x-1)(x+1)(x^2 - 5x + 6)}
$$

Ora devo decidere se voglio fare la disequazione con fattori di primo e secondo grado oppure solo con fattori di primo grado scomponendo anche l'ultimo fattore tra parentesi. Un metodo vale l'altro: per scomporre l'ultimo termine posso applicare la scomposizione del trinomio notevole, cioè:

$$
\textcolor{blue}{x^2 - 5x + 6 = (x-2)(x-3)}
$$

e quindi avrò:

$$
\textcolor{blue}{x^4 - 5x^3 + 5x^2 + 5x - 6 = (x-1)(x+1)(x-2)(x-3) > 0}
$$

Poniamo ogni fattore maggiore di zero:

- $\textcolor{blue}{x - 1 > 0 \implies x > 1}$
- $\textcolor{blue}{x + 1 > 0 \implies x > -1}$
- $\textcolor{blue}{x - 2 > 0 \implies x > 2}$
- $\textcolor{blue}{x - 3 > 0 \implies x > 3}$

Adesso riporto i risultati su un grafico indicando con un $+$ dove ogni disequazione è verificata e con un $-$ dove non è verificata e faccio il conto dei segni: devo prendere gli intervalli dove il prodotto dei segni dei fattori (cioè il segno dell'espressione) risulta positivo.

Ottengo come risultato:

$$
\textcolor{red}{x < -1 \cup 1 < x < 2 \cup x > 3}
$$