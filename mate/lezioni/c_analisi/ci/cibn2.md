Ti conviene porre la finestra sullo schermo al massimo

Studiare la funzione:
[$y = \frac{x + 2}{x^2 - 1}$]{.text-red}

1. **Determinazione del Campo di esistenza**
Essendo una funzione fratta il campo di esistenza è dato dai valori che rendono il denominatore diverso da zero

[$x^2 - 1 \neq 0$]{.text-red}
[$x \neq \pm 1$]{.text-red}
[$C.E. \{x \in \mathbb{R} \mid x \neq -1 \text{ e } x \neq 1\}$]{.text-red}

Il campo di esistenza è dato da tutti i valori reali diversi da $-1$ e da $+1$.

---

2. **Determinazione del tipo di funzione**
È una funzione fratta.
Non è né pari né dispari né periodica.

---

3. **Intersezione con gli assi**
Per trovare il punto di intersezione con l'asse delle $x$ faccio il sistema tra la funzione e l'asse delle $x$:

[$$
\begin{cases} 
y = \frac{x+2}{x^2-1} \\ 
y = 0 
\end{cases}
$$]{.text-red}

[$$
\begin{cases} 
\frac{x+2}{x^2-1} = 0 \\ 
y = 0 
\end{cases}
$$]{.text-red}

Una frazione è zero se il numeratore vale zero quindi:

[$$
\begin{cases} 
x + 2 = 0 \\ 
y = 0 
\end{cases}
$$]{.text-red}

[$$
\begin{cases} 
x = -2 \\ 
y = 0 
\end{cases}
$$]{.text-red}

Il punto di intersezione con l'asse $x$ vale [$A = (-2, 0)$]{.text-red}.

Trovo ora il punto di intersezione fra la funzione e l'asse $y$:

[$$
\begin{cases} 
y = \frac{x+2}{x^2-1} \\ 
x = 0 
\end{cases}
$$]{.text-red}

Sostituisco:
[$$
\begin{cases} 
y = -2 \\ 
x = 0 
\end{cases}
$$]{.text-red}

Il punto di intersezione con l'asse $y$ vale [$B = (0, -2)$]{.text-red}.

---

4. **Valori agli estremi del campo di esistenza**
Essendo il campo di esistenza tutto $\mathbb{R}$ eccetto i valori $-1$ e $+1$, questa ricerca può essere saltata perché sarà compresa nella ricerca degli asintoti.

---

5. **Positività e negatività**
Dobbiamo trovare i valori per cui la funzione è maggiore di zero:

[$\frac{x + 2}{x^2 - 1} > 0$]{.text-red}

È una frazione, per essere positiva numeratore e denominatore devono avere segni concordi:

[$\text{NUM: } x + 2 \geq 0$]{.text-red}
[$\text{DEN: } x^2 - 1 > 0$]{.text-red}

Il denominatore è un'equazione di secondo grado e sarà positivo per valori esterni all'intervallo delle radici.
Risolvendo:

[$\text{NUM: } x \geq -2$]{.text-red}
[$\text{DEN: } x < -1 \lor x > 1$]{.text-red}

Faccio lo schema:
[$x > -2 \implies - - - - - (-2) + + + + + + + + + + + + + + +$]{.text-red}
[$x < -1 \lor x > 1 \implies + + + + + + + + + + (-1) - - - - - (+1) + + + + + +$]{.text-red}
[$f(x) > 0 \implies - - - - - (-2) + + + + (-1) - - - - - (+1) + + + + + +$]{.text-red}

Da meno infinito a $-2$ la funzione è negativa.
Tra $-2$ e $-1$ la funzione è positiva.
Tra $-1$ e $+1$ la funzione è negativa.
Da $+1$ a più infinito la funzione è positiva.

---

6. **Determinazione degli asintoti**
**Ricerca degli asintoti verticali**
(generalmente esistono quando si hanno punti di discontinuità)

- Primo punto di discontinuità $x = -1$
[$\lim_{x \to -1} \frac{x + 2}{x^2 - 1} = \frac{-1 + 2}{1 - 1} = \frac{1}{0} = \infty$]{.text-red}

