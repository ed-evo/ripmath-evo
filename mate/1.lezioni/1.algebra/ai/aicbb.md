# Vediamo un esercizio con un sistema di secondo grado letterale

> **Nota:** Qui devi sapere bene tutto il calcolo letterale: questi esercizi possono essere resi anche molto difficili come calcoli; noi vediamone uno semplice.

Risolvere il seguente sistema:

$$
\begin{cases}
\textcolor{red}{3x^2 - y^2 + 4a = 2(a-1)^2} \\
\textcolor{red}{x + y = 2a}
\end{cases}
$$

Prima di tutto dovremo risolvere le operazioni in modo da ridurre il sistema ad una forma normale:

$$
\begin{cases}
\textcolor{red}{3x^2 - y^2 + 4a = 2(a^2 - 2a + 1)} \\
\textcolor{red}{x + y = 2a}
\end{cases}
$$

$$
\begin{cases}
\textcolor{red}{3x^2 - y^2 + 4a = 2a^2 - 4a + 2} \\
\textcolor{red}{x + y = 2a}
\end{cases}
$$

$$
\begin{cases}
\textcolor{red}{3x^2 - y^2 + 4a - 2a^2 + 4a - 2 = 0} \\
\textcolor{red}{x + y = 2a}
\end{cases}
$$

$$
\begin{cases}
\textcolor{red}{3x^2 - y^2 - 2a^2 + 8a - 2 = 0} \\
\textcolor{red}{x + y = 2a}
\end{cases}
$$

Il sistema è di secondo grado perché la prima equazione è di grado $$2$$ e la seconda di grado $$1$$.

Ricavo la $$y$$ dalla seconda equazione e sostituisco il valore trovato nella prima equazione (conviene ricavare la $$y$$, altrimenti se ricavo la $$x$$ devo anche moltiplicare per $$3$$):

$$
\begin{cases}
\textcolor{red}{3x^2 - (2a-x)^2 - 2a^2 + 8a - 2 = 0} \\
\textcolor{red}{y = 2a - x}
\end{cases}
$$

Eseguo i calcoli (al posto della seconda equazione metto una linea per indicare che non la uso):

$$
\begin{cases}
\textcolor{red}{3x^2 - (4a^2 - 4ax + x^2) - 2a^2 + 8a - 2 = 0} \\
\textcolor{red}{---------------}
\end{cases}
$$

$$
\begin{cases}
\textcolor{red}{3x^2 - 4a^2 + 4ax - x^2 - 2a^2 + 8a - 2 = 0} \\
\textcolor{red}{---------------}
\end{cases}
$$

$$
\begin{cases}
\textcolor{red}{2x^2 + 4ax - 6a^2 + 8a - 2 = 0} \\
\textcolor{red}{---------------}
\end{cases}
$$

Divido per $$2$$ tutti i termini della prima equazione:

$$
\begin{cases}
\textcolor{red}{x^2 + 2ax - 3a^2 + 4a - 1 = 0} \\
\textcolor{red}{---------------}
\end{cases}
$$

Risolvo l'equazione ed ottengo [calcoli](aicbba.html):

$$
\textcolor{red}{x_1 = -3a + 1} \quad \textcolor{red}{x_2 = a - 1}
$$

Ora devo sostituire i valori trovati **uno alla volta** al posto dell'equazione mancante e calcolare le $$y$$ corrispondenti:

- Primo valore $$x = -3a + 1$$
  $$
  \begin{cases}
  \textcolor{red}{x = -3a + 1} \\
  \textcolor{red}{y = 2a - x}
  \end{cases}
  $$

  $$
  \begin{cases}
  \textcolor{red}{x = -3a + 1} \\
  \textcolor{red}{y = 2a + 3a - 1}
  \end{cases}
  $$

  $$
  \begin{cases}
  \textcolor{red}{x = -3a + 1} \\
  \textcolor{red}{y = 5a - 1}
  \end{cases}
  $$

- Secondo valore $$x = a - 1$$
  $$
  \begin{cases}
  \textcolor{red}{x = a - 1} \\
  \textcolor{red}{y = 2a - x}
  \end{cases}
  $$

  $$
  \begin{cases}
  \textcolor{red}{x = a - 1} \\
  \textcolor{red}{y = 2a - a + 1}
  \end{cases}
  $$

  $$
  \begin{cases}
  \textcolor{red}{x = a - 1} \\
  \textcolor{red}{y = a + 1}
  \end{cases}
  $$

Ottengo quindi le soluzioni:

Prima soluzione:
$$
\begin{cases}
\textcolor{blue}{x = -3a + 1} \\
\textcolor{blue}{y = 5a - 1}
\end{cases}
$$

Seconda soluzione:
$$
\begin{cases}
\textcolor{blue}{x = a - 1} \\
\textcolor{blue}{y = a + 1}
\end{cases}
$$