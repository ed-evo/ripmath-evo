# [Esercizio]{.text-red}

Dire per quali valori di $$x$$ la seguente disequazione risulta verificata:

$$
x + |2x + |x-2|| \ge -x + 8
$$

Qui abbiamo un modulo dentro un altro modulo: parto dal modulo interno e sdoppio la mia disequazione in due parti: ottengo due disequazioni con un modulo e riapplico il procedimento ad ognuna di esse: otterrò quindi 4 disequazioni che sono valide in 4 intervalli diversi.

Pongo $$x-2 > 0$$

$$
x - 2 > 0
$$
$$
x > 2
$$

Significa che nell'intervallo $$x > 2$$ il termine entro il modulo è positivo, quindi metto $$x-2$$ al posto del modulo; invece nell'intervallo $$x < 2$$ il termine entro il modulo è negativo, quindi cambio di segno e metto $$-x+2$$ al posto del modulo.

La mia disequazione diventa:

$$x + |2x - x + 2| \ge -x + 8$$ se $$x < 2$$
$$x + |2x + x - 2| \ge -x + 8$$ se $$x \ge 2$$

O meglio, calcolando:

$$x + |x + 2| \ge -x + 8$$ se $$x < 2$$
$$x + |3x - 2| \ge -x + 8$$ se $$x \ge 2$$

Ora devo riapplicare la definizione di modulo per risolvere le due nuove disequazioni:

- **Sviluppo la prima**
  $$x + |x + 2| \ge -x + 8$$ se $$x < 2$$
  $$x + 2 > 0$$
  $$x > -2$$
  allora ottengo le due nuove disequazioni:
  $$x - x - 2 \ge -x + 8$$ se $$x < 2$$ e se $$x < -2$$
  $$x + x + 2 \ge -x + 8$$ se $$x < 2$$ e se $$x \ge -2$$

  O, meglio, facendo un po' di calcoli:
  $$-2 \ge -x + 8$$ se $$x < 2$$ e se $$x < -2$$
  $$2x + 2 \ge -x + 8$$ se $$x < 2$$ e se $$x \ge -2$$

- **Sviluppo la seconda**
  $$x + |3x - 2| \ge -x + 8$$ se $$x \ge 2$$
  $$3x - 2 > 0$$
  $$3x > 2$$
  $$x > 2/3$$

  allora ottengo le due nuove disequazioni:
  $$x - 3x + 2 \ge -x + 8$$ se $$x \ge 2$$ e se $$x < 2/3$$
  $$x + 3x - 2 \ge -x + 8$$ se $$x \ge 2$$ e se $$x \ge 2/3$$

  O, meglio, facendo un po' di calcoli:
  $$-2x + 2 \ge -x + 8$$ se $$x \ge 2$$ e se $$x < 2/3$$
  $$4x - 2 \ge -x + 8$$ se $$x \ge 2$$ e se $$x \ge 2/3$$

Al solito, se metto sotto forma di sistema non devo preoccuparmi per gli intervalli, quindi passo direttamente ad indicare i 4 sistemi che devo risolvere. La mia disequazione è equivalente ai 4 sistemi:

$$
\begin{cases} -2 \ge -x + 8 \\ x < 2 \\ x < -2 \end{cases} 
\quad 
\begin{cases} 2x + 2 \ge -x + 8 \\ x < 2 \\ x \ge -2 \end{cases}
\quad 
\begin{cases} -2x + 2 \ge -x + 8 \\ x \ge 2 \\ x < 2/3 \end{cases}
\quad 
\begin{cases} 4x - 2 \ge -x + 8 \\ x \ge 2 \\ x \ge 2/3 \end{cases}
$$

> **Nota:** da notare che con il metodo dell'intervallo il terzo sistema è impossibile, perché il valore $$2/3$$ non è maggiore di $$2$$ e quindi le disequazioni sono incompatibili e non danno luogo ad un intervallo.

**Risolvo il primo sistema**

$$
\begin{cases} -2 \ge -x + 8 \\ x < 2 \\ x < -2 \end{cases} 
\rightarrow 
\begin{cases} x \ge 10 \\ x < 2 \\ x < -2 \end{cases}
$$

Il sistema non ha soluzione.

**Risolvo il secondo sistema**

$$
\begin{cases} 2x + 2 \ge -x + 8 \\ x < 2 \\ x \ge -2 \end{cases} 
\rightarrow 
\begin{cases} 3x \ge 6 \\ x < 2 \\ x \ge -2 \end{cases} 
\rightarrow 
\begin{cases} x \ge 2 \\ x < 2 \\ x \ge -2 \end{cases}
$$

Il sistema non ammette soluzione (il $$2$$ non appartiene alla seconda disequazione).

**Risolvo il terzo sistema**

$$
\begin{cases} -2x + 2 \ge -x + 8 \\ x \ge 2 \\ x < 2/3 \end{cases} 
\rightarrow 
\begin{cases} -x \ge 6 \\ x \ge 2 \\ x < 2/3 \end{cases} 
\rightarrow 
\begin{cases} x \le -6 \\ x \ge 2 \\ x < 2/3 \end{cases}
$$

Il sistema non ammette soluzione.

**Risolvo il quarto sistema**

$$
\begin{cases} 4x - 2 \ge -x + 8 \\ x \ge 2 \\ x \ge 2/3 \end{cases} 
\rightarrow 
\begin{cases} 5x \ge 10 \\ x \ge 2 \\ x \ge 2/3 \end{cases} 
\rightarrow 
\begin{cases} x \ge 2 \\ x \ge 2 \\ x \ge 2/3 \end{cases}
$$

Il sistema ammette soluzione $$x \ge 2$$.

Adesso metto assieme i risultati dei tre sistemi e trovo la soluzione.

**Soluzione**

[$$x \ge 2$$]{.text-red}

cioè:

[$$\forall x \in \mathbb{R} / x \in [2; +\infty[$$]{.text-red}

> **Nota:** Il simbolo $$ / $$ significa "tale che". Si legge: per ogni numero Reale $$x$$ tale che $$x$$ appartenga all'intervallo semiaperto da $$2$$ a $$+\infty$$: semiaperto significa che $$+\infty$$ non è compreso ma $$2$$ è compreso, quindi appartiene alle soluzioni.