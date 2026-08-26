# esercizio

Risolvere la disequazione

$$
\textcolor{blue}{\sin 4x > \cos 2x}
$$

Il primo angolo è $4x$, il secondo è $2x$; riduciamo tutto a $2x$ (formule di [duplicazione](icabd.html)).

$$
\textcolor{red}{2 \sin 2x \cos 2x > \cos 2x}
$$

Portiamo tutto prima dell'uguale

$$
\textcolor{red}{2 \sin 2x \cos 2x - \cos 2x > 0}
$$

Raccogliamo $\cos 2x$ a fattor comune

$$
\textcolor{red}{\cos 2x (2 \sin 2x - 1) > 0}
$$

È un prodotto: sarà maggiore di zero quando i fattori avranno segno concorde (cioè quando entrambi i fattori sono positivi oppure sono entrambi negativi).

Pongo in un sistema entrambi i fattori maggiori di zero e trovo gli intervalli dove i segni sono concordi [un piccolo ripasso](../../a/ag/agcaa.html).

$$
\begin{cases}
\textcolor{red}{\cos 2x > 0} \\
\textcolor{red}{2 \sin 2x - 1 > 0}
\end{cases}
$$

- Risolvo la prima
  $$
  \textcolor{red}{\cos 2x > 0}
  $$
  So che il coseno è positivo tra $0^\circ$ e $90^\circ$ ed anche tra $270^\circ$ e $360^\circ$, quindi:
  $$
  \textcolor{red}{0^\circ < 2x < 90^\circ \cup 270^\circ < 2x < 360^\circ}
  $$
  > **Nota:** con $U$ indico l'unione degli intervalli.

  Però io cerco l'angolo $x$ e quindi dividiamo per $2$:
  $$
  \textcolor{red}{0^\circ < x < 45^\circ \cup 135^\circ < x < 180^\circ}
  $$
  Inoltre, siccome dividendo per $2$ ottengo che ho la periodicità di $180^\circ$, dovrò anche considerare:
  $$
  \textcolor{red}{180^\circ < x < 225^\circ \cup 315^\circ < x < 360^\circ}
  $$

  Mettendo assieme:
  $$
  \textcolor{red}{0^\circ < x < 45^\circ \cup 135^\circ < x < 225^\circ \cup 315^\circ < x < 360^\circ}
  $$

- Risolvo la seconda
  $$
  \textcolor{red}{2 \sin 2x - 1 > 0}
  $$
  Ricavo $\sin 2x$:
  $$
  \textcolor{red}{2 \sin 2x > 1}
  $$
  $$
  \textcolor{red}{\sin 2x > 1/2}
  $$
  So che il seno è superiore ad $1/2$ per gli angoli tra $30^\circ$ e $150^\circ$, quindi posso scrivere:
  $$
  \textcolor{red}{30^\circ < 2x < 150^\circ}
  $$
  Però io cerco l'angolo $x$ e quindi dividiamo per $2$:
  $$
  \textcolor{red}{15^\circ < x < 75^\circ}
  $$
  Inoltre, siccome dividendo per $2$ ottengo che ho la periodicità di $180^\circ$, dovrò anche considerare:
  $$
  \textcolor{red}{195^\circ < x < 255^\circ}
  $$

  Mettendo assieme:
  $$
  \textcolor{red}{15^\circ < x < 75^\circ \cup 195^\circ < x < 255^\circ}
  $$

***

Ora cerco le soluzioni concordi della prima e della seconda disequazione: riporto all'interno i due grafici trovati.

> **Nota:** Indico in blu a linea continua dove sono concordi, in blu a linea tratteggiata dove sono discordi.

Raccogliendo ho quindi le soluzioni:

$$
\textcolor{blue}{15^\circ < x < 45^\circ \cup 75^\circ < x < 135^\circ \cup 195^\circ < x < 225^\circ \cup 255^\circ < x < 315^\circ}
$$