# [Limite di una somma di funzioni]{.text-red}

In modo intuitivo possiamo dire che il limite di una somma è uguale alla somma dei limiti: se ho due funzioni, la prima che tende a $5$ e la seconda che tende a $7$ per un certo valore di $x$ allora la funzione somma mi tenderà a $12$.

Se ad esempio devo calcolare:

$$
\textcolor{purple}{\lim_{x \to 0} (\sin x + e^x)}
$$

siccome:

$$
\textcolor{purple}{\lim_{x \to 0} \sin x = 0}
$$

$$
\textcolor{purple}{\lim_{x \to 0} e^x = 1}
$$

avrò:

$$
\textcolor{purple}{\lim_{x \to 0} (\sin x + e^x) = 0 + 1 = 1}
$$

---

In forma matematica dobbiamo invece dire:
Se abbiamo due funzioni
$$
\textcolor{purple}{y = f(x)} \quad \textcolor{purple}{y = g(x)}
$$
tali che
$$
\textcolor{purple}{\lim_{x \to x_0} f(x) = l}
$$
e
$$
\textcolor{purple}{\lim_{x \to x_0} g(x) = m}
$$
allora si ha
$$
\textcolor{purple}{\lim_{x \to x_0} (f(x) + g(x)) = l + m}
$$

---

A scuola (talvolta e non in tutte le scuole) si studia anche la dimostrazione ma ci si limita a questa prima operazione.
Intuitivamente prenderò come intervallo per la somma di funzioni la somma dei due intervalli nel modo seguente:

sapendo che (ipotesi):
$$
\textcolor{purple}{\lim_{x \to x_0} f(x) = l} \quad \text{e} \quad \textcolor{purple}{\lim_{x \to x_0} g(x) = m}
$$
voglio dimostrare che ottengo (tesi):
$$
\textcolor{purple}{\lim_{x \to x_0} (f(x) + g(x)) = l + m}
$$
so che
$$
\textcolor{purple}{\lim_{x \to x_0} f(x) = l}
$$
equivale a
$$
\textcolor{purple}{|f(x) - l| < \epsilon_1}
$$
e che
$$
\textcolor{purple}{\lim_{x \to x_0} g(x) = m}
$$
equivale a
$$
\textcolor{purple}{|g(x) - m| < \epsilon_2}
$$
devo dimostrare che con queste ipotesi ottengo
$$
\textcolor{purple}{\lim_{x \to x_0} (f(x) + g(x)) = l + m}
$$
che equivale a
$$
\textcolor{purple}{|f(x) + g(x) - l - m| < \epsilon_3}
$$

> **DIMOSTRAZIONE**
>
> $$
> \textcolor{purple}{|f(x) + g(x) - l - m| = |(f(x) - l) + (g(x) - m)|}
> $$
> per le [proprietà dei moduli]{.text-red}
> $$
> \textcolor{purple}{|(f(x) - l) + (g(x) - m)| < |f(x) - l| + |g(x) - m| < \epsilon_1 + \epsilon_2}
> $$
> Per la proprietà transitiva della disuguaglianza avremo:
> $$
> \textcolor{purple}{|f(x) + g(x) - l - m| < \epsilon_1 + \epsilon_2}
> $$
> basterà ora prendere
> $$
> \textcolor{purple}{\epsilon_3 > \epsilon_1 + \epsilon_2}
> $$
> per ottenere la tesi.