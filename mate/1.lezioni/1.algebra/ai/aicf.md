# Sistemi omogenei

Un sistema si dice omogeneo se le equazioni, con l'eccezione dei termini noti, hanno tutti i termini con lo stesso grado; ad esempio è omogeneo il sistema:

$$
\textcolor{red}{\begin{cases} x^2 + y^2 + xy = 96 \\ x + y = 11 \end{cases}}
$$

Questo sopra si può risolvere anche per sostituzione; vediamo invece come si risolvono quando le equazioni sono di secondo grado.

Risolvere il seguente sistema:

$$
\textcolor{red}{\begin{cases} 2x^2 + y^2 - 3xy = 3 \\ x^2 - 3y^2 + 2xy = 5 \end{cases}}
$$

Poniamo [$$y = tx$]{.text-red} otteniamo:

$$
\textcolor{red}{\begin{cases} 2x^2 + t^2x^2 - 3tx^2 = 3 \\ x^2 - 3t^2x^2 + 2tx^2 = 5 \end{cases}}
$$

Metto in evidenza $x^2$ in entrambe le espressioni prima dell'uguale:

$$
\textcolor{red}{\begin{cases} x^2(2 + t^2 - 3t) = 3 \\ x^2(1 - 3t^2 + 2t) = 5 \end{cases}}
$$

Adesso dividiamo membro a membro entrambe le equazioni:

$$
\textcolor{red}{\frac{x^2(2 + t^2 - 3t)}{x^2(1 - 3t^2 + 2t)} = \frac{3}{5}}
$$

Semplifichiamo per $x^2$ ed otteniamo:

$$
\textcolor{red}{\frac{2 + t^2 - 3t}{1 - 3t^2 + 2t} = \frac{3}{5}}
$$

E, facendo il m.c.m., dopo aver supposto il denominatore diverso da zero (si annulla per $t=1$ e $t=-1/3$), ottengo:

$$
\textcolor{red}{5(2 + t^2 - 3t) = 3(1 - 3t^2 + 2t)}
$$

$$
\textcolor{red}{10 + 5t^2 - 15t = 3 - 9t^2 + 6t}
$$

$$
\textcolor{red}{14t^2 - 21t + 7 = 0}
$$

Dividiamo tutto per $7$ (così abbiamo meno calcoli):

$$
\textcolor{red}{2t^2 - 3t + 1 = 0}
$$

Risolvo ed ottengo:

[$t_1 = 1/2$]{.text-blue} \quad [$t_2 = 1$]{.text-blue}

Ora costruisco un sistema con l'equazione $y=tx$ e con una delle due equazioni del sistema con la $t$ (la più facile):

$$
\textcolor{red}{\begin{cases} y = tx \\ x^2(1 - 3t^2 + 2t) = 5 \end{cases}}
$$

E vi sostituisco i valori trovati uno alla volta.

***

Sostituisco $t=1/2$:

$$
\textcolor{red}{\begin{cases} y = 1/2 x \\ x^2[1 - 3(1/2)^2 + 2(1/2)] = 5 \end{cases}}
$$

Calcolo:

$$
\textcolor{red}{\begin{cases} y = 1/2 x \\ 5/4 x^2 = 5 \end{cases}}
$$

$$
\textcolor{red}{\begin{cases} y = 1/2 x \\ x = \pm 2 \end{cases}}
$$

$$
\textcolor{red}{\begin{cases} y = 1/2 (\pm 2) \\ x = \pm 2 \end{cases}}
$$

Ottengo le soluzioni:

$$
\textcolor{red}{\begin{cases} y = \pm 1 \\ x = \pm 2 \end{cases}}
$$

***

Sostituisco $t=1$:

$$
\textcolor{red}{\begin{cases} y = 1 \cdot x \\ x^2[1 - 3(1)^2 + 2(1)] = 5 \end{cases}}
$$

Calcolo:

$$
\textcolor{red}{\begin{cases} y = x \\ x^2 \cdot 0 = 5 \end{cases}}
$$

Impossibile perché nessun numero moltiplicato per zero dà $5$.

> **Nota:** Da notare che per $t=1$ si annulla il denominatore che avevamo supposto diverso da zero.

***

Quindi abbiamo le soluzioni:

$$
\textcolor{blue}{\begin{cases} x_1 = -2 \\ y_1 = -1 \end{cases}} \quad \textcolor{blue}{\begin{cases} x_2 = 2 \\ y_2 = 1 \end{cases}}
$$