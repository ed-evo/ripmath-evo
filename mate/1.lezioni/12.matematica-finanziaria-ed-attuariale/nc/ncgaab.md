# Calcolo del montante di una rendita immediata anticipata

Consideriamo la rata fissa dell'importo di $1 \text{ €}$; per qualunque altro importo basterà poi moltiplicare tale importo per il nostro risultato.

Consideriamo sulla retta dei tempi una rendita immediata anticipata di rata $1 \text{ €}$ e di durata $n$ anni.

I numeri sotto la retta indicano i periodi.

Il primo euro sarà versato all'inizio del primo periodo e dovrà essere spostato avanti nel tempo per $n$ periodi quindi alla fine avrà valore $1 \cdot (1+i)^n \text{ €} = u^n$
Il secondo euro sarà versato all'inizio del secondo periodo e dovrà essere spostato avanti nel tempo per $n-1$ periodi quindi alla fine avrà valore $1 \cdot (1+i)^{n-1} \text{ €} = u^{n-1}$
Il terzo euro sarà versato all'inizio del terzo periodo e dovrà essere spostato avanti nel tempo per $n-2$ periodi quindi alla fine avrà valore $1 \cdot (1+i)^{n-2} \text{ €} = u^{n-2}$
...
Il quartultimo euro sarà versato all'inizio del quartultimo periodo e dovrà essere spostato avanti nel tempo per $4$ periodi quindi alla fine avrà valore $1 \cdot (1+i)^4 \text{ €} = u^4$
Il terzultimo euro sarà versato all'inizio del terzultimo periodo e dovrà essere spostato avanti nel tempo per $3$ periodi quindi alla fine avrà valore $1 \cdot (1+i)^3 \text{ €} = u^3$
Il penultimo euro sarà versato all'inizio del penultimo periodo e dovrà essere spostato avanti nel tempo per $2$ periodi quindi alla fine avrà valore $1 \cdot (1+i)^2 \text{ €} = u^2$
L'ultimo euro sarà versato all'inizio dell'ultimo periodo e avrà valore $1 \cdot (1+i) \text{ €} = u$

Per semplificare alla fine ho sottointeso gli $\text{€}$.

Raccogliendo per calcolare il montante dovremo eseguire la somma:

$$
\text{M}_{ra} = u^n + u^{n-1} + u^{n-2} + \dots + u^4 + u^3 + u^2 + u
$$

Se raccolgo $u$ da ogni termine ottengo:

$$
\text{M}_{ra} = u(u^{n-1} + u^{n-2} + u^{n-3} + \dots + u^3 + u^2 + u + 1)
$$

Il termine tra parentesi è esattamente il montante della rendita posticipata trovato nella pagina precedente.

> In effetti sarebbe bastato dire che per passare dalla rendita anticipata alla rendita posticipata basta spostare la rendita anticipata in avanti di 1 anno e quindi moltiplicarla per $u$ secondo la formula
> $$
> \text{M}_{ra} = u \cdot \text{M}_{rp}
> $$
> infatti tutti i versamenti della rendita posticipata vengono fatti un anno dopo rispetto ai versamenti di quella anticipata.

Ora procedo come prima:
per la proprietà commutativa dell'addizione posso scrivere:

$$
\text{M}_{ra} = u(1 + u + u^2 + u^3 + \dots + u^{n-3} + u^{n-2} + u^{n-1})
$$

Si vede ora che, dentro parentesi, si tratta di una progressione geometrica di $n$ termini di ragione $u$ e quindi, applicando la formula della somma:

$$
\text{M}_{ra} = u \left( 1 \cdot \frac{u^n - 1}{u - 1} \right)
$$

Possiamo rendere questa formula un po' più semplice sviluppando il fattore $u$:

$$
\text{M}_{ra} = (1+i) \frac{(1+i)^n - 1}{1+i - 1}
$$

Sommando otteniamo la formula finale:

$$
\text{M}_{ra} = \frac{(1+i)^n - 1}{i} (1+i)
$$

cioè, come avevamo già detto, per ottenere il montante della rendita anticipata basta moltiplicare il montante della rendita posticipata per $1+i$.

> Ricorda che il montante della rendita anticipata è calcolato un anno dopo l'ultimo versamento, quindi intuitivamente sposti in avanti nel tempo di 1 anno i versamenti della rendita posticipata.

$$
\text{M}_{ra} = \text{M}_{rp} \cdot u = \text{M}_{rp} \cdot (1+i)
$$

Vediamo anche qui un semplice esempio:
trovare il montante di una rendita anticipata di $20$ anni di rata $1200 \text{ €}$ al tasso $i = 0,025$

Dati:
- $R = 1200 \text{ €}$
- $i = 0,025$
- $n = 20$

Cerco sulle tavole "montante della rendita unitaria anticipata, valori di $\text{M}_{ra}$".
Per $i = 0,025$ e $n = 20$ trovo il valore $26,18327405$, quindi avrò il montante:

$$
26,18327405 \cdot 1200 \text{ €} = 31419,92886 \text{ €}
$$

Che arrotondo a $\text{€ } 31419,93$.