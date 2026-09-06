# QUOZIENTE DI POTENZE

> <span class="text-purple-600">**AVVERTENZA:** purtroppo non so come scrivere le frazioni in linguaggio "html" quindi userò come notazione $a/b$ utilizzando le parentesi, quando utile, anche se non necessarie nella notazione di frazione, per comprendere meglio il testo. Ad esempio scriverò $(ab)/(bc)$ piuttosto che $ab/bc$ e significherà $ab$ fratto $bc$. Scriverò le parentesi con un altro colore per indicarti che nella forma normale di frazione puoi non metterle.</span>

Se devo dividere
$$
2^8 : 2^5
$$
poiché
$$
2^8 = 2 \times 2 \times 2 \times 2 \times 2 \times 2 \times 2 \times 2
$$
e
$$
2^5 = 2 \times 2 \times 2 \times 2 \times 2
$$
otterrai
$$
2^8 / 2^5 = \textcolor{cyan}{(}2 \times 2 \times 2 \times 2 \times 2 \times 2 \times 2 \times 2\textcolor{cyan}{)} / \textcolor{cyan}{(}2 \times 2 \times 2 \times 2 \times 2\textcolor{cyan}{)} =
$$

> ricordando che nelle frazioni puoi togliere sopra e sotto gli stessi fattori <span class="text-purple-600">(solo quando il numeratore e il denominatore sono in forma di prodotto)</span> restano solo tre $2$ al numeratore (sopra)

$$
= 2 \times 2 \times 2 = 2^3 = 2^{8-5}
$$

Quindi per fare il quoziente quando hanno la stessa base basta sottrarre gli esponenti. Ora rendiamo il risultato più generale possibile usando le lettere:

$$
a^r / a^s = \textcolor{cyan}{(}a \cdot a \cdot \dots \cdot a\textcolor{cyan}{)} / \textcolor{cyan}{(}a \cdot a \cdot \dots \cdot a\textcolor{cyan}{)} =
$$

> dalle $r$ lettere di sopra devo togliere le $s$ lettere di sotto <span class="text-purple-600">(ciò potrò farlo solo se $r$ è più grande di $s$)</span> resterà quindi

$$
= a \cdot a \cdot \dots \cdot a = a^{r-s}
$$

Per trovare la regola basta leggere il primo termine e l'ultimo termine dell'uguaglianza:
se $r > s$ allora $a^r / a^s = a^{r-s}$.

> <span class="text-purple-600">**REGOLA:** il quoziente di due potenze con la stessa base è una potenza che ha per base la stessa base e per esponente la differenza degli esponenti.</span>

Se hai bisogno di aiuto per leggere la regola fai click [qui](aa3a.html).

Però in matematica quando si trova una regola essa dev'essere resa più generale possibile; noi abbiamo trovato una regola che vale solo quando il primo esponente $r$ è maggiore del secondo esponente $s$. Quindi ora occorre vedere cosa si può fare quando $r$ è uguale a $s$ ed anche quando $r$ è minore di $s$.

[esercizi sul quoziente di potenze](../../../cdrom/cd/0/0b.html)