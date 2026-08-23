# esercizio

Data la parabola
**$$y = -x^2 + 6x$$**
trovare le equazioni delle tangenti condotte alla parabola dal punto **$$A(-2,0)$$** e determinarne i punti di tangenza

***

Soluzione:

Prima disegniamo la parabola ed il punto $$A(-2,0)$$.
Considero il fascio di rette passante per il punto $$A(-2,0)$$:

**$$y - 0 = m(x + 2)$$**
**$$y = mx + 2m$$**

Faccio il sistema fra il fascio di rette e la parabola:

$$
\begin{cases}
y = mx + 2m \\
y = -x^2 + 6x
\end{cases}
$$

Sostituisco il valore della $$y$$ dalla prima equazione nella seconda ed ottengo l'equazione risolvente:

**$$mx + 2m = -x^2 + 6x$$**
**$$x^2 - 6x + mx + 2m = 0$$**

Ordino:

**$$x^2 - x(6 - m) + 2m = 0$$**

Questa è l'equazione risolvente il sistema: per avere due soluzioni coincidenti devo porre il delta dell'equazione uguale a zero:

**$$\Delta = b^2 - 4ac = 0$$**

Ho:
**$$a = 1$$**
**$$b = -6 + m$$**
**$$c = 2m$$**

**$$\Delta = b^2 - 4ac = (-6 + m)^2 - 4(1)(2m) = 0$$**

**$$36 - 12m + m^2 - 8m = 0$$**

Metto in ordine:

**$$m^2 - 20m + 36 = 0$$**

Risolvo l'equazione di secondo grado ed ottengo:

**$$m_1 = 2$$**
**$$m_2 = 18$$**

Ho quindi le due tangenti:

- Prima tangente:
  **$$y = 2x + 4$$**
- Seconda tangente:
  **$$y = 18x + 36$$**

Ora devo trovare i punti di tangenza: è sufficiente risolvere il sistema tangente-parabola.

- Primo sistema:
$$
\begin{cases}
y = 2x + 4 \\
y = -x^2 + 6x
\end{cases}
$$

$$
\begin{cases}
y = 2x + 4 \\
2x + 4 = -x^2 + 6x
\end{cases}
$$

$$
\begin{cases}
\text{---} \\
x^2 - 6x + 2x + 4 = 0
\end{cases}
$$

$$
\begin{cases}
\text{---} \\
x^2 - 4x + 4 = 0
\end{cases}
$$

$$
\begin{cases}
\text{---} \\
(x - 2)^2 = 0
\end{cases}
$$

> **Nota:** Essendo la tangente la soluzione è doppia (delta uguale a zero e si tratta di un quadrato perfetto)

$$
\begin{cases}
y = 2x + 4 \\
x - 2 = 0
\end{cases}
$$

$$
\begin{cases}
y = 2(2) + 4 \\
x = 2
\end{cases}
$$

$$
\begin{cases}
y = 8 \\
x = 2
\end{cases}
$$

Il primo punto è $$\textcolor{red}{(2,8)}$$.

- Secondo sistema:
$$
\begin{cases}
y = 18x + 36 \\
y = -x^2 + 6x
\end{cases}
$$

$$
\begin{cases}
y = 18x + 36 \\
18x + 36 = -x^2 + 6x
\end{cases}
$$

$$
\begin{cases}
\text{---} \\
x^2 - 6x + 18x + 36 = 0
\end{cases}
$$

$$
\begin{cases}
\text{---} \\
x^2 + 12x + 36 = 0
\end{cases}
$$

$$
\begin{cases}
\text{---} \\
(x + 6)^2 = 0
\end{cases}
$$

> **Nota:** Essendo la tangente la soluzione è doppia (delta uguale a zero e si tratta di un quadrato perfetto)

$$
\begin{cases}
y = 18x + 36 \\
x + 6 = 0
\end{cases}
$$

$$
\begin{cases}
y = 18(-6) + 36 \\
x = -6
\end{cases}
$$

$$
\begin{cases}
y = -72 \\
x = -6
\end{cases}
$$

Il secondo punto è $$\textcolor{red}{(-6, -72)}$$.

> **Nota:** Naturalmente è fuori grafico.

***