In alcuni istituti tecnici industriali (ed anche in qualche libro di testo) ho visto risolverle così:

Polinomio associato
$$
\textcolor{red}{x^3 - 6x^2 + 11x - 6 =}
$$

i possibili divisori sono:
$$
\textcolor{red}{(x - 1) \quad (x + 1) \quad (x - 2) \quad (x + 2) \quad (x - 3) \quad (x + 3) \quad (x - 6) \quad (x + 6)}
$$

Vediamo quali sono effettivamente fattori applicando il [teorema del resto di Ruffini](../ad/ad5c.html)

- trovo il resto dividendo per $$\textcolor{red}{(x - 1)}$$
  $$
  \textcolor{red}{P(1) = 1^3 - 6 \cdot 1^2 + 11 \cdot 1 - 6 = 1 - 6 + 11 - 6 = 0}
  $$
  $$\textcolor{red}{(x - 1)}$$ è un fattore

- trovo il resto dividendo per $$\textcolor{red}{(x + 1)}$$
  $$
  \textcolor{red}{P(-1) = (-1)^3 - 6 \cdot (-1)^2 + 11 \cdot (-1) - 6 = -1 - 6 - 11 - 6 \neq 0}
  $$
  $$\textcolor{red}{(x + 1)}$$ non è un fattore

- trovo il resto dividendo per $$\textcolor{red}{(x - 2)}$$
  $$
  \textcolor{red}{P(2) = 2^3 - 6 \cdot 2^2 + 11 \cdot 2 - 6 = 8 - 24 + 22 - 6 = 0}
  $$
  $$\textcolor{red}{(x - 2)}$$ è un fattore

- trovo il resto dividendo per $$\textcolor{red}{(x + 2)}$$
  $$
  \textcolor{red}{P(-2) = (-2)^3 - 6 \cdot (-2)^2 + 11 \cdot (-2) - 6 = -8 - 24 - 22 - 6 \neq 0}
  $$
  $$\textcolor{red}{(x + 2)}$$ non è un fattore

- trovo il resto dividendo per $$\textcolor{red}{(x - 3)}$$
  $$
  \textcolor{red}{P(3) = 3^3 - 6 \cdot 3^2 + 11 \cdot 3 - 6 = 27 - 54 + 33 - 6 = 0}
  $$
  $$\textcolor{red}{(x - 3)}$$ è un fattore

- mi fermo perché ho trovato $$3$$ fattori e il polinomio è di terzo grado

Quindi posso risolvere le tre equazioni
$$
\textcolor{red}{(x - 1) = 0}
$$
$$
\textcolor{red}{(x - 2) = 0}
$$
$$
\textcolor{red}{(x - 3) = 0}
$$

Ho le tre soluzioni
$$
\textcolor{red}{x_1 = 1}
$$
$$
\textcolor{red}{x_2 = 2}
$$
$$
\textcolor{red}{x_3 = 3}
$$

> Sembra più semplice ma non permette di trovare le radici multiple, per esempio non potrai applicarlo al terzo esercizio