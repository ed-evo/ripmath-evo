# <span class="text-red-600">esercizio</span>

semplificare la seguente frazione:

$$
\frac{(6x^2 - 5x + 1)(4x^2 - 9x + 2)}{(3x^2 - 7x + 2)(8x^2 - 6x + 1)}
$$

Per scomporre applichiamo la regola della [decomposizione del trinomio](afccf.html)

> **Nota:** quando possibile useremo sempre la formula ridotta

troviamo le radici delle equazioni [associate](afccgga0.html) ai polinomi componenti

- risolvo la prima equazione <span class="text-sm">associata al primo polinomio al numeratore</span>
$\textcolor{blue}{6x^2 - 5x + 1 = 0}$ [calcoli](afccggb1.html)
ho le soluzioni
$x_1 = \frac{1}{2} \quad x_2 = \frac{1}{3}$
quindi posso scomporre come
$\textcolor{blue}{6x^2 - 5x + 1 = 6(x - \frac{1}{2})(x - \frac{1}{3})} = (2x - 1)(3x - 1)$
> Da notare che nell'ultimo passaggio ho diviso il 6 iniziale in $2 \cdot 3$ in modo da moltiplicare 2 per il primo fattore e 3 per il secondo fattore così da non avere frazioni

- risolvo la seconda equazione <span class="text-sm">associata al secondo polinomio al numeratore</span>
$\textcolor{blue}{4x^2 - 9x + 2 = 0}$ [calcoli](afccggb2.html)
ho le soluzioni
$x_1 = 2 \quad x_2 = \frac{1}{4}$
quindi posso scomporre come
$\textcolor{blue}{4x^2 - 9x + 2 = 4(x - 2)(x - \frac{1}{4})} = (x - 2)(4x - 1)$
> Da notare che nell'ultimo passaggio ho moltiplicato il 4 per il secondo fattore così da non avere frazioni

- risolvo la terza equazione <span class="text-sm">associata al primo polinomio al denominatore</span>
$\textcolor{blue}{3x^2 - 7x + 2 = 0}$ [calcoli](afccggb3.html)
ho le soluzioni
$x_1 = 2 \quad x_2 = \frac{1}{3}$
quindi posso scomporre come
$\textcolor{blue}{3x^2 - 7x + 2 = 3(x - 2)(x - \frac{1}{3})} = (x - 2)(3x - 1)$
> Da notare che nell'ultimo passaggio ho moltiplicato il 3 per il secondo fattore così da non avere frazioni

- risolvo la quarta equazione <span class="text-sm">associata al secondo polinomio al denominatore</span>
$\textcolor{blue}{8x^2 - 6x + 1 = 0}$ [calcoli](afccggb4.html)
ho le soluzioni
$x_1 = \frac{1}{2} \quad x_2 = \frac{1}{4}$
quindi posso scomporre come
$\textcolor{blue}{8x^2 - 6x + 1 = 8(x - \frac{1}{2})(x - \frac{1}{4})} = (2x - 1)(4x - 1)$
> Da notare che nell'ultimo passaggio ho diviso l'8 iniziale in $2 \cdot 4$ in modo da moltiplicare 2 per il primo fattore e 4 per il secondo fattore così da non avere frazioni

quindi ho

$$
\frac{(6x^2 - 5x + 1)(4x^2 - 9x + 2)}{(3x^2 - 7x + 2)(8x^2 - 6x + 1)} = \frac{(2x-1)(3x-1)(x-2)(4x-1)}{(x-2)(3x-1)(2x-1)(4x-1)} = \textcolor{blue}{1}
$$