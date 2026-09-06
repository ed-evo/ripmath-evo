# calcoli

Risolvo il sistema:

$$
\begin{cases}
x_1 + 3x_2 = 7 \\
kx_1 + kx_2 = k-2 \\
kx_1 \cdot x_2 = 1
\end{cases}
$$

Ricavo $x_1$ dalla prima e sostituisco nella seconda e nella terza

$$
\begin{cases}
x_1 = -3x_2 + 7 \\
k(-3x_2 + 7) + kx_2 = k-2 \\
k(-3x_2 + 7) \cdot x_2 = 1
\end{cases}
$$

Eseguo i calcoli nella seconda e nella terza; al posto della prima metto una linea

$$
\begin{cases}
\text{----------------------} \\
-3kx_2 + 7k + kx_2 - k + 2 = 0 \\
-3kx_2^2 + 7kx_2 = 1
\end{cases}
$$

$$
\begin{cases}
\text{----------------------} \\
-2kx_2 + 6k + 2 = 0 \\
-3kx_2^2 + 7kx_2 = 1
\end{cases}
$$

divido la seconda equazione per $-2$

$$
\begin{cases}
\text{----------------------} \\
kx_2 - 3k - 1 = 0 \\
-3kx_2^2 + 7kx_2 = 1
\end{cases}
$$

ricavo $x_2$ dalla seconda e sostituisco nella terza (conviene lasciare per ultima la $k$ perché a noi interessa solo quella e la troviamo subito; non siamo interessati ai valori di $x_1$ ed $x_2$)

$$
\begin{cases}
\text{----------------------} \\
x_2 = \frac{3k + 1}{k} \\
-3k\frac{(3k + 1)^2}{k^2} + 7k\frac{3k + 1}{k} = 1
\end{cases}
$$

essendo interessato solamente ai valori di $k$ considero solamente la terza equazione

> in futuro fare link "voglio risolvere tutto il sistema"

$$
-3k \frac{(3k + 1)^2}{k^2} + 7k \frac{3k + 1}{k} = 1
$$

semplifico i $k$ al numeratore e al denominatore

$$
-3 \frac{(3k + 1)^2}{k} + 7(3k + 1) = 1
$$

supponendo $k$ diverso da zero faccio il minimo comune multiplo poi tolgo i denominatori uguali

$$
\frac{-3(3k + 1)^2 + 7k(3k + 1)}{k} = \frac{k}{k}
$$

$$
-3(3k + 1)^2 + 7k(3k + 1) = k
$$

eseguo i calcoli

$$
-3(9k^2 + 6k + 1) + 21k^2 + 7k = k
$$

$$
-27k^2 - 18k - 3 + 21k^2 + 7k - k = 0
$$

$$
-6k^2 - 12k - 3 = 0
$$

divido tutto per $-3$

$$
2k^2 + 4k + 1 = 0
$$

risolvo l'equazione: applico la formula ridotta

$$
\textcolor{blue}{k_{1,2} = \frac{-(b/2) \pm \sqrt{(b/2)^2 - ac}}{a}}
$$

Abbiamo:

$\textcolor{blue}{a = 2}$
$\textcolor{blue}{b = 4 \quad b/2 = 2}$
$\textcolor{blue}{c = 1}$

$$
\textcolor{blue}{k_{1,2} = \frac{-(2) \pm \sqrt{2^2 - (1)(2)}}{2}}
$$

$$
\textcolor{blue}{k_{1,2} = \frac{-2 \pm \sqrt{4 - 2}}{2}}
$$

$$
\textcolor{blue}{k_{1,2} = \frac{-2 \pm \sqrt{2}}{2}}
$$

Ora prendo una volta il meno ed una volta il più ed ottengo le soluzioni

$$
\textcolor{blue}{k_1 = \frac{-2 - \sqrt{2}}{2}}
$$

$$
\textcolor{blue}{k_2 = \frac{-2 + \sqrt{2}}{2}}
$$