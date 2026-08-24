# Isomorfismo

Veniamo adesso all'applicazione che prende una struttura e la trasforma in una struttura equivalente, quindi ci servirà per individuare sottostrutture simili in strutture diverse, tipo la struttura dei numeri reali all'interno della struttura dei numeri complessi, oppure la struttura di $\mathbb{Z}$ all'interno di $\mathbb{Q}$ e così via di seguito: naturalmente questo lo sapevamo già, ma potremo applicare il metodo anche ad altri insiemi di enti per trovare relazioni che non conosciamo. In pratica corrisponderà a trovare la corrispondenza biunivoca fra strutture o fra parti di strutture.

Abbiamo un isomorfismo se abbiamo un morfismo che sia contemporaneamente monomorfismo ed epimorfismo, cioè tale che l'applicazione $f$ sia iniettiva ed anche suriettiva.

> **Definizione:** Date due strutture $(A, \times)$ e $(B, \otimes)$ dotate dell'operazione $\times$ sull'insieme $A$ e $\otimes$ sull'insieme $B$, se l'applicazione
> $f: A \rightarrow B$
> è un morfismo ed è contemporaneamente iniettiva e suriettiva, allora $f$ è un isomorfismo fra le due strutture.

Esempio:
Consideriamo le due strutture:
- $(N, +)$, cioè l'insieme dei numeri naturali con l'operazione di addizione
- $(10^N, \cdot)$, cioè l'insieme delle potenze del $10$ con esponente naturale con l'operazione di prodotto

E consideriamo l'applicazione:
$f: N \rightarrow 10^N \quad f(a) = 10^a$

Applichiamo la definizione per due elementi $a$ e $b$ di $N$:

$$
f(a) \cdot f(b) = f(a+b)
$$

$$
10^a \cdot 10^b = 10^{a+b}
$$

L'uguaglianza è valida (vedi le regole per il prodotto di potenze con la stessa base), quindi $f$ è un morfismo fra le due strutture.

L'applicazione è iniettiva perché ogni elemento diverso di $N$ viene trasformato in un solo elemento di $10^N$.
L'applicazione è suriettiva perché ogni elemento di $10^N$ deriva da un elemento di $N$.