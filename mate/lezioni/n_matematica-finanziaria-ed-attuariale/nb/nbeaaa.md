# [Riduzione di più crediti ad una scadenza anteriore]{.text-red-darken-1}

In questo caso anticipo il pagamento pagando un unico importo.
Dobbiamo determinare l'importo: vediamo come procedere su un esempio.

Devo pagare allo stesso creditore le somme di $5000$ € fra $10$ anni e $6000$ € fra $8$ anni.
Mi accordo con il creditore per estinguere i debiti con un unico versamento fra $3$ anni.
Quanto dovrò pagare conteggiando sconti composti al $2\%$?

**Dati:**
- **debito1** = $5000$ &nbsp; **tempo1** = $10$ anni
- **debito2** = $6000$ &nbsp; **tempo2** = $8$ anni
- **tasso di sconto** = $2\% = 0,02$ &nbsp; **tempo3** = $3$ anni

Trovare il valore a $3$ anni, chiamiamolo $V_3$.

Traccio la retta dei tempi.

Devo riportare indietro nel tempo la somma di $5000,00$ € per $7$ anni e la somma di $6000,00$ € per $5$ anni al tasso $i = 0,02$, quindi:

$$
V_3 = 5000,00 \cdot v^7 + 6000,00 \cdot v^5 = 5000,00 \cdot 1,02^{-7} + 6000,00 \cdot 1,02^{-5}
$$

Leggo sulle tavole finanziarie i valori per $v^n$:
$$
1,02^{-7} = 0,87056018
$$
$$
1,02^{-5} = 0,90573081
$$

$$
V_3 = 5000,00 \cdot 0,87056018 + 6000,00 \cdot 0,90573081 = 9787,18576
$$

Approssimo a $9787,19$ €.
Quindi fra $3$ anni estinguerò il debito pagando $9787,19$ €.

***

Ho eseguito l'esercizio con due debiti, avrei potuto farlo con $3, 4, \dots$; basterà sommare più termini.

***

> **Nota:**
> Potrei inoltre riportare il debito:
> - all'epoca $0$ moltiplicando tutti i termini della somma per $v^3$ oppure solo il risultato;
> - all'epoca $1$ moltiplicando tutti i termini della somma per $v^2$ oppure solo il risultato;
> - all'epoca $2$ moltiplicando tutti i termini della somma per $v$ oppure solo il risultato;
>
> - all'epoca $4$ moltiplicando tutti i termini della somma per $u$ oppure solo il risultato;
> - all'epoca $5$ moltiplicando tutti i termini della somma per $u^2$ oppure solo il risultato;
> - all'epoca $6$ moltiplicando tutti i termini della somma per $u^3$ oppure solo il risultato;
>
> In questo modo posso sapere quanto dovrei pagare ad ogni possibile scadenza e scegliere il pagamento per me più conveniente dal punto di vista della mia disponibilità finanziaria, oppure, riportando tutto all'epoca $0$ posso valutare la mia situazione finanziaria attuale.