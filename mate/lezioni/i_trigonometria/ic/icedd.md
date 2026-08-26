# esercizio

Risolvere la disequazione

$\textcolor{blue}{\sqrt{3} \sin x + 3 \cos x < 3}$

È un'equazione di primo grado [lineare non omogenea](iccbb.html) in seno e coseno; la trasformo mediante le [formule parametriche](icadd.html). $t$ vale $\tan \frac{x}{2}$

$$
\textcolor{red}{\frac{2t\sqrt{3}}{1+t^2} + \frac{3(1-t^2)}{1+t^2} < 3}
$$

Faccio il minimo comune multiplo

$$
\textcolor{red}{\frac{2t\sqrt{3} + 3 - 3t^2}{1+t^2} < \frac{3(1+t^2)}{1+t^2}}
$$

Elimino i denominatori e moltiplico

$$
\textcolor{red}{2t\sqrt{3} + 3 - 3t^2 < 3 + 3t^2}
$$

Porto prima dell'uguale

$$
\textcolor{red}{2t\sqrt{3} + 3 - 3t^2 - 3 - 3t^2 < 0}
$$

Sommo i termini simili

$$
\textcolor{red}{-6t^2 + 2t\sqrt{3} < 0}
$$

Cambio segno, verso e divido per $2$ per renderla più semplice

$$
\textcolor{red}{3t^2 - t\sqrt{3} > 0}
$$

Scompongo

$$
\textcolor{red}{t(3t - \sqrt{3}) > 0}
$$

È un prodotto: sarà maggiore di zero quando i fattori avranno segno concorde (cioè quando entrambi i fattori sono positivi oppure sono entrambi negativi).
Pongo in un sistema entrambi i fattori maggiori di zero e trovo gli intervalli dove i segni sono concordi [un piccolo ripasso](../../a/ag/agcaa.html).

$$
\textcolor{red}{\begin{cases} t > 0 \\ 3t - \sqrt{3} > 0 \end{cases}}
$$

- Risolvo la prima
  $\textcolor{red}{\tan \frac{x}{2} > 0}$
  So che la tangente è positiva tra $0^\circ$ e $90^\circ$, quindi
  $\textcolor{red}{0^\circ < \frac{x}{2} < 90^\circ}$
  Però io cerco l'angolo $x$ e quindi moltiplichiamo per $2$
  $\textcolor{red}{0^\circ < x < 180^\circ}$
  A destra la rappresentazione grafica.

- Risolvo la seconda
  $\textcolor{red}{3 \tan \frac{x}{2} - \sqrt{3} > 0}$
  Ricavo $\tan \frac{x}{2}$
  $\textcolor{red}{3 \tan \frac{x}{2} > \sqrt{3}}$
  $$
  \textcolor{red}{\tan \frac{x}{2} > \frac{\sqrt{3}}{3}}
  $$
  So che la tangente è superiore a $\frac{\sqrt{3}}{3}$ per gli angoli tra $30^\circ$ e $90^\circ$, quindi posso scrivere
  $\textcolor{red}{30^\circ < \frac{x}{2} < 90^\circ}$
  Però io cerco l'angolo $x$ e quindi moltiplichiamo per $2$
  $\textcolor{red}{60^\circ < x < 180^\circ}$
  A destra la soluzione grafica.

***

Ora cerco le soluzioni concordi della prima e della seconda disequazione: riporto all'interno i due grafici trovati.

> Indico in blu a linea continua dove le soluzioni sono concordi, in blu a linea tratteggiata dove sono discordi.

Raccogliendo ho quindi le soluzioni

$\textcolor{blue}{60^\circ < x < 360^\circ}$