# [esercizio]{.text-red}

data l'equazione
$\textcolor{blue}{kx^2 - kx + k + 2 = 0}$
trovare il valore di $k$ affinché il rapporto delle radici valga $1/2$
significa che

$$
\frac{x_1}{x_2} = \frac{1}{2}
$$

cioè
$\textcolor{blue}{x_2 = 2x_1}$

**Ripeto l'avvertenza della quarta parte dell'esercizio precedente**

in questo caso non è possibile trasformare in modo semplice la relazione in somma e prodotto delle radici, quindi è più conveniente risolvere un sistema fra le tre equazioni seguenti:

- la relazione data
- la somma delle radici
- il prodotto delle radici

abbiamo le tre incognite $x_1$, $x_2$ e $k$ e quindi risolvendo ne troveremo il valore (è sufficiente trovare il solo valore di $k$)

> **Nota:** [questo metodo di utilizzare un sistema di tre equazioni in tre incognite è applicabile ad ogni problema e potrebbe essere utilizzato come metodo generale, però se guardi i calcoli vedi che sono piuttosto lunghi e complicati, quindi sarà usato solamente quando non si potrà fare diversamente]{.text-purple}

nel nostro caso abbiamo
$\textcolor{red}{a = k}$
$\textcolor{red}{b = -k}$
$\textcolor{red}{c = k + 2}$
quindi la somma

$$
\textcolor{blue}{-\frac{b}{a}} = \textcolor{red}{x_1 + x_2} = \textcolor{red}{-\frac{-k}{k}}
$$

mi dà la relazione
$\textcolor{red}{x_1 + x_2 = 1}$
invece il prodotto

$$
\textcolor{blue}{\frac{c}{a}} = \textcolor{red}{x_1 \cdot x_2} = \textcolor{red}{\frac{k + 2}{k}}
$$

mi dà la relazione
$\textcolor{red}{kx_1x_2 = k + 2}$

Ora posso impostare il sistema

$$
\begin{cases}
\textcolor{red}{x_2 = 2x_1} \\
\textcolor{red}{x_1 + x_2 = 1} \\
\textcolor{red}{kx_1x_2 = k + 2}
\end{cases}
$$

che per $k$ mi dà la soluzione [calcoli]{.text-red}

$\textcolor{blue}{k = -18/7}$