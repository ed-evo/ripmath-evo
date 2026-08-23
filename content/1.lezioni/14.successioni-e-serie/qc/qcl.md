# Un esempio

Come esempio di applicazione di alcuni dei concetti finora sviluppati mostriamo che la successione

$$(1+1)^1, \left(1+\frac{1}{2}\right)^2, \left(1+\frac{1}{3}\right)^3, \left(1+\frac{1}{4}\right)^4, \dots, \left(1+\frac{1}{n}\right)^n, \dots$$

è convergente e che il valore del suo limite è compreso fra $$2$$ e $$3$$.
Per mostrare che è convergente mostriamo che è crescente in senso stretto e poi mostriamo che è limitata, quindi, per il teorema della pagina precedente avremo che ammette limite uguale all'estremo superiore dell'insieme dei valori dei suoi termini.

***

Mostriamo che è monotona strettamente crescente: considero il termine $$n$$-esimo

$$
\left(1 + \frac{1}{n}\right)^n
$$

lo sviluppo come potenza di un binomio con la formula di Newton

$$
\left(1 + \frac{1}{n}\right)^n = \sum_{k=0,1,\dots,n} \binom{n}{k} 1^{n-k} \frac{1}{n^k} = \sum_{k=0,1,\dots,n} \binom{n}{k} \frac{1}{n^k} =
$$

Non ho scritto nell'ultimo passaggio $$1^{n-k}$$ perché il suo valore è sempre $$1$$ e quindi, moltiplicando, non influisce. Evidenzio il primo termine dello sviluppo, cioè il termine per cui abbiamo $$k=0$$, ottengo

$$
= 1 + \sum_{k=1,2,\dots,n} \frac{n(n-1)(n-2)\dots(n-k+1)}{k!} \frac{1}{n^k} =
$$

adesso evidenzio il secondo termine cioè il termine che abbiamo per $$k=1$$, facendo i calcoli tale termine vale $$1$$

$$
= 1 + 1 + \sum_{k=2,\dots,n} \frac{n(n-1)(n-2)\dots(n-k+1)}{k!} \frac{1}{n^k} =
$$

suddivido i termini frazionari: pongo prima $$1/k!$$

$$
= 2 + \sum_{k=2,\dots,n} \frac{1}{k!} \frac{n(n-1)(n-2)\dots(n-k+1)}{n^k} =
$$

scompongo il termine frazionario

$$
= 2 + \sum_{k=2,\dots,n} \frac{1}{k!} \left(1 - \frac{1}{n}\right) \cdot \left(1 - \frac{2}{n}\right) \dots \left(1 - \frac{k-1}{n}\right)
$$

Ora sviluppo il termine successivo $$a_{n+1}$$

$$
\left(1 + \frac{1}{n+1}\right)^{n+1}
$$

Senza rifare tutti i calcoli basterà nel risultato sostituire $$n+1$$ al posto di $$n$$.
Ottengo

$$
\left(1 + \frac{1}{n+1}\right)^{n+1} = 2 + \sum_{k=2,\dots,n+1} \frac{1}{k!} \left(1 - \frac{1}{n+1}\right) \cdot \left(1 - \frac{2}{n+1}\right) \dots \left(1 - \frac{k-1}{n+1}\right)
$$

adesso considero la disuguaglianza:

$$
\sum_{k=2,\dots,n} \frac{1}{k!} \left(1 - \frac{1}{n}\right) \cdot \left(1 - \frac{2}{n}\right) \dots \left(1 - \frac{k-1}{n}\right) < \sum_{k=2,\dots,n+1} \frac{1}{k!} \left(1 - \frac{1}{n+1}\right) \cdot \left(1 - \frac{2}{n+1}\right) \dots \left(1 - \frac{k-1}{n+1}\right)
$$

Questa disuguaglianza è certamente valida: infatti, considerando termine a termine

- a destra, nella sommatoria abbiamo un addendo in più rispetto a sinistra (il termine con $$k=n+1$$)
- considero i fattori a destra e sinistra per ogni addendo: dentro parentesi la frazione, aumentando il denominatore da $$n$$ ad $$n+1$$, diminuisce di valore, quindi se tolgo da $$1$$ il valore della frazione avrò un risultato maggiore a destra rispetto che a sinistra

Ne segue che, essendo ogni termine minore del successivo, la mia successione è strettamente monotona crescente.

***

Mostriamo ora che è limitata superiormente, consideriamone un termine $$n > 2$$; partiamo dalla formula sopra

$$
a_n = 2 + \sum_{k=2,\dots,n} \frac{1}{k!} \left(1 - \frac{1}{n}\right) \cdot \left(1 - \frac{2}{n}\right) \dots \left(1 - \frac{k-1}{n}\right)
$$

ogni termine dentro parentesi è inferiore ad $$1$$ ed anche il loro prodotto è inferiore ad $$1$$, quindi se li tolgo il valore dell'espressione aumenta e posso scrivere

$$
a_n < 2 + \sum_{k=2,\dots,n} \frac{1}{k!}
$$

la successione $$1/2^{k-1}$$ è una maggiorante (per $$k > 2$$) della successione $$1/k!$$, quindi scrivo

$$
a_n < 2 + \sum_{k=2,\dots,n} \frac{1}{k!} < 2 + \sum_{k=2,\dots,n} \frac{1}{2^{k-1}} =
$$

Ma quest'ultima è una progressione geometrica di ragione $$\frac{1}{2}$$ e posso scrivere (spezzo il $$2$$ all'inizio)

$$
= 1 + 1 + \sum_{k=2,\dots,n} \frac{1}{2^{k-1}} = 1 + 1 + \frac{1}{2} + \frac{1}{4} + \frac{1}{8} + \dots = 1 + \left(1 + \frac{1}{2} + \frac{1}{4} + \frac{1}{8} + \dots\right) = 1 + 2 = 3
$$

Ho già calcolato in questa pagina il valore $$2$$ della somma dei termini della progressione geometrica dentro parentesi e posso scrivere

$$
a_n < 3
$$

Ma questo vale per ogni $$n$$, quindi la mia successione è limitata ed il suo limite è inferiore al valore $$3$$.

***

Mostriamo infine che i suoi termini sono superiori al valore $$2$$ (per $$n > 2$$) partiamo dalla stessa disuguaglianza

$$
a_n = 2 + \sum_{k=2,\dots,n} \frac{1}{k!} \left(1 - \frac{1}{n}\right) \cdot \left(1 - \frac{2}{n}\right) \dots \left(1 - \frac{k-1}{n}\right)
$$

Il valore dato dalla sommatoria è certamente positivo e, se lo tolgo, ottengo

$$
a_n = 2 + \sum_{k=2,\dots,n} \frac{1}{k!} \left(1 - \frac{1}{n}\right) \cdot \left(1 - \frac{2}{n}\right) \dots \left(1 - \frac{k-1}{n}\right) > 2
$$

cioè

$$
a_n > 2
$$

quindi la mia successione (per $$n > 2$$) ha tutti i termini maggiori del valore $$2$$.

***

Ne consegue che il limite della mia successione è un numero compreso fra $$2$$ e $$3$$; in effetti il limite di tale successione è il numero $$e$$ o numero di Nepero (od anche di Eulero)

$$
e = 2,71828182845\dots
$$

un numero decimale illimitato e non periodico di importanza fondamentale in molte parti della matematica.