# [esercizio]{.text-red}

Data la parabola
$$
y = x^2 - 3x + 2
$$
trovare le equazioni delle tangenti condotte alla parabola dal suo punto di ascissa $$-1$$.

***

**Soluzione:**

Prima disegniamo la parabola e poi calcoliamo le coordinate del punto: essendo l'ascissa $$-1$$ basta sostituire alla $$x$$ della parabola il valore $$-1$$ per trovare l'ordinata del punto:

$$
y = (-1)^2 - 3(-1) + 2 = 1 + 3 + 2 = 6
$$

quindi il punto (chiamiamolo $$A$$) ha coordinate $$A(-1; 6)$$.

Considero il fascio di rette passante per il punto $$A(-1; 6)$$:

$$
y - 6 = m[x - (-1)]
$$
$$
y - 6 = m(x + 1)
$$
$$
y = mx + m + 6
$$

Faccio il sistema fra il fascio di rette e la parabola:

$$
\begin{cases}
y = mx + m + 6 \\
y = x^2 - 3x + 2
\end{cases}
$$

Sostituisco il valore della $$y$$ dalla prima equazione nella seconda ed ottengo l'equazione risolvente:

$$
mx + m + 6 = x^2 - 3x + 2
$$
$$
0 = x^2 - 3x - mx - m - 6 + 2
$$

meglio:

$$
x^2 - 3x - mx - m - 6 + 2 = 0
$$

> **Nota:** usando la proprietà riflessiva dell'uguaglianza: se $$a = b$$ anche $$b = a$$.

Raccolgo ad equazione di secondo grado:

$$
x^2 - x(3 + m) - m - 4 = 0
$$

questa è l'equazione risolvente il sistema: per avere due soluzioni coincidenti devo porre il delta dell'equazione uguale a zero:

$$
\Delta = b^2 - 4ac = 0
$$

Ho:
$$
a = 1 \quad b = -(3 + m) \quad c = -m - 4
$$

$$
\Delta = b^2 - 4ac = [-(3 + m)]^2 - 4(1)(-m - 4) = 0
$$

$$
9 + 6m + m^2 + 4m + 16 = 0
$$

> **Nota:** il quadrato è sempre positivo, quindi il meno davanti alla tonda diventa più. Se non sei convinto dei segni del quadrato, fermati sul risultato.

Metto in ordine:

$$
m^2 + 10m + 25 = 0
$$

Come ti avevo detto è un quadrato perfetto (essendo il punto di tangenza formato da due punti sovrapposti in cui calcolare le tangenti la soluzione è doppia); risolvo ed ottengo:

$$
(m + 5)^2 = 0
$$
$$
m = -5 \text{ (doppia)}
$$

Ho quindi la tangente:

$$
y = mx + m + 6
$$
$$
y = (-5)x + (-5) + 6
$$
$$
y = -5x + 1
$$