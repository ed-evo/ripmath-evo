# Svolgimento

$$
\textcolor{red}{y = 4x^2 \cdot \cos(4x^3 + 6x + 2)}
$$

Il $4$ è una costante, poi abbiamo il prodotto tra le due funzioni:

$\textcolor{red}{x^2}$

e

$\textcolor{red}{\cos(4x^3 + 6x + 2)}$

e quest'ultima è anche una funzione composta (funzione di funzione). Applico la regola:

$$
\textcolor{red}{y' = f' \cdot g + f \cdot g'}
$$

- $\textcolor{red}{4}$ è una costante e la estraggo dalla derivata (la metto davanti a una parentesi che contiene la derivata).
- La derivata di $\textcolor{red}{x^2}$ è $\textcolor{red}{2x}$.
- $\textcolor{red}{\cos(4x^3 + 6x + 2)}$ è una funzione composta, quindi devo applicare la regola:
  $$
  y = f[g(x)] \rightarrow y' = f'[g(x)] \cdot g'(x)
  $$
  - La derivata di $\textcolor{red}{\cos x}$ è $\textcolor{red}{-\text{sen } x}$.
  - La derivata di $\textcolor{red}{4x^3 + 6x + 2}$ è $\textcolor{red}{12x^2 + 6}$.

  Quindi la derivata è $\textcolor{red}{-\text{sen}(4x^3 + 6x + 2) \cdot (12x^2 + 6)}$.

Quindi

$$
\textcolor{red}{y' = 4 \cdot \{2x \cos(4x^3 + 6x + 2) + x^2 \cdot [-\text{sen}(4x^3 + 6x + 2) \cdot (12x^2 + 6)]\}}
$$

$$
\textcolor{red}{= 8x \cos(4x^3 + 6x + 2) - (48x^4 + 24x^2) \cdot \text{sen}(4x^3 + 6x + 2)}
$$