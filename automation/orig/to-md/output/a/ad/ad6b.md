# [SCOMPOSIZIONE DI RUFFINI]{.text-red-darken-1}

È una scomposizione che si può sempre applicare a tutti i [polinomi ordinati scomponibili](ad1c.html), su cui non sia possibile operare il raccoglimento a fattor comune totale; ha però il difetto di essere lunga e complicata, quindi, quando possibile, cercheremo delle abbreviazioni.

Però questa ti fornisce un metodo generale per operare sempre la scomposizione sui polinomi ordinati; se ciò non è possibile diremo che il polinomio non è scomponibile.

Partiamo da un polinomio molto semplice, ad esempio consideriamo:

$$
\textcolor{red}{x^2 + 5x + 6}
$$

Il problema che ci poniamo è trovare due polinomi che moltiplicati mi diano come risultato il polinomio di partenza. Si pensa che il polinomio abbia come fattore un fattore del tipo $$\textcolor{red}{(x-a)}$$ in cui $$\textcolor{red}{a}$$ è un numero.

Quindi i possibili fattori potranno essere:
$$\textcolor{red}{(x-1)}$$
$$\textcolor{red}{(x+1)}$$
$$\textcolor{red}{(x-2)}$$
$$\textcolor{red}{(x+2)}$$
$$\textcolor{red}{(x-3)}$$
$$\textcolor{red}{(x+3)}$$
...

Si tratta di vedere se questi sono effettivamente fattori oppure no. Ricordando che un termine è fattore di un secondo termine se il primo divide esattamente il secondo (cioè il resto della divisione vale $$0$$), dovremo fare:

$$\textcolor{red}{(x^2 + 5x + 6) : (x-1)}$$

e calcolarne il resto. Se viene $$0$$ è un fattore, altrimenti proveremo:

$$\textcolor{red}{(x^2 + 5x + 6) : (x+1)}$$

poi

$$\textcolor{red}{(x^2 + 5x + 6) : (x-2)}$$

finché non troviamo il resto $$0$$.

Ricordiamo che per trovare il resto possiamo applicare il [teorema di Ruffini](ad5c.html), quindi troviamo i possibili resti. Troviamo il resto dividendo $$\textcolor{red}{(x^2 + 5x + 6)}$$ per $$\textcolor{red}{(x-1)}$$:

$$\textcolor{red}{(x-1); \quad P(1) = 1^2 + 5(1) + 6 = 1 + 5 + 6 = 12}$$ diverso da $$0$$.

Proviamo ora:

$$\textcolor{red}{(x+1); \quad P(-1) = (-1)^2 + 5(-1) + 6 = 1 - 5 + 6 = 2}$$ diverso da $$0$$.

$$\textcolor{red}{(x-2); \quad P(2) = 2^2 + 5(2) + 6 = 4 + 10 + 6 = 20}$$ diverso da $$0$$.

$$\textcolor{red}{(x+2); \quad P(-2) = (-2)^2 + 5(-2) + 6 = 4 - 10 + 6 = 0}$$

allora $$\textcolor{red}{(x+2)}$$ è un fattore. Quindi potremo scrivere:

$$\textcolor{red}{(x^2 + 5x + 6) = (x+2) \cdot (\text{qualcosa})}$$

Per trovare cos'è quel "qualcosa" facciamo il seguente ragionamento: $$\textcolor{red}{4}$$ è un fattore di $$\textcolor{red}{20}$$ ed io posso scrivere $$\textcolor{red}{20 = 4 \cdot (\text{qualcosa})}$$; quanto vale quel qualcosa? $$\textcolor{red}{5}$$. E come ho fatto ad ottenerlo? Evidentemente facendo $$\textcolor{red}{20 : 4}$$.

Facciamo quindi nello stesso modo: per trovare l'altro fattore eseguiamo:

$$\textcolor{red}{(x^2 + 5x + 6) : (x+2) =}$$

e naturalmente utilizziamo la divisione di Ruffini. Quindi:

$$\textcolor{red}{(x^2 + 5x + 6) = (x+2)(x+3)}$$

---

Proviamo un'altra scomposizione:

$$\textcolor{red}{x^3 - x^2 - 5x - 3 =}$$

Proviamo se il resto è nullo quando dividiamo per $$\textcolor{red}{x-1}$$:

$$\textcolor{red}{(x-1): \quad P(1) = (1)^3 - (1)^2 - 5(1) - 3 = 1 - 1 - 5 - 3 = -8}$$ diverso da zero.

Proviamo ora per $$\textcolor{red}{x+1}$$:

