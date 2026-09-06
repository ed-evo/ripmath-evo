# Esercizio su disequazione più complessa con numeratore e denominatore semplificabili

Risolviamo la disequazione:

$$
\frac{(x^2 - 4x + 3)(x^2 - 4x + 4)(x^2 + 1)}{(x - 2)(x^2 - 5x + 6)} \ge 0
$$

Se vado a risolverla senza riflettere, al momento di fare il grafico vedo che dei valori che annullano il numeratore corrispondono a valori che annullano il denominatore: questo significa che puoi (anzi devi) semplificare numeratore e denominatore prima di poter risolvere, quindi devi tornare all'inizio e semplificare.

Per semplificare [scomponiamo](../af/afccf.html) i fattori cercando di ridurli tutti a fattori di primo grado (quelli che non si riducono non ci debbono preoccupare, possiamo lasciarli come sono, tanto non saranno semplificabili):

$\textcolor{blue}{x^2 - 4x + 3 = (x - 1)(x - 3)}$
$\textcolor{blue}{x^2 - 4x + 4 = (x - 2)^2}$
$\textcolor{blue}{x^2 + 1 = \text{non si scompone}}$
$\textcolor{blue}{x^2 - 5x + 6 = (x - 2)(x - 3)}$

Quindi la mia disequazione iniziale diventa

$$
\textcolor{blue}{\frac{(x - 1)(x - 3)(x - 2)^2(x^2 + 1)}{(x - 2)(x - 2)(x - 3)} \ge 0}
$$

e posso semplificare numeratore e denominatore ed ottengo

$$
\textcolor{blue}{\frac{(x - 1)(x^2 + 1)}{1} \ge 0}
$$

o meglio

$\textcolor{blue}{(x - 1)(x^2 + 1) \ge 0}$

È un prodotto, pongo ogni fattore maggiore o uguale a zero:

$$
\textcolor{blue}{\begin{cases} x - 1 \ge 0 \\ x^2 + 1 \ge 0 \end{cases}}
$$

- la prima $\textcolor{blue}{x - 1 \ge 0}$ è verificata per $\textcolor{blue}{x \ge 1}$
- la seconda $\textcolor{blue}{x^2 + 1 \ge 0}$ è sempre verificata [Calcoli](ageeca.html)

quindi il mio sistema è equivalente al sistema

$$
\textcolor{blue}{\begin{cases} x \ge 1 \\ \text{sempre verificata} \end{cases}}
$$

Riporto su un grafico, evidenziando con un più dove la singola disequazione è verificata e con un meno dove non è verificata. Dove il valore che annulla è accettabile lo indico con un cerchietto.
Nella riga in blu metto il segno dell'espressione.

Ora faccio il calcolo dei segni: siccome devo prendere dove l'espressione è positiva o nulla, l'espressione sarà positiva dove il prodotto dei segni dei fattori dà risultato positivo e sarà nulla dove si annullano i fattori (i cerchietti).

La soluzione è

$$
x \ge 1
$$