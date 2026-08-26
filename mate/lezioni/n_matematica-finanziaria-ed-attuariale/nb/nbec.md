# Tasso medio per più impieghi

Supponiamo di avere più capitali impiegati con interesse diverso, il problema che ci poniamo è come trovare il tasso per sostituire a tali capitali la loro somma riferendoci ad una scadenza comune.

Ho impiegato il capitale di $4000\text{ €}$ al tasso del $2,50\%$ ed un altro di $5000\text{ €}$ al tasso del $3\%$. A quale tasso dovrei impiegare il capitale totale di $9000$ euro per avere lo stesso montante fra $6$ anni?

**Dati:**
- capitale1 = $4000\text{ €}$ $\quad i=0,025$
- capitale2 = $5000\text{ €}$ $\quad i=0,030$
- totale = $9000\text{ €}$ $\quad i = x$

Troviamo il tasso da applicare ai $9000$ euro per avere lo stesso risultato fra $6$ anni.

Riporto tutti i dati alla scadenza, cioè fra $6$ anni.
Traccio la retta dei tempi.

Imposto l'equazione:

$$
9000 \cdot (1+i)^6 = 4000 \cdot (1+0,025)^6 + 5000 \cdot (1+0,030)^6
$$

$$
9000 \cdot (1+i)^6 = 4000 \cdot (1,025)^6 + 5000 \cdot (1,030)^6
$$

Per semplicità divido tutto per $1000$:

$$
9 \cdot (1+i)^6 = 4 \cdot (1,025)^6 + 5 \cdot (1,030)^6
$$

$$
(1+i)^6 = \frac{4 \cdot 1,025^6 + 5 \cdot 1,030^6}{9}
$$

Leggo sulle tavole e sostituisco:

$$
(1+i)^6 = \frac{4 \cdot 1,15969342 + 5 \cdot 1,19405230}{9} = 1,178781687
$$

Per calcolare $x$ conviene, sulle tavole, fare l'interpolazione rispetto ai tassi essendo il tempo uguale a $6$ anni.

Il mio valore è compreso fra $1,17676836$ che è il tasso del $2,75\%$ e $1,19405230$ che è il tasso del $3\%\$, quindi il tasso che cerco sarà compreso fra $0,0275$ e $0,030$.

$$
1,17676836 \rightarrow 0,0275
$$
$$
1,178781687 \rightarrow 0,0275+x
$$
$$
1,19405230 \rightarrow 0,030
$$

Imposto l'interpolazione: la differenza fra il terzo ed il primo valore sta alla differenza fra il terzo ed il primo tasso come la differenza fra il secondo ed il primo valore sta alla differenza fra il secondo ed il primo tasso (che è $x$).

$$
(1,19405230-1,17676836):(0,030-0,0275) = (1,178781687-1,17676836):x
$$

$$
(0,01728394):(0,0025) = (0,002013327):x
$$

$$
x = \frac{0,0025 \cdot 0,002013327}{0,01728394} = 0,000291214
$$

Quindi il mio tasso sarà:

$$
0,0275+x = 0,0275+0,000291214 = 0,027791214
$$

che approssimo a:

$$
i = 0,0278
$$

Quindi per avere lo stesso montante dovrei impiegare il capitale di $9000\text{ €}$ al tasso del $2,78\%$.