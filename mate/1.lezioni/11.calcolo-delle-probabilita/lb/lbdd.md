# Legge delle classi complementari

> Vediamo ora alcune proprietà dei coefficienti binomiali; talvolta queste proprietà vengono date come domanda all'esame di maturità per il liceo scientifico: forse per vedere se lo studente è capace di calcoli.
> Se frequenti il quinto liceo scientifico ti consiglio di studiare molto bene questa pagina e le due successive.
> Naturalmente nel compito invece di $n$ puoi trovare $n-1, n+1, n-2, n+2, \dots$ e invece di $k$ puoi trovare $k-1, k+1, k-2, k+2, \dots$

> Questa si chiama legge delle classi complementari perché il numero sotto è la classe della combinazione (si dice combinazione di $n$ elementi di classe $k$) ed è complementare perché $k$ e $n-k$ sono complementari rispetto ad $n$ (cioè la loro somma vale $n$).
> È questa legge che ci garantisce che il triangolo di Tartaglia è simmetrico.

Dobbiamo dimostrare che è valida l'uguaglianza

$$
\textcolor{blue}{\binom{n}{k} = \binom{n}{n-k}}
$$

Sviluppo il secondo termine e faccio vedere che è uguale al primo

$$
\textcolor{blue}{\binom{n}{n-k} = \frac{n!}{(n-k)!(n-n+k)!} = \frac{n!}{(n-k)!k!}}
$$

Ma l'ultimo termine è lo sviluppo di

$$
\textcolor{blue}{= \binom{n}{k}}
$$

Come volevamo