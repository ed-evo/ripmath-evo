# [esercizio]{.text-red}

Risolvere la disequazione

[$2 \cos^2 x + 3 \sin x - 3 > 0$]{.text-blue}

Poiché abbiamo $\cos^2 x$ cerchiamo di trasformare le funzioni in un unico tipo ricordando la prima relazione fondamentale ($\cos^2 x = 1 - \sin^2 x$)

$$
\textcolor{red}{2 (1 - \sin^2 x) + 3 \sin x - 3 > 0}
$$

$$
\textcolor{red}{2 - 2 \sin^2 x + 3 \sin x - 3 > 0}
$$

$$
\textcolor{red}{- 2 \sin^2 x + 3 \sin x - 1 > 0}
$$

Cambio di segno e di verso

$$
\textcolor{red}{2 \sin^2 x - 3 \sin x + 1 < 0}
$$

Considero l'equazione associata

$$
\textcolor{red}{2 \sin^2 x - 3 \sin x + 1 = 0}
$$

È un'equazione di secondo grado in $\sin x$; la risolvo:

$$
\textcolor{red}{\sin x = \frac{3 \pm \sqrt{9 - 8}}{2}}
$$

$$
\textcolor{red}{\sin x = \frac{3 \pm 1}{4}}
$$

Ottengo due soluzioni:
[$\sin x = 1$]{.text-red} $\quad$ [$\sin x = 1/2$]{.text-red}

Quindi la mia disequazione diventa (decomposizione del trinomio):

$$
\textcolor{red}{2(\sin x - 1)(\sin x - 1/2) < 0}
$$

Siccome $2$ è una costante positiva posso trascurarla:

$$
\textcolor{red}{(\sin x - 1)(\sin x - 1/2) < 0}
$$

È un prodotto: sarà minore di zero quando i fattori avranno segno discorde (cioè quando il primo fattore sarà positivo ed il secondo negativo o viceversa).
Pongo in un sistema entrambi i fattori maggiori di zero e trovo gli intervalli dove i segni sono discordi:

$$
\textcolor{red}{\begin{cases} \sin x > 1 \\ \sin x > 1/2 \end{cases}}
$$

- risolvo la prima
  [$\sin x > 1$]{.text-red}
  So che il seno è sempre compreso fra $-1$ ed $1$, quindi la disequazione non è mai verificata.

- risolvo la seconda
  [$\sin x > 1/2$]{.text-red}
  So che il seno è superiore ad $1/2$ per gli angoli tra $30^\circ$ e $150^\circ$, quindi posso scrivere:
  [$30^\circ < x < 150^\circ$]{.text-red}

***

Ora cerco le soluzioni discordi della prima e della seconda disequazione: riporto all'interno i due grafici trovati.

> **Nota:** Indico in blu a linea continua dove sono concordi, in blu a linea tratteggiata dove sono discordi.

Raccogliendo ho quindi le soluzioni:

[$30^\circ < x < 150^\circ$]{.text-blue}

Non basta: devo controllare se ci sono soluzioni da escludere nell'intervallo: se sostituisco nell'equazione iniziale ad $x$ il valore $90^\circ$ ottengo:

$$
\textcolor{blue}{2 \cos^2 x + 3 \sin x - 3 > 0}
$$
$$
\textcolor{blue}{2 \cos^2 90^\circ + 3 \sin 90^\circ - 3 > 0}
$$
$$
\textcolor{blue}{0 + 3 - 3 > 0}
$$

Quindi devo escludere il valore $x = 90^\circ$.
Quindi il risultato finale è:

**[$30^\circ < x < 150^\circ \text{ e } x \neq 90^\circ$]{.text-blue}**