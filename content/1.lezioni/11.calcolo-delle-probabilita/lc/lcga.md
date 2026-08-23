# Campo di eventi
## (sigma-algebra o campo di Borel)

Se vuoi approfondire sulla [definizione di sigma-algebra](lcbba.html)

Sia dato un insieme $$S$$ di eventi elementari:
consideriamo una famiglia $$E$$ di sottoinsiemi di $$S$$ tale che valgano le proprietà:

- [**$$S$$ è un elemento dell'insieme $$E$$**]{.text-blue}
  [**$$S \in E$$**]{.text-blue}
- [**Se $$A$$ e $$B$$ sono sottoinsiemi di $$S$$ e sono elementi di $$E$$ allora anche**]{.text-blue}
  [**$$\overline{A}$$, $$\overline{B}$$, $$A \cap B$$, $$A \cup B$$ appartengono ad $$E$$**]{.text-blue}
  [in pratica significa che l'insieme $$E$$ è chiuso rispetto alle operazioni elementari di unione, intersezione e complementare]{.text-blue}

Chiameremo allora l'insieme $$E$$ **campo di eventi**

Corrisponde al concetto di [sigma-algebra](lcbba.html), infatti:

- poiché $$S \in E$$ anche il complementare di $$S$$, $$\overline{S} = \emptyset \in E$$
- Se l'insieme $$A \in E$$ allora anche il complementare $$\overline{A} \in E$$
- Siccome $$E$$ contiene anche l'unione dei suoi singoli elementi, allora vale anche la terza proprietà della sigma-algebra

> comunque, per semplicità, considereremo, per ora, $$E$$ come un insieme finito (discreto); più avanti, nelle distribuzioni di probabilità, considereremo anche campi di probabilità infiniti (continui)