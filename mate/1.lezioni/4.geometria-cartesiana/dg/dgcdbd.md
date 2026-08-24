# esercizio

Trovare l'equazione della parabola con asse verticale che passa per i punti $\textcolor{red}{A = (0, -4)}$, $\textcolor{red}{B = (3, -1)}$ ed ha come asse la retta $\textcolor{red}{x = 2}$.

L'equazione generica della parabola con asse verticale è:

$$
\textcolor{blue}{y = ax^2 + bx + c}
$$

- Condizione di passaggio per il punto $\textcolor{blue}{A = (0, -4)}$:
  Sostituisco a $x$ il valore $0$ ed a $y$ il valore $-4$:
  $$
  \textcolor{blue}{-4 = a \cdot 0^2 + b \cdot 0 + c}
  $$
  Quindi la condizione richiesta è:
  $$
  \textcolor{red}{c = -4}
  $$

- Condizione di passaggio per il punto $\textcolor{blue}{B = (3, -1)}$:
  Sostituisco a $x$ il valore $3$ ed a $y$ il valore $-1$:
  $$
  \textcolor{blue}{-1 = a \cdot 3^2 + b \cdot 3 + c}
  $$
  Quindi la condizione richiesta è:
  $$
  \textcolor{red}{9a + 3b + c = -1}
  $$

- L'asse vale $\textcolor{red}{x = 2}$.
  L'asse della generica parabola vale:
  $$
  \textcolor{blue}{x = -\frac{b}{2a}}
  $$
  Quindi avrò:
  $$
  \textcolor{blue}{-\frac{b}{2a} = 2}
  $$
  $$
  \textcolor{blue}{-b = 4a}
  $$
  Quindi la condizione richiesta è:
  $$
  \textcolor{red}{4a + b = 0}
  $$

Poiché le tre condizioni devono valere [contemporaneamente](../../a/ai/aia.html) facciamo il [sistema](../../a/ai/aibb.html) per trovare le incognite $\textcolor{red}{a}$, $\textcolor{red}{b}$ e $\textcolor{red}{c}$:

$$
\begin{cases}
\textcolor{red}{c = -4} \\
\textcolor{red}{9a + 3b + c = -1} \\
\textcolor{red}{4a + b = 0}
\end{cases}
$$

Sostituisco il valore di $c$ ricavato dalla prima equazione nella seconda e terza equazione; al posto della prima equazione mettiamo una linea.

> **Nota:** conviene farlo perché una volta usata un'equazione non devi più usarla sino alla soluzione altrimenti il sistema diventa indeterminato.

$$
\begin{cases}
\textcolor{red}{---} \\
\textcolor{red}{9a + 3b - 4 = -1} \\
\textcolor{red}{4a + b = 0}
\end{cases}
$$

$$
\begin{cases}
\textcolor{red}{---} \\
\textcolor{red}{9a + 3b = 3} \\
\textcolor{red}{b = -4a}
\end{cases}
$$

Sostituisco $b$, ricavato dalla terza equazione, nella seconda:

$$
\begin{cases}
\textcolor{red}{---} \\
\textcolor{red}{9a + 3(-4a) = 3} \\
\textcolor{red}{b = -4a}
\end{cases}
$$

$$
\begin{cases}
\textcolor{red}{---} \\
\textcolor{red}{9a - 12a = 3} \\
\textcolor{red}{---}
\end{cases}
$$

$$
\begin{cases}
\textcolor{red}{---} \\
\textcolor{red}{-3a = 3} \\
\textcolor{red}{---}
\end{cases}
$$

Divido da entrambe le parti per $-3$ ed ottengo:

$$
\begin{cases}
\textcolor{red}{---} \\
\textcolor{red}{a = -1} \\
\textcolor{red}{---}
\end{cases}
$$

Riscrivo la terza e vi sostituisco il valore di $a$:

$$
\begin{cases}
\textcolor{red}{c = -4} \\
\textcolor{red}{a = -1} \\
\textcolor{red}{b = -4a = -4(-1) = 4}
\end{cases}
$$

Quindi ottengo:

$$
\begin{cases}
\textcolor{red}{c = -4} \\
\textcolor{red}{a = -1} \\
\textcolor{red}{b = 4}
\end{cases}
$$

O meglio (ordino):

$$
\begin{cases}
\textcolor{red}{a = -1} \\
\textcolor{red}{b = 4} \\
\textcolor{red}{c = -4}
\end{cases}
$$

Quindi l'equazione cercata è:

$$
\textcolor{blue}{y = -x^2 + 4x - 4}
$$

[Disegniamola](dgcdbda.html)