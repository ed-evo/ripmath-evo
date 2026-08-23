# Esercizio

Date le parabole $$y = x^2 - 2x$$ e $$y = -x^2 + 2x$$, trovare le equazioni delle tangenti nei punti comuni alle due parabole e dire quale tipo di figura individuano tali tangenti.

***

### Soluzione

Prima disegniamo le due parabole e, facendolo, abbiamo trovato che i punti di intersezione sono:
$$O = (0, 0) \quad A = (2, 0)$$

Dovremo trovare 4 tangenti: due alla prima parabola nei punti $$O$$ ed $$A$$ e due alla seconda sempre negli stessi punti.

- Tangente alla parabola $$y = x^2 - 2x$$ nell'origine:
  Ricordando l'osservazione del problema 0 sulle tangenti di una curva in un suo punto possiamo scrivere:
  $$y = -2x$$

- Tangente alla parabola $$y = x^2 - 2x$$ nel punto $$A = (2, 0)$$:
  Considero il fascio di rette passante per il punto $$A$$:
  $$
  y - 0 = m(x - 2)
  $$
  $$
  y = mx - 2m
  $$
  Faccio il sistema fra il fascio di rette e la parabola:
  $$
  \begin{cases} y = mx - 2m \\ y = x^2 - 2x \end{cases}
  $$

  Sostituisco il valore della $$y$$ dalla prima equazione nella seconda ed ottengo l'equazione risolvente:
  $$
  mx - 2m = x^2 - 2x
  $$
  $$
  0 = x^2 - 2x - mx + 2m
  $$
  Meglio:
  $$
  x^2 - 2x - mx + 2m = 0
  $$
  (usando la proprietà riflessiva dell'uguaglianza: se $$a = b$$ anche $$b = a$$)

  Raccolgo ad equazione di secondo grado:
  $$
  x^2 - x(2 + m) + 2m = 0
  $$
  Questa è l'equazione risolvente il sistema: per avere due soluzioni coincidenti devo porre il delta dell'equazione uguale a zero:
  $$
  \Delta = b^2 - 4ac = 0
  $$
  Ho:
  $$
  a = 1 \quad b = -(2 + m) \quad c = 2m
  $$
  $$
  \Delta = b^2 - 4ac = [-(2 + m)]^2 - 4(1)(2m) = 0
  $$
  $$
  4 + 4m + m^2 - 8m = 0
  $$
  > **Nota:** Se non sei convinto dei segni del quadrato, ferma il mouse sul risultato.

  Calcolo:
  $$
  m^2 - 4m + 4 = 0
  $$
  Come ti avevo detto è un quadrato perfetto (essendo il punto di tangenza formato da due punti sovrapposti in cui calcolare le tangenti la soluzione è doppia); risolvo ed ottengo:
  $$
  (m - 2)^2 = 0
  $$
  $$
  m = 2 \text{ (doppia)}
  $$
  Ho quindi la tangente:
  $$
  y = 2x - 4
  $$

- Tangente alla parabola $$y = -x^2 + 2x$$ nell'origine:
  Ricordando l'osservazione del problema 0 sulle tangenti di una curva in un suo punto possiamo scrivere:
  $$
  y = 2x
  $$

- Tangente alla parabola $$y = -x^2 + 2x$$ nel punto $$A = (2, 0)$$:
  Considero il fascio di rette passante per il punto $$A$$:
  $$
  y - 0 = m(x - 2)
  $$
  $$
  y = mx - 2m
  $$
  Faccio il sistema fra il fascio di rette e la parabola:
  $$
  \begin{cases} y = mx - 2m \\ y = -x^2 + 2x \end{cases}
  $$

  Sostituisco il valore della $$y$$ dalla prima equazione nella seconda ed ottengo l'equazione risolvente:
  $$
  mx - 2m = -x^2 + 2x
  $$
  $$
  x^2 - 2x + mx - 2m = 0
  $$
  $$
  x^2 - x(2 - m) - 2m = 0
  $$
  Questa è l'equazione risolvente il sistema: per avere due soluzioni coincidenti devo porre il delta dell'equazione uguale a zero:
  $$
  \Delta = b^2 - 4ac = 0
  $$
  Ho:
  $$
  a = 1 \quad b = -(2 - m) \quad c = -2m
  $$
  $$
  \Delta = b^2 - 4ac = [-(2 - m)]^2 - 4(1)(-2m) = 0
  $$
  $$
  4 - 4m + m^2 + 8m = 0
  $$
  > **Nota:** Se non sei convinto dei segni del quadrato, ferma il mouse sul risultato.

  Calcolo:
  $$
  m^2 + 4m + 4 = 0
  $$
  Come ti avevo detto è un quadrato perfetto (essendo il punto di tangenza formato da due punti sovrapposti in cui calcolare le tangenti la soluzione è doppia); risolvo ed ottengo:
  $$
  (m + 2)^2 = 0
  $$
  $$
  m = -2 \text{ (doppia)}
  $$
  Ho quindi la tangente:
  $$
  y = -2x + 4
  $$

Ora se osservo le equazioni delle tangenti:
$$
y = -2x
$$
$$
y = 2x - 4
$$
$$
y = 2x
$$
$$
y = -2x + 4
$$
vedo che le rette hanno due a due gli stessi coefficienti angolari, cioè:
$$y = -2x$$ e $$y = -2x + 4$$ sono tra loro parallele (coefficienti angolari $$m_1 = m_2 = -2$$)
$$y = 2x - 4$$ e $$y = 2x$$ sono tra loro parallele (coefficienti angolari $$m_1 = m_2 = 2$$)

Pertanto, senza procedere oltre posso dire che il quadrilatero, avendo i lati due a due paralleli, è un parallelogramma.

***

> **Esercizio aggiuntivo:** Per continuare l'esercizio prova a dimostrare che si tratta di un rombo seguendo la definizione.