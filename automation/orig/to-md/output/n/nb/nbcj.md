# [Condizioni di equivalenza fra sconto commerciale e razionale]{.text-red}

A questo punto diventa automatico confrontare tra loro lo sconto commerciale e razionale rispetto ai rispettivi tassi; per trovare le condizioni per cui i due tassi di sconto sono equivalenti: basterà uguagliare tra loro i due sconti per un credito $C$ scadente al tempo $t$ ponendo:

$C_{it}$ sconto commerciale con tasso $i$
$\frac{C_{i't}}{1 + i't}$ sconto razionale con tasso $i'$

avremo che deve valere:

$$
C_{it} = \frac{C_{i't}}{1 + i't}
$$

dividendo entrambi i membri per $C_t$ ottengo:

$$
i = \frac{i'}{1 + i't}
$$

Questa è la condizione di equivalenza fra tasso commerciale e tasso razionale: quando i tassi di interesse coinvolti sono in questa relazione allora abbiamo che i due sconti danno lo stesso risultato.

Partendo da questa formula troviamo però anche la formula inversa: l'equivalenza fra il tasso razionale e quello commerciale. Trovando il minimo comune multiplo ottengo:

$$
\frac{i(1 + i't)}{1 + i't} = \frac{i'}{1 + i't}
$$

tolgo i denominatori:
$i(1 + i't) = i'$

eseguo la moltiplicazione e porto $i'$ prima dell'uguale:
$i + ii't - i' = 0$

lascio i termini con la $i'$ prima dell'uguale:
$ii't - i' = -i$

cambio segno e scrivo prima il termine positivo:
$i' - ii't = i$

raccolgo la $i'$:
$i'(1 - it) = i$

ricavo $i'$ e ottengo:

$$
i' = \frac{i}{1 - it}
$$

Quest'ultima è la condizione di equivalenza fra tasso razionale e tasso commerciale ad un certo tasso e per un certo tempo: quando i tassi di interesse coinvolti sono in questa relazione allora abbiamo che i due sconti danno lo stesso risultato.

> **Nota:** Da notare che l'equivalenza dipende oltre che dal tasso, anche dal tempo: variando il tempo varia anche il tasso equivalente.

***

**Esercizio 1:**
Dato lo sconto razionale del $4\%$ trovare il tasso equivalente per lo sconto commerciale supponendo una scadenza di $3$ mesi.

Dati:
- tasso razionale $i' = 0,04$
- tempo $t = 3 \text{ mesi} = \frac{3}{12} = \frac{1}{4} = 0,25$

applico la formula:

$$
i = \frac{i'}{1 + i't} = \frac{0,04}{1 + 0,04 \cdot 0,25} = \frac{0,04}{1,01} = 0,0396
$$

Il tasso commerciale equivalente è del $3,96\%$.

***

**Esercizio 2:**
Dato lo sconto commerciale del $4\%$ trovare il tasso equivalente per lo sconto razionale supponendo una scadenza di $3$ mesi.

Dati:
- tasso commerciale $i = 0,04$
- tempo $t = 3 \text{ mesi} = \frac{3}{12} = \frac{1}{4} = 0,25$

applico la formula:

$$
i' = \frac{i}{1 - it} = \frac{0,04}{1 - 0,04 \cdot 0,25} = \frac{0,04}{0,99} = 0,0404
$$

Il tasso razionale equivalente è del $4,04\%$.

***

È da osservare che, a parità di tempo, il tasso di sconto commerciale è inferiore al tasso razionale: infatti il primo si applica al valore del credito $C$, mentre il secondo si applica al valore attuale di $C$ portandolo indietro nel tempo, cioè si applica su $\frac{C}{1 + it}$ che è sempre inferiore a $C$.