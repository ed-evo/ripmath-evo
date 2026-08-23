# [Distanza di un punto da una retta]{.text-red}

È un problema che potrebbe essere risolto con le nozioni che già abbiamo: basta fare
- perpendicolare dal punto alla retta
- intersezione fra la retta e la perpendicolare, trovo il piede della perpendicolare
- distanza fra il punto ed il piede della perpendicolare

> **Nota:** Però è usata tanto spesso che merita una formula a sé stante; do solamente la formula finale. Se vuoi dimostrarla, devi fare il procedimento indicato sopra per la retta generica ed il punto $$P(x_0, y_0)$$.

## Distanza del punto [$$P(x_0, y_0)$$]{.text-blue} dalla retta [$$y = mx + q$$]{.text-blue}

**Formula**

$$
d = \frac{y_0 - mx_0 - q}{\pm \sqrt{1 + m^2}}
$$

> Essendo la distanza sempre positiva, se sopra è più, sotto scegli il più; se sopra hai meno, sotto prendi meno. In questo modo il risultato sarà sempre positivo.

***

## Distanza del punto [$$P(x_0, y_0)$$]{.text-blue} dalla retta [$$ax + by + c = 0$$]{.text-blue}

**Formula**

$$
d = \frac{ax_0 + by_0 + c}{\pm \sqrt{a^2 + b^2}}
$$

> Anche qui, se sopra è più, sotto scegli il più; se sopra hai meno, sotto prendi meno. In questo modo il risultato sarà sempre positivo.

***

### Esempio
Trovare la distanza fra la retta [$$y = -x - 2$$]{.text-red} ed il punto [$$P(0, 4)$$]{.text-red}. Applico la formula:

$$
d = \frac{y_0 - mx_0 - q}{\pm \sqrt{1 + m^2}}
$$

Sapendo che:
- [$$x_0 = 0$$]{.text-red}
- [$$y_0 = 4$$]{.text-red}
- [$$m = -1$$]{.text-red}
- [$$q = -2$$]{.text-red}

$$
d = \frac{4 - (-1) \cdot 0 - (-2)}{\pm \sqrt{[1 + (-1)^2]}}
$$

$$
d = \frac{6}{\pm \sqrt{2}} = 3\sqrt{2}
$$

Un po' più di 4 unità di misura, come puoi controllare dalla figura.