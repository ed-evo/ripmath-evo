# Formula di Bayes
## (teorema della probabilità delle cause)

La formula di Bayes è detta anche teorema di Bayes in forma elementare.

Siano $E_1$ ed $E_2$ due eventi qualsiasi; abbiamo visto (proprietà moltiplicativa) che vale:

$$
\textcolor{red}{P(E_2) \cdot P(E_1|E_2) = P(E_1) \cdot P(E_2|E_1)}
$$

che posso anche scrivere come:

$$
\textcolor{red}{P(E_1|E_2) = \frac{P(E_2|E_1) \cdot P(E_1)}{P(E_2)}}
$$

Questa è la cosiddetta formula di Bayes (o anche teorema di Bayes in forma elementare).
Questa formula si può estendere ad un evento $E$ riferito a più eventi tra loro indipendenti (teorema di Bayes).

Dato l'evento $E$ e gli eventi $E_1, E_2, E_3, \dots, E_n$ che siano tra loro indipendenti ($E_j \cap E_k = \emptyset$ per $j, k = 1, 2, 3, \dots, n$ con $j \neq k$), allora vale la relazione:

$$
\textcolor{red}{P(E_j|E) = P(E_j) \cdot \frac{P(E|E_j)}{\sum_{k=1}^{n} P(E_k) \cdot P(E|E_k)}}
$$

> **Esercizio:**
> Una fabbrica acquista dei pezzi lavorati presso 3 aziende $A$, $B$ e $C$ nelle percentuali del $20\%$, $30\%$ e $50\%$ rispettivamente; sapendo che la percentuale di pezzi difettosi è:
> - azienda $A = 3\%$ di pezzi difettosi
> - azienda $B = 4\%$ di pezzi difettosi
> - azienda $C = 2\%$ di pezzi difettosi
> 
> Calcolare la probabilità che, trovando un pezzo difettoso, esso provenga dall'azienda $A$.
> 
> Evento $E$: il pezzo è difettoso
> Evento $E_1$: il pezzo proviene dall'azienda $A$
> Evento $E_2$: il pezzo proviene dall'azienda $B$
> Evento $E_3$: il pezzo proviene dall'azienda $C$
> 
> Applichiamo la formula di Bayes:
> 
> $$
> P(E_1|E) = P(E_1) \cdot \frac{P(E|E_1)}{P(E_1) \cdot P(E|E_1) + P(E_2) \cdot P(E|E_2) + P(E_3) \cdot P(E|E_3)}
> $$
> 
> $P(E_1) = 20/100 = 1/5$ probabilità che il pezzo provenga dall'azienda $A$
> $P(E_2) = 30/100 = 3/10$ probabilità che il pezzo provenga dall'azienda $B$
> $P(E_3) = 50/100 = 1/2$ probabilità che il pezzo provenga dall'azienda $C$
> $P(E|E_1) = 3/100$ probabilità che il pezzo proveniente dall'azienda $A$ sia difettoso
> $P(E|E_2) = 4/100 = 1/25$ probabilità che il pezzo proveniente dall'azienda $B$ sia difettoso
> $P(E|E_3) = 2/100 = 1/50$ probabilità che il pezzo proveniente dall'azienda $C$ sia difettoso
> $P(E_1|E)$ = probabilità che il pezzo difettoso provenga dall'azienda $A$
> 
> $$
> P(E_1|E) = \frac{1}{5} \cdot \frac{3/100}{1/5 \cdot 3/100 + 3/10 \cdot 1/25 + 1/2 \cdot 1/50}
> $$
> 
> $$
> = \frac{3/500}{3/500 + 3/250 + 1/100} = \frac{3/500}{14/500}
> $$
> 
> $$
> = 3/500 \cdot 500/14 = 3/14 = 0,214\dots \approx 21\%
> $$
> 
> La probabilità che il pezzo difettoso provenga dall'azienda $A$ è del $21\%$.
> 
> Per completare:
> 1) calcolare la probabilità che il pezzo difettoso provenga dall'azienda $B$ [Soluzione](lchfa.html)
> 2) calcolare la probabilità che il pezzo difettoso provenga dall'azienda $C$ [Soluzione](lchfb.html)