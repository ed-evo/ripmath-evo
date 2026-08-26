# Interpolazione inversa

Si parla di interpolazione inversa quando, conoscendo il risultato $y_0$ si vuole risalire al valore $x_0$ della prima tabella.

In pratica, dalla proporzione di partenza dobbiamo ricavare $x_0$ invece di $y_0$:

$$
(x_2 - x_1):(y_2 - y_1) = (x_0 - x_1):(y_0 - y_1)
$$

Devo trovare $x_0$, prima risolvo la proporzione:

$$
x_0 - x_1 = \frac{(x_2 - x_1) \cdot (y_0 - y_1)}{y_2 - y_1}
$$

Ora trovo $x_0$ ed ottengo la formula dell'interpolazione inversa:

$$
x_0 = \frac{(x_2 - x_1) \cdot (y_0 - y_1)}{y_2 - y_1} + x_1
$$

Di solito, senza ricordare le formule a memoria, si preferisce partire sempre dalla proporzione e poi fare i calcoli; facciamo comunque un esercizio applicando la formula.

> **Esercizio:**
> 
> Vediamo di applicare la formula trovata all'esempio precedente.
> Ho come dati:
> 
> | Numeri | cubi |
> | :--- | :--- |
> | $124$ | $1906624$ |
> | $125$ | $1953125$ |
> 
> Dato il valore del cubo $1939096,223$, essendo tale numero nella tabella compreso tra $1906624$ e $1953125$, devo trovare a quale $x_0$ esso corrisponde;
> $x_0 \rightarrow 1939096,223$
> 
> | Numeri | cubi |
> | :--- | :--- |
> | $124$ | $1906624$ |
> | $x_0$ | $1939096,223$ |
> | $125$ | $1953125$ |
> 
> $x_0 \rightarrow 1939096,223$
> 
> Dati: $x_1 = 124$, $y_1 = 1906624$, $x_2 = 125$, $y_2 = 1953125$, $y_0 = 1939096,223$
> 
> Applico la formula:
> 
> $$
> x_0 = \frac{(x_2 - x_1) \cdot (y_0 - y_1)}{y_2 - y_1} + x_1 = \frac{1 \cdot (1939096,223 - 1906624)}{1953125 - 1906624} + 124
> $$
> 
> $$
> = \frac{32472,223}{46501} + 124 = 0,698312359 + 124 = 124,698312359
> $$
> 
> Come vedi il risultato è molto vicino a $124,7$.