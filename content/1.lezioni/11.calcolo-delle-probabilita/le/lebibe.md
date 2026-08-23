# [studio intuitivo della funzione data]{.text-red}

Studiamo la funzione

$$
F(x) = \begin{cases} 0 & \text{se } x < 0 \\ 1 - e^{-\alpha x} & \text{se } x \ge 0 \end{cases}
$$

seguiamo alcuni punti dello schema proposto in analisi

- Determinazione del campo di esistenza:
nel nostro caso **il campo di esistenza è tutto $$\mathbb{R}$$** perché per $$x \le 0$$ la nostra funzione vale sempre zero e quindi è sempre definita; anche per $$x > 0$$ è sempre definita (cioè per ogni valore reale sostituito ad $$x$$ la mia funzione assume un valore reale)

- Determinazione del tipo di funzione:
È una funzione formata da due diverse funzioni: per **$$x \le 0$$** è una funzione costante (e quindi **il grafico si riduce all'asse negativo delle $$x$$**) e questa non c'è bisogno di studiarla; per $$x > 0$$ invece è la differenza fra una funzione costante ed una di tipo esponenziale (d'ora in avanti ci limiteremo a studiare solamente il ramo della funzione $$x > 0$$)

- Intersezione con gli assi:
Se considero l'asse $$y$$, cioè pongo $$x = 0$$ allora la funzione vale:
$$
y = 1 - e^{-\alpha x} = 1 - e^{-\alpha(0)} = 1 - e^{0} = 1 - 1 = 0
$$
Quindi **$$O \equiv (0,0)$$ è un punto della funzione**

- Valori agli estremi del campo di esistenza e asintoto orizzontale:
I punti in questione sono dati dai tre valori per le $$x$$:
  - $$x = -\infty$$ in tal caso la funzione vale $$0$$
  - $$x = 0$$ abbiamo già visto che allora $$y = 0$$
  - $$x = +\infty$$ in tal caso abbiamo:
  $$
  \lim_{x \to +\infty} [1 - e^{-\alpha \cdot (x)}] \to 1 - e^{-\infty} = 1 - 0 = 1
  $$
  allora **$$y = 1$$ è l'asintoto orizzontale** (retta a cui tende la funzione senza mai raggiungerla)

- Positività e negatività, crescenza e decrescenza:
Considero la funzione:
$$
y = 1 - e^{-\alpha x}
$$
e ne faccio la derivata:
$$
y' = 0 + \alpha e^{-\alpha x}
$$
$$
y' = \alpha e^{-\alpha x}
$$
$$y'$$ è sempre positiva perché $$\alpha$$ è un termine positivo e l'esponenziale è definito sempre positivo; essendo la derivata prima sempre positiva **la funzione è sempre crescente**

- Derivata seconda e concavità:
faccio la derivata seconda:
$$
y'' = -\alpha^{2} e^{-\alpha x}
$$
essendovi il meno davanti ad un quadrato la derivata è sempre negativa, quindi la **concavità è rivolta verso il basso**

a destra la rappresentazione grafica