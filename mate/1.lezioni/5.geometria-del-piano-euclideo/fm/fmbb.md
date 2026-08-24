# Equiscomponibilità fra parallelogramma e triangolo

Vale il teorema:

**Un parallelogramma è equivalente a un triangolo avente come base la stessa base e per altezza il doppio dell'altezza del parallelogramma**

**Ipotesi:**
- $ABC$ e $EBCD$ base congruente
- $AK = 2 AH$

**Tesi:**
- $ABC$ equivalente $EBCD$

Sovrapponiamo le basi e, siccome il triangolo $ABC$ ha il doppio dell'altezza del parallelogramma $EBCD$, per il [teorema ingenuo di Talete](../fk/fkc.html) avremo che (essendo $H$ il punto medio di $AK$) i punti $E$ ed $O$ sono punti medi dei lati $AB$ ed $AC$ del triangolo $ABC$.

Considero i triangoli $AEO$ e $OCD$, essi hanno:
- $AO = OC$ perché $O$ è il punto medio del lato $AC$
- $AE = DC$ per la proprietà transitiva della congruenza, infatti $AE = EB$ essendo $E$ il punto medio del lato $AB$, inoltre $EB = DC$ come lati opposti di un parallelogramma;
- $\widehat{EAO} = \widehat{OCD}$ perché alterni interni rispetto alle rette parallele $AE$ e $CD$ tagliate dalla trasversale $AC$

Per il primo criterio di congruenza i due triangoli sono congruenti e quindi le due figure sono equicomposte e quindi equivalenti (equiestese).

Infatti, considero il quadrilatero $EBCO$, se vi aggiungo il triangolo $AEO$ ottengo il triangolo $ABC$, se invece vi aggiungo il triangolo $ODC$ ottengo il parallelogramma $EBCD$.

> **NOTA**
> Come conseguenza avremo che tutti i triangoli aventi congruenti la base e l'altezza sono tra loro equivalenti:
> 
> infatti essendo tali triangoli equivalenti a parallelogrammi sappiamo che tali parallelogrammi avendo congruente la base e l'altezza sono equivalenti.
> 
> Tutti i triangoli $ABP$ sono tra loro equivalenti: basta far scorrere il punto $P$ lungo la retta dei vertici che è parallela alla base.