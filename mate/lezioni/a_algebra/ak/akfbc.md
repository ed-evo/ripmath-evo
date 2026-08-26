# Due radici cubiche al denominatore

Vediamo su un esempio

$$
\textcolor{blue}{\frac{c}{\sqrt[3]{a} + \sqrt[3]{b}}}
$$

Siccome dobbiamo eliminare le radici cubiche ci riferiamo alle formule

$$
\textcolor{red}{(x + y) (x^2 - xy + y^2) = x^3 + y^3}
$$

$$
\textcolor{red}{(x - y) (x^2 + xy + y^2) = x^3 - y^3}
$$

Quindi per risolvere basterà sostituire $\sqrt[3]{a}$ al posto di $x$ e $\sqrt[3]{b}$ al posto di $y$ e poi moltiplicare numeratore e denominatore in modo da far sparire le radici cubiche nel seguente modo

$$
\textcolor{blue}{(\sqrt[3]{a} + \sqrt[3]{b}) [(\sqrt[3]{a})^2 - \sqrt[3]{a}\sqrt[3]{b} + (\sqrt[3]{b})^2] = (\sqrt[3]{a})^3 + (\sqrt[3]{b})^3 = a+b}
$$

$$
\textcolor{blue}{(\sqrt[3]{a} - \sqrt[3]{b}) [(\sqrt[3]{a})^2 + \sqrt[3]{a}\sqrt[3]{b} + (\sqrt[3]{b})^2] = (\sqrt[3]{a})^3 - (\sqrt[3]{b})^3 = a-b}
$$

***

- Cioè se hai una somma di due radici cubiche $\textcolor{red}{\sqrt[3]{a} + \sqrt[3]{b}}$, devi moltiplicare numeratore e denominatore per $\textcolor{red}{\sqrt[3]{a^2} - \sqrt[3]{ab} + \sqrt[3]{b^2}}$.
- Mentre se hai una differenza di radici cubiche $\textcolor{red}{\sqrt[3]{a} - \sqrt[3]{b}}$, devi moltiplicare numeratore e denominatore per $\textcolor{red}{\sqrt[3]{a^2} + \sqrt[3]{ab} + \sqrt[3]{b^2}}$.

***

Vediamolo in alcuni esercizi

$$
\textcolor{blue}{\frac{2}{\sqrt[3]{2} + \sqrt[3]{3}}}
$$
[Soluzione](akfbc01.html)

$$
\textcolor{blue}{\frac{3}{\sqrt[3]{5} - \sqrt[3]{2}}}
$$
[Soluzione](akfbc02.html)