# [Tasso di interesse e tasso di sconto]{.text-red}

A questo punto soffermiamoci un poco sul significato di $$i$$ che finora abbiamo indicato genericamente come tasso sia per l'interesse che per lo sconto.

Sarebbe bene invece utilizzare $$i$$ solamente come tasso di interesse perché il calcolo che facciamo moltiplicando per $$i$$ è sempre sul valore attuale.

Se consideriamo il tasso $$i$$ per un anno sul capitale di $$1$$ euro lo sconto razionale sarà, essendo $$C=1$$ e $$t=1$$:

$$
S = \frac{Cit}{(1+it)} = \frac{i}{1+i}
$$

Similmente se consideriamo lo sconto composto avremo, sempre per il capitale di $$1$$ euro per un anno, che lo sconto è:

$$
S = C - V = C - \frac{C}{(1+i)^t} = 1 - \frac{1}{1+i} = \frac{1+i-1}{1+i} = \frac{i}{1+i}
$$

Quindi, siccome lo sconto per $$C=1$$ e $$t=1$$ è il valore attuale di $$1$$ euro riscuotibile fra un anno e deve corrispondere al tasso di sconto, avremo che il tasso di sconto $$d$$ (discount=sconto), sia per lo sconto razionale che per lo sconto composto, è:

$$
d = \frac{i}{1+i}
$$

Fa eccezione lo sconto commerciale, in cui lo sconto viene calcolato sul valore nominale $$C$$ invece che sul valore attuale: per questo in qualche testo, invece di usare $$i$$ nella formula dello sconto commerciale, si preferisce indicarlo con $$d$$ e noi seguiremo questo metodo.

E la formula dello sconto commerciale sarà:

$$
S = Cdt
$$

Quindi d'ora in avanti parleremo di:

- **Tasso di interesse $$i$$** se il tasso sposta in avanti i capitali nel tempo
- **Tasso di sconto $$d$$** se il tasso sposta indietro i capitali nel tempo, essendo:

$$
d = i
$$
nel caso dello sconto commerciale

$$
d = \frac{i}{1+i}
$$
nel caso dello sconto razionale o composto