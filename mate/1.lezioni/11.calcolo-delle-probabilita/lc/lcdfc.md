# Esercizi più complicati

Per risolvere questi esercizi devi riscrivere il problema mettendolo nella forma succede questo o succede quello, succede questo e succede quest'altro: se i fatti sono incompatibili al posto di **o** puoi mettere il **+** mentre al posto di **e** puoi mettere il $$\cdot$$ se gli eventi sono indipendenti.

---

## Esercizio 1

**Trovare la probabilità, estraendo due carte da un mazzo di $$40$$, e rimettendo la carta nel mazzo prima della seconda estrazione, di estrarre una figura ed un asso**

Svolgimento

Il problema mi dice che devo estrarre la prima volta, poi di rimettere la carta nel mazzo ed estrarre una seconda volta: posso avere due possibilità:
- **I possibilità: come prima carta una figura e come seconda un asso**
- oppure
- **II possibilità: come prima carta un asso e come seconda una figura**

Per ottenere il risultato accade la prima o accade la seconda.
Quindi posso scrivere:
**Probabilità $$= (\text{possibilità I} + \text{possibilità II}) = (\text{probabilità di estrarre una figura}) \cdot (\text{probabilità di estrarre un asso}) + (\text{probabilità di estrarre un asso}) \cdot (\text{probabilità di estrarre una figura})$$**

Calcolo le singole probabilità:

**Possibilità I**
probabilità di estrarre una figura $$= \frac{12}{40}$$
probabilità di estrarre un asso $$= \frac{4}{40}$$

**Possibilità II**
probabilità di estrarre un asso $$= \frac{4}{40}$$
probabilità di estrarre una figura $$= \frac{12}{40}$$

$$
\text{Probabilità} = \frac{12}{40} \cdot \frac{4}{40} + \frac{4}{40} \cdot \frac{12}{40} = \frac{3}{100} + \frac{3}{100} = \frac{6}{100} \approx 0,06 = 6,0\%
$$

La probabilità è circa del $$6\%$$
> Nel $$6,0\%$$ lo zero dopo la virgola è importante perché indica il grado di precisione della misura (fino alla prima cifra decimale).

---

## Esercizio 2

**Abbiamo un'urna con $$10$$ palline bianche, $$20$$ rosse e $$30$$ nere: trovare la probabilità di estrarre due palline di colore diverso senza rimettere la prima pallina estratta nell'urna**

Svolgimento

Abbiamo $$6$$ possibilità:
I. Prima pallina bianca e seconda rossa
II. Prima pallina rossa e seconda bianca
III. Prima pallina bianca e seconda nera
IV. Prima pallina nera e seconda bianca
V. Prima pallina rossa e seconda nera
VI. Prima pallina nera e seconda rossa

La probabilità sarà data dalla somma delle varie possibilità:
**Probabilità $$= \text{possibilità I} + \text{possibilità II} + \text{possibilità III} + \text{possibilità IV} + \text{possibilità V} + \text{possibilità VI}$$**

$$
= (\text{probabilità di estrarre una pallina bianca}) \cdot (\text{probabilità di estrarre una pallina rossa}) + (\text{probabilità di estrarre una pallina rossa}) \cdot (\text{probabilità di estrarre una pallina bianca}) + (\text{probabilità di estrarre una pallina bianca}) \cdot (\text{probabilità di estrarre una pallina nera}) + (\text{probabilità di estrarre una pallina nera}) \cdot (\text{probabilità di estrarre una pallina bianca}) + (\text{probabilità di estrarre una pallina rossa}) \cdot (\text{probabilità di estrarre una pallina nera}) + (\text{probabilità di estrarre una pallina nera}) \cdot (\text{probabilità di estrarre una pallina rossa})
$$

Calcolo le singole probabilità per le varie possibilità:
le palline in totale sono $$60$$, nella seconda estrazione ne restano $$59$$

I. probabilità di estrarre una pallina bianca $$= \frac{10}{60} = \frac{1}{6}$$; probabilità di estrarre la seconda pallina rossa $$= \frac{20}{59}$$
II. probabilità di estrarre una pallina rossa $$= \frac{20}{60} = \frac{1}{3}$$; probabilità di estrarre la seconda pallina bianca $$= \frac{10}{59}$$
III. probabilità di estrarre una pallina bianca $$= \frac{10}{60} = \frac{1}{6}$$; probabilità di estrarre la seconda pallina nera $$= \frac{30}{59}$$
IV. probabilità di estrarre una pallina nera $$= \frac{30}{60} = \frac{1}{2}$$; probabilità di estrarre la seconda pallina bianca $$= \frac{10}{59}$$
V. probabilità di estrarre una pallina rossa $$= \frac{20}{60} = \frac{1}{3}$$; probabilità di estrarre la seconda pallina nera $$= \frac{30}{59}$$
VI. probabilità di estrarre una pallina nera $$= \frac{30}{60} = \frac{1}{2}$$; probabilità di estrarre la seconda pallina rossa $$= \frac{20}{59}$$

