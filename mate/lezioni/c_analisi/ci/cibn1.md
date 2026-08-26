Ti conviene porre la finestra sullo schermo al massimo

Studiare la funzione:
[$y = \textcolor{red}{x^3 - x^2 - 4x + 4}$]{.text-red}

Per questa, come per le altre funzioni, cercheremo di utilizzare il maggior numero possibile di punti dello studio.

## 1. Determinazione del Campo di esistenza
Il campo di esistenza è tutto l'asse reale:
[$C.E. \{x \in \mathbb{R}\}$]{.text-red}

---

## 2. Determinazione del tipo di funzione
È una funzione di tipo polinomiale.
Non è né pari né dispari né periodica.

---

## 3. Intersezione con gli assi
Faccio il sistema tra la funzione e l'asse delle $x$:

$$
\begin{cases} \textcolor{red}{y = x^3 - x^2 - 4x + 4} \\ \textcolor{red}{y = 0} \end{cases}
$$

$$
\begin{cases} \textcolor{red}{x^3 - x^2 - 4x + 4 = 0} \\ \textcolor{red}{y = 0} \end{cases}
$$

Per risolvere l'equazione di terzo grado scompongo il polinomio associato:
[$\textcolor{red}{x^3 - x^2 - 4x + 4 = (x - 1)(x - 2)(x + 2)}$]{.text-red}

$$
\begin{cases} \textcolor{red}{(x - 1)(x - 2)(x + 2) = 0} \\ \textcolor{red}{y = 0} \end{cases}
$$

Un prodotto è zero quando uno dei fattori è zero, quindi pongo ognuno dei fattori uguali a zero:

$$
\begin{cases} \textcolor{red}{x - 1 = 0} \\ \textcolor{red}{y = 0} \end{cases}
$$

$$
\begin{cases} \textcolor{red}{x = 1} \\ \textcolor{red}{y = 0} \end{cases}
$$ prima soluzione

$$
\begin{cases} \textcolor{red}{x - 2 = 0} \\ \textcolor{red}{y = 0} \end{cases}
$$

$$
\begin{cases} \textcolor{red}{x = 2} \\ \textcolor{red}{y = 0} \end{cases}
$$ seconda soluzione

$$
\begin{cases} \textcolor{red}{x + 2 = 0} \\ \textcolor{red}{y = 0} \end{cases}
$$

$$
\begin{cases} \textcolor{red}{x = -2} \\ \textcolor{red}{y = 0} \end{cases}
$$ terza soluzione

Ho tre punti di intersezione con l'asse delle $x$:
[$\textcolor{red}{A(-2, 0), \quad B(1, 0), \quad C(2, 0)}$]{.text-red}

Faccio il sistema tra la funzione e l'asse delle $y$:

$$
\begin{cases} \textcolor{red}{y = x^3 - x^2 - 4x + 4} \\ \textcolor{red}{x = 0} \end{cases}
$$

Ad $x$ sostituisco zero, quindi la $y$ sarà uguale al termine noto:

$$
\begin{cases} \textcolor{red}{y = 4} \\ \textcolor{red}{x = 0} \end{cases}
$$

Il punto di intersezione con l'asse $y$ è:
[$\textcolor{red}{D(0, 4)}$]{.text-red}

---

## 4. Valori agli estremi del campo di esistenza
Essendo il campo di esistenza tutto $\mathbb{R}$, questo punto potrebbe essere saltato; comunque, per completezza, vediamo i valori a meno infinito e a più infinito:

- [$\lim_{x \to -\infty} (x^3 - x^2 - 4x + 4) = -\infty$]{.text-red}
- [$\lim_{x \to +\infty} (x^3 - x^2 - 4x + 4) = +\infty$]{.text-red}

Quindi la funzione inizia a sinistra da meno infinito e sparisce a destra a più infinito.

---

## 5. Positività e negatività
Dobbiamo trovare i valori per cui la funzione è maggiore di zero:
[$\textcolor{red}{x^3 - x^2 - 4x + 4 > 0}$]{.text-red}

Sostituisco alla funzione la scomposizione trovata prima:
[$\textcolor{red}{(x - 1)(x - 2)(x + 2) > 0}$]{.text-red}

Faccio il sistema:

$$
\begin{cases} \textcolor{red}{x - 1 > 0} \\ \textcolor{red}{x - 2 > 0} \\ \textcolor{red}{x + 2 > 0} \end{cases}
$$

$$
\begin{cases} \textcolor{red}{x > 1} \\ \textcolor{red}{x > 2} \\ \textcolor{red}{x > -2} \end{cases}
$$

Faccio lo schema:
[$\textcolor{red}{x > 1 \implies - - - - - - - - - - - - - - (1) + + + + + + + + + + + + + +}$]{.text-red}
[$\textcolor{red}{x > 2 \implies - - - - - - - - - - - - - - - - - - - - - - - - (2) + + + + + + +}$]{.text-red}
[$\textcolor{red}{x > -2 \implies - - - - (-2) + + + + + + + + + + + + + + + + + + + + +}$]{.text-red}

[$\textcolor{red}{f(x) > 0 \implies - - - - (-2) + + + + + (1) - - - - - - - - (2) + + + + + + +}$]{.text-red}

