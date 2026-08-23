# Problema

Se in un triangolo rettangolo è iscritto un quadrato con un lato sull'ipotenusa allora l'ipotenusa è divisa in $$3$$ segmenti in cui quello centrale è medio proporzionale fra gli altri due.

Costruiamo prima di tutto la figura.

> **Ipotesi:**
> $$\widehat{BAC}$$ = angolo retto
> $$GD$$, $$FE$$ perpendicolari a $$BC$$
> $$GDEF$$ è un quadrato
>
> **Tesi:**
> $$BD : DE = DE : EC$$

> Dimostriamo prima che sono simili i triangoli $$BDG$$ e $$AGF$$, poi dimostriamo che $$AGF$$ è simile a $$FEC$$. Per la proprietà transitiva della similitudine avremo che $$BDG$$ risulta simile a $$FEC$$ e quindi scriveremo la proporzione ricordando che i quattro lati del quadrato sono congruenti.

Considero i triangoli $$BDG$$ ed $$AGF$$:
essi hanno:
$$\widehat{BDG} = \widehat{GAF}$$ perché angoli retti (il primo è un angolo esterno di un quadrato, il secondo è retto per ipotesi).
Essendo $$GDEF$$ un quadrato con il lato $$DE$$ sull'ipotenusa del triangolo $$ABC$$, ne segue che $$GF$$ è parallelo a $$BC$$ e quindi:
$$\widehat{GBD} = \widehat{AGF}$$ perché angoli corrispondenti rispetto alle parallele $$BC$$ e $$GF$$ tagliate dalla trasversale $$AB$$.
Quindi, per il primo criterio di similitudine, i due triangoli sono simili.

Considero ora i triangoli $$AGF$$ ed $$ECF$$:
essi hanno:
$$\widehat{FAG} = \widehat{FEC}$$ perché angoli retti (il primo è retto per ipotesi, il secondo è un angolo esterno di un quadrato).
Essendo $$GDEF$$ un quadrato con il lato $$DE$$ sull'ipotenusa del triangolo $$ABC$$, ne segue che $$GF$$ è parallelo a $$BC$$ e quindi:
$$\widehat{GFA} = \widehat{ECF}$$ perché angoli corrispondenti rispetto alle parallele $$BC$$ e $$GF$$ tagliate dalla trasversale $$AC$$.
Quindi, per il primo criterio di similitudine, i due triangoli sono simili.

Allora, per la proprietà transitiva della similitudine posso dire che il triangolo $$GBD$$ è simile al triangolo $$FEC$$ e posso scrivere:

$$
BD : EF = GD : EC
$$

ed essendo $$EF = GD = DE$$ perché lati di un quadrato, ne segue la tesi:

$$
BD : DE = DE : EC
$$

come volevamo dimostrare.