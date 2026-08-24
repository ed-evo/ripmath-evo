# Equivalenza fra due capitalizzazioni frazionate

Se abbiamo due capitalizzazioni frazionate con frazioni di anno diverse è possibile ricavare il tasso della prima conoscendo quello della seconda e viceversa:
La via più intuitiva sarebbe quella di passare dal primo tasso frazionato al tasso annuo nominale e da quello ricavare il secondo tasso frazionato, ma di solito, come calcoli, non è una cosa breve.

È però possibile ricavare una formula tipo quella del passaggio fra tasso frazionato e tasso annuo effettivo, applicando un ragionamento simile a quello già fatto nelle pagine precedenti.
Scriviamo l'uguaglianza dei montanti per il capitale di un euro impiegato per un anno sia con la prima che con la seconda capitalizzazione frazionata.
Sia $i_h$ il tasso della prima capitalizzazione frazionata
sia $i_k$ il tasso della seconda capitalizzazione frazionata

avremo:

$$
(1+i_h)^h = (1+i_k)^k
$$

Voglio ricavare $i_h$, quindi per eliminare la potenza estraggo la radice h-esima a destra ed a sinistra dell'uguale:

$$
\sqrt[h]{(1+i_h)^h} = \sqrt[h]{(1+i_k)^k}
$$

elimino tra loro l'esponente $h$ ed il radicale:

$$
1+i_h = \sqrt[h]{(1+i_k)^k}
$$

ed infine porto $1$ dopo l'uguale ed ottengo:

$$
i_h = \sqrt[h]{(1+i_k)^k} - 1
$$

che si può anche scrivere (proprietà degli esponenti frazionari):

$$
i_h = (1+i_k)^{k/h} - 1
$$

Per calcolare questa formula (oltre, naturalmente, la calcolatrice che non potremmo usare) possiamo utilizzare i logaritmi.

> **Esempio:** calcolare il tasso quadrimestrale corrispondente ad un tasso frazionato trimestrale dell'$1\%$
>
> dati: $i_4 = 0,01$ trovare $i_3$
>
> Al solito eseguiamo l'esercizio prima con la calcolatrice (così vediamo anche il risultato e sapremo se negli altri procedimenti commettiamo degli errori), poi con i logaritmi ed infine con le tavole.
>
> - **Con la calcolatrice**
>   Imposto sullo schermo:
>   $(1+0,01)^{4/3} - 1$
>   ed ottengo:
>   $i_3 = 0,013355506$
>   approssimando otteniamo l' $1,34\%$ quadrimestrale.
>
> - **Con i Logaritmi**
>   $(1,01)^{4/3} - 1 =$
>   calcolo prima l'espressione:
>   $(1,01)^{4/3} =$
>   Trasformo in Logaritmo:
>   $\log(1,01)^{4/3} = \frac{4}{3} \log(1,01) =$
>   la caratteristica, essendo il mio numero compreso fra $1$ e $10$, vale $0$
>   cerco la mantissa:
>   cerco sulle tavole logaritmiche a $7$ decimali $10100$
>   la mantissa del mio logaritmo è $0043214$
>   $\frac{4}{3} \log(1,01) = \frac{4}{3} \cdot 0,0043214 = 0,005761867$
>   Cerco l'antilogaritmo:
>   $\text{Antilog } 0,005761867 =$
>   Essendo la caratteristica $0$ il valore dell'antilogaritmo sarà compreso fra $1$ e $10$, quindi avremo una cifra significativa prima della virgola.
>   Cerco nelle tavole a $7$ decimali.
>   La mia mantissa a $7$ decimali ($0057618,67$) è compresa fra i numeri:
>
>   $0057380 \rightarrow 10133$
>   $0057809 \rightarrow 10134$
>
>   Di fianco ai due risultati trovi il numero $429$ che corrisponde alla differenza fra i due valori della mantissa mentre la differenza fra il mio valore e quello minore è:
>   $0057618,67 - 0057380 = 238,67$
>
>   Nella tabella del $429$ cerco $238,67$.
>
>   Essendo un tasso e quindi non avendo bisogno di un'approssimazione elevatissima mi accontento di trovare il numero più vicino che è $257,4$ cui corrisponde la sesta cifra del nostro numero, cioè $6$.
>   Quindi ottengo:
>   $\text{Antilog } 0,005761867 = 1,01336$
>   e quindi:
>   $(1,01)^{4/3} = 1,01336$
>   ora tolgo $1$ ed ottengo:
>   $(1,01)^{4/3} - 1 = 0,01336$
>   cioè un tasso dell' $1,34\%$ quadrimestrale.