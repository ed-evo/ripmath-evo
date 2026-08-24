# [Limite in forma indeterminata del tipo 0/0]{.text-red}

> **Avvertenza:** Purtroppo il Web non è predisposto per scrivere le frazioni, allora, poiché non voglio far pesare troppo queste pagine costruendo le frazioni mediante immagini e poiché l'utilizzo di fogli di stile sarebbe per me piuttosto gravoso, premetto che per le frazioni useremo la seguente convenzione:
>
> invece di scrivere:
> $$
> y = \frac{\textcolor{red}{x^2-4}}{\textcolor{red}{x-2}}
> $$
>
> scriverò:
> $$
> \textcolor{red}{y = (x^2-4) / (x-2)}
> $$

Torniamo ora alla forma indeterminata: è possibile che il limite, che abbiamo da poco definito, sia così inefficiente da non poter calcolare una cosa di questo genere?

$$
\textcolor{red}{\lim_{x \to 2} \frac{x^2-4}{x-2} =}
$$

Infatti se faccio i calcoli sostituendo $2$ ad $x$ ottengo $0/0$ che [in matematica non ha significato](zerosuzero.html).

Ma se la definizione di limite che abbiamo data è valida l'errore non deve essere nel limite, ma nella funzione: infatti avremo il limite $0/0$ solo se la funzione si annulla contemporaneamente al numeratore ed al denominatore, allora per calcolare il limite basterà togliere nella funzione la causa dell'indeterminazione scomponendo numeratore e denominatore e semplificando.

$\textcolor{red}{x^2-4}$ si scompone come $\textcolor{red}{(x+2)(x-2)}$
il denominatore è già scomposto $\textcolor{red}{(x-2)}$
semplifico:
$\textcolor{red}{\frac{x^2-4}{x-2} = \frac{(x+2)(x-2)}{x-2} = x+2}$
e faccio il limite:

$$
\textcolor{red}{\lim_{x \to 2} (x+2) = 4}
$$

> **Attenzione:** per poter fare bene questi esercizi è necessario saper fare bene la [scomposizione di un polinomio in fattori](../../a/ad/ad6g.html) e un ripasso non farebbe male; comunque, più avanti vedremo come è possibile [utilizzare le derivate](../cf/cfdg.html) per poter calcolare in modo molto semplice queste forme.

Proviamo un altro esercizio: calcoliamo:

$$
\textcolor{red}{\lim_{x \to 1} \frac{x^3 - 3x^2 + 3x - 1}{x^3 - 1} =}
$$

anche qui sostituendo $1$ alla $x$ ottengo $0/0$ quindi devo scomporre il numeratore ed il denominatore e togliere la causa dell'indeterminazione.

$\textcolor{red}{x^3 - 3x^2 + 3x - 1}$ è il cubo di un binomio e si scompone come $\textcolor{red}{(x-1)^3}$
$\textcolor{red}{x^3 - 1}$ è la differenza fra due cubi e si scompone come $\textcolor{red}{(x-1)(x^2 + x + 1)}$

semplificando ottengo:

$$
\textcolor{red}{\lim_{x \to 1} \frac{x^3 - 3x^2 + 3x - 1}{x^3 - 1} =}
$$

$$
\textcolor{red}{= \lim_{x \to 1} \frac{(x-1)^3}{(x-1)(x^2 + x + 1)} =}
$$

$$
\textcolor{red}{= \lim_{x \to 1} \frac{(x-1)^2}{x^2 + x + 1} = \frac{0}{3} = 0}
$$