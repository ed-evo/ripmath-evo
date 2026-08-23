# Ordine delle operazioni

Abbiamo le possibili operazioni

1. passaggio al complementare
corrisponde alla negazione fra elementi logici (not)

$$
\begin{array}{|c|c|}
\hline
a & à \\
\hline
\textcolor{red}{1} & \textcolor{red}{0} \\
\textcolor{red}{0} & \textcolor{red}{1} \\
\hline
\end{array}
$$

$$
0'=1
$$
$$
1'=0
$$

---

2. somma
Non corrisponde alla normale somma fra numeri naturali, ma è somma fra elementi logici (vel; or logico)

$$
\begin{array}{|c|c|c|}
\hline
\textcolor{red}{+} & 0 & 1 \\
\hline
0 & \textcolor{red}{0} & \textcolor{red}{1} \\
1 & \textcolor{red}{1} & \textcolor{red}{1} \\
\hline
\end{array}
$$

$$
0 + 0 = 0
$$
$$
0 + 1 = 1
$$
$$
1 + 0 = 1
$$
$$
1 + 1 = 1
$$

---

3. prodotto
Non corrisponde al normale prodotto fra numeri naturali, ma è un prodotto fra elementi logici (and logico)

$$
\begin{array}{|c|c|c|}
\hline
\textcolor{red}{\cdot} & 0 & 1 \\
\hline
0 & \textcolor{red}{0} & \textcolor{red}{0} \\
1 & \textcolor{red}{0} & \textcolor{red}{1} \\
\hline
\end{array}
$$

$$
0 \cdot 0 = 0
$$
$$
0 \cdot 1 = 0
$$
$$
1 \cdot 0 = 0
$$
$$
1 \cdot 1 = 1
$$

---

Sorge il problema, quando abbiamo un'espressione di quale operazione va fatta prima e quale dopo se il testo non è chiaro: seguiremo questo ordine:
prima va fatto il passaggio al complementare, poi il prodotto ed infine la somma e, per variare l'ordine, useremo le parentesi come facciamo nelle normali espressioni numeriche
vediamo qualche esempio io faccio tutti i passaggi, ma si può abbreviare (nei passaggi, se fermi il mouse su ogni risultato, potrai vedere quale proprietà ho applicato per trovarlo)

---

Calcolare, per quanto possibile l'espressione:

$$
a + a \cdot b + b + a \cdot b + b' =
$$
$$
= a + (a \cdot b + a \cdot b) + (b + b') =
$$
$$
= a + a \cdot b + 1 =
$$
$$
= a \cdot (1 + b) + 1 =
$$
$$
= a \cdot 1 + 1 =
$$
$$
= a + 1 =
$$
$$
= 1
$$

---

Calcolare, per quanto possibile, l'espressione

$$
a + à \cdot (a + b) + b \cdot (à + b) + a \cdot b' + b' \cdot (a + b') =
$$
$$
= a + à \cdot a + à \cdot b + b \cdot à + b^2 + a \cdot b' + b' \cdot a + b'^2 =
$$
$$
= a + 1 + (à \cdot b + b \cdot à) + b + (a \cdot b' + b' \cdot a) + b' =
$$
$$
= a + 1 + (à \cdot b + à \cdot b) + b + (a \cdot b' + a \cdot b') + b' =
$$
$$
= a + 1 + à \cdot b + b + a \cdot b' + b' =
$$
$$
= a + 1 + (à \cdot b + b) + (a \cdot b' + b') =
$$
$$
= a + 1 + b \cdot (à + 1) + b' \cdot (à + 1) =
$$
$$
= a + 1 + b \cdot 1 + b' \cdot 1 =
$$
$$
= a + 1 + b + b' =
$$
$$
= a + 1 + (b + b') =
$$
$$
= a + 1 + 1 =
$$
$$
= a + (1 + 1) =
$$
$$
= a + 1 =
$$
$$
= 1
$$

> **Nota:** Siccome $$1$$ sommato a qualunque espressione dà sempre $$1$$, potevamo calcolare il risultato sia di questa che della precedente, già dal passaggio in cui è comparso l'$$1$$; però ho continuato per farti vedere i vari passaggi.