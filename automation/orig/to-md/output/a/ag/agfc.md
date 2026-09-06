# Esercizio

Risolviamo la disequazione:

$$
\frac{x^4 + x^3 - 3x^2 - 4x - 4}{x^3 + 3x^2 + x + 3} < 0
$$

Scomponiamo in fattori sia il numeratore che il denominatore.

- **Scomposizione del numeratore**
  Considero il polinomio associato:
  $x^4 + x^3 - 3x^2 - 4x - 4 = 0$
  
  Devo [scomporlo](../ad/ad6g.html) in fattori; sono $5$ termini, non riesco a fare dei raggruppamenti, quindi applico la scomposizione di Ruffini.
  Provo a scomporre per:
  - $(x-1), \quad P(1) = 1^4 + 1^3 - 3 \cdot 1^2 - 4 \cdot 1 - 4 = 1 + 1 - 3 - 4 - 4 \neq 0$
  - $(x+1), \quad P(-1) = (-1)^4 + (-1)^3 - 3 \cdot (-1)^2 - 4 \cdot (-1) - 4 = 1 - 1 - 3 + 4 - 4 \neq 0$
  - $(x-2), \quad P(2) = 2^4 + 2^3 - 3 \cdot 2^2 - 4 \cdot 2 - 4 = 16 + 8 - 12 - 8 - 4 = 0$

  Quindi $(x-2)$ è un fattore: divido per $(x-2)$.
  Faccio la [divisione di Ruffini](../ad/ad5b.html).

  Ottengo quindi:
  $x^4 + x^3 - 3x^2 - 4x - 4 = (x-2)(x^3 + 3x^2 + 3x + 2)$
  
  Continuo la scomposizione del secondo fattore: sono $4$ termini:
  
  > - Non è il cubo di un binomio
  > - non è un raccoglimento parziale
  > - non mi sembra un raggruppamento
  > - quindi applico la scomposizione di Ruffini
  
  Provo a scomporre per l'ultimo fattore che era valido:
  - $(x-2), \quad P(2) = 2^3 + 3 \cdot 2^2 + 3 \cdot 2 + 2 = 8 + 12 + 6 + 2 \neq 0$
  - $(x+2), \quad P(-2) = (-2)^3 + 3 \cdot (-2)^2 + 3 \cdot (-2) + 2 = -8 + 12 - 6 + 2 = 0$
  
  Quindi $(x+2)$ è un fattore; divido per $(x+2)$.

  Quindi ottengo:
  $x^4 + x^3 - 3x^2 - 4x - 4 = (x-2)(x^3 + 3x^2 + 3x + 2) = (x-2)(x+2)(x^2+x+1)$
  
  Ora provo a scomporre l'ultimo fattore:
  
  > - Non è il quadrato di un binomio
  > - Non è un trinomio notevole
  > - Non si può scomporre con Ruffini (i fattori possibili sono $+1$ e $-1$ che abbiamo già provato)
  
  L'ultimo fattore non è scomponibile.

- **Scomposizione del denominatore**
  Considero il polinomio associato:
  $x^3 + 3x^2 + x + 3 = 0$
  
  Sono $4$ termini:
  
  > - Non è il cubo di un binomio
  > - Può essere un raccoglimento parziale
  
  Provo a scomporre come raccoglimento parziale:
  $x^3 + 3x^2 + x + 3 = x^2(x+3) + 1(x+3) = (x+3)(x^2+1)$
  
  L'ultimo fattore ($2$ termini) come somma di quadrati non è scomponibile.

Quindi ottengo:

$$
\frac{(x-2)(x+2)(x^2+x+1)}{(x+3)(x^2+1)} < 0
$$

Poniamo ogni fattore maggiore di zero:
- $x - 2 > 0 \implies x > 2$
- $x + 2 > 0 \implies x > -2$
- $x^2+x+1 > 0 \quad$ sempre verificato (delta minore di zero)
- $x + 3 > 0 \implies x > -3$
- $x^2 + 1 > 0 \quad$ sempre verificato (delta minore di zero)

Adesso riporto i risultati su un grafico indicando con un $+$ dove ogni disequazione è verificata e con un $-$ dove non è verificata e faccio il conto dei segni: devo prendere gli intervalli dove il prodotto ed il quoziente dei segni dei fattori (cioè il segno dell'espressione) risulta negativo.

Ottengo come risultato:
$x < -3 \cup -2 < x < 2$

> **Nota:** avrei potuto tralasciare i due fattori con delta minore di zero perché, essendo positivi, non influiscono sul segno del risultato.