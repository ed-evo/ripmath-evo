# Discussione con metodo grafico

Qui devi essere abbastanza "esperto" di geometria cartesiana: il problema si può scomporre di solito nell'intersezione o fra una retta ed una parabola, oppure fra due parabole, od anche, soprattutto nei problemi trigonometrici, nell'intersezione fra una retta ed una circonferenza: una delle due, possibilmente la retta, varierà al variare del parametro $k$, intersecando l'altra curva in uno, nessuno o due punti. Queste intersezioni nelle parti di figura comprese nei limiti forniranno le soluzioni.

Per ora ci limiteremo ad un semplice esempio, rimandando alla seconda stesura del sito lo studio dei vari casi possibili.

***

Discutere al variare del parametro $k$ l'equazione

$x^2 - 3x + 2k - 1 = 0$ con i limiti $-2 < x \le 4$

Qui siamo abbastanza liberi: dobbiamo trasportare dopo l'uguale una parte dell'equazione in modo da avere l'uguaglianza fra due curve note di cui una fissa (cioè una senza il parametro).

I punti comuni alle due curve nei limiti richiesti saranno le soluzioni cercate.

***

Potrei prendere:

- $x^2 - 3x - 1 = -2k$ la parabola fissa $y = x^2 - 3x - 1$ con la retta variabile $y = -2k$
- $x^2 - 3x = 1 - 2k$ la parabola fissa $y = x^2 - 3x$ con la retta variabile $y = 1 - 2k$
- $x^2 = 3x + 1 - 2k$ la parabola fissa $y = x^2$ con la retta variabile $y = 3x + 1 - 2k$
- $x^2 + 2k = 3x + 1$ la parabola variabile $y = x^2 + 2k$ con la retta fissa $y = 3x + 1$
- $x^2 + 2k - 1 = 3x$ la parabola variabile $y = x^2 + 2k - 1$ con la retta fissa $y = 3x$
- $x^2 - 3x + 2k = 1$ la parabola variabile $y = x^2 - 3x + 2k$ con la retta fissa $y = 1$

***

Prendiamo quella che ci sembra più semplice:

$x^2 = 3x + 1 - 2k$
la parabola fissa $y = x^2$ con la retta variabile $y = 3x + 1 - 2k$

$$
\begin{cases} 
\textcolor{blue}{y = x^2} \\ 
\textcolor{blue}{y = 3x + 1 - 2k} 
\end{cases}
$$

Disegniamo la curva $\textcolor{blue}{y = x^2}$: è una [parabola](../../d/dg/dgba.html) con il vertice nell'origine e prendiamone solo la parte che ci interessa, cioè per $-2 < x \le 4$.

Troviamo i valori al limite [sostituendo](afcchcba.html) nella $x$ della parabola i valori limite: otteniamo i punti $A(-2,4)$ e $B(4,16)$.

Adesso prendiamo la retta $\textcolor{blue}{y = 3x + 1 - 2k}$; notiamo che varia solamente il termine noto; quindi l'equazione rappresenta un fascio di rette parallele. Cominciamo col disegnare la retta del fascio che passa per l'origine $\textcolor{blue}{y = 3x}$ e mettiamola nel grafico; ad essa corrisponde il valore di $k$:

$\textcolor{blue}{(\text{termine noto} = 0) \quad 1 - 2k = 0 \quad k = 1/2}$

> **Nota:** non sarebbe necessario fare il passaggio per l'origine ma ti può aiutare a capire meglio il problema: adesso devi pensare di [spostare la retta parallelamente a sé stessa](animaf01/afcchcb01.html) in modo che passi per il punto $A$, per il punto $B$ e per il punto di tangenza e contare quante sono le intersezioni con l'arco di parabola.

Nella prossima figura prendo solo le rette necessarie.

Facciamo il passaggio per il punto $A(-2,4)$ e troviamo il valore di $k$: basta sostituire nella retta ad $x$ il valore $-2$ e ad $y$ il valore $4$.

$$
\textcolor{blue}{4 = 3(-2) + 1 - 2k}
$$
$$
\textcolor{blue}{4 = -5 - 2k}
$$
$$
\textcolor{blue}{2k = -9}
$$
$$
\textcolor{blue}{k = -9/2}
$$

Facciamo il passaggio per il punto $B(4,16)$ e troviamo il valore di $k$: basta sostituire nella retta ad $x$ il valore $4$ e ad $y$ il valore $16$.

$$
\textcolor{blue}{16 = 3(4) + 1 - 2k}
$$
$$
\textcolor{blue}{16 = 13 - 2k}
$$
$$
\textcolor{blue}{2k = -3}
$$
$$
\textcolor{blue}{k = -3/2}
$$

Troviamo ora il valore di $k$ quando la retta è tangente: basterà risolvere il sistema tra la retta e la parabola (cioè prendere l'equazione iniziale) e porre il discriminante uguale a zero.

$$
\textcolor{blue}{x^2 - 3x + 2k - 1 = 0}
$$
$$
\textcolor{blue}{a = 1 \quad b = -3 \quad c = 2k - 1}
$$
$$
\textcolor{blue}{b^2 - 4ac = 0}
$$
$$
\textcolor{blue}{(-3)^2 - 4(1)(2k-1) = 0}
$$
$$
\textcolor{blue}{9 - 8k + 4 = 0}
$$
$$
\textcolor{blue}{-8k = -13}
$$
$$
\textcolor{blue}{k = 13/8}
$$

Quindi abbiamo:

- Una soluzione per $-9/2 < k < -3/2$
- Due soluzioni per $-3/2 \le k \le 13/8$

> **Nota:** Per i segni di minore e di minore uguale, siccome abbiamo $-2 < x \le 4$ il punto $B$ è da considerare valido per la soluzione, mentre il punto $A$ non dà soluzioni.