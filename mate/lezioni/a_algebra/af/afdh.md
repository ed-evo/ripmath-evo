# Equazioni risolubili con artifici
(opportune sostituzioni)

---

Qui purtroppo non c'è niente da fare: sono equazioni che riesci a risolvere solamente con l'esperienza e quindi saprai come comportarti quando avrai fatto esercizi, esercizi ed esercizi.
Vediamo qualche esempio molto semplice e limitato ad opportune sostituzioni, ricordando che non è possibile considerare tutti i casi possibili.

---

Devi vedere come prima cosa se è possibile suddividere le incognite in gruppi in modo che un gruppo sia il quadrato dell'altro: in questo modo puoi trasformare la tua equazione in un'equazione di secondo grado:

risolvere
$$
(x^2 - 4x + 8)^2 - x^2 + 4x = 28
$$

se vado a sviluppare ottengo un'equazione di quarto grado.
Osservo che prima dell'uguale il termine dentro parentesi è quasi simile (a parte il segno) a quello fuori di parentesi: manca il numero $8$, lo estraggo dal termine noto:

$$
\textcolor{blue}{(x^2 - 4x + 8)^2 - x^2 + 4x = 20 + 8}
$$
$$
\textcolor{blue}{(x^2 - 4x + 8)^2 - x^2 + 4x - 8 = 20}
$$

adesso metto in evidenza il meno:
$$
\textcolor{blue}{(x^2 - 4x + 8)^2 - (x^2 - 4x + 8) = 20}
$$

Ora posso operare la sostituzione
$$
x^2 - 4x + 8 = y
$$
e la mia equazione diventa
$$
\textcolor{blue}{y^2 - y = 20}
$$
$$
\textcolor{blue}{y^2 - y - 20 = 0}
$$

ottengo le soluzioni [calcoli](afdha.html)
$$
\textcolor{blue}{y_1 = -4} \quad \textcolor{blue}{y_2 = 5}
$$

adesso sostituisco i valori trovati alla $y$ e devo risolvere le due equazioni:
$$
\textcolor{blue}{x^2 - 4x + 8 = -4} \quad \textcolor{blue}{x^2 - 4x + 8 = 5}
$$

- Risolvo la prima
  $$
  \textcolor{blue}{x^2 - 4x + 8 = -4}
  $$
  $$
  \textcolor{blue}{x^2 - 4x + 12 = 0}
  $$
  ottengo le soluzioni [calcoli](afdhb.html)
  $$
  \textcolor{blue}{x_1 = 2 - 2i\sqrt{2}} \quad \textcolor{blue}{x_2 = 2 + 2i\sqrt{2}}
  $$

- Risolvo la seconda
  $$
  \textcolor{blue}{x^2 - 4x + 8 = 5}
  $$
  $$
  \textcolor{blue}{x^2 - 4x + 3 = 0}
  $$
  ottengo le soluzioni [calcoli](afdhc.html)
  $$
  \textcolor{blue}{x_1 = 1} \quad \textcolor{blue}{x_2 = 3}
  $$

Ho quindi le soluzioni
$$
x_1 = 1 \quad x_2 = 3 \quad x_3 = 2 - 2i\sqrt{2} \quad x_4 = 2 + 2i\sqrt{2}
$$

---

Naturalmente potevo eseguire i calcoli e poi risolvere l'equazione di quarto grado con il metodo delle equazioni abbassabili di grado, ma qui ti ho mostrato il metodo che puoi applicare anche quando non puoi utilizzare altri metodi:
pensa se le soluzioni fossero state $\sqrt{3}, 2\sqrt{7}, 3/7, 5/4$
in tal caso è un po' difficile usare il metodo di abbassare di grado.
lo stesso ragionamento vale anche per l'equazione successiva che, se facessi i calcoli, si trasformerebbe in una equazione trinomia di sesto grado.

---

Quando hai delle frazioni è utile cercare di raggruppare tutte le incognite in termini uguali in modo da poterli sostituire mediante una $y$:

risolvere:
$$
\frac{7}{x^3 - 1} + 7x^3 = 57
$$

siccome sotto abbiamo $x^3 - 1$ vediamo se possiamo trasformare anche l'altra $x$ in modo che diventi $x^3 - 1$.
siccome davanti ad $x^3$ ho il $7$ devo togliere un $7$; lo estraggo dal termine noto:

$$
\textcolor{blue}{\frac{7}{x^3 - 1} + 7x^3 = 50 + 7}
$$
$$
\textcolor{blue}{\frac{7}{x^3 - 1} + 7x^3 - 7 = 50}
$$

ora metto in evidenza il $7$:
$$
\textcolor{blue}{\frac{7}{x^3 - 1} + 7(x^3 - 1) = 50}
$$

