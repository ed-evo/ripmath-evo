# Definizione di corpo

Diamo ora la definizione di corpo: basterà aggiungere alla struttura di anello il fatto che esista per la seconda operazione un elemento neutro e che per ogni elemento sia presente un elemento opposto (con l'eccezione dell'elemento neutro della prima operazione).

> Al solito consideriamo la prima operazione come "addizione" e la seconda come "moltiplicazione", naturalmente dovremo adattare tali termini ed ogni insieme su cui studieremo le nostre strutture: parleremo comunque di moltiplicazione mentre, ad esempio, tra matrici quadrate considereremo il prodotto righe per colonne e negli insiemi considereremo l'operazione di intersezione.

Si definisce **Corpo $(K ; \oplus, \otimes)$** un insieme di enti $K$ formato da almeno due oggetti, su cui siano definite due operazioni, una che chiameremo di addizione $\oplus$, e una che chiameremo di moltiplicazione $\otimes$ che godano delle seguenti proprietà:

1. $(K ; \oplus)$ è un gruppo abeliano (commutativo).

2. L'operazione $\otimes$ è distributiva rispetto all'operazione $\oplus$, sia a destra che a sinistra, cioè:

   $$
   a \otimes (b \oplus c) = (a \otimes b) \oplus (a \otimes c)
   $$

   $$
   (b \oplus c) \otimes a = (b \otimes a) \oplus (c \otimes a)
   $$

   > E fin qui siamo ancora alla struttura ad anello.

3. Gli elementi di $K$, ad eccezione dell'elemento neutro rispetto all'addizione, formano un gruppo rispetto alla moltiplicazione: $(K - \{0\} ; \otimes)$ è un gruppo.

   > Sarebbe a dire che, oltre la struttura di semigruppo, esiste l'elemento neutro per la moltiplicazione e per ogni elemento (eccetto lo $0$) esiste l'inverso moltiplicativo.

> **Attenzione:** per la seconda operazione $\otimes$ non è richiesta la proprietà commutativa, cioè che:
> $$
> a \otimes b = b \otimes a
> $$