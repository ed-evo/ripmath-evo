# esercizio

data l'equazione
$$
\textcolor{blue}{kx^2 - (k-2)x + 1 = 0}
$$
trovare il valore di $$k$$ affinché
$$
\textcolor{blue}{x_1 + 3x_2 = 7}
$$
In questo caso non è possibile trasformare in modo semplice la relazione in somma e prodotto delle radici, quindi è più conveniente risolvere un sistema fra le tre equazioni seguenti:

- la relazione data
- la somma delle radici
- il prodotto delle radici

abbiamo le tre incognite $$x_1$$, $$x_2$$ e $$k$$ e quindi risolvendo ne troveremo il valore (è sufficiente trovare il solo valore di $$k$$)

> **Nota:** [Questo metodo di utilizzare un sistema di tre equazioni in tre incognite è applicabile ad ogni problema e potrebbe essere utilizzato come metodo generale, però se guardi i calcoli vedi che sono piuttosto lunghi e complicati, quindi sarà usato solamente quando non si potrà fare diversamente]{.text-purple}

nel nostro caso abbiamo
$$
\textcolor{red}{a = k}
$$
$$
\textcolor{red}{b = -(k-2)}
$$
$$
\textcolor{red}{c = 1}
$$
quindi la somma

$$
\textcolor{blue}{-\frac{b}{a}} = \textcolor{red}{x_1 + x_2} = \textcolor{red}{-\frac{-(k-2)}{k}}
$$

mi dà la relazione
$$
\textcolor{red}{kx_1 + kx_2 = k-2}
$$
invece il prodotto

$$
\textcolor{blue}{\frac{c}{a}} = \textcolor{red}{x_1 \cdot x_2} = \textcolor{red}{\frac{1}{k}}
$$

mi dà la relazione
$$
\textcolor{red}{kx_1 \cdot x_2 = 1}
$$

Ora posso impostare il sistema

$$
\begin{cases} \textcolor{red}{x_1 + 3x_2 = 7} \\ \textcolor{red}{kx_1 + kx_2 = k-2} \\ \textcolor{red}{kx_1 \cdot x_2 = 1} \end{cases}
$$

che per $$k$$ mi dà le soluzioni [calcoli](afccgfb4a.html)

$$
\textcolor{blue}{k_1 = \frac{-2 - \sqrt{2}}{2}} \quad \textcolor{blue}{k_2 = \frac{-2 + \sqrt{2}}{2}}
$$