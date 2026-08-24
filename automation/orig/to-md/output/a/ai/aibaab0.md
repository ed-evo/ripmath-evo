# [Metodo di addizione]{.text-red}

Risolviamo il sistema generico

$$
\begin{cases}
\textcolor{red}{ax + by = c} \\
\textcolor{red}{dx + ey = f}
\end{cases}
$$

ove $a$, $b$, $c$, $d$, $e$, $f$ sono numeri dati.

Devo rendere uguali i termini con la $x$ (anche qui si può parlare di minimo comune multiplo).
Moltiplico la prima equazione per $d$ e la seconda per $-a$:

$$
\begin{cases}
\textcolor{red}{adx + bdy = cd} & \textcolor{blue}{(d)} \\
\textcolor{red}{-adx - aey = -af} & \textcolor{blue}{(-a)}
\end{cases}
$$

Sommo termine a termine:

$$
\begin{array}{rcl}
\textcolor{red}{adx + bdy} & = & \textcolor{red}{cd} \\
\textcolor{red}{-adx - aey} & = & \textcolor{red}{-af} \\
\hline
\textcolor{red}{bdy - aey} & = & \textcolor{red}{cd - af}
\end{array}
$$

Metto in evidenza $y$:

$$
\textcolor{red}{y(bd - ae) = cd - af}
$$

Ricavo $y$:

$$
\textcolor{red}{y = \frac{cd - af}{bd - ae}}
$$

Cambiando di segno sopra e sotto è equivalente a scrivere:

$$
\textcolor{red}{y = \frac{af - cd}{ae - bd}}
$$

> Di solito, nelle lettere, si cerca di mettere prima le prime lettere dell'alfabeto, inoltre il primo termine si cerca sempre di farlo diventare positivo (in questo modo posso non scrivere un segno).

Ora devo rendere uguali i termini con la $y$; moltiplico sopra per $e$ e sotto per $b$:

$$
\begin{cases}
\textcolor{red}{aex + bey = ce} & \textcolor{blue}{(e)} \\
\textcolor{red}{-bdx - bey = -bf} & \textcolor{blue}{(-b)}
\end{cases}
$$

Sommo termine a termine:

$$
\begin{array}{rcl}
\textcolor{red}{aex + bey} & = & \textcolor{red}{ce} \\
\textcolor{red}{-bdx - bey} & = & \textcolor{red}{-bf} \\
\hline
\textcolor{red}{aex - bdx} & = & \textcolor{red}{ce - bf}
\end{array}
$$

Metto in evidenza $x$:

$$
\textcolor{red}{x(ae - bd) = ce - bf}
$$

Ricavo $x$:

$$
\textcolor{red}{x = \frac{ce - bf}{ae - bd}}
$$

Quindi il risultato finale è:

$$
\begin{cases}
\textcolor{blue}{x = \frac{ce - bf}{ae - bd}} \\
\textcolor{blue}{y = \frac{af - cd}{ae - bd}}
\end{cases}
$$