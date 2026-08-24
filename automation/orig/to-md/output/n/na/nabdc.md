# [Passaggio dal logaritmo al numero]{.text-red}

Dopo aver trasformato i numeri in logaritmi ed aver fatto i calcoli dobbiamo tornare a scrivere il numero risultante nella sua normale forma decimale, quindi, come si dice, dovremo fare l'**antilogaritmo**.
Anche qui vediamo 2 esempi diversi: uno con i logaritmi a $5$ decimali ed uno con i logaritmi a $7$ decimali.

- [Mantissa a 5 decimali](#1)
- [Mantissa a 7 decimali](#2)

<a name="1"></a>
Cerchiamo
$\text{AntiLog } 3,512736 =$

Essendo la caratteristica $3$ il valore dell'antilogaritmo sarà compreso fra $1/1000$ e $1/100$, quindi con $3$ zeri prima della prima cifra significativa.
[Non ho capito bene](nabdca.html)

La mia mantissa a $5$ decimali è compreso fra i numeri:

$$
51268 \to 3256
$$
$$
51282 \to 3257
$$

> **Nota:** Di fianco ai due risultati trovi il numero $14$ che corrisponde alla differenza fra i due valori della mantissa.

Se poi guardi la pagina dei logaritmi trovi una tabellina con intestazione $14$ come riprodotto qui di seguito: questi sono i risultati della proporzione ed a $5,6$ corrisponde $4$.

| Indice | Valore |
| :--- | :--- |
| **14** | |
| 1 | $1,4$ |
| 2 | $2,8$ |
| 3 | $4,2$ |
| 4 | $5,6$ |
| 5 | $7,0$ |
| 6 | $8,4$ |
| 7 | $9,8$ |
| 8 | $11,2$ |
| 9 | $12,6$ |

$$
51273,6 - 51268 = 5,6
$$

$$
3256 + 0,4 = 32564
$$
> **Nota:** la virgola è solamente virtuale e serve a sapere come fare la somma.

Quindi:
$\text{AntiLog } 3,512376 = 0,0032564$
> **Nota:** Ho messo $3$ zeri prima della prima cifra significativa del numero trovato.

Oppure:
$$
10^{4,512376} = 0,0032564
$$

***

<a name="2"></a>
Nei calcoli finanziari cercherai sempre di fare i calcoli in modo da poter utilizzare i logaritmi a $7$ decimali.
Cerchiamo, come esempio:
$\text{AntiLog } 4,01099495 =$

Essendo la caratteristica $4$ l'antilogaritmo avrà $5$ cifre prima della virgola.
Leggo sulle tavole il valore inferiore e superiore della mantissa:

$$
0109780 \to 10256
$$
$$
0110204 \to 10257
$$
> **Nota:** La differenza è $424$.

$$
0109949,5 - 0109780 = 169,5
$$

Cerco la tabellina con intestazione $424$ e vedo che il decimale più vicino a $169,5$ è $4$ e quindi:

$$
10256 + 0,4 = 102564
$$
> **Nota:** la virgola è virtuale e ti indica solamente dove fare la somma.

E quindi:
$\text{AntiLog } 4,01099495 = 10256,4$
Oppure:
$$
10^{4,01099495} = 10256,4
$$

> **Nota:** se lo facevo con la calcolatrice ottenevo $\text{AntiLog } 4,01099495 = 10256,39999984$, anche qui con un margine di errore molto piccolo.