# [esercizio]{.text-red}

Trovare l'equazione della parabola con asse verticale che passa per i punti [$A=(4, 0)$]{.text-blue}, [$B=(1, -3)$]{.text-blue} ed è tangente alla retta [$y = -4$]{.text-blue}.
L'equazione generica della parabola con asse verticale è
[$y = ax^2 + bx + c$]{.text-blue}

- Condizione di passaggio per il punto [$$A = (4, 0)$]{.text-blue}
  Sostituisco a $x$ il valore $4$ ed a $y$ il valore $0$
  [$0 = a \cdot 4^2 + b \cdot 4 + c$]{.text-blue}
  Quindi la condizione richiesta è
  [$16a + 4b + c = 0$]{.text-red}

- Condizione di passaggio per il punto [$$B = (1, -3)$]{.text-blue}
  Sostituisco a $x$ il valore $1$ ed a $y$ il valore $-3$
  [$-3 = a \cdot 1^2 + b \cdot 1 + c$]{.text-blue}
  Quindi la condizione richiesta è
  [$a + b + c = -3$]{.text-red}

- Condizione di tangenza alla retta [$y = -4$]{.text-blue}
  Devo fare il sistema fra la retta e la parabola e quindi porre il delta dell'equazione risolvente uguale a zero:

  $$
  \begin{cases} 
  y = ax^2 + bx + c \\
  y = -4 
  \end{cases}
  $$

  Sostituisco $y = -4$ nella prima equazione:

  $$
  \begin{cases} 
  -4 = ax^2 + bx + c 
  \end{cases}
  $$

  $$
  \begin{cases} 
  ax^2 + bx + (c+4) = 0 
  \end{cases}
  $$

  Calcolo il delta dell'equazione risolvente e lo pongo uguale a zero:
  [$\Delta = b^2 - 4a(c+4) = 0$]{.text-blue}
  [$b^2 - 4ac - 16a = 0$]{.text-blue}

  Quindi la condizione richiesta è
  [$b^2 - 4ac - 16a = 0$]{.text-red}

Poiché le tre condizioni devono valere contemporaneamente facciamo il [sistema]{.text-red} per trovare le incognite [$a$]{.text-red}, [$b$]{.text-red} e [$c$]{.text-red}:

$$
\begin{cases} 
16a + 4b + c = 0 \\
a + b + c = -3 \\
b^2 - 4ac - 16a = 0 
\end{cases}
$$

Sostituisco il valore di $c$ ricavato dalla seconda equazione nella prima e terza equazione:

$$
\begin{cases} 
16a + 4b + (-a - b - 3) = 0 \\
c = -a - b - 3 \\
b^2 - 4a(-a - b - 3) - 16a = 0 
\end{cases}
$$

Calcolo:

$$
\begin{cases} 
16a + 4b - a - b - 3 = 0 \\
b^2 + 4a^2 + 4ab + 12a - 16a = 0 
\end{cases}
$$

$$
\begin{cases} 
15a + 3b - 3 = 0 \\
b^2 + 4a^2 + 4ab - 4a = 0 
\end{cases}
$$

Posso semplificare per $3$ la prima equazione:

$$
\begin{cases} 
5a + b - 1 = 0 \\
b^2 + 4a^2 + 4ab - 4a = 0 
\end{cases}
$$

Ricavo $b$ dalla prima equazione e sostituisco nella terza:

$$
\begin{cases} 
b = 1 - 5a \\
(1 - 5a)^2 + 4a^2 + 4a(1 - 5a) - 4a = 0 
\end{cases}
$$

$$
\begin{cases} 
1 - 10a + 25a^2 + 4a^2 + 4a - 20a^2 - 4a = 0 
\end{cases}
$$

$$
\begin{cases} 
9a^2 - 10a + 1 = 0 
\end{cases}
$$

Risolvendo l'equazione ottengo due soluzioni:
[$a = 1$]{.text-blue} $\quad$ [$a = 1/9$]{.text-blue}

Significa che sono due le parabole che soddisfano le condizioni date; troviamole:

- Prima parabola: sostituisco ad $a$ il valore $1$
  $$
  \begin{cases} 
  b = 1 - 5(1) = -4 \\
  a = 1 
  \end{cases}
  $$

  $$
  \begin{cases} 
  b = -4 \\
  c = -1 - (-4) - 3 = 0 \\
  a = 1 
  \end{cases}
  $$

  $$
  \begin{cases} 
  b = -4 \\
  c = 0 \\
  a = 1 
  \end{cases}
  $$

  Ordino:
  $$
  \begin{cases} 
  a = 1 \\
  b = -4 \\
  c = 0 
  \end{cases}
  $$

  Quindi la prima parabola è [$y = x^2 - 4x$]{.text-blue}.

- Seconda parabola: sostituisco ad $a$ il valore $1/9$
  $$
  \begin{cases} 
  b = 1 - 5(1/9) = 1 - 5/9 = 4/9 \\
  a = 1/9 
  \end{cases}
  $$

  $$
  \begin{cases} 
  b = 4/9 \\
  c = -1/9 - 4/9 - 3 = -32/9 \\
  a = 1/9 
  \end{cases}
  $$

  $$
  \begin{cases} 
  b = 4/9 \\
  c = -32/9 \\
  a = 1/9 
  \end{cases}
  $$

  Ordino:
  $$
  \begin{cases} 
  a = 1/9 \\
  b = 4/9 \\
  c = -32/9 
  \end{cases}
  $$

  Quindi la seconda parabola è:
  [$y = 1/9 x^2 + 4/9 x - 32/9$]{.text-blue}
  [$9y = x^2 + 4x - 32$]{.text-blue}