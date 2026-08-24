# [Definizione]{.text-red}

> **Definiamo Successione** un insieme di numeri ordinato e numerabile

- Un insieme è ordinato quando, presi due elementi $a$ e $b$, è sempre possibile dire se $a$ precede o segue $b$.
- Un insieme è numerabile se è possibile stabilire una corrispondenza biunivoca degli elementi dell'insieme con l'insieme $\mathbb{N}$ dei numeri naturali.

> Possiamo anche considerare, oltre i numeri, anche grandezze matematiche o fisiche della stessa specie, ma qui limitiamoci solamente a numeri.

I valori dei termini della successione possono essere interi, razionali, reali, complessi; l'importante è che per ogni numero dato sappiamo scrivere quello che viene dopo; per scrivere quello che viene dopo devo capire qual è la legge che mi dà i termini della successione.

***

### Esempio 1
Questa è una successione perché per ogni numero posso scriverne il successivo:

$$
\textcolor{red}{1, 2, 3, 4, 5, 6, \dots}
$$

e viene detta successione dei numeri naturali $\mathbb{N}$.

***

### Esempio 2
Anche qui per ogni numero posso scriverne il successivo:

$$
\textcolor{red}{1, 2, 4, 8, 16, 32, \dots}
$$

è una cosiddetta successione geometrica (ci torneremo poi); si può anche scrivere:

$$
2^0, 2^1, 2^2, 2^3, 2^4, 2^5, \dots
$$

***

### Esempio 3
Anche qui per ogni numero posso scriverne il successivo:

$$
\textcolor{red}{2, 4, 6, 8, 10, 12, \dots}
$$

è la successione dei numeri pari.

***

### Esempio 4
Non sempre è possibile trovare una regola matematica che ci permetta di scrivere immediatamente i termini di una successione. Anche questa è una successione, ma non è immediato capire come scrivere i termini:

$$
\textcolor{red}{1, 8, 7, 5, 4, 15, \dots}
$$

Lo puoi capire se scrivi i numeri in lettere:

$$
\textcolor{red}{\text{uno, otto, sette, cinque, quattro, quindici, } \dots}
$$

Se conti le lettere che formano i numeri vedi che sono:

$$
\textcolor{red}{3, 4, 5, 6, 7, 8, \dots}
$$

Quindi la successione è formata dai numeri naturali (più piccoli) che hanno il numero di lettere del loro nome uguali a $3, 4, 5, 6, 7, 8, \dots$. Quando ho individuato la legge della successione ho individuato i termini della successione stessa: il prossimo termine sarà $\textcolor{red}{29}$ perché $\textcolor{red}{\text{ventinove}}$ è il numero naturale più basso il cui nome è formato da $9$ lettere.

Non possiamo esprimere la legge che genera questa successione in termini matematici; lasciando ai giornali di enigmistica successioni di questo tipo, noi ci occuperemo solamente di successioni la cui legge sia esprimibile mediante una formula matematica.

***

Come definizione quella sopra è molto "teorica"; per utilizzarla nella pratica ci vuole qualcosa di più efficace. Possiamo utilizzare il concetto di funzione dicendo:

> **Definiamo successione** in un insieme $K$ qualunque applicazione (o funzione) da $\mathbb{N}$ a $K$ tale che ad ogni valore $1, 2, \dots, n \in \mathbb{N}$ faccia corrispondere un valore in $K$ in modo che, individuato il valore corrispondente al termine $n$, si sappia sempre individuare quale valore corrisponde al termine $n+1$.

> È la stessa definizione, però così definiamo la successione mediante la regola di induzione e ci colleghiamo al concetto di funzione.

Per le successioni che studieremo $K$ può essere $\mathbb{N}$, $\mathbb{R}$, o qualunque altro insieme numerico; naturalmente dovremo sempre dire di quale insieme si tratta: quindi diremo successione in $\mathbb{N}$, successione in $\mathbb{R}$, ...