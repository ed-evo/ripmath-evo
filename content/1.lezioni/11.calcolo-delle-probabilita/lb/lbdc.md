# [Formula di Newton]{.text-red}

Avevamo già usato la [regola di Newton](../../a/ad/ad4cfb.html) ma solo come metodo pratico, ora ne vediamo la giustificazione teorica.

Vediamo la formula di Newton per lo sviluppo della potenza qualunque del binomio: ricordati che per gli esponenti abbiamo che mentre l'esponente del secondo termine aumenta quello del primo diminuisce.

$$
\textcolor{blue}{(a+b)^n = \binom{n}{0} a^n + \binom{n}{1} a^{n-1}b + \binom{n}{2} a^{n-2}b^2 + \dots + \binom{n}{k} a^{n-k}b^k + \dots + \binom{n}{n-1} ab^{n-1} + \binom{n}{n} b^n}
$$

Possiamo anche scriverlo in forma più compatta:

$$
\textcolor{blue}{(a+b)^n = \sum_{k=0,1,\dots,n} \binom{n}{k} a^{n-k}b^k}
$$

Cioè lo sviluppo della potenza $$n$$-esima di un binomio è uguale alla somma dei termini che si ottengono sostituendo nell'espressione

$$
\textcolor{blue}{\binom{n}{k} a^{n-k}b^k}
$$

al posto di $$k$$ successivamente i valori $$0,1,2,\dots,n$$.

Come applicazione vediamo di sviluppare $$\textcolor{red}{(a+b)^{10} =}$$ [Soluzione](lbdca.html)