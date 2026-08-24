# Introduzione

Facciamo un giochetto:
supponiamo che io debba percorrere a piedi una certa distanza e che, partendo al mattino, il primo giorno io riesca a percorrere $$20.000$$ metri ($$20\text{ Km}$$).

La notte un mago malefico mi trasforma in modo che in proporzione io diventi la metà: metà altezza, quindi metà lunghezza delle gambe, ed il secondo giorno percorrerò metà distanza: $$10.000$$ metri ($$10\text{ Km}$$);
Supponendo che il mago ogni notte mi dimezzi ed ogni giorno io percorra la distanza che posso, qual è la massima distanza cui potrò arrivare considerando da dove sono partito?

Questo sopra è un buon esempio di serie numerica: infatti io percorrerò la distanza

$$
20.000\text{m} + 10.000\text{m} + 5.000\text{m} + 2.500\text{m} + 1.750\text{m} + \dots
$$

evidentemente è una serie del tipo

$$
1 + \frac{1}{2} + \frac{1}{4} + \frac{1}{8} + \frac{1}{16} + \dots
$$

in cui ogni termine successivo si dimezza.
Considerando che tale serie tende al valore $$2$$, potremo dire che la massima distanza cui potrò tendere, senza arrivarci mai, sarà $$40.000$$ metri.

Le serie sono una cosa che associamo spesso al concetto di misura, ad esempio, se io voglio misurare la lunghezza di una stanza come faccio?
Prima considero il metro e vedo quante volte il metro è contenuto nella lunghezza, supponiamo di ottenere $$4$$;
poi considero il decimetro e vedo quante volte il decimetro è contenuto nella lunghezza residua, supponiamo di ottenere $$5$$;
poi considero il centimetro e vedo quante volte il centimetro è contenuto nella lunghezza residua, supponiamo di ottenere $$7$$;
poi considero il millimetro e vedo quante volte il millimetro è contenuto nella lunghezza residua, supponiamo di ottenere $$6$$.

Quindi la lunghezza della stanza è data da

$$
4\text{m} + 5\text{dm} + 7\text{cm} + 6\text{mm} + \dots
$$

o, meglio

$$
4\text{m} + 5 \cdot 10^{-1}\text{m} + 7 \cdot 10^{-2}\text{m} + 6 \cdot 10^{-3}\text{m} + \dots
$$

> **Nota:** Anche questa è una specie di serie (anche se è una serie fisica piuttosto che matematica), cioè un insieme di misure da sommare una all'altra per ottenere un risultato con la precisione voluta.
>
> Essendo d'accordo che fisicamente una tal misura non ha molto significato perché potrei arrivare a valori inferiori al diametro di un atomo, matematicamente invece essa mi permette di ottenere un valore approssimato con la precisione voluta.

Quindi le serie, in matematica, mi permetteranno, applicando procedimenti ricorsivi, di poter arrivare a misurazioni precise quanto voglio (ricordiamo la frase: preso un $$\epsilon$$ piccolo a piacere...) nell'ambito delle funzioni e non solo: da questo la loro importanza fondamentale.