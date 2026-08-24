# [DIVISIONE FRA POLINOMI METODO CANONICO]{.text-red}

---

In matematica per poter procedere quando abbiamo un nuovo argomento possiamo usare due metodi diversi:
Il primo consiste nel rifarsi a qualcosa di già fatto simile a ciò che si vuol fare.
Il secondo nell'usare il buon senso ed usare le regole più "logiche".
Non è troppo chiaro? Forse questo [aneddoto](aneddoto.html) potrà farti capire meglio.
Ora noi sappiamo già fare la divisione fra numeri naturali, quindi per fare la divisione fra polinomi ci rifaremo a quella che sappiamo già fare:
Ad esempio se devo fare $\textcolor{red}{256 : 12}$ come procedo?

Il $12$ nel $25$ ci sta $2$ volte, scrivo il $2$ nel risultato poi faccio $2 \cdot 12 = 24$ e lo riporto sotto il $25$. Sottraggo $24$ da $25$ e scrivo $1$, riporto il $6$ e ricomincio da capo.
Il $12$ nel $16$ ci sta $1$ volta, scrivo $1$ nel risultato poi moltiplico $1 \cdot 12 = 12$ e lo riporto sotto il $16$. Sottraggo $12$ da $16$ e scrivo $4$. Poiché non posso riportare più termini questo è il resto.

Quindi posso scrivere:
[$256 : 12$ dà $21$ con resto di $4$]{.text-blue}
o meglio, in forma di uguaglianza:
[$256 = 12 \cdot 21 + 4$]{.text-blue}

Nei polinomi faremo nello stesso modo: proviamo ad esempio ad eseguire la seguente divisione:
$\textcolor{red}{(2x^2+5x+6):(x+2)}$
Procediamo come per la divisione normale.

Intanto il divisore è di due termini $\textcolor{red}{x+2}$, quindi anche nel dividendo consideriamo i primi due termini $\textcolor{red}{2x^2+5x}$, poi invece di fare "il $12$ sta nel $25$" facciamo "il primo termine sta nel primo termine", cioè $\textcolor{red}{2x^2 : x = 2x}$ e scriviamo il risultato. Ora moltiplichiamo il risultato per il divisore e, siccome quello che viene dovremo sottrarlo, ma nei polinomi si fa la somma algebrica, quindi per non fare la sottrazione cambiamo ogni termine di segno: $\textcolor{red}{2x \cdot x = 2x^2}$ lo cambio di segno $\textcolor{red}{-2x^2}$ e lo scrivo sotto il primo, poi faccio $\textcolor{red}{2x \cdot 2 = 4x}$ lo cambio di segno $\textcolor{red}{-4x}$ e lo scrivo sotto il secondo.
Ora faccio la somma algebrica e scrivo il risultato: il primo termine deve sempre andare via mentre nel secondo termine avrò $\textcolor{red}{5x-4x = x}$.
Vicino alla $\textcolor{red}{x}$ sposto un'altra cifra della divisione, in questo caso il $\textcolor{red}{6}$ e ricomincio come prima.

Divido il primo termine per il primo termine cioè $\textcolor{red}{x:x=1}$ e lo scrivo nel risultato, poi moltiplico il valore che ho ottenuto per il divisore e cambio di segno: $\textcolor{red}{1 \cdot x =}$ cambio di segno $\textcolor{red}{-x}$ e lo scrivo sotto il primo, poi calcolo $\textcolor{red}{1 \cdot 2 = 2}$ cambio di segno $\textcolor{red}{-2}$ e lo scrivo sotto il secondo poi faccio la somma algebrica.
Il primo va via ed il secondo viene $\textcolor{red}{4}$, questo è il resto.
Raccogliendo:
$\textcolor{red}{(2x^2+5x+6):(x+2)}$ dà come quoziente $\textcolor{red}{2x+1}$ e come resto $\textcolor{red}{4}$
o meglio puoi scrivere:
$\textcolor{red}{(2x^2+5x+6) = (x+2) \cdot (2x+1) + 4}$

---

> Piuttosto complicato vero? Se vuoi puoi [seguire i calcoli uno ad uno](ad5a2.html)

---

Prova adesso a fare le seguenti divisioni:
$\textcolor{red}{(6x^2-5x+4):(2x+3)=}$ [Calcoli](ad5aa.html)
$\textcolor{red}{(4x^3-7x^2-4x+2):(x-3)=}$ [Calcoli](ad5ab.html)
$\textcolor{red}{(2a^4+2a^3-13a^2+17a-6):(a^2+3a-2)=}$ [Calcoli](ad5ac.html)

---

Naturalmente, avendo preso il metodo della divisione dai numeri ed essendo i numeri dei polinomi ordinati, potrò eseguire la divisione solamente fra due polinomi ordinati. E se non sono ordinati dovrò ordinarli. Se non è possibile ordinarli non è possibile fare la divisione: vediamo due esempi:

$\textcolor{red}{(x^5 - 32):(x - 2)=}$ [Calcoli](ad5ad.html)
$\textcolor{red}{(x^6 - 64):(x^2 - 4)=}$ [Calcoli](ad5ae.html)

---

> (Fare anche divisione con la virgola)