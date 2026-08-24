# Criterio di scomposizione per 5

> **Un numero è divisibile per $5$ se termina per $0$ oppure per $5$**

Esempi:
- $275$ è multiplo di $5$ perché termina per $5$
- $432.198.732$ non è multiplo di $5$ perché termina per $2$
- $434.198.730$ è multiplo di $5$ perché termina per $0$

---

Come procedere:
una volta individuato che un numero è divisibile per $5$ per estrarne il fattore si procede da sinistra a destra dividendo ogni cifra (o gruppo di cifre) per $5$ fino ad arrivare all'ultima cifra

Esempio: ho il numero [$875$]{.text-red}
È divisibile per $5$ perché termina per $5$
comincio da sinistra: ho [$8$]{.text-red};
siccome [$\textcolor{red}{8:5 \text{ dà } 1 \text{ con resto di } 3}$] scrivo $1$, poi metto mentalmente $3$ davanti all'altra cifra ottengo [$37$]{.text-red};
siccome [$\textcolor{red}{37:5 \text{ dà } 7 \text{ con resto di } 2}$] allora scrivo $7$, poi metto mentalmente $2$ davanti all'altra cifra ottengo [$25$]{.text-red};
siccome [$\textcolor{red}{25:5=5}$] allora scrivo $5$ ed ho ottenuto

$$
875 = 5 \times 175 =
$$

$$
\begin{array}{r|l}
875 & 5 \\
175 & 5 \\
35 & 5 \\
7 & 
\end{array}
$$

ripeto il procedimento sul [$175$]{.text-red} perché finendo [$5$]{.text-red} è ancora divisibile per $5$
comincio da sinistra: ho [$1$]{.text-red}, siccome $1$ non è divisibile per $5$ considero $17$; siccome [$\textcolor{red}{17:5 \text{ dà } 3 \text{ con resto di } 2}$] allora scrivo $3$ e metto mentalmente $2$ davanti all'altra cifra ottengo [$25$]{.text-red};
siccome [$\textcolor{red}{25:5=5}$] allora scrivo $5$ ed ho ottenuto

$$
875 = 5 \times 175 = 5 \times 5 \times 35 =
$$

ripeto il procedimento sul [$35$]{.text-red} perché finendo [$5$]{.text-red} è ancora divisibile per $5$
siccome [$\textcolor{red}{35:5=7}$] allora scrivo $7$ ed ho ottenuto

$$
875 = 5 \times 175 = 5 \times 5 \times 35 = 5 \times 5 \times 5 \times 7
$$

[$7$]{.text-red} non è divisibile per $5$ senza resto, quindi mi fermo

---

> **Nota:** Di solito queste operazioni, senza svilupparle come sopra, si fanno a parte su un pezzetto del foglio come vedi qui sopra a destra.