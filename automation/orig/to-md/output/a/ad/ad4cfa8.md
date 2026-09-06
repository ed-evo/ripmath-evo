# <span class="text-red-600">Esercizio</span>

Calcolare la seguente potenza
$$
(x - 2y)^6 =
$$

> Per la regola: so che le parti letterali sono $a^6, a^5b, a^4b^2, a^3b^3, a^4b^2, ab^5, b^6$, so, dal [triangolo di Tartaglia](ad4cfaa.html) che i coefficienti sono $1, 6, 15, 20, 15, 6, 1$
>
> quindi vale la regola
> $$
> (a+b)^6 = a^6 + 6a^5b + 15a^4b^2 + 20a^3b^3 + 15a^2b^4 + 6ab^5 + b^6
> $$
> al posto di $a$ ho $x$ ed al posto di $b$ ho $-2y$
>
> quindi vado a sostituire nella regola

$$
(x-2y)^6 = [x+(-2y)]^6 =
$$

$$
(x)^6 + 6(x)^5(-2y) + 15(x)^4(-2y)^2 + 20(x)^3(-2y)^3 + 15(x)^2(-2y)^4 + 6(x)(-2y)^5 + (-2y)^6 =
$$

$$
x^6 + 6x^5(-2y) + 15x^4(+4y^2) + 20x^3(-8y^3) + 15x^2(+16y^4) + 6x(-32y^5) + (+64y^6) =
$$

$$
x^6 - 12x^5y + 60x^4y^2 - 160x^3y^3 + 240x^2y^4 - 192xy^5 + 64y^6
$$

quindi
$$
(x-2y)^6 = x^6 - 12x^5y + 60x^4y^2 - 160x^3y^3 + 240x^2y^4 - 192xy^5 + 64y^6
$$