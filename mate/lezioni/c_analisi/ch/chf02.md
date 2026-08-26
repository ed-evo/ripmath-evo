Trovare l'equazione degli asintoti per la funzione

[$$
y = \frac{x^4}{x^2 - 4}
$$]{.text-red}

Il campo di esistenza è: tutti i valori reali eccetto i valori $x = -2$ e $x = 2$ per cui si annulla il denominatore

[$\text{C.E.} = (-\infty, -2) \cup (-2, 2) \cup (2, +\infty)$]{.text-red}

Calcolo:

[$$
\lim_{x \to -2} \frac{x^4}{x^2 - 4} = \frac{4}{0} = \infty
$$]{.text-red}

[$$
\lim_{x \to +2} \frac{x^4}{x^2 - 4} = \frac{4}{0} = \infty
$$]{.text-red}

Quindi le rette [$x = -2$]{.text-red} [$x = 2$]{.text-red} sono due asintoti verticali.

Per tracciare al meglio l'andamento della funzione vicino agli asintoti calcoliamo i limiti destro e sinistro della funzione nei punti di ascissa $-2$ e $+2$.

I. Per $x$ tendente a $-2$
- Limite sinistro:
  [$$
  \lim_{x \to -2^-} \frac{x^4}{x^2 - 4}
  $$]{.text-red}
  Per calcolare un limite di questo genere basta sostituire alla $x$ un valore un pochino più piccolo di $-2$ (ad esempio $-2,1$) e fare il conto dei segni:
  [$$
  \frac{(-2,1)^4}{(-2,1)^2 - 4}
  $$]{.text-red}
  Il numeratore è positivo come il denominatore quindi l'espressione è positiva cioè:
  [$$
  \lim_{x \to -2^-} \frac{x^4}{x^2 - 4} = +\infty
  $$]{.text-red}

- Limite destro:
  [$$
  \lim_{x \to -2^+} \frac{x^4}{x^2 - 4}
  $$]{.text-red}
  Per calcolare un limite di questo genere basta sostituire alla $x$ un valore un pochino più grande di $-2$ (ad esempio $-1,9$) e fare il conto dei segni:
  [$$
  \frac{(-1,9)^4}{(-1,9)^2 - 4}
  $$]{.text-red}
  Il numeratore è positivo mentre il denominatore è negativo quindi l'espressione è negativa cioè:
  [$$
  \lim_{x \to -2^+} \frac{x^4}{x^2 - 4} = -\infty
  $$]{.text-red}

  Quindi il risultato è:
  [$\lim_{x \to -2^-} f(x) = +\infty \quad x = -2 \quad \lim_{x \to -2^+} f(x) = -\infty$]{.text-red}

II. Per $x$ tendente a $+2$
- Limite sinistro:
  [$$
  \lim_{x \to 2^-} \frac{x^4}{x^2 - 4}
  $$]{.text-red}
  Per calcolare un limite di questo genere basta sostituire alla $x$ un valore un pochino più piccolo di $2$ (ad esempio $1,9$) e fare il conto dei segni:
  [$$
  \frac{(1,9)^4}{(1,9)^2 - 4}
  $$]{.text-red}
  Il numeratore è positivo mentre il denominatore è negativo quindi l'espressione è negativa cioè:
  [$$
  \lim_{x \to 2^-} \frac{x^4}{x^2 - 4} = -\infty
  $$]{.text-red}

- Limite destro:
  [$$
  \lim_{x \to 2^+} \frac{x^4}{x^2 - 4}
  $$]{.text-red}
  Per calcolare un limite di questo genere basta sostituire alla $x$ un valore un pochino più grande di $2$ (ad esempio $2,1$) e fare il conto dei segni:
  [$$
  \frac{(2,1)^4}{(2,1)^2 - 4}
  $$]{.text-red}
  Il numeratore è positivo come il denominatore quindi l'espressione è positiva cioè:
  [$$
  \lim_{x \to 2^+} \frac{x^4}{x^2 - 4} = +\infty
  $$]{.text-red}

  Quindi il risultato è:
  [$\lim_{x \to 2^-} f(x) = -\infty \quad x = 2 \quad \lim_{x \to 2^+} f(x) = +\infty$]{.text-red}

***

Per quanto riguarda l'asintoto orizzontale od obliquo possiamo dire che:

[$$
\lim_{x \to \infty} \frac{x^4}{x^2 - 4} = \infty
$$]{.text-red}

Potrebbe esistere l'asintoto obliquo della forma $y = mx + q$ ma:

[$$
\lim_{x \to \infty} \frac{f(x)}{x} = \infty
$$]{.text-red}

Infatti:
[$$
\lim_{x \to \infty} \frac{x^4}{x^3 - 4x} = \infty = m
$$]{.text-red}

Quindi $m$ non è definita e non esiste l'asintoto obliquo.

> **Nota:** È più semplice dire che non può esistere l'asintoto obliquo perché il numeratore supera di più di un grado il denominatore.