Da meno infinito a $-2$ la funzione è negativa;
tra $-2$ e $1$ la funzione è positiva;
tra $1$ e $2$ la funzione è negativa;
da $2$ a più infinito la funzione è positiva.

---

## 6. Determinazione degli asintoti
Non esistono asintoti verticali perché la funzione non ha punti di discontinuità (il campo di esistenza è tutto $\mathbb{R}$).
Non esistono asintoti orizzontali perché per $x$ tendente all'infinito la funzione tende ad infinito.
Non esistono asintoti obliqui perché la funzione è di terzo grado e quindi non può essere approssimata mediante una retta.

---

## 7. Determinazione della derivata prima
Faccio la derivata di:
[$\textcolor{red}{y = x^3 - x^2 - 4x + 4}$]{.text-red}
[$\textcolor{red}{y' = 3x^2 - 2x - 4}$]{.text-red}

---

## 8. Crescenza e decrescenza
Pongo la derivata prima maggiore di zero per trovare le zone ove la funzione è crescente:
[$\textcolor{red}{3x^2 - 2x - 4 > 0}$]{.text-red}

Equazione associata:
[$\textcolor{red}{3x^2 - 2x - 4 = 0}$]{.text-red}

Risolvo (formula ridotta):
$$
\textcolor{red}{x_{1,2} = \frac{-(-1) \pm \sqrt{(-1)^2 - 3(-4)}}{3}}
$$

$$
\textcolor{red}{x_{1,2} = \frac{1 \pm \sqrt{13}}{3}}
$$

I valori sono:
$$
\textcolor{red}{x_1 = \frac{1 - \sqrt{13}}{3}}
$$
$$
\textcolor{red}{x_2 = \frac{1 + \sqrt{13}}{3}}
$$

> **Nota:** Non preoccupatevi; è normale che vengano delle radici, quindi non pensate di aver sbagliato i calcoli. Il valore approssimato sarà $x_1 \approx -0,8$ e $x_2 \approx 1,2$.

Essendo il $\Delta$ maggiore di zero, la disequazione sarà verificata per valori esterni all'intervallo delle radici, cioè:
- per valori da meno infinito a $x_1$ la funzione è crescente;
- per valori da $x_1$ a $x_2$ la funzione è decrescente;
- per valori da $x_2$ a più infinito la funzione è ancora crescente.

> **Nota:** Se osservate bene, il risultato trovato corrisponde a quanto trovato con la positività della funzione; infatti nello studio di funzione i dati sono correlati e se sbagliate qualcosa ve ne accorgete subito, il problema però è capire dove si è sbagliato.

---

## 9. Determinazione dei Massimi e minimi
- Siccome per valori da meno infinito a $x_1$ la funzione è crescente e per valori da $x_1$ a $x_2$ la funzione è decrescente, allora in $x_1$ abbiamo un punto di massimo.
- Siccome per valori da $x_1$ a $x_2$ la funzione è decrescente e per valori da $x_2$ a più infinito la funzione è ancora crescente, allora $x_2$ è un punto di minimo.

Ora bisogna calcolare le coordinate del punto di massimo e del punto di minimo.

**Coordinate del Massimo**
[$\textcolor{blue}{x = \frac{1 - \sqrt{13}}{3} \approx -0,8}$]{.text-blue}
[$\textcolor{blue}{y = \frac{70 + 26\sqrt{13}}{27} \approx 6,1}$]{.text-blue}

**Coordinate del minimo**
[$\textcolor{blue}{x = \frac{1 + \sqrt{13}}{3} \approx 1,5}$]{.text-blue}
[$\textcolor{blue}{y = \frac{70 - 26\sqrt{13}}{27} \approx -0,9}$]{.text-blue}

Se vuoi vedere i calcoli, consulta la documentazione dedicata.

---

## 10. Determinazione della derivata seconda
Partiamo dalla derivata prima:
[$\textcolor{red}{y' = 3x^2 - 2x - 4}$]{.text-red}
[$\textcolor{red}{y'' = 6x - 2}$]{.text-red}

---

## 11. Determinazione della concavità, convessità e flessi
Pongo la derivata seconda maggiore di zero:
- dove la disequazione è verificata avrò la concavità verso l'alto;
- dove la disequazione non è verificata avrò la concavità verso il basso;
- dove la curva cambia di concavità avrò un flesso.

[$\textcolor{red}{y'' = 6x - 2 > 0}$]{.text-red}
[$\textcolor{red}{6x > 2}$]{.text-red}
[$\textcolor{red}{x > 2/6}$]{.text-red}
[$\textcolor{red}{x > 1/3}$]{.text-red}

Quindi:
- [$\text{per } x > 1/3 \text{ la concavità è verso l'alto}$]{.text-red}
- [$\text{per } x < 1/3 \text{ la concavità è verso il basso}$]{.text-red}
- [$\text{in } x = 1/3 \text{ avrò il flesso } F(1/3, 70/27)$]{.text-red}

---

## 12. Determinazione di eventuali ulteriori punti appartenenti alla funzione
Non ci servono punti aggiuntivi.

---

## 13. Grafico della funzione
Ora mettiamo in un grafico tutti i dati trovati e, partendo da meno infinito, congiungiamo i punti con una riga continua.