# <span class="text-red-600">Problema</span>

In un triangolo isoscele la base è uguale all'altezza ad essa relativa; si sa che sottraendo $10\text{ m}$ alla base ed aggiungendo $20\text{ m}$ all'altezza l'area del triangolo aumenta di $100\text{ m}^2$. Determinare il perimetro del triangolo.

Sappiamo che
$\overline{AH} = \overline{BC}$

Pongo:
$\overline{AH} = \overline{BC} = x$

Ora interpreto:
Togliendo $10$ alla base ed aggiungendo $20$ all'altezza la nuova area è uguale a quella vecchia aumentata di $100$.

Trasformo in linguaggio matematico:
Sottraendo $10$ alla base $(\overline{BC} - 10)$
ed aggiungendo $20$ all'altezza $(\overline{AH} + 20)$
La nuova area $\left(\frac{(\overline{BC} - 10) \cdot (\overline{AH} + 20)}{2}\right)$
è uguale $(=)$
a quella vecchia $\left(\frac{\overline{BC} \cdot \overline{AH}}{2}\right)$
aumentata di $100$ $(+ 100)$.

Quindi scrivo la relazione:

$$
\frac{(\overline{BC} - 10) \cdot (\overline{AH} + 20)}{2} = \frac{\overline{BC} \cdot \overline{AH}}{2} + 100
$$

Sostituisco l'incognita:

$$
\frac{(x - 10) \cdot (x + 20)}{2} = \frac{x \cdot x}{2} + 100
$$

Calcolo:

$$
\frac{x^2 - 10x + 20x - 200}{2} = \frac{x^2 + 200}{2}
$$

Tolgo i denominatori:
$x^2 - 10x + 20x - 200 = x^2 + 200$
$x^2 - 10x + 20x - 200 - x^2 - 200 = 0$
$- 10x + 20x - 200 - 200 = 0$
$10x - 400 = 0$
$10x = 400$
$\overline{AH} = \overline{BC} = x$
$x = 40$

Quindi:
$\textcolor{blue}{\overline{AH} = \overline{BC} = 40}$

Per trovare il perimetro devo trovare il valore di $\overline{AC}$.
Nel triangolo $AHC$ conosco $\overline{AH} = 40\text{ m}$ ed $\overline{HC} = 20\text{ m}$, per trovare $\overline{AC}$ applico il teorema di Pitagora al triangolo $AHC$.

Teorema di Pitagora:
$\textcolor{blue}{\overline{AC}^2 = \overline{AH}^2 + \overline{HC}^2}$

Calcolo:
$\overline{AC}^2 = 40^2 + 20^2 = 1600 + 400 = 2000$
$\overline{AC} = \sqrt{2000} = 20\sqrt{5}$ [calcoli per estrarre di radice](ahcac7a.html)

Quindi:
$P(ABC) = \overline{BC} + 2\overline{AC} = 40 + 2(20\sqrt{5}) = 40 + 40\sqrt{5} = 40(1 + \sqrt{5})\text{ m}$