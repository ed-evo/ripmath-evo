# Criterio generale di convergenza

Talvolta, soprattutto quando si vuol vedere la convergenza della serie stessa, diventa utile considerare le ridotte dei resti di una serie dette anche **ridotte parziali**; ad esempio la ridotta parziale $r_{k,h}$ del resto **k-esimo** della serie sopra considerata sarà:

$$
r_{k,h} = a_{k+1} + a_{k+2} + a_{k+3} + \dots + a_{k+h}
$$

Ora il resto **k-esimo** della serie è legato alle ridotte della serie dalla relazione:

$$
r_{k,h} = s_k - s_{k+h}
$$

> infatti facendo la differenza fra le ridotte tutti i termini oltre l'indice $k+h$ si elidono fra loro: infatti
>
> $$
> s_k = a_{k+1} + a_{k+2} + a_{k+3} + \dots + a_{k+h} + a_{k+h+1} + a_{k+h+2} + a_{k+h+3} + \dots
> $$
>
> $$
> s_{k+h} = a_{k+h+1} + a_{k+h+2} + a_{k+h+3} + \dots
> $$
>
> se faccio la differenza termine a termine ottengo:
>
> $$
> s_k - s_{k+h} = a_{k+1} + a_{k+2} + a_{k+3} + \dots + a_{k+h} = r_{k,h}
> $$

Ma allora basta applicare il criterio di convergenza di Cauchy alla successione delle ridotte

$s_{k+1}, s_{k+2}, s_{k+3}, \dots, s_{k+h}, s_{k+h+1}, s_{k+h+2}, \dots$

per ottenere il criterio di convergenza per la serie stessa.

> La serie
>
> $a_1 + a_2 + a_3 + \dots + a_n + \dots$
>
> converge se e solo se preso un numero reale $\epsilon$ piccolo a piacere risulta
>
> $|r_{k,h}| < \epsilon$
>
> per ogni $k > k_\epsilon$ (maggiore di un numero naturale opportuno dipendente da $\epsilon$) e per $h$ qualunque.

Come conseguenza abbiamo che, se la serie converge, vale:

$$
\lim_{k \to \infty} r_{k,h} = 0
$$

essendo $h$ un numero naturale fissato a piacere.

Siccome posso fissare $h$ a piacere ne segue che il resto $r_k$ di una serie convergente diventa infinitesimo al crescere di $k$, cioè converge a $0$.

Possiamo dire che la serie ed i suoi resti hanno tutti lo stesso **carattere**, cioè o sono tutti convergenti, o tutti divergenti o tutti indeterminati.