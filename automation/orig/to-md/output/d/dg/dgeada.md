## [esercizio]{.text-red}

Date le parabole $$y = x^2 + 2x - 2$$ e $$y = -x^2 + 6x - 4$$ verificare che sono tangenti nel loro punto comune.

Soluzione:
Intanto disegniamo le due parabole. Due parabole sono tangenti fra loro se hanno la stessa tangente nel punto comune, quindi prima trovo il punto comune, poi calcolo la tangente in questo punto per ognuna delle due parabole e controllo che siano identiche.

Faccio il sistema fra le due parabole:

$$
\begin{cases}
y = x^2 + 2x - 2 \\
y = -x^2 + 6x - 4
\end{cases}
$$

Sostituisco il valore della $$y$$ dalla prima equazione nella seconda ed ottengo:

$$
\begin{cases}
y = x^2 + 2x - 2 \\
x^2 + 2x - 2 = -x^2 + 6x - 4
\end{cases}
$$

$$
\begin{cases}
2x^2 - 4x + 2 = 0
\end{cases}
$$

Divido tutti i termini per $$2$$:

$$
\begin{cases}
x^2 - 2x + 1 = 0
\end{cases}
$$

$$
\begin{cases}
(x - 1)^2 = 0
\end{cases}
$$

$$
\begin{cases}
y = (1)^2 + 2(1) - 2 \\
x = 1
\end{cases}
$$ (soluzione doppia)

$$
\begin{cases}
y = 1 \\
x = 1
\end{cases}
$$ (soluzione doppia)

Quindi abbiamo il punto comune $$A(1; 1)$$.

Calcoliamo adesso le tangenti alle parabole nel punto $$A$$.

- Tangente in $$A$$ alla prima parabola $$y = x^2 + 2x - 2$$
  Fascio di rette in $$A$$:
  $$y - 1 = m(x - 1)$$
  $$y = mx - m + 1$$
  Faccio il sistema poi pongo il delta uguale a zero:
  $$
  \begin{cases}
  y = x^2 + 2x - 2 \\
  y = mx - m + 1
  \end{cases}
  $$
  Sostituisco:
  $$
  \begin{cases}
  y = x^2 + 2x - 2 \\
  x^2 + 2x - 2 = mx - m + 1
  \end{cases}
  $$

  $$
  x^2 + (2 - m)x - 3 + m = 0
  $$

  Pongo il delta dell'equazione uguale a zero:
  $$
  \Delta = b^2 - 4ac = 0
  $$
  Ho:
  $$a = 1, \quad b = 2 - m, \quad c = -3 + m$$
  $$
  \Delta = (2 - m)^2 - 4(1)(-3 + m) = 0
  $$
  $$
  4 - 4m + m^2 + 12 - 4m = 0
  $$
  $$
  m^2 - 8m + 16 = 0
  $$
  $$
  (m - 4)^2 = 0 \implies m = 4
  $$
  Quindi abbiamo la tangente:
  $$
  y - 1 = 4(x - 1) \implies y = 4x - 3
  $$

- Tangente in $$A$$ alla seconda parabola $$y = -x^2 + 6x - 4$$
  Fascio di rette in $$A$$:
  $$y - 1 = m(x - 1)$$
  $$y = mx - m + 1$$
  Faccio il sistema poi pongo il delta uguale a zero:
  $$
  \begin{cases}
  y = -x^2 + 6x - 4 \\
  y = mx - m + 1
  \end{cases}
  $$
  Sostituisco:
  $$
  \begin{cases}
  mx - m + 1 = -x^2 + 6x - 4 \\
  y = mx - m + 1
  \end{cases}
  $$

  $$
  x^2 + (m - 6)x + 5 - m = 0
  $$

  Pongo il delta dell'equazione uguale a zero:
  $$
  \Delta = b^2 - 4ac = 0
  $$
  Ho:
  $$a = 1, \quad b = m - 6, \quad c = 5 - m$$
  $$
  \Delta = (m - 6)^2 - 4(1)(5 - m) = 0
  $$
  $$
  m^2 - 12m + 36 - 20 + 4m = 0
  $$
  $$
  m^2 - 8m + 16 = 0
  $$
  $$
  (m - 4)^2 = 0 \implies m = 4
  $$
  Quindi, anche qui abbiamo la tangente:
  $$
  y - 1 = 4(x - 1) \implies y = 4x - 3
  $$

Essendo le tangenti identiche, le due parabole sono tangenti fra loro, come volevamo.