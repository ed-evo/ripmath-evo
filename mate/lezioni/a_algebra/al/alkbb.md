Risolvere la seguente disequazione logaritmica
$\textcolor{red}{\log_{1/2}(x^2 - x) > \log_{1/2}(x+1)}$

Come prima cosa poniamo la condizione che gli argomenti dei logaritmi siano positivi

$\textcolor{blue}{x^2 - x > 0}$
$\textcolor{blue}{x + 1 > 0}$

che equivalgono a

$\textcolor{blue}{x < 0 \lor x > 1}$
$\textcolor{blue}{x > -1}$

Trasformiamo la disequazione nella forma
$\textcolor{blue}{\log_{1/2}(\text{espressione}) > 0}$

Porto tutti i termini prima del maggiore
$\textcolor{blue}{\log_{1/2}(x^2 - x) - \log_{1/2}(x+1) > 0}$

e, per i teoremi sui logaritmi, posso scrivere

$$
\textcolor{blue}{\log_{1/2} \left( \frac{x^2 - x}{x+1} \right) > 0}
$$

Confrontando con il grafico della funzione logaritmo vedo che, essendo il logaritmo maggiore di zero (sopra l'asse delle $x$), devo porre l'argomento compreso fra zero ed $1$

$$
\textcolor{blue}{0 < \frac{x^2 - x}{x + 1} < 1}
$$

Sono due disequazioni: devo risolvere

$$
\begin{cases} 
\textcolor{blue}{\frac{x^2 - x}{x+1} > 0} \\ 
\textcolor{blue}{\frac{x^2 - x}{x+1} < 1} 
\end{cases}
$$

Ottengo come risultato:
$\textcolor{blue}{1 - \sqrt{2} < x < 0 \lor 1 < x < 1 + \sqrt{2}}$

Mettendo assieme questa relazione con le condizioni per la realtà dei logaritmi ho il sistema

$$
\begin{cases} 
\textcolor{blue}{x < 0 \lor x > 1} \\ 
\textcolor{blue}{x > -1} \\ 
\textcolor{blue}{1 - \sqrt{2} < x < 0 \lor 1 < x < 1 + \sqrt{2}} 
\end{cases}
$$

Riporto i dati su un grafico, e prendo i valori comuni a tutte le disequazioni.

> Indico i valori accettabili con una linea continua ed indico i non accettabili con una linea tratteggiata.

Ottengo quindi
$\textcolor{red}{1 - \sqrt{2} < x < 0 \lor 1 < x < 1 + \sqrt{2}}$