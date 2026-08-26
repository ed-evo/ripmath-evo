Trovare le equazioni degli asintoti per la funzione
$\textcolor{red}{y = \frac{e^x}{\log x}}$

Il campo di esistenza è l'insieme dei valori in cui è definita la funzione logaritmo ($x > 0$) togliendo inoltre il valore $x = 1$ per cui si annulla il denominatore.
$\textcolor{red}{C.E. = ] 0 , 1[ \cup ] 1 , +\infty )}$

Calcolo il limite nell'estremo del campo di esistenza:

$\textcolor{red}{\lim_{x \to 0^+} \frac{e^x}{\log x} = \frac{1}{-\infty} = 0}$

La funzione inizia dal punto $O(0,0)$.

Calcolo ora il limite nel punto di discontinuità:

$\textcolor{red}{\lim_{x \to 1} \frac{e^x}{\log x} = \frac{e}{0} = \infty}$

Quindi la retta
$\textcolor{red}{x = 1}$
è un asintoto verticale.
Per tracciare al meglio l'andamento della funzione vicino all'asintoto calcoliamo il limite destro e sinistro della funzione nel punto di ascissa $1$.

Limite sinistro:
$\textcolor{red}{\lim_{x \to 1^-} \frac{e^x}{\log x} = \frac{+}{-} = -\infty}$

Limite destro:
$\textcolor{red}{\lim_{x \to 1^+} \frac{e^x}{\log x} = \frac{+}{+} = +\infty}$

> Per calcolare limiti di questo genere basta ricordare che $\textcolor{red}{e^x}$ è sempre positiva mentre il logaritmo è negativo per $x$ minore di $1$ ed è positivo per $x$ maggiore di $1$, bisogna poi fare il conto dei segni.

Quindi il risultato è quello della figura a destra.

Per quanto riguarda l'asintoto orizzontale o obliquo facciamo il limite per $x$ tendente a più infinito della funzione (solo più infinito perché per valori inferiori a zero la funzione non esiste):

$\textcolor{red}{\lim_{x \to +\infty} \frac{e^x}{\log x} = +\infty}$

> Questo limite è particolarmente semplice calcolato con la regola di De l'Hôpital.

Può esistere l'asintoto obliquo nella forma $y = mx + q$, naturalmente se esistono $m$ e $q$.
Vediamo se esiste $m$ moltiplicando il denominatore per $x$:

$\textcolor{red}{m = \lim_{x \to +\infty} \frac{e^x}{x \log x} = \infty}$

> Per calcolare questo limite con il confronto di infiniti basta ricordare che $\textcolor{red}{e^x}$ è l'infinito di ordine superiore a tutti gli altri.

Non abbiamo asintoti orizzontali né obliqui.