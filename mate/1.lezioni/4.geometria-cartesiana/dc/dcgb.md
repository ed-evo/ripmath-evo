# rotazione di coordinate

Consideriamo in nero un sistema di coordinate in cui il punto $P$ abbia coordinate (che chiameremo vecchie coordinate)
$P = (x, y)$
Consideriamo poi in rosso un altro sistema di coordinate in cui il punto $P$ sarà individuato da (nuove coordinate)
$\textcolor{red}{P = (X, Y)}$

Sappiamo inoltre che i nuovi assi sono ruotati attorno all'origine rispetto ai vecchi assi dell'angolo $\textcolor{red}{\alpha}$
Allora osserva la figura: dobbiamo trovare il segmento $OH (x)$ utilizzando le nuove coordinate $\textcolor{red}{X}$ e $\textcolor{red}{Y}$
calcoleremo $OH$ come differenza fra $OA$ ed $AH$
Considerando il triangolo $OA\textcolor{red}{R}$ per i teoremi sui triangoli rettangoli in trigonometria abbiamo
$OA = \textcolor{red}{OR \cos \alpha} = \textcolor{red}{X \cos \alpha}$

Ora considero il triangolo $PB\textcolor{red}{R}$ essendo $BR = HA$;
l'angolo $BPR$ vale $\alpha$
per i teoremi sui triangoli rettangoli in trigonometria abbiamo
$AH = BR = \textcolor{red}{PR \sin \alpha} = \textcolor{red}{Y \sin \alpha}$
quindi abbiamo
$OH = OA - AH = \textcolor{red}{X \cos \alpha} - \textcolor{red}{Y \sin \alpha}$
quindi posso scrivere

$\textcolor{blue}{x = X \cos \alpha - Y \sin \alpha}$

***

Troviamo la formula equivalente per la $y$

Osserva la figura a destra: dobbiamo trovare il segmento $OK (y)$ utilizzando le nuove coordinate $\textcolor{red}{X}$ e $\textcolor{red}{Y}$
calcoleremo $OK$ come somma fra $OD$ e $DK$
Considerando il triangolo $OD\textcolor{red}{S}$ per i teoremi sui triangoli rettangoli in trigonometria abbiamo
$OD = \textcolor{red}{OS \cos \alpha} = \textcolor{red}{Y \cos \alpha}$

Ora considero il triangolo $PE\textcolor{red}{S}$ essendo $PE = KD$;
l'angolo $PSE$ vale $\alpha$
per i teoremi sui triangoli rettangoli in trigonometria abbiamo
$KD = PE = \textcolor{red}{PS \sin \alpha} = \textcolor{red}{X \sin \alpha}$
quindi abbiamo
$OK = OD + DK = \textcolor{red}{X \sin \alpha} + \textcolor{red}{Y \cos \alpha}$
quindi posso scrivere

$\textcolor{blue}{y = X \sin \alpha + Y \cos \alpha}$

***

> Poiché negli esercizi dovremo sostituire le nuove coordinate alle vecchie conviene considerare solamente le formule con prima dell'uguale le vecchie coordinate.

Raccogliendo, le equazioni per la rotazione di coordinate saranno:

$$
\begin{cases}
\textcolor{blue}{x = X \cos \alpha - Y \sin \alpha} \\
\textcolor{blue}{y = X \sin \alpha + Y \cos \alpha}
\end{cases}
$$

***

> Per ricavare le formule inverse possiamo usare il metodo di sostituzione (però qui lo saltiamo) e troviamo:
>
> $$
> \begin{cases}
> \textcolor{blue}{X = x \cos \alpha + y \sin \alpha} \\
> \textcolor{blue}{Y = -x \sin \alpha + y \cos \alpha}
> \end{cases}
> $$

Particolarmente importanti sono le formule per una rotazione di $45^\circ$
sapendo che

$$
\sin \alpha = \frac{\sqrt{2}}{2}, \quad \cos \alpha = \frac{\sqrt{2}}{2}
$$

avremo

$$
\begin{cases}
x = X \frac{\sqrt{2}}{2} - Y \frac{\sqrt{2}}{2} \\
y = X \frac{\sqrt{2}}{2} + Y \frac{\sqrt{2}}{2}
\end{cases}
$$

***

Come esercizio dimostriamo che l'equazione dell'iperbole equilatera
$\textcolor{blue}{x^2 - y^2 = a^2}$
con una rotazione di $45^\circ$ si trasforma nell'equazione dell'iperbole equilatera riferita ai propri assi
$\textcolor{blue}{XY = K}$