# Fascio di circonferenze secanti

È il caso classico: in questo caso le due circonferenze di base hanno due punti comuni fra loro.

***

Vediamo un esercizio completo.
Dato il fascio di circonferenze:

$$
(1+k)x^2 + (1+k)y^2 + 4(1-2k)x + 2(k-1)y - 4(5+7k) = 0
$$

trovare i punti base del fascio e controllare che la retta dei centri è perpendicolare all'asse radicale delle due circonferenze.

Prima separiamo i termini contenenti il parametro da quelli non contenenti il parametro:

$$
x^2 + kx^2 + y^2 + ky^2 + 4x - 8kx + 2ky - 2y - 20 - 28k = 0
$$

$$
x^2 + y^2 + 4x - 2y - 20 + k(x^2 + y^2 - 8x + 2y - 28) = 0
$$

Abbiamo quindi le due circonferenze di base:

- $x^2 + y^2 + 4x - 2y - 20 = 0$
- $x^2 + y^2 - 8x + 2y - 28 = 0$

Per trovare i punti base del fascio sostituiamo una delle due equazioni con l'asse radicale per avere un sistema più facile da risolvere.
Calcolo l'asse radicale sottraendo fra loro le due equazioni membro a membro:

$$
\begin{aligned}
x^2 + y^2 + 4x - 2y - 20 &= 0 \\
x^2 + y^2 - 8x + 2y - 28 &= 0 \\
\hline
12x - 4y + 8 &= 0
\end{aligned}
$$

Posso dividere per $4$ ed ottengo l'equazione dell'asse radicale:

$$
3x - y + 2 = 0
$$

Quindi, per trovare i punti comuni (punti base del fascio) risolvo il sistema:

$$
\begin{cases}
3x - y + 2 = 0 \\
x^2 + y^2 + 4x - 2y - 20 = 0
\end{cases}
$$

e trovo come risultato:

$\textcolor{red}{A(-2; -4) \quad B(1; 5)}$

Troviamo ora i centri delle due circonferenze e, quindi, la retta dei centri:

- **Prima circonferenza**
  $x^2 + y^2 + 4x - 2y - 20 = 0$
  troviamo il centro $C_1(-\frac{a}{2}; -\frac{b}{2})$
  essendo $a = 4$ e $b = -2$
  $\textcolor{red}{C_1(-2; 1)}$

- **Seconda circonferenza**
  $x^2 + y^2 - 8x + 2y - 28 = 0$
  troviamo il centro $C_2(-\frac{a}{2}; -\frac{b}{2})$
  essendo $a = -8$ e $b = 2$
  $\textcolor{red}{C_2(4; -1)}$

Ora, per trovare la retta dei centri applichiamo la formula della retta per due punti:

$$
\frac{y - y_1}{y_2 - y_1} = \frac{x - x_1}{x_2 - x_1}
$$

Ho $x_1 = -2$, $y_1 = 1$, $x_2 = 4$, $y_2 = -1$

$$
\frac{y - 1}{-1 - 1} = \frac{x - (-2)}{4 - (-2)}
$$

$$
\frac{y - 1}{-2} = \frac{x + 2}{6}
$$

$$
6y - 6 = -2x - 4
$$

$$
2x + 6y - 2 = 0
$$

divido per $2$

$$
x + 3y - 1 = 0
$$

la pongo in forma esplicita:

$$
y = -\frac{1}{3}x + \frac{1}{3}
$$

la confronto con la forma esplicita dell'asse radicale:

$$
y = 3x + 2
$$

essendo i coefficienti angolari $-\frac{1}{3}$ e $3$ uno inverso ed opposto dell'altro le due rette sono perpendicolari fra loro come dovevamo verificare.