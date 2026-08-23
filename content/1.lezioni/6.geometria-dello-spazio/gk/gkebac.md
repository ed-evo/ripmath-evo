# [Superficie di rotazione di un segmento esterno all'asse di rotazione]{.text-red}

$$M$$ è il punto medio di $$AB$$
$$O$$ è il punto di intersezione dell'asse del segmento $$AB$$ con l'asse di rotazione $$CD$$

In pratica in questo caso si tratta di un tronco di cono di altezza $$A'B'$$, apotema $$AB$$ e raggi $$AA'$$ e $$BB'$$, quindi abbiamo, per la superficie di rotazione:

$$
\text{Area laterale} = \pi \cdot AB \cdot (AA' + BB')
$$

Considero il trapezio $$AA'B'B$$, traccio per $$M$$ la parallela a $$BB'$$, ottengo $$MM'$$; essendo $$M$$ il punto medio di $$AB$$ ne deriva che $$M'$$ è il punto medio di $$A'B'$$ e che $$MM' = (AA' + BB')/2$$.

> **Nota:** È una dimostrazione piuttosto semplice che potresti fare come esercizio; se vuoi puoi [vedere qui la dimostrazione](gkebaca.html).

Nella formula di partenza moltiplico e divido per $$2$$ (tanto non cambia niente) per poter operare la sostituzione:

$$
\text{Area laterale} = 2\pi \cdot AB \cdot \frac{AA' + BB'}{2} = 2\pi \cdot AB \cdot MM'
$$

Ora considero i triangoli $$MM'O$$ e $$AHB$$, essi hanno:

$$\widehat{MM'O} = \widehat{AHB}$$ perché retti
$$\widehat{M'MO} = \widehat{HAB}$$ perché angoli con lati fra loro perpendicolari $$M'M \perp AH$$ e $$MO \perp AB$$

Allora i tre angoli sono uguali ed essendo $$MOM'$$ simile a $$AHB$$, per il primo criterio di similitudine, posso scrivere la proporzione:

$$
MM' : AH = OM : AB
$$

so che $$AH = A'B'$$

$$
MM' : A'B' = OM : AB
$$

Applico la proprietà fondamentale (prodotto dei medi uguale al prodotto degli estremi):

$$
AB \cdot MM' = MO \cdot A'B'
$$

Sostituiamo nell'espressione dell'area trovata prima:

$$
\text{Area laterale} = 2\pi \cdot AB \cdot MM' = 2\pi \cdot MO \cdot A'B'
$$

cioè:

$$
\text{Area laterale} = 2\pi \cdot OM \cdot A'B'
$$

come volevamo.