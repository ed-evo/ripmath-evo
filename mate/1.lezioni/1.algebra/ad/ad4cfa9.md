# [Esercizio]{.text-pink}

Calcolare la seguente potenza

$$
(2x^2 + y^3)^6 =
$$

> Per la regola: so che le parti letterali sono
> [$$a^6, a^5b, a^4b^2, a^3b^3, a^2b^4, ab^5, b^6$$]{.text-red}
> so, dal [triangolo di Tartaglia](ad4cfaa.html) che i coefficienti sono
> **1, 6, 15, 20, 15, 6, 1**
> quindi vale la regola
> [$$(a+b)^6 = a^6 + 6a^5b + 15a^4b^2 + 20a^3b^3 + 15a^2b^4 + 6ab^5 + b^6$$]{.text-red}
> al posto di [$$a$$]{.text-red} ho [$$2x^2$$]{.text-red} ed al posto di [$$b$$]{.text-red} ho [$$y^3$$]{.text-red}
> quindi vado a sostituire nella regola

$$
(2x^2 + y^3)^6 =
$$

$$
(2x^2)^6 + 6(2x^2)^5(y^3) + 15(2x^2)^4(y^3)^2 + 20(2x^2)^3(y^3)^3 + 15(2x^2)^2(y^3)^4 + 6(2x^2)(y^3)^5 + (y^3)^6 =
$$

$$
64x^{12} + 6 \cdot 32x^{10}(y^3) + 15 \cdot 16x^8(y^6) + 20 \cdot 8x^6(y^9) + 15 \cdot 4x^4(y^{12}) + 6 \cdot 2x^2(y^{15}) + y^{18} =
$$

$$
64x^{12} + 192x^{10}y^3 + 240x^8y^6 + 160x^6y^9 + 60x^4y^{12} + 12x^2y^{15} + y^{18}
$$

quindi

$$
\textcolor{red}{(2x^2 + y^3)^6 = 64x^{12} + 192x^{10}y^3 + 240x^8y^6 + 160x^6y^9 + 60x^4y^{12} + 12x^2y^{15} + y^{18}}
$$