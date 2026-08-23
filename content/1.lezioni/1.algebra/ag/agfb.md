# Esercizio

Risolviamo la disequazione:

$$
\textcolor{red}{x^4 - 5x^2 + 4 \le 0}
$$

Considero il polinomio associato:

$$
\textcolor{blue}{x^4 - 5x^2 + 4 =}
$$

Devo scomporlo in fattori; sono 3 termini, se faccio la sostituzione $$x^2 = y$$ ottengo:

$$
\textcolor{blue}{y^2 - 5y + 4 =}
$$

Questo posso scomporlo come trinomio notevole:

$$
\textcolor{blue}{y^2 - 5y + 4 = (y - 1)(y - 4)}
$$

Ora rimetto $$x^2$$ al posto di $$y$$:

$$
\textcolor{blue}{x^4 - 5x^2 + 4 = (x^2 - 1)(x^2 - 4)}
$$

Ora devo decidere se voglio fare la disequazione con fattori di secondo grado oppure solo con fattori di primo grado scomponendo anche gli ultimi fattori tra parentesi.

Un metodo vale l'altro: noi utilizzeremo, fin dove possibile, fattori di primo grado. Dentro parentesi sono due termini e precisamente la differenza fra due quadrati, cioè:

$$
\textcolor{blue}{x^2 - 1 = (x - 1)(x + 1)}
$$

$$
\textcolor{blue}{x^2 - 4 = (x - 2)(x + 2)}
$$

E quindi avrò:

$$
\textcolor{blue}{x^4 - 5x^2 + 4 = (x - 1)(x + 1)(x - 2)(x + 2) > 0}
$$

Poniamo ogni fattore maggiore di zero:

- $$\textcolor{blue}{x - 1 > 0 \implies x > 1}$$
- $$\textcolor{blue}{x + 1 > 0 \implies x > -1}$$
- $$\textcolor{blue}{x - 2 > 0 \implies x > 2}$$
- $$\textcolor{blue}{x + 2 > 0 \implies x > -2}$$

Adesso riporto i risultati su un grafico, indicando con un $$+$$ dove ogni disequazione è positiva, con un $$-$$ dove è negativa e con un cerchietto i punti dove il fattore vale zero ed è accettabile, e faccio il conto dei segni: devo prendere gli intervalli dove il prodotto dei segni dei fattori (cioè il segno dell'espressione) risulta negativo o nullo.

Ottengo come risultato:

$$
\textcolor{red}{-2 \le x \le -1 \quad \cup \quad 1 \le x \le 2}
$$