# Prodotto fra serie secondo Cauchy

Consideriamo le serie

$$
a_1 + a_2 + a_3 + a_4 + \dots
$$

e

$$
b_1 + b_2 + b_3 + b_4 + \dots
$$

Definiamo serie prodotto (secondo Cauchy) delle due serie date la serie:

$$
(a_1 b_1) + (a_1 b_2 + a_2 b_1) + (a_1 b_3 + a_2 b_2 + a_3 b_1) + (a_1 b_4 + a_2 b_3 + a_3 b_2 + a_4 b_1) + \dots
$$

In pratica moltiplico ogni termine della prima serie per ogni termine della seconda:

$$
a_1 b_1 + a_1 b_2 + a_1 b_3 + a_1 b_4 \dots + a_2 b_1 + a_2 b_2 + a_2 b_3 + a_2 b_4 \dots + a_3 b_1 + a_3 b_2 + a_3 b_3 + a_3 b_4 \dots
$$

Ma li associo in questo modo: dentro le parentesi, che rappresentano ognuna un termine della serie, gli indici delle $$a$$ aumentano fino a raggiungere l'indice del termine del prodotto mentre gli indici delle $$b$$ diminuiscono:

Ad esempio nel quarto termine:
$$
(a_1 b_4 + a_2 b_3 + a_3 b_2 + a_4 b_1)
$$
gli indici di $$a$$ aumentano da $$1$$ a $$4$$ mentre gli indici di $$b$$ diminuiscono da $$4$$ a $$1$$.

Nel decimo termine gli indici di $$a$$ aumenteranno da $$1$$ a $$10$$ mentre quelli di $$b$$ diminuiranno da $$10$$ a $$1$$:

$$
(a_1 b_{10} + a_2 b_9 + a_3 b_8 + a_4 b_7 + a_5 b_6 + a_6 b_5 + a_7 b_4 + a_8 b_3 + a_9 b_2 + a_{10} b_1)
$$

Vale il teorema di Abel:
se convergono sia le serie componenti che la serie prodotto allora la somma della serie prodotto è uguale al prodotto delle somme delle serie componenti.

> Per finire possiamo dire (senza dimostrarlo) che il prodotto di due serie assolutamente convergenti è ancora una serie assolutamente convergente, mentre il prodotto di due serie semplicemente convergenti non sempre è convergente: cioè il prodotto conserva la convergenza assoluta, ma non la convergenza semplice.