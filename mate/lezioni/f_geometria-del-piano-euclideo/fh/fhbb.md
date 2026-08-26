# Teorema

[In un parallelogramma gli angoli opposti sono congruenti]{.text-red-darken-1} e viceversa.
[Se in un quadrilatero gli angoli opposti sono congruenti allora il quadrilatero è un parallelogramma]{.text-red-darken-1}.

Dimostriamo prima il teorema diretto e poi il teorema inverso.

***

## [Teorema diretto]{.text-red-darken-1}

### In un parallelogramma gli angoli opposti sono congruenti

**Ipotesi:** $AB \parallel CD$, $BC \parallel AD$
**Tesi:** $\widehat{BCD} = \widehat{BAD}$, $\widehat{ABC} = \widehat{ADC}$

Dimostrazione (quasi uguale alla precedente):
Congiungo i punti $B$ e $D$ ed ottengo i due triangoli $ABD$ e $BDC$; essi hanno:

- l'angolo $\widehat{ABD}$ congruente all'angolo $\widehat{BDC}$ perché alterni interni rispetto alle parallele $AB$ e $CD$ tagliate dalla trasversale $BD$
- l'angolo $\widehat{ADB}$ congruente all'angolo $\widehat{DBC}$ perché alterni interni rispetto alle parallele $AD$ e $BC$ tagliate dalla trasversale $BD$
- il lato $BD$ in comune

Quindi i due triangoli $ABD$ e $BCD$ sono congruenti per il secondo criterio di congruenza dei triangoli (un lato e due angoli) e quindi hanno congruenti tutti gli elementi, in particolare $\widehat{BCD} = \widehat{BAD}$.

Per quanto riguarda gli altri due angoli basta osservare che sono somma di angoli congruenti e quindi congruenti come volevamo.

***

## [Teorema inverso]{.text-red-darken-1}

### Se in un quadrilatero gli angoli opposti sono congruenti allora il quadrilatero è un parallelogramma

**Ipotesi:** $\widehat{BCD} = \widehat{BAD}$, $\widehat{ABC} = \widehat{ADC}$
**Tesi:** $AB \parallel CD$, $BC \parallel AD$

Dimostrazione:
Essendo $ABCD$ un quadrilatero la somma degli angoli interni vale due angoli piatti.
Se gli angoli sono due a due congruenti allora due angoli susseguentisi valgono un angolo piatto.
Ad esempio consideriamo:

$$
\widehat{DAB} + \widehat{ABC} = \text{angolo piatto}
$$

Ma gli angoli $\widehat{DAB}$ e $\widehat{ABC}$ sono angoli coniugati interni rispetto alle rette $AD$ e $BC$ tagliate dalla trasversale $AB$ ed essendo congruenti ne segue che le due rette sono parallele.
Puoi fare lo stesso ragionamento per dimostrare che le altre due rette $AB$ e $CD$ sono parallele.

***

> Avendo dimostrato sia il teorema diretto che quello inverso i due fatti, parallelogramma e angoli opposti congruenti, saranno equivalenti.