**Probabilità $$=$$**
$$
\frac{1}{6} \cdot \frac{20}{59} + \frac{1}{3} \cdot \frac{10}{59} + \frac{1}{6} \cdot \frac{30}{59} + \frac{1}{2} \cdot \frac{10}{59} + \frac{1}{3} \cdot \frac{30}{59} + \frac{1}{2} \cdot \frac{20}{59} = \frac{110}{177} \approx 0,621 = 62,1\%
$$

La probabilità è circa del $$62,1\%$$
> Per fare prima i calcoli puoi notare che le possibilità I con II, III con IV e V con VI hanno la stessa probabilità.

---

## Esercizio 3

**Trovare la probabilità, utilizzando un mazzo di $$52$$ carte, di estrarre $$3$$ carte dello stesso seme sempre rimettendo la carta estratta nel mazzo**

Svolgimento

"$$3$$ carte dello stesso seme" significa $$3$$ quadri oppure $$3$$ cuori oppure $$3$$ fiori oppure $$3$$ picche.

Abbiamo $$4$$ eventi composti:
I. Quadri la prima carta e la seconda e la terza
II. Cuori la prima carta e la seconda e la terza
III. Fiori la prima carta e la seconda e la terza
IV. Picche la prima carta e la seconda e la terza

Gli eventi composti sono fra loro incompatibili quindi applico la probabilità totale:
**Probabilità $$= \text{possibilità I} + \text{possibilità II} + \text{possibilità III} + \text{possibilità IV}$$**

Ogni possibilità è composta di $$3$$ eventi indipendenti, per calcolarne la probabilità applico la probabilità composta:
**$$= (\text{prima quadri}) \cdot (\text{seconda quadri}) \cdot (\text{terza quadri}) + (\text{prima cuori}) \cdot (\text{seconda cuori}) \cdot (\text{terza cuori}) + (\text{prima fiori}) \cdot (\text{seconda fiori}) \cdot (\text{terza fiori}) + (\text{prima picche}) \cdot (\text{seconda picche}) \cdot (\text{terza picche})$$**

Calcolo le singole probabilità:
Per fare prima notiamo che abbiamo lo stesso numero ($$13$$) di carte di quadri, cuori, fiori e picche quindi:
**probabilità di uscita di una carta di un seme particolare $$= \frac{13}{52} = \frac{1}{4}$$**

**Probabilità totale $$=$$**
$$
\frac{1}{4} \cdot \frac{1}{4} \cdot \frac{1}{4} + \frac{1}{4} \cdot \frac{1}{4} \cdot \frac{1}{4} + \frac{1}{4} \cdot \frac{1}{4} \cdot \frac{1}{4} + \frac{1}{4} \cdot \frac{1}{4} \cdot \frac{1}{4} = \frac{1}{16} = 0,0625 = 6,25\%
$$

La probabilità è del $$6,25\%$$

> Prova a risolvere l'esercizio senza rimettere la carta nel mazzo.

---

## Esercizio 4

**Abbiamo un'urna con $$10$$ palline bianche, $$20$$ rosse e $$30$$ nere: trovare la probabilità di estrarre contemporaneamente $$3$$ palline dello stesso colore**

Svolgimento

Devono uscire o tre palline bianche o $$3$$ palline rosse o tre palline nere.
Gli eventi sono incompatibili quindi applico il teorema della probabilità totale:
**Probabilità $$= (\text{probabilità 3 bianche}) + (\text{probabilità 3 rosse}) + (\text{probabilità 3 nere})$$**

Siccome le palline vengono estratte contemporaneamente mi conviene usare le combinazioni.

Calcolo le singole probabilità:

$$
\text{3 bianche} = \frac{C_{10,3}}{C_{60,3}} = \frac{6}{1711}
$$

$$
\text{3 rosse} = \frac{C_{20,3}}{C_{60,3}} = \frac{57}{1711}
$$

$$
\text{3 nere} = \frac{C_{30,3}}{C_{60,3}} = \frac{203}{1711}
$$

$$
\text{Probabilità totale} = \frac{6}{1711} + \frac{57}{1711} + \frac{203}{1711} = \frac{266}{1711} \approx 0,155 = 15,5\%
$$

La probabilità è circa del $$15,5\%$$

> **Nota:** potevo ancora applicare i teoremi per calcolare le probabilità di uscita di $$3$$ carte uguali: ad esempio (cuori la prima e cuori la seconda e cuori la terza) $$= \frac{10}{60} \cdot \frac{9}{59} \cdot \frac{8}{58} = \frac{6}{1711}$$ perché estrarre tre palline **contemporaneamente** equivale all'estrazione **senza rimettere** la pallina estratta nell'urna, ma il calcolo è più veloce usando le combinazioni.

**Esercizio:** prova a svolgere l'esercizio $$3$$ senza rimettere la carta nel mazzo ed usando le combinazioni.