quindi la retta [$x = -1$]{.text-red} è un asintoto verticale.
Per tracciarlo al meglio calcoliamo i limiti destro e sinistro della funzione nel punto $-1$:

    - Limite sinistro:
      [$\lim_{x \to -1^-} \frac{x + 2}{x^2 - 1}$]{.text-red}
      Per calcolare un limite di questo genere basta sostituire alla $x$ un valore un pochino più piccolo di $-1$ (ad esempio $-1,1$) e fare il conto dei segni:
      [$\frac{-1,1 + 2}{(-1,1)^2 - 1} > 0$]{.text-red}
      Il numeratore e il denominatore sono entrambi positivi quindi l'espressione è positiva cioè:
      [$\lim_{x \to -1^-} \frac{x + 2}{x^2 - 1} = +\infty$]{.text-red}

    - Limite destro:
      [$\lim_{x \to -1^+} \frac{x + 2}{x^2 - 1}$]{.text-red}
      Per calcolare un limite di questo genere basta sostituire alla $x$ un valore un pochino più grande di $-1$ (ad esempio $-0,9$) e fare il conto dei segni:
      [$\frac{-0,9 + 2}{(-0,9)^2 - 1} < 0$]{.text-red}
      Il numeratore è positivo mentre il denominatore è negativo quindi l'espressione è negativa cioè:
      [$\lim_{x \to -1^+} \frac{x + 2}{x^2 - 1} = -\infty$]{.text-red}

- Secondo punto di discontinuità $x = +1$
[$\lim_{x \to +1} \frac{x + 2}{x^2 - 1} = \frac{+1 + 2}{1 - 1} = \frac{3}{0} = \infty$]{.text-red}

