Data la variabile aleatoria

| $$\textcolor{red}{X_i}$$ | $$\textcolor{red}{X_1}$$ | $$\textcolor{red}{X_2}$$ | $$\textcolor{red}{X_3}$$ | $$\dots$$ | $$\textcolor{red}{X_n}$$ |
| :---: | :---: | :---: | :---: | :---: | :---: |
| $$\textcolor{red}{f}$$ | $$\textcolor{red}{p_1}$$ | $$\textcolor{red}{p_2}$$ | $$\textcolor{red}{p_3}$$ | $$\dots$$ | $$\textcolor{red}{p_n}$$ |

$$\textcolor{red}{M(X)}$$ sarà una media rappresentativa se i valori della media si scostano poco da quelli della variabile, cioè se sono abbastanza piccoli gli scarti (differenze fra la media ed i valori):

$$\textcolor{red}{M(X)-X_1, M(X)-X_2, M(X)-X_3, \dots, M(X)-X_n}$$

Però usare una tabella è poco pratico: più utile è concentrare i risultati in un unico numero; il calcolo più intuitivo sembra essere di farne il valore medio.

$$\textcolor{red}{\text{Valore medio} = [M(X)-X_1] p_1 + [M(X)-X_2] p_2 + [M(X)-X_3] p_3 + \dots + [M(X)-X_n] p_n}$$

Eseguo le moltiplicazioni:

$$
\textcolor{red}{= M(X)p_1 - X_1p_1 + M(X)p_2 - X_2p_2 + M(X)p_3 - X_3p_3 + \dots + M(X)p_n - X_np_n}
$$

Raggruppo i termini positivi e negativi:

$$
\textcolor{red}{= M(X)p_1 + M(X)p_2 + M(X)p_3 + \dots + M(X)p_n - X_1p_1 - X_2p_2 - X_3p_3 \dots - X_np_n}
$$

Tra quelli positivi raccolgo $$M(X)$$, fra quelli negativi raccolgo il segno meno:

$$
\textcolor{red}{= M(X)[p_1 + p_2 + p_3 + \dots + p_n] - (X_1p_1 + X_2p_2 + X_3p_3 \dots + X_np_n)}
$$

Ora so che la somma delle probabilità vale $$1$$ e che la somma dopo il segno meno è il valore medio $$M(X)$$, quindi ottengo:

$$
\textcolor{red}{= M(X) - M(X) = 0}
$$

Quindi la scelta della media degli scarti **non va bene**.

Allora prendiamo i **quadrati degli scarti**, perché essendo tutti positivi, facendone la somma non otterremo un valore nullo.
Prendo i quadrati degli scarti:

$$\textcolor{red}{[M(X)-X_1]^2, [M(X)-X_2]^2, [M(X)-X_3]^2, \dots, [M(X)-X_n]^2}$$

La media sarà:

$$
\textcolor{red}{\sigma^2(X) = [M(X)-X_1]^2 p_1 + [M(X)-X_2]^2 p_2 + [M(X)-X_3]^2 p_3 + \dots + [M(X)-X_n]^2 p_n}
$$

Di solito si scrive nella forma più compatta:

$$
\textcolor{red}{\sigma^2(X) = \sum_{k=1}^{n} (M(X) - X_k)^2 p_k}
$$