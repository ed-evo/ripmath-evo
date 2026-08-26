# Fascio di circonferenze tangenti

In questo caso le due circonferenze di base sono tangenti alla stessa retta e quindi tra loro e, di conseguenza, hanno due punti coincidenti in comune.

---

Anche qui vediamo un esercizio completo.
Dato il fascio di circonferenze tangenti:

$$
(1+k)x^2 + (1+k)y^2 + 2(k-4)x + 2(2-3k)y + 2(1+k) = 0
$$

mostrare che l'asse radicale è la retta tangente comune alle due circonferenze di base.

Prima separiamo i termini contenenti il parametro da quelli non contenenti il parametro:

$$
x^2 + kx^2 + y^2 + ky^2 + 2kx - 8x + 4y - 6ky + 2 + 2k = 0
$$

$$
x^2 + y^2 - 8x + 4y + 2 + k(x^2 + y^2 + 2x - 6y + 2) = 0
$$

Abbiamo quindi le due circonferenze di base:
- $x^2 + y^2 - 8x + 4y + 2 = 0$
- $x^2 + y^2 + 2x - 6y + 2 = 0$

---

> Per mostrare che l'asse radicale è la tangente comune alle due circonferenze troviamo l'asse radicale, poi facciamo il sistema prima con una circonferenza e poi con l'altra: troveremo solo un punto (due punti coincidenti comuni) essendo il delta del sistema uguale a zero per la condizione di tangenza.

---

Calcolo l'asse radicale sottraendo fra loro le due equazioni membro a membro:

$$
\begin{aligned}
x^2 + y^2 - 8x + 4y + 2 &= 0 \\
x^2 + y^2 - 2x - 6y + 2 &= 0 \\
\hline
-10x + 10y &= 0
\end{aligned}
$$

Posso dividere per $10$ ed ottengo l'equazione dell'asse radicale:
$-x + y = 0$
$y = x$ (Bisettrice del primo e terzo quadrante)

Quindi, risolviamo i sistemi per mostrare che vale la condizione di tangenza nello stesso punto ed alla stessa retta:

- $$
\begin{cases}
y = x \\
x^2 + y^2 + 2x - 6y + 2 = 0
\end{cases}
$$
e trovo come risultato un solo punto, cioè due punti coincidenti (il delta del sistema è uguale a zero), essendo il punto trovato il punto di tangenza:
[$$T(1;1)$]{.text-red}

- $$
\begin{cases}
y = x \\
x^2 + y^2 - 8x + 4y + 2 = 0
\end{cases}
$$
e trovo come risultato un solo punto, cioè due punti coincidenti (il delta del sistema è uguale a zero), essendo il punto trovato il punto di tangenza:
[$$T(1;1)$]{.text-red}

Quindi l'asse radicale $y = x$ è la tangente comune alle due circonferenze base del fascio nello stesso punto [$$T(1;1)$]{.text-red}.

---