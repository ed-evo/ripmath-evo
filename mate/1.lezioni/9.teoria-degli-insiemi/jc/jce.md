# Relazione antisimmetrica

qui non diamo la definizione mediante prodotto cartesiano perché piuttosto complicata

Diciamo che la relazione $R$ su $A \times A$ è **antisimmetrica** se ogni volta che si ha $\textcolor{red}{aRb}$ e $\textcolor{red}{bRa}$ ne segue che $\textcolor{red}{a=b}$.

Qualcuno preferisce dire, in modo equivalente, che per $\textcolor{red}{a \neq b}$, $\textcolor{red}{aRb}$ esclude $\textcolor{red}{bRa}$.

> $$
> \textcolor{red}{aRb \text{ e } bRa \implies a=b}
> $$
> Se $a$ in relazione con $b$ e $b$ in relazione con $a$ allora $a=b$
>
> oppure
>
> $$
> \textcolor{red}{a \neq b \implies aRb \iff \neg bRa}
> $$
> Se $a$ è diverso da $b$ allora $a$ in relazione con $b$ esclude $b$ in relazione con $a$
>
> leggendo termine a termine:
> $a$ diverso da $b$ implica che $a$ è in relazione con $b$ se e solo se $b$ non è in relazione con $a$.

Vediamone un esempio:

Considero l'insieme degli abitanti dell'Italia e considero la relazione ["abita nella stessa città"]{.text-red}.
La relazione non è antisimmetrica: infatti se Maria abita nella stessa città di Carlo e Carlo abita nella stessa città di Maria non segue che Carlo è uguale a Maria.

---

Considero i numeri naturali e considero la relazione ["è maggiore od uguale a"]{.text-red}.
La relazione è antisimmetrica perché se un numero è maggiore od uguale a un secondo numero ed il secondo è maggiore o uguale del primo allora i due numeri sono uguali.