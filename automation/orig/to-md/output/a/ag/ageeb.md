# Esercizio su disequazione più complessa con maggiore o uguale

risolviamo la disequazione:

$$
\frac{(x^2 - 3x + 2)(x^2 + 2x + 1)}{(x - 3)(x^2 - 5x)} \geq 0
$$

Pongo ogni fattore al numeratore maggiore o uguale a zero ed ogni fattore al denominatore maggiore di zero (perché una frazione non può avere il denominatore uguale a zero)

$$
\begin{cases} 
\textcolor{blue}{x^2 - 3x + 2 \geq 0} \\ 
\textcolor{blue}{x^2 + 2x + 1 \geq 0} \\ 
\textcolor{blue}{x - 3 > 0} \\ 
\textcolor{blue}{x^2 - 5x > 0} 
\end{cases}
$$

- la prima $\textcolor{blue}{x^2 - 3x + 2 \geq 0}$ è verificata per $\textcolor{blue}{x \leq 1 \cup x \geq 2}$ [Calcoli](agedba.html)
- la seconda $\textcolor{blue}{x^2 + 2x + 1 \geq 0}$ è sempre verificata [Calcoli](ageeba.html)
- la terza $\textcolor{blue}{x - 3 > 0}$ è verificata per $\textcolor{blue}{x > 3}$
- la quarta $\textcolor{blue}{x^2 - 5x > 0}$ è verificata per $\textcolor{blue}{x < 0 \cup x > 5}$ [Calcoli](ageebb.html)

quindi il mio sistema è equivalente al sistema

$$
\begin{cases} 
\textcolor{blue}{x \leq 1 \cup x \geq 2} \\ 
\textcolor{blue}{\text{sempre positiva eccetto } x = -1 \text{ per cui si annulla}} \\ 
\textcolor{blue}{x > 3} \\ 
\textcolor{blue}{x < 0 \cup x > 5} 
\end{cases}
$$

> Riporto su un grafico, evidenziando con un più dove il fattore è positivo e con un meno dove è negativo. Dove il valore che annulla è accettabile lo indico con un cerchietto.
> Nella riga in blu metto il segno dell'espressione quoziente.
> Ora faccio il calcolo dei segni: siccome devo prendere dove l'espressione è positiva o nulla, l'espressione sarà positiva dove il prodotto dei segni di tutti i fattori dà risultato positivo e sarà nulla dove si annullano i fattori del numeratore (i cerchietti).

La soluzione è

$\textcolor{blue}{x = -1 \cup 0 < x \leq 1 \cup 2 \leq x < 3 \cup x > 5}$