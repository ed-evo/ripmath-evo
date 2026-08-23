# esercizio

Data la parabola
$$y = x^2 - 6x + 5$$
trovare le equazioni delle tangenti condotte alla parabola dal punto $$A(-1, -3)$$

---

Soluzione:

Prima disegniamo la parabola ed il punto. Considero il fascio di rette passante per il punto $$A(-1, -3)$$:

$$
y - (-3) = m[x - (-1)]
$$
$$
y + 3 = m(x + 1)
$$

Faccio il sistema fra il fascio di rette e la parabola:

$$
\begin{cases} y + 3 = m(x + 1) \\ y = x^2 - 6x + 5 \end{cases}
$$

$$
\begin{cases} y = mx + m - 3 \\ y = x^2 - 6x + 5 \end{cases}
$$

Sostituisco il valore della $$y$$ dalla prima equazione nella seconda ed ottengo l'equazione risolvente:

$$
mx + m - 3 = x^2 - 6x + 5
$$
$$
0 = x^2 - 6x - mx - m + 5 + 3
$$

Meglio:

$$
x^2 - 6x - mx - m + 5 + 3 = 0
$$

> **Nota:** usando la proprietà riflessiva dell'uguaglianza: se $$a = b$$ anche $$b = a$$

Raccolgo ad equazione di secondo grado:

$$
x^2 - x(6 + m) - m + 8 = 0
$$

Questa è l'equazione risolvente il sistema: per avere due soluzioni coincidenti devo porre il delta dell'equazione uguale a zero:

$$
\Delta = b^2 - 4ac = 0
$$

Ho:
$$a = 1 \quad b = -(6 + m) \quad c = -m + 8$$

$$
\Delta = b^2 - 4ac = [-(6 + m)]^2 - 4(1)(-m + 8) = 0
$$

$$
36 + 12m + m^2 + 4m - 32 = 0
$$

> **Nota:** il quadrato è sempre positivo, quindi il meno davanti alla tonda diventa più.

Metto in ordine:

$$
m^2 + 16m + 4 = 0
$$

Risolvo l'equazione di secondo grado ed ottengo:

$$
m_1 = -8 - 2\sqrt{15}
$$
$$
m_2 = -8 + 2\sqrt{15}
$$

Ho quindi le due tangenti:

- Prima tangente
  $$y + 3 = (-8 - 2\sqrt{15})(x + 1)$$
  $$y = (-8 - 2\sqrt{15})x - 8 - 2\sqrt{15} - 3$$
  $$\textcolor{red}{y = (-8 - 2\sqrt{15})x - 11 - 2\sqrt{15}}$$

- Seconda tangente
  $$y + 3 = (-8 + 2\sqrt{15})(x + 1)$$
  $$y = (-8 + 2\sqrt{15})x - 8 + 2\sqrt{15} - 3$$
  $$\textcolor{red}{y = (-8 + 2\sqrt{15})x - 11 + 2\sqrt{15}}$$

---