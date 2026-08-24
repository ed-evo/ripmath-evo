## Esercizio sul calcolo del capitale ad interesse composto per tempi non interi

Ho ottenuto $1156,25 \text{ €}$ da un capitale impiegato per $8$ anni, $6$ mesi e $15$ giorni al $2,55\%$ annuo.
Calcolare tale capitale.

**Dati**
$M = 1156,25 \text{ €}$
$$
t = 8 \text{ anni} + 6 \text{ mesi} + 15 \text{ giorni} = 8 + \frac{6}{12} + \frac{15}{360} = \frac{2880+180+15}{360} = \frac{3075}{360} = \frac{205}{24}
$$
$i = 2,55\% = 0,0255$

Se usiamo la formula esponenziale possiamo fare tranquillamente riferimento alla formula:

$$
C = \frac{M}{(1+i)^t}
$$

- Utilizzo la calcolatrice
  Imposto, sullo schermo, il calcolo:
  $1156,25 : (1+0,0255)^{(205/24)}$
  Ottengo $932,487337385$
  che approssimo a $932,49 \text{ €}$.
  Il capitale è di $932,49 \text{ €}$.

- > Una divisione fra numeri con molte cifre è piuttosto laboriosa, ma abbiamo visto nel primo esercizio che trasformando tutto in logaritmo l'approssimazione è troppo elevata; quindi al solito trasformiamo in logaritmo solamente l'espressione $(1,0255)^{205/24}$, calcoliamola poi eseguiamo la divisione con la calcolatrice.

  $\log(1,0255)^{205/24} = \frac{205}{24} \log 1,0255$

  La caratteristica, essendo il mio numero compreso fra $1$ e $10$, vale $0$.
  Cerco la mantissa leggendo sulle tavole logaritmiche a $7$ decimali.
  La mantissa del mio logaritmo è $0,0109357$.

  $\frac{205}{24} \log 1,0255 = \frac{205}{24} \cdot 0,0109357 = 0,093409104$

  Questo è il logaritmo, ora trovo l'antilogaritmo (lo trasformo in valore normale):
  $\text{AntiLog } 0,093409104$

  Essendo la caratteristica $0$, il valore dell'antilogaritmo sarà compreso fra $1$ e $10$, quindi avremo una cifra significativa prima della virgola.
  In questo caso, visto il valore della mantissa, devo cercare nelle tavole a $5$ decimali.
  La mia mantissa a $5$ decimali ($09340,9104$) è compresa fra i numeri:

  $093342 \rightarrow 1240$
  $09377 \rightarrow 1241$

  Di fianco ai due risultati trovi il numero $35$ che corrisponde alla differenza fra i due valori della mantissa, mentre la differenza fra il mio valore e quello minore è:
  $09340,9104 - 093342 = 7,9104$

  Nella tabella del $35$ cerco $7,9104$.
  Il numero minore più vicino è $7,0$, a cui corrisponde la quinta cifra del nostro numero, cioè $2$.
  Mi resta $7,9104 - 7,0 = 0,9104$; sposto di un posto la virgola e cerco la sesta cifra decimale.
  Nella tabella del $35$ cerco $9,104$.
  Il numero minore più vicino è ancora $7,0$, a cui corrisponde la sesta cifra del nostro numero, cioè $2$.
  Mi resta $9,104 - 7,0 = 2,104$; sposto di un posto la virgola e cerco la settima ed ultima cifra decimale.

  Il numero più vicino a $21,04$ nella tabella del $35$ è $21,0$, a cui corrisponde $6$, quindi considero $7$ come settima cifra decimale.
  Ottengo $1240226$, quindi scrivo:

  $\text{AntiLog } 0,093409104 = 1,240226$

  Ora eseguiamo la divisione:
  $1156,25 : 1,240226 = 932,28976009$

  Approssimiamo a $932,29 \text{ €}$.

  Il capitale è di $932,29 \text{ €}$.