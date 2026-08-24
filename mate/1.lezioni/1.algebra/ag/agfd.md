# Esercizio su disequazione di quarto grado

Risolviamo la disequazione:

$$
\textcolor{red}{\frac{x^4 - 16}{x^4 + x^3 - x - 1} \geq 0}
$$

Scomponiamo in fattori sia il numeratore che il denominatore:

- Scomposizione del numeratore
  Considero il polinomio associato:
  $\textcolor{blue}{x^4 - 16 =}$
  Devo scomporlo in fattori; sono 2 termini, è una differenza di quadrati:
  $\textcolor{blue}{x^4 - 16 = (x^2 - 4)(x^2 + 4) =}$
  Il primo fattore è ancora una differenza di quadrati mentre il secondo, come somma di quadrati, non è più scomponibile:
  $\textcolor{blue}{= (x - 2)(x + 2)(x^2 + 4)}$

- Scomponiamo il denominatore
  Considero il polinomio associato:
  $\textcolor{blue}{x^4 + x^3 - x - 1 =}$
  Sono 4 termini:
  - Non è il cubo di un binomio
  - Può essere un raccoglimento parziale

  Provo a scomporre come raccoglimento parziale:
  $\textcolor{blue}{x^4 + x^3 - x - 1 = x^3(x+1) - 1(x+1) = (x+1)(x^3 - 1) =}$
  L'ultimo fattore (2 termini) come differenza di cubi è scomponibile, quindi ottengo:
  $\textcolor{blue}{= (x+1)(x-1)(x^2+x+1)}$
  L'ultimo fattore non è più scomponibile.

Quindi ottengo:

$$
\textcolor{blue}{\frac{(x - 2)(x + 2)(x^2 + 4)}{(x+1)(x-1)(x^2+x+1)} \geq 0}
$$

Poniamo ogni fattore del numeratore maggiore o uguale a $0$ ed ogni fattore del denominatore solamente maggiore di zero (lo zero non può mai essere al denominatore):

- $\textcolor{blue}{x - 2 \geq 0 \implies x \geq 2}$
- $\textcolor{blue}{x + 2 \geq 0 \implies x \geq -2}$
- $\textcolor{blue}{x^2 + 4 \geq 0}$ (sempre vero, delta minore di zero)
- $\textcolor{blue}{x + 1 > 0 \implies x > -1}$
- $\textcolor{blue}{x - 1 > 0 \implies x > 1}$
- $\textcolor{blue}{x^2 + x + 1 > 0}$ (sempre vero, delta minore di zero)

Adesso riporto i risultati su un grafico indicando con un $+$ dove ogni disequazione è verificata e con un $-$ dove non è verificata; inoltre indico con un cerchietto i punti dove il fattore vale zero ed è accettabile e poi faccio il conto dei segni: devo prendere gli intervalli dove il prodotto dei segni dei fattori (cioè il segno dell'espressione) risulta positivo o nullo.

Ottengo come risultato:

$$
\textcolor{red}{x \leq -2 \cup -1 < x < 1 \cup x \geq 2}
$$

> **Nota:** Anche qui avrei potuto tralasciare i due fattori con delta minore di zero perché, essendo positivi, non influiscono sul segno del risultato.