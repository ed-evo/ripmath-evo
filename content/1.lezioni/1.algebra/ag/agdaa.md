# [Delta del polinomio maggiore di zero]{.text-red}

Voglio trovare il segno del polinomio di secondo grado 
$$\textcolor{red}{ax^2 + bx + c}$$

Considero l'equazione associata
$$
\textcolor{red}{ax^2 + bx + c = 0}
$$

Se il discriminante dell'equazione è maggiore di zero allora ho due soluzioni $$\textcolor{red}{x_1}$$ e $$\textcolor{red}{x_2}$$ reali e distinte e in questo caso posso utilizzare la decomposizione del trinomio
$$
\textcolor{red}{ax^2 + bx + c = a(x - x_1)(x - x_2)}
$$

Quindi basterà trovare il segno di
$$
\textcolor{red}{a(x - x_1)(x - x_2)}
$$

Anzi, siccome $$a$$ è maggiore di zero possiamo limitarci a
$$
\textcolor{red}{(x - x_1)(x - x_2)}
$$

Dobbiamo trovare il segno di quest'espressione quando ad $$x$$ assegniamo un valore sulla retta reale.

> **Nota:** Ho cerchiato i valori perché in quei punti l'espressione vale zero.

Vi sono tre possibilità, la $$x$$ si può trovare (partendo da sinistra):
- Prima di $$x_1$$
- tra $$x_1$$ ed $$x_2$$
- Dopo $$x_2$$

Dobbiamo studiare tutti e tre i casi:

- La $$x$$ si trova prima di $$x_1$$:
  In questo caso il fattore $$\textcolor{red}{(x - x_1)}$$ è negativo (perché ho un numero più a sinistra meno un numero più a destra), ma anche il fattore $$\textcolor{red}{(x - x_2)}$$ è negativo (perché ho un numero più a sinistra meno un numero più a destra), quindi l'espressione $$\textcolor{red}{(x - x_1)(x - x_2)}$$ essendo il prodotto di due fattori negativi è positiva.

- La $$x$$ si trova tra $$x_1$$ ed $$x_2$$:
  In questo caso il fattore $$\textcolor{red}{(x - x_1)}$$ è positivo (perché ho un numero più a destra meno un numero più a sinistra), mentre il fattore $$\textcolor{red}{(x - x_2)}$$ è negativo (perché ho un numero più a sinistra meno un numero più a destra), quindi l'espressione $$\textcolor{red}{(x - x_1)(x - x_2)}$$ essendo il prodotto di un positivo ed un negativo è negativa.

- La $$x$$ si trova dopo $$x_2$$:
  In questo caso il fattore $$\textcolor{red}{(x - x_1)}$$ è positivo (perché ho un numero più a destra meno un numero più a sinistra), ma anche il fattore $$\textcolor{red}{(x - x_2)}$$ è positivo (perché ho un numero più a destra meno un numero più a sinistra), quindi l'espressione $$\textcolor{red}{(x - x_1)(x - x_2)}$$ essendo il prodotto di due numeri positivi è positiva.

***

Raccogliendo i risultati avremo:
Cioè se il delta $$\Delta$$ è maggiore di zero il trinomio è positivo per valori esterni all'intervallo delle radici ed è negativo per valori interni.

**Sintesi per $$\Delta > 0$$ e $$a > 0$$:**

- $$\textcolor{blue}{ax^2 + bx + c > 0}$$ $\rightarrow$ [valori esterni all'intervallo delle radici]{.text-red}
- $$\textcolor{blue}{ax^2 + bx + c < 0}$$ $\rightarrow$ [valori interni all'intervallo delle radici]{.text-red}