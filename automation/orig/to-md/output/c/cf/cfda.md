# [Esempi di calcolo di qualche semplice derivata]{.text-red}

Per iniziare proviamo a calcolare la derivata di [$$y = x^2$$]{.text-red}

[$$f(x) = x^2$$]{.text-red}
[$$f(x+h) = (x+h)^2$$]{.text-red}

faccio il limite del rapporto incrementale:

$$
\lim_{h \to 0} \frac{(x+h)^2 - x^2}{h} =
$$

sviluppo il quadrato

$$
\lim_{h \to 0} \frac{x^2 + 2hx + h^2 - x^2}{h} =
$$

$$
\lim_{h \to 0} \frac{2hx + h^2}{h} =
$$

Per il teorema sulla somma dei limiti

$$
\lim_{h \to 0} \frac{2hx}{h} + \lim_{h \to 0} \frac{h^2}{h} =
$$

$$
\lim_{h \to 0} 2x + \lim_{h \to 0} h = 2x
$$

Quindi la derivata di [$$y = x^2$$]{.text-red} è [$$y' = 2x$$]{.text-red}

***

Calcoliamo ora la derivata di [$$y = \sin x$$]{.text-red}

[$$f(x) = \sin x$$]{.text-red}
[$$f(x+h) = \sin(x+h)$$]{.text-red}

faccio il limite del rapporto incrementale:

$$
\lim_{h \to 0} \frac{\sin(x+h) - \sin x}{h} =
$$

applico la regola della somma per $$\sin(x+h)$$

$$
\lim_{h \to 0} \frac{\sin x \cos h + \cos x \sin h - \sin x}{h} =
$$

Per il teorema sulla somma dei limiti

$$
\lim_{h \to 0} \frac{\sin x \cos h - \sin x}{h} + \lim_{h \to 0} \frac{\cos x \sin h}{h} =
$$

$$
\lim_{h \to 0} \frac{\sin x(\cos h - 1)}{h} + \lim_{h \to 0} \cos x \cdot \frac{\sin h}{h} =
$$

$$
(\sin x) \cdot \lim_{h \to 0} \frac{\cos h - 1}{h} + (\cos x) \cdot \lim_{h \to 0} \frac{\sin h}{h} =
$$

$$
(\sin x) \cdot 0 + (\cos x) \cdot 1 = \cos x
$$

quindi la derivata di [$$y = \sin x$$]{.text-red} è [$$y' = \cos x$$]{.text-red}

***

> Avrai notato che è piuttosto difficile calcolare le derivate in questo modo: allora è preferibile utilizzare una tabella da cui ricavare alcune derivate fondamentali cui fare riferimento;
> Quando andavo a scuola io dovevo studiare tutta la tabella a memoria!