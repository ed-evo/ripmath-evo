# Equazioni con un modulo

Sono come le equazioni normali: l'unica differenza è che spezzando il modulo nelle sue componenti otteniamo due equazioni che valgono in due intervalli diversi.

Un esempio chiarirà meglio il concetto:

Risolvere l'equazione
$$
\textcolor{red}{|2x - 4| + x = 8}
$$

Pongo l'argomento del modulo maggiore o uguale a zero:
$$
\textcolor{red}{2x - 4 \ge 0}
$$
$$
\textcolor{red}{2x \ge 4}
$$
$$
\textcolor{red}{x \ge 2}
$$

> **Nota:** ho messo maggiore o uguale, potevo anche mettere solo il maggiore e lasciare l'uguale nell'altro intervallo.

Ottengo l'intervallo $\textcolor{red}{[2, +\infty)}$, in questo intervallo il termine dentro il modulo è positivo quindi tolgo il modulo e considero l'equazione:
$$
\textcolor{red}{2x - 4 + x = 8}
$$

Invece nell'intervallo $\textcolor{red}{(-\infty, 2)}$ il termine dentro il modulo $\textcolor{red}{(2x - 4)}$ è negativo quindi per togliere il modulo devo cambiarlo di segno $\textcolor{red}{(-2x + 4)}$ e considerare l'equazione:
$$
\textcolor{red}{-2x + 4 + x = 8}
$$

Raccogliendo:

- se $\textcolor{red}{x < 2}$ considero $\textcolor{red}{-2x + 4 + x = 8}$
- se $\textcolor{red}{x \ge 2}$ considero $\textcolor{red}{2x - 4 + x = 8}$

Posso anche rappresentarlo sulla retta reale nel seguente modo:

$\textcolor{red}{-2x + 4 + x = 8}$ \hfill $\textcolor{red}{2x - 4 + x = 8}$
_____________________$2$_______________________

Naturalmente la soluzione è accettabile solo se cade dentro l'intervallo in cui considero l'equazione: posso prendere per buona la soluzione della prima solo se è minore di $2$ e posso accettare la soluzione della seconda solo se è uguale o maggiore di $2$.

In pratica devo risolvere le due equazioni nel loro intervallo:

- risolviamo la prima:
  se $\textcolor{red}{x < 2}$ considero
  $$
  \textcolor{red}{-2x + 4 + x = 8}
  $$
  $$
  \textcolor{red}{-x + 4 = 8}
  $$
  $$
  \textcolor{red}{-x = 4}
  $$
  $$
  \textcolor{red}{x = -4}
  $$
  essendo questo valore minore di $2$ posso accettarlo.

- risolviamo la seconda:
  se $\textcolor{red}{x \ge 2}$ considero
  $$
  \textcolor{red}{2x - 4 + x = 8}
  $$
  $$
  \textcolor{red}{3x - 4 = 8}
  $$
  $$
  \textcolor{red}{3x = 12}
  $$
  $$
  \textcolor{red}{x = 4}
  $$
  essendo questo valore maggiore di $2$ posso accettarlo.

Ho due soluzioni: $\textcolor{red}{x_1 = -4}$ $\textcolor{red}{x_2 = 4}$

[Concludendo: quando ho un modulo devo suddividere l'equazione in più equazioni ognuna valida in un certo intervallo e devo risolvere ogni equazione singolarmente: potrò accettare la soluzione solo se cade dentro l'intervallo dell'equazione.]{.text-purple}

Per il numero di soluzioni non c'è un criterio: possono essere $1$, $2$, oppure nessuna. Ad esempio prova a risolvere la stessa equazione cambiando di segno il termine dopo l'uguale:
$$
\textcolor{red}{|2x - 4| + x = -8}
$$
(nessuna soluzione)

[se vuoi vedere lo svolgimento](afbhc1.html)