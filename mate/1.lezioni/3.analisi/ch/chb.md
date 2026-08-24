# Asintoto verticale

Si ha un asintoto verticale quando, all'avvicinarsi della $$x$$ ad un valore finito, il valore della $$y$$ cresce all'infinito.

Poiché il valore infinito è solo una convenzione, ne deriva che la funzione avrà valore infinito dove la $$x$$ non è definita, cioè per valori non appartenenti al [campo di esistenza](../cc/ccc.html).

Quindi per trovare gli asintoti verticali dovremo trovare quei valori della $$x$$ per cui la funzione vale infinito, cioè supponendo che nel punto $$x = c$$ la funzione non sia definita dovremo calcolare:

$$
\textcolor{red}{\lim_{x \to c} f(x) =}
$$

se il risultato vale $$\infty$$ allora la retta 

$$
\textcolor{red}{x = c}
$$

sarà l'asintoto verticale.

---

È bene, al fine di calcolare esattamente come la funzione sparisce all'infinito, calcolare sia il limite destro che il limite sinistro per trovare il segno dell'infinito a destra e a sinistra dell'asintoto.

---

> ricordati del [teorema della permanenza del segno](../cd/cdeb.html) che ti permette di assegnare all'infinito (anche se non esiste) un segno positivo o negativo

---

I quattro casi possibili sono rappresentati qui sotto:

- $$\textcolor{red}{\lim_{x \to c^-} f(x) = +\infty, \quad \lim_{x \to c^+} f(x) = +\infty}$$
- $$\textcolor{red}{\lim_{x \to c^-} f(x) = -\infty, \quad \lim_{x \to c^+} f(x) = -\infty}$$
- $$\textcolor{red}{\lim_{x \to c^-} f(x) = +\infty, \quad \lim_{x \to c^+} f(x) = -\infty}$$
- $$\textcolor{red}{\lim_{x \to c^-} f(x) = -\infty, \quad \lim_{x \to c^+} f(x) = +\infty}$$

---

Facciamo un esercizio semplicissimo: vediamo se la funzione

$$
\textcolor{red}{y = \frac{3x}{x - 1}}
$$

ha asintoti verticali.

Il campo di esistenza è costituito da tutti i valori eccetto $$x = 1$$, per cui si annulla il denominatore.

Calcolo:

$$
\textcolor{red}{\lim_{x \to 1} \frac{3x}{x - 1} = \frac{3}{0} = \infty}
$$

quindi la retta

$$
\textcolor{red}{x = 1}
$$

è un asintoto verticale.

Per tracciarlo al meglio calcoliamo i limiti destro e sinistro della funzione nel punto $$1$$.

- **Limite sinistro:**
  $$
  \textcolor{red}{\lim_{x \to 1^-} \frac{3x}{x - 1}}
  $$
  per calcolare un limite di questo genere basta sostituire alla $$x$$ un valore un pochino più piccolo di $$1$$ (ad esempio $$0,9$$) e fare il conto dei segni:
  $$
  \textcolor{red}{\frac{3 \cdot 0,9}{0,9 - 1}}
  $$
  il numeratore è positivo mentre il denominatore è negativo quindi l'espressione è negativa cioè:
  $$
  \textcolor{red}{\lim_{x \to 1^-} \frac{3x}{x - 1} = -\infty}
  $$

- **Limite destro:**
  $$
  \textcolor{red}{\lim_{x \to 1^+} \frac{3x}{x - 1}}
  $$
  per calcolare un limite di questo genere basta sostituire alla $$x$$ un valore un pochino più grande di $$1$$ (ad esempio $$1,1$$) e fare il conto dei segni:
  $$
  \textcolor{red}{\frac{3 \cdot 1,1}{1,1 - 1}}
  $$
  il numeratore è positivo ed anche il denominatore è positivo quindi l'espressione è positiva cioè:
  $$
  \textcolor{red}{\lim_{x \to 1^+} \frac{3x}{x - 1} = +\infty}
  $$

quindi il risultato è:

$$
\textcolor{red}{\lim_{x \to 1^-} f(x) = -\infty, \quad \lim_{x \to 1^+} f(x) = +\infty}
$$