Trovare l'equazione degli asintoti per la funzione

$$
\textcolor{red}{y = \frac{x^5 - 1}{x^3 - 4x}}
$$

Il campo di esistenza è l'insieme di tutti i valori reali eccetto i valori $$x = -2$$, $$x = 0$$ e $$x = 2$$ per cui si annulla il denominatore.

[$$\textcolor{red}{C.E. = (-\infty, -2) \cup (-2, 0) \cup (0, 2) \cup (2, +\infty)}$]{.text-red}

Calcolo i limiti nei punti di discontinuità:

- $$
  \textcolor{red}{\lim_{x \to -2} \frac{x^5 - 1}{x^3 - 4x} = \frac{31}{0} = \infty}
  $$
- $$
  \textcolor{red}{\lim_{x \to 0} \frac{x^5 - 1}{x^3 - 4x} = \frac{-1}{0} = \infty}
  $$
- $$
  \textcolor{red}{\lim_{x \to +2} \frac{x^5 - 1}{x^3 - 4x} = \frac{31}{0} = \infty}
  $$

Quindi le rette [$$\textcolor{red}{x = -2 \quad x = 0 \quad x = 2}$]{.text-red} sono tre asintoti verticali.

Per tracciare al meglio l'andamento della funzione vicino agli asintoti calcoliamo i limiti destro e sinistro della funzione nei punti di ascissa $$-2$$, $$0$$ e $$+2$$.

I. Per $$x$$ tendente a $$-2$$
- Limite sinistro:
  $$
  \textcolor{red}{\lim_{x \to -2^-} \frac{x^5 - 1}{x^3 - 4x} =}
  $$
  > per calcolare un limite di questo genere basta sostituire alla $$x$$ un valore un pochino più [piccolo](chf02a.html) di $$-2$$ (ad esempio $$-2,1$$) e fare il conto dei segni

  $$
  \textcolor{red}{\frac{(-2,1)^5 - 1}{(-2,1)^3 - 4 \cdot (-2,1)}}
  $$
  Il numeratore è negativo come il denominatore quindi l'espressione è positiva cioè:
  $$
  \textcolor{red}{\lim_{x \to -2^-} \frac{x^5 - 1}{x^3 - 4x} = +\infty}
  $$

- Limite destro:
  $$
  \textcolor{red}{\lim_{x \to -2^+} \frac{x^5 - 1}{x^3 - 4x} =}
  $$
  > per calcolare un limite di questo genere basta sostituire alla $$x$$ un valore un pochino più grande di $$-2$$ (ad esempio $$-1,9$$) e fare il conto dei segni

  $$
  \textcolor{red}{\frac{(-1,9)^5 - 1}{(-1,9)^3 - 4 \cdot (-1,9)}}
  $$
  Il numeratore è negativo mentre il denominatore è positivo ($$4$$ è maggiore di $$1,9$$ al quadrato) quindi l'espressione è negativa cioè:
  $$
  \textcolor{red}{\lim_{x \to -2^+} \frac{x^5 - 1}{x^3 - 4x} = -\infty}
  $$

  Quindi il risultato è:
  [$$\textcolor{red}{\lim_{x \to -2^-} f(x) = +\infty}$$]{.text-red} $$x = -2$$ [$$\textcolor{red}{\lim_{x \to -2^+} f(x) = -\infty}$$]{.text-red}

II. Per $$x$$ tendente a $$0$$
- Limite sinistro:
  $$
  \textcolor{red}{\lim_{x \to 0^-} \frac{x^5 - 1}{x^3 - 4x} =}
  $$
  > per calcolare un limite di questo genere basta sostituire alla $$x$$ un valore un pochino più [piccolo](chf02a.html) di $$0$$ (ad esempio $$-0,1$$) e fare il conto dei segni

  $$
  \textcolor{red}{\frac{(-0,1)^5 - 1}{(-0,1)^3 - 4 \cdot (-0,1)}}
  $$
  Il numeratore è negativo mentre il denominatore è positivo quindi l'espressione è negativa cioè:
  $$
  \textcolor{red}{\lim_{x \to 0^-} \frac{x^5 - 1}{x^3 - 4x} = -\infty}
  $$

- Limite destro:
  $$
  \textcolor{red}{\lim_{x \to 0^+} \frac{x^5 - 1}{x^3 - 4x} =}
  $$
  > per calcolare un limite di questo genere basta sostituire alla $$x$$ un valore un pochino più grande di $$0$$ (ad esempio $$+0,1$$) e fare il conto dei segni

  $$
  \textcolor{red}{\frac{(0,1)^5 - 1}{(0,1)^3 - 4 \cdot (0,1)}}
  $$
  Il numeratore è negativo come pure il denominatore quindi l'espressione è positiva cioè:
  $$
  \textcolor{red}{\lim_{x \to 0^+} \frac{x^5 - 1}{x^3 - 4x} = +\infty}
  $$

  Il risultato è:
  [$$\textcolor{red}{\lim_{x \to 0^-} f(x) = -\infty}$$]{.text-red} $$x = 0$$ [$$\textcolor{red}{\lim_{x \to 0^+} f(x) = +\infty}$$]{.text-red}

III. Per $$x$$ tendente a $$+2$$
- Limite sinistro:
  $$
  \textcolor{red}{\lim_{x \to +2^-} \frac{x^5 - 1}{x^3 - 4x} =}
  $$
  > per calcolare un limite di questo genere basta sostituire alla $$x$$ un valore un pochino più piccolo di $$2$$ (ad esempio $$1,9$$) e fare il conto dei segni

  $$
  \textcolor{red}{\frac{(1,9)^5 - 1}{(1,9)^3 - 4 \cdot (1,9)}}
  $$
  Il numeratore è positivo mentre il denominatore è negativo quindi l'espressione è negativa cioè:
  $$
  \textcolor{red}{\lim_{x \to 2^-} \frac{x^5 - 1}{x^3 - 4x} = -\infty}
  $$

- Limite destro:
  $$
  \textcolor{red}{\lim_{x \to 2^+} \frac{x^5 - 1}{x^3 - 4x} =}
  $$
  > per calcolare un limite di questo genere basta sostituire alla $$x$$ un valore un pochino più grande di $$2$$ (ad esempio $$2,1$$) e fare il conto dei segni

  $$
  \textcolor{red}{\frac{(2,1)^5 - 1}{(2,1)^3 - 4 \cdot (2,1)}}
  $$
  Il numeratore è positivo come il denominatore quindi l'espressione è positiva cioè:
  $$
  \textcolor{red}{\lim_{x \to 2^+} \frac{x^5 - 1}{x^3 - 4x} = +\infty}
  $$

  Il risultato è:
  [$$\textcolor{red}{\lim_{x \to 2^-} f(x) = -\infty}$$]{.text-red} $$x = 2$$ [$$\textcolor{red}{\lim_{x \to 2^+} f(x) = +\infty}$$]{.text-red}

Per quanto riguarda l'asintoto orizzontale od obliquo possiamo dire che:

- non esiste l'asintoto orizzontale perché il limite per $$x$$ tendente ad infinito vale infinito (se non sei convinto ripassa le [forme indeterminate](../cd/cdgbb.html))
- non può esistere l'asintoto obliquo perché il numeratore supera di più di un grado il denominatore (vedi l'ultima parte dell' [esercizio precedente](chf02.html))