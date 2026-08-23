# [dimostrazione]{.text-red}

Devo dimostrare la legge associativa

Faccio riferimento alle leggi di definizione dell'algebra di Boole; a destra ti indico la legge applicata per ottenere il risultato.
Questa dimostrazione è abbastanza complicata.

Voglio dimostrare che 
$$
(a + b) + c = a + (b + c)
$$

1. aggiungiamo $$a$$ a entrambi i termini dell'uguaglianza e dimostriamo prima che vale 
   $$
   a + (a + b) + c = a 
   $$
2. poi che vale 
   $$
   a + a + (b + c) = a 
   $$
3. poi aggiungeremo $$à$$ a entrambi i termini dell'uguaglianze e mostreremo che vale 
   $$
   à + (a + b) + c = à + (b \cdot c) 
   $$
4. e vale anche 
   $$
   à + a + (b + c) = à + (b \cdot c) 
   $$
5. per la proprietà transitiva delle uguaglianze

seguirà la tesi

$$
a + (a \cdot b) = (a \cdot 1) + (a \cdot b)
$$ (seconda legge dell'identità)

$$
(a \cdot 1) + (a \cdot b) = a \cdot (1 + b)
$$ (seconda legge distributiva letta a rovescio)

$$
a \cdot (1 + b) = a \cdot (b + 1)
$$ (proprietà commutativa della somma)

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

> **Nota:** Dimostriamo anche la formula complementare: nota che la dimostrazione è la stessa cambiando il prodotto in somma, cambiando lo $$0$$ in $$1$$ e considerando la stessa legge ma con numero diverso: seconda al posto della prima e prima al posto della seconda. Tenendo presente ciò, puoi fare tu la dimostrazione complementare e controllare poi i passaggi così ti serve di esercizio anche per ripassare le regole.

Voglio dimostrare che 
$$
(a \cdot b) \cdot c = a \cdot (b \cdot c) 
$$

1. aggiungiamo $$a$$ a entrambi i termini dell'uguaglianza e dimostriamo prima che vale 
   $$
   a + (a \cdot b) \cdot c = a 
   $$
2. poi che vale 
   $$
   a + a \cdot (b \cdot c) = a 
   $$
3. poi aggiungeremo $$à$$ a entrambi i termini dell'uguaglianze e mostreremo che vale 
   $$
   à + (a \cdot b) \cdot c = à + (b \cdot c) 
   $$
4. e vale anche 
   $$
   à + a \cdot (b \cdot c) = à + (b \cdot c) 
   $$
5. per la proprietà transitiva delle uguaglianze

seguirà la tesi

Eseguiamo i calcoli

1. aggiungo $$a$$ al primo termine 
   $$
   a + (a \cdot b) \cdot c = a 
   $$ 
   voglio dimostrare che vale 
   $$
   a + (a \cdot b) \cdot c = a 
   $$
   Parto da $$a + (a \cdot b) \cdot c$$

   $$
   a + (a \cdot b) \cdot c = a + ((a \cdot b) \cdot c)
   $$
   $$
   a + ((a \cdot b) \cdot c) = (a + (a \cdot b)) + (a \cdot c)
   $$ (prima legge distributiva)
   $$
   (a + (a \cdot b)) + (a \cdot c) = a + (a \cdot c)
   $$ (seconda legge dell'assorbimento dimostrata prima)
   $$
   a + (a \cdot c) = a
   $$ (prima legge dell'assorbimento dimostrata prima)

2. ora dimostro che vale 
   $$
   a + a \cdot (b \cdot c) = a 
   $$
   Parto da $$a + a \cdot (b \cdot c) =$$

   $$
   a + a \cdot (b \cdot c) = (a + a) \cdot (a + (b \cdot c))
   $$ (prima legge distributiva)
   $$
   (a + a) \cdot (a + (b \cdot c)) = a \cdot (a + (b \cdot c))
   $$ (idempotenza; dimostrata prima)
   $$
   a \cdot (a + (b \cdot c)) = a \cdot (a + b) \cdot (a + c)
   $$ (prima legge distributiva)
   $$
   a \cdot (a + b) \cdot (a + c) = (a \cdot (a + b)) \cdot (a + c)
   $$ (considero la prima operazione)
   $$
   (a \cdot (a + b)) \cdot (a + c) = a \cdot (a + c)
   $$ (seconda legge dell'assorbimento dimostrata prima)
   $$
   a \cdot (a + c) = a
   $$ (seconda legge dell'assorbimento dimostrata prima)

3. poi aggiungeremo $$à$$ a entrambi i termini dell'uguaglianze e mostreremo che vale 
   $$
   à + (a \cdot b) \cdot c = à + (b \cdot c) 
   $$
4. e vale anche 
   $$
   à + a \cdot (b \cdot c) = à + (b \cdot c) 
   $$
5. per la proprietà transitiva delle uguaglianze

seguirà la tesi