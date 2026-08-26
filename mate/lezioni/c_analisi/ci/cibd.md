# Valori agli estremi del campo di esistenza

Quando il campo di esistenza è diverso da tutto $\mathbb{R}$ meno qualche punto e vi sono delle zone della retta reale in cui la funzione non è definita è bene andare a controllare qual è il valore della funzione nei punti che separano queste zone: attenzione però che devi fare il limite solo dalla parte dove la funzione è definita.

> **Esempio:** considero la funzione
> $\textcolor{red}{y = x \log x}$
> il campo di esistenza è dato da $\textcolor{red}{x > 0}$
> devo vedere cosa succede nel punto $\textcolor{red}{x = 0}$
> Però dovrò fare solo il limite destro perché la funzione è definita solamente a destra di $0$
>
> $$
> \textcolor{red}{\lim_{x \to 0^+} x \log x =}
> $$
>
> il limite è del tipo $\textcolor{red}{0 \cdot \infty}$ per calcolarlo trasformo
>
> $$
> \textcolor{red}{\lim_{x \to 0^+} \frac{\log x}{1/x} =}
> $$
>
> Applico la regola di De l'Hospital
>
> $$
> \textcolor{red}{\lim_{x \to 0^+} \frac{1/x}{-1/x^2} = \lim_{x \to 0^+} -\frac{1}{x} \cdot x^2 = \lim_{x \to 0^+} -x = 0}
> $$
>
> quindi il grafico della funzione inizierà nell'origine $\text{(0,0)}$