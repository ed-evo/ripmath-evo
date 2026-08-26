$$
\int \frac{x}{\sqrt[5]{x^4}} \, dx + \int \frac{1}{x^2 \sqrt[3]{x^2}} \, dx =
$$

Voglio trasformare i radicali in forma esponenziale: cioè voglio scriverli come $x$ con esponente una frazione con denominatore l'indice della radice e con numeratore la potenza del radicando; inoltre per portare da sotto a sopra il segno di frazione (o viceversa) qualunque termine basterà cambiarne di segno l'esponente.

- nel primo termine ho
$$
\frac{x}{\sqrt[5]{x^4}} = \frac{x^1}{x^{4/5}} = x^1 \cdot x^{-4/5} = x^{1/5}
$$

- nel secondo termine devo prima portare la $x^2$ da fuori a dentro radice (basta moltiplicare l'esponente della $x$ per l'indice di radice)
$$
\frac{1}{x^2 \sqrt[3]{x^2}} = \frac{1}{\sqrt[3]{x^8}} = \frac{1}{x^{8/3}} = x^{-8/3}
$$

quindi ottengo

$$
\int x^{1/5} \, dx + \int x^{-8/3} \, dx
$$