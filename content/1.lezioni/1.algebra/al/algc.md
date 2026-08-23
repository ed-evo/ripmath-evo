# Logaritmo di una potenza

**[Regola:]{.text-purple}** Il logaritmo di una potenza è uguale al prodotto dell'esponente per il logaritmo della base (la base è riferita alla potenza, non al logaritmo)

$$
\textcolor{blue}{\log_a b^n = n \log_a b}
$$

Deriva dalla regola della potenza di una potenza; infatti, ricordando che il logaritmo è l'esponente abbiamo

$$
\textcolor{blue}{(a^x)^n = a^{nx}}
$$

poniamo

$$
\textcolor{blue}{x = \log_a b}
$$

significa

$$
\textcolor{blue}{a^x = b}
$$

elevo entrambi i membri a potenza $$n$$

$$
\textcolor{blue}{(a^x)^n = b^n}
$$

cioè

$$
\textcolor{blue}{a^{nx} = b^n}
$$

Per definizione di logaritmo posso scrivere la relazione precedente come

$$
\textcolor{blue}{nx = \log_a b^n}
$$

ma siccome $$x = \log_a b$$

$$
\textcolor{blue}{n \log_a b = \log_a b^n}
$$

come volevamo

Quindi se dobbiamo fare una potenza possiamo trasformare la base in logaritmo, moltiplicare il risultato per la potenza e poi fare l'antilogaritmo per trovarne il risultato.

> **Nota:** Sembra complicato, ma prova ad esempio a fare questa potenza senza usare i logaritmi:
> 
> $$
> \textcolor{red}{(1,015)^{30}} =
> $$
> 
> Guarda che è un problema pratico: è il calcolo del montante di una lira impiegata per 30 anni all'interesse composto dell' 1,5%