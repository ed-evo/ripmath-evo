# Formula ridotta

Si può applicare solamente quando il secondo termine è divisibile per due: pongo $b = 2h$

$$
\textcolor{red}{ax^2 + 2hx + c = 0}
$$

In tal caso la formula risolutiva diviene:

$$
\textcolor{red}{x_{1,2} = \frac{-h \pm \sqrt{h^2 - ac}}{a}}
$$

La formula ridotta semplifica i calcoli per trovare le soluzioni ed è conveniente da usare soprattutto quando il termine $a$ vale $1$.

***

### Esempio:

$$
\textcolor{red}{x^2 + 6x + 8 = 0}
$$

$b$ vale $6$, quindi $h$ (metà di $b$) vale $3$.

$$
\textcolor{red}{x_{1,2} = \frac{-3 \pm \sqrt{(3)^2 - 1 \cdot 8}}{1}}
$$

Eseguo i calcoli:

$$
\textcolor{red}{x_{1,2} = -3 \pm \sqrt{9-8}}
$$

$$
\textcolor{red}{x_{1,2} = -3 \pm \sqrt{1}}
$$

$$
\textcolor{red}{x_{1,2} = -3 \pm 1}
$$

- $\textcolor{red}{x_1 = -3 + 1 = -2}$
- $\textcolor{red}{x_2 = -3 - 1 = -4}$

***

Vediamone ora la dimostrazione; sostituendo $2h$ al posto di $b$ nella formula risolutiva ottengo:

$$
\textcolor{red}{x_{1,2} = \frac{-2h \pm \sqrt{(2h)^2 - 4ac}}{2a}}
$$

Eseguo il quadrato:

$$
\textcolor{red}{x_{1,2} = \frac{-2h \pm \sqrt{4h^2 - 4ac}}{2a}}
$$

Raccolgo il $4$ all'interno della radice:

$$
\textcolor{red}{x_{1,2} = \frac{-2h \pm \sqrt{4(h^2 - ac)}}{2a}}
$$

Porto il $4$ fuori dalla radice:

$$
\textcolor{red}{x_{1,2} = \frac{-2h \pm 2\sqrt{h^2 - ac}}{2a}}
$$

Raccolgo il $2$ tra il primo termine e la radice:

$$
\textcolor{red}{x_{1,2} = \frac{2[-h \pm \sqrt{h^2 - ac}]}{2a}}
$$

Ora semplificando il $2$ sopra e sotto ottengo la formula risolutiva:

$$
\textcolor{red}{x_{1,2} = \frac{-h \pm \sqrt{h^2 - ac}}{a}}
$$

> **Nota:** Mi scuso per l'uso sovrabbondante di parentesi ma non posso estendere la riga superiore del radicale.

***

> Esiste anche una formula detta ridottissima, ma, secondo me, complica i calcoli invece di semplificarli.