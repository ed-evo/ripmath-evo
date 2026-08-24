# [Scadenza comune]{.text-red}

Troviamo la data **scadenza comune** in cui devo pagare una somma fissata per estinguere più debiti.
Vediamo il metodo su un esercizio.

Devo pagare le somme di $2000 \text{ €}$ fra $2$ anni e $5000 \text{ €}$ fra $6$ anni.
Mi accordo con il creditore per estinguere il debito con un pagamento di $6800 \text{ €}$ al tasso dell' $1,75\%$.
In che data dovrò versare i $6800 \text{ €}$?

**Dati:**
**$debito_1 = 2000$   $tempo_1 = 2 \text{ anni}$**
**$debito_2 = 5000$   $tempo_2 = 6 \text{ anni}$**
**tasso di sconto $= 1,75\% = 0,0175$   saldo $6800 \text{ €}$**

troviamo la data del pagamento $t_x$

In questi caso conviene riportare tutti i dati alla data odierna ed impostare l'equazione.
Traccio la retta dei tempi.

Imposto l'equazione:
**$6800 \cdot 1,0175^{-t_x} = 2000 \cdot 1,0175^{-2} + 5000 \cdot 1,0175^{-6}$**

divido tutto per $100$
**$68 \cdot 1,0175^{-t_x} = 20 \cdot 1,0175^{-2} + 50 \cdot 1,0175^{-6}$**

$$
1,0175^{-t_x} = \frac{20 \cdot 1,0175^{-2} + 50 \cdot 1,0175^{-6}}{68}
$$

leggo sulle tavole e sostituisco:

$$
= \frac{20 \cdot 0,96589777 + 50 \cdot 0,90114254}{68} = 0,946692388
$$

per calcolare $t_x$ passo ai logaritmi:

**$\log 1,0175^{-t_x} = \log 0,946692388$**

**$-t_x \log 1,0175 = \log 0,946692388$**

**$t_x \text{CoLog } 1,0175 = \log 0,946692388$**

$$
t_x = \frac{\log 0,946692388}{\text{CoLog } 1,0175}
$$

calcolo il logaritmo al numeratore:

**$\log 0,946692388 =$**

La caratteristica è $\overline{1}$ essendo il mio numero compreso fra $0$ ed $1$.
Per calcolare la mantissa cerco $946692388$; tale valore è compreso fra $9466$ e $9467$.

$$
9466 \rightarrow 97617
$$
$$
9467 \rightarrow 97621
$$

Di fianco ai due risultati trovi il numero $4$ che corrisponde alla differenza fra i due valori della mantissa, mentre la differenza fra il mio valore e quello minore è:
**$9466,924 - 9466 = 0,924$** (approssimo alla terza cifra decimale).

Nella tabella del $4$ cerco i numeri $9$ $2$ $4$ spostando per ogni risultato la virgola:

$$
9 \rightarrow 3,6
$$
$$
2 \rightarrow 0,08
$$
$$
4 \rightarrow 0,016
$$

quindi:

$$
\begin{aligned}
97617 &+ \\
3,6 &+ \\
0,08 &+ \\
0,016 &= \\
\hline
97620,696 &
\end{aligned}
$$

quindi scrivo:
**$\log 0,946692388 = \overline{1},97620696$**

Calcolo il Cologaritmo al denominatore.
leggo sulle tavole logaritmiche a $7$ decimali:
**$\text{CoLog } 1,0175 = - \log 1,0175 =$**

Essendo:
**$\log 1,0175 = 0,0075344$**

avrò:
**$\text{CoLog } 1,0175 = - \log 1,0175 = -(0,0075344) = \overline{1},9924656$**

> Nel calcolo preferisco utilizzare quello con il meno davanti.

Ora posso fare la divisione e trovare $t_x$:

$$
t_x = \frac{\log 0,946692388}{\text{CoLog } 1,0175} = \frac{\overline{1},97620696}{-(0,0075344)} = \frac{-1 + 0,97620696}{-0,0075344} = \frac{-0,0237904}{-0,0075344} = \frac{0,0237904}{0,0075344} = 3,157570609
$$

Sono $3$ anni e $158$ (approssimato) millesimi di anno: per vedere a quanti giorni corrispondono i decimali faccio la proporzione (uso l'anno commerciale di $360$ giorni):
**$158 : 1000 = x : 360$**

risolvo la proporzione:

$$
x = \frac{360 \cdot 158}{1000} = 20,88
$$

che approssimiamo a $21$ giorni.
Quindi dovrò eseguire il pagamento di $6800$ euro fra $3$ anni e $21$ giorni.