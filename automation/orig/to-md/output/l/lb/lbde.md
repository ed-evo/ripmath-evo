# [Relazione di Stiefel]{.text-red}

> Dobbiamo dimostrare che è valida l'uguaglianza:
>
> $$
> \textcolor{blue}{\binom{n}{k} = \binom{n-1}{k} + \binom{n-1}{k-1}}
> $$
>
> Sviluppo il secondo termine e faccio vedere che è uguale al primo:
>
> $$
> \textcolor{blue}{\binom{n-1}{k} + \binom{n-1}{k-1} = \frac{(n-1)!}{k!(n-1-k)!} + \frac{(n-1)!}{(k-1)![(n-1)-(k-1)]!}}
> $$
>
> $$
> \textcolor{blue}{= \frac{(n-1)!}{k!(n-k-1)!} + \frac{(n-1)!}{(k-1)!(n-k)!}}
> $$
>
> Ora raccolgo a fattor comune $(n-1)!$:
>
> $$
> \textcolor{blue}{= (n-1)! \cdot \left( \frac{1}{k!(n-k-1)!} + \frac{1}{(k-1)!(n-k)!} \right)}
> $$
>
> Devo fare il minimo comune multiplo: ricordando che $n! = n(n-1)!$ e $(n-k)! = (n-k)(n-k-1)!$ mi conviene scrivere così (in questo modo ho gli stessi termini al denominatore):
>
> $$
> \textcolor{blue}{= (n-1)! \cdot \left( \frac{1}{k(k-1)!(n-k-1)!} + \frac{1}{(k-1)!(n-k)(n-k-1)!} \right)}
> $$
>
> Faccio il minimo comune multiplo $k(k-1)!(n-k)(n-k-1)!$:
>
> $$
> \textcolor{blue}{= (n-1)! \cdot \frac{(n-k)+k}{k(k-1)!(n-k)(n-k-1)!}}
> $$
>
> Sopra sommo e sotto ricordo che $k(k-1)! = k!$ e che $(n-k)(n-k-1)! = (n-k)!$.
>
> Quindi ottengo:
>
> $$
> \textcolor{blue}{= (n-1)! \cdot \frac{n}{k!(n-k)!}}
> $$
>
> $$
> \textcolor{blue}{= \frac{n(n-1)!}{k!(n-k)!}}
> $$
>
> $$
> \textcolor{blue}{= \frac{n!}{k!(n-k)!} = \binom{n}{k}}
> $$
>
> Come volevamo dimostrare.