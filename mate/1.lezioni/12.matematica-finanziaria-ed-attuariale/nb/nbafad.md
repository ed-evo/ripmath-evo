# Esercizio sul calcolo del montante ad interesse composto per tempi interi con valori sulle tavole

Si impiega il capitale di $\text{€ } 15000$ per $2$ anni e $8$ mesi al $2,50\%$ annuo. Calcolarne il montante nei modi possibili e confrontare i risultati.

**Dati**
$C = 15000,00 \text{ €}$
$t = 2 \text{ anni e 8 mesi} = 2 + \frac{2}{3} = \frac{8}{3}$
$i = 2,50\% = 0,025$

Eseguo l'esercizio con i due metodi possibili:
- formula lineare
- formula esponenziale

## Formula lineare

- Utilizzo la calcolatrice
  Imposto, sullo schermo il calcolo:
  $$
  M_{2+2/3} = 15000(1+0,025)^2(1+0,025 \cdot 2/3)
  $$
  ottengo $16022,03125$ che approssimo a $16022,03$.

  Il montante è di $\text{€ } 16022,03$.

- Prima calcolo il montante per $2$ anni, poi applico a tale montante l'interesse semplice per $8$ mesi.
  Utilizzo le tavole finanziarie per $(1+i)^n$:
  $(1+0,025)^2 = 1,05062500$
  $$
  M_2 = 15000(1,025)^2 = 15000 \cdot 1,05062500 = 15759,375 \text{ €}
  $$

  Il montante per $2$ anni è di $\text{€ } 15759,375$.
  Adesso applico la capitalizzazione semplice per $8$ mesi:
  $$
  M = 15759,375 (1+0,025 \cdot 2/3) = 15759,375 (1+0,016666667) = 15759,375 (1,016666667) = 16022,031255253
  $$
  Approssimo a $\text{€ } 16022,03$.

## Formula esponenziale

- Utilizzo la calcolatrice
  Imposto, sullo schermo il calcolo:
  $$
  15000 \cdot (1+0,025)^{8/3}
  $$
  ottengo $16020,94883454$ che approssimo a $16020,95$.

  Il montante è di $\text{€ } 16020,95$.

- Utilizzo le tavole logaritmiche a $7$ decimali. Calcolo solamente $(1+0,025)^{8/3}$ e poi moltiplico il risultato per il capitale:
  $$
  M = 15000(1+0,025)^{8/3}
  $$
  Calcolo il fattore $(1+0,025)^{8/3}$ coi logaritmi; per la proprietà dei logaritmi ho:
  $$
  \text{Log } (1+0,025)^{8/3} = \frac{8}{3} \cdot \text{Log } 1,0250
  $$
  Trasformo il numero in logaritmo; leggo sulle tavole logaritmiche a $7$ decimali:
  $\text{Log } 1,0250 = 0,0107239$
  Quindi:
  $$
  \frac{8}{3} \cdot 0,0107239 = 0,028597067
  $$
  Questo è il logaritmo, ora trovo l'antilogaritmo (lo trasformo in valore normale):
  $\text{AntiLog } 0,028597067 =$

  Essendo la caratteristica $0$, il valore dell'antilogaritmo sarà compreso fra $1$ e $10$, quindi avremo una cifra significativa prima della virgola. La mia mantissa a $7$ decimali ($0285970,67$) è compresa fra i numeri (leggo le tavole cercando nelle mantisse a $7$ decimali):

  | Mantissa | $\to$ | Valore | Diff. |
  | :--- | :---: | :--- | :---: |
  | $0285713$ | $\to$ | $10680$ | |
  | | | | $406$ |
  | $0286119$ | $\to$ | $10681$ | |

  Di fianco ai due risultati trovi il numero $406$ che corrisponde alla differenza fra i due valori della mantissa, mentre la differenza fra il mio valore e quello minore è:
  $$
  0285970,67 - 0285713 = 257,67
  $$
  Nella tabella del $404$ cerco $257,67$; il numero minore più vicino è $243,6$ cui corrisponde l'ottava cifra del nostro numero, cioè $6$.
  Mi resta $257,67 - 243,60 = 14,06$; sposto la virgola di un posto ed approssimo $140,6$ a circa $141$.
  Nella tabella del $404$ cerco $141$; il numero più vicino è $121,8$ che corrisponde a $4$, quindi la nona cifra è $4$.

  Quindi scrivo:
  $\text{Antilog } 0,028597067 = 1,068064$
  E, calcolando il montante:
  $$
  M = 15000 \cdot 1,068064 = 16020,96 \text{ €}
  $$

  Il montante è di $\text{€ } 16020,96$.

Da notare che con la formula lineare abbiamo un montante leggermente superiore come avevamo già detto.