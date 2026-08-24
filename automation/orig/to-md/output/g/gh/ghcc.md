# [In un angoloide ogni faccia è minore della somma di tutte le altre facce]{.text-red}

> **Dimostrazione:**
>
> In un angoloide ogni faccia è minore della somma di tutte le altre.
>
> Anche qui la dimostrazione è semplice: prendiamo come esempio per la dimostrazione un angoloide a $5$ facce.
>
> **[Ipotesi]{.text-blue}**
> $P(a,b,c,d,e)$ è un angoloide.
>
> **[Tesi]{.text-blue}**
> $$
> \widehat{aPe} < \widehat{aPc} + \widehat{bPc} + \widehat{cPd} + \widehat{dPe}
> $$

Suddivido opportunamente il poligono generatore in triangoli congiungendo con diagonali i vertici; in questo modo suddivido l'angoloide in triedri (ti evidenzio i triangoli dei triedri in colori diversi).

So che in ogni triedro ogni faccia è minore della somma delle altre, quindi posso scrivere:

$$
\widehat{aPe} < \widehat{aPb} + \widehat{bPe}
$$

ma vale anche:

$$
\widehat{bPe} < \widehat{dPe} + \widehat{bPd}
$$

ed anche:

$$
\widehat{bPd} < \widehat{bPc} + \widehat{cPd}
$$

quindi, sostituendo nelle varie disuguaglianze ottengo:

$$
\widehat{aPe} < \widehat{aPb} + \widehat{dPe} + \widehat{bPc} + \widehat{cPd}
$$

e, se metto in ordine, ottengo la tesi; come volevamo.