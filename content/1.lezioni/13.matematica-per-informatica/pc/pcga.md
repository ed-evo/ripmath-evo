# [dimostrazione]{.text-red}

Purtroppo in algebra astratta non possiamo avere l'intuizione che abbiamo nella matematica più convenzionale, quale analisi o geometria del piano, inoltre le operazioni che consideriamo le chiamiamo somma e prodotto solamente per convenienza, ma possono essere molto diverse dalla somma e dal prodotto che conosciamo; ogni costruzione di algebra astratta obbedisce solamente ai postulati iniziali e, variando un postulato, possiamo ottenere risultati molto diversi ed inaspettati.

Tutto questo per dire che nelle dimostrazioni, non solo vanno considerati **tutti** i passaggi, senza poterne saltare nessuno, ma ogni passaggio deve essere sempre giustificato con il ricorso alla regola che lo permette: tutto ciò rende piuttosto pesante sia la dimostrazione dei teoremi che lo sviluppo degli esercizi (fra dimostrazione di teoremi e sviluppo di esercizi non vi è molta differenza).

Possiamo comunque considerare questa pagina e le altre con la dimostrazione di teoremi come degli esercizi e comportarci di conseguenza.

Purtroppo tutto ciò rende l'algebra astratta un qualcosa di molto pesante, almeno dal punto di vista dei passaggi: vedi ad esempio, più avanti, la dimostrazione della legge associativa.

Purtroppo non c'è niente da fare: è il prezzo che si deve pagare per essere sicuri di avere una matematica rigorosa ed esatta.

Devo dimostrare la legge dell'idempotenza:

Faccio riferimento alle leggi di definizione dell'algebra di Boole; a destra ti indico la legge applicata per ottenere il risultato.

$$
a + a = a
$$

Parto da $$a$$, so che:

$$
a = a + 0
$$ (prima legge dell'identità)

$$
a + 0 = a + (a \cdot a')
$$ (seconda legge del complemento)

$$
a + (a \cdot a') = (a + a) \cdot (a + a')
$$ (prima legge distributiva)

$$
(a + a) \cdot (a + a') = (a + a) \cdot 1
$$ (prima legge del complemento)

$$
(a + a) \cdot 1 = a + a
$$ (seconda legge dell'identità)

Quindi, per la proprietà transitiva delle uguaglianze, leggendo l'ultimo ed il primo termine delle uguaglianze otteniamo:

$$
a + a = a
$$

come volevamo.

> **Nota:** Dimostriamo anche la formula complementare: nota che la dimostrazione è la stessa cambiando il prodotto in somma, cambiando lo $$0$$ in $$1$$ e considerando la stessa legge ma con numero diverso: seconda al posto della prima e prima al posto della seconda. Tenendo presente ciò, puoi fare tu la dimostrazione complementare e controllare poi i passaggi così ti serve di esercizio anche per ripassare le regole.

$$
a \cdot a = a
$$

Parto da $$a$$, so che:

$$
a = a \cdot 1
$$ (seconda legge dell'identità)

$$
a \cdot 1 = a \cdot (a + a')
$$ (prima legge del complemento)

$$
a \cdot (a + a') = (a \cdot a) + (a \cdot a')
$$ (seconda legge distributiva)

$$
(a \cdot a) + (a \cdot a') = (a \cdot a) + 0
$$ (seconda legge del complemento)

$$
(a \cdot a) + 0 = a \cdot a
$$ (prima legge dell'identità)

Quindi, per la proprietà transitiva delle uguaglianze, leggendo l'ultimo ed il primo termine delle uguaglianze otteniamo:

$$
a \cdot a = a
$$

come volevamo.