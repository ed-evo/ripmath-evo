# Equazione della circonferenza passante per due punti assegnati e tangente ad una retta data

Trovare l'equazione della circonferenza passante per i punti [$$O(0,0)$$  $$A(0,4)$${.text-blue}] e tangente alla retta [$$y = x$${.text-blue}].

Prendo l'equazione generica della circonferenza:
[$$
\textcolor{red}{x^2 + y^2 + ax + by + c = 0}
$$]{.text-red}

- Prima condizione: passaggio per [$$O=(0,0)$${.text-blue}]
  Sostituisco le coordinate nell'equazione della circonferenza:
  [$$
  \textcolor{blue}{0^2 + 0^2 + a(0) + b(0) + c = 0}
  $$]{.text-blue}
  [$$
  \textcolor{blue}{c = 0}
  $$]{.text-blue}

- Seconda condizione: passaggio per [$$A=(0,4)$${.text-blue}]
  Sostituisco le coordinate nell'equazione della circonferenza:
  [$$
  \textcolor{blue}{0^2 + 4^2 + a(0) + b(4) + c = 0}
  $$]{.text-blue}
  [$$
  \textcolor{blue}{16 + 4b + c = 0}
  $$]{.text-blue}
  [$$
  \textcolor{blue}{4b + c = -16}
  $$]{.text-blue}

- Terza condizione: tangenza alla retta [$$y = x$${.text-blue}]
  Devo fare il sistema ed imporre che il delta sia uguale a zero:
  [$$
  \textcolor{blue}{\begin{cases} x^2 + y^2 + ax + by + c = 0 \\ y = x \end{cases}}
  $$]{.text-blue}
  
  Sostituisco:
  [$$
  \textcolor{blue}{\begin{cases} x^2 + (x)^2 + ax + b(x) + c = 0 \\ y = x \end{cases}}
  $$]{.text-blue}
  
  Calcolo l'equazione risolvente:
  [$$
  \textcolor{blue}{x^2 + x^2 + ax + bx + c = 0}
  $$]{.text-blue}
  [$$
  \textcolor{blue}{2x^2 + x(a + b) + c = 0}
  $$]{.text-blue}
  
  Pongo il delta uguale a zero:
  [$$
  \textcolor{blue}{(a+b)^2 - 4 \cdot 2 \cdot c = 0}
  $$]{.text-blue}
  [$$
  \textcolor{blue}{a^2 + b^2 + 2ab - 8c = 0}
  $$]{.text-blue}

Le tre condizioni devono valere contemporaneamente; faccio il sistema:
[$$
\textcolor{blue}{\begin{cases} c = 0 \\ 4b + c = -16 \\ a^2 + b^2 + 2ab - 8c = 0 \end{cases}}
$$]{.text-blue}

Sostituisco $$c = 0$$ nella seconda e nella terza:
[$$
\textcolor{blue}{\begin{cases} c = 0 \\ 4b = -16 \\ a^2 + b^2 + 2ab = 0 \end{cases}}
$$]{.text-blue}

[$$
\textcolor{blue}{\begin{cases} c = 0 \\ b = -4 \\ a^2 + (-4)^2 + 2a \cdot (-4) = 0 \end{cases}}
$$]{.text-blue}

[$$
\textcolor{blue}{\begin{cases} c = 0 \\ b = -4 \\ a^2 - 8a + 16 = 0 \end{cases}}
$$]{.text-blue}

Risolvo l'equazione di secondo grado, ottengo due soluzioni coincidenti:
[$$
\textcolor{blue}{\begin{cases} c = 0 \\ b = -4 \\ a = 4 \end{cases}}
$$]{.text-blue}

L'equazione cercata è:
[$$
\textcolor{blue}{x^2 + y^2 + 4x - 4y = 0}
$$]{.text-blue}