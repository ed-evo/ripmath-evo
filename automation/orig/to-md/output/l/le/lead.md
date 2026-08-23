# [Varianza]{.text-red}

Per poter avere una buona rappresentatività del valore medio è necessario introdurre un indice che misuri di quanto il valore medio si discosta dai dati, cioè la **varianza**.

Consideriamo una variabile aleatoria:

| $$X$$ | $$X_1$$ | $$X_2$$ | $$X_3$$ | $$\dots$$ | $$X_n$$ |
| :--- | :---: | :---: | :---: | :---: | :---: |
| $$Pr$$ | $$p_1$$ | $$p_2$$ | $$p_3$$ | $$\dots$$ | $$p_n$$ |

Se $$m = M(X)$$ è il suo valore medio, esso sarà rappresentativo se si discosta poco dai valori della variabile, cioè se gli scarti

$$
M(X) - X_k
$$

sono abbastanza piccoli, quindi dovrei fare una nuova tabella con gli scarti.
Però, invece di considerare tutti i valori degli scarti devo cercare di concentrare il significato in un dato unico: la **varianza**, che misurerà la dispersione dei valori attorno al valore medio.

**Definizione**
**La varianza è il valore medio del quadrato degli scarti, cioè la somma dei quadrati degli scarti per le relative probabilità.**
Viene indicata con i simboli $$\text{Var}(X)$$ oppure $$\sigma^2(X)$$.

$$
\sigma^2(X) = M(X-m)^2 = \textcolor{red}{\sum_{k=1}^{n}} (M(X) - X_k)^2 p_k
$$

> **Nota:** Se vuoi approfondire e vedere tutto il ragionamento per trovare la formula, consulta la documentazione dedicata.

La varianza indica la concentrazione, quindi:
- Minore è la varianza e maggiore è la concentrazione dei dati attorno al valore medio.
- Maggiore è la varianza e maggiore è la dispersione dei dati attorno al valore medio.

Prendiamo il solito esempio del lancio di un dado:

| $$X$$ | $$1$$ | $$2$$ | $$3$$ | $$4$$ | $$5$$ | $$6$$ |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| $$Pr$$ | $$1/6$$ | $$1/6$$ | $$1/6$$ | $$1/6$$ | $$1/6$$ | $$1/6$$ |

Avremo:
$$
M(X) = 1 \cdot 1/6 + 2 \cdot 1/6 + 3 \cdot 1/6 + 4 \cdot 1/6 + 5 \cdot 1/6 + 6 \cdot 1/6 = 21/6 = 7/2 = 3,5
$$

Quindi la varianza sarà:
$$
\sigma^2(X) = (1 - 7/2)^2 \cdot 1/6 + (2 - 7/2)^2 \cdot 1/6 + (3 - 7/2)^2 \cdot 1/6 + (4 - 7/2)^2 \cdot 1/6 + (5 - 7/2)^2 \cdot 1/6 + (6 - 7/2)^2 \cdot 1/6
$$

$$
= (-5/2)^2 \cdot 1/6 + (-3/2)^2 \cdot 1/6 + (-1/2)^2 \cdot 1/6 + (1/2)^2 \cdot 1/6 + (3/2)^2 \cdot 1/6 + (5/2)^2 \cdot 1/6
$$

$$
= (25/4) \cdot 1/6 + 9/4 \cdot 1/6 + 1/4 \cdot 1/6 + 1/4 \cdot 1/6 + 9/4 \cdot 1/6 + 25/4 \cdot 1/6
$$

$$
= 25/24 + 9/24 + 1/24 + 1/24 + 9/24 + 25/24 = 70/24 = 35/12
$$

cioè la varianza dei dati attorno al valore medio in questo caso vale circa $$3$$.

Per il calcolo pratico della varianza spesso è utile la formula:
$$
\sigma^2(X) = M(X^2) - m^2 = M(X^2) - [M(X)]^2
$$

> **Dimostrazione:**
> $$
> \sigma^2(X) = M(X-m)^2 = M(X^2 - 2mX + m^2) = M(X^2) - M(2mX) + M(m^2)
> $$
> Sappiamo che $$m$$ è una costante quindi $$M(m^2) = m^2$$.
> Utilizziamo poi la considerazione che il valore medio del prodotto di una variabile casuale per una costante è uguale alla costante per il valore medio della variabile casuale:
> $$
> = M(X^2) - 2mM(X) + m^2
> $$
> essendo $$m = M(X)$$
> $$
> = M(X^2) - 2M(X)M(X) + [M(X)]^2 = M(X^2) - 2[M(X)]^2 + [M(X)]^2 = M(X^2) - [M(X)]^2
> $$

Applichiamo la formula all'esempio precedente:
$$
m = M(X) = 1 \cdot 1/6 + 2 \cdot 1/6 + 3 \cdot 1/6 + 4 \cdot 1/6 + 5 \cdot 1/6 + 6 \cdot 1/6 = 21/6
$$

$$
M(X^2) = 1 \cdot 1/6 + 4 \cdot 1/6 + 9 \cdot 1/6 + 16 \cdot 1/6 + 25 \cdot 1/6 + 36 \cdot 1/6 = 1/6 + 4/6 + 9/6 + 16/6 + 25/6 + 36/6 = 91/6
$$

$$
m^2 = 441/36
$$

quindi:
$$
\sigma^2(X) = M(X^2) - [M(X)]^2 = M(X^2) - m^2 = 91/6 - 441/36 = 105/36 = 35/12
$$

Come avevamo già trovato.