Disegnare il grafico della parabola [$y = x^2 + 2x - 8${.text-red}]

Seguiamo questo schema:
- Trovare le coordinate del vertice
- Trovare (se esistono) le intersezioni con l'asse $x$
- Trovare l'intersezione con l'asse delle $y$
- Unire in un grafico i punti trovati

---

1. Trovare le coordinate del vertice

Per trovare le coordinate $V_x$ e $V_y$ posso applicare le formule:

$$
\textcolor{red}{V_x = -\frac{b}{2a}}
$$

$$
\textcolor{red}{V_y = -\frac{b^2 - 4ac}{4a}}
$$

Sapendo che nel nostro caso $a = 1$, $b = 2$, $c = -8$:

$$
\textcolor{red}{V_x = -\frac{2}{2 \cdot 1} = -1}
$$

$$
\textcolor{red}{V_y = -\frac{2^2 - 4 \cdot 1 \cdot (-8)}{4 \cdot 1} = -\frac{4 + 32}{4} = -9}
$$

> **Nota:** Poiché il secondo calcolo può facilmente portare a degli errori, ai miei alunni ho insegnato a trovare solo la $x$ e poi sostituirla nell'equazione per trovare la $y$.
> 
> Sostituisco $-1$ ad $x$ nell'equazione di partenza:
> $$
> \textcolor{red}{y = (-1)^2 + 2 \cdot (-1) - 8 = 1 - 2 - 8 = -9}
> $$
> 
> Un altro sistema è fare la derivata prima e porla uguale a zero: infatti il vertice per la parabola è sempre un punto di massimo o di minimo:
> $$
> \textcolor{red}{y' = 2x + 2}
> $$
> $$
> \textcolor{red}{y' = 0}
> $$
> $$
> \textcolor{red}{2x + 2 = 0}
> $$
> $$
> \textcolor{red}{2x = -2}
> $$
> $$
> \textcolor{red}{\frac{2x}{2} = \frac{-2}{2}}
> $$
> $$
> \textcolor{red}{x = -1}
> $$
> Poi sostituisco $-1$ alla $x$ nella funzione di partenza per trovare la $y$ (come sopra).

Il vertice ha coordinate [$V(-1, -9)${.text-red}]

---

2. Trovare (se esistono) le intersezioni con l'asse $x$

Possono anche non esistere, cioè la parabola può essere o tutta sopra o tutta sotto l'asse delle $x$; in tal caso si disegna senza intersezioni.

Per trovare le intersezioni devo fare il sistema fra la parabola e l'asse delle $x$ (equazione $y = 0$):

$$
\textcolor{red}{\begin{cases} y = x^2 + 2x - 8 \\ y = 0 \end{cases}}
$$

$$
\textcolor{red}{\begin{cases} 0 = x^2 + 2x - 8 \\ y = 0 \end{cases}}
$$

Ogni uguaglianza può essere letta a rovescio:

$$
\textcolor{red}{\begin{cases} x^2 + 2x - 8 = 0 \\ y = 0 \end{cases}}
$$

Con la [formula ridotta](ciaab10.html) risultava molto più semplice:

$$
\textcolor{red}{\begin{cases} x_{1,2} = \frac{-2 \pm \sqrt{2^2 - 4 \cdot 1 \cdot (-8)}}{2 \cdot 1} \\ y = 0 \end{cases}}
$$

$$
\textcolor{red}{\begin{cases} x_{1,2} = \frac{-2 \pm \sqrt{36}}{2} \\ y = 0 \end{cases}}
$$

$$
\textcolor{red}{\begin{cases} x_{1,2} = \frac{-2 \pm 6}{2} \\ y = 0 \end{cases}}
$$

Ho due soluzioni: la prima

$$
\textcolor{red}{\begin{cases} x_1 = \frac{-2 - 6}{2} = -4 \\ y = 0 \end{cases}}
$$

la seconda

$$
\textcolor{red}{\begin{cases} x_2 = \frac{-2 + 6}{2} = 2 \\ y = 0 \end{cases}}
$$

I due punti di intersezione con l'asse delle $x$ sono [$A(-4, 0)${.text-red}] [$B(2, 0)${.text-red}]

---

3. Trovare l'intersezione con l'asse delle $y$

Basta fare il sistema fra la parabola e l'asse delle $y$ (equazione $x = 0$):

$$
\textcolor{red}{\begin{cases} y = x^2 + 2x - 8 \\ x = 0 \end{cases}}
$$

Sostituisco:

$$
\textcolor{red}{\begin{cases} y = 0^2 + 2 \cdot 0 - 8 = -8 \\ x = 0 \end{cases}}
$$

Il punto di intersezione con l'asse $y$ è [$C(0, -8)${.text-red}]

> **Nota:** In generale il punto di intersezione con l'asse $y$ di una funzione $y = f(x)$ ha come primo valore zero e come secondo valore il termine noto della funzione. [Perché?](ciaab1a.html)

---

4. Unire in un grafico i punti trovati

Puoi vedere qui a fianco il risultato (un po' sbilenco, la figura dovrebbe essere simmetrica e io dovrei comprarmi una tavoletta grafica).