# esercizio

Trovare l'equazione della parabola con asse verticale che passa per i punti $\textcolor{blue}{A=(1,0)}$, $\textcolor{blue}{B=(0,2)}$ e $\textcolor{blue}{C=(3,2)}$

L'equazione generica della parabola con asse verticale è
$$
\textcolor{blue}{y = ax^2 + bx + c}
$$

- Condizione di passaggio per il punto $\textcolor{blue}{A = (1, 0)}$
  sostituisco a $x$ il valore $1$ ed a $y$ il valore $0$
  $\textcolor{blue}{0 = a \cdot 1^2 + b \cdot 1 + c}$
  quindi la condizione richiesta è
  $\textcolor{red}{a + b + c = 0}$

- Condizione di passaggio per il punto $\textcolor{blue}{B = (0, 2)}$
  sostituisco a $x$ il valore $0$ ed a $y$ il valore $2$
  $\textcolor{blue}{2 = a \cdot 0^2 + b \cdot 0 + c}$
  quindi la condizione richiesta è
  $\textcolor{red}{c = 2}$

- Condizione di passaggio per il punto $\textcolor{blue}{C = (3, 2)}$
  sostituisco a $x$ il valore $3$ ed a $y$ il valore $2$
  $\textcolor{blue}{2 = a \cdot 3^2 + b \cdot 3 + c}$
  quindi la condizione richiesta è
  $\textcolor{red}{9a + 3b + c = 2}$

Poiché le tre condizioni devono valere contemporaneamente facciamo il [sistema]{.text-red} per trovare le incognite $\textcolor{red}{a}$, $\textcolor{red}{b}$ e $\textcolor{red}{c}$.

> In questo primo sistema farò tutti i passaggi, naturalmente tu puoi abbreviare

$$
\begin{cases}
\textcolor{red}{a + b + c = 0} \\
\textcolor{red}{c = 2} \\
\textcolor{red}{9a + 3b + c = 2}
\end{cases}
$$

sostituisco il valore di $c$ ricavato dalla seconda equazione nella prima e terza equazione; al posto della seconda equazione mettiamo una linea

> **Nota:** conviene farlo perché una volta usata un'equazione non devi più usarla sino alla soluzione, altrimenti il sistema diventa indeterminato.

$$
\begin{cases}
\textcolor{red}{a + b + 2 = 0} \\
\text{-------------} \\
\textcolor{red}{9a + 3b + 2 = 2}
\end{cases}
$$

ricavo $a$ dalla prima equazione

$$
\begin{cases}
\textcolor{red}{a = - b - 2} \\
\text{-------------} \\
\textcolor{red}{9a + 3b + 2 = 2}
\end{cases}
$$

sostituisco nella terza equazione; al posto della prima metto una linea

$$
\begin{cases}
\text{-------------} \\
\text{-------------} \\
\textcolor{red}{9(- b - 2) + 3b + 2 = 2}
\end{cases}
$$

calcolo

$$
\begin{cases}
\text{-------------} \\
\text{-------------} \\
\textcolor{red}{- 9b - 18 + 3b + 2 = 2}
\end{cases}
$$

$$
\begin{cases}
\text{-------------} \\
\text{-------------} \\
\textcolor{red}{- 9b + 3b = - 2 + 18 + 2}
\end{cases}
$$

$$
\begin{cases}
\text{-------------} \\
\text{-------------} \\
\textcolor{red}{- 6b = + 18}
\end{cases}
$$

$$
\begin{cases}
\text{-------------} \\
\text{-------------} \\
\textcolor{red}{b = - 3}
\end{cases}
$$

ora riscrivo al posto dell'ultima linea che ho messo l'equazione relativa

$$
\begin{cases}
\textcolor{red}{a = - b - 2} \\
\text{-------------} \\
\textcolor{red}{b = - 3}
\end{cases}
$$

sostituisco il valore di $b$

$$
\begin{cases}
\textcolor{red}{a = - (-3) - 2 = 3 - 2 = 1} \\
\text{-------------} \\
\textcolor{red}{b = - 3}
\end{cases}
$$

quindi ottengo

$$
\begin{cases}
\textcolor{red}{a = 1} \\
\textcolor{red}{c = 2} \\
\textcolor{red}{b = - 3}
\end{cases}
$$

o meglio (ordino)

$$
\begin{cases}
\textcolor{red}{a = 1} \\
\textcolor{red}{b = - 3} \\
\textcolor{red}{c = 2}
\end{cases}
$$

Quindi l'equazione cercata è

$$
\textcolor{blue}{y = x^2 - 3x + 2}
$$

[Disegniamola](dgcdbaa.html)