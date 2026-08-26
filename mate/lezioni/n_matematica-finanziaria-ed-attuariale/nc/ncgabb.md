# valore attuale di una rendita immediata anticipata

Consideriamo la rata fissa dell'importo di $1\text{ €}$; per qualunque altro importo basterà poi moltiplicare tale importo per il nostro risultato.

Consideriamo sulla retta dei tempi una rendita immediata anticipata di rata $1\text{ €}$ e di durata $n$ anni.

I numeri sotto la retta indicano i periodi: essendo la rendita anticipata la rata è pagata all'inizio del periodo.

Il primo euro sarà versato all'inizio del primo periodo e avrà valore $1\text{ €} = 1$.
Il secondo euro sarà versato all'inizio del secondo periodo e dovrà essere spostato indietro nel tempo per $1$ periodo quindi avrà valore $1 \cdot (1+i)^{-1}\text{ €} = v$.
Il terzo euro sarà versato all'inizio del terzo periodo e dovrà essere spostato indietro nel tempo per $2$ periodi quindi avrà valore $1 \cdot (1+i)^{-2}\text{ €} = v^2$.
...............................
...............................
Il quartultimo euro sarà versato all'inizio del quartultimo periodo e dovrà essere spostato indietro nel tempo per $n-4$ periodi quindi avrà valore $1 \cdot (1+i)^{-(n-4)}\text{ €} = v^{n-4}$.
Il terzultimo euro sarà versato all'inizio del terzultimo periodo e dovrà essere spostato indietro nel tempo per $n-3$ periodi quindi avrà valore $1 \cdot (1+i)^{-(n-3)}\text{ €} = v^{n-3}$.
Il penultimo euro sarà versato all'inizio del penultimo periodo e dovrà essere spostato indietro nel tempo per $n-2$ periodi quindi avrà valore $1 \cdot (1+i)^{-(n-2)}\text{ €} = v^{n-2}$.
L'ultimo euro sarà versato all'inizio dell'ultimo periodo e dovrà essere spostato indietro nel tempo per $n-1$ periodi quindi avrà valore $1 \cdot (1+i)^{-(n-1)}\text{ €} = v^{n-1}$.

Per semplificare alla fine ho sottointeso gli $\text{€}$.

Raccogliendo per calcolare il montante dovremo eseguire la somma:

$$
\ddot{a}_{\overline{n}|} = 1 + v + v^2 + \dots + v^{n-4} + v^{n-3} + v^{n-2} + v^{n-1}
$$

Si vede ora che si tratta di una progressione geometrica di $n$ termini di ragione $u$ e quindi, applicando la formula della somma (essendo la ragione $v$ minore di $1$ utilizzo la seconda formula):

$$
\ddot{a}_{\overline{n}|} = 1 \cdot \frac{1 - v^n}{1 - v}
$$

$$
\ddot{a}_{\overline{n}|} = \frac{1 - v^n}{1 - v}
$$

Possiamo trasformare questa formula in altre forme equivalenti anch'esse molto importanti: vediamo come.

Considerato che vale:

$$
1 - v = 1 - \frac{1}{1 + i} = \frac{1 + i - 1}{1 + i} = \frac{i}{1 + i}
$$

Se vado a sostituire nella formula ottengo:

$$
\ddot{a}_{\overline{n}|} = \frac{1 - v^n}{\frac{i}{1 + i}} = \frac{1 - v^n}{i} \cdot (1 + i)
$$

E quindi otteniamo la formula:

$$
\ddot{a}_{\overline{n}|} = a_{\overline{n}|}(1 + i)
$$

Cioè anche nel valore attuale (come nel montante) per passare da una rendita posticipata a una rendita anticipata basta moltiplicare per $1 + i$.

Per il calcolo pratico del valore attuale conviene però utilizzare un'altra formula. Partiamo dalla formula trovata precedentemente:

$$
\ddot{a}_{\overline{n}|} = \frac{1 - v^n}{i} \cdot (1 + i)
$$

Eseguiamo la moltiplicazione:

$$
\ddot{a}_{\overline{n}|} = \frac{1 - v^n}{i} \cdot (1 + i) = \frac{1 + i - (1 + i) \cdot v^n}{i} = \frac{1 + i - u \cdot v^n}{i} = \frac{1 + i - v^{n-1}}{i}
$$

Spezzo la frazione:

$$
\ddot{a}_{\overline{n}|} = \frac{1 - v^{n-1}}{i} + \frac{i}{i}
$$

Il primo termine è il valore attuale di una rendita posticipata di $n - 1$ periodi, quindi posso scrivere:

$$
\ddot{a}_{\overline{n}|} = a_{\overline{n-1}|} + 1
$$

Questa formula esprime che per ottenere una rendita anticipata basta aggiungere la prima rata a una rendita posticipata minore di un periodo.

> **Esempio:**
> Trovare il montante di una rendita posticipata di $10$ anni di rata $2000\text{ €}$ al tasso $i = 0,02$.
>
> Dati:
> - $R = 2000\text{ €}$
> - $i = 0,02$
> - $n = 10$
>
> Cerco sulle tavole "montante della rendita unitaria posticipata. valori di $s_{\overline{n}|}$".
> Per $i = 0,02$ e $n = 10$ trovo il valore $10,94972100$, quindi avrò il montante:
> $10,94972100 \cdot 2000\text{ €} = 21899,442\text{ €}$