# Calcolo di C

Partiamo dalla formula della capitalizzazione composta:

$$
M_t = C(1+i)^t
$$

Vogliamo ricavare $$C$$. Leggo la formula alla rovescia:

$$
C(1+i)^t = M_t
$$

Per ricavare $$C$$ divido entrambi i termini per $$(1+i)^t$$, al primo termine resta $$C$$:

$$
C = \frac{M_t}{(1+i)^t}
$$

> Abbiamo che moltiplicando $$C$$ per il termine $$(1+i)^t$$ esso diventa il montante $$M$$, ed anche dividendo il montante $$M$$ per il termine $$(1+i)^t$$ esso diventa $$C$$.
> Quindi possiamo considerare $$(1+i)^t$$ come un fattore che, moltiplicando, ci sposta il capitale $$C$$ in avanti negli anni per un tempo $$t$$, mentre dividendo per esso avremo che il montante torna indietro nel tempo per $$t$$ anni fino a diventare $$C$$.
> 
> Data l'importanza dell'argomento chiameremo il termine $$\frac{1}{(1+i)^t}$$ come $$v^t$$, mentre chiameremo $$u^t$$ il termine $$(1+i)^t$$:
> 
> $$
> u^t = (1+i)^t
> $$
> 
> $$
> v^t = \frac{1}{(1+i)^t}
> $$