[Unicità della forma normale disgiuntiva completa]{.text-red}

Diremo che un'espressione booleana è in **forma normale disgiuntiva completa** se:

1. è diversa da $0$
2. è in forma normale disgiuntiva
3. ogni prodotto è completo nel senso che contiene tutte le variabili

Se per semplicità consideriamo solamente tre variabili $x$, $y$ e $z$ allora una forma normale disgiuntiva completa può essere:

$$
\text{espressione} = xyz + x'y'z + xyz'
$$

> **Nota:** da notare che i termini di un'espressione di questo tipo possono essere al massimo $8$, infatti per ogni termine abbiamo due stati (variabile o complementare della variabile) ed i termini sono $3$ quindi devo prendere le disposizioni con ripetizione di $2$ stati presi $3$ a $3$ cioè $2^3 = 8$.
>
> I termini possibili sono:
> $xyz, \quad x'yz, \quad xy'z, \quad xyz', \quad x'y'z, \quad x'yz', \quad xy'z', \quad x'y'z'$
>
> Se sostituiamo le variabili $x$, $y$, $z$ con **primo posto**, **secondo posto**, **terzo posto** e sostituiamo $0$ alla variabile normale ed $1$ al complementare otteniamo le possibili terne:
> $000, \quad 100, \quad 010, \quad 001, \quad 110, \quad 101, \quad 011, \quad 111$
>
> Più in generale se abbiamo $n$ variabili allora avremo $2^n$ termini possibili. Abbiamo già visto che con $8$ variabili (un byte) sono possibili $256$ ottuple: $2^8 = 256$.

Se un'espressione in forma normale disgiuntiva non è completa allora si può rendere completa moltiplicando opportunamente il termine cui manca la variabile:

Se, ad esempio, ho il termine $xy'$ per renderlo completo moltiplico per $z + z'$; infatti per la legge del complemento $z + z' = 1$ e quindi posso scrivere:

$$
xy' = xy'(z + z') = xy'z + xy'z'
$$

**Vale la proprietà:**
**Ogni espressione booleana diversa da zero può essere posta in forma normale disgiuntiva completa e tale rappresentazione è unica.**

> **Esercizio:**
> Poniamo la seguente espressione booleana in forma disgiuntiva completa:
>
> $$
> (x'y)'z =
> $$
> (sposto l'operazione di complemento all'interno della parentesi)
>
> $$
> = (x'' + y')z =
> $$
> (doppio complemento)
>
> $$
> = (x + y')z =
> $$
> (moltiplico)
>
> $$
> = xz + y'z =
> $$
> (questa è una forma normale disgiuntiva, per renderla completa moltiplico per $1$, cioè il primo termine per $y + y'$ ed il secondo per $x + x'$)
>
> $$
> = x(y + y')z + (x + x')y'z =
> $$
> (eseguo le moltiplicazioni)
>
> $$
> = xyz + xy'z + xy'z + x'y'z =
> $$
> (idempotenza: ce ne sono due uguali)
>
> $$
> = xyz + xy'z + x'y'z
> $$