$$\textcolor{red}{(x+1): \quad P(-1) = (-1)^3 - (-1)^2 - 5(-1) - 3 = -1 - 1 + 5 - 3 = 0}$$

questo è un divisore, quindi scrivo:

$$\textcolor{red}{x^3 - x^2 - 5x - 3 = (x+1) \cdot \text{qualcosa}}$$

Per trovare cosa devo mettere al posto di $$\textcolor{red}{\text{qualcosa}}$$ faccio la divisione di Ruffini, quindi ottengo:

$$\textcolor{red}{x^3 - x^2 - 5x - 3 = (x+1) \cdot (x^2 - 2x - 3)}$$

Non è finita: devo ancora scomporre la parte fra parentesi $$\textcolor{red}{(x^2 - 2x - 3)}$$ perché è di grado superiore al primo. Ricomincio con Ruffini ma non provo $$\textcolor{red}{x-1}$$ perché se non andava bene per tutto il polinomio non andrà bene nemmeno per una sua parte; quindi ricomincio dall'ultimo che mi ha dato il risultato giusto, perché un fattore può essere ripetuto (esempio $$12 = 2 \cdot 2 \cdot 3$$):

$$\textcolor{red}{(x+1): \quad P(-1) = (-1)^2 - 2(-1) - 3 = 1 + 2 - 3 = 0}$$

questo è un divisore, quindi scrivo:

$$\textcolor{red}{x^3 - x^2 - 5x - 3 = (x+1) \cdot (x^2 - 2x - 3) = (x+1) \cdot (x+1) \cdot \text{qualcosa}}$$

Rifaccio la divisione, quindi:

$$\textcolor{red}{x^3 - x^2 - 5x - 3 = (x+1) \cdot (x^2 - 2x - 3) = (x+1) \cdot (x+1) \cdot (x-3)}$$

---

> **Attenzione:** Uno degli errori più comuni facendo la divisione è scrivere:
> $$\textcolor{red}{x^3 - x^2 - 5x - 3 = (x+1) \cdot (x^2 - 2x - 3) = (x+1) \cdot (x-3)}$$
> Sarebbe come scrivere $$12 = 2 \cdot 6 = 2 \cdot 3$$; è un errore perché $$2 \cdot 3$$ non è uguale a $$12$$.
> Cioè, facendo la moltiplicazione l'ultimo termine deve sempre tornare uguale al primo, quindi devo sempre ripetere tutti i fattori.

---

Avete visto che la divisione è un'operazione piuttosto difficile da fare, allora cerchiamo qualche "trucco" per poter abbreviare qualcosa:

**Trucco 1: Limitare il numero dei fattori**

Prima di tutto notiamo che nelle scomposizioni già fatte:
$$\textcolor{red}{x^2 + 5x + 6 = (x+2)(x+3)}$$
$$\textcolor{red}{x^3 - x^2 - 5x - 3 = (x+1) \cdot (x+1) \cdot (x-3)}$$

Il termine senza la lettera del polinomio di partenza è il prodotto dei termini noti dei fattori, cioè:
- nel primo $$\textcolor{red}{6 = 2 \cdot 3}$$
- nel secondo $$\textcolor{red}{-3 = 1 \cdot 1 \cdot (-3)}$$

Ma allora, se devo ad esempio scomporre $$\textcolor{red}{x^2 - 10x + 21}$$, il numero $$\textcolor{red}{21}$$ sarà il prodotto dei termini noti dei binomi che mi scompongono il polinomio, quindi non dovrò provare tutti i fattori ma solamente:

$$\textcolor{red}{P(1), \quad P(-1), \quad P(3), \quad P(-3), \quad P(7), \quad P(-7), \quad P(21), \quad P(-21)}$$

Sarà inutile provare ad esempio $$\textcolor{red}{P(2)}$$ perché moltiplicando $$\textcolor{red}{2}$$ per un intero non posso avere come risultato $$\textcolor{red}{21}$$.

---

**Trucco 2: mettere i segni giusti**

È da applicare ai segni quando vado a calcolare $$\textcolor{red}{P(1), P(-1), P(2), P(-2), \dots}$$

Se vado a calcolare $$\textcolor{red}{P(1), P(2), P(3), P(4), \dots}$$ i segni dei termini non cambieranno perché il numero che sostituisco al posto della $$x$$ è positivo, quindi dove c'è più resta più e dove c'è meno resta meno.

Se invece vado a calcolare $$\textcolor{red}{P(-1), P(-2), P(-3), P(-4), \dots}$$ resteranno uguali i segni dei termini a potenza pari, mentre cambieranno i segni per le potenze dispari.

---

Ora bisogna trattare quelli che io chiamo i [casi patologici](ad6ba.html).