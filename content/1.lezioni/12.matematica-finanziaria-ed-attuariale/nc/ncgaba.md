# Valore attuale di una rendita immediata posticipata

Consideriamo la rata fissa dell'importo di $$1 \text{ €}$$; per qualunque altro importo basterà poi moltiplicare tale importo per il nostro risultato.

Consideriamo sulla retta dei tempi una rendita immediata posticipata di rata $$1 \text{ €}$$ e di durata $$n$$ anni.

I numeri sotto la retta indicano i periodi: essendo posticipata la rata è pagata alla fine del periodo.

Il primo euro sarà versato alla fine del primo periodo e dovrà essere spostato indietro nel tempo per $$1$$ periodo quindi alla fine avrà valore $$1 \cdot (1+i)^{-1} \text{ €} = v$$.

Il secondo euro sarà versato alla fine del secondo periodo e dovrà essere spostato indietro nel tempo per $$2$$ periodi quindi alla fine avrà valore $$1 \cdot (1+i)^{-2} \text{ €} = v^2$$.

Il terzo euro sarà versato alla fine del terzo periodo e dovrà essere spostato indietro nel tempo per $$3$$ periodi quindi alla fine avrà valore $$1 \cdot (1+i)^{-3} \text{ €} = v^3$$.

...

Il quartultimo euro sarà versato alla fine del quartultimo periodo e dovrà essere spostato indietro nel tempo per $$n-3$$ periodi quindi alla fine avrà valore $$1 \cdot (1+i)^{-(n-3)} \text{ €} = v^{n-3}$$.

Il terzultimo euro sarà versato alla fine del terzultimo periodo e dovrà essere spostato indietro nel tempo per $$n-2$$ periodi quindi alla fine avrà valore $$1 \cdot (1+i)^{-(n-2)} \text{ €} = v^{n-2}$$.

Il penultimo euro sarà versato alla fine del penultimo periodo e dovrà essere spostato indietro nel tempo per $$n-1$$ periodi quindi alla fine avrà valore $$1 \cdot (1+i)^{-(n-1)} \text{ €} = v^{n-1}$$.

L'ultimo euro sarà versato alla fine dell'ultimo periodo e dovrà essere spostato indietro nel tempo per $$n$$ periodi quindi alla fine avrà valore $$1 \cdot (1+i)^{-n} \text{ €} = v^n$$.

> **Nota:** Per semplificare alla fine ho sottointeso il simbolo dell'euro ($$\text{€}$$).

Raccogliendo per calcolare il montante dovremo eseguire la somma:

$$
A_{\text{m i}} = v + v^2 + v^3 + \dots + v^{n-3} + v^{n-2} + v^{n-1} + v^n
$$

Tra tutti i termini metto in evidenza $$v$$:

$$
A_{\text{m i}} = v(1 + v + v^2 + \dots + v^{n-3} + v^{n-2} + v^{n-1})
$$

Si vede ora che, dentro parentesi, si tratta di una progressione geometrica di $$n$$ termini di ragione $$v$$ e quindi, applicando la formula della somma (essendo la ragione $$v$$ minore di $$1$$ utilizzo la seconda formula):

$$
A_{\text{m i}} = v \cdot \left( 1 \cdot \frac{v^n - 1}{v - 1} \right) = v \cdot \frac{1 - v^n}{1 - v}
$$

Possiamo rendere questa formula un po' più semplice tenendo presente che vale: $$v = 1/u$$ e quindi $$u \cdot v = 1$$.

$$
A_{\text{m i}} = \frac{1}{u} \cdot \frac{v^n - 1}{v - 1}
$$

Moltiplico numeratore con numeratore e denominatore con denominatore:

$$
= \frac{v^n - 1}{uv - u} = \frac{v^n - 1}{1 - u} = \frac{v^n - 1}{1 - (1+i)} = \frac{v^n - 1}{1 - 1 - i} = \frac{v^n - 1}{-i}
$$

Cambio di segno sopra e sotto, poi sopra scrivo prima il positivo poi il negativo:

$$
= \frac{-v^n + 1}{+i} = \frac{1 - v^n}{i}
$$

Quindi la formula finale è:

$$
A_{\text{m i}} = \frac{1 - v^n}{i}
$$

Oppure, ricordando che vale $$v^n = (1+i)^{-n}$$:

$$
A_{\text{m i}} = \frac{1 - (1+i)^{-n}}{i}
$$

***

> **Importante:** Questa è una formula molto importante e va ricordata a memoria.

Possiamo trasformare la formula in altre forme equivalenti anch'esse molto importanti. Moltiplicando numeratore e denominatore della penultima formula per $$u^n = (1+i)^n$$ otteniamo:

$$
A_{\text{m i}} = \frac{u^n}{u^n} \cdot \frac{1 - v^n}{i} = \frac{u^n(1 - v^n)}{i \cdot u^n} = \frac{u^n - u^n v^n}{i u^n}
$$

E ricordando che $$u^n v^n = 1$$:

$$
A_{\text{m i}} = \frac{u^n - 1}{i u^n} = \frac{(1+i)^n - 1}{i(1+i)^n}
$$

Possiamo notare che, moltiplicando per $$u^n$$ il numeratore, lo abbiamo spostato nel tempo in avanti per $$n$$ anni ottenendo così il valore del montante di una rendita posticipata di periodo $$n$$ anni, cioè:

$$
A_{\text{m i}} = \frac{(1+i)^n - 1}{i(1+i)^n} = \frac{1}{(1+i)^n} \cdot \frac{(1+i)^n - 1}{i}
$$

E quindi, sostituendo i simboli relativi ai valori:

$$
A_{\text{m i}} = v^n \cdot M_{\text{m i}}
$$

Quindi possiamo ottenere il valore attuale di una rendita posticipata spostando indietro nel tempo il montante della stessa rendita.

Noi di solito leggeremo l'importo dei valori attuali sulle tavole, interpolando se il tasso non è compreso fra quelli tabulati; nel caso i dati siano oltre i limiti delle tavole occorre utilizzare i logaritmi ed in tal caso utilizzeremo le formule che abbiamo evidenziato: ne parleremo più diffusamente negli esercizi.

***

Vediamo anche qui un semplice esempio: trovare il valore attuale di una rendita posticipata di $$10$$ anni di rata $$2000 \text{ €}$$ al tasso $$i = 0,02$$.

**Dati:**
- $$R = 2000 \text{ €}$$
- $$i = 0,02$$
- $$n = 10$$

Cerco sulle tavole "valore attuale della rendita unitaria immediata posticipata, valori di $$A_{\text{m i}}$$" per $$i = 0,02$$ e $$n = 10$$. Trovo il valore $$8,98258501$$, quindi avrò il montante:

$$
8,98258501 \cdot 2000 \text{ €} = 17965,17002 \text{ €}
$$

Che arrotondo a $$17965,17 \text{ €}$$.