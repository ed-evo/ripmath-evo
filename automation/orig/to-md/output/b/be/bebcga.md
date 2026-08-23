# Radici n-esime dell'unità mediante la scomposizione di polinomi

> Purtroppo questo metodo non è sempre applicabile, ad esempio non potrai applicarlo alle equazioni $$x^5=1$$, $$x^7=1$$,... Puoi applicarlo solamente quando puoi scomporre in modo che i polinomi componenti siano di grado $$1$$ e $$2$$ (sarebbe possibile anche con i polinomi di terzo grado, ma la formula risolutiva delle equazioni associate a tali polinomi non sono trattate nelle scuole medie superiori).

$$x^6 = 1$$
Equivale a
$$x^6 - 1 = 0$$

Scompongo secondo il metodo polinomiale (differenza di quadrati prima e poi differenza e somma di cubi) il termine prima dell'uguale:

$$
x^6-1 = (x^3-1)(x^3+1) = (x-1)(x^2+x+1)(x+1)(x^2-x+1)
$$

Ottengo:

$$
x^6-1 = (x^3-1)(x^3+1) = (x-1)(x^2+x+1)(x+1)(x^2-x+1) = 0
$$

Cioè devo risolvere le equazioni:

- [$$x - 1 = 0$$]{.text-red}
- [$$x^2 + x + 1 = 0$$]{.text-red}
- [$$x + 1 = 0$$]{.text-red}
- [$$x^2 - x + 1 = 0$$]{.text-red}

---

- Risolvo la prima e trovo la prima soluzione:
  $$x - 1 = 0$$
  $$\textcolor{red}{x_1 = 1}$$ cioè nel campo complesso $$x = 1 + i0$$

- Risolvo la seconda e trovo la seconda e la terza soluzione:
  $$x^2 + x + 1 = 0$$
  È un'equazione di secondo grado, la risolvo e trovo:
  $$
  \textcolor{red}{x_2 = \frac{-1 + i\sqrt{3}}{2}} \quad \textcolor{red}{x_3 = \frac{-1 - i\sqrt{3}}{2}}
  $$

- Risolvo la terza equazione e trovo la quarta soluzione:
  $$x + 1 = 0$$
  $$\textcolor{red}{x_4 = -1}$$ cioè nel campo complesso $$x = -1 + i0$$

- Risolvo la quarta e trovo la quinta e la sesta soluzione:
  $$x^2 - x + 1 = 0$$
  È un'equazione di secondo grado, la risolvo e trovo:
  $$
  \textcolor{red}{x_2 = \frac{1 + i\sqrt{3}}{2}} \quad \textcolor{red}{x_3 = \frac{1 - i\sqrt{3}}{2}}
  $$

---

Raccogliendo, le soluzioni in campo complesso sono (le indico con i simboli $$w_1, w_2, w_3, \dots$$):

$$w_1 = 1 + i0$$

$$
w_2 = \frac{1 + i\sqrt{3}}{2}
$$

$$
w_3 = \frac{1 - i\sqrt{3}}{2}
$$

$$w_4 = -1 + i0$$

$$
w_5 = \frac{-1 + i\sqrt{3}}{2}
$$

$$
w_6 = \frac{-1 - i\sqrt{3}}{2}
$$