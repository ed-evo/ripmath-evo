# Esercizio

Dire per quali valori di $x$ la seguente disequazione risulta verificata:

$$
x + 6 + |x-4| + |x-1| \le -x + |x+3|
$$

Parto dalla definizione di modulo, cioè:
$|a| = a$ se $a > 0$
$|a| = -a$ se $a < 0$
quindi pongo $|x-4| > 0$, $|x-1| > 0$ ed $|x+3| > 0$ e, se risultano negativi, li cambio di segno.

$$
\begin{cases}
x - 4 > 0 \\
x - 1 > 0 \\
x + 3 > 0
\end{cases}
$$

$$
\begin{cases}
x > 4 \\
x > 1 \\
x > -3
\end{cases}
$$

Trovo tre punti che mi dividono la retta reale in $4$ intervalli:

- [Intervallo $x < -3$: gli argomenti dei $3$ moduli sono tutti negativi]{.text-red}
- [Intervallo $-3 \le x < 1$: i primi due moduli hanno argomento negativo, mentre il terzo modulo ha argomento positivo]{.text-green}
- [Intervallo $1 \le x < 4$: il primo modulo ha argomento negativo, mentre il secondo ed il terzo modulo hanno argomento positivo]{.text-blue}
- [Intervallo $x \ge 4$: tutti e tre i moduli hanno argomento positivo]{.text-purple}

Per ogni intervallo devo controllare se gli argomenti dei moduli sono positivi o negativi e scrivere le relative equazioni: te lo sviluppo passo-passo.

- [Primo intervallo: da $-\infty$ a $-3$]{.text-red}
  $x < -3$
  l'argomento del modulo $|x-4|$ è negativo quindi devo sostituire al posto del modulo $-x+4$
  l'argomento del modulo $|x-1|$ è negativo quindi devo sostituire al posto del modulo $-x+1$
  l'argomento del modulo $|x+3|$ è negativo quindi devo sostituire nell'equazione al posto del modulo $-x-3$

  quindi ho l'equazione:
  $x + 6 - x + 4 - x + 1 \le -x - x - 3$
  e posso considerare il sistema:
  $$
  \begin{cases}
  x + 6 - x + 4 - x + 1 \le -x - x - 3 \\
  x < -3
  \end{cases}
  $$
  o, meglio, facendo i calcoli:
  $$
  \begin{cases}
  -x + 11 \le -2x - 3 \\
  x < -3
  \end{cases}
  $$

- [Secondo intervallo: da $-3$ (compreso) a $1$]{.text-green}
  $-3 \le x < 1$
  l'argomento del modulo $|x-4|$ è negativo quindi devo sostituire al posto del modulo $-x+4$
  l'argomento del modulo $|x-1|$ è negativo quindi devo sostituire al posto del modulo $-x+1$
  l'argomento del modulo $|x+3|$ è positivo quindi devo sostituire nell'equazione al posto del modulo $x+3$

  quindi ho l'equazione:
  $x + 6 - x + 4 - x + 1 \le -x + x + 3$
  e posso considerare il sistema:
  $$
  \begin{cases}
  x + 6 - x + 4 - x + 1 \le -x + x + 3 \\
  -3 \le x < 1
  \end{cases}
  $$
  o, meglio, facendo i calcoli:
  $$
  \begin{cases}
  -x + 11 \le 3 \\
  -3 \le x < 1
  \end{cases}
  $$

- [Terzo intervallo: da $1$ (compreso) a $4$]{.text-blue}
  $1 \le x < 4$
  l'argomento del modulo $|x-4|$ è negativo quindi devo sostituire al posto del modulo $-x+4$
  l'argomento del modulo $|x-1|$ è positivo quindi devo sostituire al posto del modulo $x-1$
  l'argomento del modulo $|x+3|$ è positivo quindi devo sostituire nell'equazione al posto del modulo $x+3$

  quindi ho l'equazione:
  $x + 6 - x + 4 + x - 1 \le -x + x + 3$
  e posso considerare il sistema:
  $$
  \begin{cases}
  x + 6 - x + 4 + x - 1 \le -x + x + 3 \\
  1 \le x < 4
  \end{cases}
  $$
  o, meglio, facendo i calcoli:
  $$
  \begin{cases}
  x + 9 \le 3 \\
  1 \le x < 4
  \end{cases}
  $$

