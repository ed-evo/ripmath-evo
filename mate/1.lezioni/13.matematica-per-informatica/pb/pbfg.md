# Numeri con la virgola nel sistema binario

Anche nel sistema binario, come nel sistema decimale, è possibile, quando otteniamo un resto nell'operazione di divisione, procedere ancora trovando le cifre decimali del numero; vediamo qui un esempio di come si procede.

---

Prima consideriamo il caso di un numero decimale finito, ad esempio partiamo dalla divisione decimale $50 : 8 = 6,25$ e vediamo come comportarci.

$$
110010 : 1000 =
$$

$$
110010,00 : 1000 = 110,01
$$

Ti spiego passo passo come si procede:
le cifre del divisore ($1000$) sono $4$ quindi considero $4$ cifre del dividendo ($1100$).
$1000$ in $1100$ ci sta, quindi scrivo $1$ nel quoziente e scrivo $1000$ sotto le cifre considerate del dividendo, ed eseguo la sottrazione: ottengo $100$.

Abbasso un'altra cifra del dividendo ed ottengo $1001$.
$1000$ in $1001$ ci sta, quindi scrivo $1$ nel quoziente e scrivo $1000$ sotto le cifre considerate del dividendo (partendo da destra), ed eseguo la sottrazione: ottengo $1$.

Abbasso l'ultima cifra del dividendo ed ottengo $10$.
$1000$ in $10$ non ci sta, scrivo $0$ nel quoziente e considero un primo $0$ dopo la virgola, ottengo $100$.

$1000$ in $100$ non ci sta, scrivo la virgola e lo zero ($.0$) nel quoziente e considero un secondo $0$ dopo la virgola, ottengo $1000$.

$1000$ in $1000$ ci sta, quindi scrivo $1$ nel quoziente e scrivo $1000$ sotto le cifre considerate del dividendo, ed eseguo la sottrazione: ottengo $0$.

ho ottenuto:
$$
110010 : 1000 = 110,01
$$

---

> **Nota:** per ritrasformare da binario a decimale le cifre dopo la virgola dobbiamo far riferimento alle potenze di $\frac{1}{2}$, o meglio alle potenze negative di $2$:
> $2^{-1} = (\frac{1}{2})^{1} = 1/2 = 0,5 \quad 2^{-2} = (\frac{1}{2})^{2} = 1/4 = 0,25 \quad 2^{-3} = (\frac{1}{2})^{3} = 1/8 = 0,125 \dots$

| cifra binaria | ...... | terza | seconda | prima | virgola | prima | seconda | terza | quarta | quinta |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| potenza del $2$ | ...... | $2^2$ | $2^1$ | $2^0$ | $,$ | $2^{-1}$ | $2^{-2}$ | $2^{-3}$ | $2^{-4}$ | $2^{-5}$ |
| valore potenza | ...... | $4$ | $2$ | $1$ | $,$ | $0,5$ | $0,25$ | $0,125$ | $0,0625$ | $0,03125$ |

Ad esempio, se hai il numero $101,101$ mettilo mentalmente in tabella ed avrai:

| cifra binaria | ...... | terza | seconda | prima | virgola | prima | seconda | terza | quarta | quinta |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| potenza del $2$ | ...... | $2^2$ | $2^1$ | $2^0$ | $,$ | $2^{-1}$ | $2^{-2}$ | $2^{-3}$ | $2^{-4}$ | $2^{-5}$ |
| valore potenza | ...... | $4$ | $2$ | $1$ | $,$ | $0,5$ | $0,25$ | $0,125$ | $0,0625$ | $0,03125$ |
| numero dato | ...... | $1$ | $0$ | $1$ | $,$ | $1$ | $0$ | $1$ | | |

quindi il numero preso ad esempio, in decimali vale:
$$
4 + 0 + 1 + 0,5 + 0 + 0,125 = 5,625
$$

> In pratica significa che ogni numero decimale inferiore a $1$ può essere rappresentato come somma di termini della successione geometrica di ragione $1/2$. Sarebbe a dire che esiste una corrispondenza biunivoca fra i numeri razionali inferiori a $1$ e le ridotte della serie geometrica di ragione $1/2$. È anche una verifica del fatto che la serie geometrica di ragione $1/2$ converge a $1$. Non so a voi, ma a me questo fatto sembra interessante e credo che meriterebbe un approfondimento.

---

Il nostro risultato $110,01$ trasformato in decimali vale:
$$
4 + 2 + 0 + 0 + 0,25 = 6,25
$$

---

Consideriamo ora il caso di un numero decimale illimitato periodico, ad esempio partiamo dalla divisione decimale $20 : 6 = 3,3333\dots$ e vediamo come comportarci.

$$
10100 : 110 =
$$

$$
10100,0000 : 110 = 11,0101\dots
$$

Ti spiego passo passo come si procede:
le cifre del divisore ($110$) sono $3$ quindi considero $3$ cifre del dividendo ($101$).
$110$ in $101$ non ci sta, quindi considero $4$ cifre del dividendo: $1010$.

Ora $110$ in $1010$ ci sta quindi scrivo $1$ nel quoziente e scrivo $110$ sotto le cifre considerate del dividendo (partendo da destra), ed eseguo la sottrazione: ottengo $100$.

Abbasso un'altra cifra del dividendo ed ottengo $1000$.
$110$ in $1000$ ci sta, quindi scrivo $1$ nel quoziente e scrivo $110$ sotto le cifre considerate del dividendo (partendo da destra), ed eseguo la sottrazione: ottengo $10$.

considero un primo $0$ dopo la virgola, ottengo $100$.

$110$ in $100$ non ci sta, scrivo la virgola e lo zero ($.0$) nel quoziente e considero un secondo $0$ dopo la virgola, ottengo $1000$.
$110$ in $1000$ ci sta, quindi scrivo $1$ nel quoziente e scrivo $110$ sotto le cifre considerate del dividendo, ed eseguo la sottrazione: ottengo $10$.

considero un terzo $0$ dopo la virgola, ottengo $100$.

$110$ in $100$ non ci sta, scrivo $0$ nel quoziente e considero un quarto $0$ dopo la virgola, ottengo $1000$.
$110$ in $1000$ ci sta, quindi scrivo $1$ nel quoziente e scrivo $110$ sotto le cifre considerate del dividendo, ed eseguo la sottrazione: ottengo $10$.

siccome ogni volta, eseguendo la sottrazione ottengo $10$, avrò che le cifre dopo la virgola $01$ si ripeteranno infinitamente e sono il periodo, cioè il numero è binario periodico di periodo $01$.

ho ottenuto:
$$
10100 : 110 = 11,0101010101\dots
$$