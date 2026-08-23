# Esercizio

Dire per quali valori di $$x$$ la seguente disequazione risulta verificata:

$$
x + 6 + |2x-2| > 0
$$

Parto dalla definizione di modulo cioè:
$$|a| = a \text{ se } a > 0$$
$$|a| = -a \text{ se } a < 0$$

quindi pongo $$|2x-2| > 0$$ e trovato l'intervallo dei valori per cui è positivo non cambio di segno l'espressione, cioè sostituisco al modulo $$2x-2$$, mentre per l'intervallo dei valori in cui è negativo cambio di segno l'espressione, cioè sostituisco al modulo $$-2x+2$$.

$$
2x - 2 > 0
$$
$$
2x > 2
$$
$$
x > 1
$$

Significa che nell'intervallo $$x > 1$$ il termine entro il modulo è positivo quindi metto $$2x-2$$ al posto del modulo; invece nell'intervallo $$x < 1$$ il termine entro il modulo è negativo quindi cambio di segno e metto $$-2x+2$$ al posto del modulo. Siccome ho anche il punto $$x=1$$ di solito lo aggiungo alla determinazione positiva mettendo il $$\ge$$; la mia disequazione diventa:

$$
x + 6 + (-2x+2) > 0 \quad \text{se} \quad x < 1
$$

$$
x + 6 + 2x-2 > 0 \quad \text{se} \quad x \ge 1
$$

Quindi devo risolvere due disequazioni:
[la prima nell'intervallo $$x < 1$$]{.text-red-darken-1}
[la seconda nell'intervallo $$x \ge 1$$]{.text-blue-darken-1}

Te le indico in un grafico: sopra l'equazione e sotto l'intervallo in cui tale equazione è valida:

[$$x + 6 + (-2x+2) > 0$$]{.text-red-darken-1} | [$$x + 6 + 2x - 2 > 0$$]{.text-blue-darken-1}
--- | ---
[____________________]{.text-red-darken-1} | [$$1$$____________________]{.text-blue-darken-1}

[Risolvo la prima]{.text-red-darken-1}
$$
x + 6 + (-2x+2) > 0 \quad \text{se} \quad x < 1
$$
$$
x + 6 - 2x + 2 > 0
$$
$$
-x + 8 > 0
$$
$$
-x > -8
$$
$$
x < 8 \text{ nell'intervallo } x < 1
$$

quindi siccome devo considerare solamente i valori dell'intervallo $$x < 1$$ scriverò solamente:

[$$x < 1$$]{.text-red-darken-1}

[Risolvo la seconda]{.text-blue-darken-1}
$$
x + 6 + 2x - 2 > 0 \quad \text{se} \quad x \ge 1
$$
$$
3x + 4 > 0
$$
$$
3x > -4
$$
$$
x > -4/3 \text{ nell'intervallo } x \ge 1
$$

e siccome devo considerare solamente i valori dell'intervallo $$x \ge 1$$ scriverò:

[$$x \ge 1$$]{.text-blue-darken-1}

adesso devo mettere assieme i risultati e trovo la soluzione.

## Soluzione

$$
x < 1 \cup x \ge 1
$$
cioè per ogni valore di $$x$$
$$
\forall x \in \mathbb{R}
$$
oppure, in grafico, considerando in rosso i punti che verificano l'equazione:

$$
\textcolor{red}{\text{______________________________}}
$$
$$
\text{______________________________} \mathbb{R}
$$

***

> **Nota:** Alcuni professori, senza mettere le condizioni solamente in alto, preferiscono trattare le disequazioni divise come un sistema:
> 
> $$
> \begin{cases} 
> x + 6 + (-2x+2) > 0 \\ 
> x < 1 
> \end{cases}
> $$
> e
> $$
> \begin{cases} 
> x + 6 + 2x - 2 > 0 \\ 
> x \ge 1 
> \end{cases}
> $$
> In effetti è più preciso, anche se talvolta è graficamente pesante quando i moduli sono più di uno; comunque nel prossimo esercizio faremo così anche noi, riservandoci di usare l'altro metodo quando dovremo mettere troppi vincoli.