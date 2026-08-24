# [Conoscendo il termine di posto h e la ragione trovare il termine di posto k]{.text-red}

In pratica è l'inverso di quello che abbiamo fatto nella pagina precedente:
Vediamo, anche qui, sullo stesso esempio della pagina precedente, come procedere. 
Supponiamo di conoscere il terzo termine $a_3 = 12$ e la ragione $2$, troviamo il settimo termine $a_7 = 192$.

Per ottenere il settimo termine partendo dal terzo devo moltiplicare il terzo per la ragione per $4$ volte ($7-3$), quindi:

$$
a_7 = a_3 \cdot 2^4 = 12 \cdot 16 = 192
$$

Adesso facciamo lo stesso ragionamento con due termini generici, in modo da avere la formula generale.

Supponiamo di conoscere il termine $a_k$ e la ragione $q$. Supponiamo, per semplicità, anche $k < n$. 
Allora per ottenere $a_k$ partendo da $a_h$, dovrò moltiplicare tale termine per la ragione $q$ elevata all'esponente $(n-k)$.

$$
\textcolor{red}{a_n = a_k \cdot q^{(n-k)}}
$$

> **Nota:** siccome se $k > n$ la differenza $n-k$ diventa negativa la formula è comunque valida: infatti, essendo $n-k$ un esponente negativo significa che devo moltiplicare per l'inverso, cioè dividere, come vedi nell'esempio successivo.

### Esempio
Anche qui riferiamoci allo stesso esempio della pagina precedente. 
Dato il sesto termine $a_6 = 96$ e la ragione $q = 2$, trovare il secondo termine $a_2$.

Applico la formula:

$$
a_2 = a_6 \cdot 2^{2-6} = 96 \cdot 2^{-4} = \frac{96}{2^4} = \frac{96}{16} = 6
$$

quindi $a_2 = 6$