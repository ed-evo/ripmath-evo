# Svolgimento

$$
\textcolor{blue}{y = \left( \frac{1 + x^n}{1 - x^n} \right)^m}
$$

È la potenza di una frazione: prima deriviamo la potenza e, successivamente la frazione; per mostrartelo meglio fra la derivata della potenza e quella della frazione lascio un po' di spazio

$$
\textcolor{red}{y' = m \left( \frac{1 + x^n}{1 - x^n} \right)^{m-1} \frac{n x^{n-1} (1 - x^n) - (-n) x^{n-1} (1 + x^n)}{(1 - x^n)^2}}
$$

$$
\textcolor{red}{y' = m \left( \frac{1 + x^n}{1 - x^n} \right)^{m-1} \frac{n x^{n-1} (1 - x^n) + n x^{n-1} (1 + x^n)}{(1 - x^n)^2}}
$$

Possiamo scriverlo in modo più compatto mettendo in evidenza al numeratore $n x^{n-1}$, ottengo:

$$
\textcolor{red}{y' = m \left( \frac{1 + x^n}{1 - x^n} \right)^{m-1} \frac{n x^{n-1} (1 - x^n + 1 + x^n)}{(1 - x^n)^2}}
$$

$$
\textcolor{red}{y' = \left( \frac{1 + x^n}{1 - x^n} \right)^{m-1} \frac{2m n x^{n-1}}{(1 - x^n)^2}}
$$