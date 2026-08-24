# Proprietà additiva

Studiamo meglio la proprietà che è legata al terzo postulato.

Consideriamo prima il caso di due eventi $$E_1$$, $$E_2$$ **incompatibili**, cioè tali che o si verifica l'uno oppure si verifica l'altro, ma non possono verificarsi entrambi $$E_1 \cap E_2 = \emptyset$$, allora abbiamo che:

**la probabilità che si verifichi l'evento $$E_1$$ oppure l'evento $$E_2$$ è data dalla somma delle probabilità dei singoli eventi**

$$
\textcolor{red}{P(E_1 \cup E_2) = P(E_1) + P(E_2)}
$$

> **Esempio:**
> **Trovare la probabilità che, estraendo una carta da un mazzo di $$40$$, esca una figura oppure un asso**
> I due eventi sono incompatibili nel senso che o esce una figura oppure esce un asso e non possono uscire entrambe contemporaneamente, quindi avremo:
> $$E_1$$ = uscita di una figura
> $$E_2$$ = uscita di un asso
> probabilità di uscita di una figura = $$P(E_1) = 12/40 = 3/10$$
> probabilità di uscita di un asso = $$P(E_2) = 4/40 = 1/10$$
> $$\textcolor{red}{P(E_1 \cup E_2) = P(E_1) + P(E_2) = 3/10 + 1/10 = 4/10 = 0,4 = 40\%}$$

Consideriamo quindi il caso che gli eventi siano **qualsiasi**: avremo che:

**la probabilità che si verifichi l'evento $$E_1$$ oppure l'evento $$E_2$$ è data dalla somma delle probabilità dei singoli eventi meno la probabilità del loro verificarsi in contemporanea**

$$
\textcolor{red}{P(E_1 \cup E_2) = P(E_1) + P(E_2) - P(E_1 \cap E_2)}
$$

> **Esempio:**
> **Trovare la probabilità che, estraendo una carta da un mazzo di $$40$$, esca una figura oppure una carta di denari**
> Può uscire una figura che non sia di denari, può uscire una carta di denari che non sia una figura, ma può anche uscire una figura di denari, quindi avremo:
> $$E_1$$ = uscita di una figura
> $$E_2$$ = uscita di una carta di denari
> $$E_1 \cap E_2$$ = uscita di una figura di denari
> probabilità di uscita di una figura = $$P(E_1) = 12/40$$
> probabilità di uscita di una carta di denari = $$P(E_2) = 10/40$$
> probabilità di uscita di una carta di denari che sia anche una figura (le figure di denari sono $$3$$) = $$P(E_1 \cap E_2) = 3/40$$
> $$\textcolor{red}{P(E_1 \cup E_2) = P(E_1) + P(E_2) - P(E_1 \cap E_2) = 12/40 + 10/40 - 3/40 = 19/40 = 0,475 = 47,5\%}$$