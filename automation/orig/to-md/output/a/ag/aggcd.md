# <span class="text-red-600">Esercizio</span>

Dire per quali valori di $x$ la seguente disequazione risulta verificata

$$
x + 6 + |x-4| + |x-1| \le -x + |x+3|
$$

Parto dalla definizione di modulo cioè:
$$
|a| = \begin{cases} a & \text{se } a > 0 \\ -a & \text{se } a < 0 \end{cases}
$$
quindi pongo $|x-4| > 0$, $|x-1| > 0$ ed $|x+3| > 0$ e, se risultano negativi, li cambio di segno:

$$
\begin{cases} x - 4 > 0 \\ x - 1 > 0 \\ x + 3 > 0 \end{cases} \implies \begin{cases} x > 4 \\ x > 1 \\ x > -3 \end{cases}
$$

Trovo tre punti che mi dividono la retta reale in 4 intervalli:

- <span class="text-red-600">$x < -3$</span>
- <span class="text-emerald-600">$-3 \le x < 1$</span>
- <span class="text-blue-600">$1 \le x < 4$</span>
- <span class="text-purple-600">$x \ge 4$</span>

<span class="text-red-600">Nel primo intervallo ($x < -3$) gli argomenti dei 3 moduli sono tutti negativi.</span>
<span class="text-emerald-600">Nel secondo intervallo ($-3 \le x < 1$) i primi due moduli hanno argomento negativo, mentre il terzo modulo ha argomento positivo.</span>
<span class="text-blue-600">Nel terzo intervallo ($1 \le x < 4$) il primo modulo ha argomento negativo, mentre il secondo ed il terzo modulo hanno argomento positivo.</span>
<span class="text-purple-600">Nel quarto intervallo ($x \ge 4$) tutti e tre i moduli hanno argomento positivo.</span>

Per ogni intervallo devo controllare se gli argomenti dei moduli sono positivi o negativi e scrivere le relative equazioni: te lo sviluppo passo-passo.

- <span class="text-red-600">Primo intervallo: da $-\infty$ a $-3$</span>
  $x < -3$
  L'argomento del modulo $|x-4|$ è negativo quindi devo sostituire al posto del modulo $-x+4$.
  L'argomento del modulo $|x-1|$ è negativo quindi devo sostituire al posto del modulo $-x+1$.
  L'argomento del modulo $|x+3|$ è negativo quindi devo sostituire nell'equazione al posto del modulo $-x-3$.

  Quindi ho l'equazione:
  $x + 6 - x + 4 - x + 1 \le -x - x - 3$
  e posso considerare il sistema:
  $$
  \begin{cases} x + 6 - x + 4 - x + 1 \le -x - x - 3 \\ x < -3 \end{cases}
  $$
  o, meglio, facendo i calcoli:
  $$
  \begin{cases} -x + 11 \le -2x - 3 \\ x < -3 \end{cases}
  $$

- <span class="text-emerald-600">Secondo intervallo: da $-3$ (compreso) a $1$</span>
  $-3 \le x < 1$
  L'argomento del modulo $|x-4|$ è negativo quindi devo sostituire al posto del modulo $-x+4$.
  L'argomento del modulo $|x-1|$ è negativo quindi devo sostituire al posto del modulo $-x+1$.
  L'argomento del modulo $|x+3|$ è positivo quindi devo sostituire nell'equazione al posto del modulo $x+3$.

  Quindi ho l'equazione:
  $x + 6 - x + 4 - x + 1 \le -x + x + 3$
  e posso considerare il sistema:
  $$
  \begin{cases} x + 6 - x + 4 - x + 1 \le -x + x + 3 \\ -3 \le x < 1 \end{cases}
  $$
  o, meglio, facendo i calcoli:
  $$
  \begin{cases} -x + 11 \le 3 \\ -3 \le x < 1 \end{cases}
  $$

