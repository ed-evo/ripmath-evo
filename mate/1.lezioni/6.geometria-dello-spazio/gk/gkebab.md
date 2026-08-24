# Superficie di rotazione di un segmento con un estremo sull'asse di rotazione

$$M$$ è il punto medio di $$AB$$
$$O$$ è il punto di intersezione dell'asse del segmento $$AB$$ con l'asse di rotazione $$CD$$

In pratica, in questo caso si tratta di un cono di altezza $$A'B'$$, apotema $$AB$$ e raggio $$AA'$$; quindi abbiamo, per la superficie di rotazione:

$$
\text{Area} = \pi \cdot AA' \cdot AB
$$

essendo $$MM'$$ la perpendicolare condotta dal punto medio $$M$$ del segmento $$AB$$, essa vale la metà di $$AA'$$, cioè $$AA' = 2MM'$$, quindi ho:

$$
\text{Area} = 2\pi \cdot MM' \cdot AB
$$

Ora considero i triangoli $$AA'B'$$ e $$MM'B'$$; essi hanno:
- $$AA' \parallel MM'$$ perché segmenti perpendicolari condotti alla stessa retta $$CD$$
- $$\widehat{ABA'} = \widehat{MB'M'}$$ perché in comune

Siamo nelle condizioni del teorema di Talete, quindi i due triangoli sono simili; potevo anche dire che, essendo retti, hanno i tre angoli uguali e quindi sono simili.

Considero ora i triangoli $$MM'B'$$ e $$MOB'$$; essi hanno:
- $$\widehat{MM'O} = \widehat{MM'B'}$$ perché retti
- $$\widehat{MOM'} = \widehat{M'MB'}$$ perché complementari dello stesso angolo $$\widehat{M'MO}$$

Cioè, sommati con lo stesso angolo valgono $$90^\circ$$ (stessa dimostrazione fatta nel secondo teorema di Euclide), quindi i due triangoli hanno angoli congruenti e quindi sono simili.

Allora, essendo $$AA'B'$$ simile a $$MM'B'$$ ed essendo $$MM'B'$$ simile a $$MOM'$$, avremo che (per proprietà transitiva) $$AA'B'$$ è simile a $$MOM'$$.

Posso quindi scrivere la proporzione:

$$
AB : MO = A'B' : MM'
$$

> **Nota:** Non ho capito la proporzione.

Applico la proprietà fondamentale (prodotto dei medi uguale al prodotto degli estremi):

$$
AB \cdot MM' = MO \cdot A'B'
$$

Sostituiamo nell'espressione dell'area trovata prima:

$$
\text{Area} = 2\pi \cdot MM' \cdot AB = 2\pi \cdot OM \cdot A'B'
$$

cioè:

$$
\text{Area} = 2\pi \cdot OM \cdot A'B'
$$

come volevamo dimostrare.