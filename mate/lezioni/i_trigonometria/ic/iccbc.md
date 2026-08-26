# Equazioni in seno e coseno di secondo grado lineari omogenee

Per risolvere un'equazione di questo genere è sufficiente dividere tutti i termini dell'equazione per $\cos^2 x$, supponendo che $\cos x$ sia diverso da zero: in tal modo si ottiene un'equazione di secondo grado in $\tan x$ che si risolve normalmente.

Un esempio chiarirà meglio il concetto.

***

Risolvere l'equazione
$$
\textcolor{blue}{\sin^2 x - \cos^2 x = 0}
$$
divido ogni termine per $\cos^2 x$ supponendo [$\cos x \neq 0$]{.text-red}

$$
\textcolor{red}{\frac{\sin^2 x}{\cos^2 x} - \frac{\cos^2 x}{\cos^2 x} = \frac{0}{\cos^2 x}}
$$

Ricordando la seconda relazione fondamentale
$$
\textcolor{red}{\tan^2 x - 1 = 0}
$$
Risolvo
$$
\textcolor{red}{\tan^2 x = 1}
$$
quindi ho le due equazioni:
- [$\tan x = -1$]{.text-red}
- [$\tan x = 1$]{.text-red}

Il valore dell'angolo corrispondente a $\tan x = -1$ è $135^\circ$.
Il valore dell'angolo corrispondente a $\tan x = 1$ è $45^\circ$.

Quindi abbiamo
$$
\textcolor{red}{x^\circ = 45^\circ + k 180^\circ}
$$
$$
\textcolor{red}{x^\circ = 135^\circ + k 180^\circ}
$$
mettendo insieme le due soluzioni
$$
\textcolor{red}{x^\circ = 45^\circ + k 90^\circ}
$$
o preferibilmente
$$
\textcolor{red}{x = \frac{\pi}{4} + k \frac{\pi}{2}}
$$

Non è finita!

> Siccome ho supposto [$\cos x \neq 0$]{.text-red} devo controllare se la soluzione $\cos x = 0$ soddisfa l'equazione di partenza: siccome $\cos x = 0$ si ottiene nel primo giro per gli angoli $90^\circ$ e $270^\circ$ devo controllare i valori dell'equazione
> $$
> \textcolor{red}{\sin^2 x + \cos^2 x = 0}
> $$
> a $90^\circ$ ed a $270^\circ$
>
> - Controllo per $x = 90^\circ$ (se vuoi essere preciso usa $\frac{\pi}{2}$)
>   $$
>   \textcolor{red}{\sin^2 90^\circ + \cos^2 90^\circ = 0}
>   $$
>   $$
>   \textcolor{red}{1 + 0 = 0}
>   $$
>   $x = 90^\circ$ non è soluzione.
> - Controllo per $x = 270^\circ$ (se vuoi essere preciso usa $\frac{3\pi}{2}$)
>   $$
>   \textcolor{red}{\sin^2 270^\circ + \cos^2 270^\circ = 0}
>   $$
>   $$
>   \textcolor{red}{1 + 0 = 0}
>   $$
>   $x = 270^\circ$ non è soluzione.

Quindi la soluzione finale è
$$
\textcolor{blue}{x^\circ = 45^\circ + k 90^\circ}
$$
o meglio
$$
\textcolor{blue}{x = \frac{\pi}{4} + k \frac{\pi}{2}}
$$