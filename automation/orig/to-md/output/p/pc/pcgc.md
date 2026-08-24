# [dimostrazione]{.text-red}

Devo dimostrare la legge dell'assorbimento

Faccio riferimento alle leggi di definizione dell'algebra di Boole; a destra ti indico la legge applicata per ottenere il risultato

$$
a + (a \cdot b) = a
$$

parto da $a + (a \cdot b)$, so che

$$
a + (a \cdot b) = (a \cdot 1) + (a \cdot b)
$$ (seconda legge dell'identità)

$$
(a \cdot 1) + (a \cdot b) = a \cdot (1 + b)
$$ (seconda legge distributiva letta a rovescio)

$$
a \cdot (1 + b) = a \cdot (b + 1)
$$ (prima proprietà commutativa)

$$
a \cdot (b + 1) = a \cdot 1
$$ (legge dei confini dimostrata prima)

$$
a \cdot 1 = a
$$ (seconda legge dell'identità)

quindi, per la proprietà transitiva delle uguaglianze, leggendo il primo e l'ultimo termine delle uguaglianze otteniamo

$$
a + (a \cdot b) = a
$$

come volevamo

> **Nota:** Dimostriamo anche la formula complementare: nota che la dimostrazione è la stessa cambiando il prodotto in somma, cambiando lo $0$ in $1$ e considerando la stessa legge ma con numero diverso: seconda al posto della prima e prima al posto della seconda. Tenendo presente ciò, puoi fare tu la dimostrazione complementare e controllare poi i passaggi così ti serve di esercizio anche per ripassare le regole.

$$
a \cdot (a + b) = a
$$

parto da $a \cdot (a + b)$, so che

$$
a \cdot (a + b) = (a + 0) \cdot (a + b)
$$ (prima legge dell'identità)

$$
(a + 0) \cdot (a + b) = a + (0 \cdot b)
$$ (prima legge distributiva letta a rovescio)

$$
a + (0 \cdot b) = a + (b \cdot 0)
$$ (proprietà commutativa del prodotto)

$$
a + (b \cdot 0) = a + 0
$$ (legge dei confini dimostrata prima)

$$
a + 0 = a
$$ (prima legge dell'identità)

quindi, per la proprietà transitiva delle uguaglianze, leggendo il primo e l'ultimo termine delle uguaglianze otteniamo

$$
a \cdot (a + b) = a
$$

come volevamo