Trovare l'equazione degli asintoti per la funzione
[$y = \frac{x}{\log x}$]{.text-red}

---

Il campo di esistenza è l'insieme dei valori in cui è definita la funzione logaritmo ($x > 0$) togliendo inoltre il valore $x = 1$ per cui si annulla il denominatore:
[$C.E. = ] 0 , 1[ \cup ] 1 , +\infty [$]{.text-red}

Calcolo il limite nell'estremo del campo di esistenza:

$$
\textcolor{red}{\lim_{x \to 0^+} \frac{x}{\log x} = 0}
$$

La funzione inizia dal punto $O(0,0)$.

Calcolo ora il limite nel punto di discontinuità:

$$
\textcolor{red}{\lim_{x \to 1} \frac{x}{\log x} = \frac{1}{0} = \infty}
$$

Quindi la retta [$x = 1$]{.text-red} è un asintoto verticale.

Per tracciare al meglio l'andamento della funzione vicino all'asintoto calcoliamo il limite destro e sinistro della funzione nel punto di ascissa $1$.

Limite sinistro:

$$
\textcolor{red}{\lim_{x \to 1^-} \frac{x}{\log x} = \frac{+}{-} = -\infty}
$$

Limite destro:

$$
\textcolor{red}{\lim_{x \to 1^+} \frac{x}{\log x} = \frac{+}{+} = +\infty}
$$

---

> Per calcolare limiti di questo genere basta sostituire alla $x$ un valore un pochino più piccolo di $1$ (ad esempio $0,9$) nel primo ed un valore un po' più grande di $1$ (ad esempio $1,1$) nel secondo; ricordando poi che il logaritmo è negativo per $x$ minore di $1$ ed è positivo per $x$ maggiore di $1$, basta fare il conto dei segni.

---

Quindi il risultato è quello della figura a destra.

Per quanto riguarda l'asintoto orizzontale o obliquo facciamo il limite per $x$ tendente a più infinito della funzione (solo più infinito perché per valori inferiori a zero la funzione non esiste):

$$
\textcolor{red}{\lim_{x \to +\infty} \frac{x}{\log x} = +\infty}
$$

---

> Questo limite è particolarmente semplice calcolato con la regola di De l'Hôpital.

---

Può esistere l'asintoto obliquo nella forma $y = mx + q$, naturalmente se esistono $m$ e $q$.
Vediamo se esiste $m$ moltiplicando il denominatore per $x$:

$$
\textcolor{red}{m = \lim_{x \to +\infty} \frac{x}{x \log x} = \lim_{x \to +\infty} \frac{1}{\log x} = 0}
$$

> Se $m = 0$ l'asintoto obliquo non esiste in quanto $m = 0$ implica l'asintoto orizzontale, ma siccome il limite della funzione vale infinito non possiamo avere l'asintoto orizzontale; comunque se procediamo troviamo che $q$ vale infinito.

Non abbiamo asintoti orizzontali né obliqui.