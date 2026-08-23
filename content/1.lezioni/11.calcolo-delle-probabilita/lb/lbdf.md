# Relazione di ricorrenza

Dobbiamo dimostrare che è valida l'uguaglianza

$$
\textcolor{blue}{\binom{n}{k+1} = \binom{n}{k} \cdot \frac{n-k}{k+1}}
$$

Sviluppo il secondo termine e faccio vedere che è uguale al primo

$$
\textcolor{blue}{\binom{n}{k} \cdot \frac{n-k}{k+1} = \frac{n!}{k!(n-k)!} \cdot \frac{n-k}{k+1}}
$$

Per semplificare sopra e sotto ricordo che $$\textcolor{blue}{(n-k)! = (n-k)(n-k-1)!}$$ inoltre ricordo che $$\textcolor{blue}{(k+1) \cdot k! = (k+1)!}$$

$$
\textcolor{blue}{= \frac{n! \cdot (n-k)}{(k+1)k!(n-k)(n-k-1)!}}
$$

Semplifico

$$
\textcolor{blue}{= \frac{n!}{(k+1)k!(n-k-1)!}}
$$

Posso anche scrivere

$$
\textcolor{blue}{= \frac{n!}{(k+1)![n-(k+1)]!} = \binom{n}{k+1}}
$$

Come volevamo