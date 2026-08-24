# [Criterio di scomposizione per 2]{.text-red}

**Un numero è divisibile per $2$ se termina per cifra pari: $2, 4, 6, 8, 0$**

Cioè, se un numero ha come cifra finale una cifra pari allora è divisibile per $2$ senza resto.

> **Dimostrazione:**
> Ricordati che la scomposizione è il contrario della moltiplicazione e, se moltiplico un numero qualunque per $2$ la sua ultima cifra viene moltiplicata per $2$ (con eventuale riporto) quindi l'ultima cifra del risultato diventa:
> - se il numero termina per $0$, essendo $2 \times 0 = 0$ l'ultima cifra del prodotto è $0$
> - se il numero termina per $1$, essendo $2 \times 1 = 2$ l'ultima cifra del prodotto è $2$
> - se il numero termina per $2$, essendo $2 \times 2 = 4$ l'ultima cifra del prodotto è $4$
> - se il numero termina per $3$, essendo $2 \times 3 = 6$ l'ultima cifra del prodotto è $6$
> - se il numero termina per $4$, essendo $2 \times 4 = 8$ l'ultima cifra del prodotto è $8$
> - se il numero termina per $5$, essendo $2 \times 5 = 10$ l'ultima cifra del prodotto è $0$
> - se il numero termina per $6$, essendo $2 \times 6 = 12$ l'ultima cifra del prodotto è $2$
> - se il numero termina per $7$, essendo $2 \times 7 = 14$ l'ultima cifra del prodotto è $4$
> - se il numero termina per $8$, essendo $2 \times 8 = 16$ l'ultima cifra del prodotto è $6$
> - se il numero termina per $9$, essendo $2 \times 9 = 18$ l'ultima cifra del prodotto è $8$

## Esempio
Sono divisibili per $2$ i numeri **$12, 82, 1470, 7776, 13528$**
Non sono divisibili per $2$ i numeri **$15, 85, 1471, 7773, 13529$**

## Come procedere
Una volta individuato che un numero è divisibile per $2$, per estrarne il fattore si procede da sinistra a destra dividendo ogni cifra (o gruppo di cifre) per $2$ fino ad arrivare all'ultima.

Esempio: ho il numero $\textcolor{red}{120}$
Comincio da sinistra: ho $\textcolor{red}{1}$, siccome $1$ non è divisibile per $2$ considero $2$ cifre cioè $\textcolor{red}{12}$; siccome $\textcolor{red}{12 : 2 = 6}$ scrivo $6$, passo poi all'altra cifra $\textcolor{red}{0}$; siccome $\textcolor{red}{0 : 2 = 0}$ allora scrivo $0$ ed ho ottenuto:

$$
\begin{array}{r|l}
\textcolor{#990000}{120} & \textcolor{#990000}{2} \\
\textcolor{#990000}{60} & \textcolor{#990000}{2} \\
\textcolor{#990000}{30} & \textcolor{#990000}{2} \\
\textcolor{#990000}{15} & 
\end{array}
$$

$\textcolor{red}{120 = 2 \times 60}$

Ripeto il procedimento sul $\textcolor{red}{60}$ perché, finendo per $0$, è ancora divisibile per $2$.
Comincio da sinistra: ho $\textcolor{red}{6}$, siccome $\textcolor{red}{6 : 2 = 3}$ scrivo $3$, passo poi all'altra cifra $\textcolor{red}{0}$; siccome $\textcolor{red}{0 : 2 = 0}$ allora scrivo $0$ ed ho ottenuto:

$$
\textcolor{red}{120 = 2 \times 60 = 2 \times 2 \times 30}
$$

Ripeto il procedimento sul $\textcolor{red}{30}$ perché, finendo per $0$, è ancora divisibile per $2$.
Comincio da sinistra: ho $\textcolor{red}{3}$, siccome $3$ è divisibile per $2$ con quoziente $1$ e resto $1$, scrivo il quoziente $1$ e al resto metto in coda l'altra cifra ed ottengo $\textcolor{red}{10}$; siccome $\textcolor{red}{10 : 2 = 5}$ allora scrivo $5$ ed ho ottenuto:

$$
\textcolor{red}{120 = 2 \times 60 = 2 \times 2 \times 30 = 2 \times 2 \times 2 \times 15}
$$

$\textcolor{red}{15}$ non è divisibile per $2$ quindi mi fermo.

Di solito queste operazioni, senza svilupparle come sopra, si fanno a parte su un pezzetto del foglio come vedi qui sopra a destra.