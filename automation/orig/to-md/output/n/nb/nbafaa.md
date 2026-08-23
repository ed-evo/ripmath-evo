# [Esercizio sul calcolo del montante ad interesse composto per tempi interi con valori sulle tavole]{.text-red}

Si impiega il capitale di $$12600 \text{ €}$$ per $$3$$ anni ad interesse composto al $$2,50\%$$.
Calcolarne il montante nei vari modi possibili e confrontare i risultati.

Dati:
$$C = 12600,00 \text{ €}$$
$$t = 3$$
$$i = 2,50\% = 0,025$$

Eseguo l'esercizio nei vari modi possibili:

- Calcolo per tre volte il montante ad interesse semplice:
  alla fine del primo anno avrò:
  $$
  M_1 = C(1+i) = 12600,00 \text{ €} \cdot (1+0,025) = 12600,00 \text{ €} \cdot (1,025) = 12915,00 \text{ €}
  $$
  alla fine del secondo anno avrò:
  $$
  M_2 = M_1(1+i) = 12915,00 \text{ €} \cdot (1,025) = 13237,875 \text{ €}
  $$
  alla fine del terzo anno avrò:
  $$
  M_3 = M_2(1+i) = 13237,875 \text{ €} \cdot (1,025) = 13568,821875 \text{ €} \cong 13568,82 \text{ €}
  $$

  il montante è di $$13568,82 \text{ €}$$

- Utilizzo la calcolatrice:
  Imposto sullo schermo il calcolo:
  $$
  12600 \cdot (1+0,025)^3
  $$
  ottengo $$13568,821875$$ che approssimo a $$13568,82$$

  il montante è di $$13568,82 \text{ €}$$

- Utilizzo le tavole logaritmiche a 7 decimali:

  > In alcuni testi si applica il logaritmo all'intera espressione; io non sono molto d'accordo perché trasformando il capitale in logaritmo si può avere un errore che, per quanto piccolo, si aggiungerà all'errore che si ha calcolando il fattore $$(1+i)^n$$. Perciò preferisco calcolare solamente questo ultimo fattore e poi moltiplicare il risultato per il capitale.

  $$
  M = 12600(1+0,025)^3
  $$
  Calcolo il fattore $$(1+0,025)^3$$ coi logaritmi; per la proprietà dei logaritmi ho:
  $$
  \log(1+0,025)^3 = 3 \cdot \log 1,0250 =
  $$

  trasformo il numero in logaritmo:
  leggo sulle tavole logaritmiche a 7 decimali:
  $$
  \log 1,0250 = 0,0107239
  $$
  Quindi:
  $$
  3 \cdot 0,0107239 = 0,0321717
  $$

  Questo è il logaritmo, ora trovo l'antilogaritmo (lo trasformo in valore normale):
  $$
  \text{AntiLog } 0,0321717 =
  $$
  Essendo la caratteristica $$0$$ il valore dell'antilogaritmo sarà compreso fra $$1$$ e $$10$$, quindi avremo una cifra significativa prima della virgola.

  la mia mantissa a 7 decimali ($$0321717$$) è compresa fra i numeri (leggo le tavole cercando nelle mantisse a 7 decimali):
  $$0321350 \rightarrow 10768$$
  $$0321754 \rightarrow 10769$$

  Di fianco ai due risultati trovi il numero $$404$$ che corrisponde alla differenza fra i due valori della mantissa, mentre la differenza fra il mio valore e quello minore è:
  $$
  0321717 - 0321350 = 367
  $$
  Nella tabella del $$404$$ cerco $$367$$;
  il numero minore più vicino è $$363,6$$ cui corrisponde la sesta cifra del nostro numero, cioè $$9$$.
  mi resta $$367 - 363,6 = 4,6$$; ma tale cifra è tanto esigua rispetto a $$404$$ che la trascureremo (calcolando la settima cifra otterremmo zero).
  quindi scrivo:
  $$
  \text{Antilog } 0,0321717 = 1,07689
  $$
  
  e, calcolando il montante:
  $$
  M = 12600 \cdot 1,07689 = 13568,814 \text{ €}
  $$
  che approssimo a $$13568,81 \text{ €}$$.

  il montante è di $$13568,81 \text{ €}$$

- Utilizzo le tavole del prontuario per il fattore $$(1+i)^n$$:
  $$
  1,0250^3 = 1,07689063
  $$
  e quindi:
  $$
  M = 12600 \cdot 1,07689063 = 13568,821938 \text{ €}
  $$
  che approssimo a $$13568,82 \text{ €}$$.
  il montante è di $$13568,82 \text{ €}$$

Tutti i metodi hanno dato lo stesso risultato ad eccezione del calcolo con i logaritmi in cui la differenza (peraltro trascurabile) di $$1$$ centesimo è dovuta all'errore derivante dall'interpolazione.