# esercizio

## Esercizio 3

Date le coordinate dei punti base:
$A=(2;5)$ $B=(-2;1)$

1) Determinare l'equazione esplicita della famiglia di parabole con asse verticale da essi generata.
2) Determinare il luogo dei vertici delle parabole della famiglia.
3) Determinare l'equazione delle parabole del fascio avente i vertici sulla retta $y = 3x + 4$.

---

### 1. Determinare l'equazione esplicita della famiglia di parabole con asse verticale generata dai punti base

> Per determinare l'equazione della famiglia basta sostituire nell'equazione della parabola generica con asse verticale $y=ax^2+bx+c$ al posto di $x$ ed $y$ le coordinate di $A$ e $B$: otterremo un sistema di due equazioni in tre incognite; risolvendo otterremo i risultati dipendenti dalla terza incognita che chiameremo infine $k$ e quindi avremo l'equazione della famiglia di parabole cercata.
> Da notare inoltre che, se lasciamo come variabile $a$, la parabola della famiglia che otterremo per $k=0$ sarà sempre la parabola degenerata, cioè la retta passante per $A$ e $B$.

Impongo che la generica parabola con asse verticale $y=ax^2+bx+c$ passi per $A=(2;5)$ e $B=(-2;1)$.

Passaggio per $A$: $5 = 4a+2b+c$
Passaggio per $B$: $1 = 4a-2b+c$

Faccio il sistema:
$$
\begin{cases} 
5 = 4a+2b+c \\ 
1 = 4a-2b+c 
\end{cases}
$$

Leggo alla rovescia:
$$
\begin{cases} 
4a+2b+c = 5 \\ 
4a-2b+c = 1 
\end{cases}
$$

Ricavo $4a$ da sopra e sostituisco sotto:
$$
\begin{cases} 
4a = 5 - 2b - c \\ 
5-2b-c-2b+c = 1 
\end{cases}
$$

$$
\begin{cases} 
4a = 5 - 2b - c \\ 
-4b = -4 
\end{cases}
$$

$$
\begin{cases} 
4a = 5 - 2b - c \\ 
b = 1 
\end{cases}
$$

Sostituisco sopra:
$$
\begin{cases} 
4a = 5 - 2 - c \\ 
b = 1 
\end{cases}
$$

Ricavo $c$ da sopra:
$$
\begin{cases} 
c = -4a + 3 \\ 
b = 1 
\end{cases}
$$

Ottengo quindi ponendo $a=k$ e sostituendo nell'equazione della parabola generica:
$y = kx^2 + x - 4k + 3$

---

### 2. Determinare il luogo dei vertici delle parabole della famiglia

> Per determinare il luogo dei vertici troviamo il vertice generico dipendente da $k$; eliminando $k$ dalle coordinate del vertice generico troveremo un'espressione in $x$ ed $y$ che ci fornirà l'equazione del luogo cercato.

Vertice generico $V$:
$$
V_x = \frac{-b}{2a}
$$
$$
V_y = -\frac{b^2 - 4ac}{4a}
$$

Essendo:
$a=k$
$b=1$
$c=-4k+3$

Avremo per $V=(x;y)$:
$x = \frac{-1}{2k}$
$y = -\frac{1^2 - 4k(-4k+3)}{4k} = -\frac{1+16k^2 - 12k}{4k} = -\frac{16k^2 - 12k + 1}{4k}$

Mettiamo a sistema:
$$
\begin{cases} 
x = \frac{-1}{2k} \\ 
y = -\frac{16k^2 - 12k + 1}{4k} 
\end{cases}
$$

Ricavo $k$ da sopra e sostituisco sotto (suppongo $k \neq 0$):
$$
\begin{cases} 
k = \frac{-1}{2x} \\ 
y = -\frac{16(-1/2x)^2 - 12(-1/2x) + 1}{4(-1/2x)} 
\end{cases}
$$

Sviluppo solamente la seconda:
$$
y = -\frac{4/(x)^2 + 6/x + 1}{-2/x}
$$
$$
y = \frac{4/(x)^2 + 6/x + 1}{2/x}
$$

Moltiplico sopra e sotto per $x^2$ (posso farlo perché ho supposto $x \neq 0$):
$$
y = \frac{4 + 6x + (x)^2}{2x}
$$

Quindi i vertici delle parabole della famiglia si dispongono sulla funzione:
$y = \frac{1}{2}x + 3 + \frac{2}{x}$

> Intuitivamente si tratta della somma di una parabola $y=2/x$ riferita ai propri assi e di una retta $y=1/2x + 3$ e, se vuoi, si può costruire per punti; si può anche dire che si tratta di una funzione omografica che tratteremo nel prossimo capitolo.

---

### 3. Determinare l'equazione delle parabole del fascio avente i vertici sulla retta $y = 3x + 4$

> **Traccia:** imponiamo che le coordinate del vertice generico soddisfino l'equazione della retta, risolvendo l'equazione troveremo i valori di $k$ che ci daranno le parabole cercate.

Equazione della retta:
$y = 3x + 4$

Coordinate del vertice generico:
$x = \frac{-1}{2k}$
$y = -\frac{16k^2 - 12k + 1}{4k}$

Sostituisco le coordinate del vertice nell'equazione della retta ed ottengo:
$-\frac{16k^2 - 12k + 1}{4k} = 3\left(\frac{-1}{2k}\right) + 4$
$-\frac{16k^2 - 12k + 1}{4k} = \frac{-3}{2k} + 4$

Supponendo $k \neq 0$ faccio il minimo comune multiplo:
$\frac{-16k^2 + 12k - 1}{4k} = \frac{-6 + 16k}{4k}$

Ottengo:
$-16k^2 + 12k - 1 = -6 + 16k$
$-16k^2 + 12k - 1 + 6 - 16k = 0$
$-16k^2 - 4k + 5 = 0$
$16k^2 + 4k - 5 = 0$

Risolvo ed ottengo:
$k_1 = \frac{-1-\sqrt{21}}{8}$ $k_2 = \frac{-1+\sqrt{21}}{8}$

Sostituendo tali valori di $k$ nell'equazione della famiglia troviamo le parabole cercate.
Equazione della famiglia: $y = kx^2 + x - 4k + 3$

- Sostituisco $k_1 = \frac{-1-\sqrt{21}}{8}$:
$y = \frac{-1-\sqrt{21}}{8}x^2 + x - 4\left(\frac{-1-\sqrt{21}}{8}\right) + 3$
$y = \frac{-1-\sqrt{21}}{8}x^2 + x + \frac{1}{2} + \frac{\sqrt{21}}{2} + 3$
Prima parabola:
$y = \frac{-1-\sqrt{21}}{8}x^2 + x + \frac{7}{2} + \frac{\sqrt{21}}{2}$

- Sostituisco $k_2 = \frac{-1+\sqrt{21}}{8}$:
$y = \frac{-1+\sqrt{21}}{8}x^2 + x - 4\left(\frac{-1+\sqrt{21}}{8}\right) + 3$
$y = \frac{-1+\sqrt{21}}{8}x^2 + x + \frac{1}{2} - \frac{\sqrt{21}}{2} + 3$
Seconda parabola:
$y = \frac{-1+\sqrt{21}}{8}x^2 + x + \frac{7}{2} - \frac{\sqrt{21}}{2}$