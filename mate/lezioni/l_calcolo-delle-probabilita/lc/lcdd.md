# Probabilità contraria

Introduciamo il concetto di probabilità contraria $q$ di un evento come la probabilità che l'evento non accada.

Siccome l'evento accade (con probabilità $p$) oppure non accade (con probabilità $q$) e non ci sono altre alternative avremo che $p + q = 1$.

Quindi possiamo definire la probabilità contraria $q$ come:

$$
q = 1 - p
$$

Il concetto di probabilità contraria ci sarà molto utile per risolvere alcuni tipi di problemi, vediamone qualche esempio.

- **Problema 1**
  Un sacchetto contiene $50$ palline, $10$ bianche, $15$ rosse e $25$ verdi;
  Calcolare la probabilità che, estraendo una pallina a caso, essa sia rossa o verde.

  > Il problema è del tutto elementare, risolviamolo applicando la probabilità contraria.
  > L'uscita di una pallina rossa o verde è l'evento contrario dell'uscita di una pallina bianca.
  > I casi possibili sono $50$ come il numero delle palline;
  > i casi favorevoli all'uscita di una pallina bianca sono $10$.
  > Quindi:
  > 
  > Probabilità di uscita di una pallina bianca = [$p$]{.text-red}
  > $$
  > p = \frac{10}{50} = \frac{1}{5} = 0.20 = 20\%
  > $$
  > Quindi la probabilità contraria è:
  > 
  > Probabilità di uscita di una pallina rossa o verde = [$q = 1 - p$]{.text-red}
  > $$
  > q = 1 - \frac{1}{5} = \frac{4}{5} = 0.80 = 80\%
  > $$

- **Problema 2**
  Calcolare la probabilità che, estraendo contemporaneamente due carte, da un mazzo di $40$, esse non siano entrambe assi.

  > Siccome le carte vengono estratte contemporaneamente non conta l'ordine e quindi useremo le combinazioni.
  > I casi possibili sono tutte le coppie che si possono formare con le $40$ carte: $C_{40,2}$.
  > Usiamo la probabilità contraria: calcoliamo i casi favorevoli di estrarre contemporaneamente due assi: i casi favorevoli sono tutte le coppie non ordinate che posso formare con i $4$ assi: $C_{4,2}$.
  > Quindi avremo:
  > 
  > Probabilità di estrarre due assi = [$p$]{.text-red}
  > $$
  > p = \frac{C_{4,2}}{C_{40,2}} = \frac{1}{130} = 0.007692308... \approx 0,77\%
  > $$
  > Quindi la probabilità contraria:
  > 
  > Probabilità di non estrarre due assi = [$q = 1 - p = 1 - \frac{1}{130}$]{.text-red}
  > $$
  > q = 1 - 0.007692308... = 0.992307692 \approx 99,23\%
  > $$