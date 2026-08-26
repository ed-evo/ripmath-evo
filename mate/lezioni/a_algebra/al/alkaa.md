Risolvere la seguente disequazione logaritmica
$$
\textcolor{red}{\log_2 x > 1 - \log_2(x-1)}
$$

Come prima cosa poniamo la condizione che gli argomenti dei logaritmi siano positivi
[$x > 0$]{.text-blue}
[$x - 1 > 0$]{.text-blue}

Trasformiamola ora nella forma
[$\log_2(\text{espressione}) > 0$]{.text-blue}

Porto tutti i termini prima del maggiore
[$\log_2 x - 1 + \log_2(x-1) > 0$]{.text-blue}

ricordo che $1 = \log_2 2$
[$\log_2 x - \log_2 2 + \log_2(x-1) > 0$]{.text-blue}

e, per i teoremi sui logaritmi, posso scrivere
[$$
\log_2 \frac{x(x-1)}{2} > 0
$$]{.text-blue}

Confrontando con il grafico della funzione logaritmo qui a destra vedo che essendo il logaritmo maggiore di zero (sopra l'asse delle $x$) devo porre l'argomento maggiore di $1$
[$$
\frac{x(x-1)}{2} > 1
$$]{.text-blue}

cioè facendo il minimo comune multiplo
[$x(x-1) > 2$]{.text-blue}

e, facendo i calcoli
[$x^2 - x > 2$]{.text-blue}
[$x^2 - x - 2 > 0$]{.text-blue}

Mettendo assieme questa relazione con le condizioni per la realtà dei logaritmi devo risolvere il sistema

> **Nota:** Si potrebbe anche risolvere "a pezzi": prima le condizioni di realtà poi quest'ultima disequazione, ma, secondo me, è più conveniente il sistema

[$$
\begin{cases} 
x > 0 \\ 
x - 1 > 0 \\ 
x^2 - x - 2 > 0 
\end{cases}
$$]{.text-blue} 
[Calcoli](alkaaa.html)

Ottengo
[$$
\begin{cases} 
x > 0 \\ 
x > 1 \\ 
x < -1 \lor x > 2 
\end{cases}
$$]{.text-blue}

Riporto i dati su un grafico e prendo i valori comuni a tutte le disequazioni

> **Nota:** indico i valori accettabili con una linea continua ed indico i non accettabili con una linea tratteggiata

Ottengo quindi
$$
\textcolor{red}{x > 2}
$$