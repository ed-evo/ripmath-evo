# Esercizio sul calcolo del montante ad interesse composto per tempi interi eccedenti i valori delle tavole e tassi non sulle tavole

Si impiega il capitale di $\text{€ } 2600$ per $125$ anni ad interesse composto al $2,90\%$.
Calcolarne il montante.

**Dati**
- $C = 2600,00 \text{ €}$
- $t = 125$
- $i = 2,90\% = 0,0290$

> In questo caso abbiamo un numero di anni che eccede il tempo che troviamo sulle tavole, inoltre il tasso non è sulle tavole: possiamo utilizzare $3$ metodi:
> 
> I. Calcolo il montante direttamente con la calcolatrice.
> II. Utilizzo i logaritmi.
> III. Con le tavole calcolo prima il montante per i primi $100$ anni poi, considerato tale montante come capitale ricalcolo il montante per i residui $25$ anni; diventa un esercizio doppio, inoltre, non essendo il tasso sulle tavole devo fare due interpolazioni il che mi rende l'esercizio lungo e complicato come calcoli. Per queste ragioni non eseguiremo questo esercizio con le tavole.

A scopo didattico eseguo l'esercizio nei due modi indicati:

- **Utilizzo la calcolatrice**
  Imposto, sullo schermo il calcolo:
  $$
  2600 \cdot (1 + 0,029)^{125}
  $$
  ottengo $92660,618185847$ che approssimo a $92660,62$.

  il montante è di $\text{€ } 92660,62$.

- **Utilizzo le tavole logaritmiche a $7$ decimali**

  > Calcoliamo solamente $(1 + 0,029)^{125}$ e poi moltiplichiamo il risultato per il capitale.

  $$
  M = 2600(1 + 0,029)^{125}
  $$

  Calcolo il fattore $(1 + 0,029)^{125}$ coi logaritmi; per la proprietà dei logaritmi ho:
  $$
  \log (1 + 0,029)^{125} = 125 \cdot \log 1,0290
  $$

  Trasformo il numero in logaritmo. Leggo sulle tavole logaritmiche a $7$ decimali:
  $$
  \log 1,0290 = 0,0124154
  $$
  Quindi:
  $$
  125 \cdot 0,0124154 = 1,551925
  $$

  Questo è il logaritmo, ora trovo l'antilogaritmo (lo trasformo in valore normale):
  $$
  \text{AntiLog } 1,551925 = 
  $$

  Essendo la caratteristica $1$ il valore dell'antilogaritmo sarà compreso fra $10$ e $100$, quindi avremo due cifre significative prima della virgola.
  La mia mantissa nella tavola a $7$ decimali ($20628936$) non c'è (il tempo $125$ anni è troppo elevato) e quindi approssimo a $55192,5$ e cerco fra i logaritmi normali.
  Leggo sulle tavole a $5$ decimali e trovo:

  $$
  55182 \rightarrow 55194
  $$
  $$
  3563 \rightarrow 3564
  $$
  
  Di fianco ai due risultati trovi il numero $12$ che corrisponde alla differenza fra i due valori della mantissa, mentre la differenza fra il mio valore e quello minore è:
  $$
  55192,5 - 55182 = 10,5
  $$

  Nella tabella del $12$ cerco $10,5$:
  - Il numero minore più vicino è $9,6$ cui corrisponde la sesta cifra del nostro numero, cioè $8$.
  - Mi resta $10,5 - 9,6 = 0,9$; sposto di un posto la virgola per trovare la settima cifra decimale.
  - Nella tabella del $12$ cerco $9$: il numero minore più vicino è $8,4$ cui corrisponde la settima cifra del nostro numero, cioè $7$.

  Non procedo oltre perché l'errore sarebbe maggiore del risultato trovato. Ottengo $356387$, quindi scrivo:
  $$
  \text{Antilog } 1,551925 = 35,6387
  $$

  E, calcolando il montante:
  $$
  M = 2600 \cdot 35,6387 = 92660,62 \text{ €}
  $$

  il montante è di $\text{€ } 92660,62$.