# [Sistema simmetrico elementare]{.text-red}

Chiameremo sistema simmetrico elementare un sistema in cui abbiamo un'equazione con la somma delle incognite e l'altra equazione con il loro prodotto:

$$
\begin{cases} \textcolor{red}{x + y = 5} \\ \textcolor{red}{xy = 6} \end{cases}
$$

in pratica equivale a risolvere il problema [già visto](../af/afccge.html) di trovare due numeri di cui conosciamo la somma ed il prodotto; cioè basterà risolvere un'equazione di secondo grado in $\textcolor{red}{z}$ del tipo

$$
\textcolor{red}{z^2 - sz + p = 0}
$$

con $\textcolor{red}{s}$ somma delle incognite e $\textcolor{red}{p}$ prodotto delle incognite.

***

Vediamo un esempio; risolvere il sistema:

$$
\begin{cases} \textcolor{red}{x + y = 5} \\ \textcolor{red}{xy = 6} \end{cases}
$$

considero l'equazione

$$
\textcolor{blue}{z^2 - sz + p = 0}
$$

con

$$
\begin{aligned} \textcolor{blue}{s} &= \textcolor{blue}{x + y = 5} \\ \textcolor{blue}{p} &= \textcolor{blue}{x \cdot y = 6} \end{aligned}
$$

Otteniamo l'equazione

$$
\textcolor{blue}{z^2 - 5z + 6 = 0}
$$

per trovare $x$ ed $y$ risolviamo l'equazione applicando la formula risolutiva:

$$
\textcolor{blue}{z_{1,2} = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}}
$$

abbiamo:

$\textcolor{blue}{a = 1}$
$\textcolor{blue}{b = -5}$
$\textcolor{blue}{c = 6}$

sostituiamo nella formula:

$$
\textcolor{blue}{z_{1,2} = \frac{-(-5) \pm \sqrt{(-5)^2 - 4(1)(6)}}{2(1)}}
$$

facciamo i calcoli dentro radice:

$$
\textcolor{blue}{= \frac{5 \pm \sqrt{25 - 24}}{2}}
$$

$$
\textcolor{blue}{= \frac{5 \pm \sqrt{1}}{2}}
$$

$$
\textcolor{blue}{= \frac{5 \pm 1}{2}}
$$

adesso devo prendere una volta il meno ed una volta il più:

$$
\textcolor{blue}{z_1 = \frac{5 - 1}{2} = 2}
$$

$$
\textcolor{blue}{z_2 = \frac{5 + 1}{2} = 3}
$$

Ogni soluzione trovata è una volta $x$ ed una volta $y$, infatti il sistema simmetrico implica che le soluzioni siano simmetriche.

quindi le due soluzioni saranno:

$$
\begin{cases} \textcolor{red}{x_1 = 2} \\ \textcolor{red}{y_1 = 3} \end{cases} \quad \begin{cases} \textcolor{red}{x_2 = 3} \\ \textcolor{red}{y_2 = 2} \end{cases}
$$

***

> puoi verificare che hai fatto giusto facendone semplicemente la somma ed il prodotto