Risolvere il sistema:

$$
\begin{cases} \textcolor{red}{x^4 + y^4 = 17} \\ \textcolor{red}{xy = 2} \end{cases}
$$

Potremmo usare la formula di Waring, ma qui possiamo usare un procedimento più semplice: eleviamo alla quarta la seconda espressione in modo da avere dappertutto $x^4$ ed $y^4$.

> In questo modo trasformiamo un sistema di grado $8$ in un sistema di grado $32$, cioè con $32$ soluzioni, ma poi vedrai che prenderemo solamente le soluzioni che verificano l'equazione iniziale $xy=2$ e quindi troveremo solo $8$ soluzioni accettabili.

$$
\begin{cases} \textcolor{red}{x^4 + y^4 = 17} \\ \textcolor{red}{x^4y^4 = 16} \end{cases}
$$

Ora poniamo $x^4=q$ ed $y^4=t$; otteniamo

$$
\begin{cases} \textcolor{red}{q + t = 17} \\ \textcolor{red}{qt = 16} \end{cases}
$$

che è un sistema simmetrico elementare.

Considero l'equazione associata

$$
\textcolor{blue}{z^2 - 17z + 16 = 0}
$$

risolvo ed ottengo

$$
\textcolor{blue}{z_1 = 16} \quad \textcolor{blue}{z_2 = 1}
$$

ho quindi le soluzioni

$$
\begin{cases} \textcolor{blue}{q_1 = 16} \\ \textcolor{blue}{t_1 = 1} \end{cases} \quad \begin{cases} \textcolor{blue}{q_2 = 1} \\ \textcolor{blue}{t_2 = 16} \end{cases}
$$

Ora devo risolvere i sistemi

$$
\begin{cases} \textcolor{blue}{x^4 = 16} \\ \textcolor{blue}{y^4 = 1} \end{cases}
$$

ed anche

$$
\begin{cases} \textcolor{blue}{x^4 = 1} \\ \textcolor{blue}{y^4 = 16} \end{cases}
$$

Risolvo il primo

$$
\begin{cases} \textcolor{blue}{x^4 = 16} \\ \textcolor{blue}{y^4 = 1} \end{cases}
$$

> (Mettiamo anche le soluzioni complesse) dovrei considerare $16$ soluzioni: per ottenere tutte le soluzioni devi combinare ognuna delle $4$ soluzioni della $x$ con ognuna delle $4$ soluzioni della $y$, ma poi siccome devo rispettare la condizione $xy=2$ allora avremo accettabili solamente le $4$ soluzioni:

$$
\begin{cases} \textcolor{red}{x_1 = 2} \\ \textcolor{red}{y_1 = 1} \end{cases} \quad \begin{cases} \textcolor{red}{x_2 = -2} \\ \textcolor{red}{y_2 = -1} \end{cases} \quad \begin{cases} \textcolor{red}{x_3 = 2i} \\ \textcolor{red}{y_3 = -i} \end{cases} \quad \begin{cases} \textcolor{red}{x_4 = -2i} \\ \textcolor{red}{y_4 = i} \end{cases}
$$

Il secondo sistema

$$
\begin{cases} \textcolor{blue}{x^4 = 1} \\ \textcolor{blue}{y^4 = 16} \end{cases}
$$

mi darà le soluzioni simmetriche

$$
\begin{cases} \textcolor{red}{x_5 = 1} \\ \textcolor{red}{y_5 = 2} \end{cases} \quad \begin{cases} \textcolor{red}{x_6 = -1} \\ \textcolor{red}{y_6 = -2} \end{cases} \quad \begin{cases} \textcolor{red}{x_7 = -i} \\ \textcolor{red}{y_7 = 2i} \end{cases} \quad \begin{cases} \textcolor{red}{x_8 = i} \\ \textcolor{red}{y_8 = -2i} \end{cases}
$$

Anche qui considero accettabili solo le $4$ soluzioni appaiate nel modo sopraddetto perché devono rispettare la condizione iniziale $xy=2$.