Risolvere la seguente equazione logaritmica
$\textcolor{red}{\log_2(x+1) = \log_4(2x+5)}$

Siccome i logaritmi hanno base diversa dovrò applicare la regola del cambiamento di base. Conviene trasformare il secondo logaritmo da base 4 in base 2.

Applico la regola
$$
\textcolor{blue}{\log_4(2x+5) = \frac{\log_2(2x+5)}{\log_2 4} = \frac{\log_2(2x+5)}{2}}
$$

quindi posso scrivere
$\textcolor{blue}{\log_2(x+1) = \frac{1}{2}\log_2(2x+5)}$

e ricordando la regola del logaritmo di un radicale
$\textcolor{blue}{\log_2(x+1) = \log_2\sqrt{2x+5}}$

cioè, uguagliando gli argomenti
$\textcolor{blue}{x+1 = \sqrt{2x+5}}$

È un'equazione irrazionale: elevo al quadrato da entrambe le parti
$\textcolor{blue}{(x+1)^2 = 2x+5}$

sviluppo il quadrato
$\textcolor{blue}{x^2 + 2x + 1 = 2x+5}$
$\textcolor{blue}{x^2 + 2x + 1 - 2x - 5 = 0}$
$\textcolor{blue}{x^2 - 4 = 0}$
$\textcolor{blue}{x^2 = 4}$
$\textcolor{blue}{x = \pm\sqrt{4}}$

ottengo le soluzioni
$\textcolor{blue}{x = 2 \quad x = -2}$

Per l'equazione irrazionale dovrei vedere se le soluzioni sono accettabili, però ho visto che corrisponde all'accettabilità della soluzione dell'equazione logaritmica.

Ora devo controllare se le soluzioni sono accettabili, per farlo sostituisco i valori alla $x$ nei logaritmi dell'equazione di partenza e controllo che gli argomenti siano positivi:

- soluzione [$\textcolor{blue}{x = -2}$]{.text-blue}
  $\textcolor{red}{\log_2(x+1) = \log_2(-2+1) = \log_2(-1)}$
  Essendo l'argomento negativo la soluzione $\textcolor{blue}{x = -2}$ non è accettabile.
  > (non serve provare l'altro logaritmo perché basta che uno solo non sia valido e non è valida tutta l'equazione)

- soluzione [$\textcolor{blue}{x = 2}$]{.text-blue}
  $\textcolor{red}{\log_2(x+1) = \log_2(2+1) = \log_2 3}$
  $\textcolor{red}{\log_4(2x+5) = \log_4[2(2)+5] = \log_4 9}$
  Essendo gli argomenti positivi la soluzione [$\textcolor{red}{x = 2}$]{.text-red} è accettabile.