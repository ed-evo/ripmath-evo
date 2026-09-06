# Esercizio

Calcolare la seguente potenza:
$(3x-y)^5 =$

> So che le parti letterali sono
> $a^5, a^4b, a^3b^2, a^2b^3, ab^4, b^5$
> so, dal [triangolo di Tartaglia](ad4cfaa.html) che i coefficienti sono
> $1, 5, 10, 10, 5, 1$
> quindi vale la regola
> $$
> (a+b)^5 = a^5 + 5a^4b + 10a^3b^2 + 10a^2b^3 + 5ab^4 + b^5
> $$
> al posto di $a$ ho $3x$ ed al posto di $b$ ho $-y$
> quindi vado a sostituire nella regola

$(3x-y)^5 = [3x+(-y)]^5 =$

$$
(3x)^5 + 5(3x)^4(-y) + 10(3x)^3(-y)^2 + 10(3x)^2(-y)^3 + 5(3x)(-y)^4 + (-y)^5 =
$$

$$
243x^5 + 5 \cdot 81x^4(-y) + 10 \cdot 27x^3(+y^2) + 10 \cdot 9x^2(-y^3) + 5 \cdot 3x(+y^4) + (-y^5) =
$$

$$
243x^5 - 405x^4y + 270x^3y^2 - 90x^2y^3 + 15xy^4 - y^5
$$

quindi

$(3x-y)^5 = 243x^5 - 405x^4y + 270x^3y^2 - 90x^2y^3 + 15xy^4 - y^5$