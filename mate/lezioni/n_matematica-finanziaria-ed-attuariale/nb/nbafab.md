# Calcolo del montante ad interesse composto per tempi interi con tasso non sulle tavole

Si impiega il capitale di $\text{€ } 20000$ per $18$ anni ad interesse composto al $2,673\%$.
Calcolarne il montante nei vari modi possibili e confrontare i risultati.

> In questo caso abbiamo un numero di anni tale da farci scartare a priori il calcolo diretto, inoltre il tasso non è sulle tavole.

Dati:
**$C = 20000,00\text{ €}$**
**$t = 18$**
**$i = 2,60\% = 0,02673$**

Eseguo l'esercizio nei vari modi possibili:

- Come già accennato scarto il metodo del calcolo del montante come prodotto di capitalizzazioni semplici perché $18$ anni renderebbero il calcolo troppo lungo.

- Utilizzo la calcolatrice:
  Imposto, sullo schermo il calcolo:
  $$
  20000 \cdot (1 + 0,02673)^{18}
  $$
  ottengo $32154,55687637$ che approssimo a $32154,56$.

  il montante è di **$\text{€ } 32154,56$**.

- Utilizzo le tavole logaritmiche a $7$ decimali:

  > Anche in questo esercizio calcolo solamente il fattore $(1,02673)^{18}$ e poi moltiplicherò il risultato per il capitale.

  $$
  M = 20000(1 + 0,02673)^{18}
  $$
  Calcolo il fattore $(1 + 0,02673)^{18}$ coi logaritmi; per la proprietà dei logaritmi ho:
  $$
  \log(1,02673)^{18} = 18 \cdot \log 1,02673
  $$

  Trasformo il numero in logaritmo.
  Leggo sulle tavole logaritmiche a $7$ decimali: $10267,3$ è compreso fra $10267$ e $10268$, quindi devo fare l'interpolazione:

  $10267,0 \rightarrow 0114436$
  $10267,3 \rightarrow 0114436 + x$ (differenza $423$)
  $10268,0 \rightarrow 0114859$

  Di fianco ai due risultati trovi il numero $428$ che corrisponde alla differenza fra i due valori trovati, mentre la differenza fra il mio valore e quello minore è:
  $$
  102673 - 102670 = 3
  $$
  Nella tabella del $423$ a $3$ corrisponde $126,9$ e questo è il mio $x$.
  Quindi scrivo:
  $$
  0114436 + 126,9 = 0114562,9 = 01145629
  $$
  (la virgola indica solo come eseguire la somma).

  $$
  \log 1,02673 = 0,01145629
  $$
  Quindi:
  $$
  \log(1 + 0,02673)^{18} = 18 \cdot \log(1,02673) = 18 \cdot 0,01145629 = 0,20621322
  $$

  Questo è il logaritmo, ora trovo l'antilogaritmo (lo trasformo in valore normale):
  $$
  \text{AntiLog } 0,20621322 = \dots
  $$
  Essendo la caratteristica $0$, il valore dell'antilogaritmo sarà compreso fra $1$ e $10$, quindi avremo una cifra significativa prima della virgola.

  La mia mantissa nella tavola a $7$ decimali ($20621322$) non c'è (il tempo $18$ anni è troppo elevato) e quindi considero $5$ cifre $20621,322$ e cerco fra i logaritmi normali.
  Leggo sulle tavole a $5$ decimali e trovo:

  $20602 \rightarrow 20629$
  (differenza $27$)
  $1607 \rightarrow 1608$

  Di fianco ai due risultati trovi il numero $27$ che corrisponde alla differenza fra i due valori della mantissa, mentre la differenza fra il mio valore e quello minore è:
  $$
  20621,322 - 20608 = 15,322
  $$
  Nella tabella del $27$ cerco $15,322$;
  il numero minore più vicino è $13,5$ cui corrisponde la sesta cifra del nostro numero, cioè $5$.
  mi resta $15,322 - 13,5 = 1,822$; sposto di un posto la virgola e cerco la settima cifra decimale.
  Nella tabella del $27$ cerco $18,22$;
  siccome non prenderò altre cifre perché l'errore supererebbe il valore della cifra trovata, stavolta prendo la cifra più vicina:
  il numero più vicino è $18,9$ cui corrisponde la settima cifra del nostro numero, cioè $7$.
  Ottengo $160757$.

  Quindi scrivo:
  $$
  \text{AntiLog } 0,20621322 = 1,60757
  $$

  E, calcolando il montante:
  $$
  M = 20000 \cdot 1,60757 = 32151,4\text{ €}
  $$
  il montante è di **$\text{€ } 32151,4$**.

- Utilizzo le tavole del prontuario per il fattore $(1+i)^n$:

  Stavolta il valore è compreso fra due valori:
  tasso del $2,50\%$ per $18$ anni $\rightarrow$$$1,55965872$
  tasso del $2,75\%$ per $18$ anni $\rightarrow$$$1,62956973$
  Per trovare il mio valore faccio l'interpolazione:

  $0,02500 \rightarrow 1,55965872$
  $0,02673 \rightarrow 1,55965872 + x$
  $0,02750 \rightarrow 1,62956973$

  Faccio la proporzione:
  $$
  (1,62956973 - 1,55965872) : 0,00250 = x : (0,02673 - 0,02500)
  $$
  $$
  0,06991101 : 0,00250 = x : 0,00173
  $$
  $$
  x = \frac{0,06991101 \cdot 0,00173}{0,00250} = 0,048378419
  $$

  Quindi ottengo:
  $$
  (1,02673)^{18} = 1,55965872 + 0,048378419 = 1,608037139
  $$
  E quindi:
  $$
  M = 20000 \cdot 1,608037139 = 32160,7427784\text{ €}
  $$
  che approssimo a **$\text{€ } 32160,75$**.
  il montante è di **$\text{€ } 32160,75$**.

In questo ultimo esercizio gli errori sono piuttosto rilevanti: il metodo migliore, che dà il risultato più preciso, comunque, è sempre quello dell'utilizzo di una calcolatrice per calcoli finanziari, segue quello dell'uso dei logaritmi e quindi quello dell'interpolazione fra i tassi nelle tavole finanziarie che avrà sempre un errore dovuto all'utilizzo dell'interpolazione.

> L'errore è dovuto all'interpolazione fra i tassi ed all'interpolazione per calcolare logaritmo ed antilogaritmo.
> Infatti la curva che rappresenta il tasso di interesse ha la concavità rivolta verso l'alto e quindi avrà sempre un errore in eccesso.
> Nel logaritmo abbiamo due interpolazioni diverse:
> La prima, nel passaggio dal numero al logaritmo avrà un errore in difetto, avendo la funzione logaritmo la concavità rivolta verso il basso.
> La seconda nel passaggio dal logaritmo al numero avrà un errore in eccesso avendo la funzione inversa del logaritmo (antilogaritmo) la concavità rivolta verso l'alto.
> Quindi con l'uso dei logaritmi i due errori in parte si compenseranno a vicenda.