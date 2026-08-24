# Calcolo del montante di una rendita immediata posticipata

Prima di procedere consiglio un ripasso del concetto di [progressione geometrica](../../q/qb/qbb.html)
dovremo utilizzare la formula per la [somma dei suoi primi n termini](../../q/qb/qbbe.html)

Consideriamo la rata fissa dell'importo di $1 \text{ €}$; per qualunque altro importo basterà poi moltiplicare tale importo per il nostro risultato.

Consideriamo sulla retta dei tempi una rendita immediata posticipata di rata $1 \text{ €}$ e di durata $n$ anni.

I numeri sotto la retta indicano i periodi.

Il primo euro sarà versato alla fine del primo periodo e dovrà essere spostato avanti nel tempo per $n-1$ periodi quindi alla fine avrà valore $1\cdot(1+i)^{n-1} \text{ €} = u^{n-1}$
Il secondo euro sarà versato alla fine del secondo periodo e dovrà essere spostato avanti nel tempo per $n-2$ periodi quindi alla fine avrà valore $1\cdot(1+i)^{n-2} \text{ €} = u^{n-2}$
Il terzo euro sarà versato alla fine del terzo periodo e dovrà essere spostato avanti nel tempo per $n-3$ periodi quindi alla fine avrà valore $1\cdot(1+i)^{n-3} \text{ €} = u^{n-3}$
...
Il quartultimo euro sarà versato alla fine del quartultimo periodo e dovrà essere spostato avanti nel tempo per $3$ periodi quindi alla fine avrà valore $1\cdot(1+i)^3 \text{ €} = u^3$
Il terzultimo euro sarà versato alla fine del terzultimo periodo e dovrà essere spostato avanti nel tempo per $2$ periodi quindi alla fine avrà valore $1\cdot(1+i)^2 \text{ €} = u^2$
Il penultimo euro sarà versato alla fine del penultimo periodo e dovrà essere spostato avanti nel tempo per $1$ periodo quindi alla fine avrà valore $1\cdot(1+i)^1 \text{ €} = u$
L'ultimo euro sarà versato alla fine dell'ultimo periodo e avrà valore $1 \text{ €} = 1$

Per semplificare alla fine ho sottointeso gli €.

Raccogliendo per calcolare il montante dovremo eseguire la somma:

$$
\mathfrak{M}_i = u^{n-1} + u^{n-2} + u^{n-3} + \dots + u^3 + u^2 + u + 1
$$

per la proprietà commutativa dell'addizione posso scrivere:

> Non dirlo al Prof. di Religione, ma si potrebbe anche procedere evangelicamente: infatti se applichi la regola evangelica "gli ultimi saranno i primi ed i primi saranno ultimi" allora metti l'ultimo termine al primo posto, il penultimo al secondo posto,.... il primo termine all'ultimo posto ed ottieni ugualmente.

$$
\mathfrak{M}_i = 1 + u + u^2 + u^3 + \dots + u^{n-3} + u^{n-2} + u^{n-1}
$$

Si vede ora che si tratta di una progressione geometrica di $n$ termini di ragione $u$ e quindi, applicando la formula della somma:

$$
\mathfrak{M}_i = 1 \cdot \frac{u^n - 1}{u - 1}
$$

possiamo rendere questa formula un po' più semplice sviluppando il fattore $u$:

$$
\mathfrak{M}_i = 1 \cdot \frac{(1+i)^n - 1}{1+i - 1}
$$

sommando otteniamo la formula finale:

$$
\mathfrak{M}_i = \frac{(1+i)^n - 1}{i}
$$

> Questa è una formula molto importante e va ricordata a memoria; comunque noi, nei problemi, cercheremo soprattutto di trovarne ed usarne i valori utilizzando le tavole finanziarie.

> **Esempio:**
> Trovare il montante di una rendita posticipata di $10$ anni di rata $2000 \text{ €}$ al tasso $i = 0,02$.
>
> Dati:
> $R = 2000 \text{ €}$
> $i = 0,02$
> $n = 10$
>
> Cerco sulle tavole "montante della rendita unitaria posticipata, valori di $\mathfrak{M}_i$".
> Per $i=0,02$ e $n=10$ trovo il valore $10,94972100$, quindi avrò il montante:
> $10,94972100 \cdot 2000 \text{ €} = 21899,442 \text{ €}$