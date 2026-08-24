# Esercizio sul calcolo del montante ad interesse composto per tempi interi con tassi non sulle tavole

Si impiega il capitale di $$€ 10000$$ per $$6$$ anni e $$6$$ mesi al $$2,55\%$$ annuo. Calcolarne il montante nei modi possibili e confrontare i risultati.

In questo esercizio il tasso è fuori delle tavole.

**Dati**
- $$C = 10000,00 \text{ €}$$
- $$t = 6 \text{ anni e 6 mesi} = 6 + \frac{1}{2} = \frac{13}{2}$$
- $$i = 2,55\% = 0,0255$$

Eseguo l'esercizio con i due metodi possibili:
- formula lineare
- formula esponenziale

### Formula lineare

- Utilizzo la calcolatrice
  Imposto, sullo schermo il calcolo:
  $$
  M_{6 + \frac{1}{2}} = 10000(1 + 0,0255)^6(1 + 0,0255 \cdot \frac{1}{2})
  $$
  ottengo $$11779,212050999$$ che approssimo a $$11779,21$$.
  Il montante è di $$€ 11779,21$$.

- Prima calcolo il montante per $$6$$ anni, poi applico a tale montante l'interesse semplice per $$6$$ mesi. Utilizzo le tavole finanziarie per $$(1+i)^n$$. Essendo il tasso fuori delle tavole, lo calcolo per interpolazione:

  $$
  \begin{aligned}
  0,0250 &\to 1,15969342 \\
  0,0255 &\to 1,15969342 + x \\
  0,02750 &\to 1,17676836
  \end{aligned}
  $$

  Faccio la proporzione:
  $$
  (1,17676836 - 1,15969342) : (0,0275 - 0,0250) = x : (0,0255 - 0,0250)
  $$
  $$
  0,01707494 : 0,0025 = x : 0,0005
  $$
  $$
  x = \frac{0,01707494 \cdot 0,0005}{0,0025} = 0,003414988
  $$

  Quindi ottengo:
  $$
  (1,0255)^6 = 1,15969342 + 0,003414988 = 1,163108408
  $$
  e quindi:
  $$
  M = 10000 \cdot 1,163108408 = 11631,08408
  $$
  che approssimo a $$€ 11631,08$$.
  Il montante per $$6$$ anni è di $$€ 11631,08$$.

  Ora calcolo il montante ad interesse semplice per $$6$$ mesi:
  $$
  M_6 = 11631,08408(1 + 0,0255 \cdot \frac{1}{2}) = 11779,38040202
  $$
  che approssimo a $$€ 11779,38$$.
  La lieve differenza rispetto al valore precedente è dovuta all'interpolazione.

### Formula esponenziale

- Utilizzo la calcolatrice
  Imposto, sullo schermo il calcolo:
  $$
  10000 \cdot (1 + 0,0255)^{13/2}
  $$
  ottengo $$11778,278540257$$ che approssimo a $$11778,28$$.
  Il montante è di $$€ 11778,28$$.

- Utilizzo le tavole logaritmiche a $$7$$ decimali: calcolo solamente $$(1 + 0,0255)^{13/2}$$ e poi moltiplico il risultato per il capitale iniziale.
  $$
  M = 10000(1 + 0,0255)^{13/2}
  $$
  Calcolo il fattore $$(1 + 0,0255)^{13/2}$$ con i logaritmi; per la proprietà dei logaritmi ho:
  $$
  \log(1 + 0,0255)^{13/2} = \frac{13}{2} \cdot \log 1,0255
  $$
  Trasformo il numero in logaritmo. Leggo sulle tavole logaritmiche a $$7$$ decimali:
  $$
  \log 1,0255 = 0,0109357
  $$
  Quindi:
  $$
  \frac{13}{2} \cdot 0,0109357 = 0,07108205
  $$
  Questo è il logaritmo, ora trovo l'antilogaritmo (lo trasformo in valore normale):
  $$
  \text{AntiLog } 0,07108205 = ?
  $$
  Essendo la caratteristica $$0$$, il valore dell'antilogaritmo sarà compreso fra $$1$$ e $$10$$, quindi avremo una cifra significativa prima della virgola.
  Siccome la mia mantissa non si trova sulle tavole a $$7$$ decimali, cerco l'antilogaritmo nelle tavole a $$5$$ decimali. La mia mantissa a $$5$$ decimali ($$07108,205$$) è compresa fra i numeri (leggo le tavole cercando nelle mantisse a $$5$$ decimali):

  $$
  \begin{aligned}
  07078 &\to 1177 \\
  &\text{diff: } 37 \\
  07115 &\to 1178
  \end{aligned}
  $$

  Di fianco ai due risultati trovo il numero $$37$$ che corrisponde alla differenza fra i due valori della mantissa, mentre la differenza fra il mio valore e quello minore è:
  $$
  07108,205 - 07078 = 30,205
  $$
  Nella tabella del $$37$$ cerco $$30,205$$:
  - il numero minore più vicino è $$29,6$$ a cui corrisponde la sesta cifra del nostro numero, cioè $$8$$.
  - mi resta $$30,205 - 29,6 = 0,605$$; sposto la virgola di un posto: $$6,05$$.
  - nella tabella del $$37$$ cerco $$6,05$$; il numero più vicino è $$3,7$$ che corrisponde a $$1$$, quindi la settima cifra è $$1$$.
  - mi resta $$6,05 - 3,7 = 2,35$$; sposto la virgola di un posto: $$23,5$$.
  - nella tabella del $$37$$ cerco il numero più vicino a $$23,5$$; il numero più vicino è $$22,2$$ che corrisponde a $$6$$, quindi l'ottava cifra è $$6$$.

  Quindi scrivo:
  $$
  \text{AntiLog } 0,07108205 = 1,177816
  $$
  e, calcolando il montante:
  $$
  M = 10000 \cdot 1,177816 = 