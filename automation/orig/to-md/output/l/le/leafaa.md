# [Il problema delle prove ripetute]{.text-red}

Uno dei problemi che capitano frequentemente nel calcolo di probabilità è quello di calcolare la probabilità che un dato evento capiti $$k$$ volte su $$n$$ prove effettuate.

Esempio: **Lanciando $$5$$ volte un dado che probabilità ho di ottenere $$3$$ volte il valore $$3$$?**

***

Supponiamo, per iniziare, che mi interessi l'ordine di uscita e quindi il mio problema diventi, ad esempio: **Lanciando $$5$$ volte un dado che probabilità ho di ottenere prima due volte $$3$$, poi due numeri diversi ed infine ancora il valore $$3$$?**

In questo caso il problema è elementare: deve uscire $$3$$ e poi deve uscire $$3$$ e poi deve uscire un numero diverso da $$3$$ e poi deve uscire un numero diverso da $$3$$ e poi deve uscire $$3$$.

$$
\textcolor{red}{3 \ 3 \ a \ a \ 3}
$$

con $$a$$ che indica un altro valore (diverso da $$3$$).

Abbiamo quindi le probabilità:
- $$\frac{1}{6}$$ probabilità di uscita del valore $$3$$
- $$\frac{5}{6} = 1 - \frac{1}{6}$$ probabilità di uscita di un numero diverso da $$3$$ (probabilità contraria dell'uscita del numero $$3$$)

Applico il teorema della probabilità composta ed ottengo:

$$
\text{Probabilità} = \frac{1}{6} \cdot \frac{1}{6} \cdot \frac{5}{6} \cdot \frac{5}{6} \cdot \frac{1}{6} = \left(\frac{1}{6}\right)^3 \cdot \left(\frac{5}{6}\right)^2 = \left(\frac{1}{6}\right)^3 \cdot \left(\frac{5}{6}\right)^{5-3}
$$

Più in generale potremo scrivere:

$$
\textcolor{red}{\text{Probabilità} = p^k \cdot (1-p)^{n-k}}
$$

***

Ora torniamo al nostro problema: **Lanciando $$5$$ volte un dado che probabilità ho di ottenere $$3$$ volte il valore $$3$$?**

Se non mi interessa l'ordine di uscita allora ho le [10 possibilità](leafaaa.html):

$$
\textcolor{red}{333aa \quad 33a3a \quad 3a33a \quad a333a \quad 33aa3}
$$
$$
\textcolor{red}{3a3a3 \quad a33a3 \quad aa333 \quad a3a33 \quad 3aa33}
$$

quindi avremo che le nostre probabilità sono:

$$
\textcolor{red}{\text{Probabilità} = \binom{5}{3} \cdot \left(\frac{1}{6}\right)^3 \cdot \left(\frac{5}{6}\right)^{5-3}}
$$

***

Passando al caso generale potremo dire che la probabilità che un dato evento capiti $$k$$ volte su $$n$$ prove effettuate sarà:

$$
\textcolor{red}{\text{Probabilità} = \binom{n}{k} \cdot p^k \cdot (1-p)^{n-k}}
$$

***

Se ora consideriamo il problema per i vari valori di $$k = 1, 2, 3, \dots, n$$ allora avremo una variabile aleatoria (chiamiamola col nuovo termine $$S_n$$ di possibili valori $$X_1, X_2, X_3, \dots, X_n$$) la cui rappresentazione sarà la distribuzione cercata.