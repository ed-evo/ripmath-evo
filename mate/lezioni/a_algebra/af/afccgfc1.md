# <span class="text-red-600">esercizio</span>

Data l'equazione
$\textcolor{blue}{kx^2 - kx + k + 2 = 0}$
trovare il valore di $k$ affinché il rapporto delle radici valga $1/2$, significa che

$$
\textcolor{blue}{\frac{x_1}{x_2} = \frac{1}{2}}
$$

cioè
$\textcolor{blue}{x_2 = 2x_1}$

**Ripeto l'avvertenza della quarta parte dell'esercizio precedente**

In questo caso non è possibile trasformare in modo semplice la relazione in somma e prodotto delle radici, quindi è più conveniente risolvere un sistema fra le tre equazioni seguenti:

- la relazione data
- la somma delle radici
- il prodotto delle radici

Abbiamo le tre incognite $x_1$, $x_2$ e $k$ e quindi, risolvendo, ne troveremo il valore (è sufficiente trovare il solo valore di $k$).

> <span class="text-purple-700">**Nota:** questo metodo di utilizzare un sistema di tre equazioni in tre incognite è applicabile ad ogni problema e potrebbe essere utilizzato come metodo generale, però se guardi i calcoli vedi che sono piuttosto lunghi e complicati, quindi sarà usato solamente quando non si potrà fare diversamente</span>

Nel nostro caso abbiamo
$$
a = k
$$
$$
b = -k
$$
$$
c = k + 2
$$

Quindi la somma

$$
\textcolor{blue}{-\frac{b}{a}} = x_1 + x_2 = \frac{-k}{k}
$$

mi dà la relazione
$x_1 + x_2 = 1$

Invece il prodotto

$$
\textcolor{blue}{\frac{c}{a}} = x_1 \cdot x_2 = \frac{k + 2}{k}
$$

mi dà la relazione
$kx_1x_2 = k + 2$

Ora posso impostare il sistema

$$
\begin{cases} 
x_2 = 2x_1 \\ 
x_1 + x_2 = 1 \\ 
kx_1x_2 = k + 2 
\end{cases}
$$

che per $k$ mi dà la soluzione [ <span class="text-red-600">calcoli</span>](afccgfc1a.html)

$\textcolor{blue}{k = -18/7}$