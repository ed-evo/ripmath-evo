# Nomenclatura

Per ogni successione:
- il valore corrispondente a $$1$$ lo chiameremo **primo termine** e lo indicheremo con $$a_1$$
- il valore corrispondente a $$2$$ lo chiameremo **secondo termine** e lo indicheremo con $$a_2$$
- il valore corrispondente a $$3$$ lo chiameremo **terzo termine** e lo indicheremo con $$a_3$$
- ...
- il valore corrispondente a $$n$$ lo chiameremo **ennesimo termine ($$n$$-mo termine)** e lo indicheremo con $$a_n$$
- il valore corrispondente a $$n+1$$ lo chiameremo **$$n+1$$-esimo termine ($$n+1$$-mo termine)** e lo indicheremo con $$a_{n+1}$$

Indicheremo una successione generica con i simboli:
**$$a_1, a_2, a_3, \dots, a_n, \dots$$**

Una successione potrà essere definita enumerando i primi termini, oppure mediante la legge che la genera, oppure anche con la scrittura del termine generico.

***

Vediamo un esempio:
consideriamo la successione di potenze del $$2$$:
**$$1, 2, 4, 8, 16, 32, 64, \dots$$**
sarebbe anche a dire:
**$$2^0, 2^1, 2^2, 2^3, 2^4, 2^5, 2^6, \dots$$**

Posso anche definirla come:
**La successione di potenze a base $$2$$ con esponente un numero naturale**

Posso comunque definirla semplicemente indicando il termine generico:
$$
a_n = 2^n
$$

***

Noi, di solito, indicheremo una successione, tipo quella dell'esempio, come segue, cercando sempre di evidenziare i numeri naturali collegati alla successione stessa:
**$$2^0, 2^1, 2^2, \dots, 2^n, 2^{n+1}, \dots$$**

Di solito nei testi viene indicato solamente il termine generico ennesimo cioè $$2^n$$, senza indicare il termine $$2^{n+1}$$. Io preferisco indicare anche quest'ultimo termine per due ragioni:
- Ritengo che così la legge che genera la successione sia più chiara.
- Inoltre in questo modo ricalco la legge di induzione matematica (anche se qui, magari, non c'entra molto): se una proprietà è vera per il primo termine ed essendo valida per l'ennesimo termine è valida anche per il termine $$n+1$$, allora essa è valida per tutti i termini.

***

> Anticipo ora, in modo intuitivo, il concetto di convergenza di una successione; concetto che approfondiremo successivamente:

> **Dirò che una successione è convergente** se i suoi termini si avvicinano indefinitamente ad un numero preciso (intuitivamente: se la differenza fra due termini successivi all'aumentare dei termini si riduce avvicinandosi a zero).
>
> Esempio: la successione 
> $$1, \frac{1}{2}, \frac{1}{3}, \frac{1}{4}, \dots, \frac{1}{n}, \frac{1}{n+1}, \dots$$
> al crescere del valore di $$n$$ si avvicina a $$0$$.
> 
> La successione
> $$\frac{1}{2}, \frac{2}{3}, \frac{3}{4}, \frac{4}{5}, \dots, \frac{n}{n+1}, \frac{n+1}{n+2}, \dots$$
> si avvicina a $$1$$ (e due termini successivi molto "avanti" nella successione hanno differenza vicina a $$0$$; ad esempio $$\frac{1000}{1001} - \frac{999}{1000} = 0,000000999$$ hanno differenza meno di un milionesimo).

> **Dirò che una successione è divergente** se i suoi termini crescono oltre ogni limite.
> 
> Esempio: la successione 
> $$1, 2, 3, 4, \dots, n, n+1, \dots$$
> tende a $$\infty$$.

> **Dirò che una successione è indeterminata** se i suoi termini oscillano senza avvicinarsi a niente.
> 
> Esempio: la successione 
> $$+1, -1, +1, -1, \dots, (-1)^n, (-1)^{n+1}, \dots$$
> non tende a nessun numero e continua ad oscillare all'infinito.