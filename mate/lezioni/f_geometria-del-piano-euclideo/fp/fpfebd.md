# Problema

Dato un qualunque triangolo isoscele e considerata la circonferenza in esso inscritta, dimostrare che la distanza della base dal punto di contatto della circonferenza con ognuno dei lati congruenti è la metà della misura dell'altezza relativa ad ognuno dei lati congruenti.

> **Nota:** Per risolvere il problema occorre sapere che i segmenti di tangente condotti da un punto esterno ad una circonferenza sono sempre congruenti; ancora non l'abbiamo fatto, quindi te lo anticipo, ma che ne dici di provare a dimostrarlo?

> **Suggerimento:** Qui il difficile è capire il testo e fare bene la figura: una volta fatta bene la figura il problema diventa elementare; nella figura per semplicità considero uno dei lati congruenti per volta, poi posso ripetere il ragionamento per l'altro.
> 
> $ED$ è la distanza dalla base del punto di contatto della circonferenza con il lato $AB$.
> 
> $BH$ è l'altezza relativa al lato $AH$.

Prima dimostro che i triangoli $BED$ e $BHC$ sono simili, poi costruisco il triangolo $BGF$ con $FG$ perpendicolare a $BG$ ed $F$ punto di contatto fra la circonferenza e la base (quindi $F$ è il punto medio) e dimostro poi che $BGF$ è simile a $BHC$ (con dimensioni metà) ed inoltre dimostro che è congruente a $BED$.

> **Ipotesi:**
> - $ABC$ triangolo isoscele
> - $ED \perp BC$
> - $BH \perp AC$
> 
> **Tesi:**
> - $BH = 2 ED$

Considero i triangoli $BED$ e $BHC$, essi hanno:

$\widehat{EBD} = \widehat{BCH}$ perché angoli alla base di un triangolo isoscele.

$\widehat{BDE} = \widehat{BHC}$ perché angoli retti (per ipotesi).

Quindi per il primo criterio di similitudine i due triangoli $BED$ e $BHC$ sono simili.

Costruisco il triangolo $BFG$ mandando dal punto di tangenza $F$ della circonferenza con la base la perpendicolare alla retta $BH$ sino ad incontrarla in $G$.

Considero ora i triangoli $BFG$ e $BCH$, essi hanno:

L'angolo $\widehat{CBH}$ in comune.

$\widehat{BGF} = \widehat{BHC}$ perché angoli retti.

Ne deriva che le rette $FG$ ed $HC$ sono parallele (avendo gli angoli corrispondenti rispetto alla trasversale $BH$ congruenti) ed essendo $BC = 2BF$ segue $BH = 2BG$ (esercizio sul corollario del teorema di Talete).

Dimostriamo infine che i triangoli $BDE$ e $BFG$ sono congruenti.

Infatti tali triangoli hanno:

gli angoli ordinatamente uguali perché sono simili (infatti $BDE$ è simile a $BHC$ e quest'ultimo è simile a $BFG$, quindi, per la proprietà transitiva della similitudine i due triangoli sono simili e quindi hanno tutti gli angoli congruenti).

$BE = BF$ perché segmenti di tangente condotti da un punto esterno ad una circonferenza.

Quindi per il secondo criterio di congruenza, avendo due angoli ed il lato compreso congruenti i due triangoli sono congruenti, in particolare $ED = BG$ ed essendo $BH = 2BG$ ne segue:

$$
BH = 2ED
$$

come volevamo.