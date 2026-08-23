# [Sigma-algebra]{.text-red}

Consideriamo un insieme $$X$$ ed un insieme [$$X$${.text-red}] di suoi possibili sottoinsiemi:

[$$X$${.text-red}] è detto **sigma-algebra** se valgono le proprietà:

I. $$\emptyset$$ e $$X$$ appartengono a [$$X$${.text-red}]
> cioè vi appartengono sia l'insieme vuoto che tutto l'insieme di partenza

II. Se $$A$$ appartiene ad [$$X$${.text-red}] allora anche l'insieme complementare $$\bar{A}$$ di $$A$$ appartiene a [$$X$${.text-red}]
> Il complementare è quell'insieme tale che $$A \cup \bar{A} = X$$ ed $$A \cap \bar{A} = \emptyset$$

III. Se $$(A_n)$$ è una successione di insiemi appartenenti ad [$$X$${.text-red}] allora anche
$$
\bigcup_{n=1}^{\infty} (A_n)
$$
appartiene ad [$$X$${.text-red}]
> cioè se l'insieme [$$X$${.text-red}] contiene infiniti insiemi in successione allora contiene anche l'unione di tutti gli insiemi della successione

Una coppia ordinata $$(X, [$$X$${.text-red}])$$ è detta **spazio misurabile**.