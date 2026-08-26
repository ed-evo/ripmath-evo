# Monomorfismo

Diciamo che si ha un monomorfismo se abbiamo un morfismo e l'applicazione $f$ è iniettiva: cioè ad ogni elemento diverso della prima struttura corrisponde un solo elemento della seconda struttura.

> **Definizione:** Date due strutture $(A, x)$ e $(B, \otimes)$ dotate dell'operazione $x$ sull'insieme $A$ e $\otimes$ sull'insieme $B$, se l'applicazione 
> $f: A \to B$ 
> è un morfismo ed è iniettiva, allora $f$ è un monomorfismo fra le due strutture.

***

Vediamo un esempio di monomorfismo:
Consideriamo le due strutture:
- $(Z, +)$ cioè l'insieme dei numeri interi con l'operazione di somma.
- $(R, \oplus)$ cioè l'insieme dei numeri Reali con l'operazione di addizione.

Per farti capire meglio ti lascio le addizioni con simboli diversi. Consideriamo l'applicazione:
$f: Z \to R \quad f(a) = -a$
che trasforma ogni numero intero nel suo opposto.

Applichiamo la definizione di morfismo per due elementi $a$ e $b$ di $Z$:

$$
f(a) \oplus f(b) = f(a + b)
$$

$$
-a \oplus (-b) = -(a + b)
$$

per mostrare la validità dell'uguaglianza basta far cadere le parentesi:
$-(a + b) = -a - b = -a + (-b)$

quindi $f$ è un omomorfismo fra le due strutture (l'operazione è la stessa), e, siccome ad ogni elemento diverso in $Z$ corrisponde un solo elemento in $R$, l'applicazione è iniettiva e si tratta di un monomorfismo.

***

Vediamo ora un esempio che non sia un monomorfismo:
Consideriamo le due strutture:
- $(Q, \times)$ cioè l'insieme dei numeri razionali con l'operazione di moltiplicazione.
- $(R, \otimes)$ cioè l'insieme dei numeri Reali con l'operazione di moltiplicazione.

Per farti capire meglio anche qui ti lascio le moltiplicazioni con simboli diversi. Consideriamo l'applicazione:
$f: Q \to R \quad f(a) = \pm \sqrt{a}$
che trasforma ogni numero nel suo radicale algebrico.

Applichiamo la definizione di morfismo per due elementi $a$ e $b$ di $Q$:

$$
f(a) \otimes f(b) = f(a \times b)
$$

$$
\pm \sqrt{a} \otimes (\pm \sqrt{b}) = \pm \sqrt{a \times b}
$$

per mostrare la validità dell'uguaglianza basta ricordare la regola del prodotto fra due radicali con lo stesso indice. Quindi $f$ è un omomorfismo fra le due strutture (l'operazione è la stessa), ma, siccome ad ogni elemento in $Q$ corrispondono due elementi in $R$, l'applicazione $f$ non è univoca, quindi non si tratta di un monomorfismo.