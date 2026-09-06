# Equazioni con un modulo

Sono come le equazioni normali: l'unica differenza è che spezzando il modulo nelle sue componenti otteniamo due equazioni che valgono in due intervalli diversi.
Un esempio chiarirà meglio il concetto:

Risolvere l'equazione
$|2x - 4| + x = 8$

pongo l'argomento del modulo maggiore o uguale a zero
$$
\begin{aligned}
2x - 4 &\ge 0 \\
2x &\ge 4 \\
x &\ge 2
\end{aligned}
$$

> ho messo maggiore o uguale, potevo anche mettere solo il maggiore e lasciare l'uguale nell'altro intervallo

Ottengo l'intervallo $[2, +\infty)$, in questo intervallo il termine dentro il modulo è positivo quindi tolgo il modulo e considero l'equazione
$2x - 4 + x = 8$

Invece nell'intervallo $(-\infty, 2)$ il termine dentro il modulo $(2x - 4)$ è negativo quindi per togliere il modulo devo cambiarlo di segno $(-2x + 4)$ e considerare l'equazione
$-2x + 4 + x = 8$

raccogliendo:

- se $x < 2$ considero
  $-2x + 4 + x = 8$
- se $x \ge 2$ considero
  $2x - 4 + x = 8$

Posso anche rappresentarlo sulla retta reale nel seguente modo:

$$
-2x + 4 + x = 8 \quad \text{---} 2 \text{---} \quad 2x - 4 + x = 8
$$

Naturalmente la soluzione è accettabile solo se cade dentro l'intervallo in cui considero l'equazione: Posso prendere per buona la soluzione della prima solo se è minore di $2$ e posso accettare la soluzione della seconda solo se è uguale o maggiore di $2$.
In pratica devo risolvere le due equazioni nel loro intervallo

- risolviamo la prima
  se $x < 2$ considero
  $$
  \begin{aligned}
  -2x + 4 + x &= 8 \\
  -x + 4 &= 8 \\
  -x &= 4 \\
  x &= -4
  \end{aligned}
  $$
  essendo questo valore minore di $2$ posso accettarlo

- risolviamo la seconda
  se $x \ge 2$ considero
  $$
  \begin{aligned}
  2x - 4 + x &= 8 \\
  3x - 4 &= 8 \\
  3x &= 12 \\
  x &= 4
  \end{aligned}
  $$
  essendo questo valore maggiore di $2$ posso accettarlo

Ho due soluzioni: $x_1 = -4 \quad x_2 = 4$

> <span class="text-purple-600">**Concludendo:** quando ho un modulo devo suddividere l'equazione in più equazioni ognuna valida in un certo intervallo e devo risolvere ogni equazione singolarmente: potrò accettare la soluzione solo se cade dentro l'intervallo dell'equazione.</span>

Per il numero di soluzioni non c'è un criterio: possono essere $1, 2$, oppure nessuna. Ad esempio prova a risolvere la stessa equazione cambiando di segno il termine dopo l'uguale:
$|2x - 4| + x = -8$ (nessuna soluzione)
[se vuoi vedere lo svolgimento](afbhc1.html)