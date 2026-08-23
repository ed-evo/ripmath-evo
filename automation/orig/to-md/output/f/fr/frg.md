# [Area del cerchio]{.text-red}

Facciamo ora per l'area del cerchio l'equivalente di quanto fatto per la lunghezza della circonferenza.

Considero una circonferenza di raggio $$r$$ e considero l'area di tutti i poligoni regolari in essa inscritti.

> **Nota:** In figura, per semplicità di rappresentazione, ne considero solo alcuni, ma tu devi pensarli tutti.

La misura dell'Area di tali poligoni (perimetro per apotema diviso due o meglio semiperimetro per apotema) aumenterà all'aumentare del numero dei lati e si avvicinerà indefinitamente al valore dell'area della circonferenza, che chiameremo per ora $$A_s$$.

Chiamando $$2p$$ il perimetro e quindi $$p$$ il semiperimetro e chiamando $$a$$ le apoteme avremo che le aree sono:

- $$p_3 \cdot a_3$$ area del triangolo equilatero inscritto
- $$p_4 \cdot a_4$$ area del quadrato inscritto
- $$p_5 \cdot a_5$$ area del pentagono regolare inscritto
- $$p_6 \cdot a_6$$ area dell'esagono regolare inscritto
- $$p_7 \cdot a_7$$ area dell'ettagono regolare inscritto

Avremo:

**[$$p_3 a_3 < p_4 a_4 < p_5 a_5 < p_6 a_6 < p_7 a_7 < \dots < A_s$$]{.text-red}**

C'è da dire subito che all'aumentare del numero dei lati le apoteme dei poligoni inscritti si avvicinano sempre più al valore del raggio $$r$$.

Considero poi anche tutti i poligoni regolari circoscritti.

> **Nota:** In figura, per semplicità di rappresentazione, ne considero solo alcuni, ma tu devi pensarli tutti.

L'area di tali poligoni (perimetro per raggio diviso due, perché l'apotema coincide con il raggio) diminuirà all'aumentare del numero dei lati e si avvicinerà indefinitamente al valore dell'area del cerchio.

Chiamando $$2p$$ il perimetro e quindi $$p$$ il semiperimetro avremo per le aree di poligoni regolari circoscritti:

- $$p_3 r$$ area del triangolo equilatero circoscritto
- $$p_4 r$$ area del quadrato circoscritto
- $$p_5 r$$ area del pentagono regolare circoscritto
- $$p_6 r$$ area dell'esagono regolare circoscritto
- $$p_7 r$$ area dell'ettagono regolare circoscritto

Avremo:

**[$$p_3 r > p_4 r > p_5 r > p_6 r > p_7 r > \dots > A_s$$]{.text-red}**

Quindi, raccogliendo, per l'area del cerchio potremo scrivere:

**[$$p_3 a_3 < p_4 a_4 < p_5 a_5 < p_6 a_6 < p_7 a_7 < \dots < A_s < \dots < p_7 r < p_6 r < p_5 r < p_4 r < p_3 r$$]{.text-red}**

Ora le due classi di aree dei poligoni inscritti e circoscritti formano due classi contigue di numeri perché:

- Sono classi separate: ogni area di poligono regolare inscritto è minore di ogni area di poligono regolare circoscritto.
- Godono dell'avvicinamento indefinito: dato un numero piccolo a piacere posso trovare un'area di poligono regolare circoscritto ed un'area di poligono regolare inscritto tali che la loro differenza sia minore del numero fissato (basta aumentare sufficientemente il numero dei lati).

Le due classi contigue individuano un unico elemento separatore cioè l'area del cerchio, come volevamo.

Visto che abbiamo trovato le aree dei poligoni facendo perimetro per apotema diviso $$2$$, potremo applicare il metodo anche al cerchio considerando la circonferenza come un poligono di infiniti lati: avremo che il perimetro coincide con la lunghezza della circonferenza e l'apotema coincide con il raggio, quindi:

$$
\textcolor{red}{A_s \text{ cerchio}} = \frac{\textcolor{red}{2\pi r}}{2} \cdot \textcolor{red}{r} = \textcolor{red}{\pi r^2}
$$

> **L'area del cerchio si ottiene moltiplicando il valore di pi greco per il quadrato del raggio**

### Problema
Trovare l'area del cerchio di raggio $$r = 5 \text{ cm}$$

#### Soluzione
$$A_s \text{ cerchio} = \pi r^2 = \pi \cdot 5^2 = \pi \cdot 25 = 25\pi \text{ cm}^2$$

> **Nota:** Data l'importanza dell'argomento lo ripeto ancora: questo è il valore matematico dell'area del cerchio. Il fatto che valga all'incirca $$78 \text{ cm}^2$$ ($$25 \cdot 3,14 \dots$$) ti deve essere noto, ma non deve essere scritto nello svolgimento del problema.