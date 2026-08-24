Risolvere la seguente equazione logaritmica
$$
\textcolor{red}{\log(x+1) + \log(x-1) = 0}
$$

Per la regola del [logaritmo di un prodotto](alga.html) posso scrivere
$$
\textcolor{blue}{\log((x-1)(x+1)) = 0}
$$

calcolo prima dell'uguale e, ricordando che zero è il logaritmo di $1$
$$
\textcolor{blue}{\log(x^2-1) = \log 1}
$$

cioè, uguagliando gli argomenti
$$
\textcolor{blue}{x^2-1 = 1}
$$
$$
\textcolor{blue}{x^2 = 2}
$$
$$
\textcolor{blue}{x = \pm\sqrt{2}}
$$

Ora devo controllare se le soluzioni sono accettabili o meno sostituendole alle $\textcolor{blue}{x}$ nei logaritmi dell'equazione di partenza e controllando se cadono nell'intervallo di definizione:

- Sostituisco $\textcolor{blue}{x = -\sqrt{2}}$
  $$
  \textcolor{blue}{\log(x+1) = \log(-\sqrt{2} + 1)}
  $$
  essendo l'argomento minore di zero la soluzione non è accettabile
  > (non serve provare l'altro logaritmo perché basta che uno solo non sia valido e non è valida tutta l'equazione)

- Sostituisco $\textcolor{blue}{x = \sqrt{2}}$
  $$
  \textcolor{blue}{\log(x+1) = \log(\sqrt{2} + 1)}
  $$ argomento maggiore di zero
  $$
  \textcolor{blue}{\log(x-1) = \log(\sqrt{2} - 1)}
  $$ argomento maggiore di zero
  essendo l'argomento maggiore di zero la soluzione è accettabile

cioè $\textcolor{red}{x = \sqrt{2}}$ è accettabile