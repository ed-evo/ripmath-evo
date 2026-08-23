Calcolare il valore dell'integrale

$$
\int \frac{4}{x^2 + 4x + 5} dx =
$$

> Osserviamo che al denominatore la funzione $$x^2 + 4x + 5$$ si può pensare come $$x^2 + 4x + 4 + 1$$, cioè come $$(x+2)^2 + 1$$ e siccome la derivata di $$x+2$$ vale $$1$$ possiamo applicare la formula:

$$
\int \textcolor{blue}{\frac{f'(x)}{1 + [f(x)]^2} dx = \arctan[f(x)] + c}
$$

Quindi avremo

$$
= \int \frac{4}{(x+2)^2 + 1} dx = 4 \arctan(x+2) + c
$$