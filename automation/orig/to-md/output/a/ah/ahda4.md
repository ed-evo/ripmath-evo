# Esercizio

> Per risolvere questo problema devi saper risolvere i sistemi

**Problema:**

[Considerate un numero di due cifre: il prodotto delle due cifre vale $40$; se si invertono le cifre il numero diminuisce di $27$. Trovare il numero]{.text-blue}

Devo trovare due cifre, la cifra delle decine e quella delle unità; ne chiamerò una $x$ e l'altra $y$, cioè il numero da trovare sarà:

$\textcolor{red}{\text{numero} = 10x + y}$

Ho due relazioni:

1. Il prodotto delle cifre vale $40$:
   $\textcolor{red}{xy = 40}$
2. Se si invertono le cifre il numero diminuisce di $27$:
   cioè se scrivo $10y + x$ questo vale $27$ meno di $10x + y$:
   $\textcolor{red}{10y + x = 10x + y - 27}$

Faccio il sistema:

$$
\begin{cases} 
\textcolor{red}{xy = 40} \\ 
\textcolor{red}{10y + x = 10x + y - 27} 
\end{cases}
$$

Riduco a forma normale:

$$
\begin{cases} 
\textcolor{red}{xy = 40} \\ 
\textcolor{red}{9y - 9x = -27} 
\end{cases}
$$

Divido la seconda per $-3$:

$$
\begin{cases} 
\textcolor{red}{xy = 40} \\ 
\textcolor{red}{x - y = 3} 
\end{cases}
$$

È un sistema di secondo grado: risolvo con il metodo di sostituzione; ricavo la $x$ dalla seconda equazione e ne sostituisco il valore nella prima:

$$
\begin{cases} 
\textcolor{red}{(3 + y)y = 40} \\ 
\textcolor{red}{x = 3 + y} 
\end{cases}
$$

Calcolo:

$$
\begin{cases} 
\textcolor{red}{3y + y^2 = 40} \\ 
\textcolor{red}{x = 3 + y} 
\end{cases}
$$

$$
\begin{cases} 
\textcolor{red}{y^2 + 3y - 40 = 0} \\ 
\textcolor{red}{x = 3 + y} 
\end{cases}
$$

Risolvo la prima equazione ed ottengo:

$\textcolor{blue}{y_1 = -8}$
$\textcolor{blue}{y_2 = +5}$

Essendo il numero cercato un numero naturale, potrò considerare valida solamente la soluzione $\textcolor{blue}{y = 5}$; la sostituisco nel sistema ed ottengo:

$$
\begin{cases} 
\textcolor{red}{y = 5} \\ 
\textcolor{red}{x = 3 + 5 = 8} 
\end{cases}
$$

Quindi il mio numero è:

$\textcolor{blue}{10x + y = 10 \cdot 8 + 5 = 85}$