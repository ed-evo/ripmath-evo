# Esercizio

Dire per quali valori di $x$ la seguente disequazione risulta verificata

$|x + 4| - |x - 2| > -x + 8$

Parto dalla definizione di modulo cioè:
$|a| = a \text{ se } a > 0$
$|a| = -a \text{ se } a < 0$

Quindi pongo $|x + 4| > 0$ ed anche $|x - 2| > 0$ e, se risultano negativi, li cambio di segno:

$$
\begin{cases}
x + 4 > 0 \\
x - 2 > 0
\end{cases}
$$

$$
\begin{cases}
x > -4 \\
x > 2
\end{cases}
$$

Trovo due punti che mi dividono la retta reale in $3$ intervalli, come vedi dal grafico qui sotto:

| | $x < -4$ | $-4 \le x < 2$ | $x \ge 2$ |
| :--- | :---: | :---: | :---: |
| $x > -4$ | $-$ | $+$ | $+$ |
| $x > 2$ | $-$ | $-$ | $+$ |
| $\mathbb{R}$ | $-\infty \dots -4$ | $-4 \dots 2$ | $2 \dots +\infty$ |

[Nel primo intervallo (rosso) gli argomenti dei moduli sono entrambi negativi]{.text-red-darken-1}
[Nel secondo intervallo (verde) il primo modulo ha argomento positivo, mentre il secondo modulo ha argomento negativo]{.text-green}
[Nel terzo intervallo (blu) entrambi gli argomenti dei moduli sono positivi]{.text-blue}

Per ogni intervallo devo controllare se gli argomenti dei moduli sono positivi o negativi e scrivere le relative equazioni: te lo sviluppo passo-passo.

- [Primo intervallo: da $-\infty$ a $-4$]{.text-red-darken-1}
  $x < -4$
  L'argomento del modulo $|x + 4|$ è negativo quindi devo sostituire nell'equazione al posto del modulo $-x - 4$
  L'argomento del modulo $|x - 2|$ è negativo quindi devo sostituire al posto del modulo $-x + 2$
  Quindi ho l'equazione:
  $-x - 4 - (-x + 2) > -x + 8$
  E posso considerare il sistema:
  $$
  \begin{cases}
  -x - 4 - (-x + 2) > -x + 8 \\
  x < -4
  \end{cases}
  $$

- [Secondo intervallo: da $-4$ (compreso) a $2$]{.text-green}
  $-4 \le x < 2$
  L'argomento del modulo $|x + 4|$ è positivo quindi devo sostituire nell'equazione al posto del modulo $x + 4$
  L'argomento del modulo $|x - 2|$ è negativo quindi devo sostituire al posto del modulo $-x + 2$
  Quindi ho l'equazione:
  $x + 4 - (-x + 2) > -x + 8$
  E posso considerare il sistema:
  $$
  \begin{cases}
  x + 4 - (-x + 2) > -x + 8 \\
  -4 \le x < 2
  \end{cases}
  $$

- [Terzo intervallo: da $2$ (compreso) a $+\infty$]{.text-blue}
  $x \ge 2$
  L'argomento del modulo $|x + 4|$ è positivo quindi devo sostituire nell'equazione al posto del modulo $x + 4$
  L'argomento del modulo $|x - 2|$ è positivo quindi devo sostituire al posto del modulo $x - 2$
  Quindi ho l'equazione:
  $x + 4 - (x - 2) > -x + 8$
  E posso considerare il sistema:
  $$
  \begin{cases}
  x + 4 - (x - 2) > -x + 8 \\
  x \ge 2
  \end{cases}
  $$

La mia disequazione è equivalente ai $3$ sistemi:

I $$
\begin{cases}
-x - 4 - (-x + 2) > -x + 8 \\
x < -4
\end{cases}
$$
II $$
\begin{cases}
x + 4 - (-x + 2) > -x + 8 \\
-4 \le x < 2
\end{cases}
$$
III $$
\begin{cases}
x + 4 - (x - 2) > -x + 8 \\
x \ge 2
\end{cases}
$$

> **Nota:** Da notare che, se usi il sistema, non c'è più bisogno di fare riferimento all'intervallo di validità perché esso è inglobato nel sistema stesso, quindi otterrai automaticamente i risultati negli intervalli validi.

### [Risolvo il primo sistema]{.text-red-darken-1}

$$
\begin{cases}
-x - 4 - (-x + 2) > -x + 8 \\
x < -4
\end{cases}
$$

$$
\begin{cases}
-x - 4 + x - 2 > -x + 8 \\
x < -4
\end{cases}
$$

$$
\begin{cases}
-6 > -x + 8 \\
x < -4
\end{cases}
$$

$$
\begin{cases}
x > 8 + 6 \\
x < -4
\end{cases}
$$

$$
\begin{cases}
x > 14 \\
x < -4
\end{cases}
$$

Il sistema non ammette soluzione (devi considerare dove sono valide entrambe).

### [Risolvo il secondo sistema]{.text-green}

$$
\begin{cases}
x + 4 - (-x + 2) > -x + 8 \\
-4 \le x < 2
\end{cases}
$$

$$
\begin{cases}
x + 4 + x - 2 > -x + 8 \\
-4 \le x < 2
\end{cases}
$$

$$
\begin{cases}
2x + 2 > -x + 8 \\
-4 \le x < 2
\end{cases}
$$

$$
\begin{cases}
2x + x > 8 - 2 \\
-4 \le x < 2
\end{cases}
$$

$$
\begin{cases}
3x > 6 \\
-4 \le x < 2
\end{cases}
$$

$$
\begin{cases}
x > 2 \\
-4 \le x < 2
\end{cases}
$$

Il sistema non ammette soluzione (devi considerare dove sono valide entrambe e $2$ non appartiene né alla prima, né alla seconda disequazione).

### [Risolvo il terzo sistema]{.text-blue}

$$
\begin{cases}
x + 4 - (x - 2) > -x + 8 \\
x \ge 2
\end{cases}
$$

$$
\begin{cases}
x + 4 - x + 2 > -x + 8 \\
x \ge 2
\end{cases}
$$

$$
\begin{cases}
6 > -x + 8 \\
x \ge 2
\end{cases}
$$

$$
\begin{cases}
x > -6 + 8 \\
x \ge 2
\end{cases}
$$

$$
\begin{cases}
x > 2 \\
x \ge 2
\end{cases}
$$

Il sistema ammette soluzione $x > 2$ (devi considerare dove sono valide entrambe).

Adesso metto assieme i risultati dei tre sistemi e trovo la soluzione.

## Soluzione

$x > 2$

cioè

$\forall x \in \mathbb{R} / x \in ]2, +\infty[$

> **Nota:** Il simbolo $/$ significa "tale che". Si legge: per ogni numero reale $x$ tale che $x$ appartenga all'intervallo aperto da $2$ a più infinito: aperto significa che $2$ non è una soluzione, cioè non è compreso nell'intervallo delle soluzioni.

Oppure, in grafico, considerando in rosso i punti che verificano l'equazione:

$x > 2 \implies \text{ } 2 \text{ ________________________________}$
$\mathbb{R} \text{ ___________________________________________________}$