- [Quarto intervallo: da $4$ (compreso) a $+\infty$]{.text-purple}
  $x \ge 4$
  l'argomento del modulo $|x-4|$ è positivo quindi devo sostituire al posto del modulo $x-4$
  l'argomento del modulo $|x-1|$ è positivo quindi devo sostituire al posto del modulo $x-1$
  l'argomento del modulo $|x+3|$ è positivo quindi devo sostituire nell'equazione al posto del modulo $x+3$

  quindi ho l'equazione:
  $x + 6 + x - 4 + x - 1 \le -x + x + 3$
  e posso considerare il sistema:
  $$
  \begin{cases}
  x + 6 - x - 4 + x - 1 \le -x + x + 3 \\
  x \ge 4
  \end{cases}
  $$
  o, meglio, facendo i calcoli:
  $$
  \begin{cases}
  x + 1 \le 3 \\
  x \ge 4
  \end{cases}
  $$

La mia disequazione è equivalente ai $4$ sistemi:

$$
\text{I} \begin{cases} -x + 11 \le -2x - 3 \\ x < -3 \end{cases} \quad \text{II} \begin{cases} -x + 11 \le 3 \\ -3 \le x < 1 \end{cases} \quad \text{III} \begin{cases} x + 9 \le 3 \\ 1 \le x < 4 \end{cases} \quad \text{IV} \begin{cases} x + 1 \le 3 \\ x \ge 4 \end{cases}
$$

Non c'è più bisogno di fare riferimento all'intervallo di validità perché esso è inglobato nel sistema, quindi, risolvendo il sistema otterremo automaticamente i risultati negli intervalli validi.

[Risolvo il primo sistema]{.text-red}

$$
\begin{cases}
-x + 11 \le -2x - 3 \\
x < -3
\end{cases}
$$

$$
\begin{cases}
-x + 2x \le -11 - 3 \\
x < -3
\end{cases}
$$

$$
\begin{cases}
x \le -14 \\
x < -3
\end{cases}
$$

Il sistema ha soluzione $x \le -14$ (devi considerare dove sono valide entrambe).

[Risolvo il secondo sistema]{.text-green}

$$
\begin{cases}
-x + 11 \le 3 \\
-3 \le x < 1
\end{cases}
$$

$$
\begin{cases}
-x \le 3 - 11 \\
-3 \le x < 1
\end{cases}
$$

$$
\begin{cases}
-x \le -8 \\
-3 \le x < 1
\end{cases}
$$

$$
\begin{cases}
x \ge 8 \\
-3 \le x < 1
\end{cases}
$$

Il sistema non ammette soluzione (devi considerare dove sono valide entrambe).

[Risolvo il terzo sistema]{.text-blue}

$$
\begin{cases}
x + 9 \le 3 \\
1 \le x < 4
\end{cases}
$$

$$
\begin{cases}
x \le -6 \\
1 \le x < 4
\end{cases}
$$

> **Nota:** per indicare che il punto è compreso ho messo il trattino sotto; di solito nei grafici si indica con un tondino.

Il sistema non ammette soluzione (devi considerare dove sono valide entrambe).

[Risolvo il quarto sistema]{.text-purple}

$$
\begin{cases}
x + 1 \le 3 \\
x \ge 4
\end{cases}
$$

$$
\begin{cases}
x \le 3 - 1 \\
x \ge 4
\end{cases}
$$

$$
\begin{cases}
x \le 2 \\
x \ge 4
\end{cases}
$$

Il sistema non ammette soluzione (devi considerare dove sono valide entrambe).

Adesso metto assieme i risultati dei tre sistemi e trovo la soluzione.

[Soluzione]{.text-red}

$x \le -14$

cioè

$\forall x \in \mathbb{R} \mid x \in ]-\infty; -14]$

> **Nota:** Il simbolo $\mid$ significa "tale che". Si legge: per ogni numero Reale $x$ tale che $x$ appartenga all'intervallo semiaperto da meno infinito a $-14$: semiaperto significa che $-\infty$ non è compreso ma $-14$ è compreso quindi appartiene alle soluzioni.

Oppure, in grafico, considerando in rosso i punti che verificano l'equazione:

$x \le -14$
$\mathbb{R} \dots \infty \dots -14 \dots$