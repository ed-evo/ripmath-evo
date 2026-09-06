# <span class="text-red-600">Disequazione con numeratore e denominatore semplificabili</span>

Risolviamo la disequazione:

$$
\frac{x^2 - 5x + 6}{x - 3} > 0
$$

Provo a risolverla nel modo normale. Pongo numeratore maggiore e denominatore maggiori di zero:

$$
\begin{cases} x^2 - 5x + 6 > 0 \\ x - 3 > 0 \end{cases}
$$

- la prima $x^2 - 5x + 6 > 0$ è verificata per $x < 2 \cup x > 3$ [Calcoli](agedca.html)
- la seconda $x - 3 > 0$ è verificata per $x > 3$

> **Nota:** sia al numeratore che al denominatore abbiamo trovato lo stesso valore $x = 3$, quindi il mio sistema è equivalente al sistema

$$
\begin{cases} x \le 2 \cup x \ge 3 \\ x > 3 \end{cases}
$$

Se riporto su un grafico vedo che numeratore e denominatore cambiano di segno (cioè si annullano) nello stesso valore $x = 3$; questo significa che se [scompongo](../ad/ad6g.html) numeratore e denominatore posso semplificare:

$$
\frac{(x-2)(x-3)}{x - 3} > 0
$$

e quindi la mia disequazione diventa:

$x - 2 > 0$

ed ha quindi soluzione:

$\textcolor{blue}{x > 2}$

Quindi

> Quando risolvi una disequazione fratta se vedi che un valore che trovi al numeratore è uguale ad un valore che trovi al denominatore allora devi scomporre e semplificare fra loro numeratore e denominatore e quindi procedere con la disequazione semplificata

Osserva che se risolvi senza semplificare fai un errore perché trovi come soluzione:

$x > 2 \text{ con } x \neq 3$

perché devi scartare il valore $x = 3$ che annulla il denominatore.

***

Il problema sarà ripreso in analisi e vedremo che questo caso fornirà un esempio di funzione con [discontinuità eliminabile](../../c/ce/cebc.html) di tipo a)