# Condizione di tangenza ad una retta

Per scrivere la condizione di tangenza della parabola
$$\textcolor{blue}{y = ax^2 + bx + c}$$
alla retta
$$\textcolor{blue}{y = mx + q}$$
bisogna fare il sistema fra la retta e la parabola ed imporre che il delta del sistema sia zero.

> Come abbiamo già visto sulla circonferenza, ma qui c'è da dire che siccome l'equazione della parabola è più semplice di quella della circonferenza, il metodo è più semplice.

## Esempio

Scrivere la condizione di tangenza della parabola
$$\textcolor{blue}{y = ax^2 + bx + c}$$
alla retta
$$\textcolor{blue}{y = 2x + 3}$$

Faccio il sistema fra la retta e la parabola:
$$
\begin{cases} \textcolor{red}{y = ax^2 + bx + c} \\ \textcolor{red}{y = 2x + 3} \end{cases}
$$

Sostituisco:
$$
\begin{cases} \textcolor{red}{2x + 3 = ax^2 + bx + c} \\ \textcolor{red}{y = 2x + 3} \end{cases}
$$

Raggruppo nella prima equazione:
$$
\begin{cases} \textcolor{red}{ax^2 + (b-2)x + (c-3) = 0} \\ \textcolor{red}{y = 2x + 3} \end{cases}
$$

Ora calcolo il delta nella prima equazione e lo pongo uguale a zero:
$$\textcolor{blue}{\Delta = b^2 - 4ac}$$

> **Attenzione:** le $$a$$, $$b$$ e $$c$$ hanno un significato diverso: quelle in rosso sono i parametri da trovare mentre quelli blu sono quelli della formula.

Nel nostro caso abbiamo:
$$\textcolor{blue}{a} = \textcolor{red}{a}$$
$$\textcolor{blue}{b} = \textcolor{red}{(b-2)}$$
$$\textcolor{blue}{c} = \textcolor{red}{(c-3)}$$

Quindi:
$$\textcolor{red}{\Delta = (b-2)^2 - 4a(c-3) = 0}$$

Calcolo:
$$\textcolor{red}{b^2 - 4b + 4 - 4ac + 12a = 0}$$

e questa è la condizione cercata.

> **Nota:** la condizione è di secondo grado, cioè di solito questa condizione ti può portare a determinare due parabole diverse.