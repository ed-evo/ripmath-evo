# Asse radicale di un fascio di circonferenze

Consideriamo il fascio di circonferenze

$$
(1+k)x^2 + (1+k)y^2 + x(a_1 + ka_2) + y(b_1 + kb_2) + c_1 + kc_2 = 0
$$

tra le varie circonferenze del fascio scegliamo quella data da $$k = -1$$

$$
(1-1)x^2 + (1-1)y^2 + x(a_1 - a_2) + y(b_1 - b_2) + c_1 - c_2 = 0
$$

Ottengo

$$
(a_1 - a_2)x + (b_1 - b_2)y + c_1 - c_2 = 0
$$

Questa è un'equazione di primo grado che rappresenta una retta: tale retta è l'asse radicale del fascio.

Puoi pensare l'asse radicale come una circonferenza di raggio infinito, quindi anche questa è una circonferenza: la **circonferenza degenere** del fascio.

***

In effetti la circonferenza degenere è effettivamente una circonferenza del fascio, infatti indicata con $$C$$ una delle circonferenze di base e con $$C'$$ l'altra, abbiamo che posso scrivere il fascio come

$$
C + kC' = 0
$$

e posso indicare l'asse radicale come

$$
C - C' = 0
$$

Prendo l'equazione del fascio con $$h$$ al posto di $$k$$

$$
C + hC' = 0
$$

aggiungo e tolgo $$hC$$

$$
C + hC' + hC - hC = 0
$$

ordino

$$
C + hC + hC' - hC = 0
$$

raccogliendo i termini due a due

$$
C(1+h) + h(C' - C) = 0
$$

$$
C + \frac{h}{1+h}(C' - C) = 0
$$

Ora chiamo

$$
\frac{h}{1+h} = k
$$

ed ottengo

$$
C + k(C - C') = 0
$$

Cioè posso semplificare un po' l'equazione del fascio sostituendo a una delle due equazioni di circonferenza l'asse radicale del fascio stesso.

***

> **Esempio:** considero il fascio della pagina precedente
>
> $$
> x^2 + y^2 - 2y - 1 + k(x^2 + y^2 + 2x + 1) = 0
> $$
>
> l'asse radicale lo trovo ponendo $$k = -1$$
>
> $$
> x^2 + y^2 - 2y - 1 - 1(x^2 + y^2 + 2x + 1) = 0
> $$
>
> ottengo
>
> $$
> -2x - 2y - 2 = 0
> $$
>
> o meglio, dividendo per $$2$$ e cambiando di segno
>
> $$
> x + y + 1 = 0
> $$
>
> Posso quindi sostituire all'equazione originale del fascio l'equazione:
>
> $$
> x^2 + y^2 - 2y - 1 + k(x + y + 1) = 0
> $$