# [Definizione di fascio di circonferenze]{.text-red}

Diremo che abbiamo un fascio di circonferenze se, all'interno dell'equazione, esiste un parametro che può variare senza alterare le condizioni per cui l'equazione è una circonferenza.

> Equivale a dire che quando il parametro varia, non devono mutare le condizioni per cui l'equazione rappresenta una circonferenza (di solito basta controllare la prima condizione: i coefficienti di $x^2$ e $y^2$ devono essere uguali).
> Trovi le condizioni in fondo alla pagina [Equazione generale della circonferenza](ddcb.html).

Ad esempio:
Consideriamo l'equazione

$$
(1+k)x^2 + (1+k)y^2 + 2kx - 2y + k - 1 = 0
$$

Controllo che i coefficienti di $x^2$ e $y^2$ siano uguali: $(1+k) = (1+k)$.

Posso separare i termini contenenti $k$ da quelli che non lo contengono ed ottengo

$$
x^2 + y^2 - 2y - 1 + k(x^2 + y^2 + 2x + 1) = 0
$$

Si tratta della combinazione lineare di due circonferenze che, per ogni $k$, mi danno una circonferenza particolare;

se $k = 0$ ottengo la circonferenza

$$
x^2 + y^2 - 2y - 1 = 0
$$

se $k = \infty$ ottengo la circonferenza

$$
x^2 + y^2 + 2x + 1 = 0
$$

> Infatti se $k$ tende a $\infty$ allora il termine con $k$ diventa preponderante ed il termine senza $k$ diventa trascurabile e si annulla per il valore $k = \infty$.

Viene allora spontaneo chiamare **fascio di circonferenze** l'insieme, al variare di $k$, rappresentato dal sistema

$$
\begin{cases} (1+k)x^2 + (1+k)y^2 + x(a_1 + ka_2) + y(b_1 + kb_2) + c_1 + kc_2 = 0 \\ x^2 + y^2 + a_2x + b_2y + c_2 = 0 \end{cases}
$$

od anche, per semplicità (ma con meno [precisione](ddciaa.html)) dall'equazione

$$
(1+k)x^2 + (1+k)y^2 + x(a_1 + ka_2) + y(b_1 + kb_2) + c_1 + kc_2 = 0
$$

> Le due circonferenze
> $$
> x^2 + y^2 + a_1x + b_1y + c_1 = 0
> $$
> $$
> x^2 + y^2 + a_2x + b_2y + c_2 = 0
> $$
> Saranno chiamate circonferenze di base del fascio.
> Comunque lo stesso fascio si può ottenere considerando due qualunque circonferenze del fascio stesso come circonferenze di base; e, per ottenere una circonferenza del fascio, basterà sostituire a $k$ un valore qualsiasi.