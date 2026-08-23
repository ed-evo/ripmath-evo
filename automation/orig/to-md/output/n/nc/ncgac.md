# [Calcolo del valore attuale di rendita differita]{.text-red}

Consideriamo la rata fissa dell'importo di $$1 \text{ €}$$; per qualunque altro importo basterà poi moltiplicare tale importo per il nostro risultato.

Consideriamo sulla retta dei tempi una rendita immediata posticipata di rata $$1 \text{ €}$$, iniziante fra $$p$$ anni e di durata $$n$$ anni.

I numeri sotto la retta indicano i periodi: essendo posticipata la rata è pagata alla fine del periodo e la prima rata scade alla fine del periodo $$p+1$$.

Il primo euro sarà versato alla fine del periodo $$p+1$$ e quindi dovrà essere spostato indietro nel tempo per $$p+1$$ anni, quindi alla fine avrà valore $$1 \cdot (1+i)^{-(p+1)} \text{ €} = v^{p+1}$$.

Il secondo euro sarà versato alla fine del periodo $$p+2$$ e dovrà essere spostato indietro nel tempo per $$p+2$$ anni quindi alla fine avrà valore $$1 \cdot (1+i)^{-(p+2)} \text{ €} = v^{p+2}$$.

...

Il penultimo euro sarà versato alla fine del periodo $$p+n-1$$ e dovrà essere spostato indietro nel tempo per $$p+n-1$$ anni quindi alla fine avrà valore $$1 \cdot (1+i)^{-(p+n-1)} \text{ €} = v^{p+n-1}$$.

L'ultimo euro sarà versato alla fine dell'ultimo periodo e dovrà essere spostato indietro nel tempo per $$p+n$$ periodi quindi alla fine avrà valore $$1 \cdot (1+i)^{-(p+n)} \text{ €} = v^{p+n}$$.

Per semplificare alla fine ho sottointeso gli $$\text{€}$$.

Raccogliendo per calcolare il montante dovremo eseguire la somma:

$$
\text{V}_{p,n} = v^{p+1} + v^{p+2} + \dots + v^{p+n-1} + v^{p+n}
$$

Tra tutti i termini metto in evidenza $$v^p$$:

$$
\text{V}_{p,n} = v^p(v^1 + v^2 + \dots + v^{n-1} + v^n)
$$

Si vede ora che, dentro parentesi si tratta del valore attuale di una rendita posticipata e quindi posso scrivere:

$$
\text{V}_{p,n} = v^p \cdot \text{V}_n
$$

cioè posso dire: **il valore attuale di una rendita differita posticipata di $$p$$ anni è uguale al valore attuale di una rendita immediata posticipata con lo stesso periodo spostata indietro nel tempo per $$p$$ anni**.

Basta guardare la retta dei tempi: se sposti indietro nel tempo la rendita per $$p$$ anni ottieni una rendita immediata posticipata di $$n$$ periodi:

$$
\text{V}_{p,n} = v^p \cdot \frac{1 - v^n}{i}
$$

Siccome abbiamo un prodotto possiamo rendere questa formula un po' più semplice per gli esercizi eseguendo la moltiplicazione e trasformando nel seguente modo:

$$
\text{V}_{p,n} = v^p \cdot \frac{1 - v^n}{i} = \frac{v^p - v^{n+p}}{i}
$$

Al numeratore tolgo ed aggiungo $$1$$ (posso farlo perché non mi cambia il valore dell'espressione):

$$
= \frac{v^p - 1 + 1 - v^{n+p}}{i} = \frac{1 - v^{n+p} + v^p - 1}{i}
$$

Ora spezzo la frazione:

$$
= \frac{1 - v^{n+p}}{i} + \frac{v^p - 1}{i} = \frac{v^{n+p} - 1}{i} - \frac{v^p - 1}{i}
$$

Ho esplicitato il meno cambiando segno al numeratore del secondo termine dopo l'uguale. Il primo termine corrisponde al valore attuale di una rendita immediata posticipata di $$n+p$$ periodi ed il secondo ad una rendita immediata posticipata di $$p$$ periodi, cioè:

$$
\text{V}_{p,n} = \text{V}_{n+p} - \text{V}_p
$$

In questo modo negli esercizi potremo fare una sottrazione.

> **Nota:** Da notare che in pratica ho aggiunto ai periodi effettivi della rendita i periodi di differimento e quindi li ho tolti, in questo modo il valore della rendita resta invariato: nel disegno vedi in colori diversi:
> - In nero tutti i periodi
> - [in rosso le rate originali $$\text{V}_{p,n}$$]{.text-red}
> - [in blu le rate aggiunte: in questo modo le rate rosse e blu assieme danno $$\text{V}_{n+p}$$]{.text-blue}
> - [in verde le rate tolte $$\text{V}_p$$]{.text-green}

Se la rendita è anticipata possiamo trasformarla in una rendita posticipata semplicemente togliendo un periodo al tempo del differimento:

$$
\text{V}_{p,n}^{\text{ant}} = \text{V}_{p-1,n}
$$

cioè ad esempio una rendita anticipata che inizi fra $$5$$ anni si può considerare come una rendita posticipata che inizi fra $$4$$ anni.

***

**Esempio**

Trovare il valore attuale di una rendita anticipata di periodo $$10$$ anni e differita di $$6$$ anni di rata $$2000 \text{ €}$$ al tasso $$i = 0,02$$.

Essendo la rendita anticipata cerco il valore attuale di una rendita posticipata differita di $$5$$ anni.

Dati:
- $$R = 2000 \text{ €}$$
- $$i = 0,02$$
- $$n = 10$$
- $$p = 5$$
- $$n+p = 15$$

Utilizzo la formula:
$$\text{V}_{p,n} = \text{V}_{n+p} - \text{V}_p$$

Cerco quindi sulle tavole "valore attuale della rendita unitaria immediata posticipata, valori di $$\text{V}_n$$" per i periodi $$15$$ e $$5$$.

- Per $$i=0,02$$ e $$n=15$$ trovo il valore $$12,84926350$$, quindi avrò il montante:
  $$12,84926350 \cdot 2000 \text{ €} = 25698,527 \text{ €}$$
- Per $$i=0,02$$ e $$n=5$$ trovo il valore $$4,71345951$$, quindi avrò il montante:
  $$4,71345951 \cdot 2000 \text{ €} = 9426,91902 \text{ €}$$

Faccio la differenza:
$$25698,527 - 9426,91902 = 16271,60798$$

Che arrotondo a:
$$16271,61 \text{ €}$$