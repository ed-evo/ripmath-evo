# Densità media

Sia $X$ una variabile casuale continua che assuma tutti i valori reali compresi nell'intervallo $[a; b]$.
Sia $F(x)$ una funzione che indica che la variabile casuale assume valori inferiori o uguali ad $x$ (in pratica una funzione che equivalga ad una parte della funzione di ripartizione partendo da sinistra: nella funzione a fianco è la parte colorata in azzurro).

$$
F(x) = \Pr(X \le x)
$$

Con questa definizione avremo allora che:

$1 - F(x)$ è la probabilità contraria, cioè la probabilità che la variabile casuale $X$ assuma un valore maggiore di $x$, cioè quello che resta togliendo la parte azzurra.

$F(x_1)$ è la probabilità che la variabile casuale assuma un valore minore o uguale ad $x_1$.

$F(x_2)$ è la probabilità che la variabile casuale assuma un valore minore o uguale ad $x_2$.

**$F(x_2) - F(x_1)$, variazione della funzione di ripartizione**, è la probabilità che la variabile casuale assuma un valore compreso tra $x_1$ ed $x_2$ con $x_1$ escluso: $x_1 < x \le x_2$. Nella figura a fianco è la parte colorata in grigio.

> Come ti starai rendendo conto, cerchiamo di metterci nell'ottica del concetto di derivata.

Adesso definiamo la **densità media di probabilità** come il rapporto fra $F(x_2) - F(x_1)$ ed $x_2 - x_1$, cioè la variazione della $F(x)$ rispetto alla variazione della $x$.

[Densità media di probabilità]{.text-red}
$$
\textcolor{red}{\frac{F(x_2) - F(x_1)}{x_2 - x_1}}
$$

Questo indica come la probabilità si distribuisce nell'intervallo considerato nell'ipotesi che la distribuzione avvenga in modo uniforme (senza salti). Naturalmente, per poter essere un'indicazione significativa, dovremo considerare un intervallo abbastanza piccolo $[x; x + \Delta x]$, in tal modo otterremo la velocità di variazione della $F(x)$ al variare della $x$ (velocità all'istante).

[Densità media di probabilità]{.text-red}
$$
\textcolor{red}{\frac{F(x + \Delta x) - F(x)}{\Delta x}}
$$

> Da notare che è lo stesso ragionamento che si fa in fisica per calcolare la velocità media, la velocità istantanea e quindi la velocità come funzione derivata dello spazio rispetto al tempo.