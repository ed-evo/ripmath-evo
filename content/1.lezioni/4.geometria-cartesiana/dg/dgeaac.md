# [esercizio]{.text-red}

Data la parabola $$y = x^2 + 1$$, trovare le equazioni delle tangenti condotte alla parabola dall'origine $$O(0,0)$$ e, indicati con $$A$$ e $$B$$ i punti in cui tali tangenti toccano la parabola, trovare l'area del triangolo $$OAB$$.

---

Soluzione:

Prima disegniamo la parabola. Considero poi il fascio di rette passante per l'origine $$O(0,0)$$:

$$
y - 0 = m(x - 0)
$$
$$
y = mx
$$

Faccio il sistema fra il fascio di rette e la parabola:

$$
\begin{cases} y = mx \\ y = x^2 + 1 \end{cases}
$$

Sostituisco il valore della $$y$$ dalla prima equazione nella seconda ed ottengo l'equazione risolvente:

$$
mx = x^2 + 1
$$
$$
x^2 - mx + 1 = 0
$$

Questa è l'equazione risolvente il sistema: per avere due soluzioni coincidenti devo porre il delta dell'equazione uguale a zero:

$$
\Delta = b^2 - 4ac = 0
$$

Ho:
$$a = 1$$, $$b = -m$$, $$c = 1$$

$$
\Delta = b^2 - 4ac = m^2 - 4(1)(1) = 0
$$
$$
m^2 - 4 = 0
$$
$$
m^2 = 4
$$

Risolvo ed ottengo:

$$
m_1 = -2
$$
$$
m_2 = +2
$$

Ho quindi le due tangenti:

- Prima tangente: $$y = -2x$$
- Seconda tangente: $$y = 2x$$

Ora devo trovare i punti di tangenza: è sufficiente risolvere il sistema tangente-parabola.

- **Primo sistema**
  $$
  \begin{cases} y = 2x \\ y = x^2 + 1 \end{cases}
  $$
  $$
  \begin{cases} y = 2x \\ 2x = x^2 + 1 \end{cases}
  $$
  $$
  \begin{cases} \dots \\ x^2 - 2x + 1 = 0 \end{cases}
  $$
  $$
  \begin{cases} \dots \\ (x - 1)^2 = 0 \end{cases}
  $$

  Essendo la tangente la soluzione è doppia (delta uguale a zero e si tratta di un quadrato perfetto):
  $$
  \begin{cases} y = 2x \\ x - 1 = 0 \end{cases}
  $$
  $$
  \begin{cases} y = 2(1) \\ x = 1 \end{cases}
  $$
  $$
  \begin{cases} y = 2 \\ x = 1 \end{cases}
  $$
  Il primo punto è [**$$A=(1,2)$$**]{.text-red}.

- **Secondo sistema**
  $$
  \begin{cases} y = -2x \\ y = x^2 + 1 \end{cases}
  $$
  $$
  \begin{cases} y = -2x \\ -2x = x^2 + 1 \end{cases}
  $$
  $$
  \begin{cases} \dots \\ x^2 + 2x + 1 = 0 \end{cases}
  $$
  $$
  \begin{cases} \dots \\ (x + 1)^2 = 0 \end{cases}
  $$

  Essendo la tangente la soluzione è doppia (delta uguale a zero e si tratta di un quadrato perfetto):
  $$
  \begin{cases} y = -2x \\ x + 1 = 0 \end{cases}
  $$
  $$
  \begin{cases} y = -2(-1) \\ x = -1 \end{cases}
  $$
  $$
  \begin{cases} y = 2 \\ x = -1 \end{cases}
  $$
  Il secondo punto è [**$$B=(-1,2)$$**]{.text-red}.

Devo ora trovare l'area del triangolo $$OAB$$. Ho i dati:
$$O = (0,0)$$, $$A = (1,2)$$, $$B = (-1,2)$$

---

> Come metodo normale dovrei trovare prima la distanza fra due punti e considerarla base del triangolo, considerare poi la retta su cui ho preso tale distanza (retta per due punti), quindi dal terzo punto considerare la distanza punto-retta che sarebbe l'altezza del triangolo e quindi applicare la formula **base per altezza diviso due**. Ma in questo caso, se osservi la figura, puoi prendere come base il segmento orizzontale $$AB$$, cioè la somma (in valore assoluto) delle ascisse, e come altezza avremo il segmento che da $$O$$ è perpendicolare ad $$AB$$, cioè l'ordinata di uno dei due punti $$A$$ e $$B$$.

---

Abbiamo:
$$AB = |-1| + |1| = 1 + 1 = 2$$
(per $$|-1|$$ si intende il modulo)

Altezza triangolo = $$2$$

$$
\text{Area}(ABO) = \frac{AB \cdot \text{altezza}}{2} = \frac{2 \cdot 2}{2} = 2
$$

L'area del triangolo $$ABO$$ vale due unità quadrate del piano.