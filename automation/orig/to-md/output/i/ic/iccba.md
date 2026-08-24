# [Equazioni in seno e coseno di primo grado lineari omogenee]{.text-red}

**Lineare** significa che i termini dell'equazione, diversi dal termine noto, sono tutti di primo grado
**Omogenea** significa che il termine noto vale $0$

Per risolvere un'equazione di questo genere è sufficiente dividere tutti i termini dell'equazione per $\cos x$, supponendo che $\cos x$ sia diverso da zero: in tal modo si ottiene un'equazione di primo grado in $\tan x$ che si risolve normalmente.

> È necessario però controllare che la soluzione corrispondente a $\cos x = 0$ non sia valida per l'equazione di partenza.

Un esempio chiarirà meglio il concetto.

Risolvere l'equazione
$\textcolor{blue}{\text{sen } x + \cos x = 0}$

Divido ogni termine per $\cos x$ supponendo
$\textcolor{red}{\cos x \neq 0}$
(secondo principio di equivalenza delle equazioni)

$$
\frac{\textcolor{red}{\text{sen } x}}{\textcolor{red}{\cos x}} + \frac{\textcolor{red}{\cos x}}{\textcolor{red}{\cos x}} = \frac{\textcolor{red}{0}}{\textcolor{red}{\cos x}}
$$

Ricordando la seconda relazione fondamentale:
$\textcolor{red}{\tan x + 1 = 0}$

Risolvo:
$\textcolor{red}{\tan x = -1}$

Il valore dell'angolo corrispondente è $135^\circ$
> (Sarebbe $-45^\circ$ ma noi considereremo sempre gli angoli partendo dall'origine degli angoli e ruotando in senso antiorario)

Quindi abbiamo
$\textcolor{red}{x^\circ = 135^\circ + k \cdot 180^\circ}$
o preferibilmente
$\textcolor{red}{x = \frac{3}{4}\pi + k\pi}$

Non è finita!
Siccome ho supposto $\textcolor{red}{\cos x \neq 0}$ devo controllare se la soluzione $\cos x = 0$ soddisfa l'equazione di partenza: siccome $\cos x = 0$ si ottiene nel primo giro per gli angoli $90^\circ$ e $270^\circ$, devo controllare i valori dell'equazione
$\textcolor{red}{\text{sen } x + \cos x = 0}$
a $90^\circ$ ed a $270^\circ$

- Controllo per $x = 90^\circ$ (se vuoi essere preciso usa $\pi/2$)
  $\textcolor{red}{\text{sen } 90^\circ + \cos 90^\circ = 0}$
  $\textcolor{red}{1 + 0 = 0}$ $x = 90^\circ$ non è soluzione
- Controllo per $x = 270^\circ$ (se vuoi essere preciso usa $3\pi/2$)
  $\textcolor{red}{\text{sen } 270^\circ + \cos 270^\circ = 0}$
  $\textcolor{red}{-1 + 0 = 0}$ $x = 270^\circ$ non è soluzione

Quindi la soluzione finale è
$\textcolor{blue}{x^\circ = 135^\circ + k \cdot 180^\circ}$
o meglio
$\textcolor{blue}{x = \frac{3}{4}\pi + k\pi}$

> È un errore piuttosto comune e diffuso non controllare le condizioni di realtà; se dividi per un'espressione e il tuo risultato differisce dal libro di testo controlla subito se hai considerato i casi in cui il denominatore vale zero.