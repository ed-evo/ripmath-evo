# [Calcolo di i]{.text-red}

Partiamo sempre dalla formula della capitalizzazione composta

$$
M_t = C(1+i)^t
$$

vogliamo ricavare $i$
Leggo la formula alla rovescia

$$
C(1+i)^t = M_t
$$

Prima ricavo $(1+i)^t$; divido entrambi i termini per $C$

$$
(1+i)^t = \frac{M_t}{C}
$$

Per togliere l'esponente $t$ passo ai logaritmi decimali, così poi posso usare le proprietà dei logaritmi sulle potenze

$$
\log(1+i)^t = \log \frac{M_t}{C}
$$

Ora trasformo la potenza in prodotto ed il quoziente in differenza

$$
t \cdot \log(1+i) = \log M_t - \log C
$$

Divido tutto per $t$ ed ottengo

$$
\log(1+i) = \frac{\log M_t - \log C}{t}
$$

Possiamo utilizzare questa formula: una volta applicata dovremo trovare l'antilogaritmo e togliere $1$ dal risultato

$$
i = \text{Anti Log} \left[ \frac{\log M_t - \log C}{t} \right] - 1
$$

> **Osservazione:** Come vedi la formula è piuttosto complicata e, per applicarla, devo: trasformare i numeri in logaritmi, eseguire la sottrazione (e quindi devo fare il cologaritmo) infine, eseguiti i calcoli devo fare l'antilogaritmo e togliere $1$ dal risultato. Un procedimento piuttosto lungo e complicato, quindi in questo caso è preferibile o l'uso delle tavole finanziarie oppure l'utilizzo della formula del montante utilizzata come equazione.

Infatti partendo dalla formula del montante dividendo per $C$ otteniamo

$$
M_t = C(1+i)^t
$$

$$
C(1+i)^t = M_t
$$

$$
(1+i)^t = \frac{M_t}{C}
$$

Questa è la formula che useremo utilizzando le tavole.

Se invece voglio usare la calcolatrice posso fare

$$
(1+i)^t = \frac{M_t}{C}
$$

Per trovare $(1+i)$ faccio la radice $t$-esima da entrambe le parti ed ottengo

$$
(1+i) = \sqrt[t]{\frac{M_t}{C}}
$$

e quindi

$$
i = \sqrt[t]{\frac{M_t}{C}} - 1
$$

---

Vediamo un semplice esempio con l'uso delle tavole.

**Esercizio:**
Ho in banca un montante di € $13650,40$; sapendo deriva da un capitale di $11.000$ euro che è stato versato esattamente $14$ anni fa calcolare qual è il tasso medio che la banca mi ha applicato.

Applico la formula per trovare $M/C$:

$$
(1+i)^t = \frac{M_t}{C} = \frac{13650,40}{11000} = 1,240945455
$$

Ora sulle tavole dei montanti $(1+i)^n$ scorro le righe $14$ fino a trovare un valore inferiore e superiore a $1,240945455$, trovo:

- $1,23175573 \rightarrow 0,015$ ($1,50\%$)
- $1,27491682 \rightarrow 0,0175$ ($1,75\%$)

Quindi faccio l'interpolazione:

$$
\begin{aligned}
1,23175573 &\rightarrow 0,015 \\
1,240945455 &\rightarrow y_0 \\
1,27491682 &\rightarrow 0,0175
\end{aligned}
$$

$$
y_0 = \frac{(1,240945455 - 1,23175573) \cdot (0,0175 - 0,015)}{(1,27491682 - 1,23175573)} + 0,015 = 0,015532292
$$

Quindi approssimando posso dire che il tasso medio è stato $i = 0,0155$, cioè dell' $1,55\%$.

---

Vediamo lo stesso esempio con l'uso di una calcolatrice.

Ho in banca un montante di € $13650,40$; sapendo deriva da un capitale di $11.000$ euro che è stato versato esattamente $14$ anni fa calcolare qual è il tasso medio che la banca mi ha applicato.

Partiamo dalla formula

$$
i = \sqrt[t]{\frac{M_t}{C}} - 1
$$

$$
i = \sqrt[14]{\frac{13650,40}{11000}} - 1 =
$$

Imposto l'operazione sulla calcolatrice ricordando che per fare la radice $14$-esima basta elevare ad $1/14$ il radicando con il tasto $x^y$.

Questo è quello che vedo sul display della calcolatrice:

$$
(13650,40:11000)^{(1:14)} - 1
$$

Ed ottengo

$$
= 0,015539034
$$

che approssimo a $i = 0,0155$, cioè $1,55\%$.