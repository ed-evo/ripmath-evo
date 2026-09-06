# <span class="text-red-600">Esercizio su disequazione di quarto grado</span>

Risolviamo la disequazione:

$$
\frac{x^4 - 16}{x^4 + x^3 - x - 1} \ge 0
$$

Scomponiamo in fattori sia il numeratore che il denominatore:

- **Scomposizione del numeratore**
  Considero il polinomio associato
  <span class="text-blue-600">$x^4 - 16 =$</span>
  devo [scomporlo](../ad/ad6g.html) in fattori; sono 2 termini, è una differenza di quadrati
  <span class="text-blue-600">$x^4 - 16 = (x^2 - 4)(x^2 + 4) =$</span>
  il primo fattore è ancora una differenza di quadrati mentre il secondo come somma di quadrati non è più scomponibile
  <span class="text-blue-600">$= (x - 2)(x + 2)(x^2 + 4)$</span>

- **Scomponiamo il denominatore**
  Considero il polinomio associato
  <span class="text-blue-600">$x^4 + x^3 - x - 1 =$</span>
  sono 4 termini:
  - Non è il cubo di un binomio
  - Può essere un raccoglimento parziale

  Provo a scomporre come raccoglimento parziale:
  <span class="text-blue-600">$x^4 + x^3 - x - 1 = x^3(x+1) - 1(x+1) = (x+1)(x^3 - 1) =$</span>
  L'ultimo fattore (2 termini) come [differenza di cubi](../ad/ad6da.html) è scomponibile, quindi ottengo:
  <span class="text-blue-600">$= (x+1)(x-1)(x^2+x+1)$</span>
  L'ultimo fattore non è più scomponibile.

Quindi ottengo:

$$
\frac{(x - 2)(x + 2)(x^2 + 4)}{(x+1)(x-1)(x^2+x+1)} \ge 0
$$

Poniamo ogni fattore del numeratore maggiore o uguale a $0$ ed ogni fattore del denominatore solamente maggiore di zero (lo zero non può mai essere al denominatore):

- <span class="text-blue-600">$x - 2 \ge 0 \implies x \ge 2$</span>
- <span class="text-blue-600">$x + 2 \ge 0 \implies x \ge -2$</span>
- <span class="text-blue-600">$x^2 + 4 \ge 0 \implies$ sempre vero (delta minore di zero)</span>
- <span class="text-blue-600">$x + 1 > 0 \implies x > -1$</span>
- <span class="text-blue-600">$x - 1 > 0 \implies x > 1$</span>
- <span class="text-blue-600">$x^2 + x + 1 > 0 \implies$ sempre vero (delta minore di zero)</span>

Adesso riporto i risultati su un grafico indicando con un $+$ dove ogni disequazione è verificata e con un $-$ dove non è verificata; inoltre indico con un cerchietto i punti dove il fattore vale zero ed è accettabile e poi faccio il conto dei segni: devo prendere gli intervalli dove il prodotto dei segni dei fattori (cioè il segno dell'espressione) risulta positivo o nullo.

Ottengo come risultato:

$$
x \le -2 \quad \cup \quad -1 < x < 1 \quad \cup \quad x \ge 2
$$

> **Nota:** anche qui avrei potuto tralasciare i due fattori con delta minore di zero perché, essendo positivi, non influiscono sul segno del risultato.