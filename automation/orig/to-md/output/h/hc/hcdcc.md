# [Collegamento ai sistemi di numerazione]{.text-red}

Non posso procedere senza fare notare i profondi collegamenti che esistono fra i resti modulo $$p$$ e i sistemi di numerazione in base $$p$$.

> Dopo sviluppati i sistemi di numerazione sostituire la pagina con un link ai sistemi di numerazione

Vedremo, nei sistemi di numerazione, che, per trovare le cifre di un numero in base qualunque $$p$$ (sistema di numerazione in base $$p$$) basterà calcolarne i successivi resti della divisione del numero per $$p$$ e poi considerare tali resti in ordine inverso: ciò deriva dal fatto che consideriamo i numeri in forma polinomiale e quindi, dividendo un numero per $$p$$ troviamo i successivi termini con le potenze di $$p$$.

Due esempi serviranno a rendere meglio l'idea.

Prima un esempio banale: consideriamo il numero decimale
$$34567$$
in forma polinomiale posso scriverlo come
$$
3 \cdot 10^4 + 4 \cdot 10^3 + 5 \cdot 10^2 + 6 \cdot 10^1 + 7 \cdot 10^0
$$
Se ora divido questo numero per $$10$$ ottengo che tutte le potenze del $$10$$ diminuiscono di $$1$$ e l'ultimo termine è il resto:

quoziente = $$3 \cdot 10^3 + 4 \cdot 10^2 + 5 \cdot 10^1 + 6 \cdot 10^0$$
resto = $$\textcolor{red}{7}$$

dividendo ancora per $$10$$ avrò:
quoziente = $$3 \cdot 10^2 + 4 \cdot 10^1 + 5 \cdot 10^0$$
resto = $$\textcolor{red}{6}$$

dividendo ancora per $$10$$ avrò:
quoziente = $$3 \cdot 10^1 + 4 \cdot 10^0$$
resto = $$\textcolor{red}{5}$$

divido ancora per $$10$$ ed ho:
quoziente = $$3 \cdot 10^0$$
resto = $$\textcolor{red}{4}$$

divido ancora per $$10$$ ed ho:
quoziente = $$0$$
resto = $$\textcolor{red}{3}$$

Se scrivo i resti in ordine inverso ottengo il numero in base $$10$$ (naturalmente coincide con il numero di partenza):
$$34567$$

Proviamo ora a scrivere lo stesso numero in base $$5$$:
$$(34567)_{10} = ( \dots )_5$$

Divido il numero per $$5$$ una prima volta:
quoziente = $$6913$$ resto = $$\textcolor{red}{2}$$

divido per $$5$$:
quoziente = $$1382$$ resto = $$\textcolor{red}{3}$$

divido per $$5$$:
quoziente = $$276$$ resto = $$\textcolor{red}{2}$$

divido per $$5$$:
quoziente = $$55$$ resto = $$\textcolor{red}{1}$$

divido per $$5$$:
quoziente = $$11$$ resto = $$\textcolor{red}{0}$$

divido per $$5$$:
quoziente = $$2$$ resto = $$\textcolor{red}{1}$$

divido per $$5$$:
quoziente = $$0$$ resto = $$\textcolor{red}{2}$$

Quindi ottengo:
$$(34567)_{10} = (2101232)_5$$

Equivale a dire che
$$
3 \cdot 10^4 + 4 \cdot 10^3 + 5 \cdot 10^2 + 6 \cdot 10^1 + 7 \cdot 10^0 = 2 \cdot 5^6 + 1 \cdot 5^5 + 0 \cdot 5^4 + 1 \cdot 5^3 + 2 \cdot 5^2 + 3 \cdot 5^1 + 2 \cdot 5^0
$$

Visti questi legami potremo anche considerare le tabelle di Cayley (che faremo nella prossima pagina) come le tavole pitagoriche per la somma e per la moltiplicazione dei vari sistemi di numerazione, però ristrette al solo numero finale.