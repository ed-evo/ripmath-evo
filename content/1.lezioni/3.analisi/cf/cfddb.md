# Derivata del prodotto di funzioni

Qui cominciamo ad andare sul complicato:

Se ho il prodotto di due funzioni e ne voglio la derivata devo fare:
La derivata della prima per la seconda non derivata più la prima tale e quale per la derivata della seconda.

In simboli, se

$$
\textcolor{red}{y = f(x) \cdot g(x)}
$$

allora

$$
\textcolor{red}{y' = f'(x) \cdot g(x) + f(x) \cdot g'(x)}
$$

Esempio:
Calcolare la derivata della funzione

$$
\textcolor{red}{y = x^3 \sin x}
$$

La derivata di $$\textcolor{red}{x^3}$$ è $$\textcolor{red}{3x^2}$$.
La derivata di $$\textcolor{red}{\sin x}$$ è $$\textcolor{red}{\cos x}$$.

Quindi

$$
\textcolor{red}{y' = 3x^2 \sin x + x^3 \cos x}
$$

> **[Conseguenza importante:]{.text-purple}** se devo fare la derivata di una costante per una funzione basterà moltiplicare la costante per la derivata della funzione. [dimostrazione](cfddb1.html)

Cioè posso estrarre le costanti dal segno di derivata.

Esempio:

$$
\textcolor{red}{y = 3x^4}
$$

Essendo $$\textcolor{red}{3}$$ una costante, la moltiplico per la derivata di $$\textcolor{red}{x^4}$$:

$$
\textcolor{red}{y' = 3 \cdot 4x^3}
$$

$$
\textcolor{red}{y' = 12x^3}
$$

[Se hai bisogno della dimostrazione](cfddb2.html) della regola della derivata di un prodotto.

[Facciamo alcuni esercizi](cfddb3.html) per fissare meglio la regola.

E se devo fare la derivata di un prodotto di tre o più funzioni?
Niente paura, la regola è sempre la stessa ma adattata a più funzioni; ad esempio, se devi fare la derivata della funzione

$$
\textcolor{red}{y = f(x) \cdot g(x) \cdot h(x)}
$$

allora

$$
\textcolor{red}{y' = f'(x) \cdot g(x) \cdot h(x) + f(x) \cdot g'(x) \cdot h(x) + f(x) \cdot g(x) \cdot h'(x)}
$$

Esempio:
Calcolare la derivata della funzione

$$
\textcolor{red}{y = x^5 \cdot \cos x \cdot \log x}
$$

La derivata di $$\textcolor{red}{x^5}$$ è $$\textcolor{red}{5x^4}$$.
La derivata di $$\textcolor{red}{\cos x}$$ è $$\textcolor{red}{-\sin x}$$.
La derivata di $$\textcolor{red}{\log x}$$ è $$\textcolor{red}{1/x}$$.

Quindi

$$
\textcolor{red}{y' = 5x^4 \cdot \cos x \cdot \log x + x^5 \cdot (-\sin x) \cdot \log x + x^5 \cdot \cos x \cdot 1/x}
$$

cioè

$$
\textcolor{red}{y' = 5x^4 \cdot \cos x \cdot \log x - x^5 \cdot \sin x \cdot \log x + x^5 \cdot \cos x \cdot 1/x}
$$