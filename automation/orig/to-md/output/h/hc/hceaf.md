# esercizio

Mostrare la presenza della struttura ad anello per l'insieme $$H(2)$$ delle matrici $$2\times2$$ con le operazioni di addizione $$\oplus$$ e moltiplicazione riga per colonna $$\otimes$$.

***

Per ripassare: [le matrici quadrate](../../a/aj/ajb.html), [addizione](../../a/aj/ajdb.html), [prodotto righe per colonne](../../a/aj/ajdd.html).

> Il ragionamento fatto per le matrici quadrate $$2\times2$$ vale in generale per le matrici quadrate $$n\times n$$ per la parte relativa al gruppo.

***

## Dimostrazione:

dovremo mostrare:

- la presenza di un gruppo commutativo con la prima operazione
- la presenza di un semigruppo con la seconda operazione
- il fatto che la seconda operazione è distributiva rispetto alla prima

Cominciamo dal primo punto:

- Mostriamo che $$(H_2, \oplus)$$ è un gruppo; devono valere le proprietà:

    - $$\oplus$$ è interna infatti avremo sempre che la somma di due matrici quadrate è ancora una matrice quadrata dello stesso tipo.
    
    Facciamo un esempio pratico:
    $$
    \begin{pmatrix} \textcolor{red}{a_{1,1}} & \textcolor{red}{a_{1,2}} \\ \textcolor{red}{a_{2,1}} & \textcolor{red}{a_{2,2}} \end{pmatrix} \oplus \begin{pmatrix} \textcolor{red}{b_{1,1}} & \textcolor{red}{b_{1,2}} \\ \textcolor{red}{b_{2,1}} & \textcolor{red}{b_{2,2}} \end{pmatrix} = \begin{pmatrix} \textcolor{red}{a_{1,1}+b_{1,1}} & \textcolor{red}{a_{1,2}+b_{1,2}} \\ \textcolor{red}{a_{2,1}+b_{2,1}} & \textcolor{red}{a_{2,2}+b_{2,2}} \end{pmatrix}
    $$
    essendo la somma di due numeri interi ancora un numero intero segue quello che cercavamo.

    - $$\oplus$$ è associativa, infatti chiamati $$H_2(A)$$, $$H_2(B)$$ e $$H_2(C)$$ tre elementi di $$H_2$$ abbiamo:
    $$
    [H_2(A) \oplus H_2(B)] \oplus H_2(C) = H_2(A) \oplus [H_2(B) \oplus H_2(C)]
    $$
    Deriva dal fatto che la somma fra numeri naturali è commutativa.

    - $$\oplus$$ possiede l'elemento neutro che è la matrice:
    $$
    \begin{pmatrix} \textcolor{red}{0} & \textcolor{red}{0} \\ \textcolor{red}{0} & \textcolor{red}{0} \end{pmatrix}
    $$
    infatti sommando $$0$$ a qualunque elemento tale elemento non cambia.

    - ogni elemento $$H_2(A)$$ di $$H_2$$ possiede in $$\oplus$$ l'elemento simmetrico: infatti basta considerare la matrice formata dagli opposti della matrice di partenza:
    $$
    \begin{pmatrix} \textcolor{red}{a_{1,1}} & \textcolor{red}{a_{1,2}} \\ \textcolor{red}{a_{2,1}} & \textcolor{red}{a_{2,2}} \end{pmatrix} \oplus \begin{pmatrix} \textcolor{red}{-a_{1,1}} & \textcolor{red}{-a_{1,2}} \\ \textcolor{red}{-a_{2,1}} & \textcolor{red}{-a_{2,2}} \end{pmatrix} = \begin{pmatrix} \textcolor{red}{0} & \textcolor{red}{0} \\ \textcolor{red}{0} & \textcolor{red}{0} \end{pmatrix}
    $$

Quindi $$(H_2, \oplus)$$ è un gruppo; è commutativo perché la somma fra elementi delle matrici discende dalla somma fra numeri interi.

Mostriamo che $$(H_2, \otimes)$$ è un semigruppo:

- Basta mostrare che $$\otimes$$ è associativa, cioè chiamate $$H_2(A)$$, $$H_2(B)$$ e $$H_2(C)$$ tre elementi di $$H_2$$ abbiamo sempre:
    $$
    [H_2(A) \cdot H_2(B)] \cdot H_2(C) = H_2(A) \cdot [H_2(B) \cdot H_2(C)]
    $$
    Questo deriva dal fatto che nelle matrici quadrate $$2\times2$$ il prodotto riga per colonna è associativo: Mostriamolo: siccome la dimostrazione è piuttosto lunga ti faccio un esempio in una pagina a parte: [segui il link](hceafa.html).

- Mostriamo infine che la seconda operazione è distributiva rispetto alla prima, cioè presi $$H_2(A)$$, $$H_2(B)$$ e $$H_2(C)$$ tre elementi di $$H_2$$ avremo sempre:
    $$
    H_2(A) \otimes [H_2(B) \oplus H_2(C)] = H_2(A) \otimes H_2(B) \oplus H_2(A) \otimes H_2(C)
    $$
    $$
    [H_2(B) \oplus H_2(C)] \otimes H_2(A) = H_2(B) \otimes H_2(A) \oplus H_2(C) \otimes H_2(A)
    $$

> Anche qui i calcoli sono molto laboriosi, ma intuitivamente possiamo dire che questo deriva dalle proprietà dell'operazione somma fra numeri interi; comunque limitiamoci [ad un esempio](hceafb.html).

Quindi la struttura $$(H_2, \oplus, \otimes)$$ è un anello.

Siccome la moltiplicazione in $$H_2$$ non è commutativa avremo che l'anello non è commutativo.

Poiché la moltiplicazione in $$H_2$$ ha come elemento neutro l'elemento:
$$
\begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}
$$
e tale elemento è definito in modo univoco posso parlare di un solo elemento neutro e l'anello è unitario.