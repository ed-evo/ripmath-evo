# [Area del trapezoide]{.text-red}

Aumento il numero di intervalli in cui è divisa la base del mio trapezoide, in questo modo l'area dei rettangoli si avvicina all'area del trapezoide.

$$
\textcolor{red}{\sum_{k=1}^{n} f(x_k) \cdot (x_k - x_{k-1}) \le \text{Area del trapezoide}}
$$

Per essere sicuro di individuare bene l'area del trapezoide considero anche i rettangoli che ottengo considerando come altezza il massimo della funzione nell'intervallo, in questo modo ottengo dei rettangoli esterni e la somma dei rettangoli è superiore all'area del trapezoide.

Indico con $\textcolor{red}{F(x_k)}$ il massimo della funzione nell'intervallo $\textcolor{red}{x_k - x_{k-1}}$, allora avrò:

$$
\textcolor{red}{\sum_{k=1}^{n} F(x_k) \cdot (x_k - x_{k-1}) \ge \text{Area del trapezoide}}
$$

Aumento il numero di intervalli in cui è divisa la base del mio trapezoide e li faccio diventare infiniti in modo che l'area dei rettangoli diventi uguale all'area del trapezoide; per fare questo dovremo fare il limite delle somme precedenti per $n$ tendente all'infinito, quindi ci avvicineremo all'area da valori superiori e da valori inferiori e l'area viene ben determinata.

$$
\textcolor{red}{\lim_{n \to \infty} \sum_{k=1}^{n} F(x_k) \cdot (x_k - x_{k-1}) = \text{Area} = \lim_{n \to \infty} \sum_{k=1}^{n} f(x_k) \cdot (x_k - x_{k-1})}
$$