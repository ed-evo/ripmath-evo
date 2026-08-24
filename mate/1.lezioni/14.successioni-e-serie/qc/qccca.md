# tipi di successioni a limite finito

> Per capirci meglio nei grafici delle successioni introduciamo il concetto di asintoto orizzontale come retta orizzontale cui si avvicinano sempre più i termini della successione senza mai toccarla;
> Per ogni esempio abbiamo varie possibilità: il limite $a$ può essere positivo, negativo o nullo: l'asintoto orizzontale $y = a$ sarà sopra, sotto oppure coinciderà con l'asse delle $x$: per avere ogni possibilità basterà alzare od abbassare la figura rispetto all'orizzontale.

Distinguiamo i casi:

## Successione decrescente con limite finito

Esempio: consideriamo

$$
2, \frac{3}{2}, \frac{4}{3}, \frac{5}{4}, \dots, \frac{n+1}{n}, \dots
$$

Essa ha come limite il valore $1$: i suoi termini si avvicinano al valore $1$ decrescendo.

Da un certo momento in poi tutti i termini della successione sono contenuti nella striscia colorata (intorno superiore di $1$ che posso restringere quanto voglio), quindi posso scrivere:

$$
\lim_{k \to \infty} \frac{k+1}{k} = 1
$$

## Successione crescente con limite finito

Esempio: consideriamo

$$
-9, -5, -3, -2, -\frac{3}{2}, -\frac{5}{4}, -\frac{7}{8}, \dots, -(\frac{1}{2})^{k-4} - 1, \dots
$$

Essa ha come limite il valore $-1$: i suoi termini si avvicinano al valore $-1$ crescendo.

Da un certo momento in poi tutti i termini della successione sono contenuti nella striscia colorata (intorno inferiore di $-1$ che posso restringere quanto voglio), quindi posso scrivere:

$$
\lim_{k \to \infty} -(\frac{1}{2})^{k-4} - 1 = -1
$$

## Successione oscillante a limite finito

Esempio: prendiamo la successione già considerata

$$
-8, +4, -2, +1, -\frac{1}{2}, +\frac{1}{4}, \dots, (-\frac{1}{2})^{n-4}, \dots
$$

Essa ha come limite il valore $0$: i suoi termini si avvicinano al valore $0$ sia dall'alto che dal basso (oscillando).

Da un certo momento in poi tutti i termini della successione sono contenuti nella striscia colorata (intorno completo di $0$ che posso restringere quanto voglio), quindi posso scrivere:

$$
\lim_{k \to \infty} (-\frac{1}{2})^{k-4} = 0
$$