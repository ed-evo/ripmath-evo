# [Determinazione dei punti comuni a due circonferenze]{.text-red}

Vediamo ora di applicare il metodo direttamente su un esempio:
Trovare i punti comuni alle circonferenze

[$x^2 + y^2 - 2x = 0$]{.text-blue}
[$x^2 + y^2 - 4x - 2y + 4 = 0$]{.text-blue}

Metto a sistema le due equazioni:

$$
\begin{cases} x^2 + y^2 - 2x = 0 \\ x^2 + y^2 - 4x - 2y + 4 = 0 \end{cases}
$$

Sottraggo le due equazioni termine a termine; per non sbagliare prima cambiamo di segno tutti i termini della seconda equazione poi facciamo la somma in verticale:

$$
\begin{cases} x^2 + y^2 - 2x = 0 \\ -x^2 - y^2 + 4x + 2y - 4 = 0 \end{cases}
$$
$$
2x + 2y - 4 = 0
$$

Posso ancora semplificarla dividendola per $2$:

[$x + y - 2 = 0$]{.text-blue}

Sostituisco ora questa equazione alla seconda equazione del sistema (perché è la più difficile):

$$
\begin{cases} x^2 + y^2 - 2x = 0 \\ x + y - 2 = 0 \end{cases}
$$

Ricavo la $x$ dalla seconda equazione:

$$
\begin{cases} x^2 + y^2 - 2x = 0 \\ x = 2 - y \end{cases}
$$

Sostituisco il valore della $x$ nella prima equazione (io faccio tutti i calcoli, tu puoi abbreviare):

$$
\begin{cases} (2 - y)^2 + y^2 - 2(2 - y) = 0 \\ x = 2 - y \end{cases}
$$

Eseguo i calcoli:

$$
\begin{cases} 4 - 4y + y^2 + y^2 - 4 + 2y = 0 \\ x = 2 - y \end{cases}
$$

$$
\begin{cases} 2y^2 - 2y = 0 \\ x = 2 - y \end{cases}
$$

Divido per $2$ la prima equazione:

$$
\begin{cases} y^2 - y = 0 \\ x = 2 - y \end{cases}
$$

La prima equazione è spuria:

[$y(y - 1) = 0$]{.text-blue}

ed ha soluzioni:

[$y_1 = 0 \quad y_2 = 1$]{.text-blue}

Sostituisco il primo valore nella seconda equazione del sistema e trovo le coordinate del primo punto:

[I sol. =]{.text-blue}
$$
\begin{cases} y = 0 \\ x = 2 - 0 \end{cases} \implies \begin{cases} y = 0 \\ x = 2 \end{cases}
$$

Sostituisco il secondo valore nella seconda equazione del sistema e trovo le coordinate del secondo punto:

[I sol. =]{.text-blue}
$$
\begin{cases} y = 1 \\ x = 2 - 1 \end{cases} \implies \begin{cases} y = 1 \\ x = 1 \end{cases}
$$

I punti cercati sono:

[$A(2,0) \quad B(1,1)$]{.text-blue}

A fianco una rappresentazione grafica del problema.