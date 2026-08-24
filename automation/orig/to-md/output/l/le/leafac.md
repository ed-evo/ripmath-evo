# [Distribuzione binomiale]{.text-red}
(o di Bernoulli)

Quanto fatto alla pagina precedente ci porta alla formula per calcolare la variabile aleatoria.
Facciamolo prima su un esempio.

**Trovare le varie probabilità di "uscita di testa" nel lancio di $5$ monete**

Dobbiamo trovare la formula per calcolare i seguenti valori delle singole probabilità della variabile aleatoria $\text{S}_5$:

| n° uscita teste | 5 teste | 4 teste | 3 teste | 2 teste | 1 testa | 0 teste |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| probabilità | $1/32$ | $5/32$ | $10/32$ | $10/32$ | $5/32$ | $1/32$ |

Per trovarle sarà sufficiente considerare i fattori dello sviluppo della [potenza quinta del binomio](../lb/lbda.html);
$p$ è la probabilità di uscita di testa per una moneta ($1/2$) e $q$ è la sua probabilità contraria (sempre $1/2$).

$$
\textcolor{red}{(p+q)^5 = \sum_{k=0,1,2,3,4,5} \binom{5}{k} \cdot p^k \cdot q^{5-k}}
$$

$$
\textcolor{red}{= 1 \cdot (1/2)^5 \cdot (1/2)^0 + 5 \cdot (1/2)^4 \cdot (1/2)^1 + 10 \cdot (1/2)^3 \cdot (1/2)^2 + 10 \cdot (1/2)^2 \cdot (1/2)^3 + 5 \cdot (1/2)^1 \cdot (1/2)^4 + 1 \cdot (1/2)^0 \cdot (1/2)^5}
$$

$$
\textcolor{red}{= 1/32 + 5/32 + 10/32 + 10/32 + 5/32 + 1/32}
$$

Possiamo quindi generalizzare la formula per calcolare la probabilità di uscita di testa $k$ volte su $n$ prove effettuate considerandola come il termine della potenza del binomio $(p+q)^n$ che ha il termine $p$ a potenza $k$:

$$
\textcolor{red}{\text{Probabilità} = \binom{n}{k} \cdot p^k \cdot q^{n-k}}
$$

Questi valori considerati al variare di $k$ forniscono una variabile aleatoria la cui rappresentazione è detta anche distribuzione binomiale (corrispondendo allo sviluppo della potenza del binomio) o anche distribuzione di Bernoulli.

- 1 moneta: $(a+b)^1$
- 2 monete: $(a+b)^2$
- 3 monete: $(a+b)^3$
- 4 monete: $(a+b)^4$
- 5 monete: $(a+b)^5$

Tutte le aree delle distribuzioni binomiali, somma dei rettangoli, essendo somma di probabilità, valgono $1$.
All'aumentare del numero di lanci effettuati le distribuzioni binomiali si avvicinano ad una curva detta curva a campana o curva di Gauss.
Una variabile aleatoria di tipo binomiale viene anche detta brevemente **variabile binomiale** e la indicheremo con la lettera $\text{S}$.

> **Nota:** Le probabilità $p$ e $q$ possono anche essere diverse: vedi questo [esempio](leafaca.html).