# [Esercizio]{.text-red}

Dire per quali valori di $$x$$ la seguente disequazione risulta verificata:

$$
2x + 3 - |x-2| > 0
$$

> **Nota:** Parto dalla definizione di modulo, cioè:
> $$|a| = a \text{ se } a > 0$$
> $$|a| = -a \text{ se } a < 0$$
> Quindi pongo $$|x-2| > 0$$ e, trovato l'intervallo dei valori per cui è positivo, non cambio di segno l'espressione, cioè sostituisco al modulo $$x-2$$, mentre per l'intervallo dei valori in cui è negativo cambio di segno l'espressione, cioè sostituisco al modulo $$-x+2$$.

$$
x - 2 > 0
$$
$$
x > 2
$$

Significa che nell'intervallo $$x > 2$$ il termine entro il modulo (argomento) è positivo, quindi metto $$x-2$$ al posto del modulo; invece nell'intervallo $$x < 2$$ l'argomento del modulo è negativo, quindi cambio di segno e metto $$-x+2$$ al posto del modulo. Siccome ho anche il punto $$x=2$$, di solito lo aggiungo alla determinazione positiva mettendo il $$\ge$$.

La mia disequazione si sdoppia nei due sistemi:

$$
\begin{cases}
2x + 3 - (-x+2) > 0 \\
x < 2
\end{cases}
$$

e

$$
\begin{cases}
2x + 3 - (x-2) > 0 \\
x \ge 2
\end{cases}
$$

Quindi devo risolvere due sistemi: ti scrivo i sistemi sopra gli intervalli relativi.

[$$
\begin{cases}
2x + 3 - (-x+2) > 0 \\
x < 2
\end{cases}
$$]{.text-red} \quad [$$
\begin{cases}
2x + 3 - (x-2) > 0 \\
x \ge 2
\end{cases}
$$]{.text-blue}

---

Risolvo il primo sistema:

[$$
\begin{cases}
2x + 3 - (-x+2) > 0 \\
x < 2
\end{cases}
$$
$$
\begin{cases}
2x + 3 + x - 2 > 0 \\
x < 2
\end{cases}
$$
$$
\begin{cases}
3x + 1 > 0 \\
x < 2
\end{cases}
$$
$$
\begin{cases}
3x > -1 \\
x < 2
\end{cases}
$$
$$
\begin{cases}
x > -1/3 \\
x < 2
\end{cases}
$$
$$
-1/3 < x < 2
$$]{.text-red}

Risolvo il secondo sistema:

[$$
\begin{cases}
2x + 3 - (x-2) > 0 \\
x \ge 2
\end{cases}
$$
$$
\begin{cases}
2x + 3 - x + 2 > 0 \\
x \ge 2
\end{cases}
$$
$$
\begin{cases}
x + 5 > 0 \\
x \ge 2
\end{cases}
$$
$$
\begin{cases}
x > -5 \\
x \ge 2
\end{cases}
$$
quindi ottengo
$$
x \ge 2
$$]{.text-blue}

Adesso devo mettere assieme i risultati e trovo la soluzione.

**Soluzione**

[$$
-1/3 < x < 2 \cup x \ge 2
$$]{.text-red}

cioè

[$$
\forall x \in \mathbb{R} \text{ tale che } x \in ]-1/3; +\infty[
$$]{.text-red}

> **Nota:** Si legge: per ogni numero reale appartenente all'intervallo aperto $$-1/3$$ più infinito: aperto significa che $$-1/3$$ non è una soluzione, cioè non è compreso nell'intervallo delle soluzioni.

Oppure, in grafico, considerando in rosso i punti che verificano l'equazione:

[$$
x > -1/3 \quad \text{---} -1/3 \xrightarrow{\hspace{5cm}}
$$]{.text-red}
$$
\mathbb{R} \xrightarrow{\hspace{8cm}}
$$