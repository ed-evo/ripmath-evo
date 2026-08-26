# Esercizio sul calcolo del capitale ad interesse composto per tempi non interi

Ho ottenuto $16250,80\text{ €}$ da un capitale impiegato per $3\text{ anni e 4 mesi}$ al tasso annuo effettivo del $2,50\%$.
Calcola il capitale.

**Dati**
- $M_5 = 16250,80\text{ €}$
- $t = 3\text{ anni e 4 mesi} = 3 + 4/12 = 3 + 1/3 = 10/3$
- $i = 2,50\% = 0,025$

Se usiamo la formula esponenziale possiamo fare tranquillamente riferimento alla formula:

$$
C = \frac{M_t}{(1+i)^t}
$$

- **Utilizzo la calcolatrice**
  Imposto sullo schermo il calcolo:
  $16250,80 : (1 + 0,025)^{10/3}$
  ottengo $14966,785257294$
  che approssimo a $14966,79\text{ €}$
  il capitale è di $14966,79\text{ €}$

- Una divisione fra numeri con molte cifre è piuttosto laboriosa, ma abbiamo visto nel primo esercizio che trasformando tutto in logaritmo l'approssimazione è troppo elevata; quindi anche qui trasformiamo in logaritmo solamente l'espressione $(1,025)^{10/3}$, calcoliamola poi eseguiamo la divisione con la calcolatrice.

  $$
  \log(1,025)^{10/3} = 10/3 \log 1,025 =
  $$

  la caratteristica, essendo il mio numero compreso fra $1$ e $10$, vale $0$
  cerco la mantissa
  leggo sulle tavole logaritmiche a $7$ decimali
  la mantissa del mio logaritmo è $0107239$

  $$
  10/3 \log 1,025 = 10/3 \cdot 0,0107239 = 0,035746333
  $$

  Questo è il logaritmo, ora trovo l'antilogaritmo (lo trasformo in valore normale):

  $\text{AntiLog } 0,035746333$

  > **Nota sul calcolo dell'antilogaritmo:**
  > Essendo la caratteristica $0$ il valore dell'antilogaritmo sarà compreso fra $1$ e $10$, quindi avremo una cifra significativa prima della virgola.
  > In questo caso, visto il valore della mantissa, posso cercare nelle tavole a $7$ decimali.
  > La mia mantissa a $7$ decimali ($0357463,33$) è compresa fra i numeri:
  >
  > $0357098 \to 10857$
  > $0357498 \to 10858$
  >
  > Di fianco ai due risultati trovi il numero $400$ che corrisponde alla differenza fra i due valori della mantissa mentre la differenza fra il mio valore e quello minore è:
  > $0357463,33 - 0357098 = 365,33$
  >
  > Nella tabella del $400$ cerco $365,33$:
  > - il numero minore più vicino è $360,0$ cui corrisponde la sesta cifra del nostro numero, cioè $9$;
  > - mi resta $365,33 - 360 = 5,33$; sposto di un posto la virgola e cerco la settima cifra decimale.
  > - Nella tabella del $400$ cerco $53,3$; il numero minore più vicino è $40,0$ cui corrisponde la settima cifra del nostro numero, cioè $1$;
  > - mi resta $53,3 - 40,0 = 13,3$; sposto di un posto la virgola e cerco l'ottava ed ultima cifra decimale.
  > - il numero più vicino a $133$ nella tabella del $400$ è $120$ cui corrisponde $3$, quindi considero $3$ come ottava cifra decimale.
  >
  > Ottengo $10857913$, quindi scrivo:
  > $$
  > \text{AntiLog } 0,035746333 = 1,0857913
  > $$

  Ora eseguiamo la divisione:
  $$
  16250,80 : 1,0857913 = 51,638349988
  $$

  Questo è il valore in euro: dobbiamo trovare il valore in lire pertanto moltiplichiamo tale valore per l'importo del cambio:
  $$
  51,638349988 \cdot 1936,27 = 14966,780448508
  $$
  che approssimiamo a $14966,78\text{ €}$

  il capitale è di $14966,78\text{ €}$