# Sistema lineare con parametro

Quando all'interno di un sistema hai un parametro è interessante vedere come, al variare del parametro il sistema può ammettere una, nessuna o infinite soluzioni: siccome qui è possibile racchiudere un po' tutta la teoria sin qui sviluppata questi esercizi sono piuttosto comuni, soprattutto negli esami di maturità scientifica.

***

Vediamo ad esempio questo esercizio, parte di un esercizio di esame
<small>Maturità scientifica sperimentale 1993 sessione supplettiva (prima parte del secondo esercizio)</small>

***Si stabiliscano le relazioni cui debbono soddisfare $a$ e $b$ affinché il sistema di equazioni***

$$
\begin{cases}
ax + 2y + bz = 1 \\
x + y + az = 1 \\
x + ay + bz = 1
\end{cases}
$$

***ammetta un'unica soluzione o infinite soluzioni o nessuna soluzione***

[$\begin{pmatrix} a & 2 & b \\ 1 & 1 & a \\ 1 & a & b \end{pmatrix}$]{.text-red} \quad [$\begin{pmatrix} a & 2 & b & 1 \\ 1 & 1 & a & 1 \\ 1 & a & b & 1 \end{pmatrix}$]{.text-red}

[**Matrice incompleta**]{.text-blue} \quad [**Matrice completa**]{.text-blue}

Per avere una sola soluzione la matrice completa ed incompleta dovranno avere rango $3$, quindi basterà che il determinante della matrice incompleta sia diverso da zero.

Lo calcolo:

$$
\begin{vmatrix} a & 2 & b \\ 1 & 1 & a \\ 1 & a & b \end{vmatrix} = \textcolor{red}{2ab - a^3 + 2a - 3b}
$$

Siccome ho due parametri $a$ e $b$ mi conviene esplicitare rispetto ad un solo parametro.
Se il determinante è diverso da zero:

$\textcolor{red}{2ab - a^3 + 2a - 3b \neq 0}$

allora esplicitando $b$ ottengo (esplicito $b$ perché è più semplice):

$\textcolor{red}{b(2a - 3) - a^3 + 2a \neq 0}$

Anche se c'è il simbolo di diverso ci si comporta come in un'equazione:

$\textcolor{red}{b(2a - 3) \neq a^3 - 2a}$

e quindi:

$$
\textcolor{red}{b \neq \frac{a^3 - 2a}{2a - 3}}
$$

In questo caso il sistema ammette una sola soluzione. Se invece abbiamo:

$$
\textcolor{red}{b = \frac{a^3 - 2a}{2a - 3}}
$$

allora la matrice incompleta ha rango $2$ mentre i tre minori di ordine $3$ della matrice completa diversi da quello calcolato valgono:

$$
\begin{vmatrix} a & 2 & 1 \\ 1 & 1 & 1 \\ 1 & a & 1 \end{vmatrix} = \textcolor{red}{-(a-1)^2}
$$

$$
\begin{vmatrix} a & b & 1 \\ 1 & a & 1 \\ 1 & b & 1 \end{vmatrix} = \textcolor{red}{(a-1)(a-b)}
$$

$$
\begin{vmatrix} 2 & b & 1 \\ 1 & a & 1 \\ a & b & 1 \end{vmatrix} = \textcolor{red}{(a-b)(2-a)}
$$

E se cerco la soluzione comune:

$$
\begin{cases} 
\textcolor{red}{-(a-1)^2 = 0} \\ 
\textcolor{red}{(a-1)(a-b) = 0} \\ 
\textcolor{red}{(a-b)(2-a) = 0} 
\end{cases}
$$

avrò che le prime due equazioni si annullano se:

$\textcolor{red}{a = 1}$

Mentre la seconda e la terza si annullano se:

$\textcolor{red}{b = a}$

e la terza si annulla anche se:

$\textcolor{red}{a = 2}$

***

> **Quindi raccogliendo potremo dire:**
>
> - Se $\textcolor{blue}{b \neq \frac{a^3 - 2a}{2a - 3}}$
>   Allora avremo una sola soluzione.
>
> - Se $\textcolor{blue}{b = \frac{a^3 - 2a}{2a - 3}}$
>   allora distinguiamo i casi:
>   - se $\textcolor{blue}{a \neq 1}$, $\textcolor{blue}{a \neq 2}$ od anche $\textcolor{blue}{a \neq b}$ allora il sistema non ammette soluzioni.
>   - se $\textcolor{blue}{a = 1}$ oppure $\textcolor{blue}{a = 2}$ od anche $\textcolor{blue}{a = b}$ il sistema ammette $\textcolor{blue}{\infty^1}$ soluzioni.
>     > **Nota:** approfondire.

***
<small>In futuro aggiungere altri esercizi</small>