# [Bisettrice di un angolo]{.text-red}

La bisettrice di un angolo, definita in geometria come la retta che divide l'angolo a metà può essere definita anche come luogo geometrico:

La bisettrice di un angolo è il luogo geometrico dei punti del piano che hanno la stessa distanza dai lati dell'angolo stesso.

> **Nota:** Da notare che posso definire lo stesso luogo geometrico in vari modi: ad esempio potrei definire la bisettrice dell'angolo anche come il luogo dei punti medi delle basi dei triangoli isosceli aventi come vertice l'angolo stesso.

Troviamone l'equazione come luogo geometrico: consideriamo due rette

$r_1) ax + by + c = 0$ e $r_2) dx + ey + f = 0$

con $a, b, c, d, e, f$ valori noti e consideriamo un punto generico $P(x, y)$ del piano.

Imponiamo la condizione che la distanza fra $P$ ed $r_1$ sia uguale alla distanza fra $P$ ed $r_2$:

$$
\frac{ax + by + c}{\pm \sqrt{a^2 + b^2}} = \frac{dx + ey + f}{\pm \sqrt{d^2 + e^2}}
$$

La prendiamo come formula finale: comunque si vede che si tratta dell'equazione di una retta essendo le $x$ e le $y$ a potenza $1$; anzi le rette sono $2$; una ha i denominatori positivi oppure negativi (basta cambiare tutto di segno per vedere che sono la stessa retta), l'altra i denominatori uno positivo e l'altro negativo (o viceversa) e sono tra loro perpendicolari.

## Esempio

Trovare la bisettrice dell'angolo formato dalle rette

$r_1) 3x + 4y + 12 = 0$
$r_2) \sqrt{3}x - y + 2\sqrt{3} = 0$

Le bisettrici sono $2$, tra loro perpendicolari; per semplificare un po' troviamo la bisettrice che ha lo stesso segno ad entrambi i termini al denominatore, un analogo sviluppo con i denominatori uno positivo e l'altro negativo porterà all'altra bisettrice.

Siccome cambiando entrambi i segni al denominatore l'uguaglianza non cambia, consideriamo entrambi i denominatori positivi.

Ho $a = 3, b = 4, c = 12, d = \sqrt{3}, e = -1, f = 2\sqrt{3}$.

Applico la formula:

$$
\frac{3x + 4y + 12}{\sqrt{3^2 + 4^2}} = \frac{\sqrt{3}x - y + 2\sqrt{3}}{\sqrt{(\sqrt{3})^2 + (-1)^2}}
$$

$$
\frac{3x + 4y + 12}{\sqrt{9 + 16}} = \frac{\sqrt{3}x - y + 2\sqrt{3}}{\sqrt{3 + 1}}
$$

$$
\frac{3x + 4y + 12}{\sqrt{25}} = \frac{\sqrt{3}x - y + 2\sqrt{3}}{\sqrt{4}}
$$

$$
\frac{3x + 4y + 12}{5} = \frac{\sqrt{3}x - y + 2\sqrt{3}}{2}
$$

$$
6x + 8y + 24 = 5\sqrt{3}x - 5y + 10\sqrt{3}
$$

Essendo $6$ minore di $5\sqrt{3}$ porto tutto dopo l'uguale:

$$
0 = x(5\sqrt{3} - 6) + (-5 - 8)y + 10\sqrt{3} - 24
$$

Leggo alla rovescia e sommo dove possibile:

$$
x(5\sqrt{3} - 6) - 13y + 10\sqrt{3} - 24 = 0
$$

Questa è l'equazione della bisettrice.