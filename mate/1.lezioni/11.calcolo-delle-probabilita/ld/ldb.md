# Speranza matematica

Consideriamo ora il concetto fondamentale base della teoria dei giochi: la speranza matematica.

**Definizione:**
La speranza matematica è il prodotto fra la somma da vincere e la probabilità di vincerla.

Per indicarla useremo il simbolo:

$$
\textcolor{red}{\text{Speranza matematica}} = \textcolor{red}{Sp}
$$

essendo $S$ la somma da vincere e $p$ la probabilità di vincerla.

Concettualmente la **speranza matematica** è il valore che vincerei (o perderei) in media in ogni puntata se il gioco continuasse indefinitamente.

---

Vediamo di capire meglio il concetto cominciando dagli esempi della pagina precedente:

**1) Lancio una moneta: se esce testa vinco $1\text{€}$, se esce croce perdo $1\text{€}$**

- Speranza matematica per "uscita di testa":
  somma da vincere $1\text{€}$
  probabilità di uscita di testa = $1/2$
  **Speranza matematica:**
  $$
  S_1 p_1 = 1\text{€} \cdot 1/2 = 0,5\text{€}
  $$

- Speranza matematica per "uscita di croce":
  somma da vincere $-1\text{€}$ (negativo perché lo perdo)
  probabilità di uscita di croce = $1/2$
  **Speranza matematica:**
  $$
  S_2 p_2 = -1\text{€} \cdot 1/2 = -0,5\text{€}
  $$

- **Speranza matematica totale:**
  $$
  S_1 p_1 + S_2 p_2 = + 0,5\text{€} - 0,5\text{€} = 0
  $$
  La speranza matematica del gioco è nulla: cioè se giocassi all'infinito dovrei aspettarmi di vincere in media $0\text{€}$ per ogni puntata. Ho messo gli indici ad $S$ perché vi sono giochi in cui è diversa la somma che si può vincere o perdere.

---

**2) Estraggo una carta da un mazzo di 40: se esce un asso vinco $5\text{€}$, se esce una figura vinco $1\text{€}$**

- Speranza matematica per "uscita di un asso":
  somma da vincere $5\text{€}$
  probabilità di uscita di un asso = $4/40 = 1/10$
  **Speranza matematica:**
  $$
  S_1 p_1 = 5\text{€} \cdot 1/10 = 0,5\text{€}
  $$

- Speranza matematica per "uscita di una figura":
  somma da vincere $1\text{€}$
  probabilità di uscita di figura = $12/40 = 3/10$
  **Speranza matematica:**
  $$
  S_2 p_2 = 1\text{€} \cdot 3/10 = 0,30\text{€}
  $$

- **Speranza matematica totale:**
  $$
  S_1 p_1 + S_2 p_2 = + 0,50\text{€} + 0,30\text{€} = 0,80\text{€}
  $$
  La speranza matematica del gioco è $0,80\text{€}$ circa: cioè se giocassi all'infinito dovrei aspettarmi di vincere in media 80 centesimi di euro per ogni giocata. Evidentemente è un gioco sbilanciato, nel senso che posso solo vincere e non perdere.

---

**3) Gioco $1\text{€}$ al Superenalotto: posso vincere $100.000.000$ (cento milioni) di euro se indovino i sei numeri.**

Calcolo la mia speranza matematica del gioco:

- Speranza matematica per "uscita di 6 numeri":
  somma da vincere $100.000.000\text{€}$
  **Probabilità di uscita di 6 numeri in ordine:**
  $$
  1/90 \cdot 1/89 \cdot 1/88 \cdot 1/87 \cdot 1/86 \cdot 1/85 = 1/448.282.533.600
  $$
  Però i miei numeri possono uscire in qualunque modo: se esce il numero $5$ può uscire sia al primo che al terzo posto, per me è indifferente, quindi devo considerare le possibili sestine cioè le permutazioni semplici su $6$ oggetti:
  **Permutazioni su 6 oggetti:**
  $$
  p_6 = 6! = 6 \cdot 5 \cdot 4 \cdot 3 \cdot 2 \cdot 1 = 720
  $$

  **Probabilità di uscita di 6 numeri in ordine qualunque:**
  $$
  720 / 448.282.533.600 = 0,000000002
  $$
  (circa 2 possibilità su un miliardo!)

  **Speranza matematica:**
  $$
  S_1 p_1 = 100.000.000\text{€} \cdot 0,000000002 = + 0,20\text{€}
  $$

- Speranza matematica per "non uscita di tutti e sei i numeri":
  somma da vincere $-1\text{€}$ (negativo perché lo perdo)
  probabilità di non uscita di tutti e sei i numeri = probabilità contraria = $1 - 0,000000002 = 0,999999998$
  **Speranza matematica:**
  $$
  S_2 p_2 = - 1\text{€} \cdot 0,999999998 = - 0,999999998\text{€}
  $$

- **Speranza matematica totale:**
  $$
  S_1 p_1 + S_2 p_2 \approx + 0,20\text{€} - 0,999999998\text{€} \approx -0,80\text{€}
  $$
  La speranza matematica del gioco è $-0,80\text{€}$ circa: cioè se giocassi $1\text{€}$ all'infinito, tra vincite e perdite, dovrei aspettarmi di perdere in media $0,80\text{€}$ per ogni giocata; cioè per vincere una volta cento milioni dovrei in media giocare cinquecento milioni in puntate in cui perdo (puntando un euro per volta).

> **Nota:** Capito perché non gioco al Superenalotto? Lo stato prende tutte le giocate, ne restituisce come premio il $20\%$ al vincitore e ne incamera l'$80\%$ (mia speranza matematica). È giusto dire che il gioco gestito dallo stato è il sistema di far pagare le tasse a chi non sa la matematica.