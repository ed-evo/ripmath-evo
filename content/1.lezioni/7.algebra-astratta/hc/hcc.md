# [Semigruppo]{.text-red}

la prima struttura è ricalcata sull'insieme $$\mathbb{N}$$ con l'operazione di addizione od anche con l'operazione di moltiplicazione: è la struttura più semplice, ed è possibile individuarla in moltissimi argomenti.

Si definisce semigruppo ogni insieme di enti $$A$$ su cui sia definita un'operazione interna $$\mathbb{T}$$ associativa.

Cioè [**(A, $$\mathbb{T}$$)**]{.text-red} è semigruppo se $$\mathbb{T}$$ è associativa; vale a dire che per ogni elemento $$a$$, $$b$$, $$c$$ di $$A$$ vale:

$$
(a \mathbb{T} b) \mathbb{T} c = a \mathbb{T} (b \mathbb{T} c)
$$

Se l'operazione è commutativa il semigruppo si dice **commutativo** od anche **abeliano**.

Se inoltre un semigruppo è dotato di **elemento neutro** allora si chiama **monoide**.

> **Esempi:**
>
> 1) Considero l'insieme $$\mathbb{N}$$ dei numeri naturali con l'operazione di addizione:
> In questo caso ho un semigruppo perché l'addizione è associativa, è abeliano perché l'addizione è commutativa ed è un monoide perché esiste l'elemento neutro (lo zero).
>
> 2) Considero l'insieme $$\mathbb{N}$$ dei numeri naturali con l'operazione di moltiplicazione:
> In questo caso ho un semigruppo perché la moltiplicazione è associativa, è abeliano perché la moltiplicazione è commutativa ed è un monoide perché esiste l'elemento neutro (l'uno).
>
> 3) Considero l'insieme $$\mathbb{P}$$ dei numeri naturali pari con l'operazione di prodotto:
> In questo caso ho un semigruppo perché la moltiplicazione è associativa, è abeliano perché la moltiplicazione è commutativa. Non è un monoide perché in $$\mathbb{P}$$ non esiste l'elemento neutro (l'uno non è pari).
>
> 4) Considero l'insieme $$\mathbb{Q}$$ dei numeri razionali con l'operazione di divisione:
> L'operazione di divisione non è associativa infatti:
> $$
> (12 : 6) : 2 \neq 12 : (6 : 2)
> $$
> eseguendo i calcoli nel primo caso ottengo:
> $$
> (12 : 6) : 2 = 2 : 2 = 1
> $$
> nel secondo caso ottengo:
> $$
> 12 : (6 : 2) = 12 : 3 = 4
> $$
> Quindi l'insieme dei numeri razionali con l'operazione di divisione non forma un semigruppo.