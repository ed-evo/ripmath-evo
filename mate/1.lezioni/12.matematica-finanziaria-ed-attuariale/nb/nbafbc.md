[Esercizio sul calcolo del capitale ad interesse composto per tempi interi con tempo non sulle tavole]{.text-red}

Nel 2017 ho ottenuto la somma di $$3637,63 \text{ €}$$ da un vecchio buono fruttifero postale ad interesse composto del $$7,75\%$$. Se tale buono è stato emesso nel 1960 calcolatene il valore iniziale in lire ricordando che il cambio euro $\to$ lira è di $$1 \to 1936,27$$.

Dati
**$$M_5 = 3637,63 \text{ €}$$**
**$$t = 57$$**
**$$i = 7,75\% = 0,0775$$**

Faccio riferimento alla formula

$$
C = \frac{M_t}{(1+i)^t}
$$

il tempo non è sulle tavole perché per il tasso $$i = 0,0775$$ il tempo massimo che trovi sulle tavole è di $$50$$ anni.

1. Utilizzo la calcolatrice
   Imposto, sullo schermo il calcolo
   **$$3637,63 : ((1+0,0775)^{57})$$**
   ottengo **$$51,645635932$$**
   questo è il valore in euro: per trovare il valore in lire moltiplico tale importo per $$1936,27$$ ed ottengo
   **$$\text{£ } 99999,895486682$$**
   che approssimo a **$$99999,9$$**
   o meglio, approssimando alla lira
   il capitale è di **$$\text{lire } 100000$$ (centomila)**

2. > Una divisione fra numeri con molte cifre è piuttosto laboriosa, ma abbiamo visto nel primo esercizio che l'approssimazione è troppo elevata; quindi trasformiamo in logaritmo solamente l'espressione $$(1,0775)^{57}$$, calcoliamola poi eseguiamo la divisione con la calcolatrice.
   >
   > **$$\log(1,0775)^{57} = 57 \log 1,0775 =$$**
   >
   > la caratteristica, essendo il mio numero compreso fra $$1$$ e $$10$$, vale $$0$$
   > cerco la mantissa
   > leggo sulle tavole logaritmiche a $$7$$ decimali
   > la mantissa del mio logaritmo è $$0324173$$
   >
   > **$$57 \log 1,0775 = 57 \cdot 0,0324173 = 1,8477861$$**
   >
   > Questo è il logaritmo, ora trovo l'antilogaritmo (lo trasformo in valore normale)
   >
   > **$$\text{AntiLog } 1,947804$$**
   > Essendo la caratteristica $$1$$ il valore dell'antilogaritmo sarà compreso fra $$10$$ e $$100$$, quindi avremo due cifre significative prima della virgola.
   > In questo caso, visto il valore della mantissa, devo cercare nelle tavole a $$5$$ decimali.
   > la mia mantissa a $$5$$ decimali ($$84778,61$$) è compresa fra i numeri (leggo le tavole cercando nelle mantisse a $$5$$ decimali):
   >
   > $$
   > 84776 \to 7043
   > $$
   > $$
   > 84782 \to 7044
   > $$
   >
   > Di fianco ai due risultati trovi il numero **$$6$$** che corrisponde alla differenza fra i due valori della mantissa mentre la differenza fra il mio valore e quello minore è:
   > **$$84778,61 - 84776 = 2,61$$**
   > Nella tabella del $$6$$ cerco $$2,61$$;
   >
   > il numero minore più vicino è $$2,