# [Teorema inverso del precedente]{.text-red}

Vale il teorema:

**Se la congiungente il vertice con un punto del lato opposto divide il lato opposto in parti proporzionali agli altri due lati allora tale congiungente è la bisettrice dell'angolo al vertice**

So che vale $AB : AC = BD : DC$, devo dimostrare che la retta $AD$ è la bisettrice dell'angolo $\widehat{BAC}$.

> **Ipotesi:** [$AB : AC = BD : DC$]{.text-blue}
>
> **Tesi:** [$\widehat{BAD} = \widehat{DAC}$]{.text-blue}

> **Dimostrazione:**
>
> *Qui partiamo dalla validità del teorema di Talete, quindi partiamo dalle parallele e cerchiamo di arrivare a mostrare che gli angoli sono uguali*
>
> Siccome vale la proporzione posso riportare un segmento $AE = AC$ sul prolungamento di $BA$ dalla parte di $A$. Congiungo $E$ con $C$.
>
> Essendo valido il teorema inverso del teorema di Talete avremo che le rette $AD$ ed $EC$ sono fra loro parallele, e per il teorema inverso del fondamentale sul parallelismo avremo che gli angoli $\widehat{DAC}$ ed $\widehat{ACE}$ sono congruenti fra loro.
>
> Abbiamo inoltre che il triangolo $\triangle AEC$ è isoscele e quindi avremo $\widehat{AEC} = \widehat{ACE}$.
>
> Sappiamo che la somma degli angoli interni di un triangolo vale un angolo piatto, cioè la somma:
>
> $$
> \widehat{AEC} + \widehat{ACE} + \widehat{CAE}
> $$
>
> è uguale ad un angolo piatto.
>
> Ma anche l'angolo:
>
> $$
> \widehat{BAE} = \widehat{BAD} + \widehat{DAC} + \widehat{CAE}
> $$
>
> è uguale ad un angolo piatto.
>
> Ed essendo tutti gli angoli piatti congruenti avremo:
>
> $$
> \widehat{AEC} + \widehat{ACE} + \widehat{CAE} = \widehat{BAD} + \widehat{DAC} + \widehat{CAE}
> $$
>
> Possiamo eliminare l'angolo $\widehat{CAE}$ da entrambe le parti:
>
> $$
> \widehat{AEC} + \widehat{ACE} = \widehat{BAD} + \widehat{DAC}
> $$
>
> Ma noi sappiamo che gli angoli $\widehat{AEC}$ e $\widehat{ACE}$ sono congruenti per costruzione, e siccome $\widehat{DAC}$ ed $\widehat{ACE}$ sono congruenti fra loro per il teorema inverso del fondamentale sul parallelismo, ne deriva che gli angoli $\widehat{BAD}$ e $\widehat{DAC}$ sono congruenti, cioè la retta $AD$ è la bisettrice dell'angolo $\widehat{BAC}$, come volevamo.