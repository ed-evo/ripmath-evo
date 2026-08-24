# [Punto medio di un segmento]{.text-red}

Conoscendo le coordinate di due punti nel piano è possibile determinare le coordinate del loro punto intermedio (punto medio del segmento).

Consideriamo i punti nel piano
[$\text{A} = (x_1, y_1)$]{.text-blue} $\quad$ [$\text{B} = (x_2, y_2)$]{.text-blue}

Inoltre chiamo [$\text{M} = (x_M, y_M)$]{.text-red} il loro punto di mezzo.

Per comodità supponiamo che i punti si trovino nel primo quadrante, la formula che otterremo sarà comunque valida in tutto il piano.
Da [$\text{A}$]{.text-blue}, [$\text{B}$]{.text-blue} e [$\text{M}$]{.text-red} traccio le coordinate.
Sull'asse $\text{x}$ le proiezioni saranno [$\text{A}'$]{.text-blue}, [$\text{B}'$]{.text-blue} e [$\text{M}'$]{.text-red}.
Poiché $\text{M}$ è il punto di mezzo fra $\text{A}$ e $\text{B}$, allora anche $\text{M}'$ sarà il punto di mezzo fra $\text{A}'$ e $\text{B}'$.

> Per il Teorema di Talete, essendo le verticali fra loro parallele

quindi
$\textcolor{blue}{\text{A}'}\textcolor{red}{\text{M}'} = \textcolor{red}{\text{M}'}\textcolor{blue}{\text{B}'}$

Sostituendo le misure
$$
\textcolor{red}{x_M} - \textcolor{blue}{x_1} = \textcolor{blue}{x_2} - \textcolor{red}{x_M}
$$
devo ricavare $\textcolor{red}{x_M}$
$$
\textcolor{red}{x_M} + \textcolor{red}{x_M} = \textcolor{blue}{x_1} + \textcolor{blue}{x_2}
$$
$$
2\textcolor{red}{x_M} = \textcolor{blue}{x_1} + \textcolor{blue}{x_2}
$$
$$
\textcolor{red}{x_M} = \frac{\textcolor{blue}{x_1} + \textcolor{blue}{x_2}}{2}
$$

Come ho trovato il punto medio sulle $\text{x}$, posso trovarlo sulle $\text{y}$
$$
\textcolor{red}{y_M} = \frac{\textcolor{blue}{y_1} + \textcolor{blue}{y_2}}{2}
$$

Riepilogando [$\text{M} = \left( \frac{x_1 + x_2}{2}, \frac{y_1 + y_2}{2} \right)$]{.text-red}

> **Nota:** [Il punto medio di un segmento di estremi dati è dato dalla semisomma delle coordinate omonime degli estremi stessi]{.text-purple}

**Esempio:** trovare il punto medio del segmento di estremi $\text{A}(2,3)$ e $\text{B}(4,7)$
$$
x_M = \frac{2 + 4}{2} = \frac{6}{2} = 3
$$
$$
y_M = \frac{3 + 7}{2} = \frac{10}{2} = 5
$$
quindi $\text{M}(3,5)$

***

Vediamo ora [qualche esercizio](dcd0.html)