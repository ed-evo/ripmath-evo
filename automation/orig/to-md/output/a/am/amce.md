Risolvere la seguente equazione esponenziale

$$
\textcolor{red}{2^{x+2} = 5^{x+1}}
$$

Mettiamo entrambi i termini alla stessa potenza

$$
\textcolor{blue}{2^2 \cdot 2^x = 5 \cdot 5^x}
$$

cioè

$$
\textcolor{blue}{4 \cdot 2^x = 5 \cdot 5^x}
$$

ora applico il logaritmo sia prima che dopo l'uguale (usiamo il generico logaritmo a base $e$ e indichiamolo con il simbolo $\log$, comunque in questi casi la base è ininfluente)

$$
\textcolor{blue}{\log(4 \cdot 2^x) = \log(5 \cdot 5^x)}
$$

> **Nota:** Avrei potuto invece usare lo stesso metodo usato nell'esercizio 3 cioè di arrivare ad un unico termine a potenza $x$ ma il risultato è identico

Ora per le regole dei logaritmi posso scrivere

$$
\textcolor{blue}{\log 4 + \log 2^x = \log 5 + \log 5^x}
$$

$$
\textcolor{blue}{\log 4 + x \log 2 = \log 5 + x \log 5}
$$

È un'equazione di primo grado nell'incognita $x$; porto i termini con l'incognita prima dell'uguale

$$
\textcolor{blue}{x \log 2 - x \log 5 = \log 5 - \log 4}
$$

$$
\textcolor{blue}{x (\log 2 - \log 5) = \log 5 - \log 4}
$$

Ricavo la $x$ ed ottengo il risultato

$$
\textcolor{red}{x = \frac{\log 5 - \log 4}{\log 2 - \log 5}}
$$