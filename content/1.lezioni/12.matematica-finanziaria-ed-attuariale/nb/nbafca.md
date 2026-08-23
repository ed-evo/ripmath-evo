# [Esercizio sul calcolo del tasso ad interesse composto per tempi interi]{.text-red}

Ho impiegato un capitale di $$€ 11500$$ per $$5$$ anni ad interesse composto ed ho ricevuto un montante di $$€ 12756,65$$; calcolate quale tasso è stato applicato.

$$C = 11500 \text{ €}$$
$$M_5 = 12756,65 \text{ €}$$
$$t = 5$$

Dalla formula:

$$
C = \frac{M_t}{(1+i)^t}
$$

debbo ricavare $$i$$:

$$
(1+i)^t = \frac{M_t}{C}
$$

$$
1+i = \sqrt[t]{\frac{M_t}{C}}
$$

e quindi:

$$
i = \sqrt[t]{\frac{M_t}{C}} - 1
$$

Per eseguire la radice di indice $$t$$, dovremo necessariamente usare [la proprietà dei logaritmi](../../a/al/algd.html):

$$
\log \sqrt[t]{\frac{M_t}{C}} = \frac{1}{t} \log \frac{M_t}{C}
$$

ed essendo il logaritmo di un quoziente dato dalla [differenza dei logaritmi](../../a/al/algb.html):

$$
\log \sqrt[t]{\frac{M_t}{C}} = \frac{1}{t} (\log M_t - \log C)
$$

Calcolato tale valore come logaritmo, dovremo farne l'antilogaritmo e poi togliere $$1$$ dal risultato, così avremo il valore del tasso.

- **Utilizzo la calcolatrice**
  > Naturalmente utilizzando la calcolatrice non ho bisogno di utilizzare i logaritmi, ma ricorda che a scuola puoi usare la calcolatrice solamente per le 4 operazioni e non per trovare subito il valore dell'espressione.

  Imposto sullo schermo il calcolo:
  $$(12756,65 : 11500)^{(1:5)} - 1$$
  ottengo $$0,020957726$$ che approssimo a $$0,021$$.

  Il tasso di interesse è $$i = 0,021$$, cioè $$i = 2,1\%$$.

- **Trasformiamo in logaritmo tutto il radicale e poi applichiamo le proprietà dei logaritmi**
  > In tal modo il radicale si trasforma in divisione e la divisione in differenza.

  $$
  \log \sqrt[t]{\frac{M_t}{C}} = \log \sqrt[5]{\frac{12756,65}{11500}} = \frac{1}{5} \log \frac{12756,65}{11500} = \frac{1}{5} (\log 12756,65 - \log 11500)
  $$

  Calcolo il primo logaritmo sulle tavole logaritmiche:
  $$\log 12756,65 =$$
  La caratteristica è $$4$$ essendo il mio numero compreso fra $$10000$$ e $$100000$$.
  Per calcolare la mantissa cerco $$1275,665$$; tale valore è compreso fra $$1275$$ e $$1276$$.
  A $$1275 \rightarrow 10551$$.

  Stavolta, senza riportare tutta la tabella o fare l'interpolazione, lo calcolo in modo veloce: tra $$1275$$ e $$1276$$ trovi il numero $$34$$ che corrisponde alla differenza fra i due valori della mantissa, mentre la differenza fra il mio valore e quello minore è:
  $$1275,665 - 1275 = 0,665$$
  Nella tabella del $$34$$ dalla parte destra cerco i numeri $$6, 6, 5$$ spostando per ogni cifra la virgola:

  $$6 \rightarrow 20,4$$
  $$6 \rightarrow 2,04$$
  $$5 \rightarrow 0,17$$

  Quindi:

  $$
  \begin{aligned}
  10551 &+ \\
  20,4 &+ \\
  2,04 &+ \\
  0,17 &= \\
  \hline
  10573,61
  \end{aligned}
  $$

  Quindi scrivo:
  $$\log 12756,65 = 4,1057361$$

  Calcolo il secondo logaritmo:
  $$\log 11500,00 =$$
  La caratteristica è $$4$$ essendo il mio numero compreso fra $$10000$$ e $$100000$$.
  Leggo sulle tavole logaritmiche a $$7$$ decimali:
  $$\log 11500 = 4,0606978$$

  Quindi:
  $$\log 12756,65 - \log 11500,00 = 4,1057361 - 4,0606978 = 0,0450383$$

  Adesso divido per $$5$$ ed ho:
  $$\frac{1}{5} (\log 12756,65 - \log 11500,00) = \frac{1}{5} \cdot 0,0450383 = 0,00900766$$

  Ho ottenuto:
  $$
  \log \sqrt[5]{\frac{12756,65}{11500}} = 0,00900766
  $$

  Questo è il logaritmo, ora trovo l'antilogaritmo (lo trasformo in valore normale):
  $$\text{AntiLog } 0,00900766$$
  Essendo la caratteristica $$0$$ il valore dell'antilogaritmo sarà compreso fra $$1$$ e $$10$$, quindi avremo una cifra significativa prima della virgola.
  In questo caso, visto il valore della mantissa, posso cercare nelle tavole a $$7$$ decimali (per i normali valori odierni dei tassi di interesse sarà sempre possibile).
  La mia mantissa a $$7$$ decimali ($$0090076,6$$) è compresa fra i numeri (leggo le tavole cercando nelle mantisse a $$7$$ decimali):

  $$0089832 \rightarrow 10209$$
  $$0090257 \rightarrow 10210$$
  (Differenza: $$426$$)

  Di fianco ai due risultati trovi il numero $$426$$ che corrisponde alla differenza fra i due valori della mantissa, mentre la differenza fra il mio valore e quello minore è:
  $$0090076,6 - 0089832 = 244,6$$
  Nella tabella del $$426$$ cerco $$244,6$$; un numero minore più vicino è $$213,0$$ a cui corrisponde la sesta cifra del nostro numero, cioè $$5$$.
  Mi resta $$244,6 - 213,0 = 31,6$$; sposto di un posto la virgola e cerco la settima cifra.
  Nella tabella del $$426$$ trovo, come numero più vicino a $$316$$, $$298,2$$ che corrisponde alla cifra $$7$$ e qui mi fermo.

  Quindi scrivo:
  $$\text{AntiLog } 0,138126,4 = 1,1020957$$

  Ed infine, togliendo $$1$$:
  $$i = 1,1020957 - 1 = 0,020957$$
  ed approssimando:
  $$i = 0,021$$