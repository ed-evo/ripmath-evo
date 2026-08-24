# [Calcolo del montante calcolato dopo k anni dopo l'ultimo versamento]{.text-red}

Invece di calcolare il montante all'atto dell'ultimo versamento (rendita posticipata) oppure un anno dopo l'ultimo versamento (rendita anticipata) è possibile calcolare il valore di tale montante in un qualunque periodo di tempo successivo, ad esempio dopo $k$ anni: per fare ciò sarà sufficiente spostare in avanti nel tempo di $k$ anni il valore del montante calcolato all'atto dell'ultimo versamento, cioè, semplicemente:

$$
S_{n,i} \cdot u^k
$$

od anche

$$
S_{n,i} \cdot (1+i)^k
$$

Possiamo rappresentarlo in questo modo sulla retta dei tempi:

> i numeri sotto la retta indicano i periodi, meno l'ultimo che indica la fine dell'anno

Per utilizzare le tavole finanziarie è possibile rendere la formula più semplice da calcolare.

Sviluppiamo la formula:

$$
S_{n,i} \cdot (1+i)^k = \frac{(1+i)^n - 1}{i} \cdot (1+i)^k
$$

Moltiplico:

$$
= \frac{(1+i)^{n+k} - (1+i)^k}{i}
$$

Aggiungo e tolgo $1$ al numeratore:

$$
= \frac{(1+i)^{n+k} - 1 - (1+i)^k + 1}{i}
$$

Ora separo le frazioni: davanti alla seconda metto in evidenza il meno (quindi cambio di segno i termini sopra):

$$
= \frac{(1+i)^{n+k} - 1}{i} - \frac{(1+i)^k - 1}{i}
$$

Il primo termine è il montante di una rendita posticipata di durata $n+k$ anni $S_{n+k,i}$.
Il secondo termine è il montante di una rendita posticipata di durata $k$ anni $S_{k,i}$, quindi scrivo:

$$
= S_{n+k,i} - S_{k,i}
$$

E raccogliendo:

$$
S_{n,i} \cdot (1+i)^k = S_{n+k,i} - S_{k,i}
$$

Questa formula sarà più semplice da usare perché leggendo i due valori sulle tavole sarà sufficiente fare una sottrazione per ottenere il risultato invece di dover fare una moltiplicazione.

> **Esempio:**
> Trovare il montante di una rendita anticipata di $20$ anni di rata $1200\text{ €}$ al tasso $i = 0,025$ calcolato $10$ anni dopo l'ultimo versamento.
>
> **Dati:**
> $R = 1200\text{ €}$
> $i = 0,025$
> $n = 20$
> $k = 10$
>
> Cerco sulle tavole "montante della rendita unitaria posticipata. valori di $S_{n,i}$":
> - per $i=0,025$ e $n+k=20+10=30$ trovo il valore $43,90270316$
> - per $i=0,025$ e $k=10$ trovo il valore $11,20338177$
>
> Quindi avrò il montante:
> $(43,90270316 - 11,20338177) \cdot 1200\text{ €} = 39239,185668\text{ €}$
> che arrotondo a $\text{€ } 39239,19$