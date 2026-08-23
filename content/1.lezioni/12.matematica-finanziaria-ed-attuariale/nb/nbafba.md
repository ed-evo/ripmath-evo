# [Esercizio sul calcolo del capitale ad interesse composto per tempi interi]{.text-red}

Ho impiegato una somma per $$5$$ anni ad interesse composto al tasso $$i = 2,5\%$$ ed oggi ho ricevuto un montante di $$\text{€ } 12655,65$$; dite quale somma ho depositato $$5$$ anni fa.

**Dati**
- $$M_5 = 12655,65\ \text{€}$$
- $$t = 5$$
- $$i = 2,50\% = 0,025$$

Faccio riferimento alla formula:

$$
C = \frac{M_t}{(1+i)^t}
$$

1. Utilizzo la calcolatrice
   Imposto, sullo schermo, il calcolo:
   $$12655,65 : ((1 + 0,025)^5)$$
   Ottengo $$11185,750514985$$ che approssimo a $$11185,75$$.

   Il capitale è di $$\text{€ } 11185,75$$.

2. Siccome una divisione fra numeri con molte cifre è piuttosto laboriosa, trasformiamo in logaritmo tutta l'espressione:

   $$
   \log C = \log \frac{M_5}{(1 + 0,025)^5} = \log 12655,65 - \log(1,025)^5 =
   $$
   $$
   \log 12655,65 - 5 \log(1,025) =
   $$

   Calcolo il primo logaritmo sulle tavole logaritmiche.
   La caratteristica è $$4$$ essendo il mio numero compreso fra $$10000$$ e $$100000$$.
   Per calcolare la mantissa cerco $$1265,565$$; tale valore è compreso fra $$1265$$ e $$1266$$.

   - $$1265 \to 10209$$
   - $$1266 \to 10243$$
   - Differenza: $$34$$

   Di fianco ai due risultati trovi il numero $$34$$ che corrisponde alla differenza fra i due valori della mantissa, mentre la differenza fra il mio valore e quello minore è:
   $$1265,565 - 1265 = 0,565$$

   Nella tabella del $$34$$ cerco i numeri $$5\ 6\ 5$$ spostando per ogni risultato la virgola:
   - $$5 \to 17,0$$
   - $$6 \to 2,04$$
   - $$5 \to 0,17$$

   Quindi:
   $$
   10209 + 17,0 + 2,04 + 0,17 = 10228,11
   $$

   Quindi scrivo:
   $$\log 1265,565 = 4,1022811$$

   Calcolo il secondo logaritmo leggendo sulle tavole logaritmiche a $$7$$ decimali:
   $$\log 1,0250 = 0,0107239$$
   Quindi:
   $$5 \log 1,0250 = 5 \cdot 0,0107239 = 0,0536195$$

   Ed ho:
   $$\log 12655,65 - 5 \log(1,025) = 4,1022811 - 0,0536195 = 4,0486616$$

   Questo è il logaritmo, ora trovo l'antilogaritmo (lo trasformo in valore normale):
   $$\text{AntiLog } 4,0486616$$

   Essendo la caratteristica $$4$$, il valore dell'antilogaritmo sarà compreso fra $$10000$$ e $$100000$$, quindi avremo cinque cifre significative prima della virgola.
   In questo caso, visto il valore della mantissa, posso cercare nelle tavole a $$7$$ decimali.
   La mia mantissa a $$7$$ decimali ($$0486616$$) è compresa fra i numeri:
   - $$0486360 \to 11185$$
   - $$0486748 \to 11186$$
   - Differenza: $$388$$

   Di fianco ai due risultati trovi il numero $$388$$ che corrisponde alla differenza fra i due valori della mantissa, mentre la differenza fra il mio valore e quello minore è:
   $$0486616 - 0486360 = 256$$

   Nella tabella del $$388$$ cerco $$256$$:
   - un numero minore è $$232,8$$ cui corrisponde la sesta cifra del nostro numero, cioè $$6$$;
   - mi resta $$256 - 232,8 = 24,8$$;
   - sposto di un posto la virgola e nella tabella del $$388$$ cerco $$248$$;
   - un numero minore è $$232,8$$ cui corrisponde la settima cifra del nostro numero, cioè $$6$$;
   - mi resta $$248 - 232,8 = 16,8$$;
   - sposto di un posto la virgola e nella tabella del $$388$$ cerco $$168$$;
   - il numero più vicino è $$155$$ cui corrisponde l'ottava cifra del nostro numero, cioè $$4$$.

   Quindi scrivo:
   $$C = \text{AntiLog } 4,0486616 = 11185,664$$

   E, approssimando, il capitale è di $$\text{€ } 11185,66$$.

> **Nota:** Come vedi l'errore dovuto all'interpolazione è dell'ordine di $$10$$ centesimi di euro: da notare che ho fatto il logaritmo anche del montante e quindi l'errore è maggiore di quello che si avrebbe facendo solamente il logaritmo del fattore $$(1+i)^n$$. Per curiosità, calcoliamo con i logaritmi solamente il fattore $$(1+i)^n$$ e poi dividiamo con la calcolatrice: vediamo di quanto si riduce l'errore.