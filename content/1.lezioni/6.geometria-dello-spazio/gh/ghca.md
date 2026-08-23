# [In un triedro ogni faccia è minore della somma delle altre due]{.text-red}

Dimostriamo il teorema:
**In un triedro ogni faccia è minore della somma delle altre due**

Come dimostrazione è un po' laboriosa, ma ha una discreta importanza.

> Intuitivamente, se penso il triedro con una faccia fissa e le altre due incernierate che possano ruotare attorno al lato della faccia fissa, il teorema mi dice che, se ruoto le due facce portandole sull'angolo fisso, allora le due facce risulteranno in parte sovrapposte: è l'equivalente nello spazio del teorema sul triangolo: **in ogni triangolo un lato è minore della somma degli altri due**.

> Per **faccia** intendiamo l'angolo formato da due semirette uscenti dal vertice del triedro e passanti per i vertici del triangolo generatore.

**Ipotesi:**
$$
P(a,b,c) \text{ triedro}
$$

**Tesi:**
$$
\widehat{aPb} + \widehat{bPc} > \widehat{aPc}
$$

Supponiamo che $$\widehat{aPc}$$ sia la faccia maggiore (altrimenti il teorema è evidente); su di essa prendiamo $$\widehat{cPd} = \widehat{cPb}$$.

Ora passiamo a costruire il triangolo di base $$ABC$$.

Fissiamo sulla semiretta $$Pa$$ il punto $$A$$ e sulla semiretta $$Pc$$ il punto $$C$$. Il segmento $$AC$$ interseca la semiretta $$Pd$$ nel punto $$D$$. Dal punto $$P$$ riportiamo sulla semiretta $$b$$ il segmento $$PD = PB$$.

In questo modo determino il punto $$B$$ ed ho costruito il triangolo $$ABC$$.

Considero ora i triangoli $$PBC$$ e $$PCD$$; essi hanno:
- $$BC = CD$$ per costruzione
- $$\widehat{CPD} = \widehat{CPB}$$ sempre per costruzione
- $$PC$$ in comune

Quindi i due triangoli sono congruenti per il primo criterio di congruenza dei triangoli.

Considero ora il triangolo $$ABC$$; per le proprietà dei triangoli so che un lato è maggiore della differenza degli altri due lati, cioè:
$$
AB > AC - BC
$$
e siccome $$BC = CD$$ avrò:
$$
AB > AC - CD \text{ cioè } AB > AD
$$

Considero ora i triangoli $$PAB$$ e $$PAD$$; essi hanno:
- $$PA$$ in comune
- $$PB = PD$$ per costruzione

Ma i due triangoli $$PAB$$ e $$PAD$$ non sono congruenti ed avendo disuguali i terzi lati avranno disuguali anche gli angoli opposti a tali lati, e, in particolare:
$$
\widehat{APB} > \widehat{APD}
$$

Sommiamo ad entrambi i membri della disuguaglianza le due quantità uguali:
$$
\widehat{BPC} = \widehat{DPC}
$$

Otteniamo quindi:
$$
\widehat{APB} + \widehat{BPC} > \widehat{APD} + \widehat{DPC}
$$

E quindi, essendo $$\widehat{APD} + \widehat{DPC} = \widehat{APC}$$, otteniamo:
$$
\widehat{APB} + \widehat{BPC} > \widehat{APC}
$$

A tali angoli di triangoli corrispondono le facce del triedro:
$$
\widehat{aPb} + \widehat{bPc} > \widehat{aPc}
$$

Come volevamo dimostrare.