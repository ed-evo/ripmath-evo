# [Sommare o sottrarre termine a termine]{.text-red}

Può essere molto utile se abbiamo gruppi di termini uguali (oppure opposti) nelle due equazioni, basterà sottrarre (sommare) per eliminarli ed ottenere un'equazione più semplice da mettere a sistema.
Questo metodo viene normalmente utilizzato in geometria analitica per [trovare le coordinate dei punti comuni a due circonferenze](../../d/dd/ddcha.html).

---

## Esempio 1; risolvere il sistema:

$$
\begin{cases} \textcolor{red}{x^2 + 3xy + 2y^2 - 5y = -2} \\ \textcolor{red}{x^2 + 3xy + y^2 = 4} \end{cases}
$$

Dalla prima equazione sottraiamo la seconda.

> Strano il termine sottraiamo, e ti va anche bene, il mio Prof di analisi all'università diceva "sottragghiamo"

$$
\textcolor{red}{x^2 + 3xy + 2y^2 - 5y = -2}
$$
$$
\textcolor{red}{x^2 + 3xy + y^2 = 4}
$$
$$
\text{--------------------------------}
$$
$$
\textcolor{red}{y^2 - 5y = -6}
$$

Quindi posso considerare il sistema equivalente (come seconda equazione prendo la più semplice):

$$
\begin{cases} \textcolor{red}{y^2 - 5y + 6 = 0} \\ \textcolor{red}{x^2 + 3xy + y^2 = 4} \end{cases}
$$

Considero la prima equazione:

$$
\textcolor{blue}{y^2 - 5y + 6 = 0}
$$

Risolvo ed ottengo [Calcoli](aicgca.html):

$$
\textcolor{blue}{y_1 = 2}
$$
$$
\textcolor{blue}{y_2 = 3}
$$

Quindi il mio sistema si scinde nei due sistemi:

$$
\begin{cases} \textcolor{red}{y = 2} \\ \textcolor{red}{x^2 + 3xy + y^2 = 4} \end{cases} \quad \begin{cases} \textcolor{red}{y = 3} \\ \textcolor{red}{x^2 + 3xy + y^2 = 4} \end{cases}
$$

Ossia sostituendo il valore di $y$:

$$
\begin{cases} \textcolor{red}{y = 2} \\ \textcolor{red}{x^2 + 6x + 4 = 4} \end{cases} \quad \begin{cases} \textcolor{red}{y = 3} \\ \textcolor{red}{x^2 + 9x + 9 = 4} \end{cases}
$$

E sommando i termini simili:

$$
\begin{cases} \textcolor{red}{y = 2} \\ \textcolor{red}{x^2 + 6x = 0} \end{cases} \quad \begin{cases} \textcolor{red}{y = 3} \\ \textcolor{red}{x^2 + 9x + 5 = 0} \end{cases}
$$

- Risolvo il primo:
  $$
  \begin{cases} \textcolor{red}{y = 2} \\ \textcolor{red}{x^2 + 6x = 0} \end{cases}
  $$
  Risolvendo la seconda equazione ottengo $\textcolor{red}{x_1 = 0}$ e $\textcolor{red}{x_2 = -6}$ [Calcoli](aicgda.html).
  Ottengo quindi le soluzioni:
  $$
  \begin{cases} \textcolor{red}{x_1 = 0} \\ \textcolor{red}{y_1 = 2} \end{cases} \quad \begin{cases} \textcolor{red}{x_2 = -6} \\ \textcolor{red}{y_2 = 2} \end{cases}
  $$

- Risolvo il secondo:
  $$
  \begin{cases} \textcolor{red}{y = 3} \\ \textcolor{red}{x^2 - 9x + 5 = 0} \end{cases}
  $$
  Risolvendo la seconda equazione ottengo $\textcolor{red}{x_1 = \frac{9 + \sqrt{61}}{2}}$ e $\textcolor{red}{x_2 = \frac{9 - \sqrt{61}}{2}}$ [Calcoli](aicgda.html).
  Ottengo quindi le soluzioni:
  $$
  \begin{cases} \textcolor{red}{x_1 = \frac{9 - \sqrt{61}}{2}} \\ \textcolor{red}{y_1 = 3} \end{cases} \quad \begin{cases} \textcolor{red}{x_2 = \frac{9 + \sqrt{61}}{2}} \\ \textcolor{red}{y_2 = 3} \end{cases}
  $$

Ottengo quindi le 4 coppie di soluzioni:

$$
\begin{cases} \textcolor{blue}{x_1 = 0} \\ \textcolor{blue}{y_1 = 2} \end{cases} \quad \begin{cases} \textcolor{blue}{x_2 = -6} \\ \textcolor{blue}{y_2 = 2} \end{cases} \quad \begin{cases} \textcolor{blue}{x_3 = \frac{9 - \sqrt{61}}{2}} \\ \textcolor{blue}{y_3 = 3} \end{cases} \quad \begin{cases} \textcolor{blue}{x_4 = \frac{9 + \sqrt{61}}{2}} \\ \textcolor{blue}{y_4 = 3} \end{cases}
$$

---