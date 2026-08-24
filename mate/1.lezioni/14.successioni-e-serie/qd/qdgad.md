# Criterio del confronto

Prima di introdurre il criterio del confronto fra serie a termini tutti positivi o tutti negativi parliamo di maggiorante e di minorante di una serie numerica.

### Definizione

Date le serie:

$$
a_1 + a_2 + a_3 + a_4 + \dots
$$

e

$$
b_1 + b_2 + b_3 + b_4 + \dots
$$

diremo che la prima serie è una **maggiorante** della seconda se vale:

$$
a_h \ge b_h \quad \forall h \in \mathbb{N}
$$

Similmente diremo che la seconda serie è una **minorante** della prima.

Il criterio del confronto fra serie numeriche dice semplicemente che:

**Se le serie sono a termini tutti positivi la maggiorante di una serie numerica divergente è anch'essa divergente, mentre la minorante di una serie numerica convergente è convergente.**

Similmente diremo:

**Se le serie sono a termini tutti negativi la minorante di una serie numerica divergente è anch'essa divergente, mentre la maggiorante di una serie numerica convergente è convergente.**

> **Esempio 1:**
> Consideriamo la serie
> $$
> s_1 = 1 + \frac{1}{2} + \frac{1}{4} + \frac{1}{8} + \frac{1}{16} + \dots
> $$
> Una serie minorante è:
> $$
> s_2 = \frac{1}{2} + \frac{1}{3} + \frac{1}{5} + \frac{1}{9} + \frac{1}{17} + \dots
> $$
> Infatti, in ogni addendo della seconda il denominatore della frazione è maggiore di $$1$$ del corrispondente della prima:
> $$
> s_2 = \frac{1}{1+1} + \frac{1}{2+1} + \frac{1}{4+1} + \frac{1}{8+1} + \frac{1}{16+1} + \dots
> $$
> E quindi le frazioni della seconda serie hanno un valore minore degli addendi corrispondenti nella prima serie.
> Essendo la prima serie convergente ne segue che anche la seconda è convergente.

> **Nota:** In pratica, negli esercizi, rovesciando il ragionamento, per mostrare che una serie a termini positivi è convergente basterà trovare una sua maggiorante che sia convergente, oppure per mostrare che è divergente troveremo una minorante che sia divergente.

> **Esempio 2:**
> Mostriamo che è divergente la serie
> $$
> s_1 = 2 + 1 + \frac{2}{3} + \frac{1}{2} + \frac{2}{5} + \frac{1}{3} + \frac{2}{7} + \dots
> $$
> Scriviamola come:
> $$
> s_1 = (1+1) + \frac{1+1}{2} + \frac{1+1}{3} + \frac{1+1}{4} + \frac{1+1}{5} + \frac{1+1}{6} + \frac{1+1}{7} + \dots
> $$
> Una sua serie minorante è la serie armonica:
> $$
> s_2 = 1 + \frac{1}{2} + \frac{1}{3} + \frac{1}{4} + \frac{1}{5} + \frac{1}{6} + \frac{1}{7} + \dots
> $$
> Infatti ogni termine della prima ha il numeratore aumentato di $$1$$ rispetto al termine corrispondente della serie armonica e quindi ogni addendo della prima ha valore maggiore del corrispondente addendo della seconda: essendo la serie armonica divergente ne segue che anche la prima serie è divergente.