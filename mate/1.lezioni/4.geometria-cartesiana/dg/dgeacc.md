# esercizio

Considerate le rette parallele alla retta $$y = 2x - 5$$ determinare le condizioni per cui le intersezioni di tali rette con la parabola $$y = 3x^2$$ siano rappresentate con valori reali e distinti

---

Soluzione:

Prima disegniamo la parabola e la retta date.

Osservando la figura vediamo che tracciando delle parallele alla retta data queste sono prima esterne, poi toccano la parabola e successivamente hanno due punti di intersezione con la parabola; quindi:

- se la retta è esterna alla parabola ($$\Delta < 0$$) non avremo per le intersezioni valori reali
- se la retta è tangente alla parabola ($$\Delta = 0$$) avremo una intersezione, o meglio, due valori reali e coincidenti
- se la retta è secante la parabola ($$\Delta > 0$$) avremo due intersezioni, cioè due valori reali e distinti

Quindi, per risolvere il problema devo trovare l'equazione della retta parallela alla retta data e tangente alla parabola.

> **Nota:** basterà considerare il fascio di rette parallele, farne il sistema con l'equazione della parabola e poi porre il delta dell'equazione risolvente uguale a zero per ottenere due soluzioni reali coincidenti.

Il fascio di rette parallelo alla retta data $$y = 2x - 5$$ sarà:
$$y = 2x + q$$
infatti al variare di $$q$$ la retta si sposta parallelamente a se stessa.

Faccio il sistema:
$$
\begin{cases} 
y = 2x + q \\ 
y = 3x^2 
\end{cases}
$$

Sostituisco il valore della $$y$$ dalla seconda equazione nella prima ed ottengo l'equazione risolvente:
$$3x^2 = 2x + q$$
$$3x^2 - 2x - q = 0$$

Per avere due soluzioni coincidenti devo porre il delta dell'equazione uguale a zero:
$$\Delta = b^2 - 4ac = 0$$

Ho:
$$a = 3 \quad b = -2 \quad c = -q$$

$$
\Delta = b^2 - 4ac = (-2)^2 - 4(3)(-q) = 0
$$

$$4 + 12q = 0$$
$$12q = -4$$
$$q = -4/12$$
$$q = -1/3$$

quindi la retta tangente sarà:
$$y = 2x - 1/3$$

Adesso se osserviamo la retta di partenza abbiamo che il termine noto vale $$-5$$, mentre nella retta tangente abbiamo che vale $$-1/3$$, quindi spostando la retta parallelamente a se stessa verso sinistra il termine noto aumenta: cioè possiamo dire che:

Preso il fascio di rette $$y = 2x + q$$
- per $$q = -1/3$$ abbiamo per le intersezioni due valori reali coincidenti (una sola intersezione)
- per $$q > -1/3$$ abbiamo per le intersezioni due valori reali e distinti

> **Nota:** Ricorda anche che il termine noto nell'equazione della retta corrisponde al valore dell'intersezione della retta con l'asse delle $$y$$.