# [Criterio di scomposizione per 11]{.text-red}

Qui cominciamo ad avere un criterio un po' complicato, ma serve spesso, quindi.....

> **Un numero è divisibile per $$11$$ se, sommando fra loro le cifre di posto pari e fra loro le cifre di posto dispari, la differenza fra le due somme è $$0$$ oppure $$11$$ od un multiplo di $$11$$**

Esempio: prendo il numero $$2354781$$
per contare il posto io comincio da destra (per abitudine perché puoi iniziare sia da destra che da sinistra e non cambia niente)

| cifra | $$2$$ | $$3$$ | $$5$$ | $$4$$ | $$7$$ | $$8$$ | $$1$$ |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| posto | settimo | sesto | quinto | quarto | terzo | secondo | primo |

i posti pari sono il secondo, il quarto, il sesto
i posti dispari sono il primo, il terzo, il quinto, il settimo
sommo le cifre di posto pari $$8+4+3 = 15$$
sommo le cifre di posto dispari $$1+7+5+2 = 15$$
Faccio la differenza: $$15-15=0$$ quindi il numero $$2354781$$ è divisibile per $$11$$

secondo esempio: considero il numero $$418$$
prima cifra $$8$$, seconda cifra $$1$$, terza cifra $$4$$.
sommo le cifre di posto dispari $$8+4 = 12$$
di posto pari c'è solo $$1$$
Faccio la differenza: $$12-1 = 11$$ quindi il numero $$418$$ è divisibile per $$11$$

terzo esempio: considero il numero $$3418$$
prima cifra $$8$$, seconda cifra $$1$$, terza cifra $$4$$, quarta cifra $$3$$.
sommo le cifre di posto dispari $$8+4 = 12$$
sommo le cifre di posto dispari $$1+3 = 4$$
Faccio la differenza: $$12-4 = 8$$ quindi il numero $$3418$$ non è divisibile per $$11$$

***

## Come procedere:
una volta individuato che un numero è divisibile per $$11$$ per estrarne il fattore si procede da sinistra a destra dividendo ogni cifra (o gruppo di cifre) per $$11$$ fino ad arrivare all'ultima cifra

Esempio: ho il numero [$$2299$$]{.text-red}
È divisibile per $$11$$ perché la somma delle cifre di posto pari ($$9+2=11$$) è uguale alla somma delle cifre di posto dispari ($$9+2=11$$) e quindi la differenza delle due somme è $$0$$

comincio da sinistra: ho [$$22$$]{.text-red};
siccome [$$22:11=2$$]{.text-red} scrivo $$2$$, poi passo all'altra cifra
ho [$$9$$]{.text-red};
siccome [$$9:11 \text{ dà } 0 \text{ con resto di } 9$$]{.text-red} allora scrivo $$0$$, poi metto mentalmente $$9$$ davanti all'altra cifra ottengo [$$99$$]{.text-red};
siccome [$$99:11=9$$]{.text-red} allora scrivo $$9$$ ed ho ottenuto:

$$
[2299 = 11 \times 209]{.text-red}
$$

ripeto il procedimento sul [$$209$$]{.text-red} perché la somma delle cifre di posto dispari è [$$11$$]{.text-red} mentre la cifra di posto dispari è [$$0$$]{.text-red} e la differenza vale $$11$$
comincio da sinistra: ho [$$20:11 \text{ dà } 1 \text{ con resto di } 9$$]{.text-red} allora scrivo $$1$$ e metto mentalmente $$9$$ davanti all'altra cifra ottengo [$$99$$]{.text-red};
siccome [$$99:11=9$$]{.text-red} allora scrivo $$9$$ ed ho ottenuto:

$$
[2299 = 11 \times 209 = 11 \times 11 \times 19]{.text-red}
$$

[$$19$$]{.text-red} non è divisibile per $$11$$ senza resto, quindi mi fermo

***

Di solito queste operazioni, senza svilupparle come sopra, si fanno a parte su un pezzetto del foglio come vedi qui sopra a destra.