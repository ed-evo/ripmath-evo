# Interpolazione diretta

Si parla di interpolazione diretta quando ai numeri crescenti corrispondono dei dati crescenti (cioè se crescono i numeri della prima colonna della tabella allora crescono anche i numeri della seconda).

Prima facciamo un esempio pratico partendo da un tipo di tabelle di solito usato alle scuole medie: la tabella dei cubi. Riportiamone un piccolo stralcio:

| Numeri | Cubi |
| :--- | :--- |
| $$123$$ | $$1860867$$ |
| $$124$$ | $$1906624$$ |
| $$125$$ | $$1953125$$ |
| $$126$$ | $$2000376$$ |

Supponiamo di dover calcolare $$(124,7)^3$$.
Quando il nostro numero passa da $$124$$ a $$125$$ si incrementa di $$1$$ (l'incremento è di quanto il primo numero aumenta per diventare il secondo).
Contemporaneamente il cubo si incrementa da $$1906624$$ a $$1953125$$, cioè di:

$$
1953125 - 1906624 = 46501
$$

Significa che ad un incremento di $$1$$ del numero corrisponde un incremento di $$46501$$ per il cubo.
Noi, siccome cerchiamo il cubo di $$124,7$$ (chiamiamolo $$x$$), dovremo vedere a quanto corrisponde un incremento di $$0,7$$ del numero: supponiamo che gli incrementi siano proporzionali, allora potremo scrivere:

$$
1 : 46501 = 0,7 : x
$$

Risolvo la proporzione:

$$
x = 0,7 \cdot 46501 = 32550,7
$$

Quindi l'incremento che corrisponde a $$0,7$$ è $$32550,7$$ e quindi avremo:

$$
(124,7)^3 = 1906624 + 32550,7 = 1939174,7
$$

> **Nota:** Naturalmente tale valore è approssimato e differisce in qualcosa dal valore effettivo ($$1939096,2$$), però ci permette di tenere sotto controllo l'errore senza farlo diventare troppo incisivo e quando non si potrà fare di meglio dovremo accontentarci.

Ora trasformiamo l'esempio in formule. Consideriamo una tabella e due sue righe:

| Numeri $$x$$ | Risultati $$y$$ |
| :--- | :--- |
| ... | ... |
| $$x_1$$ | $$y_1$$ |
| $$x_2$$ | $$y_2$$ |
| ... | ... |

Supponiamo di dover calcolare il valore (chiamiamolo $$y_0$$) corrispondente ad $$x_0$$ compreso fra i valori $$x_1$$ e $$x_2$$.

| Numeri $$x$$ | Risultati $$y$$ |
| :--- | :--- |
| ... | ... |
| $$x_1$$ | $$y_1$$ |
| $$x_0$$ | $$y_0$$ |
| $$x_2$$ | $$y_2$$ |
| ... | ... |

Il ragionamento è il seguente:
Quando il numero $$x$$ passa da $$x_1$$ ad $$x_2$$ allora il risultato $$y$$ passa da $$y_1$$ ad $$y_2$$; e quando il numero $$x$$ passa da $$x_1$$ ad $$x_0$$ il risultato $$y$$ passa da $$y_1$$ a qualcosa che dobbiamo trovare ($$y_0$$).

Scriviamolo in formule:

- Quando il numero $$x$$ passa da $$x_1$$ ad $$x_2$$ si scrive $$x_2 - x_1$$
- Il risultato $$y$$ passa da $$y_1$$ ad $$y_2$$ si scrive $$y_2 - y_1$$
- Quando il numero $$x$$ passa da $$x_1$$ ad $$x_0$$ si scrive $$x_0 - x_1$$
- Il numero $$y$$ passa da $$y_1$$ a $$y_0$$ si scrive $$y_0 - y_1$$

Vale la proporzione:

$$
(x_2 - x_1) : (y_2 - y_1) = (x_0 - x_1) : (y_0 - y_1)
$$

Per trovare $$y_0$$, prima risolvo la proporzione:

$$
y_0 - y_1 = \frac{(x_0 - x_1) \cdot (y_2 - y_1)}{(x_2 - x_1)}
$$

Ora trovo $$y_0$$ ed ottengo la formula dell'interpolazione diretta:

$$
y_0 = \frac{(x_0 - x_1) \cdot (y_2 - y_1)}{(x_2 - x_1)} + y_1
$$

Come esercizio vediamo di applicare la formula trovata all'esempio precedente.
Ho come dati:
- $$124^3 = 1906624$$
- $$125^3 = 1953125$$
Devo trovare $$124,7^3 = y_0$$.

Applico la formula:

$$
y_0 = \frac{(124,7 - 124) \cdot (1953125 - 1906624)}{125 - 124} + 1906624 = 0,7 \cdot 46501 + 1906624 = 32550,7 + 1906624 = 1939174,7
$$

Vediamo infine un esempio considerando la colonna dei numeri crescente mentre l'insieme dei risultati è decrescente, tipo quello che succede quando consideriamo gli inversi dei numeri naturali $$n \rightarrow 1/n$$.
Possiamo applicare comunque sempre la stessa formula (avremo però come decremento un numero negativo).

| Numero | Inverso |
| :--- | :--- |
| $$124$$ | $$0,008064516$$ |
| $$124,7$$ | $$y_0$$ |
| $$125$$ | $$0,008000000$$ |

Applico la formula:

$$
y_0 = \frac{(124,7 - 124) \cdot (0,008000000 - 0,008064516)}{125 - 124} + 0,008064516
$$

$$
y_0 = 0,7 \cdot (-0,000064516) + 0,008064516 = -0,000045161 + 0,008064516 = 0,008019355
$$