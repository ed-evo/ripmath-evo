# Equazione della circonferenza passante per un punto e tangente a due rette assegnate

Trovare l'equazione della circonferenza passante per il punto [$$A(1,0)$${.text-blue}] e tangente alle rette [$$y = 0$${.text-blue}] e [$$y = -x$${.text-blue}].

> **Nota:** È difficile incontrare un problema del genere per le difficoltà di calcolo che si incontrano: infatti la tangenza ad una retta si traduce in una condizione di secondo grado, quindi l'equazione risolvente sarà generalmente di quarto grado; noi facciamo un caso particolare.

Prendo l'equazione generica della circonferenza:
$$
\textcolor{red}{x^2 + y^2 + ax + by + c = 0}
$$

- Prima condizione: passaggio per [$$A(1,0)$${.text-blue}]
  Sostituisco le coordinate nell'equazione della circonferenza:
  [$$1^2 + 0^2 + a(1) + b(0) + c = 0$$]{.text-blue}
  [$$1 + a + c = 0$$]{.text-blue}
  [$$a + c = -1$$]{.text-blue}

- Seconda condizione: tangenza alla retta [$$y = 0$${.text-blue}]
  Devo fare il sistema ed imporre che il delta sia uguale a zero:
  [$$
  \begin{cases}
  x^2 + y^2 + ax + by + c = 0 \\
  y = 0
  \end{cases}
  $$]{.text-blue}
  Sostituisco:
  [$$
  \begin{cases}
  x^2 + (0)^2 + ax + b(0) + c = 0 \\
  y = 0
  \end{cases}
  $$]{.text-blue}
  Calcolo l'equazione risolvente:
  [$$x^2 + ax + c = 0$$]{.text-blue}
  Pongo il delta uguale a zero:
  [$$a^2 - 4 \cdot c = 0$$]{.text-blue}
  [$$a^2 - 4c = 0$$]{.text-blue}

- Terza condizione: tangenza alla retta [$$y = -x$${.text-blue}]
  Devo fare il sistema ed imporre che il delta sia uguale a zero:
  [$$
  \begin{cases}
  x^2 + y^2 + ax + by + c = 0 \\
  y = -x
  \end{cases}
  $$]{.text-blue}
  Sostituisco:
  [$$
  \begin{cases}
  x^2 + (-x)^2 + ax + b(-x) + c = 0 \\
  y = -x
  \end{cases}
  $$]{.text-blue}
  Calcolo l'equazione risolvente:
  [$$x^2 + x^2 + ax - bx + c = 0$$]{.text-blue}
  [$$2x^2 + x(a - b) + c = 0$$]{.text-blue}
  Pongo il delta uguale a zero:
  [$$(a - b)^2 - 4 \cdot 2 \cdot c = 0$$]{.text-blue}
  [$$a^2 - 2ab + b^2 - 8c = 0$$]{.text-blue}
  [$$a^2 + b^2 - 2ab - 8c = 0$$]{.text-blue}

Le tre condizioni devono valere contemporaneamente; faccio il sistema:
[$$
\begin{cases}
a + c = -1 \\
a^2 - 4c = 0 \\
a^2 + b^2 - 2ab - 8c = 0
\end{cases}
$$]{.text-blue}

Ricavo $$c$$ dalla prima equazione e sostituisco nelle altre:
[$$
\begin{cases}
c = -1 - a \\
a^2 - 4(-1 - a) = 0 \\
b^2 - 2ab - 4(-1 - a) = 0
\end{cases}
$$]{.text-blue}

[$$
\begin{cases}
c = -1 - a \\
a^2 + 4 + 4a = 0 \\
b^2 - 2ab + 4 + 4a = 0
\end{cases}
$$]{.text-blue}

Il primo termine della seconda equazione è un quadrato:
[$$
\begin{cases}
c = -1 - a \\
(a + 2)^2 = 0 \\
b^2 - 2ab + 4 + 4a = 0
\end{cases}
$$]{.text-blue}

Risolvo la seconda equazione:
[$$
\begin{cases}
c = -1 - a \\
a = -2 \\
b^2 - 2ab + 4 + 4a = 0
\end{cases}
$$]{.text-blue}

Sostituisco il valore di $$a$$ trovato nella prima e nella terza equazione:
[$$
\begin{cases}
c = -1 + 2 \\
a = -2 \\
b^2 + 4b + 4 - 8 = 0
\end{cases}
$$]{.text-blue}

[$$
\begin{cases}
c = 1 \\
a = -2 \\
b^2 + 4b - 4 = 0
\end{cases}
$$]{.text-blue}

Risolvo la terza equazione del sistema con la formula per le equazioni di secondo grado:
[$$
\begin{cases}
c = 1 \\
a = -2 \\
b_{1,2} = -2 \pm \sqrt{2^2 + 4}
\end{cases}
$$]{.text-blue}
> **Nota:** Ho usato la formula ridotta.

[$$
\begin{cases}
c = 1 \\
a = -2 \\
b_{1,2} = -2 \pm \sqrt{8}
\end{cases}
$$]{.text-blue}
Estraggo la radice:
[$$
\begin{cases}
c = 1 \\
a = -2 \\
b_{1,2} = -2 \pm 2\sqrt{2}
\end{cases}
$$]{.text-blue}

Ottengo due soluzioni (significa che due circonferenze diverse soddisfano le condizioni richieste):

[**I Sol=**]{.text-red} [$$\begin{cases} c = 1 \\ a = -2 \\ b = -2 + 2\sqrt{2} \end{cases}$${.text-blue}] $\quad$ [**II Sol=**]{.text-red} [$$\begin{cases} c = 1 \\ a = -2 \\ b = -2 - 2\sqrt{2} \end{cases}$${.text-blue}]

Le equazioni delle due circonferenze sono:
[$$x^2 + y^2 - 2x + (-2 + 2\sqrt{2})y + 1 = 0$$]{.text-blue}
[$$x^2 + y^2 - 2x + (-2 - 2\sqrt{2})y + 1 = 0$$]{.text-blue}

Cioè:
[$$x^2 + y^2 - 2x - (2 - 2\sqrt{2})y + 1 = 0$$]{.text-blue}
[$$x^2 + y^2 - 2x - (2 + 2\sqrt{2})y + 1 = 0$$]{.text-blue}