# Soluzione matematica del problema

Faccio la somma delle varie aree dei rettangoli interni. Indico l'altezza di ogni rettangolo con $\textcolor{red}{f(x_k)}$;

> per ora questo valore è il valore minimo della funzione nell'intervallo considerato; in seguito vedremo che può essere un qualunque valore della funzione nell'intervallo

Le basi saranno i segmenti:
$\textcolor{red}{(x_1 - x_0)} \quad \textcolor{red}{(x_2 - x_1)} \quad \textcolor{red}{(x_3 - x_2)} \quad \textcolor{red}{(x_4 - x_3)} \quad \dots \quad \textcolor{red}{(x_k - x_{k-1})} \quad \dots \quad \textcolor{red}{(x_n - x_{n-1})}$

Le aree quindi saranno:

- primo rettangolo: $\textcolor{red}{(x_1 - x_0) \cdot f(x_1)}$
- secondo rettangolo: $\textcolor{red}{(x_2 - x_1) \cdot f(x_2)}$
- terzo rettangolo: $\textcolor{red}{(x_3 - x_2) \cdot f(x_3)}$
- quarto rettangolo: $\textcolor{red}{(x_4 - x_3) \cdot f(x_4)}$
- ...
- k-esimo rettangolo: $\textcolor{red}{(x_k - x_{k-1}) \cdot f(x_k)}$
- ...
- n-esimo rettangolo: $\textcolor{red}{(x_n - x_{n-1}) \cdot f(x_n)}$

Sommo i rettangoli ed uso una formula più compatta:

$$
\sum_{k=1}^{n} \textcolor{red}{f(x_k) \cdot (x_k - x_{k-1})}
$$

> **Nota:** Abbiamo fatto l'esempio con una funzione decrescente, potevamo farlo con una funzione crescente; in tal caso, per calcolare le aree avremmo dovuto prendere come altezza le funzioni calcolate all'inizio degli intervalli:
>
> **Area primo rettangolo** $(x_1 - x_0) \cdot f(x_0)$
> **Area secondo rettangolo** $(x_2 - x_1) \cdot f(x_1)$
> **Area terzo rettangolo** $(x_3 - x_2) \cdot f(x_3)$
> **Area quarto rettangolo** $(x_4 - x_3) \cdot f(x_3)$
> ...
> **Area (n-1)-esimo rettangolo** $(x_{n-1} - x_{n-2}) \cdot f(x_{n-2})$
> **Area n-esimo rettangolo** $(x_n - x_{n-1}) \cdot f(x_{n-1})$
>
> Però si può dimostrare che, al diminuire dell'intervallo, non ha più importanza considerare un estremo piuttosto che l'altro, perché quando l'intervallo è molto piccolo i valori agli estremi dell'intervallo considerato tenderanno a diventare uguali e quindi è possibile applicare il ragionamento anche a funzioni non monotone considerando, per essere precisi, il punto di minimo nell'intervallo e d'ora in avanti faremo così.