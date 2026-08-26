# discussione con metodo grafico

Qui devi essere abbastanza "esperto" di geometria cartesiana: il problema si può scomporre di solito nell'intersezione o fra una retta ed una parabola, oppure fra due parabole, od anche, soprattutto nei problemi trigonometrici nell'intersezione fra una retta ed una circonferenza: una delle due, possibilmente la retta, varierà al variare del parametro $k$, intersecando l'altra curva in uno, nessuno o due punti. Queste intersezioni nelle parti di figura comprese nei limiti, forniranno le soluzioni.

Per ora ci limiteremo ad un semplice esempio, rimandando alla seconda stesura del sito lo studio dei vari casi possibili.

---

discutere al variare del parametro $k$ l'equazione
[$x^2 - 3x + 2k - 1 = 0$]{.text-red} con i limiti [$-2 < x \leq 4$]{.text-red}

qui siamo abbastanza liberi: dobbiamo trasportare dopo l'uguale una parte dell'equazione in modo da avere l'uguaglianza fra due curve note di cui una fissa (cioè una senza il parametro)
i punti comuni alle due curve nei limiti richiesti saranno le soluzioni cercate.

---

potrei prendere:
- [$x^2 - 3x - 1 = -2k$]{.text-red} la parabola fissa $y = x^2 - 3x - 1$ con la retta variabile $y = -2k$
- [$x^2 - 3x = 1 - 2k$]{.text-red} la parabola fissa $y = x^2 - 3x$ con la retta variabile $y = 1 - 2k$
- [$x^2 = 3x + 1 - 2k$]{.text-red} la parabola fissa $y = x^2$ con la retta variabile $y = 3x + 1 - 2k$
- [$x^2 + 2k = 3x + 1$]{.text-red} la parabola variabile $y = x^2 + 2k$ con la retta fissa $y = 3x + 1$
- [$x^2 + 2k - 1 = 3x$]{.text-red} la parabola variabile $y = x^2 + 2k - 1$ con la retta fissa $y = 3x$
- [$x^2 - 3x + 2k = 1$]{.text-red} la parabola variabile $y = x^2 - 3x + 2k$ con la retta fissa $y = 1$

---

Prendiamo quella che ci sembra più semplice:
[$x^2 = 3x + 1 - 2k$]{.text-red}
la parabola fissa $y = x^2$ con la retta variabile $y = 3x + 1 - 2k$

[$y = x^2$]{.text-blue}
[$y = 3x + 1 - 2k$]{.text-blue}

Disegniamo la curva [$y = x^2$]{.text-blue}: è una parabola con il vertice nell'origine e prendiamone solo la parte che ci interessa, cioè per $-2 < x \leq 4$.
Troviamo i valori al limite sostituendo nella $x$ della parabola i valori limite: otteniamo i punti
$A(-2, 4)$ $B(4, 16)$

adesso prendiamo la retta [$y = 3x + 1 - 2k$]{.text-blue}; notiamo che varia solamente il termine noto; quindi l'equazione rappresenta un fascio di rette parallele. Cominciamo col disegnare la retta del fascio che passa per l'origine [$y = 3x$]{.text-blue} e mettiamola nel grafico; ad essa corrisponde il valore di $k$:
[$(termine \ noto = 0) \quad 1 - 2k = 0 \quad k = 1/2$]{.text-blue}

> non sarebbe necessario fare il passaggio per l'origine ma ti può aiutare a capire meglio il problema: adesso devi pensare di spostare la retta parallelamente a se stessa in modo che passi per il punto $A$, per il punto $B$ e per il punto di tangenza e contare quante sono le intersezioni con l'arco di parabola.
> 
> nella prossima figura prendo solo le rette necessarie.

Facciamo il passaggio per il punto $A(-2, 4)$ e troviamo il valore di $k$: basta sostituire nella retta ad $x$ il valore $-2$ e ad $y$ il valore $4$:
[$4 = 3(-2) + 1 - 2k$]{.text-blue}
[$4 = -5 - 2k$]{.text-blue}
[$2k = -9$]{.text-blue}
[$k = -9/2$]{.text-blue}

Facciamo il passaggio per il punto $B(4, 16)$ e troviamo il valore di $k$: basta sostituire nella retta ad $x$ il valore $4$ e ad $y$ il valore $16$:
[$16 = 3(4) + 1 - 2k$]{.text-blue}
[$16 = 13 - 2k$]{.text-blue}
[$2k = -3$]{.text-blue}
[$k = -3/2$]{.text-blue}

Troviamo ora il valore di $k$ quando la retta è tangente: basterà risolvere il sistema tra la retta e la parabola (cioè prendere l'equazione iniziale) e porre il discriminante uguale a zero:
[$x^2 - 3x + 2k - 1 = 0$]{.text-blue}
[$a = 1 \quad b = -3 \quad c = 2k - 1$]{.text-blue}
[$b^2 - 4ac = 0$]{.text-blue}
[$(-3)^2 - 4(1)(2k - 1) = 0$]{.text-blue}
[$9 - 8k + 4 = 0$]{.text-blue}
[$-8k = -13$]{.text-blue}
[$k = 13/8$]{.text-blue}

quindi abbiamo:
Una soluzione per [$-9/2 < k < -3/2$]{.text-red}
Due soluzioni per [$-3/2 \leq k \leq 13/8$]{.text-red}

> **Nota:** Per i segni di minore e di minore uguale, siccome abbiamo $-2 < x \leq 4$ il punto $B$ è da considerare valido per la soluzione, mentre il punto $A$ non dà soluzioni.