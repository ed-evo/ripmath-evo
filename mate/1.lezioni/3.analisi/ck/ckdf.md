# Integrazione per sostituzione

Si riconoscono perché c'è una funzione ed è presente anche la sua derivata a meno di fattori costanti. Per risolvere un integrale si pone la funzione uguale ad una variabile $$t$$ e si sostituisce in tutto l'argomento dell'integrale: si ottiene un nuovo integrale nella variabile $$t$$.
Si integra il nuovo integrale così ottenuto poi, nel risultato, al posto di $$t$$ si rimette la funzione di partenza: vediamo in particolare il metodo su di un esempio.

***

Calcolare 

$$
\int \frac{\textcolor{red}{2x+4}}{\textcolor{red}{x^2 + 4x + 5}} dx
$$

la derivata di $$\textcolor{red}{x^2 + 4x + 5}$$ è $$\textcolor{red}{2x+4}$$, allora pongo

$$
\textcolor{red}{x^2 + 4x + 5 = t}
$$

faccio il [differenziale](../cf/cfh.html) da una parte e dall'altra dell'uguale

> Equivale a fare la derivata a sinistra rispetto ad $$x$$ e poi moltiplicarla per $$dx$$, a destra derivare rispetto a $$t$$ (viene $$1$$) e moltiplicare la derivata per $$dt$$.

$$
\textcolor{red}{(2x+4)dx = dt}
$$

ricavo $$dx$$

$$
\textcolor{red}{dx = \frac{dt}{2x+4}}
$$

Sostituisco quello che posso nell'integrale di partenza

$$
\int \frac{\textcolor{blue}{2x+4}}{\textcolor{red}{t}} \frac{\textcolor{red}{dt}}{\textcolor{blue}{2x+4}}
$$

Posso semplificare $$\textcolor{red}{2x+4}$$ sopra e sotto ed ottengo un integrale nella sola $$t$$ che vado a risolvere

$$
\int \frac{\textcolor{red}{1}}{\textcolor{red}{t}} dt = \log |t| + c
$$

Ora sostituisco a $$t$$ il suo valore ed ottengo il risultato finale

$$
\textcolor{red}{\log |x^2 + 4x + 5| + c}
$$

> **Nota:** Con $$\log x$$ intendiamo sempre il logaritmo naturale di $$x$$.

***

Ricapitolando:

- Decidi quale funzione considerare come $$t$$
- Poni la funzione uguale a $$t$$
- Fai il differenziale a destra ed a sinistra dell'uguale
- ricava $$dx$$
- Sostituisci nell'integrale di partenza alla funzione il valore $$t$$ ed a $$dx$$ il valore ricavato
- Controlla che spariscano tutti i termini con la $$x$$ (se non spariscono torna all'inizio e considera se possibile un'altra funzione; se non puoi considerare un'altra funzione passa a provare l'integrazione per parti)
- Calcola l'integrale con la $$t$$
- Sostituisci nel risultato a $$t$$ la funzione iniziale

***

Vediamo ora alcuni [esercizi](ckdfa.html) per meglio fissare il concetto