Risolvere la seguente equazione logaritmica

$$
\textcolor{red}{\log_2(x+1) = \log_4(2x+5)}
$$

Siccome il logaritmo è definito solamente se l'argomento è maggiore di zero, dovremo risolvere l'equazione sotto le condizioni:

$$
\textcolor{blue}{\begin{cases} x + 1 > 0 \\ 2x + 5 > 0 \end{cases}}
$$

Risolvo:

$$
\textcolor{blue}{\begin{cases} x > -1 \\ x > -5/2 \end{cases}}
$$

Essendo un sistema, devo prendere l'intervallo dove sono valide contemporaneamente le disequazioni, cioè:

$$
\textcolor{blue}{x > -1}
$$

Adesso passo a risolvere l'equazione

$$
\textcolor{blue}{\log_2(x+1) = \log_4(2x+5)}
$$

Siccome i logaritmi hanno base diversa, dovrò applicare la regola del cambiamento di base. Conviene trasformare il secondo logaritmo da base $4$ in base $2$. 

Applico la regola:

$$
\textcolor{blue}{\log_4(2x+5) = \frac{\log_2(2x+5)}{\log_2 4} = \frac{\log_2(2x+5)}{2}}
$$

Quindi posso scrivere:

$$
\textcolor{blue}{\log_2(x+1) = \frac{1}{2}\log_2(2x+5)}
$$

e ricordando la regola del logaritmo di un radicale:

$$
\textcolor{blue}{\log_2(x+1) = \log_2\sqrt{2x+5}}
$$

cioè, uguagliando gli argomenti:

$$
\textcolor{blue}{x+1 = \sqrt{2x+5}}
$$

È un'equazione irrazionale: elevo al quadrato da entrambe le parti:

$$
\textcolor{blue}{(x+1)^2 = 2x+5}
$$

Sviluppo il quadrato:

$$
\textcolor{blue}{x^2 + 2x + 1 = 2x+5}
$$

$$
\textcolor{blue}{x^2 + 2x + 1 - 2x - 5 = 0}
$$

$$
\textcolor{blue}{x^2 - 4 = 0}
$$

$$
\textcolor{blue}{x^2 = 4}
$$

$$
\textcolor{blue}{x = \pm\sqrt{4}}
$$

Ottengo le soluzioni:

$$
\textcolor{blue}{x = 2 \quad x = -2}
$$

> **Nota:** Per l'equazione irrazionale dovrei vedere se le soluzioni sono accettabili, però ho visto sempre che corrisponde all'accettabilità della soluzione dell'equazione logaritmica.

Per l'equazione logaritmica controllo che le soluzioni siano comprese nell'intervallo di definizione $\textcolor{blue}{x > -1}$:

La soluzione [x = 2]{.text-red} è accettabile perché maggiore di $-1$

La soluzione [x = -2]{.text-red} non è accettabile perché minore di $-1$