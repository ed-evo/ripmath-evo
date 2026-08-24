# [In un angoloide la somma delle facce è minore di un angolo giro]{.text-red}

Dimostriamo che **in un angoloide ogni faccia è minore di un angolo giro**.

> **Intuitivamente:** se fosse un angolo giro il bordo dell'angoloide si appiattirebbe diventando un piano e l'angoloide sarebbe un semispazio.

Dimostriamolo per un triedro; per un qualunque angoloide basterà prolungare i lati di un opportuno poligono generatore fino ad ottenere un triedro e successivamente usare il teorema che una faccia è minore della somma delle altre due.

[**Ipotesi**]{.text-blue}
$\textcolor{blue}{P(a,b,c)}$ è un triedro

[**Tesi**]{.text-blue}
$\textcolor{blue}{\widehat{aPb} + \widehat{aPc} + \widehat{bPc} < \text{Angolo giro}}$

Consideriamo il triedro $P(a,b,c)$.
Considero la generatrice $Pa$ e, oltre $P$, la considero come retta $m$ e quindi considero il triedro $P(b,c,m)$.

Per esso vale:

$$
\widehat{bPc} < \widehat{bPm} + \widehat{cPm}
$$

Sommiamo ad entrambi i membri gli angoli:

$$
\widehat{aPb} + \widehat{aPc}
$$

Otteniamo:

$$
\widehat{bPc} + \widehat{aPb} + \widehat{aPc} < \widehat{bPm} + \widehat{cPm} + \widehat{aPb} + \widehat{aPc}
$$

Ordiniamo per capire meglio:

$$
\widehat{aPb} + \widehat{bPc} + \widehat{cPa} < (\widehat{aPb} + \widehat{bPm}) + (\widehat{aPc} + \widehat{cPm})
$$

> **Nota:** Sappiamo che vale (per costruzione: l'abbiamo costruito noi):
> $$
> \widehat{aPb} + \widehat{bPm} = \text{angolo piatto}
> $$
> $$
> \widehat{aPc} + \widehat{cPm} = \text{angolo piatto}
> $$

E quindi posso scrivere:

$$
\widehat{aPb} + \widehat{bPc} + \widehat{cPa} < \text{angolo giro}
$$

Come volevamo.