# <span class="text-red-600">esercizio</span>

risolvere la seguente equazione:

$$
\frac{a - 3x}{a} + \frac{a + 3x}{2a} = \frac{x^2 - ax}{b}
$$

Poniamo subito le condizioni per la possibilità dell'equazione:
$\textcolor{blue}{a \neq 0 \quad b \neq 0}$

ora facciamo il minimo comune multiplo $2ab$:

$$
\frac{2b(a - 3x) + b(a + 3x)}{2ab} = \frac{2a(x^2 - ax)}{2ab}
$$

tolgo i denominatori per il [secondo principio](afbc.html) di equivalenza: posso farlo perché ho supposto che $a$ e $b$ sono diversi da zero.

$\textcolor{blue}{2b(a - 3x) + b(a + 3x) = 2a(x^2 - ax)}$

eseguo i calcoli:

$\textcolor{blue}{2ab - 6bx + ab + 3bx = 2ax^2 - 2a^2x}$

porto tutti i termini prima dell'uguale:

$\textcolor{blue}{2ab - 6bx + ab + 3bx - 2ax^2 + 2a^2x = 0}$

sommo i termini simili:

$\textcolor{blue}{- 2ax^2 - 3bx + 2a^2x + 3ab = 0}$

cambio di segno:

$\textcolor{blue}{2ax^2 + 3bx - 2a^2x - 3ab = 0}$

$\textcolor{blue}{2ax^2 + x(3b - 2a^2) - 3ab = 0}$

applico la formula:

$$
x_{1,2} = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$

abbiamo:

$\textcolor{blue}{1^\circ \text{ coefficiente} = 2a}$
$\textcolor{blue}{2^\circ \text{ coefficiente} = 3b - 2a^2}$
$\textcolor{blue}{3^\circ \text{ coefficiente} = -3ab}$

> <span class="text-red-800">**Attenzione:** a non confondere le $a$ e la $b$ della formula con quelle dell'equazione: le prime indicano i coefficienti generici dell'equazione, mentre $a$ e $b$ nell'equazione sono dei numeri; avrei dovuto usare simboli diversi, ma renderei più complicata la simbologia</span>

sostituiamo nella formula:

$$
x_{1,2} = \frac{-(3b - 2a^2) \pm \sqrt{(3b - 2a^2)^2 - 4(2a)(-3ab)}}{2(2a)}
$$

fuori facciamo cadere la parentesi e facciamo i calcoli dentro radice:

$$
= \frac{2a^2 - 3b \pm \sqrt{9b^2 + 4a^4 - 12a^2b + 24a^2b}}{4a}
$$

$$
= \frac{2a^2 - 3b \pm \sqrt{9b^2 + 4a^4 + 12a^2b}}{4a}
$$

dentro radice è un quadrato:

$$
= \frac{2a^2 - 3b \pm \sqrt{(3b + 2a^2)^2}}{4a}
$$

semplifico la radice con il quadrato:

$$
= \frac{2a^2 - 3b \pm (2a^2 + 3b)}{4a}
$$

ora devo scegliere una volta il più ed una volta il meno:

$$
x_1 = \frac{2a^2 - 3b + 2a^2 + 3b}{4a} = \frac{4a^2}{4a} = a
$$

$$
x_2 = \frac{2a^2 - 3b - 2a^2 - 3b}{4a} = \frac{-6b}{4a} = -\frac{3b}{2a}
$$

quindi abbiamo le soluzioni:

$x_1 = a \quad x_2 = -\frac{3b}{2a}$

> Da notare che, anche se abbiamo diviso per $4a$ non abbiamo posto ulteriori condizioni perché per la possibilità dell'equazione avevamo posto $a$ diverso da zero