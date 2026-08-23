# [dimostrazione]{.text-red}

Devo dimostrare la legge dei confini:

Faccio riferimento alle leggi di definizione dell'algebra di Boole; a destra ti indico la legge applicata per ottenere il risultato.

$$
a + 1 = 1
$$

Parto da $$a + 1$$, so che:

$$
a + 1 = (a + 1) \cdot 1
$$ (seconda legge dell'identità)

$$
(a + 1) \cdot 1 = (a + 1) \cdot (a + a')
$$ (prima legge del complemento)

$$
(a + 1) \cdot (a + a') = a + (1 \cdot a')
$$ (prima legge distributiva letta a rovescio)

$$
a + (1 \cdot a') = a + a'
$$ (seconda legge dell'identità)

$$
a + a' = 1
$$ (prima legge del complemento)

Quindi, per la proprietà transitiva delle uguaglianze, leggendo il primo e l'ultimo termine delle uguaglianze otteniamo:

$$
a + 1 = 1
$$

come volevamo.

> **Nota:** Dimostriamo anche la formula complementare: nota che la dimostrazione è la stessa cambiando il prodotto in somma, cambiando lo $$0$$ in $$1$$ e considerando la stessa legge ma con numero diverso: seconda al posto della prima e prima al posto della seconda. Tenendo presente ciò, puoi fare tu la dimostrazione complementare e controllare poi i passaggi così ti serve di esercizio anche per ripassare le regole.

$$
a \cdot 0 = 0
$$

Parto da $$a \cdot 0$$, so che:

$$
a \cdot 0 = (a \cdot 0) + 0
$$ (prima legge dell'identità)

$$
(a \cdot 0) + 0 = (a \cdot 0) + (a \cdot a')
$$ (seconda legge del complemento)

$$
(a \cdot 0) + (a \cdot a') = a \cdot (0 + a')
$$