# Dimostriamo che la figura individuata dalle $$4$$ tangenti è un rombo

> Possiamo seguire la definizione di rombo e quindi mostrare che i lati (che abbiamo già visto paralleli) sono uguali oppure potremmo anche mostrare che le diagonali sono tra loro perpendicolari: siccome il problema ci richiede di utilizzare la definizione seguiamo il primo metodo.

Per semplicità rinominiamo i punti di intersezione **$$O$$ $$A$$ $$B$$ $$C$$** come da figura.

Troviamo i vertici del parallelogramma come punti di intersezione fra le tangenti; intanto conosciamo già $$2$$ punti l'origine **$$O = (0, 0)$$** ed il punto **$$B = (2, 0)$$** in cui le parabole tagliano l'asse delle $$x$$.

Troviamo ora le coordinate del punto **$$A$$** all'incrocio delle tangenti **$$y = -2x$$** ed **$$y = 2x - 4$$**.

Faccio il sistema:

$$
\begin{cases} y = -2x \\ y = 2x - 4 \end{cases}
$$

$$
\begin{cases} 2x - 4 = -2x \\ y = 2x - 4 \end{cases}
$$

$$
\begin{cases} 2x + 2x = 4 \\ y = 2x - 4 \end{cases}
$$

$$
\begin{cases} 4x = 4 \\ y = 2x - 4 \end{cases}
$$

$$
\begin{cases} x = 4/4 = 1 \\ y = 2(1) - 4 \end{cases}
$$

$$
\begin{cases} x = 1 \\ y = -2 \end{cases}
$$

quindi **$$A = (1, -2)$$**.

Troviamo quindi le coordinate del punto **$$D$$** all'incrocio delle tangenti **$$y = 2x$$** ed **$$y = -2x + 4$$**.

Faccio il sistema:

$$
\begin{cases} y = 2x \\ y = -2x + 4 \end{cases}
$$

$$
\begin{cases} y = 2x \\ 2x = -2x + 4 \end{cases}
$$

$$
\begin{cases} y = 2x \\ 2x + 2x = 4 \end{cases}
$$

$$
\begin{cases} y = 2x \\ 4x = 4 \end{cases}
$$

$$
\begin{cases} y = 2(1) = 2 \\ x = 4/4 = 1 \end{cases}
$$

$$
\begin{cases} x = 1 \\ y = 2 \end{cases}
$$

quindi **$$D = (1, 2)$$**.

Calcoliamo ora le misure dei lati utilizzando la formula della [distanza fra due punti](../dc/dcc.html).
Punti **$$O = (0, 0)$$**, **$$A = (1, -2)$$**, **$$B = (2, 0)$$**, **$$C = (1, 2)$$**.

[**distanza** $$= \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$]{.text-blue}

[**$$\overline{OA} = \sqrt{(1 - 0)^2 + (-2 - 0)^2} = \sqrt{1 + 4} = \sqrt{5}$$**]{.text-red}

[**$$\overline{AB} = \sqrt{(2 - 1)^2 + [0 - (-2)]^2} = \sqrt{1 + 4} = \sqrt{5}$$**]{.text-red}

Sapendo che in un parallelogramma i lati opposti sono fra loro congruenti è sufficiente quanto abbiamo fatto per dimostrare che si tratta di un rombo.