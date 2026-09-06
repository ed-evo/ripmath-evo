Risolvere l'equazione:
$x^3 - 6x^2 + 11x - 6 = 0$

considero il polinomio associato
$x^3 - 6x^2 + 11x - 6 =$

Devo [scomporlo](../ad/ad6ga.html)

Non posso raccogliere niente a fattor comune
Passo a considerare il numero di termini: 4
Enumero le varie possibilità
Non è un cubo di binomio
Non è un raccoglimento parziale
Non è un raggruppamento
Devo provare Ruffini
i [possibili divisori](afdb1a.html) sono polinomi del tipo $(x - a)$ essendo $a$ un divisore del termine noto, cioè $a$ può essere:
$+1 \quad -1 \quad +2 \quad -2 \quad +3 \quad -3 \quad +6 \quad -6$

Provo a vedere se è scomponibile per $(x - 1)$
$P(1) = (1)^3 - 6(1)^2 + 11(1) - 6 = 1 - 6 + 11 - 6 = 0$

$(x - 1)$ è un fattore quindi eseguo la divisione di Ruffini e scrivo

$x^3 - 6x^2 + 11x - 6 = (x - 1)(x^2 - 5x + 6)$

Ora posso scrivere l'equazione di partenza come
$(x - 1)(x^2 - 5x + 6) = 0$

e per la legge di annullamento del prodotto equivale alle due equazioni
1. $(x - 1) = 0$
2. $(x^2 - 5x + 6) = 0$

risolvo la prima
$x - 1 = 0 \quad x = 1$

risolvo la seconda
$x^2 - 5x + 6 = 0$

$$
x_{1,2} = \frac{5 \pm \sqrt{(-5)^2 - 4(1)(6)}}{2}
$$

eseguo i calcoli

$$
x_{1,2} = \frac{5 \pm \sqrt{25-24}}{2}
$$

$$
x_{1,2} = \frac{5 \pm 1}{2}
$$

- $x_1 = 3$
- $x_2 = 2$

Quindi ho tre soluzioni reali:
- $\textcolor{blue}{x_1 = 1}$
- $\textcolor{blue}{x_2 = 2}$
- $\textcolor{blue}{x_3 = 3}$