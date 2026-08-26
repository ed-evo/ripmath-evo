# Problema

Il triangolo isoscele $ABC$ ha il perimetro che misura $30 \text{ cm}$. Sapendo che l'altezza relativa al lato obliquo è $\frac{6}{5}$ di quella relativa alla base $BC$, calcolare la misura dell'area del triangolo.

> **Nota:** Per risolvere il problema osserviamo che il punto $H$ è il punto medio della base e se da esso mando la perpendicolare $HN$ al lato obliquo, questa perpendicolare è la metà di $BK$.

Costruiamo prima di tutto la figura.

**Dati:**
- $AB = AC$
- $BK = \frac{6}{5} AH$
- $\hat{BHA} = \text{angolo retto}$
- $\hat{BKC} = \text{angolo retto}$
- $AB + BC + AC = 30 \text{ cm}$

**Trovare:**
- $AB = ?$
- $BC = ?$

***

> Ponendo $AH = x$ e costruendo $HN$ parallelo a $BK$ ottengo il triangolo $HNC$ simile a $BKC$ e questo mi permetterà di trovare tutti i lati in funzione di $AH$.

Pongo:
- $AH = x$
- $BK = \frac{6}{5} x$

Dal punto $H$ traccio la parallela $HN$ alla perpendicolare $BK$ ed ottengo il triangolo $HNB$ che è simile al triangolo $BKC$. Inoltre, essendo $H$ il punto medio di $BC$, ne segue che, per il corollario al teorema di Talete, il segmento $HN$ è la metà del segmento $BK$:

$$
HN = \frac{BK}{2} = \frac{3}{5} x
$$

Considero il triangolo $AHN$: esso è rettangolo e posso applicare il teorema di Pitagora per trovare (con la $x$) il lato $AN$.

> **Nota:**
> [$$AH^2 = AN^2 + NH^2$]{.text-red}
>
> [$$AN = \sqrt{AH^2 - NH^2} = \sqrt{x^2 - \left(\frac{3}{5}x\right)^2} = \frac{4}{5}x$]{.text-red}

Considero ora il triangolo rettangolo $AHC$; conosco le misure:
- $AN = \frac{4}{5} x$
- $HN = \frac{3}{5} x$

Posso applicare il secondo teorema di Euclide per trovare il valore di $NC$:

[$HN^2 = AN \cdot NC$]{.text-red}

[$NC = \frac{HN^2}{AN} = \frac{\frac{9}{25} x^2}{\frac{4}{5} x} = \frac{9}{20} x$]{.text-red}

Questo mi permette di trovare la misura di $AC$:

[$AC = AN + NC = \frac{4}{5} x + \frac{9}{20} x = \frac{16}{20} x + \frac{9}{20} x = \frac{25}{20} x = \frac{5}{4} x$]{.text-red}

Adesso, applicando il primo teorema di Euclide al triangolo $AHC$, posso trovare il valore di $HC$:

[$HC^2 = AC \cdot NC$]{.text-red}

[$HC = \sqrt{AC \cdot NC} = \sqrt{\frac{5}{4} x \cdot \frac{9}{20} x} = \frac{3}{4} x$]{.text-red}

Ottengo quindi:
[$BC = 2HC = \frac{6}{4}x = \frac{3}{2} x$]{.text-red}

Ed essendo:
[$AB = AC = \frac{5}{4} x$]{.text-red}

Finalmente posso utilizzare la relazione di partenza:
$AB + BC + AC = 30 \text{ cm}$

[$\frac{5}{4} x + \frac{5}{4} x + \frac{3}{2} x = 30$]{.text-red}

m.c.m $= 4$

[$\frac{5 + 5 + 6}{4} x = \frac{120}{4}$]{.text-red}

[$16x = 120$]{.text-red}
[$x = \frac{120}{16} = \frac{15}{2} \text{ cm} = 7,5 \text{ cm}$]{.text-red}

Abbiamo quindi:
- $AH = x = 7,5 \text{ cm}$
- $BC = \frac{3}{2} x = \frac{3}{2} \cdot \frac{15}{2} \text{ cm} = \frac{45}{4} \text{ cm} = 11,25 \text{ cm}$

E possiamo calcolare l'area:

[$\text{Area} = \frac{BC \cdot AH}{2} = \frac{\frac{45}{4} \cdot \frac{15}{2}}{2} = \frac{225}{8} = 28,125 \text{ cm}^2$]{.text-red}