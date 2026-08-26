# Introduzione alla formula di Taylor

La formula di Taylor si propone di trasformare una funzione continua e derivabile (almeno di ordine $n$) in una somma di funzioni polinomiali.

---

Partiamo dal teorema di Lagrange applicato alla funzione continua e derivabile $f(x)$ all'interno dell'intervallo $[a,x]$:

$$
\textcolor{red}{\frac{f(x) - f(a)}{x - a} = f'(c)}
$$

Che posso anche scrivere come:

$$
\textcolor{red}{f(x) = f(a) + (x-a)f'(c)}
$$

---

C'è da dire che quando $x$ tende ad $a$ il termine $\textcolor{red}{(x-a)f'(c)}$ diventa infinitesimo (e, intuitivamente, posso scambiare $c$ con $x$, cioè $\textcolor{red}{f'(x) = f'(c)}$).

Se la funzione $f'(x)$ nell'intervallo $[a,x]$ è continua e derivabile all'interno dell'intervallo posso ancora applicare il teorema di Lagrange ed ottengo:

$$
\textcolor{red}{\frac{f'(x) - f'(a)}{x - a} = f''(c)}
$$

E siccome posso scambiare $c$ ed $x$:

$$
\textcolor{red}{\frac{f'(c) - f'(a)}{x - a} = f''(c)}
$$

Che posso anche scrivere come:

$$
\textcolor{blue}{f'(c) = f'(a) + (x-a)f''(c)}
$$

Andando a sostituire nella prima formula ottengo:

$$
\textcolor{red}{f(x) = f(a) + (x-a)[\textcolor{blue}{f'(a) + (x-a)f''(c)}]}
$$

Cioè eseguendo i calcoli:

$$
\textcolor{red}{f(x) = f(a) + (x-a)f'(a) + (x-a)^2 f''(c)}
$$

---

Posso ripetere il procedimento se $f''(x)$ è continua e derivabile ed ottengo:

$$
\textcolor{red}{\frac{f''(c) - f''(a)}{x - a} = f'''(c)}
$$

Che posso anche scrivere come:

$$
\textcolor{blue}{f''(c) = f''(a) + (x-a)f'''(c)}
$$

Andando a sostituire nella prima formula ottengo:

$$
\textcolor{red}{f(x) = f(a) + (x-a)f'(a) + (x-a)^2 [\textcolor{blue}{f''(a) + (x-a)f'''(c)}]}
$$

Cioè eseguendo i calcoli:

$$
\textcolor{red}{f(x) = f(a) + (x-a)f'(a) + (x-a)^2 f''(a) + (x-a)^3 f'''(c)}
$$

---

Posso procedere ancora finché la funzione è continua e derivabile:

$$
\textcolor{red}{f(x) = f(a) + (x-a)f'(a) + (x-a)^2 f''(a) + (x-a)^3 f'''(a) + (x-a)^4 f^{IV}(c)}
$$

> **Nota:** il termine con $f^{IV}(c)$ si chiama resto nella forma di Lagrange.

---

> **Osservazione:** Nel nostro procedimento però non abbiamo tenuto conto delle costanti: derivando una costante si ottiene il valore zero. Per capire quali costanti sono necessarie consideriamo l'espressione trovata: essa deve sempre essere un'uguaglianza. Se considero $x = a$ ottengo che dovrò avere i valori:
> - $f(a)$ per la funzione
> - $f'(a)$ per la derivata prima
> - $f''(a)$ per la derivata seconda
> - $f'''(a)$ per la derivata terza
> - ...
> 
> Cioè, se eseguo questo procedimento per l'ultima espressione considerata, ho che per avere l'uguaglianza il termine con $(x-a)^2 f''(a)$ dovrà essere fratto $2$, perché altrimenti facendo la derivata seconda non otterrei $f(a)$ ma $2f(a)$. Similmente il termine con $(x-a)^3 f'''(a)$ dovrà essere fratto $3 \cdot 2 = 6$.

---

Ottengo quindi la formula (fino alla derivata quarta):

$$
\textcolor{red}{f(x) = f(a) + \frac{(x-a)}{1}f'(a) + \frac{(x-a)^2}{1 \cdot 2}f''(a) + \frac{(x-a)^3}{1 \cdot 2 \cdot 3}f'''(a) + \frac{(x-a)^4}{1 \cdot 2 \cdot 3 \cdot 4}f^{IV}(c)}
$$