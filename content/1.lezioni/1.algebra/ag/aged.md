# Applicazioni a disequazioni quoziente di espressioni di primo e secondo grado

Siccome il quoziente si comporta, per i segni, come il prodotto quando hai un quoziente devi pensare che ogni quoziente è equivalente a più sistemi di disequazioni.

***

Ad esempio se hai:

$$
\textcolor{blue}{\frac{x - 3}{x^2 - 6x + 5} > 0}
$$

siccome devi trovare dove il quoziente è maggiore di zero potrai considerare le soluzioni che vanno bene per i due sistemi:

$$
\textcolor{blue}{\begin{cases} x-3 > 0 \\ x^2 - 6x + 5 > 0 \end{cases}} \quad \textcolor{blue}{\begin{cases} x-3 < 0 \\ x^2 - 6x + 5 < 0 \end{cases}}
$$

Infatti se numeratore e denominatore dell'espressione sono entrambi positivi oppure entrambi negativi allora l'espressione prodotto è positiva.

Se invece hai:

$$
\textcolor{blue}{\frac{x - 3}{x^2 - 6x + 5} < 0}
$$

siccome devi trovare dove il quoziente è minore di zero potrai considerare le soluzioni che vanno bene per i due sistemi:

$$
\textcolor{blue}{\begin{cases} x - 3 > 0 \\ x^2 - 6x + 5 < 0 \end{cases}} \quad \textcolor{blue}{\begin{cases} x - 3 < 0 \\ x^2 - 6x + 5 > 0 \end{cases}}
$$

Infatti se numeratore e denominatore dell'espressione hanno segno contrario allora l'espressione è negativa.

La regola dei segni del quoziente è identica a quella per il prodotto.

***

[Anche qui, senza dover risolvere più sistemi, però, è più semplice porre sia il numeratore che il denominatore maggiori di zero (sia che l'espressione sia maggiore che minore di zero) e poi controllare dove il prodotto dei segni di queste espressioni risulta positivo oppure negativo. (Ciò equivale a risolvere contemporaneamente tutti i sistemi)]{.text-lg}

***

Vediamo come esempio la soluzione di una disequazione.

***

Risolvere:
$$\textcolor{red}{(x-3)(x^2 - 6x + 5) < 0}$$

Anche se devo trovare i valori minori di zero pongo entrambi i fattori maggiori di zero:

$$
\textcolor{blue}{\begin{cases} 
x - 3 > 0 \\ 
x^2 - 6x + 5 > 0 
\end{cases}}
$$

- la prima $$\textcolor{blue}{x - 3 > 0}$$ è verificata per $$\textcolor{blue}{x > 3}$$
- la seconda $$\textcolor{blue}{x^2 - 6x + 5 > 0}$$ è verificata per $$\textcolor{blue}{x < 1 \cup x > 5}$$ [Calcoli](agecb.html)

quindi il mio sistema è equivalente al sistema:

$$
\textcolor{blue}{\begin{cases} 
x > 3 \\ 
x < 1 \cup x > 5 
\end{cases}}
$$

Riporto su un grafico, evidenziando con un più dove il fattore è positivo e con un meno dove è negativo. Nella riga in blu metto il segno dell'espressione prodotto.

Ora faccio il calcolo dei segni: siccome devo prendere dove l'espressione è negativa l'espressione prodotto sarà negativa dove numeratore e denominatore hanno segni diversi.

***

> Per distinguere questo caso dalla soluzione di un sistema io preferisco indicare i valori positivi con un più e quelli negativi con un meno, mentre nel sistema ho indicato con una riga continua le soluzioni accettabili e con una linea tratteggiata quelle non accettabili. Però stai attento a non confonderti perché qualche libro di testo indica nello stesso modo (riga continua e tratteggiata) sia la soluzione di un sistema che la soluzione di una disequazione prodotto di espressioni.

La soluzione è:

$$\textcolor{blue}{x < 1 \cup 3 < x < 5}$$

***

> **Importante!**
>
> Un caso da prendere bene in considerazione è quando abbiamo la frazione $$\ge 0$$ oppure $$\le 0$$, vediamolo su alcuni esercizi.

$$
\textcolor{blue}{\frac{x^2 - 9}{x - 2} \ge 0}
$$ [svolgimento](ageda.html)

$$
\textcolor{blue}{\frac{x^2 - 3x + 2}{x - 5} \le 0}
$$ [svolgimento](agedb.html)

***

Importante è anche il seguente caso particolare: quando il numeratore ed il denominatore sono fra loro semplificabili:

$$
\textcolor{blue}{\frac{x^2 - 5x + 6}{x - 3} > 0}
$$ [svolgimento](agedc.html)

***