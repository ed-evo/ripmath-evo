# Applicazioni a disequazioni prodotto di espressioni di primo e secondo grado

Quando invece di un sistema hai un prodotto devi pensare che ogni prodotto è equivalente a più sistemi

***

Ad esempio se hai
$$\textcolor{blue}{(x-2)(x^2 - 6x + 5) > 0}$$
siccome devi trovare dove il prodotto è maggiore di zero potrai considerare le soluzioni che vanno bene per i due sistemi:

$$
\begin{cases}
\textcolor{blue}{x-2 > 0} \\
\textcolor{blue}{x^2 - 6x + 5 > 0}
\end{cases}
\quad \text{oppure} \quad
\begin{cases}
\textcolor{blue}{x-2 < 0} \\
\textcolor{blue}{x^2 - 6x + 5 < 0}
\end{cases}
$$

Infatti se i due fattori dell'espressione sono entrambi positivi oppure entrambi negativi allora l'espressione prodotto è positiva.

Se invece hai:
$$\textcolor{blue}{(x-2)(x^2 - 6x + 5) < 0}$$
siccome devi trovare dove il prodotto è minore di zero potrai considerare le soluzioni che vanno bene per i due sistemi:

$$
\begin{cases}
\textcolor{blue}{x-2 > 0} \\
\textcolor{blue}{x^2 - 6x + 5 < 0}
\end{cases}
\quad \text{oppure} \quad
\begin{cases}
\textcolor{blue}{x-2 < 0} \\
\textcolor{blue}{x^2 - 6x + 5 > 0}
\end{cases}
$$

Infatti se i due fattori dell'espressione hanno segno contrario allora il loro prodotto è negativo.

***

## Senza dover risolvere più sistemi, però, è più semplice porre tutte le espressioni componenti maggiori di zero (sia che l'espressione sia maggiore che minore di zero) e poi controllare dove il prodotto di queste espressioni risulta positivo oppure negativo. (Ciò equivale a risolvere contemporaneamente tutti i sistemi)

***

Vediamo come esempio la soluzione delle due disequazioni considerate sopra

***

### 1) Prima disequazione
$$\textcolor{red}{(x-2)(x^2 - 6x + 5) > 0}$$

Pongo entrambi i fattori maggiori di zero:

$$
\begin{cases}
\textcolor{blue}{x - 2 > 0} \\
\textcolor{blue}{x^2 - 6x + 5 > 0}
\end{cases}
$$

- la prima $$\textcolor{blue}{x - 2 > 0}$$ è verificata per $$\textcolor{blue}{x > 2}$$
- la seconda $$\textcolor{blue}{x^2 - 6x + 5 > 0}$$ è verificata per $$\textcolor{blue}{x < 1 \cup x > 5}$$

quindi il mio sistema è equivalente al sistema:

$$
\begin{cases}
\textcolor{blue}{x > 2} \\
\textcolor{blue}{x < 1 \cup x > 5}
\end{cases}
$$

Riporto su un grafico, evidenziando con un più dove il fattore è positivo e con un meno dove è negativo. Nella riga in blu metto il segno dell'espressione prodotto.

Ora faccio il calcolo dei segni: siccome devo prendere dove l'espressione è positiva, l'espressione prodotto sarà positiva dove entrambi i fattori sono positivi oppure dove sono entrambi negativi.

***

> **Nota:** Per distinguere questo caso dalla soluzione di un sistema io preferisco indicare i valori positivi con un più e quelli negativi con un meno, mentre nel sistema ho indicato con una riga continua le soluzioni accettabili e con una linea tratteggiata quelle non accettabili. Però stai attento a non confonderti perché qualche libro di testo indica nello stesso modo (riga continua e tratteggiata) sia la soluzione di un sistema che la soluzione di una disequazione prodotto di espressioni.

La soluzione è:
$$\textcolor{blue}{1 < x < 2 \cup x > 5}$$

***

### 2) Seconda disequazione
Se dobbiamo fare:
$$\textcolor{red}{(x-2)(x^2 - 6x + 5) < 0}$$

ci comportiamo esattamente allo stesso modo fino alla considerazione del risultato finale:

Pongo entrambi i fattori maggiori di zero (tanto il segno dell'espressione lo studio alla fine):

$$
\begin{cases}
\textcolor{blue}{x - 2 > 0} \\
\textcolor{blue}{x^2 - 6x + 5 > 0}
\end{cases}
$$

- la prima $$\textcolor{blue}{x - 2 > 0}$$ è verificata per $$\textcolor{blue}{x > 2}$$
- la seconda $$\textcolor{blue}{x^2 - 6x + 5 > 0}$$ è verificata per $$\textcolor{blue}{x < 1 \cup x > 5}$$

quindi il mio sistema è equivalente al sistema:

$$
\begin{cases}
\textcolor{blue}{x > 2} \\
\textcolor{blue}{x < 1 \cup x > 5}
\end{cases}
$$

Riporto su un grafico, evidenziando con un più dove il fattore è positivo e con un meno dove è negativo. Nella riga in blu metto il segno dell'espressione prodotto.

**Considerazione del risultato finale**

Ora faccio il calcolo dei segni: stavolta devo prendere dove l'espressione è negativa. L'espressione sarà negativa dove il prodotto dei segni dei fattori mi dà un risultato negativo, cioè dove i due fattori hanno segni contrari.

La soluzione è:
$$\textcolor{blue}{x < 1 \cup 2 < x < 5}$$