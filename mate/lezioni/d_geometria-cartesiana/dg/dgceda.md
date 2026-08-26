[esercizio]{.text-red}

# Esercizio 1

Date le parabole
$\mathbf{y = x^2 - 2x \quad y = -x^2 + 2x}$

1) Trovare l'equazione esplicita della famiglia di parabole da loro generata
2) Dire se esistono parabole degeneri nella famiglia
3) Verificare che tutte le parabole della famiglia passano per due punti base $A$ e $B$
4) Determinare la parabola della famiglia che passa per il punto $C(3;4)$
5) Determinare la parabola della famiglia tangente alla bisettrice del primo e terzo quadrante

1. Trovare l'equazione esplicita della famiglia di parabole da loro generata
> **Traccia:** scriviamole in forma implicita, facciamo la combinazione lineare delle due equazioni, poi esplicitiamo la $y$.

scrivo le equazioni in forma implicita
$\mathbf{y - x^2 + 2x = 0 \quad y + x^2 - 2x = 0}$

faccio la combinazione lineare delle due equazioni
$\mathbf{y - x^2 + 2x + k(y + x^2 - 2x) = 0}$

per esplicitare la $y$ prima eseguo le moltiplicazioni
$\mathbf{y - x^2 + 2x + ky + kx^2 - 2kx = 0}$

raccolgo le variabili per tipo ed ordine
$\mathbf{(1+k)y + (-1+k)x^2 + 2(1-k)x = 0}$

cambio segno al secondo termine dentro e fuori parentesi
$\mathbf{(1+k)y - (1-k)x^2 + 2(1-k)x = 0 \quad \text{con } k \neq -1}$

Questa è la forma implicita del fascio; esplicito la $y$
$$
y = \frac{(1-k)x^2 - 2(1-k)x}{1+k} \quad \text{con } k \neq -1
$$

2. Dire se esistono parabole degeneri nella famiglia
Per vedere se esistono parabole degeneri dobbiamo vedere se è possibile eliminare il termine $\mathbf{x^2}$ del fascio;
$\mathbf{(1+k)y + (1-k)x^2 + 2(1-k)x = 0}$
per eliminare $\mathbf{x^2}$ dovrà essere $\mathbf{(k-1)=0}$ cioè $\mathbf{k = 1}$ e, sostituendo, otteniamo
$\mathbf{y = 0}$
quindi per $k=1$ la parabola del fascio degenera nella retta $\mathbf{y=0}$ (asse orizzontale).

3. Verificare che tutte le parabole della famiglia passano per due punti base $A$ e $B$
> **Traccia:** prendo le parabole di base e faccio il sistema: le soluzioni, se esistono, saranno le coordinate dei punti base del fascio. Per trovare i punti base del fascio possiamo fare il sistema fra le due parabole di base, oppure fra due parabole qualunque del fascio (per trovarle basta dare due valori qualunque a $k$ diversi però da $-1$).

faccio il sistema fra le parabole di base
$$
\begin{cases}
y = x^2 - 2x \\
y = -x^2 + 2x
\end{cases}
$$

sostituisco
$$
\begin{cases}
y = x^2 - 2x \\
x^2 - 2x = -x^2 + 2x
\end{cases}
$$

$$
\begin{cases}
y = x^2 - 2x \\
x^2 - 2x + x^2 - 2x = 0
\end{cases}
$$

$$
\begin{cases}
y = x^2 - 2x \\
2x^2 - 4x = 0
\end{cases}
$$

$$
\begin{cases}
y = x^2 - 2x \\
x^2 - 2x = 0
\end{cases}
$$

$$
\begin{cases}
y = x^2 - 2x \\
x(x - 2) = 0
\end{cases}
$$

ottengo le soluzioni
$\mathbf{x_1 = 0 \quad x_2 = 2}$

Sostituisco i valori nell'altra equazione del sistema ed ottengo
$$
\begin{cases}
y_1 = 0^2 - 2(0) = 0 \\
x_1 = 0
\end{cases}
$$

$$
\begin{cases}
y_2 = 2^2 - 2(2) = 4 - 4 = 0 \\
x_2 = 2
\end{cases}
$$

