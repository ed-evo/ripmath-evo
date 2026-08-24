# esercizio

## Problema:

[La somma di due numeri naturali aumentata del loro prodotto vale 11. Trovare i due numeri sapendo che la somma dei loro quadrati diminuita del prodotto fra i numeri vale 7]{.text-blue}

Siccome devo trovare due numeri ne chiamerò uno $x$ e l'altro $y$, cioè imposterò un sistema:

[primo numero = $x$]{.text-red}
[secondo numero = $y$]{.text-red}

Ho due relazioni:

1. la somma dei due numeri aumentata del loro prodotto vale 11
$\textcolor{red}{x + y + xy = 11}$
2. la somma dei quadrati diminuita del loro prodotto vale 7
$\textcolor{red}{x^2 + y^2 - xy = 7}$

Faccio il sistema:

$$
\textcolor{red}{\begin{cases} x + y + xy = 11 \\ x^2 + y^2 - xy = 7 \end{cases}}
$$

È di quarto grado, ma come sistema è un sistema simmetrico quindi di un tipo che sappiamo risolvere. Nella seconda equazione applico la prima formula di Waring:

$$
\textcolor{red}{\begin{cases} x + y + xy = 11 \\ (x + y)^2 - 2xy - xy = 7 \end{cases}}
$$

$$
\textcolor{red}{\begin{cases} x + y + xy = 11 \\ (x + y)^2 - 3xy = 7 \end{cases}}
$$

Pongo:
$\textcolor{red}{(x+y) = s \quad xy = p}$

Ottengo:

$$
\textcolor{red}{\begin{cases} s + p = 11 \\ s^2 - 3p = 7 \end{cases}}
$$

Ricavo $p$ dalla prima equazione e sostituisco nella seconda:

$$
\textcolor{red}{\begin{cases} p = 11 - s \\ s^2 - 3(11 - s) = 7 \end{cases}}
$$

$$
\textcolor{red}{\begin{cases} p = 11 - s \\ s^2 + 3s - 33 - 7 = 0 \end{cases}}
$$

$$
\textcolor{red}{\begin{cases} p = 11 - s \\ s^2 + 3s - 40 = 0 \end{cases}}
$$

La seconda è un'equazione di secondo grado, la risolvo ed ottengo come soluzioni:

$\textcolor{blue}{s_1 = -8}$
$\textcolor{blue}{s_2 = +5}$

Ora devo sostituire i valori trovati nel sistema e trovo i due sistemi:

**I)**
$$
\textcolor{red}{\begin{cases} p_1 = 11 - (-8) = 19 \\ s_1 = -8 \end{cases}}
$$

**II)**
$$
\textcolor{red}{\begin{cases} p_2 = 11 - 5 = 6 \\ s_2 = 5 \end{cases}}
$$

I. Risolviamo il primo: devo sostituire ad $s$ $(x+y)$ ed a $p$ $xy$:

$$
\textcolor{red}{\begin{cases} p = 19 \\ s = -8 \end{cases}}
$$

$$
\textcolor{red}{\begin{cases} xy = 19 \\ x + y = -8 \end{cases}}
$$

Devo trovare due numeri di cui conosco la somma ed il prodotto; applico la formula:

$\textcolor{red}{t^2 - st + p = 0}$
$\textcolor{red}{t^2 + 8t + 19 = 0}$

Risolvo l'equazione di secondo grado in $t$ ma essendo il discriminante minore di zero non ho radici reali.

II. Risolviamo il secondo: devo sostituire ad $s$ $(x+y)$ ed a $p$ $xy$:

$$
\textcolor{red}{\begin{cases} p = 6 \\ s = 5 \end{cases}}
$$

$$
\textcolor{red}{\begin{cases} xy = 6 \\ x + y = 5 \end{cases}}
$$

Devo trovare due numeri di cui conosco la somma ed il prodotto; applico la formula:

$\textcolor{red}{t^2 - st + p = 0}$
$\textcolor{red}{t^2 - 5t + 6 = 0}$

Risolvo l'equazione di secondo grado in $t$ e trovo:

$\textcolor{blue}{t_1 = 2 \quad t_2 = 3}$

Ottengo quindi le due soluzioni:

$$
\textcolor{red}{\begin{cases} x_1 = 2 \\ y_1 = 3 \end{cases} \quad \begin{cases} x_2 = 3 \\ y_2 = 2 \end{cases}}
$$

Quindi il nostro problema ha solamente due soluzioni reali.