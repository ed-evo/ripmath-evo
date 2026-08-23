# [Equazioni reciproche di quarto grado]{.text-red-darken-1}
[di seconda specie]{.text-red-darken-1}

Sono del tipo:
$$
\textcolor{blue}{ax^4 + bx^3 - bx - a = 0}
$$

Il polinomio associato è sempre scomponibile per $$\textcolor{blue}{(x-1)(x+1)}$$.

Per mostrare che è possibile utilizzare la scomposizione di Ruffini con i divisori $$\textcolor{blue}{(x-1)(x+1)}$$ consideriamo il polinomio associato e scomponiamolo:

$$
\textcolor{blue}{ax^4 + bx^3 - bx - a =}
$$

Sono 4 termini, possiamo raccogliere $$\textcolor{blue}{a}$$ fra il primo ed il quarto termine e $$\textcolor{blue}{bx}$$ fra il secondo ed il terzo:

$$
\textcolor{blue}{= a(x^4 - 1) + bx(x^2 - 1) =}
$$

Dentro la prima parentesi ho una differenza di quadrati, la scompongo:

$$
\textcolor{blue}{= a(x^2 - 1)(x^2 + 1) + bx(x^2 - 1) =}
$$

Ora raccolgo il termine comune $$\textcolor{blue}{(x^2 - 1)}$$:

$$
\textcolor{blue}{= (x^2 - 1)[a(x^2 + 1) + bx] =}
$$

$$
\textcolor{blue}{= (x^2 - 1)[ax^2 + a + bx] =}
$$

$$
\textcolor{blue}{= (x - 1)(x + 1)(ax^2 + bx + a)}
$$

Quindi due fattori del polinomio sono $$\textcolor{blue}{(x-1)(x+1)}$$ e scomponendo con Ruffini otterremo come quoziente un'equazione di secondo grado.

***

Vediamo un esempio:
Risolvere l'equazione:
$$
\textcolor{red}{3x^4 - 10x^3 + 10x - 3 = 0}
$$

Considero il polinomio associato $$\textcolor{blue}{3x^4 - 10x^3 + 10x - 3}$$ e scompongo per $$\textcolor{blue}{(x-1)}$$. Effettuo la divisione di Ruffini ricordandomi di ordinare perché manca il termine in $$x^2$$.

Ottengo:
$$
\textcolor{blue}{3x^4 - 10x^3 + 10x - 3 = (x - 1)(3x^3 - 7x^2 - 7x + 3)}
$$

Ora continuo a scomporre per $$\textcolor{blue}{(x+1)}$$ effettuando la divisione di Ruffini.

Quindi ho:
$$
\textcolor{blue}{3x^4 - 10x^3 + 10x - 3 = (x - 1)(3x^3 - 7x^2 - 7x + 3) = (x-1)(x+1)(3x^2 - 10x + 3)}
$$

Devo risolvere:
$$
\textcolor{blue}{(x-1)(x+1)(3x^2 - 10x + 3) = 0}
$$

Pongo ogni fattore uguale a zero:
- $$\textcolor{blue}{x - 1 = 0} \implies \textcolor{blue}{x = 1}$$
- $$\textcolor{blue}{x + 1 = 0} \implies \textcolor{blue}{x = -1}$$
- $$\textcolor{blue}{3x^2 - 10x + 3 = 0}$$
  ha come soluzioni:
  $$
  \textcolor{blue}{x_1 = \frac{1}{3}, \quad x_2 = 3}
  $$

Quindi le soluzioni dell'equazione di partenza sono (ordinate):
$$
\textcolor{red}{x_1 = -1, \quad x_2 = \frac{1}{3}, \quad x_3 = 1, \quad x_4 = 3}
$$