adesso opero la sostituzione
$$
x^3 - 1 = y
$$
ed ottengo
$$
\textcolor{blue}{\frac{7}{y} + 7y = 50}
$$

supponendo $y$ diverso da zero posso fare il minimo comune multiplo:
$$
\textcolor{blue}{\frac{7 + 7y^2}{y} = \frac{50y}{y}}
$$

elimino i denominatori:
$$
\textcolor{blue}{7 + 7y^2 = 50y}
$$
$$
\textcolor{blue}{7y^2 - 50y + 7 = 0}
$$

ottengo le soluzioni [calcoli](afdhd.html)
$$
\textcolor{blue}{x_1 = \frac{1}{7}} \quad \textcolor{blue}{x_2 = 7}
$$

adesso sostituisco i valori trovati alla $y$ e devo risolvere le due equazioni:
$$
\textcolor{blue}{x^3 - 1 = \frac{1}{7}} \quad \textcolor{blue}{x^3 - 1 = 7}
$$

- Risolvo la prima
  $$
  \textcolor{blue}{x^3 - 1 = \frac{1}{7}}
  $$
  $$
  \textcolor{blue}{x^3 = \frac{1}{7} + 1}
  $$
  $$
  \textcolor{blue}{x^3 = \frac{8}{7}}
  $$

  Cerco sia le radici reali che complesse:
  $$
  \textcolor{blue}{x^3 - \frac{8}{7} = 0}
  $$

  considero il polinomio associato e lo scompongo come [differenza di cubi](../ad/ad6da.html):
  $$
  \textcolor{blue}{x^3 - \frac{8}{7} = \left(x - \frac{2}{\sqrt[3]{7}}\right) \left(x^2 + \frac{2x}{\sqrt[3]{7}} + \frac{4}{\sqrt[3]{7}^2}\right)}
  $$

  uguagliando a zero devo risolvere le due equazioni:
  $$
  \textcolor{blue}{x - \frac{2}{\sqrt[3]{7}} = 0} \quad \textcolor{blue}{x^2 + \frac{2x}{\sqrt[3]{7}} + \frac{4}{\sqrt[3]{7}^2} = 0}
  $$

  risolvo la prima ed ottengo una soluzione reale:
  $$
  x_1 = \frac{2}{\sqrt[3]{7}}
  $$

  la seconda mi darà due soluzioni complesse e coniugate.
  faccio il minimo comune multiplo:
  $$
  \textcolor{blue}{\frac{x^2\sqrt[3]{7}^2 + 2x\sqrt[3]{7} + 4}{\sqrt[3]{7}^2} = \frac{0}{\sqrt[3]{7}^2}}
  $$

  elimino i denominatori:
  $$
  \textcolor{blue}{x^2\sqrt[3]{7}^2 + 2x\sqrt[3]{7} + 4 = 0}
  $$

  ottengo le soluzioni [calcoli](afdhe.html)
  $$
  x_2 = \frac{-1 + i\sqrt{3}}{\sqrt[3]{7}} \quad x_3 = \frac{-1 - i\sqrt{3}}{\sqrt[3]{7}}
  $$

- Risolvo la seconda
  $$
  \textcolor{blue}{x^3 - 1 = 7}
  $$
  $$
  \textcolor{blue}{x^3 = 8}
  $$

  Cerco sia le radici reali che complesse.
  considero il polinomio associato e lo scompongo come [differenza di cubi](../ad/ad6da.html):
  $$
  \textcolor{blue}{x^3 - 8 = (x - 2)(x^2 + 2x + 4)}
  $$

  uguagliando a zero devo risolvere le due equazioni:
  $$
  \textcolor{blue}{x - 2 = 0} \quad \textcolor{blue}{x^2 + 2x + 4 = 0}
  $$

  la prima mi dà la soluzione reale:
  $$
  x_1 = 2
  $$

  la seconda mi darà due soluzioni complesse e coniugate:
  $$
  \textcolor{blue}{x^2 + 2x + 4 = 0}
  $$
  ottengo le soluzioni [calcoli](afdhf.html)
  $$
  x_2 = -1 - i\sqrt{3} \quad x_3 = -1 + i\sqrt{3}
  $$

Ho quindi le 6 soluzioni:
$$
x_1 = \frac{2}{\sqrt[3]{7}} \quad x_2 = \frac{-1 + i\sqrt{3}}{\sqrt[3]{7}} \quad x_3 = \frac{-1 - i\sqrt{3}}{\sqrt[3]{7}} \quad x_4 = 2 \quad x_5 = -1 - i\sqrt{3} \quad x_6 = -1 + i\sqrt{3}
$$

---