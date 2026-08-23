# [Limite di una successione numerica reale]{.text-red}

In questa pagina consideriamo il concetto di limite relativamente alle successioni di numeri reali, concetto analogo a quello che viene considerato in analisi matematica per le funzioni.

> **Definizione**
>
> Diremo che la successione
>
> $$a_1, a_2, \dots, a_k, \dots$$
>
> tende al limite $$a$$ se, considerato in $$\mathbb{R}$$ un intorno $$U$$ di $$a$$, è possibile determinare un intorno $$V \subset \mathbb{N}$$ di $$\infty$$ tale che non appena il termine $$a_k$$ si trova nell'intorno $$U$$ di $$a$$, l'indice $$k$$ si trovi nell'intorno $$V$$.
>
> $$
> \lim_{k \to \infty} a_k = a \iff a_k \in U \implies k \in V
> $$

In pratica significa che se prendo un intorno di $$a$$ ed un intorno di $$\infty$$, quando il primo intorno si "restringe" allora si restringe anche il secondo intorno.

> **Nota:** Ho messo "restringe" fra virgolette perché concettualmente è un po' difficile considerare un intorno di infinito che si restringa. Intendo che, per l'insieme $$V$$ sulla retta reale, il bordo destro dell'insieme diventa sempre più grande, cioè diventa sempre più grande il numero $$k$$ bordo dell'insieme: chiariremo meglio il concetto.

Distinguiamo ora i due casi:

- [limite finito di una successione](qcca.html)
- [limite infinito di una successione](qccb.html)
- [casi possibili](qccc.html)