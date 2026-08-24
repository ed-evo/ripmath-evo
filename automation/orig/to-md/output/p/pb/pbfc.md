# [I numeri binari]{.text-red}

Costruiamo una tabella trovando i numeri binari corrispondenti ai numeri decimali

| Decimale | numero successivo | binario |
| :--- | :--- | :--- |
| $0$ | $0$ | $0$ |
| $1$ | $0 + 1 = 1$ | $1$ |
| $2$ | $1 + 1 = 10$ | $10$ |
| $3$ | $10 + 1 = 11$ | $11$ |
| $4$ | $11 + 1 = 100$ | $100$ |
| $5$ | $100 + 1 = 101$ | $101$ |
| $6$ | $101 + 1 = 110$ | $110$ |
| $7$ | $110 + 1 = 111$ | $111$ |
| $8$ | $111 + 1 = 1000$ | $1000$ |
| $9$ | $1000 + 1 = 1001$ | $1001$ |
| $10$ | $1001 + 1 = 1010$ | $1010$ |
| $...$ | $...$ | $...$ |

Costruisco la tabella semplicemente contando ($1+1+1...$). Costruiamola assieme fino al numero $10$, poi è sempre la stessa cosa: aggiungiamo $1$ ogni volta e calcoliamo il risultato

0. partiamo da $0$ e quindi scrivo $0$

1. aggiungo $1$ cioè $0+1 = 1$ e quindi scrivo $1$

2. aggiungo $1$ cioè $1+1$ siccome ottengo $2$ e $2$ non appartiene al sistema devo andare a capo cioè prendo una coppia e $0$ unità
   $$
   1+1 = 10
   $$
   > **Nota:** ogni volta che ottengo $2$ devo scrivere $0$ e riportare un'unità nello spazio prima dello $0$. L'operazione è rappresentata come:
   > $\textcolor{green}{1 \leftarrow}$ (riporto)
   > $\textcolor{red}{1}$
   > $\textcolor{red}{+ 1}$
   > $\text{---}$
   > $\textcolor{red}{10}$

3. aggiungo $1$ cioè $10+1 = 11$ e quindi scrivo $11$

4. aggiungo $1$ cioè $11+1$ allora sommando $1+1$ ottengo $0$ e riporto di $1$, poi devo sommare l'$1$ riportato ed ottengo $0$ e riporto di $1$ cioè $11+1 = 100$
   > **Nota:** la somma in colonna con i riporti:
   > $\textcolor{green}{1 \leftarrow 1 \leftarrow}$
   > $\textcolor{red}{11}$
   > $\textcolor{red}{+ 1}$
   > $\text{---}$
   > $\textcolor{red}{100}$

5. aggiungo $1$ cioè $100+1 = 101$ ottengo $101$

6. aggiungo $1$ cioè $101+1$ devo sommare $1+1$ e quindi scrivo $0$ e riporto di $1$, sommo il riporto con lo $0$ ed ottengo $110$

7. aggiungo $1$ cioè $110+1 = 111$ ottengo $111$

8. aggiungo $1$ cioè $111+1$ allora sommando $1+1$ ottengo $0$ e riporto di $1$, poi devo sommare l'$1$ riportato ed ottengo $0$ e riporto di $1$, poi devo sommare ancora l'$1$ riportato ed ottengo $0$ e riporto di $1$ cioè $111+1 = 1000$
   > **Nota:** la somma in colonna con i riporti:
   > $\textcolor{green}{1 \leftarrow 1 \leftarrow 1 \leftarrow}$
   > $\textcolor{red}{111}$
   > $\textcolor{red}{+ 1}$
   > $\text{---}$
   > $\textcolor{red}{1000}$

9. aggiungo $1$ cioè $1000+1 = 1001$ ottengo $1001$

10. aggiungo $1$ cioè $1001+1$ devo sommare $1+1$ e quindi scrivo $0$ e riporto di $1$, sommo il riporto con lo $0$ ed ottengo $1010$

eccetera......

***

È fondamentale conoscere perfettamente a memoria i valori dei vari numeri binari composti da un solo $1$ e dagli zeri, cioè delle potenze del $2$ almeno fino a $1024$: saranno le basi per il calcolo binario.

Per ricordartele meglio osserva che il numero degli zeri del numero binario corrisponde all'esponente del $2$ nel sistema decimale:

$$
1_{10} = 2^0_{10} = 1_2
$$
$$
2_{10} = 2^1_{10} = 10_2
$$
$$
4_{10} = 2^2_{10} = 100_2
$$
$$
8_{10} = 2^3_{10} = 1000_2
$$
$$
16_{10} = 2^4_{10} = 10000_2
$$
$$
32_{10} = 2^5_{10} = 100000_2
$$
$$
64_{10} = 2^6_{10} = 1000000_2
$$
$$
128_{10} = 2^7_{10} = 10000000_2
$$
$$
256_{10} = 2^8_{10} = 100000000_2
$$
$$
512_{10} = 2^9_{10} = 1000000000_2
$$
$$
1024_{10} = 2^{10}_{10} = 10000000000_2
$$

***

In informatica, siccome $1024$ è vicino a $1000$, si considera il prefisso kilo per il valore $1024$, quindi avremo, ad esempio parlando di bytes:

$1 \text{ Kilobyte} = 1024 \text{ bytes}$
$1 \text{ Megabyte} = 1024 \times 1024 = 1024^2 = 1048576 \text{ bytes}$
$1 \text{ Gigabyte} = 1024 \times 1024 \times 1024 = 1024^3 = 1073741824 \text{ bytes}$
$1 \text{ Terabyte} = 1024 \times 1024 \times 1024 \times 1024 = 1024^4 = 1099511627776 \text{ bytes}$