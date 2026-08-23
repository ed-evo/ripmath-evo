# [TEOREMA DEL RESTO DI RUFFINI]{.text-red}

Quando è possibile eseguire la divisione con il metodo di Ruffini è anche possibile riuscire a trovare il resto senza fare la divisione.
Vediamo prima perché si può fare così poi, come conseguenza, vedremo il come.
Consideriamo ad esempio il numero $$25$$, esso diviso per $$6$$ dà per quoziente $$4$$ e resto $$1$$.
Come scriverlo?

$$
\textcolor{red}{25 = 6 \cdot 4 + 1}
$$

Cioè il numero è uguale al divisore per il quoziente più il resto.
Essendo i polinomi un ampliamento dei numeri anche per essi potrò scrivere:

$$
\textcolor{red}{\text{DIVIDENDO} = \text{DIVISORE} \cdot \text{QUOZIENTE} + \text{RESTO}}
$$

Allora poniamo:

$$
\textcolor{red}{\text{POLINOMIO} = P(x)}
$$

$$
\textcolor{red}{\text{DIVISORE (di Ruffini)} = (x-a)}
$$

$$
\textcolor{red}{\text{QUOZIENTE} = Q(x)}
$$

$$
\textcolor{red}{\text{RESTO} = R}
$$

Avremo

$$
\textcolor{red}{P(x) = (x-a) \cdot Q(x) + R}
$$

Ora il nostro problema è trovare il resto cioè lasciare la $$\textcolor{red}{R}$$ da sola dopo l'uguale e questo si può fare se si elimina il termine $$\textcolor{red}{(x-a) \cdot Q(x)}$$.

Per eliminare questo termine basta mettere al posto di $$\textcolor{red}{x}$$ il valore $$\textcolor{red}{a}$$, così $$\textcolor{red}{(a-a)}$$ vale zero e $$\textcolor{red}{Q(x) \cdot (a-a) = Q(x) \cdot 0 = 0}$$.

Quindi resta:

$$
\textcolor{red}{P(a) = (a-a) \cdot Q(a) + R}
$$

cioè

$$
\textcolor{red}{P(a) = R}
$$

> **Regola:** [per ottenere il resto basta sostituire nel polinomio al posto della lettera il termine noto del divisore cambiato di segno]{.text-blue}

Ad esempio calcoliamo il resto di una divisione fatta nelle pagine precedenti:

$$
\textcolor{red}{(2x^2+5x+6):(x+2)}
$$

Basterà sostituire $$\textcolor{red}{-2}$$ al posto della $$\textcolor{red}{x}$$ nel polinomio $$\textcolor{red}{2x^2+5x+6}$$.

$$
\textcolor{red}{2 \cdot (-2)^2 + 5 \cdot (-2) + 6 = 8 - 10 + 6 = 4}
$$

Quindi $$\textcolor{red}{R=4}$$ è il valore del resto.