# Ricerca dell'epoca dell'importo

Conoscendo il valore da pagare possiamo trovare la scadenza. Vediamo anche qui come fare con un esercizio.

Ho un credito di $4000 \text{ €}$ da riscuotere fra $3$ anni ed un altro di $5000 \text{ €}$ da riscuotere fra $8$ anni: cedo tali crediti ad una banca che mi accredita immediatamente la somma di $3000 \text{ €}$ e mi verserà poi l'importo di $5800 \text{ euro}$. Avendo concordato un tasso dell'$1,5\%$, quando mi sarà versato tale importo?

**Dati:**
- $\text{credito}_1 = 4000\text{€} \quad 3 \text{ anni}$
- $\text{credito}_2 = 5000\text{€} \quad 8 \text{ anni}$
- $\text{anticipo} = 3000\text{€} \quad 0 \text{ anni}$
- $\text{saldo} = 5800\text{€} \quad \text{tempo} = x$
- $\text{tasso } i = 1,5\% = 0,015$

Troviamo il tempo $x$ in cui la banca effettuerà il saldo.

Riporto tutti i dati alla data odierna. Traccio la retta dei tempi.

Imposto l'equazione:

$$
3000 + 5800 \cdot v^{-x} = 4000 \cdot v^{-3} + 5000 \cdot v^{-8}
$$

$$
3000 + 5800 \cdot 1,015^{-x} = 4000 \cdot 1,015^{-3} + 5000 \cdot 1,015^{-8}
$$

$$
5800 \cdot 1,015^{-x} = 4000 \cdot 1,015^{-3} + 5000 \cdot 1,015^{-8} - 3000
$$

Divido tutto per $100$:

$$
58 \cdot 1,015^{-x} = 40 \cdot 1,015^{-3} + 50 \cdot 1,015^{-8} - 30
$$

$$
1,015^{-x} = \frac{40 \cdot 1,015^{-3} + 50 \cdot 1,015^{-8} - 30}{58}
$$

Leggo sulle tavole e sostituisco:

$$
1,015^{-x} = \frac{40 \cdot 0,95631699 + 50 \cdot 0,88771112 - 30}{58} = 0,907555786
$$

Per calcolare $x$ passo ai logaritmi:

$$
\log 1,015^{-x} = \log 0,907555786
$$

$$
-x \log 1,015 = \log 0,907555786
$$

$$
x \text{ CoLog } 1,015 = \log 0,907555786
$$

$$
x = \frac{\log 0,907555786}{\text{CoLog } 1,015}
$$

Calcolo il logaritmo al numeratore:

$$
\log 0,907555786 =
$$

La caratteristica è $\overline{1}$ essendo il mio numero compreso fra $0$ ed $1$. Per calcolare la mantissa cerco $907555786$; tale valore è compreso fra $9075$ e $9076$:

- $9075 \rightarrow 95785$
- $9076 \rightarrow 95789$

Di fianco ai due risultati trovi il numero $4$ che corrisponde alla differenza fra i due valori della mantissa, mentre la differenza fra il mio valore e quello minore è:

$$
9075,558 - 9075 = 0,558
$$
(approssimo alla terza cifra decimale)

Nella tabella del $4$ cerco i numeri $5 \ 5 \ 8$ spostando per ogni risultato la virgola:

- $5 \rightarrow 2,0$
- $5 \rightarrow 0,20$
- $8 \rightarrow 0,032$

Quindi:

$$
\begin{aligned}
95785 &+ \\
2,0 &+ \\
0,20 &+ \\
0,032 &= \\
\hline
95787,232
\end{aligned}
$$

Quindi scrivo:

$$
\log 0,907555786 = \overline{1},95787232
$$

Calcolo il Cologaritmo al denominatore leggendo sulle tavole logaritmiche a $7$ decimali:

$$
\text{CoLog } 1,015 = -\log 1,015 =
$$

Essendo:

$$
\log 1,015 = 0,0064660
$$

Avrò:

$$
\text{CoLog } 1,015 = -\log 1,015 = -(0,0064660) = \overline{1},9935340
$$

> **Nota:** Nel calcolo preferisco utilizzare quello con il meno davanti.

Ora posso fare la divisione e trovare $x$:

$$
x = \frac{\log 0,907555786}{\text{CoLog } 1,015} = \frac{\overline{1},95787232}{-(0,0064660)} = \frac{-1 + 0,95787232}{-0,0064660} = \frac{-0,04212768}{-0,0064660} = \frac{0,04212768}{0,0064660} = 6,515261367
$$

Sono $6$ anni e $515$ (approssimato) millesimi di anno: per vedere a quanti giorni corrispondono i decimali faccio la proporzione (uso l'anno commerciale di $360$ giorni):

$$
515 : 1000 = x : 360
$$

Risolvo la proporzione:

$$
x = \frac{360 \cdot 515}{1000} = 185,4
$$

Che approssimiamo a $185$ giorni, cioè $6$ mesi e $5$ giorni. Quindi la banca eseguirà il pagamento di $5800 \text{ euro}$ fra $6$ anni, $6$ mesi e $5$ giorni.