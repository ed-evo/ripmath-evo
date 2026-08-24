> ## Osservazione
>
> Come ho già detto la funzione di densità non esprime una probabilità; infatti se hai una funzione continua come fai ad assegnare ad un punto una probabilità?
>
> Prendiamo ad esempio la caduta di un oggetto su un piano determinato: come posso esprimere la probabilità di impatto in un punto se un punto non ha dimensione?
>
> Allora dovrò sostituire al concetto di punto il solito concetto di intervallo per poter trovare una probabilità effettiva: è lo stesso [ragionamento](../../c/ca/ca.html) che ci ha portato a costruire l'analisi matematica basandola sul concetto di intervallo;
>
> Se considero un intervallo, anche se infinitesimo, allora per esso posso parlare della probabilità di impatto con l'oggetto che cade.
>
> Nel nostro caso, per poter parlare di probabilità consideriamo la funzione di ripartizione e la pensiamo composta da intervalli infinitesimi di base $$dx$$ e di altezza $$f(x)$$.
>
> Come conseguenza avremo che la densità di probabilità è legata all'area di questi rettangoli [base $$dx$$ ed altezza $$f(x)$]$.
>
> Cioè la derivata della funzione di ripartizione equivale (a meno di infinitesimi di ordine superiore) al differenziale della funzione $$F(x)$$:
>
> $$
> F'(x)dx = dF(x) = f(x)dx
> $$
>
> infatti dall'uguaglianza algebrica
>
> $$
> \textcolor{red}{\frac{dF(x)}{dx} = F'(x) = f(x)}
> $$
>
> facendo il minimo comune multiplo $$dx$$ ottengo
>
> $$
> \textcolor{red}{\frac{dF(x)}{dx} = \frac{F'(x) dx}{dx} = \frac{f(x) dx}{dx}}
> $$
>
> e moltiplicando tutte le espressioni per $$dx$$ (cioè togliendo i denominatori)
>
> $$
> \textcolor{red}{dF(x) = F'(x)dx = f(x)dx}
> $$
>
> Cioè, in generale, l'incremento infinitesimo di una funzione è uguale alla derivata della funzione stessa moltiplicata per il relativo incremento infinitesimo della $$x$$ (a meno di infinitesimi di ordine superiore e quindi da non considerare perché trascurabili).
>
> Intuitivamente $$F'(x)$$ è la derivata della funzione calcolata prendendo due punti sul grafico e facendo avvicinare il secondo punto al primo mentre $$dF(x)$$ è il differenziale che viene calcolato incrementando di un intervallino $$dx$$ la tangente al grafico. [Ripassa il differenziale](../../c/cf/cfh.html)