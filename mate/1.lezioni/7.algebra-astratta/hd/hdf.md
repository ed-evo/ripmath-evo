# Epimorfismo

Diciamo che si ha un epimorfismo se abbiamo un morfismo e l'applicazione $f$ è suriettiva: cioè la seconda struttura viene tutta coperta.

> **Definizione:** Date due strutture $(A, \times)$ e $(B, \otimes)$ dotate dell'operazione $\times$ sull'insieme $A$ e $\otimes$ sull'insieme $B$, se l'applicazione 
> $f: A \to B$ 
> è un morfismo ed è suriettiva, allora $f$ è un epimorfismo fra le due strutture.

***

Vediamo un esempio di epimorfismo:

Consideriamo le due strutture:
- $(\mathbb{R}, \times)$: cioè l'insieme dei numeri razionali con l'operazione di moltiplicazione.
- $(\mathbb{R}^+, \otimes)$: cioè l'insieme dei numeri reali positivi o nulli con l'operazione di moltiplicazione.

Per farti capire meglio ti lascio le moltiplicazioni con simboli diversi.

Consideriamo l'applicazione:
$f: \mathbb{R} \to \mathbb{R}^+ \quad f(a) = a^2$
che trasforma ogni numero nel suo quadrato.

Applichiamo la definizione di morfismo per due elementi $a$ e $b$ di $\mathbb{Q}$:

$$
f(a) \otimes f(b) = f(a \times b)
$$

$$
a^2 \otimes b^2 = (a \times b)^2
$$

Per mostrare la validità dell'uguaglianza basta ricordare la regola del prodotto fra due potenze con lo stesso esponente ma con basi diverse.

Quindi $f$ è un omomorfismo fra le due strutture (l'operazione è la stessa) e, siccome ogni elemento in $\mathbb{R}^+$ deriva da elementi di $\mathbb{R}$ e l'insieme $\mathbb{R}^+$ viene esaurito (si tratta della funzione tipo parabola con vertice nell'origine), $f$ è suriettiva, quindi si tratta di un epimorfismo.

Non si tratta invece di monomorfismo perché, a parte lo zero, un elemento di $\mathbb{R}^+$ è ottenuto sempre da due elementi di $\mathbb{R}$.