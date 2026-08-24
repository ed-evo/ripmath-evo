# [Punto che divide un segmento in un rapporto assegnato]{.text-red}

Conoscendo le coordinate di due punti nel piano è possibile determinare le coordinate di un loro punto intermedio che divida il segmento secondo un rapporto assegnato $\frac{m}{n}$

***

> È un argomento che solo molto raramente ho visto fare nelle scuole medie superiori

***

Consideriamo i punti nel piano
$\textcolor{blue}{A = (x_1, y_1)} \quad \textcolor{blue}{B = (x_2, y_2)}$

Inoltre chiamo $\textcolor{blue}{P = (x_k, y_k)}$ il punto che divide il segmento nel rapporto $k = \frac{m}{n}$

$$
\textcolor{blue}{\frac{AP}{PB} = \frac{m}{n}}
$$

Per comodità supponiamo che i punti si trovino nel primo quadrante, la formula che otterremo sarà comunque valida in tutto il piano.

Da $\textcolor{blue}{A}$, $\textcolor{blue}{B}$ e $\textcolor{blue}{P}$ traccio le coordinate. Sull'asse x le proiezioni saranno $\textcolor{blue}{A'}$ , $\textcolor{blue}{B'}$ e $\textcolor{blue}{P'}$

Poiché $\textcolor{blue}{P}$ è il punto fra $\textcolor{blue}{A}$ e $\textcolor{blue}{B}$ che divide il segmento nel rapporto $\frac{m}{n}$, allora anche $\textcolor{blue}{P'}$ dividerà il segmento $\textcolor{blue}{A' B'}$ nello stesso rapporto ([Teorema di Talete](../../f/fp/fpaa.html)). Quindi

$$
\textcolor{blue}{\frac{A'P'}{P'B'} = \frac{m}{n}}
$$

Sostituendo le misure

$$
\textcolor{blue}{\frac{x_k - x_1}{x_2 - x_k} = \frac{m}{n}}
$$

faccio il minimo comune multiplo (o equivalentemente moltiplico in croce)

$$
\textcolor{blue}{n(x_k - x_1) = m(x_2 - x_k)}
$$

moltiplico

$$
\textcolor{blue}{nx_k - nx_1 = mx_2 - mx_k}
$$

devo ricavare $x_k$ quindi porto i termini che lo contengono prima dell'uguale

$$
\textcolor{blue}{nx_k + mx_k = nx_1 + mx_2}
$$

raccolgo $x_k$

$$
\textcolor{blue}{x_k(n + m) = nx_1 + mx_2}
$$

risolvendo rispetto a $x_k$ trovo la formula finale

$$
\textcolor{blue}{x_k = \frac{nx_1 + mx_2}{n + m}}
$$

in modo equivalente troverò la formula per la coordinata y

$$
\textcolor{blue}{y_k = \frac{ny_1 + my_2}{n + m}}
$$

***

vediamo un semplice [esercizio](dcda0.html)