# Determinazione dei punti base di una famiglia di parabole

Se consideriamo due parabole qualunque della famiglia e ne facciamo l'intersezione, e troviamo le coordinate di due punti, questi saranno chiamati **punti base** della famiglia.

Teoricamente, per trovare i punti base di una famiglia di parabole partiamo dall'equazione: dividiamo i termini contenenti la $k$ da quelli senza $k$ e scriviamo:

$$
y = àx^2 + b'x + c' + k(à'x^2 + b''x + c'')
$$

Consideriamo il polinomio che è moltiplicato per $k$ e poniamolo uguale a zero:

$$
à'x^2 + b''x + c'' = 0
$$

Otteniamo un'equazione di secondo grado le cui soluzioni sono le ascisse dei punti base del fascio e, sostituendo tali valori nell'equazione della famiglia, troviamo le ordinate corrispondenti.

> **Nota:** Infatti sostituendo il valore delle $x$ trovate nell'equazione della famiglia le ordinate corrispondenti non dipendono più dal valore di $k$ perché i valori trovati annullano il secondo polinomio e quindi i punti trovati appartengono ad ogni parabola della famiglia indipendentemente dal valore di $k$.

Data la famiglia di parabole di equazione:

$$
y = (1-k)x^2 - kx + 2k - 4
$$

trovarne le coordinate dei punti base.

Voglio suddividere i termini con la $k$ da quelli senza la $k$: eseguo la moltiplicazione:

$$
y = x^2 - kx^2 - kx + 2k - 4
$$

Separo i termini con la $k$ da quelli senza la $k$:

$$
y = x^2 - 4 - kx^2 - kx + 2k
$$

Raccolgo la $k$:

$$
y = x^2 - 4 + k(-x^2 - x + 2)
$$

Pongo:

$$
-x^2 - x + 2 = 0
$$

Essendo uguale a zero posso cambiare di segno tutti i termini:

$$
x^2 + x - 2 = 0
$$

Risolvo ed ottengo:

$$
x_1 = -2 \quad x_2 = 1
$$

Ora sostituisco tali valori nell'equazione della famiglia: il secondo polinomio si annulla:

$$
y_1 = (-2)^2 - 4 + k(0) = +4 - 4 = 0
$$
$$
y_2 = (1)^2 - 4 + k(0) = 1 - 4 = -3
$$

Quindi i punti base del fascio sono:

Prima soluzione:
$$
\begin{cases} x = -2 \\ y = 0 \end{cases}
$$

Seconda soluzione:
$$
\begin{cases} x = 1 \\ y = -3 \end{cases}
$$

La caratteristica di tali punti, se esistono, è che ogni parabola della famiglia passa per essi.

> **Nota:** Due parabole possono avere in comune $2$ punti, od uno solo oppure nessuno, quindi non sempre potremo trovare i punti base.

Qui di fianco un grafico (molto approssimato) con i punti base $A \equiv (-2; 0)$ e $B \equiv (1; -3)$ e con alcune parabole:

- la parabola degenere, cioè la retta $y = -x - 1$
- la parabola per $k = 0$: $y = x^2 - 4$
- la parabola per $k = 2$ (valore preso a caso come esempio): $y = (1-2)x^2 - (2)x + 2(2) - 4$, cioè:
$$
y = -x^2 - 2x
$$