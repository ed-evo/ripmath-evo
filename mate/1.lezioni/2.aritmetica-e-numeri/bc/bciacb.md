# Criterio di scomposizione per 3

> **Un numero è divisibile per $$3$$ se sommando le sue cifre si ottiene un multiplo di $$3$$**

Esempio: $$27$$ è multiplo di $$3$$ perché $$2+7=9$$ e $$9$$ è multiplo di $$3$$

Il procedimento è iterativo (posso ripeterlo), cioè se ottengo un numero troppo grande per capire se è un numero multiplo di $$3$$ posso ripetere il procedimento su quello che ho ottenuto.

Esempio: $$432.198.732$$ è multiplo di $$3$$ perché $$4+3+2+1+9+8+7+3+2 = 39$$ e $$39$$ è multiplo di $$3$$ perché $$3+9=12$$ e $$12$$ è multiplo di $$3$$ perché $$1+2 = 3$$

Esempio: $$434.198.732$$ non è multiplo di $$3$$ perché $$4+3+4+1+9+8+7+3+2 = 41$$ e $$41$$ non è multiplo di $$3$$ perché $$4+1=5$$ e $$5$$ non è multiplo di $$3$$

---

**Come procedere:**

Una volta individuato che un numero è divisibile per $$3$$, per estrarne il fattore si procede da sinistra a destra dividendo ogni cifra (o gruppo di cifre) per $$3$$ fino ad arrivare all'ultima.

Esempio: ho il numero [$$135$$]{.text-red}

È divisibile per $$3$$ perché sommando le sue cifre ottengo $$1+3+5=9$$ e $$9$$ è multiplo di $$3$$.

Comincio da sinistra: ho $$\textcolor{red}{1}$$, siccome $$1$$ non è divisibile per $$3$$ considero due cifre cioè $$\textcolor{red}{13}$$; siccome $$\textcolor{red}{13:3 \text{ dà } 4 \text{ con resto di } 1}$$ scrivo $$4$$, poi metto mentalmente $$1$$ davanti all'altra cifra: ottengo $$\textcolor{red}{15}$$; siccome $$\textcolor{red}{15:3=5}$$ allora scrivo $$5$$ ed ho ottenuto:

$$
\begin{array}{r|l}
135 & 3 \\
45 & 3 \\
15 & 3 \\
5 & 
\end{array}
$$

$$
\textcolor{red}{135 = 3 \times 45 =}
$$

Ripeto il procedimento sul [$$45$$]{.text-red} perché, essendo $$4+5=9$$, è ancora divisibile per $$3$$.

Comincio da sinistra: ho $$\textcolor{red}{4}$$, siccome $$\textcolor{red}{4:3 \text{ dà } 1 \text{ con resto } 1}$$, scrivo $$3$$ e metto mentalmente $$1$$ davanti all'altra cifra: ottengo $$\textcolor{red}{15}$$; siccome $$\textcolor{red}{15:3=5}$$ allora scrivo $$5$$ ed ho ottenuto:

$$
\textcolor{red}{135 = 3 \times 45 = 3 \times 3 \times 15 =}
$$

Ripeto il procedimento sul [$$15$$]{.text-red} perché essendo $$\textcolor{red}{1+5=6}$$ è ancora divisibile per $$3$$.

Comincio da sinistra: ho $$\textcolor{red}{1}$$, siccome $$1$$ non è divisibile per $$3$$ considero $$15$$; siccome $$\textcolor{red}{15:3=5}$$ allora scrivo $$5$$ ed ho ottenuto:

$$
\textcolor{red}{135 = 3 \times 45 = 3 \times 3 \times 15 = 3 \times 3 \times 3 \times 5}
$$

[$$5$$]{.text-red} non è divisibile per $$3$$ quindi mi fermo.

---

Di solito queste operazioni, senza svilupparle come sopra, si fanno a parte su un pezzetto del foglio come vedi qui sopra a destra.