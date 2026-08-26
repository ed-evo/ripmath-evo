# Esercizio sui flessi

Calcoliamo i punti di flesso per la seguente funzione (curva a campana di Gauss):

$$
\textcolor{red}{y = e^{-x^2}}
$$

Trovo la [derivata prima](cgfb0.html):

$$
\textcolor{red}{y' = -2xe^{-x^2}}
$$

Pongo la derivata prima uguale a zero (anche se sarebbe superfluo, calcoliamo i punti di massimo e minimo):

$$
\textcolor{red}{-2xe^{-x^2} = 0}
$$

$$
\textcolor{red}{x = 0}
$$

ti ricordo che l'esponenziale non si annulla mai. Sostituisco $0$ nell'equazione iniziale per trovare la $y$ del punto:

$$
\textcolor{red}{y(0) = e^{-0^2} = 1}
$$

$$
\textcolor{red}{P(0, 1)}
$$

Trovo la [derivata seconda](cgfb1.html):

$$
\textcolor{red}{y'' = 2e^{-x^2}(-1 + 2x^2)}
$$

Sostituisco a $x$ il valore $0$ per vedere se ho un massimo, un minimo o un flesso:

$$
\textcolor{red}{y''(0) = 2e^{-0^2}(-1 + 2 \cdot 0^2) = -2 < 0}
$$

$\textcolor{red}{M(0, 1)}$ è un massimo e lo chiamo $M$.

Pongo la derivata seconda uguale a zero per trovare i flessi:

$$
\textcolor{red}{2e^{-x^2}(-1 + 2x^2) = 0}
$$

$$
\textcolor{red}{-1 + 2x^2 = 0}
$$

$$
\textcolor{red}{2x^2 = 1}
$$

$$
\textcolor{red}{x = \pm\sqrt{1/2}}
$$

Ho due possibili punti di flesso, ne calcolo la $y$ sostituendo i valori trovati nell'equazione di partenza:

$$
\textcolor{red}{x = +\sqrt{1/2}}
$$

$$
\textcolor{red}{y(+\sqrt{1/2}) = e^{-(+\sqrt{1/2})^2} = e^{-1/2} = 1/\sqrt{e}}
$$

Il primo punto è $\textcolor{red}{F_1(\sqrt{1/2}, 1/\sqrt{e})}$.

Sostituisco ora:

$$
\textcolor{red}{x = -\sqrt{1/2}}
$$

$$
\textcolor{red}{y(-\sqrt{1/2}) = e^{-(-\sqrt{1/2})^2} = e^{-1/2} = 1/\sqrt{e}}
$$

Il secondo punto è $\textcolor{red}{F_2(-\sqrt{1/2}, 1/\sqrt{e})}$

Senza scomodare la derivata terza studiamo la concavità con la derivata seconda ponendola maggiore di zero:

$$
\textcolor{red}{2e^{-x^2}(-1 + 2x^2) > 0}
$$

$$
\textcolor{red}{-1 + 2x^2 > 0}
$$

$$
\textcolor{red}{2x^2 - 1 > 0}
$$

È una disequazione di secondo grado verificata per valori esterni alle radici cioè:

$$
\textcolor{red}{-\sqrt{1/2} \quad \sqrt{1/2}}
$$

$$
\textcolor{red}{+ + + + + + - - - - - - - - - + + + + + +}
$$

Senza andare a fare troppi calcoli per trovare le tangenti di flesso puoi vedere qui di fianco un grafico approssimato della funzione considerata.