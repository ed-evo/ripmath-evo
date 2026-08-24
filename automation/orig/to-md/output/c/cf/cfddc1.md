# [Dimostrazione della regola per la derivata di un quoziente]{.text-red}

> **Avvertenza:** per una migliore visualizzazione metti la pagina a tutto schermo

Voglio dimostrare che se ho

$$
\textcolor{red}{y = \frac{f(x)}{g(x)}}
$$

allora ne segue

$$
\textcolor{red}{y' = \frac{f'(x) \cdot g(x) - f(x) \cdot g'(x)}{g(x)^2}}
$$

Parto dal rapporto incrementale per la funzione

$$
\textcolor{red}{y = \frac{f(x)}{g(x)}}
$$

il rapporto incrementale vale:

$$
\textcolor{red}{\lim_{h \to 0} \left[ \frac{f(x+h)}{g(x+h)} - \frac{f(x)}{g(x)} \right] \cdot \frac{1}{h} =}
$$

faccio il minimo comune multiplo dentro parentesi quadre in modo da avere un'unica frazione

$$
\textcolor{red}{\lim_{h \to 0} \frac{f(x+h) \cdot g(x) - f(x) \cdot g(x+h)}{g(x+h) \cdot g(x)} \cdot \frac{1}{h} =}
$$

Ora tolgo e aggiungo (come per il prodotto) un termine intermedio: $\textcolor{red}{f(x) \cdot g(x)}$

$$
\textcolor{red}{\lim_{h \to 0} \frac{f(x+h) \cdot g(x) - f(x) \cdot g(x) + f(x) \cdot g(x) - f(x) \cdot g(x+h)}{g(x+h) \cdot g(x)} \cdot \frac{1}{h} =}
$$

Tra il primo ed il secondo termine al numeratore posso mettere in evidenza $\textcolor{red}{g(x)}$ e fra il terzo e quarto termine $\textcolor{red}{-f(x)}$: ottengo:

$$
\textcolor{red}{\lim_{h \to 0} \frac{g(x) \cdot [f(x+h) - f(x)] - f(x) \cdot [g(x+h) - g(x)]}{g(x+h) \cdot g(x)} \cdot \frac{1}{h} =}
$$

Ora distribuisco il fattore $\textcolor{red}{1/h}$ ai due termini al numeratore

$$
\textcolor{red}{\lim_{h \to 0} \frac{g(x) \cdot \frac{f(x+h) - f(x)}{h} - f(x) \cdot \frac{g(x+h) - g(x)}{h}}{g(x+h) \cdot g(x)} =}
$$

ora passando al limite e ricordando che $\textcolor{red}{\lim_{h \to 0} g(x+h) = g(x)}$ segue

$$
\textcolor{red}{y' = \frac{f'(x) \cdot g(x) - f(x) \cdot g'(x)}{g(x)^2}}
$$

come volevamo; difficile vero? piuttosto, ma nei miei 35 anni di carriera ho visto farla una volta sola e in una quinta liceo scientifico.