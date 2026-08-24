# Riduzione di più crediti ad una scadenza posteriore

In questo caso ci riferiamo ad una scadenza successiva alle varie scadenze delle somme considerate.
Dobbiamo determinare l'importo: vediamo come procedere su un esempio.

Devo pagare allo stesso creditore una somma di $5000\text{ €}$ fra $2\text{ anni}$ e $6000\text{ €}$ fra $4\text{ anni}$.
Mi accordo con il creditore per un unico pagamento fra $8\text{ anni}$ al tasso del $3,25\%$.
Quanto dovrò pagare fra $8\text{ anni}$?

Dati:
- **debito $1 = 5000$** &nbsp; **tempo $1 = 2\text{ anni}$**
- **credito $2 = 6000$** &nbsp; **tempo $2 = 4\text{ anni}$**
- **tasso di sconto $= 3,25\% = 0,0325$** &nbsp; **tempo $3 = 8\text{ anni}$**

Trovare il valore a $8\text{ anni}$, chiamiamolo **$V_8$**.

Traccio la retta dei tempi.

Devo portare avanti nel tempo sia la somma di $5000,00\text{ €}$ per $6\text{ anni}$ che la somma di $6000,00\text{ €}$ per $4\text{ anni}$ al tasso $i = 0,0325$, quindi:

$$
V_8 = 5000,00 \cdot u^6 + 6000,00 \cdot u^4 = 5000,00 \cdot 1,0325^6 + 6000,00 \cdot 1,0325^4
$$

Leggo sulle tavole finanziarie i valori per $u^n$:

$$
1,0325^6 = 1,21154727
$$
$$
1,0325^4 = 1,13647593
$$

$$
V_8 = 5000,00 \cdot 1,21154727 + 6000,00 \cdot 1,13647593 = 12876,59193
$$

Approssimo a **$12876,59\text{ €}$**.
Quindi dovrò pagare fra $8\text{ anni}$ l'importo di $\text{€ } 12876,59$.

> Ho eseguito l'esercizio con due crediti, avrei potuto farlo con crediti e debiti assieme ed anche con $3, 4, \dots$ crediti/debiti; basterà semplicemente sommare più termini.