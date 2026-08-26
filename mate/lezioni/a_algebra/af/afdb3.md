Risolvere l'equazione:
$\textcolor{red}{x^4 - 5x^3 + 2x^2 + 20x - 24 = 0}$

Considero il polinomio associato:
$\textcolor{red}{x^4 - 5x^3 + 2x^2 + 20x - 24 =}$

Devo scomporlo.
Non posso raccogliere niente a fattor comune.
Passo a considerare il numero di termini: $5$.
Enumero le varie possibilità.
Non vedo raggruppamenti.

Devo provare Ruffini.
I divisori del termine noto sono:
$\textcolor{red}{+1, -1, +2, -2, +3, -3, +4, -4, +6, -6, +12, -12, +24, -24}$

- Provo a vedere se è scomponibile per $\textcolor{red}{(x - 1)}$:
  $\textcolor{red}{P(1) = 1^4 - 5 \cdot 1^3 + 2 \cdot 1^2 + 20 \cdot 1 - 24 = 1 - 5 + 2 + 20 - 24 \neq 0}$
  Non è scomponibile per $(x - 1)$.

- Provo a vedere se è scomponibile per $\textcolor{red}{(x + 1)}$:
  $\textcolor{red}{P(-1) = (-1)^4 - 5 \cdot (-1)^3 + 2 \cdot (-1)^2 + 20 \cdot (-1) - 24 = -1 + 5 + 2 - 20 - 24 \neq 0}$
  Non è scomponibile per $(x + 1)$.

- Provo a vedere se è scomponibile per $\textcolor{red}{(x - 2)}$:
  $\textcolor{red}{P(2) = 2^4 - 5 \cdot 2^3 + 2 \cdot 2^2 + 20 \cdot 2 - 24 = 16 - 40 + 8 + 40 - 24 = 0}$
  È scomponibile per $(x - 2)$.

Divido per $(x - 2)$ ed ottengo:
$\textcolor{red}{x^4 - 5x^3 + 2x^2 + 20x - 24 = (x + 2)(x^3 - 3x^2 - 4x + 12) =}$

Ora devo scomporre il polinomio di terzo grado:
$\textcolor{red}{x^3 - 3x^2 - 4x + 12}$
Ricomincio dall'ultimo fattore che è andato bene:

- Provo a vedere se è scomponibile per $\textcolor{red}{(x - 2)}$:
  $\textcolor{red}{P(2) = 2^3 - 3 \cdot 2^2 - 4 \cdot 2 + 12 = 8 - 12 - 8 + 12 = 0}$
  È ancora scomponibile per $(x - 2)$.

Divido per $(x - 2)$ ed ottengo:
$\textcolor{red}{x^4 - 5x^3 + 2x^2 + 20x - 24 = (x - 2)(x^3 - 3x^2 - 4x + 12) =}$
$\textcolor{red}{= (x - 2)(x - 2)(x^2 - x - 6)}$

Ora siccome il polinomio è tutto composto di polinomi di primo e secondo grado ricostruisco l'equazione:
$\textcolor{red}{x^4 - 5x^3 + 2x^2 + 20x - 24 = 0}$
equivale a
$\textcolor{red}{(x - 2)(x - 2)(x^2 - x - 6) = 0}$

Risolvo le singole equazioni:
1. $\textcolor{red}{(x - 2) = 0}$
2. $\textcolor{red}{(x - 2) = 0}$
3. $\textcolor{red}{(x^2 - x - 6) = 0}$

- Risolvo la prima:
  $\textcolor{red}{x - 2 = 0 \quad x = 2}$
- Risolvo la seconda:
  $\textcolor{red}{x - 2 = 0 \quad x = 2}$
- Risolvo la terza:
  $\textcolor{red}{x^2 - x - 6 = 0}$

  $\textcolor{red}{x = \frac{1 \pm \sqrt{1^2 - 4(1)(-6)}}{2}}$
  Eseguo i calcoli:
  $\textcolor{red}{x = \frac{1 \pm \sqrt{25}}{2}}$
  $\textcolor{red}{x_{1,2} = \frac{1 \pm 5}{2}}$
  Ottengo le soluzioni:
  $\textcolor{red}{x = -2 \quad x = 3}$

Le soluzioni dell'equazione di partenza saranno:
- $\textcolor{red}{x_1 = 2}$
- $\textcolor{red}{x_2 = 2}$
- $\textcolor{red}{x_3 = -2}$
- $\textcolor{red}{x_4 = 3}$

Posso anche dire:
- $\textcolor{red}{x_{1,2} = 2}$ soluzione doppia
- $\textcolor{red}{x_3 = -2}$
- $\textcolor{red}{x_4 = 3}$

> Come vedi il procedimento è lungo e noioso, allora, se possibile, si cercano metodi più rapidi ed equazioni particolari che permettano di utilizzare metodi più efficienti per trovare le soluzioni. Vedremo questi metodi nelle prossime pagine.