prima soluzione:
$$
\begin{cases}
x = 0 \\
y = 0
\end{cases}
$$
seconda soluzione:
$$
\begin{cases}
x = 2 \\
y = 0
\end{cases}
$$

quindi esistono due punti base le cui coordinate sono
$\mathbf{A \equiv (0;0) \quad B \equiv (2;0)}$

4. Determinare la parabola della famiglia che passa per il punto $\mathbf{C(3;4)}$
basta semplicemente imporre il passaggio per il punto $C$ sostituendo nella famiglia ad $x$ ed $y$ le coordinate di $C$ per determinare il valore di $k$.
Considero la forma implicita del fascio
$\mathbf{(1+k)y + (1-k)x^2 + 2(1-k)x = 0}$
sostituisco
$\mathbf{(1+k) \cdot 4 + (1-k) \cdot 16 + 2(1-k) \cdot 4 = 0}$
$\mathbf{4 + 4k + 16 - 16k + 8 - 8k = 0}$
$\mathbf{-20k + 28 = 0}$
$\mathbf{-20k = -28}$
$\mathbf{20k = 28}$
$\mathbf{k = 28/20 = 7/5}$

sostituisco questo valore nell'equazione della famiglia ed ottengo
$$
y = \frac{(1 - 7/5)x^2 + 2(1 - 7/5)x}{1 + 7/5}
$$

$$
y = \frac{(-2/5)x^2 + 2(-2/5)x}{12/5}
$$

posso eliminare i $5$ ai denominatori essendo essi in tutti i termini
$$
y = \frac{-2x^2 - 4x}{12}
$$

semplifico sopra e sotto per $2$
$$
y = \frac{-x^2 - 2x}{6}
$$

dopo l'uguale suddivido in due termini
$\mathbf{y = -1/6 x^2 - 2/6 x}$
quindi ottengo l'equazione della parabola cercata
$\mathbf{y = -1/6 x^2 - 1/3 x}$

5. Determinare la parabola della famiglia tangente alla bisettrice del primo e terzo quadrante
> **Traccia:** per determinare la parabola facciamo il sistema fra l'equazione della famiglia e l'equazione della bisettrice, imponiamo che il delta del sistema sia uguale a zero (condizione di tangenza). Otteniamo un'equazione in $k$ che, risolta ci darà il valore (o i valori, se esistono) di $k$ che determinano le parabole della famiglia che soddisfano la condizione.

Faccio il sistema fra l'equazione della famiglia e l'equazione della retta
$$
\begin{cases}
(1 + k)y + (1 - k)x^2 + 2(1 - k)x = 0 \quad \text{con } k \neq -1 \\
y = x
\end{cases}
$$

sostituisco
$$
\begin{cases}
(1 + k)x + (1 - k)x^2 + 2(1 - k)x = 0 \\
y = x
\end{cases}
$$

$$
\begin{cases}
(1 + k)x + (1 - k)x^2 + (2 - 2k)x = 0 \\
y = x
\end{cases}
$$

$$
\begin{cases}
(1 - k)x^2 + (2 - 2k + 1 + k)x = 0 \\
y = x
\end{cases}
$$

ottengo l'equazione risolvente:
$$
\begin{cases}
(1 - k)x^2 + (3 - k)x = 0 \\
y = x
\end{cases}
$$

Poniamo il delta uguale a zero
$\mathbf{b^2 - 4ac = 0}$
vale $\mathbf{a = 1 - k \quad b = 3 - k \quad c = 0}$

$\mathbf{(3 - k)^2 - 4 \cdot (1 - k)(0) = 0}$

$\mathbf{(3 - k)^2 = 0}$

$\mathbf{k = 3}$

Sostituisco il valore $3$ a $k$ nell'equazione della famiglia per trovare la parabola cercata
$\mathbf{(1 + 3)y + (1 - 3)x^2 + 2(1 - 3)x = 0}$

$\mathbf{4y - 2x^2 - 4x = 0}$

$\mathbf{4y = 2x^2 + 4x}$

divido tutto per $2$
$\mathbf{2y = x^2 + 2x}$

esplicito ed ottengo l'equazione della parabola desiderata
$\mathbf{y = 1/2 x^2 + x}$