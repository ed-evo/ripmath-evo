# Dividere membro a membro

È un metodo alternativo al precedente: invece di sommare o sottrarre si possono isolare i termini uguali o proporzionali in un membro e poi dividere; solo provando puoi vedere se conviene più questo metodo oppure il precedente; di solito è poco usato preferendosi usare altri metodi più intuitivi.

---

Esempio 1: risolvere il sistema:

$$
\begin{cases} \textcolor{red}{x^2 - 3xy + y^2 - 2x + y + 2 = 0} \\ \textcolor{red}{x^2 - 3xy + y^2 + y = 0} \end{cases}
$$

Isoliamo i termini uguali prima dell'uguale:

$$
\begin{cases} \textcolor{red}{x^2 - 3xy + y^2 = 2x - y - 2} \\ \textcolor{red}{x^2 - 3xy + y^2 = -y} \end{cases}
$$

supponendo $x^2 - 3xy + y^2$ diverso da zero ed $y$ diverso da zero divido membro a membro:

$$
\frac{\textcolor{blue}{x^2 - 3xy + y^2}}{\textcolor{blue}{x^2 - 3xy + y^2}} = \frac{\textcolor{blue}{2x - y - 2}}{\textcolor{blue}{-y}}
$$

ottengo

$$
\textcolor{blue}{1 = \frac{2x - y - 2}{-y}}
$$

e calcolando:

$$
\textcolor{blue}{-y = 2x - y - 2}
$$

$$
\textcolor{blue}{2x - 2 = 0}
$$

$$
\textcolor{blue}{x = 1}
$$

Posso sostituire questa equazione ad una qualunque del mio sistema (naturalmente la prendo al posto della più complicata), quindi il mio sistema equivale al sistema:

$$
\begin{cases} \textcolor{red}{x = 1} \\ \textcolor{red}{x^2 - 3xy + y^2 = -y} \end{cases}
$$

sostituisco il valore $x=1$ nella seconda equazione:

$$
\begin{cases} \textcolor{red}{x = 1} \\ \textcolor{red}{1 - 3y + y^2 = -y} \end{cases}
$$

$$
\begin{cases} \textcolor{red}{x = 1} \\ \textcolor{red}{y^2 - 2y + 1 = 0} \end{cases}
$$

Nella seconda equazione, senza risolvere, posso osservare che ho il quadrato di un binomio:

$$
\begin{cases} \textcolor{red}{x = 1} \\ \textcolor{red}{(y-1)^2 = 0} \end{cases}
$$

ottengo quindi la soluzione (doppia):

$$
\begin{cases} \textcolor{blue}{x_1 = 1} \\ \textcolor{blue}{y_1 = 1} \end{cases}
$$

devo infine controllare che questi valori sostituiti ad $x$ ed $y$ nei termini che ho messo al denominatore non me li annullino (altrimenti la soluzione non sarebbe accettabile):

$$
\begin{cases} \textcolor{red}{x^2 - 3xy + y^2 = 1 - 3 + 1 \neq 0} \\ \textcolor{red}{y = 1 \neq 0} \end{cases}
$$

La soluzione è accettabile.

---