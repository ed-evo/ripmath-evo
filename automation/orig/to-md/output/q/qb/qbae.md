# [Somma di n termini di una progressione aritmetica]{.text-red}

> Prima di procedere al calcolo vi racconto un aneddoto che spero vi farà meglio capire l'aspetto del problema:
>
> Gauss, uno dei più grandi matematici mai vissuti, aveva un maestro che, per poter avere un po' di pace, dava talvolta agli allievi come esercizio il sommare un centinaio di numeri di $$4$$ o $$5$$ cifre ciascuno, tutti tali che la differenza fra due numeri consecutivi fosse costante (quindi una progressione aritmetica): semplificando molto l'esercizio è come sommare i numeri da $$1$$ a $$100$$.
>
> Ebbene Gauss (a $$10$$ anni!) si limitò a scrivere sulla lavagnetta il risultato senza eseguire tanti calcoli, restando poi seduto al suo banco a braccia conserte mentre i suoi compagni sudavano per una buona ora.
>
> Quale fu il metodo seguito da Gauss?
>
> **se sommo $$1$$ con $$100$$ ottengo $$101$$**
> **se sommo $$2$$ con $$99$$ ottengo $$101$$**
> **se sommo $$3$$ con $$98$$ ottengo $$101$$**
> ...
> **se sommo $$49$$ con $$52$$ ottengo $$101$$**
> **se sommo $$50$$ con $$51$$ ottengo $$101$$**
>
> In pratica ottengo $$101$$ per $$50$$ volte cioè $$5050$$.
>
> Qui si vede la grandezza matematica di Gauss: quando si affronta un problema non si deve correre a fare i calcoli ma bisogna cercare di vedere tutte le possibili relazioni che possono esistere fra gli elementi del problema stesso: forse c'è una scorciatoia che ci permette di risolvere senza troppe operazioni.

Vogliamo sommare $$n$$ termini di una progressione aritmetica data, la somma sarà data da
**$$S_n = a_1 + a_2 + a_3 + \dots + a_{n-2} + a_{n-1} + a_n$$**

Per la proprietà commutativa della somma posso anche scrivere
**$$S_n = a_n + a_{n-1} + a_{n-2} + \dots + a_3 + a_2 + a_1$$**

Sommo termine a termine le due uguaglianze
**$$S_n + S_n = 2S_n = (a_1 + a_n) + (a_2 + a_{n-1}) + (a_3 + a_{n-2}) + \dots + (a_{n-2} + a_3) + (a_{n-1} + a_2) + (a_n + a_1)$$**

Essendo la differenza fra i termini costante (progressione aritmetica) avremo che le somme dei termini dentro parentesi sono uguali
**$$(a_1 + a_n) = (a_2 + a_{n-1}) = (a_3 + a_{n-2}) = \dots = (a_{n-2} + a_3) = (a_{n-1} + a_2) = (a_n + a_1)$$**

Quindi, essendo $$n$$ le parentesi, posso scrivere
**$$2S = (a_1 + a_n) \cdot n$$**

Da cui dividendo per $$2$$, otteniamo la formula finale:

$$
\textcolor{red}{S_n = \frac{a_1 + a_n}{2} \cdot n}
$$

### Esempio 1
Facciamo un esempio tipo quello di Gauss limitandoci a $$20$$ termini.

Eseguire la seguente somma:
**$$7291 + 7489 + 7687 + 7885 + 8083 + 8281 + 8479 + 8677 + 8875 + 9073 + 9271 + 9469 + 9667 + 9865 + 10063 + 10261 + 10463 + 10661 + 10859 + 11057$$**

La differenza fra due termini consecutivi è costante; si tratta di una progressione aritmetica e la ragione è **$$d = 198$$**
(ho scelto $$198$$ perché, scritto il primo numero a caso, è molto facile scrivere gli altri: basta aumentare ogni numero di $$200$$ e poi togliere $$2$$: cioè $$7291 + 200 = 7491$$ e poi $$7491 - 2 = 7489$$ eccetera...).

I termini sono **$$n = 20$$**.

Applico la formula:

$$
S_{20} = \frac{7291 + 11057}{2} \cdot 20 = 18348 \cdot 10 = 183480
$$

Quindi **$$S_{20} = 183480$$**.

### Esempio 2
Sommare i primi quaranta termini della progressione aritmetica:
**$$7, \frac{17}{2}, 10, \dots$$**

Devo trovare il quarantesimo termine, ma prima devo trovare la ragione: basta fare la differenza fra due termini consecutivi;

$$
d = \frac{17}{2} - 7 = \frac{17 - 14}{2} = \frac{3}{2}
$$

Ora posso trovare il quarantesimo termine:

$$
a_{40} = a_1 + \frac{3}{2} \cdot (40 - 1) = 7 + \frac{3}{2} \cdot 39 = 7 + \frac{117}{2} = \frac{14 + 117}{2} = \frac{131}{2}
$$

Adesso applico la formula:

$$
S_{40} = \frac{1}{2} \cdot \left( 7 + \frac{131}{2} \right) \cdot 40 = \frac{1}{2} \cdot \left( \frac{14 + 131}{2} \right) \cdot 40 = 145 \cdot 10 = 1450
$$

Quindi **$$S_{40} = 1450$$**.