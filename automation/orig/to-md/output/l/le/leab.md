# [Funzione di ripartizione]{.text-red}

La funzione di ripartizione viene introdotta per aiutarci a studiare le distribuzioni di probabilità.

> **Definizione:**
> Sia $f(X)$ una variabile aleatoria, allora si dice funzione di ripartizione $F$ della variabile aleatoria $f(X)$ la funzione
> $F: \mathbb{R} \to \mathbb{R}$
> definita come la somma dei valori precedenti o uguali a un dato valore associato a un blocco della partizione:
> $$
> F(x) = \sum_{k \le 1,2,\dots,n} f(X_k)
> $$

In pratica devi prendere la probabilità del primo blocco, poi la probabilità del primo e del secondo e sommarle, poi la probabilità del primo, del secondo e del terzo e sommarle, ... e così via.

Quindi la funzione di ripartizione diventa una funzione "a scalini".

**Esempio:** Nel caso visto del lancio di un dado avremo che la funzione di ripartizione assume i valori:

$F(X_1) = 1/6$
$F(X_2) = 1/6 + 1/6 = 2/6$
$F(X_3) = 1/6 + 1/6 + 1/6 = 3/6$
$F(X_4) = 1/6 + 1/6 + 1/6 + 1/6 = 4/6$
$F(X_5) = 1/6 + 1/6 + 1/6 + 1/6 + 1/6 = 5/6$
$F(X_6) = 1/6 + 1/6 + 1/6 + 1/6 + 1/6 + 1/6 = 6/6$

Come tabella avremo:

| $X$ | 1 | 2 | 3 | 4 | 5 | 6 |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| $Pr$ | $1/6$ | $1/6$ | $1/6$ | $1/6$ | $1/6$ | $1/6$ |
| $F(X_i)$ | $1/6$ | $2/6$ | $3/6$ | $4/6$ | $5/6$ | $6/6$ |

***

Vediamo su un altro esempio già sviluppato: estrarre una carta da un mazzo di 40.
Eventi (ordiniamo secondo la vincita):

- $X_1$ uscita di una diversa dalle seguenti: perdita di 1 euro (27 carte)
- $X_2$ uscita di una carta di denari diversa dall'asso: vincita di 0 euro (9 carte)
- $X_3$ uscita di un asso diverso dall'asso di denari: vincita di 1 euro (3 carte)
- $X_4$ uscita dell'asso di denari: vincita di 21 euro (1 carta)

Probabilità:
- $p_1$ = probabilità di uscita di una carta diversa dalle seguenti = $27/40$
- $p_2$ = probabilità di uscita di carta di denari non asso = $9/40$
- $p_3$ = probabilità di uscita di asso non di denari = $3/40$
- $p_4$ = probabilità di uscita dell'asso di denari = $1/40$

La funzione di ripartizione sarà:

| $X$ | -1 | 0 | 1 | 21 |
| :---: | :---: | :---: | :---: | :---: |
| $Pr$ | $27/40$ | $9/40$ | $3/40$ | $1/40$ |
| $F(X_i)$ | $27/40$ | $36/40$ | $39/40$ | $40/40$ |

***

La funzione di ripartizione verrà usata in quei problemi in cui si chiede di calcolare valori inferiori o superiori a un valore prefissato.