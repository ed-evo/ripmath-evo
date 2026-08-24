## Tre equazioni equivalenti

Anche qui facciamo un semplice esempio e poi raccogliamo i risultati

Risolvere il sistema:

$$
\begin{cases}
\textcolor{blue}{x + y + z = 6} \\
\textcolor{blue}{x + y + z = 6} \\
\textcolor{blue}{2x + 2y + 2z = 12}
\end{cases}
$$

### Metodo di sostituzione

In questo caso le tre equazioni sono equivalenti (le prime due sono addirittura uguali e la terza è ottenuta dalla prima moltiplicandone i termini per $2$), e se andassi a sostituire normalmente otterrei alla fine $0 = 0$; quindi, per poter risolvere devo eliminare due delle tre equazioni equivalenti ed il mio sistema si riduce all'equazione

$$
\textcolor{blue}{x + y + z = 6}
$$

Risolvo: ricavo la $x$ come se $y$ e $z$ fossero numeri dati

$$
\textcolor{blue}{x = 6 - y - z}
$$

ora posso attribuire ad $y$ infiniti valori, ma non solo: per ogni valore che do ad $y$ posso dare infiniti valori a $z$

> **Nota:** [Se non ti è chiaro](aibbcbb0.html)

e quindi il mio sistema ammette infinite al quadrato ($\textcolor{red}{\infty^2}$) soluzioni che posso anche indicare come

$$
\begin{cases}
\textcolor{blue}{x = 6 - h - k} \\
\textcolor{blue}{y = h} \\
\textcolor{blue}{z = k}
\end{cases}
\quad \textcolor{blue}{\text{con } h \text{ e } k \text{ numeri reali}}
$$

### Metodo di Cramer

Considero le matrici incompleta e completa

$$
\text{[Matrice incompleta]{.text-blue}} \quad \textcolor{red}{\begin{pmatrix} 1 & 1 & 1 \\ 1 & 1 & 1 \\ 2 & 2 & 2 \end{pmatrix}} \quad \text{[Matrice completa]{.text-blue}} \quad \textcolor{red}{\begin{pmatrix} 1 & 1 & 1 & 6 \\ 1 & 1 & 1 & 6 \\ 1 & 1 & 1 & 6 \end{pmatrix}}
$$

Vediamo che ci sono due righe uguali ed una proporzionale: se procedessi normalmente otterrei che i determinanti $3 \times 3$ sarebbero tutti nulli (ed anche tutti quelli $2 \times 2$) ed otterrei come soluzioni $0/0$ (valore indeterminato); quindi per procedere a trovare le soluzioni devo eliminare due equazioni delle tre uguali ed il mio sistema diventa

$$
\textcolor{blue}{x + y + z = 6}
$$

Devo spostare dopo l'uguale due incognite, trattandole come numeri dati, per avere tante incognite quante equazioni. Sposto dopo l'uguale la $y$ e la $z$ per ottenere gli stessi risultati trovati sopra: ottengo

$$
\textcolor{blue}{x = 6 - y - z}
$$

con matrice incompleta e completa

$$
\text{[Matrice incompleta]{.text-blue}} \quad \textcolor{red}{\begin{pmatrix} 1 \end{pmatrix}} \quad \text{[Matrice completa]{.text-blue}} \quad \textcolor{red}{\begin{pmatrix} 1 & 6 - y - z \end{pmatrix}}
$$

Trovo $x$ con la regola di Cramer

$$
\textcolor{red}{x = \frac{\begin{vmatrix} 6 - y - z \end{vmatrix}}{\begin{vmatrix} 1 \end{vmatrix}} = \frac{6 - y - z}{1} = 6 - y - z}
$$

e quindi, siccome posso dare ad $y$ e $z$ un valore qualunque:

$$
\begin{cases}
\textcolor{blue}{x = 6 - h - k} \\
\textcolor{blue}{y = h} \\
\textcolor{blue}{z = k}
\end{cases}
\quad \textcolor{blue}{\text{con } h \text{ e } k \text{ numeri reali}}
$$

Possiamo quindi dire:

**Se tre equazioni sono equivalenti allora il sistema ammette $\infty^2$ soluzioni**

> È ormai ora di parlare di: dipendenza ed indipendenza lineare, matrici, determinanti e rango di una matrice