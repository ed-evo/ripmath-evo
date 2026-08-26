# esercizio

Trovare l'equazione canonica dell'ellisse passante per i punti $\textcolor{blue}{A(\frac{9}{5}, 4)}$ e $\textcolor{blue}{B(\frac{12}{5}, 3)}$

Devo prendere l'equazione canonica dell'ellisse

$$
\textcolor{blue}{\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1}
$$

e sostituire alla $\textcolor{blue}{x}$ ed alla $\textcolor{blue}{y}$:

- i valori $\textcolor{blue}{\frac{9}{5}}$ e $\textcolor{blue}{4}$ (condizione di passaggio per il punto $\textcolor{blue}{A}$)
- i valori $\textcolor{blue}{\frac{12}{5}}$ e $\textcolor{blue}{3}$ (condizione di passaggio per il punto $\textcolor{blue}{B}$)

Ottengo due equazioni nelle incognite $\textcolor{blue}{a}$ e $\textcolor{blue}{b}$; risolvo e trovo i valori di $\textcolor{blue}{a}$ e $\textcolor{blue}{b}$.

- Condizione di passaggio per $\textcolor{blue}{A(\frac{9}{5}, 4)}$:

$$
\textcolor{blue}{\frac{(\frac{9}{5})^2}{a^2} + \frac{4^2}{b^2} = 1}
$$

cioè

$$
\textcolor{blue}{\frac{81}{25a^2} + \frac{16}{b^2} = 1}
$$

- Condizione di passaggio per $\textcolor{blue}{B(\frac{12}{5}, 3)}$:

$$
\textcolor{blue}{\frac{(\frac{12}{5})^2}{a^2} + \frac{3^2}{b^2} = 1}
$$

cioè

$$
\textcolor{blue}{\frac{144}{25a^2} + \frac{9}{b^2} = 1}
$$

Devo quindi risolvere il sistema

$$
\textcolor{blue}{\begin{cases} \frac{81}{25a^2} + \frac{16}{b^2} = 1 \\ \frac{144}{25a^2} + \frac{9}{b^2} = 1 \end{cases}}
$$

Siccome la soluzione di questo sistema è piuttosto complicata (è un sistema di quarto grado) conviene ricorrere ad un artificio: poniamo

$$
\textcolor{blue}{u = \frac{1}{a^2} \quad v = \frac{1}{b^2}}
$$

Il sistema diventa

$$
\textcolor{blue}{\begin{cases} \frac{81u}{25} + 16v = 1 \\ \frac{144u}{25} + 9v = 1 \end{cases}}
$$

e facendo il minimo comune multiplo

$$
\textcolor{blue}{\begin{cases} 81u + 400v = 25 \\ 144u + 225v = 25 \end{cases}}
$$

otteniamo

$$
\textcolor{blue}{\begin{cases} u = \frac{1}{9} \\ v = \frac{1}{25} \end{cases}}
$$

quindi sostituendo le condizioni poste possiamo scrivere

$$
\textcolor{blue}{a^2 = 9 \quad b^2 = 25}
$$

e l'equazione dell'ellisse è

$$
\textcolor{blue}{\frac{x^2}{9} + \frac{y^2}{25} = 1}
$$