quindi la retta [$x = 1$]{.text-red} è un asintoto verticale.
Per tracciarlo al meglio calcoliamo i limiti destro e sinistro della funzione nel punto $1$:

    - Limite sinistro:
      [$\lim_{x \to +1^-} \frac{x + 2}{x^2 - 1}$]{.text-red}
      Per calcolare un limite di questo genere basta sostituire alla $x$ un valore un pochino più piccolo di $1$ (ad esempio $0,9$) e fare il conto dei segni:
      [$\frac{0,9 + 2}{(0,9)^2 - 1} > 0$]{.text-red} (Nota: l'HTML riporta > 0 ma il testo dice che è negativa)
      Il numeratore è positivo mentre il denominatore è negativo quindi l'espressione è negativa cioè:
      [$\lim_{x \to +1^-} \frac{x + 2}{x^2 - 1} = -\infty$]{.text-red}

    - Limite destro:
      [$\lim_{x \to +1^+} \frac{x + 2}{x^2 - 1}$]{.text-red}
      Per calcolare un limite di questo genere basta sostituire alla $x$ un valore un pochino più grande di $1$ (ad esempio $1,1$) e fare il conto dei segni:
      [$\frac{1,1 + 2}{(1,1)^2 - 1} < 0$]{.text-red} (Nota: l'HTML riporta < 0 ma il testo dice che è positiva)
      Sia il numeratore che il denominatore sono positivi quindi l'espressione è positiva cioè:
      [$\lim_{x \to +1^+} \frac{x + 2}{x^2 - 1} = +\infty$]{.text-red}

**Vediamo ora la ricerca dell'asintoto orizzontale od obliquo**

[$\lim_{x \to \infty} \frac{x + 2}{x^2 - 1} = 0$]{.text-red}

Il numeratore ha potenza inferiore rispetto al denominatore quindi va all'infinito più lentamente quindi, quando sopra è ancora un numero sotto è già infinito e numero diviso infinito vale zero.

asintoto orizzontale [$y = 0$]{.text-red}

> In un liceo in cui ho insegnato vi era anche l'uso di determinare per l'asintoto orizzontale se la funzione si trovi sopra o sotto l'asintoto stesso. Penso che questo sia sovrabbondante, comunque se vuoi vedere un esempio.

---

7. **Determinazione della derivata prima**
Faccio la derivata di:
[$y = \frac{x + 2}{x^2 - 1}$]{.text-red}

È la derivata di un quoziente:
[$y' = \frac{1 \cdot (x^2 - 1) - (x + 2) \cdot 2x}{(x^2 - 1)^2}$]{.text-red}

Eseguendo i calcoli:
[$y' = \frac{-x^2 - 4x - 1}{(x^2 - 1)^2}$]{.text-red}

---

8. **Crescenza e decrescenza**
Pongo la derivata prima maggiore di zero per trovare le zone ove la funzione è crescente:

[$\frac{-x^2 - 4x - 1}{(x^2 - 1)^2} \geq 0$]{.text-red}

È una frazione, per essere positiva numeratore e denominatore devono avere segni concordi.
Il denominatore, essendo un quadrato sarà sempre positivo.
Il numeratore è un'espressione di secondo grado, considero l'equazione associata:

[$-x^2 - 4x - 1 = 0$]{.text-red}

Cambio di segno:
[$x^2 + 4x + 1 = 0$]{.text-red}

Risolvo (formula ridotta):
[$x_{1,2} = \frac{-2 \pm \sqrt{(2)^2 - 1}}{1} = -2 \pm \sqrt{3}$]{.text-red}

I valori sono:
[$x_1 = -2 - \sqrt{3}$]{.text-red}
[$x_2 = -2 + \sqrt{3}$]{.text-red}

Il valore approssimato sarà $x_1 = -3,7$, $x_2 = -0,3$.

Essendo il Delta maggiore di zero ed il primo coefficiente minore di zero la disequazione sarà verificata per valori interni all'intervallo delle radici cioè:
Per valori da meno infinito ad $x_1$ la funzione è negativa.
Per valori da $x_1$ ad $x_2$ la funzione è positiva.
Per valori da $x_2$ a più infinito la funzione è ancora negativa.

Facciamo lo schema:
[$\text{NUM: } -2 - \sqrt{3} \leq x \leq -2 + \sqrt{3}$]{.text-red}
[$\text{DEN: sempre positivo}$]{.text-red}

Riporto su un grafico:
[$\text{NUM} \geq 0 \implies - - - - - (-2 - \sqrt{3}) + + + + + + + + (-2 + \sqrt{3}) - - - - -$]{.text-red}
[$\text{DEN} > 0 \implies + + + + + + + + + + + + + + + + + + + + + + + + + + +$]{.text-red}
[$f(x) > 0 \implies - - - - - (-2 - \sqrt{3}) + + + + + + + + (-2 + \sqrt{3}) - - - - -$]{.text-red}

Per valori da meno infinito a $-2 - \sqrt{3}$ la funzione è decrescente.
Per valori da $-2 - \sqrt{3}$ a $-2 + \sqrt{3}$ la funzione è crescente.
Per valori da $-2 + \sqrt{3}$ a più infinito la funzione è ancora decrescente.

---

9. **Determinazione dei Massimi e minimi**

> Senza troppi discorsi se guardi la figura precedente vedi subito che $-2 - \sqrt{3}$ è un minimo e $-2 + \sqrt{3}$ è un massimo, se invece vogliamo fare le cose precise facciamo i seguenti ragionamenti:

- Siccome per valori da meno infinito a [$2 - \sqrt{3}$]{.text-red} la funzione è decrescente e per valori da [$2 - \sqrt{3}$]{.text-red} ad [$2 + \sqrt{3}$]{.text-red} la funzione è crescente allora in [$2 - \sqrt{3}$]{.text-red} abbiamo un punto di minimo.
- Siccome per valori da [$2 - \sqrt{3}$]{.text-red} ad [$2 + \sqrt{3}$]{.text-red} la funzione è crescente e per valori da [$2 + \sqrt{3}$]{.text-red} a più infinito la funzione è decrescente allora [$2 + \sqrt{3}$]{.text-red} è un punto di massimo.

Ora bisogna fornirsi di pazienza e calcolare le coordinate del punto di massimo e del punto di minimo. Il risultato è:

Coordinate del minimo:
[$\text{x} = -2 - \sqrt{3} \text{ (valore approssimato circa -3,7)}$]{.text-blue}
[$y = \frac{\sqrt{3} - 2}{2} \text{ (valore approssimato circa 0,15)}$]{.text-blue}

Coordinate del Massimo:
[$\text{x} = -2 + \sqrt{3} \text{ (valore approssimato circa -0,3)}$]{.text-blue}
[$y = \frac{-2 - \sqrt{3}}{2} \text{ (valore approssimato circa -1,8)}$]{.text-blue}

Se vuoi vedere i calcoli.

---

10. **Determinazione della derivata seconda**
Come si fa di solito nelle funzioni fratte possiamo trascurare la derivata seconda perché ormai abbiamo abbastanza dati con la derivata prima, e quindi possiamo già disegnare la funzione con buona approssimazione.

---

11. **Determinazione della concavità, convessità e flessi**
Non avendo fatto la derivata seconda non tratteremo questo punto (si tralascia di solito nelle funzioni razionali fratte perché in queste è abbastanza semplice il metodo dello studio della derivata prima mentre il metodo della derivata seconda solitamente è piuttosto laborioso).

---

12. **Determinazione di eventuali ulteriori punti appartenenti alla funzione**
Non ci servono punti aggiuntivi.

---

13. **Grafico della funzione**
Ora mettiamo in un grafico tutti i dati trovati.

Il minimo è un po' forzato, in effetti con l'unità di misura scelta è vicinissimo all'asse $x$.
Poi partendo da meno infinito congiungo i punti con una riga continua (nera).