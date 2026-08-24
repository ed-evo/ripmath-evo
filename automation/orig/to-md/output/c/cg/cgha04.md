Determinare i punti di massimo, minimo e flesso orizzontale per la seguente funzione in tutto l'intervallo di definizione:

$$
\textcolor{red}{y = \frac{x^2 - 5x + 4}{x^2 + 5x + 4}}
$$

L'intervallo di definizione è tutto $\mathbb{R}$ eccetto dove si annulla il denominatore, cioè devo scartare i valori per cui

$\textcolor{red}{x^2 + 5x + 4 = 0}$

risolvendo $\textcolor{red}{x = -1}$ e $\textcolor{red}{x = -4}$ quindi:

$\textcolor{red}{\text{C.E.} = (-\infty, -4) \cup (-4, -1) \cup (-1, +\infty)}$

Trovo la derivata prima e la pongo uguale a zero

$$
\textcolor{red}{y' = \frac{(2x - 5) \cdot (x^2 + 5x + 4) - (x^2 - 5x + 4) \cdot (2x + 5)}{(x^2 + 5x + 4)^2}}
$$

$$
\textcolor{red}{y' = \frac{10x^2 - 40}{(x^2 + 5x + 4)^2}}
$$

$$
\textcolor{red}{\frac{x^2 - 40}{(x^2 + 5x + 4)^2} = 0}
$$

Una frazione è zero quando è zero il numeratore

$\textcolor{red}{10x^2 - 40 = 0}$
$\textcolor{red}{x^2 - 4 = 0}$
$\textcolor{red}{x^2 = 4}$
$\textcolor{red}{x = \pm 2}$

Ho trovato due valori per cui potrei avere dei massimi, minimi o flessi. Trovo i valori della $\textcolor{red}{y}$ corrispondente sostituendo una volta $-2$ e l'altra $+2$ al posto di $\textcolor{red}{x}$ nell'equazione di partenza:

- $$
  \textcolor{red}{y(-2) = \frac{(-2)^2 - 5 \cdot (-2) + 4}{(-2)^2 + 5 \cdot (-2) + 4} = -9}
  $$

- $$
  \textcolor{red}{y(2) = \frac{2^2 - 5 \cdot 2 + 4}{2^2 + 5 \cdot 2 + 4} = -1/9}
  $$

I punti estremanti sono:
$\textcolor{red}{A(-2, -9) \quad B(2, -1/9)}$

Per sapere se sono un massimi, minimi o flessi conviene studiare la derivata prima perché, essendo il denominatore sempre positivo (quadrato di due termini positivi), basterà studiarne il numeratore:

$\textcolor{red}{y' > 0}$
$\textcolor{red}{10x^2 - 40 > 0}$
$\textcolor{red}{x^2 - 4 > 0}$

verificata per valori esterni all'intervallo delle radici che sono $-2$ e $+2$.

***

$\textcolor{red}{y' \quad + + + + + + + \textcolor{blue}{-2} - - - - - - - \textcolor{blue}{+2} + + + + + + +}$
$\textcolor{red}{y \quad \text{crescente} \quad \text{decrescente} \quad \text{crescente}}$
$\quad \quad \quad \quad \quad \quad \textcolor{blue}{\text{Massimo}} \quad \quad \quad \textcolor{blue}{\text{minimo}}$

***

Quindi

$\textcolor{red}{A(-2, -9) \text{ è un Massimo e}}$
$\textcolor{red}{B(2, -1/9) \text{ è un minimo}}$