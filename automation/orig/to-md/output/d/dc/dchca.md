# [Asse di un segmento]{.text-red}

L'asse di un segmento, definito in geometria come la perpendicolare condotta al segmento nel suo punto di mezzo può essere definito anche come luogo geometrico:

L'asse di un segmento è il luogo geometrico dei punti del piano che hanno la stessa distanza dagli estremi del segmento.

> **Nota:** Da notare che posso definire lo stesso luogo geometrico in vari modi: ad esempio potrei definire l'asse del segmento anche come il luogo dei vertici dei triangoli isosceli aventi come base il segmento stesso ed altezza variabile.

Per ricavare l'equazione dell'asse di un segmento conoscendone gli estremi potremmo calcolarne il punto medio, calcolare l'equazione della retta passante per gli estremi del segmento (retta su cui giace il segmento) quindi calcolare la perpendicolare condotta a tale retta nel punto medio trovato.

Qui invece troviamone l'equazione come luogo geometrico:
consideriamo un segmento di estremi $A(x_1; y_1)$ e $B(x_2; y_2)$ con $x_1, y_1, x_2, y_2$ valori noti.
Consideriamo poi un punto generico $P(x; y)$.
Imponiamo la condizione che la distanza $PA$ sia uguale alla distanza $PB$.

$$
PA = PB
$$

$$
\sqrt{(x-x_1)^2 + (y-y_1)^2} = \sqrt{(x-x_2)^2 + (y-y_2)^2}
$$

Elevo al quadrato entrambi i membri così spariscono le radici:

$$
(x-x_1)^2 + (y-y_1)^2 = (x-x_2)^2 + (y-y_2)^2
$$

$$
x^2 - 2xx_1 + x_1^2 + y^2 - 2yy_1 + y_1^2 = x^2 - 2xx_2 + x_2^2 + y^2 - 2yy_2 + y_2^2
$$

Elimino i termini uguali da parti opposte dell'uguale:

$$
-2xx_1 + x_1^2 - 2yy_1 + y_1^2 = -2xx_2 + x_2^2 - 2yy_2 + y_2^2
$$

Porto tutto prima dell'uguale:

$$
-2xx_1 + x_1^2 - 2yy_1 + y_1^2 + 2xx_2 - x_2^2 + 2yy_2 - y_2^2 = 0
$$

Ora raccolgo tra loro i termini con la $x$, i termini con la $y$ ed infine i termini noti:

$$
x(-2x_1 + 2x_2) + y(-2y_1 + 2y_2) + (x_1^2 + y_1^2 - x_2^2 - y_2^2)
$$

La rendo un poco più "elegante" ed ottengo la formula finale:

$$
2x(x_2 - x_1) + 2y(y_2 - y_1) + (x_1^2 + y_1^2 - x_2^2 - y_2^2) = 0
$$

È l'equazione di una retta in forma implicita.

> **Esempio:**
> Trovare l'asse del segmento di estremi $A(1; 2)$ e $B(3; 4)$.
> Ho $x_1 = 1$, $y_1 = 2$, $x_2 = 3$, $y_2 = 4$.
> Applico la formula:
>
> $$
> 2x(3-1) + 2y(4-2) + (1^2 + 2^2 - 3^2 - 4^2) = 0
> $$
>
> $$
> 2x(2) + 2y(2) + (1 + 4 - 9 - 16) = 0
> $$
>
> $$
> 4x + 4y - 20 = 0
> $$
>
> Semplifico per $4$:
>
> $$
> x + y - 5 = 0
> $$
>
> In forma esplicita:
>
> $$
> y = -x + 5
> $$