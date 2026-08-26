# Eventi indipendenti

È ora fondamentale introdurre il concetto di **eventi indipendenti**.

**Definizione:**
Si dice che l'evento $E_1$ è indipendente dall'evento $E_2$ se il fatto che si verifichi $E_2$ non altera le probabilità dell'evento $E_1$

$$
\textcolor{red}{P(E_1) = P(E_1|E_2)}
$$

> **Esempio di eventi indipendenti**
> Trovare la probabilità che estraendo una carta da un mazzo di 40 essa sia un asso oppure una figura.
> Gli eventi:
> - $E_1$: uscita di un asso
> - $E_2$: uscita di una figura
> sono tra loro indipendenti.
>
> **Esempio di eventi dipendenti**
> Trovare la probabilità che estraendo due carte da un mazzo di 40 (senza rimettere la carta estratta nel mazzo) la prima sia un asso e la seconda sia una figura.
> Gli eventi:
> - $E_1$: uscita di un asso
> - $E_2$: uscita di una figura
> sono tra loro dipendenti perché il primo evento fa variare la probabilità del secondo evento: i casi possibili per la seconda estrazione non sono più 40 ma 39.

Vediamo alcune proprietà importanti degli eventi indipendenti che derivano dalla definizione:

1. **Se $E_1$ è indipendente da $E_2$ allora anche $E_2$ è indipendente da $E_1$**
   Cioè la proprietà di indipendenza di eventi è reciproca.

   > Dalla formula per la probabilità composta:
   > $$
   > P(E_1) \cdot P(E_2|E_1) = P(E_1 \cap E_2) = P(E_2 \cap E_1) = P(E_2) \cdot P(E_1|E_2)
   > $$
   > Guardando il primo e l'ultimo termine, essendo per ipotesi $P(E_1) = P(E_1|E_2)$ ne segue:
   > $$
   > P(E_2|E_1) = P(E_2)
   > $$
   > come volevamo.

2. **Se gli eventi $E_1$ ed $E_2$ sono indipendenti allora sono indipendenti anche le coppie di eventi:**
   - $E_1, \overline{E_2}$
   - $\overline{E_1}, E_2$
   - $\overline{E_1}, \overline{E_2}$
   sono indipendenti.

   > Dimostriamo l'indipendenza della prima coppia.
   > So che $P(E_2|E_1) = P(E_2)$, devo dimostrare che $P(\overline{E_2}|E_1) = P(\overline{E_2})$.
   > So che, essendo complementari gli eventi $E_2$ e $\overline{E_2}$:
   > $$
   > P(E_2|E_1) + P(\overline{E_2}|E_1) = 1
   > $$
   > Per ipotesi $P(E_2|E_1) = P(E_2)$, quindi:
   > $$
   > P(\overline{E_2}|E_1) = 1 - P(E_2) = P(\overline{E_2})
   > $$
   > come volevamo.

Qualche testo usa, in modo equivalente, il termine di **indipendenza stocastica**.