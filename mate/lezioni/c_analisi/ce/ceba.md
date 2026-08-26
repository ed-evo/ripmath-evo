# Discontinuità di prima specie

Una discontinuità si dice di prima specie se esistono finiti i limiti destro e sinistro ma i due limiti sono diversi.

Esempio: consideriamo la funzione così definita:

$$
\textcolor{red}{y = \begin{cases} x & \text{per } x < 0 \\ x + 2 & \text{per } x \ge 0 \end{cases}}
$$

essa presenta una discontinuità di prima specie nel punto zero: infatti:

$$
\textcolor{red}{\lim_{x \to 0^-} f(x) = \lim_{x \to 0^-} x = 0}
$$

$$
\textcolor{red}{\lim_{x \to 0^+} f(x) = \lim_{x \to 0^+} (x + 2) = 2}
$$

> [Attenzione: non è detto che una funzione debba avere una formula matematica fissa per tutto l'asse reale, io posso definire anche una funzione a pezzi come nell'esempio sopra: l'importante è che per ogni valore della $x$ corrisponda un solo valore della $y$]{.text-purple}

un esempio classico di funzione con infiniti punti di discontinuità di prima specie è la funzione "scala":

$$
\textcolor{red}{y = \begin{cases} x & \text{se } x \text{ è un intero} \\ \text{int}(x) & \text{se } x \text{ non è intero} \end{cases}}
$$

intendendo con $\text{int}(x)$ la parte intera del numero $x$, cioè il numero $x$ scritto senza decimali.