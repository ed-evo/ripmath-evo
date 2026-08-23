# Distanza fra due punti visibili ma uno non accessibile

Supponiamo di voler calcolare la distanza fra due punti $$A$$ e $$B$$: io mi trovo in $$A$$ ma non posso raggiungere $$B$$ perché è al di là del fiume.

Possiamo spostarci in un punto $$C$$ e calcolare la distanza $$AC$$ ed inoltre gli angoli $$ACB$$ e $$CAB$$.

Abbiamo quindi il triangolo $$ABC$$ in cui conosciamo due angoli e il lato compreso, quindi per risolvere il triangolo possiamo calcolare il terzo angolo $$\beta$$ ricordando che la somma degli angoli interni di un triangolo è un angolo piatto:

$$
\textcolor{red}{\beta = 180^\circ - \alpha - \gamma}
$$

e poi applicare il [teorema dei seni](../id/idd.html):

$$
\textcolor{brown}{\frac{AC}{\sin \beta} = \frac{AB}{\sin \gamma}}
$$

e quindi ottenere:

$$
\textcolor{brown}{AB = \frac{AC \sin \gamma}{\sin \beta}}
$$

---

Vediamo anche qui un esercizio.
Supponiamo di spostarci dal punto $$A$$ di $$20\text{ m}$$.

$$AC = 20\text{ m}$$

Calcolo gli angoli (con il teodolite).

> **Nota:** questo è un esercizio teorico e quindi considero numeri semplici: se calcoli effettivamente gli angoli nella realtà troverai anche primi e secondi e quindi i calcoli saranno molto più complicati.

$$BAC = \alpha = 80^\circ$$
$$BCA = \gamma = 60^\circ$$

e quindi per differenza:

$$\beta = ABC = 180^\circ - 80^\circ - 60^\circ = 40^\circ$$

$$
\textcolor{brown}{AB = \frac{20 \sin 60^\circ}{\sin 40^\circ} = \frac{20 \cdot 0,87}{0,64} = 26,9\text{ m}}}
$$

---