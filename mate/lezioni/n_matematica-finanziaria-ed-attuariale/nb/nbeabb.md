# Scadenza media

Troviamo ora la data **scadenza media** in cui devo pagare il totale delle somme dei debiti ad un tasso fisso: in tal caso la scadenza sarà sempre intermedia fra le varie scadenze considerate, da cui il nome.

Vediamo il metodo su un esercizio:

Devo pagare le somme di $3000\text{ €}$ fra $2\text{ anni}$ e $6000\text{ €}$ fra $6\text{ anni}$.
Mi accordo con il creditore per estinguere il debito con un pagamento di $9000\text{ €}$; tasso fisso $i = 2\%$.
In che data dovrò versare i $9000\text{ €}$?

Dati:
- $\text{debito}_1 = 3000, \text{ tempo}_1 = 2\text{ anni}$
- $\text{debito}_2 = 6000, \text{ tempo}_2 = 6\text{ anni}$
- $\text{saldo } 9000\text{ €}, i = 2\% = 0,02$

troviamo la data del versamento del saldo $t_x$

Conviene riportare tutti i dati alla data odierna ed impostare l'equazione.
Traccio la retta dei tempi.

Imposto l'equazione:

$$
9000 \cdot v^{-t_x} = 3000 \cdot 1,02^{-2} + 6000 \cdot 1,02^{-6}
$$

divido tutto per $1000$:

$$
9 \cdot 1,02^{-t_x} = 3 \cdot 1,02^{-2} + 6 \cdot 1,02^{-6}
$$

$$
1,02^{-t_x} = \frac{3 \cdot 1,02^{-2} + 6 \cdot 1,02^{-6}}{9}
$$

leggo sulle tavole e sostituisco:

$$
= \frac{3 \cdot 0,96116878 + 6 \cdot 0,88797138}{9} = 0,912370513
$$

per calcolare $t_x$ passo ai logaritmi:

$$
\text{Log } 1,02^{-t_x} = \text{Log } 0,912370513
$$

$$
-t_x \text{ Log } 1,02 = \text{Log } 0,912370513
$$

$$
t_x \text{ CoLog } 1,02 = \text{Log } 0,912370513
$$

$$
t_x = \frac{\text{Log } 0,912370513}{\text{CoLog } 1,02}
$$

calcolo il logaritmo al numeratore:

$$
\text{Log } 0,912370513 = 
$$

La caratteristica è $\bar{1}$, essendo il mio numero compreso fra $0$ ed $1$.
Per calcolare la mantissa cerco $912370513$; tale valore è compreso fra $9123$ e $9124$.

$$
9123 \rightarrow 96014
$$
$$
9124 \rightarrow 96019
$$

Di fianco ai due risultati trovi il numero $5$ che corrisponde alla differenza fra i due valori della mantissa mentre la differenza fra il mio valore e quello minore è:

$$
9123,705 - 9123 = 0,705
$$
(approssimo alla terza cifra decimale)

Nella tabella del $5$ cerco i numeri $7\ 0\ 5$ spostando per ogni risultato la virgola:

$$
7 \rightarrow 3,5
$$
$$
0 \rightarrow 0,00
$$
$$
5 \rightarrow 0,025
$$

quindi:

$$
\begin{aligned}
96014 &+ \\
3,5 &+ \\
0,00 &+ \\
0,025 &= \\
\hline
96017,525
\end{aligned}
$$

quindi scrivo:

$$
\text{Log } 0,912370513 = \bar{1},96017525
$$

Calcolo il Cologaritmo al denominatore:
leggo sulle tavole logaritmiche a $7$ decimali:

$$
\text{CoLog } 1,02 = -\text{Log } 1,02 = 
$$

Essendo:

$$
\text{Log } 1,02 = 0,0086002
$$

avrò:

$$
\text{CoLog } 1,02 = -\text{Log } 1,02 = -(0,0086002) = \bar{1},9913998
$$

> Nel calcolo preferisco utilizzare quello con il meno davanti.

Ora posso fare la divisione e trovare $t_x$:

$$
t_x = \frac{\text{Log } 0,912370513}{\text{CoLog } 1,02} = \frac{\bar{1},96017525}{-(0,0086002)} = \frac{-1 + 0,9601752}{-0,0086002} = \frac{-0,0398248}{-0,0075344} = \frac{0,0398248}{0,0075344} = 5,285729454
$$

Sono $5$ anni e $286$ (approssimato) millesimi di anno: per vedere a quanti giorni corrispondono i decimali faccio la proporzione (uso l'anno commerciale di $360$ giorni):

$$
286 : 1000 = x : 360
$$

risolvo la proporzione:

$$
x = \frac{360 \cdot 286}{1000} = 102,96
$$

che approssimiamo a $103$ giorni, cioè $3$ mesi (di $30$ giorni) e $13$ giorni.
Quindi dovrò eseguire il pagamento di $6800$ euro fra $5$ anni $6$ mesi e $13$ giorni.