- <span class="text-blue-600">Terzo intervallo: da $1$ (compreso) a $4$</span>
  $1 \le x < 4$
  L'argomento del modulo $|x-4|$ è negativo quindi devo sostituire al posto del modulo $-x+4$.
  L'argomento del modulo $|x-1|$ è positivo quindi devo sostituire al posto del modulo $x-1$.
  L'argomento del modulo $|x+3|$ è positivo quindi devo sostituire nell'equazione al posto del modulo $x+3$.

  Quindi ho l'equazione:
  $x + 6 - x + 4 + x - 1 \le -x + x + 3$
  e posso considerare il sistema:
  $$
  \begin{cases} x + 6 - x + 4 + x - 1 \le -x + x + 3 \\ 1 \le x < 4 \end{cases}
  $$
  o, meglio, facendo i calcoli:
  $$
  \begin{cases} x + 9 \le 3 \\ 1 \le x < 4 \end{cases}
  $$

- <span class="text-purple-600">Quarto intervallo: da $4$ (compreso) a $+\infty$</span>
  $x \ge 4$
  L'argomento del modulo $|x-4|$ è positivo quindi devo sostituire al posto del modulo $x-4$.
  L'argomento del modulo $|x-1|$ è positivo quindi devo sostituire al posto del modulo $x-1$.
  L'argomento del modulo $|x+3|$ è positivo quindi devo sostituire nell'equazione al posto del modulo $x+3$.

  Quindi ho l'equazione:
  $x + 6 + x - 4 + x - 1 \le -x + x + 3$
  e posso considerare il sistema:
  $$
  \begin{cases} x + 6 + x - 4 + x - 1 \le -x + x + 3 \\ x \ge 4 \end{cases}
  $$
  o, meglio, facendo i calcoli:
  $$
  \begin{cases} 3x + 1 \le 3 \\ x \ge 4 \end{cases}
  $$

La mia disequazione è equivalente ai 4 sistemi:

I $\begin{cases} -x + 11 \le -2x - 3 \\ x < -3 \end{cases}$ \quad II $\begin{cases} -x + 11 \le 3 \\ -3 \le x < 1 \end{cases}$ \quad III $\begin{cases} x + 9 \le 3 \\ 1 \le x < 4 \end{cases}$ \quad IV $\begin{cases} 3x + 1 \le 3 \\ x \ge 4 \end{cases}$

Non c'è più bisogno di fare riferimento all'intervallo di validità perché esso è inglobato nel sistema, quindi, risolvendo il sistema otterremo automaticamente i risultati negli intervalli validi.

Risolvo il primo sistema:
$$
\begin{cases} -x + 11 \le -2x - 3 \\ x < -3 \end{cases} \implies \begin{cases} x \le -14 \\ x < -3 \end{cases}
$$
il sistema ha soluzione $x \le -14$ (devi considerare dove sono valide entrambe).

Risolvo il secondo sistema:
$$
\begin{cases} -x + 11 \le 3 \\ -3 \le x < 1 \end{cases} \implies \begin{cases} -x \le -8 \\ -3 \le x < 1 \end{cases} \implies \begin{cases} x \ge 8 \\ -3 \le x < 1 \end{cases}
$$
il sistema non ammette soluzione (devi considerare dove sono valide entrambe).

Risolvo il terzo sistema:
$$
\begin{cases} x + 9 \le 3 \\ 1 \le x < 4 \end{cases} \implies \begin{cases} x \le -6 \\ 1 \le x < 4 \end{cases}
$$
> **Nota:** per indicare che il punto è compreso ho messo il trattino sotto; di solito nei grafici si indica con un tondino.

il sistema non ammette soluzione (devi considerare dove sono valide entrambe).

Risolvo il quarto sistema:
$$
\begin{cases} 3x + 1 \le 3 \\ x \ge 4 \end{cases} \implies \begin{cases} 3x \le 2 \\ x \ge 4 \end{cases} \implies \begin{cases} x \le 2/3 \\ x \ge 4 \end{cases}
$$
il sistema non ammette soluzione (devi considerare dove sono valide entrambe).

Adesso metto assieme i risultati dei sistemi e trovo la soluzione.

**Soluzione**
$x \le -14$

cioè
$$
\forall x \in \mathbb{R} \mid x \in ]-\infty; -14]
$$

> **Nota:** Il simbolo $\mid$ significa "tale che". Si legge: per ogni numero Reale $x$ tale che $x$ appartenga all'intervallo semiaperto da meno infinito a $-14$: semiaperto significa che $-\infty$ non è compreso ma $-14$ è compreso quindi appartiene alle soluzioni.

Oppure, in grafico, considerando in rosso i punti che verificano l'equazione:
$x \le -14$ $\longrightarrow$ $\underline{-14}$