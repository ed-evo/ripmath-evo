# <span class="text-red-600">esercizio</span>

Semplificare la seguente frazione:

$$
\frac{6x^2 - x\sqrt{3} - 6}{3x^2 + 4x\sqrt{3} - 12}
$$

Per scomporre applichiamo la regola della [decomposizione del trinomio](afccf.html)

> **Nota:** quando possibile useremo sempre la formula ridotta

Troviamo le radici delle equazioni [associate](afccgga0.html) ai polinomi della frazione:

- risolvo la prima equazione
  $\textcolor{blue}{6x^2 - x\sqrt{3} - 6 = 0}$ [calcoli](afccggc1.html)
  
  ho le soluzioni:
  $$
  x_1 = \frac{2\sqrt{3}}{3} \quad x_2 = -\frac{\sqrt{3}}{2}
  $$
  
  quindi posso scomporre come:
  $$
  \textcolor{blue}{6x^2 - x\sqrt{3} - 6 = 6 \left( x - \frac{2\sqrt{3}}{3} \right) \left( x + \frac{\sqrt{3}}{2} \right)} = (3x - 2\sqrt{3})(2x + \sqrt{3})
  $$
  
  > Da notare che nell'ultimo passaggio ho scomposto il 6 iniziale in $3 \cdot 2$ ed ho moltiplicato il 3 per il primo fattore ed il 2 per il secondo in modo da non avere frazioni.

- risolvo la seconda equazione
  $\textcolor{blue}{3x^2 + 4x\sqrt{3} - 12 = 0}$ [calcoli](afccggc2.html)
  
  ho le soluzioni:
  $$
  x_1 = -\frac{2\sqrt{3}}{3} \quad x_2 = 2\sqrt{3}
  $$
  
  quindi posso scomporre come:
  $$
  \textcolor{blue}{3x^2 + 4x\sqrt{3} - 12 = 3 \left( x - \frac{2\sqrt{3}}{3} \right) (x + 2\sqrt{3})} = (3x - 2\sqrt{3})(x + 2\sqrt{3})
  $$
  
  > Da notare che nell'ultimo passaggio ho moltiplicato il 3 iniziale per il primo fattore in modo da non avere frazioni.

quindi ho

$$
\frac{6x^2 - x\sqrt{3} - 6}{3x^2 + 4x\sqrt{3} - 12} = \frac{(3x - 2\sqrt{3})(2x + \sqrt{3})}{(3x - 2\sqrt{3})(x + 2\sqrt{3})} = \textcolor{blue}{\frac{2x + \sqrt{3}}{x + 2\sqrt{3}}}
$$