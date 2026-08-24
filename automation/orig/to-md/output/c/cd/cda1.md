# [Esercizi sulla definizione di limite]{.text-red}

Intuitivamente, quando l'intervallo sulla $y$ $|f(x)-l|$ diventa piccolissimo $\epsilon$ anche l'intervallo sulla $x$ $|x-x_0|$ diventa minore di una quantità dipendente dal primo $\delta_\epsilon$ e questo sarà il metodo che useremo negli esercizi.

Iniziamo da un esercizio molto semplice: ad esempio proviamo a dimostrare che:

$$
\lim_{x \to 3} x+2=5
$$

Devo dimostrare che se prendo un intorno del punto $5$ sulle $y$ avrò in corrispondenza un intorno del punto $3$ sulle $x$ tali che quando si stringe il primo intorno si stringe anche il secondo: cioè

$|f(x)-l| < \epsilon \implies |x-x_0| < \delta_\epsilon$

Faccio la funzione meno il limite in modulo:

$$
|(x+2)-5| < \epsilon
$$

> [Il significato del modulo è che ciò che è dentro ha valore positivo, cioè se è positivo resta lo stesso segno, se è negativo devo cambiarlo di segno in modo che diventi positivo.]{.text-blue}

Ciò significa che il termine dentro il modulo deve essere più grande di $-\epsilon$ e minore di $\epsilon$, quindi posso scrivere:

$$
x+2-5 < \epsilon \quad \text{e} \quad x+2-5 > -\epsilon
$$

Oppure utilizzando una notazione divenuta ormai di uso comune:

$$
-\epsilon < x+2-5 < \epsilon
$$

(ricordando però che si tratta di due disequazioni da risolvere contemporaneamente).

Risolviamo:

$$
-\epsilon < x-3 < \epsilon
$$

(porto il $-3$ dall'altra parte nelle due disequazioni cambiandolo di segno).

$$
3-\epsilon < x < 3+\epsilon
$$

e questo è un intorno del punto $3$ sulle $x$ e se $\epsilon$ diventa piccolo anche l'intervallo si stringe, quindi il limite è proprio $5$.