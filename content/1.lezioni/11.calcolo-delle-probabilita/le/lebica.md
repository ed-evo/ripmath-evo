# Distribuzione di Gauss come limite (intuitivo) della variabile binomiale

> Riprendiamo un esempio già accennato:

Consideriamo ancora la variabile gaussiana discreta sull'esempio del lancio di una moneta:

**Lanciando una moneta consideriamo la probabilità che esca testa: ho la probabilità $$p = \frac{1}{2}$$ e la probabilità contraria $$q = \frac{1}{2}$$**

All'aumentare del numero delle prove avremo che successivi rettangoli obbediranno alla legge del triangolo di Tartaglia, essendo legati alla regola della potenza del binomio:

$$
\begin{matrix}
\textcolor{blue}{1} & \textcolor{blue}{1} \\
\textcolor{blue}{1} & \textcolor{blue}{2} & \textcolor{blue}{1} \\
\textcolor{blue}{1} & \textcolor{blue}{3} & \textcolor{blue}{3} & \textcolor{blue}{1} \\
\textcolor{blue}{1} & \textcolor{blue}{4} & \textcolor{blue}{6} & \textcolor{blue}{4} & \textcolor{blue}{1} \\
\textcolor{blue}{1} & \textcolor{blue}{5} & \textcolor{blue}{10} & \textcolor{blue}{10} & \textcolor{blue}{5} & \textcolor{blue}{1} \\
\textcolor{blue}{1} & \textcolor{blue}{6} & \textcolor{blue}{15} & \textcolor{blue}{20} & \textcolor{blue}{15} & \textcolor{blue}{6} & \textcolor{blue}{1} \\
\dots & \dots & \dots & \dots & \dots & \dots & \dots
\end{matrix}
$$

Quindi, poiché l'area sottesa deve sempre valere $$1$$ (somma di tutte le probabilità), al posto dei rettangoli avremo dei rettangoli sempre più snelli sino ad arrivare a basi infinitesime e quindi ad avere, per i valori delle probabilità, una curva indistinguibile da una curva continua.

Tale curva sarà detta anche curva a campana di Gauss e sarà del tipo:

$$
y = k e^{-x^2}
$$

con $$k$$ valore dato.

> La dimostrazione analitica di come si ricavi la formula precisa trascende i limiti dei programmi delle scuole medie superiori, quindi, nelle prossime pagine, ci accontenteremo di prendere la formula finale e di fare alcune osservazioni.