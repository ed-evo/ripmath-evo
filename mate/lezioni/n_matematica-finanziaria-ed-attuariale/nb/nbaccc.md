# Calcolo di t

Partiamo sempre dalla formula della capitalizzazione composta

$$
M = C(1+i)^t
$$

vogliamo ricavare $t$
Leggo la formula alla rovescia

$$
C(1+i)^t = M
$$

Prima ricavo $(1+i)^t$; divido entrambi i termini per $C$

$$
(1+i)^t = \frac{M}{C}
$$

Per togliere l'esponente $t$ passo ai Logaritmi decimali, così poi posso usare le proprietà dei logaritmi sulle potenze

$$
\log (1+i)^t = \log \frac{M}{C}
$$

Ora trasformo la [potenza in prodotto](../../a/al/algc.html) ed il [quoziente in differenza](../../a/al/algb.html)

$$
t \cdot \log (1+i) = \log M - \log C
$$

Divido tutto per $\log(1+i)$ ed ottengo

$$
t = \frac{\log M - \log C}{\log(1+i)}
$$

***

Vediamo un semplice esempio con l'uso di una calcolatrice

Ho in banca un montante di € $13650,40$; sapendo deriva da un capitale di $11.000$ euro e che il tasso medio che la banca mi ha applicato è $i = 0,0155$ ($1,55\%$) trovare il tempo

partiamo dalla formula

$$
t = \frac{\log M - \log C}{\log(1+i)} = \frac{\log 13650,40 - \log 11000}{\log(1,0155)}
$$

imposto l'operazione sulla calcolatrice (ti mostro quello che si vede sul display)

$$
(\log 13650,40 - \log 11000) : \log 1,0155 =
$$

ed ottengo

$$
14,034986043
$$

Otteniamo $14$ anni e $3,5$ centesimi di anno cioè circa $4$ anni e $10$ giorni (vedremo meglio come calcolare i giorni quando affronteremo i temi non interi)

> **Nota:** Per il calcolo potremmo anche usare le tavole logaritmiche, ma dovremmo comunque usare la calcolatrice poi per eseguire la divisione fra numeratore e denominatore