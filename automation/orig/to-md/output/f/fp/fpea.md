# [Proprietà della bisettrice dell'angolo interno di un triangolo]{.text-red}

Vale il teorema:

**La bisettrice dell'angolo interno di un triangolo divide il lato opposto in parti proporzionali agli altri due lati**

So che la retta $AD$ è la bisettrice dell'angolo $\angle BAC$; devo dimostrare che vale $AB : AC = BD : DC$.

> **Ipotesi:** $\angle BAD = \angle DAC$
>
> **Tesi:** $AB : AC = BD : DC$

Dimostrazione:

> **Intuitivamente:** dobbiamo far vedere che vale il teorema di Talete, quindi cercheremo, mediante costruzioni, di richiamare la figura del teorema di Talete.

Prolungo il segmento $BA$ dalla parte di $A$ di un segmento $AE = AC$, quindi congiungo $E$ con $C$.

Il triangolo $\triangle AEC$ è isoscele e quindi avremo $\angle AEC = \angle ACE$.

Inoltre sappiamo che la somma degli angoli interni di un triangolo vale un angolo piatto, cioè la somma

$$
\angle AEC + \angle ACE + \angle CAE
$$

è uguale ad un angolo piatto.

Ma anche l'angolo

$$
\angle BAE = \angle BAD + \angle DAC + \angle CAE
$$

è uguale ad un angolo piatto.

Ed essendo tutti gli angoli piatti congruenti avremo:

$$
\angle AEC + \angle ACE + \angle CAE = \angle BAD + \angle DAC + \angle CAE
$$

Possiamo eliminare l'angolo $\angle CAE$ da entrambe le parti:

$$
\angle AEC + \angle ACE = \angle BAD + \angle DAC
$$

Ma noi sappiamo che gli angoli $\angle AEC$ e $\angle ACE$ sono congruenti per costruzione e gli angoli $\angle BAD$ e $\angle DAC$ sono congruenti per ipotesi.

Ne deriva che:

$$
\angle DAC = \angle ACE
$$

Essendo gli angoli congruenti $\angle DAC$ ed $\angle ACE$ angoli alterni interni rispetto alle rette $AD$ e $CE$, ne segue che le rette sono parallele e quindi siamo nelle condizioni del teorema di Talete, pertanto vale:

$$
\textcolor{red}{BA : AE = BD : DC}
$$

Essendo $AE = AC$ posso scrivere:

$$
\textcolor{red}{AB : AC = BD : DC}
$$

come volevamo.