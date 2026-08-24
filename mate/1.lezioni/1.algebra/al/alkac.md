Risolvere la seguente disequazione logaritmica
[$$\log_3 (2-x) < \log_3(2+x) - \log_3 x + 1$$]{.text-red}

Come prima cosa poniamo le condizioni che gli argomenti dei logaritmi siano positivi: devono valere le condizioni
[$$2 - x > 0$$]{.text-blue}
[$$2 + x > 0$$]{.text-blue}
[$$x > 0$$]{.text-blue}

cioè, sviluppando:
[$$x < 2$$]{.text-blue}
[$$x > -2$$]{.text-blue}
[$$x > 0$$]{.text-blue}

Trasformiamola ora nella forma 
[$$\log_3(\text{espressione}) < 0$$]{.text-blue}

Porto tutti i termini prima del minore
[$$\log_3 (2-x) - \log_3(2+x) + \log_3 x - 1 < 0$$]{.text-blue}

ricordo che $$1 = \log_3 3$$

[$$\log_3 (2-x) - \log_3(2+x) + \log_3 x - \log_3 3 < 0$$]{.text-blue}

e, per i teoremi sui logaritmi, posso scrivere
$$
[\log_3 \frac{x(2-x)}{3(2+x)} < 0]{.text-blue}
$$

Confrontando con il grafico della funzione logaritmo vedo che essendo il logaritmo minore di zero (sotto l'asse delle $$x$$) devo supporre l'argomento compreso fra $$0$$ ed $$1$$
$$
[0 < \frac{x(2-x)}{3(2+x)} < 1]{.text-blue}
$$

Sono due disequazioni: devo risolvere il sistema:
$$
\begin{cases} 
[\frac{x(2-x)}{3(2+x)} > 0]{.text-blue} \\ 
[\frac{x(2-x)}{3(2+x)} < 1]{.text-blue} 
\end{cases}
$$

Ottengo come risultato:
[$$0 < x < 2$$]{.text-blue}

Mettendo assieme questa relazione con le condizioni per la realtà dei logaritmi ho il sistema
$$
\begin{cases} 
[x < 2]{.text-blue} \\ 
[x > -2]{.text-blue} \\ 
[x > 0]{.text-blue} \\ 
[0 < x < 2]{.text-blue} 
\end{cases}
$$

Riporto i dati su un grafico, e prendo i valori comuni a tutte le disequazioni
> **Nota:** indico i valori accettabili con una linea continua ed indico i non accettabili con una linea tratteggiata

Ottengo quindi 
[$$0 < x < 2$$]{.text-red}