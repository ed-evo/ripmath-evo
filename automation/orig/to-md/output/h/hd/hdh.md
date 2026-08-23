# [Automorfismo]{.text-red}

L'automorfismo è l'equivalente per l'isomorfismo dell'endomorfismo per il morfismo.

Si ha un automorfismo se si ha un isomorfismo e coincidono i due insiemi su cui sono definite le strutture.

> **Definizione:** Date due strutture $$ (A, \cdot) $$ e $$ (A, \otimes) $$ dotate delle operazioni $$ \cdot $$ e $$ \otimes $$ sull'insieme $$ A $$, se l'applicazione
> $$ f: A \to A $$
> è un isomorfismo, allora $$ f $$ è un automorfismo fra le due strutture.

Esempio:
Consideriamo le due strutture:
- $$ (\mathbb{R} \setminus \{0\}, \cdot) $$ cioè l'insieme dei numeri reali privati dello zero con l'operazione di moltiplicazione.
- $$ (\mathbb{R} \setminus \{0\}, \otimes) $$ sempre l'insieme dei numeri reali privati dello zero con l'operazione di moltiplicazione.

(Le due operazioni possono essere diverse: te le indico quindi in modo diverso anche se in questo esempio particolare sono uguali).

Consideriamo l'applicazione:
$$ f: \mathbb{R} \setminus \{0\} \to \mathbb{R} \setminus \{0\} \quad f(a) = \frac{1}{a} $$

> **Nota:** Ho tolto lo zero perché $$ 0 $$ non ha inverso. Avrei potuto lasciare lo zero introducendo il simbolo $$ \infty $$, ma perché complicarci la vita?

Applichiamo la definizione per due elementi $$ a $$ e $$ b $$ di $$ \mathbb{R} \setminus \{0\} $$:

$$
f(a) \otimes f(b) = f(a \cdot b)
$$

$$
\frac{1}{a} \otimes \frac{1}{b} = \frac{1}{(a \cdot b)}
$$

L'uguaglianza è valida (regole per il prodotto di frazioni), quindi $$ f $$ è un morfismo fra le due strutture.

L'applicazione è iniettiva perché ogni elemento diverso di $$ \mathbb{R} \setminus \{0\} $$ viene trasformato in un solo elemento di $$ \mathbb{R} \setminus \{0\} $$.
L'applicazione è suriettiva perché ogni elemento di $$ \mathbb{R} \setminus \{0\} $$ deriva da un elemento di $$ \mathbb{R} \setminus \{0\} $$.
Coincidendo gli insiemi di partenza, abbiamo un automorfismo.

Ora si può sviluppare quanto qui appreso ed applicarlo ai vari enti matematici per evidenziarne e studiarne le proprietà e le leggi, ma questo è ormai un compito che spetta all'Università.

*Fine capitolo di algebra astratta (almeno per ora)*