# <span class="text-red-600">Caso del polinomio a coefficienti letterali</span>

Quando i coefficienti sono dei termini letterali si procede sempre nello stesso modo, ma con molta attenzione; ad esempio proviamo a scomporre:

$$
x^3 - 3b^2x^2 + b^4x + b^6
$$

Trovo i divisori di Ruffini. I divisori del termine noto sono:

$ +1, -1, +b, -b, +b^2, -b^2, +b^3, -b^3, +b^4, -b^4, +b^5, -b^5, +b^6, -b^6 $

Provo i divisori:

$$
(x-1); P(1) = 1^3 - 3b^2(1)^2 + b^4(1) + b^6 = 1 - 3b^2 + b^4 + b^6 \neq 0
$$

$$
(x+1); P(-1) = (-1)^3 - 3b^2(-1)^2 + b^4(-1) + b^6 = - 1 - 3b^2 - b^4 + b^6 \neq 0
$$

$$
(x-b); P(b) = b^3 - 3b^2(b)^2 + b^4(b) + b^6 = b^3 - 3b^4 + b^5 + b^6 \neq 0
$$

$$
(x+b); P(-b) = (-b)^3 - 3b^2(-b)^2 + b^4(-b) + b^6 = - b^3 - 3b^4 - b^5 + b^6 \neq 0
$$

$$
(x-b^2); P(b^2) = (b^2)^3 - 3b^2(b^2)^2 + b^4(b^2) + b^6 = b^6 - 3b^6 + b^6 + b^6 = 0
$$

Quindi $(x - b^2)$ è un divisore, di conseguenza:

$$
x^3 - 3b^2x^2 + b^4x + b^6 = (x-b^2)(x^2 - 2b^2x - b^4)
$$

Adesso devo vedere se posso scomporre:

$$
x^2 - 2b^2x - b^4
$$

I possibili divisori sono:

$ +1, -1, +b, -b, +b^2, -b^2, +b^3, -b^3, +b^4, -b^4 $

Però $+1, -1, +b, -b$ li abbiamo già provati; quindi ripartiamo da $b^2$:

$$
(x-b^2); P(b^2) = (b^2)^2 - 2b^2(b^2) - b^4 = b^4 - 2b^4 - b^4 \neq 0
$$

$$
(x+b^2); P(-b^2) = (-b^2)^2 - 2b^2(-b^2) - b^4 = b^4 + 2b^4 - b^4 \neq 0
$$

$$
(x-b^3); P(b^3) = (b^3)^2 - 2b^2(b^3) - b^4 = b^6 - 2b^5 - b^4 \neq 0
$$

$$
(x+b^3); P(-b^3) = (-b^3)^2 - 2b^2(-b^3) - b^4 = b^6 + 2b^5 - b^4 \neq 0
$$

$$
(x-b^4); P(b^4) = (b^4)^2 - 2b^2(b^4) - b^4 = b^8 - 2b^6 - b^4 \neq 0
$$

$$
(x+b^4); P(-b^4) = (-b^4)^2 - 2b^2(-b^4) - b^4 = b^8 + 2b^6 - b^4 \neq 0
$$

Quindi il polinomio non è più scomponibile e il risultato della scomposizione è:

$$
x^3 - 3b^2x^2 + b^4x + b^6 = (x-b^2)(x^2 - 2b^2x - b^4)
$$

> **Esercizio:** prova a scomporre
>
> $$
> x^2 - (a+2b)x + 2ab =
> $$
>
> notando che $-(a+2b)$ è un unico coefficiente.

[Pagina iniziale](../../../index.html) | [Indice di algebra](../../a.html) | [Pagina successiva](ad6ba4.html) | [Pagina precedente](ad6ba2.html)