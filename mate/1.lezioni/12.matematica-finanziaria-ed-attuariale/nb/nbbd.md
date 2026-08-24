# Passaggio dal tasso annuo effettivo al tasso frazionato

Più complicato è ricavare il tasso frazionato conoscendo il tasso annuo effettivo: partiamo dalla formula

$$
(1+i) = (1+i_k)^k
$$

per eliminare la potenza estraggo la radice $$k$$-esima a destra ed a sinistra dell'uguale

$$
\sqrt[k]{1+i} = \sqrt[k]{(1+i_k)^k}
$$

elimino tra loro l'esponente $$k$$ ed il radicale

$$
\sqrt[k]{1+i} = 1+i_k
$$

leggo alla rovescia

$$
1+i_k = \sqrt[k]{1+i}
$$

ed infine porto $$1$$ dopo l'uguale ed ottengo

$$
i_k = \sqrt[k]{1+i} - 1
$$

che si può anche scrivere ([proprietà degli esponenti frazionari](../../a/ak/akg.html))

$$
i_k = (1+i)^{1/k} - 1
$$

Per calcolare questa formula (oltre, naturalmente, la calcolatrice che non potremmo usare) possiamo utilizzare i logaritmi, oppure anche le tavole finanziarie.

***

> **Esempio:** calcolare il tasso quadrimestrale corrispondente ad un tasso annuo effettivo del $$6\%$$
> dati: $$i = 0,06$$ $$k = 3$$
> 
> Al solito eseguiamo l'esercizio prima con la calcolatrice (così vediamo anche il risultato e sapremo se negli altri procedimenti commettiamo degli errori), poi con i logaritmi ed infine con le tavole.
> 
> - **Con la calcolatrice**
>   Imposto sullo schermo
>   $$(1+0,06)^{1/3} - 1$$
>   ed ottengo
>   $$i_4 = 0,019612822$$
>   approssimando otteniamo l' $$1,96\%$$ quadrimestrale.
> 
> - **Con i Logaritmi**
>   $$(1,06)^{1/3} - 1 =$$
>   calcolo prima l'espressione
>   $$(1,06)^{1/3} =$$
>   Trasformo in Logaritmo
>   $$\log(1,06)^{1/3} = 1/3 \log(1,06) =$$
>   la caratteristica, essendo il mio numero compreso fra $$1$$ e $$10$$, vale $$0$$
>   cerco la mantissa
>   cerco sulle tavole logaritmiche a $$7$$ decimali $$10600$$
> 
>   la mantissa del mio logaritmo è $$0253059$$
>   $$1/3 \log(1,06) = 1/3 \cdot 0,0253059 = 0,0084353$$
>   Cerco l'antilogaritmo
>   $$\text{Antilog } 0,0084353 =$$
>   Essendo la caratteristica $$0$$ il valore dell'antilogaritmo sarà compreso fra $$1$$ e $$10$$, quindi avremo una cifra significativa prima della virgola.
>   In questo caso, visto il valore della mantissa, posso cercare nelle tavole a $$7$$ decimali.
>   la mia mantissa a $$7$$ decimali ($$0084353$$) è compresa fra i numeri:
> 
>   $$0084298 \rightarrow 10196$$
>   $$0084724 \rightarrow 10197$$
>   Differenza: $$426$$
> 
>   Di fianco ai due risultati trovi il numero $$426$$ che corrisponde alla differenza fra i due valori della mantissa mentre la differenza fra il mio valore e quello minore è:
>   $$0084353 - 0084298 = 55$$
> 
>   Nella tabella del $$426$$ cerco $$55$$.
> 
>   Essendo un tasso e quindi non avendo bisogno di un'approssimazione elevatissima mi accontento di trovare il numero più vicino che è $$42$$ cui corrisponde la sesta cifra del nostro numero, cioè $$1$$.
>   Quindi ottengo
>   $$\text{Antilog } 0,0084353 = 1,01961$$
>   e quindi
>   $$(1,06)^{1/3} = 1,01961$$
>   ora tolgo $$1$$ ed ottengo
>   $$(1,06)^{1/3} - 1 = 0,01961$$
>   cioè un tasso dell' $$1,96\%$$ quadrimestrale.
> 
> - **Utilizzo le tavole finanziarie**
>   Cerco nella sezione **Tassi equivalenti** la tavola **valori di $$i_k$$ dato $$i$$** e trovo, per il tasso annuo $$i = 0,06$$
>   $$i_3 = 1,9612825\% = 0,019612825$$