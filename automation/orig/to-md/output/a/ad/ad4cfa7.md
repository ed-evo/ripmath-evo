# Esercizio

Calcolare la seguente potenza
$$
(2a^2 - 3b)^5 =
$$

> So che le parti letterali sono
> $a^5, \quad a^4b, \quad a^3b^2, \quad a^2b^3, \quad ab^4, \quad b^5$
> So, dal [triangolo di Tartaglia](ad4cfaa.html) che i coefficienti sono
> **1, 5, 10, 10, 5, 1**
> quindi vale la regola
>
> $$
> (a+b)^5 = a^5 + 5a^4b + 10a^3b^2 + 10a^2b^3 + 5ab^4 + b^5
> $$
>
> Adesso devi stare attento a non fare confusione fra la **a** e la **b** della regola ed il $2a^2$ ed il $-3b$ dell'esercizio, per non sbagliare metto $(2a^2)$ e $(-3b)$ con le parentesi (quando hai imparato bene fallo solo mentalmente)
> al posto di <span class="text-red-500">**a**</span> ho <span class="text-red-500">**$(2a^2)$**</span> ed al posto di <span class="text-red-500">**b**</span> ho <span class="text-red-500">**$(-3b)$**</span>
> quindi vado a sostituire nella regola

$$
(2a^2 - 3b)^5 = [(2a^2) + (-3b)]^5 =
$$

$$
(2a^2)^5 + 5(2a^2)^4(-3b) + 10(2a^2)^3(-3b)^2 + 10(2a^2)^2(-3b)^3 + 5(2a^2)(-3b)^4 + (-3b)^5 =
$$

$$
32a^{10} + 5 \cdot 16a^8(-3b) + 10 \cdot 8a^6(+9b^2) + 10 \cdot 4a^4(-27b^3) + 5 \cdot 2a^2(+81b^4) + (-243b^5) =
$$

$$
32a^{10} - 240a^8b + 720a^6b^2 - 1080a^4b^3 + 810a^2b^4 - 243b^5
$$

quindi
$$
(2a^2 - 3b)^5 = 32a^{10} - 240a^8b + 720a^6b^2 - 1080a^4b^3 + 810a^2b^4 - 243b^5
$$