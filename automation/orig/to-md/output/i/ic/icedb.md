# [esercizio]{.text-red}

Risolvere la disequazione

$\textcolor{blue}{\sin x - \cos x < 0}$

> Si potrebbe risolvere in modo semplice disegnando i grafici delle due funzioni $y = \sin x$ ed $y = \cos x$ e considerare i punti dove il grafico della prima è inferiore al grafico della seconda, ma vediamo come risolverlo in modo "algebrico".

Stavolta l'equazione associata è di tipo già visto: per risolverla come equazione basterebbe dividere tutti i termini per $\cos x$. Essendo una disequazione non posso dividere immediatamente per $\cos x$ perché non ne conosco il segno (ti ricordo che moltiplicando una disequazione per un termine negativo il verso cambia).

Allora per risolvere la disequazione distinguiamo due casi:

- $\textcolor{red}{\cos x > 0}$: in questo caso, dividendo per $\cos x$, il verso della disequazione resta lo stesso.
- $\textcolor{red}{\cos x < 0}$: in questo caso, dividendo per $\cos x$, cambieremo il verso alla disequazione.

### Primo caso

$$
\begin{cases} 
\textcolor{red}{\cos x > 0} \\
\frac{\sin x}{\cos x} - \frac{\cos x}{\cos x} < \frac{0}{\cos x}
\end{cases}
$$

Siccome $\frac{\sin x}{\cos x} = \tan x$:

$$
\begin{cases} 
\textcolor{red}{\cos x > 0} \\
\textcolor{red}{\tan x - 1 < 0}
\end{cases}
$$

> **Attenzione!** Stavolta è un sistema e dobbiamo cercare solo le soluzioni valide e anche se cercando i segni discordi otterremmo lo stesso risultato (in entrambi i casi) è concettualmente sbagliato considerarlo.

$\textcolor{red}{\cos x > 0}$
So che il coseno è positivo tra $0^\circ$ e $90^\circ$ ed anche tra $270^\circ$ e $360^\circ$, quindi:
$\textcolor{red}{0^\circ < x < 90^\circ \cup 270^\circ < x < 360^\circ}$
(con $\cup$ indico l'unione degli intervalli; il punto $0^\circ = 360^\circ$ è escluso).

$\textcolor{red}{\tan x - 1 < 0}$
$\textcolor{red}{\tan x < 1}$
So che la tangente è minore di $1$ se l'angolo è compreso fra $0^\circ$ e $45^\circ$ ed anche tra $90^\circ$ e $180^\circ$. Inoltre, essendo la tangente periodica di $180^\circ$, l'intervallo si ripete fra $180^\circ$ e $225^\circ$ e tra $270^\circ$ e $360^\circ$. Quindi posso scrivere:
$\textcolor{red}{0^\circ < x < 45^\circ \cup 90^\circ < x < 225^\circ \cup 270^\circ < x < 360^\circ}$

Mettiamo assieme le soluzioni e risolviamo il sistema:

$$
\begin{cases} 
\textcolor{red}{0^\circ < x < 90^\circ \cup 270^\circ < x < 360^\circ} \\
\textcolor{red}{0^\circ < x < 45^\circ \cup 90^\circ < x < 225^\circ \cup 270^\circ < x < 360^\circ}
\end{cases}
$$

**Soluzione prima parte:**
$\textcolor{blue}{0^\circ < x < 45^\circ \cup 270^\circ < x < 360^\circ}$

---

### Secondo caso

$$
\begin{cases} 
\textcolor{red}{\cos x < 0} \\
\frac{\sin x}{\cos x} - \frac{\cos x}{\cos x} > \frac{0}{\cos x}
\end{cases}
$$

Siccome $\frac{\sin x}{\cos x} = \tan x$:

$$
\begin{cases} 
\textcolor{red}{\cos x < 0} \\
\textcolor{red}{\tan x - 1 > 0}
\end{cases}
$$

> Anche qui è un sistema e dobbiamo cercare solo le soluzioni valide e anche se cercando i segni discordi otterremmo lo stesso risultato (in entrambi i casi) è concettualmente sbagliato considerarlo.

$\textcolor{red}{\cos x < 0}$
So che il coseno è negativo tra $90^\circ$ e $270^\circ$, quindi:
$\textcolor{red}{90^\circ < x < 270^\circ}$

$\textcolor{red}{\tan x - 1 > 0}$
$\textcolor{red}{\tan x > 1}$
So che la tangente è maggiore di $1$ se l'angolo è compreso fra $45^\circ$ e $90^\circ$ e inoltre (essendo la tangente periodica di $180^\circ$) fra $225^\circ$ e $270^\circ$. Quindi posso scrivere:
$\textcolor{red}{45^\circ < x < 90^\circ \cup 225^\circ < x < 270^\circ}$

Mettiamo assieme le soluzioni e risolviamo il sistema:

$$
\begin{cases} 
\textcolor{red}{90^\circ < x < 270^\circ} \\
\textcolor{red}{45^\circ < x < 90^\circ \cup 225^\circ < x < 270^\circ}
\end{cases}
$$

**Soluzione seconda parte:**
$\textcolor{blue}{225^\circ < x < 270^\circ}$

---

### Caso particolare $\cos x = 0$

Siccome dividiamo per $\cos x$, dobbiamo considerare a parte il caso di $\cos x = 0$.
La disequazione $\textcolor{blue}{\sin x - \cos x < 0}$ diventa:
$\textcolor{blue}{\sin x < 0}$ con $x = 90^\circ$ e $x = 270^\circ$.

- Per $x = 90^\circ$ il seno è positivo, quindi la disequazione non è verificata.
- Per $x = 270^\circ$ il seno è negativo, quindi la disequazione è verificata.

$\textcolor{red}{x = 270^\circ}$

---

Ora devo prendere sia le soluzioni del primo che del secondo sistema, includendo il caso particolare:

$\textcolor{blue}{0^\circ < x < 45^\circ \cup 225^\circ < x < 360^\circ}$