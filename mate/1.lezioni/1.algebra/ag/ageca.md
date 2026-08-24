# Disequazione prodotto di tre disequazioni di primo e secondo grado

Prendiamo ad esempio
$$\textcolor{blue}{(x-3)(x^2 - 5x + 2)(x^2 - 4) > 0}$$
Devi trovare dove il prodotto è maggiore di zero ed hai tre termini.
Il prodotto sarà positivo se i termini sono:

| $$x-3$$ | $$x^2 - 5x + 2$$ | $$x^2 - 4$$ | Sistema |
| :---: | :---: | :---: | :---: |
| positivo | positivo | positivo | 1° sistema |
| negativo | negativo | positivo | 2° sistema |
| negativo | positivo | negativo | 3° sistema |
| positivo | negativo | negativo | 4° sistema |

Ottengo quindi i quattro sistemi:

$$
\begin{cases}
x-3 > 0 \\
x^2 - 5x + 4 > 0 \\
x^2 - 4 > 0
\end{cases}
$$

$$
\begin{cases}
x-3 < 0 \\
x^2 - 5x + 4 < 0 \\
x^2 - 4 > 0
\end{cases}
$$

$$
\begin{cases}
x-3 < 0 \\
x^2 - 5x + 4 > 0 \\
x^2 - 4 < 0
\end{cases}
$$

$$
\begin{cases}
x-3 > 0 \\
x^2 - 5x + 4 < 0 \\
x^2 - 4 < 0
\end{cases}
$$

***

Se invece abbiamo:
$$\textcolor{blue}{(x-3)(x^2 - 5x + 2)(x^2 - 4) < 0}$$
Devi trovare dove il prodotto è minore di zero ed hai tre termini.
Il prodotto sarà negativo se i termini sono:

| $$x-3$$ | $$x^2 - 5x + 2$$ | $$x^2 - 4$$ | Sistema |
| :---: | :---: | :---: | :---: |
| negativo | negativo | negativo | 1° sistema |
| negativo | positivo | positivo | 2° sistema |
| positivo | negativo | positivo | 3° sistema |
| positivo | positivo | negativo | 4° sistema |

Quindi ottengo i quattro sistemi:

$$
\begin{cases}
x-3 < 0 \\
x^2 - 5x + 4 < 0 \\
x^2 - 4 < 0
\end{cases}
$$

$$
\begin{cases}
x-3 < 0 \\
x^2 - 5x + 4 > 0 \\
x^2 - 4 > 0
\end{cases}
$$

$$
\begin{cases}
x-3 > 0 \\
x^2 - 5x + 4 < 0 \\
x^2 - 4 > 0
\end{cases}
$$

$$
\begin{cases}
x-3 > 0 \\
x^2 - 5x + 4 > 0 \\
x^2 - 4 < 0
\end{cases}
$$

***

Se poi la disequazione fosse un prodotto di $$4$$ espressioni otterresti qualcosa come $$8$$ sistemi sia per l'espressione positiva che per l'espressione negativa, quindi capisci che conviene porre tutti i fattori maggiori di zero e poi calcolare il segno dell'espressione.

***

> **Esercizio:** siccome
> $$2 \text{ fattori} = 2+2 \text{ sistemi} = 4$$
> $$3 \text{ fattori} = 4+4 \text{ sistemi} = 8$$
> $$4 \text{ fattori} = 8+8 \text{ sistemi} = 16$$
> ...
> Riesci a trovare la regola che ti permette di sapere quanti sistemi dovresti fare per $$5$$ fattori?

[Si tratta di disposizioni con ripetizione di due oggetti presi $$5$$ a $$5$$, cioè]{.text-blue}
$$\textcolor{red}{2^5 = 32 \text{ sistemi, 16 per il positivo e 16 per il negativo}}$$

[In generale per un prodotto di $$n$$ fattori avrai $$2^n$$ sistemi, metà per l'espressione positiva e metà per l'espressione negativa]{.text-blue}